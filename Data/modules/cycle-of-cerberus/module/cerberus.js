
Hooks.on("init", () => {
	game.settings.register("cycle-of-cerberus", "imported", {
		scope: "world",
		config: false,
		type: Boolean,
		default: false
	});
})

Hooks.on("renderCompendium", (app, html, data) => {
	if ( data.collection.startsWith("cycle-of-cerberus.") && !game.settings.get("cycle-of-cerberus", "imported") ) {
		Dialog.confirm({
			title: "Cycle Of Cerberus Importer",
			content: "<p>Welcome to the <strong>Cycle of Cerberus</strong> adventure module. Would you like to import all adventure content to your World?",
			yes: () => importLabors()
		});
	}
});

/**
 * Import content for all the labors
 */
async function importLabors() {
	const module = game.modules.get("cycle-of-cerberus");
	for ( let p of module.packs ) {
		const pack = game.packs.get("cycle-of-cerberus."+p.name);
		if ( p.entity !== "Playlist" ) await importAll(pack);
		else {
			const music = await pack.getContent();
			Playlist.create(music.map(p => p.data));
		}
	}

	// Re-associate Tokens for all scenes
	const scenes = game.folders.getName(module.packs.find(p => p.entity === "Scene").label).entities;
	const actors = game.folders.getName(module.packs.find(p => p.entity === "Actor").label).entities;
	const sceneUpdates = [];
	for ( let s of scenes ) {
		const tokens = s.data.tokens.map(t => {
			const a = actors.find(a => a.name === t.name)
			t.actorId = a ? a.id : null;
			return t;
		});
		sceneUpdates.push({_id: s.id, tokens});
	}
	await Scene.update(sceneUpdates);

	// Activate the splash page
	const s0 = game.scenes.getName("The Cycle of Cerberus");
	s0.activate();

	// Display the introduction
	const j1 = game.journal.getName("A1. Adventure Introduction");
	if ( j1 ) j1.sheet.render(true, {sheetMode: "text"});
	return game.settings.set("cycle-of-cerberus", "imported", true);
}


/**
 * This function is a shim until the 0.7.0 verison is release-ready
 */
async function importAll(pack, {folderId, folderName}={}) {

  // Step 1 - create a folder
  const folder = folderId ? game.folders.get(folderId, {strict: true}) : await Folder.create({
    name: folderName || pack.metadata.label,
    type: pack.entity,
    parent: null
  });

  // Step 2 - load all content
  const entities = await pack.getContent();
  ui.notifications.info(game.i18n.format("Importing {number} {type} entries into the {folder} folder. Please be patient.", {
    number: entities.length,
    type: pack.entity,
    folder: folder.name
  }));

  // Step 3 - import all content
  const created = await pack.cls.create(entities.map(e => {
    e.data.folder = folder.id;
    return e.data;
  }));
  ui.notifications.info(game.i18n.format("Successfully imported {number} {type} entries into the {folder} folder.", {
    number: created.length,
    type: pack.entity,
    folder: folder.name
  }));
  return created;
}
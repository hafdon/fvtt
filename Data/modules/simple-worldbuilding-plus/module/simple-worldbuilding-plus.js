import { SwpUtility } from './utility.js';
import { SwpActor } from './actor-overrides.js';
import { SwpActorSheet } from './actor-sheet-overrides.js';
import { SimpleActorSheet } from '../../../systems/worldbuilding/module/actor-sheet.js';

Hooks.once('init', async function() {
  game.SimpleWorldbuildingPlus = {};

  // Add support for derived attributes on the Simple World-building system.
  if (game.data.system.id == 'worldbuilding') {
    CONFIG.Actor.entityClass = SwpActor;

    // Replace the actor sheet with a customized version.
    Actors.unregisterSheet("core", ActorSheet);
    Actors.unregisterSheet("dnd5e", SimpleActorSheet);
    Actors.unregisterSheet("worldbuilding", SimpleActorSheet);
    Actors.registerSheet("worldbuilding", SwpActorSheet, { makeDefault: true });
    Actors.registerSheet("worldbuilding", SimpleActorSheet, { makeDefault: false });
  }
});

Hooks.once('ready', async function() {
  SwpUtility.updateTinyMCETemplates(true);

  // TODO: Handle keys for all systems.
  // // Update rolldata method.
  // const original = Actor.prototype.getRollData;
  // Actor.prototype.getRollData = function() {
  //   // Use the actor by default.
  //   let actor = this;

  //   // Use the current token if possible.
  //   let token = canvas.tokens.controlled.find(t => t.actor.data._id == this.data._id);
  //   if (token) {
  //     actor = token.actor;
  //   }

  //   const data = original.call(actor);

  //   // // Iterate through the derived values.
  //   // for (let modifier of game.SimpleWorldbuildingPlus.modifiers) {
  //   //   let props = modifier.key.split('.');
  //   //   if (!data.d) {
  //   //     data.d = {};
  //   //   }

  //   //   if (!data.d[props[0]]) {
  //   //     data.d[props[0]] = {};
  //   //   }

  //   //   data.d[props[0]][props[1]] = SimpleWorldbuildingPlusUtility._replaceData(modifier.formula, data);
  //   // }

  //   // console.log(data);

  //   return data;
  // }

});

Hooks.on('updateJournalEntry', async (entity, data, options, id) => {
  SwpUtility.updateTinyMCETemplates();
});

Hooks.on('renderActorSheet', (app, html, data) => {
  let content = html.find('.editor-content');

  if (content.length > 0) {
    let token = app.object.token;
    let actor = token ? token.actor : app.object;
    let util = new SwpUtility();
    let newContent = util.replaceBracketAttributes(content.html(), actor.getRollData());

    content.html(newContent);

    // Add support for custom roll buttons.
    html.find('.inline-roll-plus').on('click', event => {
      let target = event.currentTarget;
      let formula = event.currentTarget.dataset.roll.split('#');
      let roll = new Roll(formula[0].trim(), actor.getRollData());
      roll.roll().toMessage({
        flavor: formula[1] ? formula[1].trim() : null
      });
    });
  }
});
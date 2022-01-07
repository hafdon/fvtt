import {SharedConsts} from "../shared/SharedConsts.js";

class PatcherRollData {
	static getAdditionalRollDataBase (entity) {
		// Add info from the user's character
		// `@srd5e.userchar.id`, etc.
		const pb = game.user.character?.data?.data?.attributes?.prof;
		let spellAttackRanged; let spellAttackMelee = null;
		if (game.user.character) {
			const scAbility = game.user.character ? game.user.character.data?.data.attributes.spellcasting || "int" : null;
			const baseMod = (game.user.character.data?.data?.abilities?.[scAbility].mod ?? 0)
				+ (pb ?? 0);
			spellAttackRanged = baseMod + Number(game.user.character.data?.data?.bonuses?.rsak?.attack) || 0;
			spellAttackMelee = baseMod + Number(game.user.character.data?.data?.bonuses?.msak?.attack) || 0;
		}

		return {
			// Add `@name` as the entity's name
			name: entity.name,
			[SharedConsts.MODULE_NAME_FAKE]: {
				name: {
					// Add `@srd5e.name.<scrubbed entity name>`
					[entity.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")]: 1,
				},
				user: {
					id: game.user.id,
				},
				userchar: {
					id: game.user.character?.id,
					pb,
					classes: game.user.character?.data?.data?.classes || {},
					spellAttackRanged,
					spellAttackMelee,
				},
			},
		};
	}
}

export {PatcherRollData};

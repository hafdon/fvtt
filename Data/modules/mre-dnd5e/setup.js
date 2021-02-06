import { MODULE_TITLE, MODULE_TITLE_SHORT } from "./scripts/const.js";
import { patchAbilityChecks } from "./scripts/patches/ability-check-patches.js";
import { patchItemBaseRoll } from "./scripts/patches/item-base-roll-patch.js";
import { patchItemRollDamage } from "./scripts/patches/item-damage-patch.js";
import { patchItemPrepareData, patchItemSheetGetData } from "./scripts/patches/initialize-formula-groups.js";
import { patchTokenFromActor } from "./scripts/patches/token-from-actor-patch.js";
import { registerSettings } from "./scripts/settings.js";

Hooks.on("setup", () => {
    console.log(`${MODULE_TITLE_SHORT} | Initializing ${MODULE_TITLE}`);
    registerSettings();
    patchAbilityChecks();
    patchItemBaseRoll()
    patchItemRollDamage();
    patchItemPrepareData();
    patchItemSheetGetData();
    patchTokenFromActor();
});

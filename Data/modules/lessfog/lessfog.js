// Import JavaScript modules
import { registerSettings } from './module/settings.js';
import { libWrapper } from "./module/shim.js";

CONFIG.LESSFOG = { NOFURNACE: true };

/**
 * Set unexplored fog alpha for GMs only (unless configured).
 * @param {number} unexploredDarkness - number between 0 and 1
 */
export function setUnexploredForPermitted(unexploredDarkness) {
    if (game.user.isGM || game.settings.get("lessfog", "affect_all")) {
        if (isNewerVersion('0.7.6', game.data.version)) {
            canvas.sight.fog.unexplored.alpha = unexploredDarkness;
        } else {
            CONFIG.Canvas.unexploredColor = PIXI.utils.rgb2hex([1 - unexploredDarkness, 1 - unexploredDarkness, 1 - unexploredDarkness]);
            canvas.sight.refresh();
        }
    }
}

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once('init', async function () {
    console.log('lessfog | Initializing lessfog');

    // Register custom module settings
    registerSettings();

    // set lighting levels to configured values
    CONFIG.Canvas.lightLevels.dim = 1 - game.settings.get("lessfog", "dim_darkness");
    const exploredDarkness = 1 - game.settings.get("lessfog", "explored_darkness");
    CONFIG.Canvas.exploredColor = PIXI.utils.rgb2hex([exploredDarkness, exploredDarkness, exploredDarkness]);
    CONFIG.Canvas.daylightColor = parseInt(game.settings.get("lessfog", "daylight_color").substring(1, 7), 16)
    CONFIG.Canvas.darknessColor = parseInt(game.settings.get("lessfog", "darkness_color").substring(1, 7), 16)

});

/* ------------------------------------ */
/* Setup module							*/
/* ------------------------------------ */
Hooks.once('setup', function () {
    // Determine whether legacy Furnace module is active
    if (game.modules.get("furnace")?.active) {
        if (isNewerVersion('2.6.1', game.modules.get("furnace").data.version.match(/[\d.]/g).join(''))) {
            CONFIG.LESSFOG.NOFURNACE = false;
        }
    }

    // Disable sight layer's token vision if GM and option enabled
    if (CONFIG.LESSFOG.NOFURNACE) {
        libWrapper.register('lessfog', 'SightLayer.prototype.tokenVision', function (wrapped, ...args) {
            return (game.user.isGM && game.settings.get("lessfog", "showAllToGM")) ? false : wrapped(...args);
        }, 'MIXED');
    }
});

/* ------------------------------------ */
/* When Canvas is ready					*/
/* ------------------------------------ */
Hooks.once('canvasReady', function () {
    const unexploredDarkness = game.settings.get("lessfog", "unexplored_darkness");
    setUnexploredForPermitted(unexploredDarkness);
})

/* ------------------------------------ */
/* Additional Hooks                     */
/* ------------------------------------ */

Hooks.on('getSceneControlButtons', controls => {
    if (CONFIG.LESSFOG.NOFURNACE) {
        let tokenButton = controls.find(b => b.name == "token")
        if (tokenButton) {
            tokenButton.tools.push({
                name: "vision",
                title: "Toggle GM Vision",
                icon: "far fa-eye-slash",
                toggle: true,
                active: game.settings.get("lessfog", "showAllToGM"),
                visible: game.user.isGM,
                onClick: (value) => game.settings.set("lessfog", "showAllToGM", value)
            });
        }
    }
});

// Keep GM's visibility of unexplored areas relatively constant when darkness levels change.
Hooks.on("lightingRefresh", () => {
    setUnexploredForPermitted(game.settings.get("lessfog", "unexplored_darkness") * (1 - (canvas.lighting.darknessLevel / 4)));
});

// Allow the GM to see all tokens.
Hooks.on("sightRefresh", layer => {
    if (!game.modules.get("levels")?.active) {
        for (let t of canvas.tokens.placeables) {
            t.visible = (!layer.tokenVision && !t.data.hidden) || (game.settings.get("lessfog", "reveal_tokens") && (game.user.isGM || game.settings.get("lessfog", "affect_all"))) || t.isVisible;
        }
    }
});

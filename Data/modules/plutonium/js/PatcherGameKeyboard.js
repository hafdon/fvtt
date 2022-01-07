import {libWrapper, UtilLibWrapper} from "./PatcherLibWrapper.js";
import {SharedConsts} from "../shared/SharedConsts.js";
import {Config} from "./Config.js";
import {Menu} from "./Menu.js";
import {UtilApplications} from "./UtilApplications.js";

class Patcher_GameKeyboard {
	static init () {
		libWrapper.register(
			SharedConsts.MODULE_NAME,
			"game.keyboard._onEscape",
			function (fn, event, up, modifiers) {
				// Add handling for 5etools modals in either case
				if (!Config.get("ui", "isFixEscapeKey")) {
					if (UiUtil._MODAL_STACK && UiUtil._MODAL_STACK.length) return;
					return fn(event, up, modifiers);
				}

				return Patcher_GameKeyboard._onEscape.bind(this)(event, up, modifiers);
			},
			UtilLibWrapper.LIBWRAPPER_MODE_MIXED,
		);
	}

	static _onEscape (event, up, modifiers) {
		if (UiUtil._MODAL_STACK && UiUtil._MODAL_STACK.length) return;

		/* eslint-disable */
		if (up) return;

		// Plutonium: If the game menu is open, close it
		if (ui.menu.element && ui.menu.element?.[0]?.style?.display === "") {
			ui.menu.toggle();
			return;
		}

		// Plutonium: Make ESC de-focus input fields
		if (modifiers.hasFocus && Patcher_GameKeyboard._ELEMENTS_WITH_FOCUS.has(event.target.nodeName)) {
			event.target.blur();
			return;
		}

		// Save fog of war if there are pending changes
		if (canvas.ready) canvas.sight.saveFog();

		// Case 1 - dismiss an open context menu
		if (ui.context && ui.context.menu.length) ui.context.close();

		// Plutonium: dismiss an open context menu
		else if (Menu.closeAllMenus()) return;

		// Case 2 - release controlled objects (if not in a preview)
		else if (canvas.ready && Object.keys(canvas.activeLayer._controlled).length) {
			event.preventDefault();
			if (!canvas.activeLayer.preview?.children.length) canvas.activeLayer.releaseAll();
		}

		// Case 3 - close open UI windows
		else if (Object.values(ui.windows).filter(app => (app.isEscapeable == null || app.isEscapeable === true) && !app._plut_popoutWindow).length) {
			const metas = Object.entries(ui.windows)
				.filter(([appId, app]) => (app.isEscapeable == null || app.isEscapeable === true) && !app._plut_popoutWindow)
				.map(([appId, app]) => {
					const zIndex = Number((((UtilApplications.$getAppElement(app)[0] || {}).style || {})["z-index"] || -1));
					if (isNaN(zIndex) || !~zIndex) console.warn(`Could not determine z-index for app ${appId}`);
					return {
						appId,
						zIndex: isNaN(zIndex) ? -1 : zIndex
					}
				})
				.sort((a, b) => SortUtil.ascSort(b.zIndex, a.zIndex));

			ui.windows[metas[0].appId].close();
		}

		// Case 4 - toggle the main menu
		else ui.menu.toggle();
		/* eslint-enable */
	}
}
Patcher_GameKeyboard._ELEMENTS_WITH_FOCUS = new Set(["INPUT", "TEXTAREA"]);

export {Patcher_GameKeyboard};

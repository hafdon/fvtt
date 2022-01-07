import { MODULE_NAME } from "./utils/constants.js";
import * as log from "./utils/logging.js";

/**
 * A common framework for displaying captions to the client.
 *
 * @extends {Application}
 *
 * @example
 * ui.captions.caption(userId, "Roll for initiative!");
 */
export default class Captions extends Application {
  constructor(options) {
    super(options);

    /**
     * Captions which are currently displayed
     * @type {Map]}
     */
    this.activeCaptions = new Map();
  }

  /* -------------------------------------------- */

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      popOut: false,
      minimizable: false,
      id: "captions",
    });
  }

  /* -------------------------------------------- */

  /** @override */
  _renderInner() {
    return $('<ol id="captions"></ol>');
  }

  /* -------------------------------------------- */

  /** @override */
  async _render(...args) {
    await super._render(...args);
    this.moveAboveCameraViews();
  }

  /* -------------------------------------------- */

  /**
   * Display or update a caption notification
   * @param {User} user             The User entity speaking
   * @param {string} text    The caption to display
   * @param {string}  id     The unique ID of the caption
   */
  caption(id, user, text) {
    log.debug("Displaying caption for user", user.name, ":", text);

    const timeoutLength = game.settings.get(MODULE_NAME, "timeout") * 1000;
    const fontSize = `${game.settings.get(MODULE_NAME, "fontSize")}px`;
    const lineHeight = `${game.settings.get(MODULE_NAME, "fontSize") + 6}px`;

    // Define the function to remove the notification
    const _remove = (caption) => {
      caption.li.fadeOut(66, () => caption.li.remove());
      this.activeCaptions.delete(caption.id);
    };

    // Try to get existing line for the caption
    let caption = this.activeCaptions.get(id);
    if (!caption) {
      // Construct new caption
      const cls = "caption";
      const li = $(`<li class="${cls}">${user.name}: ${text}</li>`);
      li.css("font-size", fontSize);
      li.css("line-height", lineHeight);

      // Place the new caption
      this.element.append(li);
      li.hide().slideDown(1000);

      // Schedule clearing the notification 5 seconds later
      const timeout = window.setTimeout(() => _remove(caption), timeoutLength);

      // Save the new caption as active
      caption = {
        id,
        user,
        text,
        li,
        timeout,
      };
      this.activeCaptions.set(id, caption);
    } else {
      // Set the current text of the existing caption
      caption.li.text(`${user.name}: ${text}`);

      // Reset the timeout
      window.clearTimeout(caption.timeout);
      caption.timeout = window.setTimeout(
        () => _remove(caption),
        timeoutLength
      );
    }
  }

  moveAboveCameraViews(cameraViewsElement = ui.webrtc.element) {
    if (!this.element || !cameraViewsElement) {
      // Not ready to set element values yet
      return;
    }

    if (cameraViewsElement.hasClass("camera-position-bottom")) {
      log.debug("Moving above camera views");
      const bottomPosition =
        window.innerHeight - cameraViewsElement.offset().top;
      this.element.css("bottom", bottomPosition);
    } else {
      this.element.css("bottom", "");
    }
  }
}

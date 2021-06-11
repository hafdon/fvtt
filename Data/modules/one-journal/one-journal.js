const MODULE_NAME = "one-journal"; // TODO: Better handling
var settings;
(function (settings) {
    settings["OPEN_BUTTON_IN_DIRECTORY"] = "openButtonInSidebarDirectory";
    settings["USE_ONE_JOURNAL"] = "useOneJournal";
    settings["SIDEBAR_MODE"] = "sideBarMode";
    settings["GM_ONLY"] = "gmOnly";
    settings["SYNC_SIDEBAR"] = "sidebarSync";
    settings["FOLDER_SELECTOR"] = "folderSelector";
    settings["NO_DUPLICATE_HISTORY"] = "noDuplicateHistory";
    settings["SIDEBAR_FOLDER_COLOR"] = "sideBarFolderColor";
    settings["SIDEBAR_DISABLE_PLAYER"] = "sideBarDisablePlayer";
    settings["SIDEBAR_COLLAPSED"] = "sideBarCollapsed";
    settings["USE_BROWSER_HISTORY"] = "useBrowserHistory";
    settings["DBL_CLICK_EDIT"] = "dblClickEdit";
    settings["SIDEBAR_WIDTH"] = "sidebarWidth";
    settings["SIDEBAR_COMPACT"] = "sidebarCompact";
})(settings || (settings = {}));
const noop = () => { };
const moduleSettings = [
    {
        setting: settings.USE_ONE_JOURNAL,
        name: "ONEJOURNAL.SettingsUseOneJournal",
        hint: "ONEJOURNAL.SettingsUseOneJournalHint",
        type: Boolean,
        default: true,
    },
    {
        setting: settings.OPEN_BUTTON_IN_DIRECTORY,
        name: "ONEJOURNAL.SettingsOpenButtonInSidebarDirectory",
        hint: "ONEJOURNAL.SettingsOpenButtonInSidebarDirectoryHint",
        type: Boolean,
        default: false,
    },
    {
        setting: settings.SIDEBAR_MODE,
        name: "ONEJOURNAL.SettingsSidebarMode",
        hint: "ONEJOURNAL.SettingsSidebarModeHint",
        type: String,
        choices: {
            right: "ONEJOURNAL.SettingsSidebarModeRight",
            left: "ONEJOURNAL.SettingsSidebarModeLeft",
        },
        default: "right",
    },
    {
        setting: settings.SIDEBAR_COLLAPSED,
        name: "Sidebar is collapsed",
        hint: "This option should not show up in the settings window",
        type: Boolean,
        default: false,
        config: false,
    },
    {
        setting: settings.SIDEBAR_FOLDER_COLOR,
        name: "ONEJOURNAL.SettingsSidebarFolderColor",
        hint: "ONEJOURNAL.SettingsSidebarFolderColorHint",
        type: Boolean,
        default: false,
    },
    {
        setting: settings.SYNC_SIDEBAR,
        name: "ONEJOURNAL.SettingsSidebarSync",
        hint: "ONEJOURNAL.SettingsSidebarSyncHint",
        type: Boolean,
        default: true,
    },
    {
        setting: settings.SIDEBAR_WIDTH,
        name: "ONEJOURNAL.SettingsSidebarWidth",
        hint: "ONEJOURNAL.SettingsSidebarWidthHint",
        type: Number,
        choices: {
            150: "ONEJOURNAL.SettingsSidebarWidthTiny",
            230: "ONEJOURNAL.SettingsSidebarWidthSmall",
            275: "ONEJOURNAL.SettingsSidebarWidthReduced",
            300: "ONEJOURNAL.SettingsSidebarWidthNormal",
            336: "ONEJOURNAL.SettingsSidebarWidthWide",
        },
        default: 300,
    },
    {
        setting: settings.SIDEBAR_COMPACT,
        name: "ONEJOURNAL.SettingsSidebarCompact",
        hint: "ONEJOURNAL.SettingsSidebarCompactHint",
        type: Boolean,
        default: false,
    },
    {
        setting: settings.FOLDER_SELECTOR,
        name: "ONEJOURNAL.SettingsFolderSelector",
        hint: "ONEJOURNAL.SettingsFolderSelectorHint",
        type: Boolean,
        default: false,
    },
    {
        setting: settings.DBL_CLICK_EDIT,
        name: "ONEJOURNAL.SettingsDblClickEdit",
        hint: "ONEJOURNAL.SettingsDblClickEditHint",
        type: Boolean,
        default: true,
    },
    {
        setting: settings.NO_DUPLICATE_HISTORY,
        name: "ONEJOURNAL.SettingsNoDuplicateHistory",
        hint: "ONEJOURNAL.SettingsNoDuplicateHistoryHint",
        type: Boolean,
        default: false,
    },
    {
        setting: settings.USE_BROWSER_HISTORY,
        name: "ONEJOURNAL.SettingsUseBrowserHistoryExperimental",
        hint: "ONEJOURNAL.SettingsUseBrowserHistoryHint",
        type: Boolean,
        default: false,
    },
    {
        setting: settings.SIDEBAR_DISABLE_PLAYER,
        name: "ONEJOURNAL.SettingsSidebarDisablePlayer",
        hint: "ONEJOURNAL.SettingsSidebarDisablePlayerHint",
        type: Boolean,
        default: false,
        scope: "world",
    },
    {
        setting: settings.GM_ONLY,
        name: "ONEJOURNAL.SettingsGMOnly",
        hint: "ONEJOURNAL.SettingsGMOnlyHint",
        type: Boolean,
        default: false,
        scope: "world",
    },
];
function registerSetting(callbacks, { setting, ...options }) {
    game.settings.register(MODULE_NAME, setting, {
        config: true,
        scope: "client",
        ...options,
        onChange: callbacks[setting] || noop,
    });
}
function registerSettings(callbacks = {}) {
    moduleSettings.forEach(item => {
        registerSetting(callbacks, item);
    });
}
function getSetting(setting) {
    return game.settings.get(MODULE_NAME, setting);
}
function setSetting(setting, value) {
    return game.settings.set(MODULE_NAME, setting, value);
}

const i18n = name => game.i18n.localize(`ONEJOURNAL.${name}`);
function scrollElementIntoView(element, scrollable) {
    if (!element.offset()) {
        return;
    }
    const topOffset = scrollable.offset().top;
    const elementTop = element.offset().top - topOffset;
    const elementBottom = elementTop + element.height();
    if (elementTop < 1) {
        // element is above fold
        scrollable.scrollTop(element.offset().top - topOffset + scrollable.scrollTop());
    }
    if (elementBottom > scrollable.height()) {
        // element is below fold
        scrollable.scrollTop(element.offset().top -
            topOffset +
            scrollable.scrollTop() -
            scrollable.height() +
            element.outerHeight());
    }
}

class JournalShell extends Application {
    constructor() {
        super({
            id: "OneJournalShell",
            template: "modules/one-journal/templates/shell.html",
            title: "OneJournal",
            classes: [`oj-${game.system.id}`],
            popOut: true,
            resizable: true,
            width: 850,
            height: 600,
        });
        this.attachedId = -1;
        this.history = [];
        this.historyFwd = [];
        this.historySeq = 0;
        this.detachedJournals = new Set();
        this.swappingJournals = new Set();
        window.onhashchange = e => {
            if (getSetting(settings.USE_BROWSER_HISTORY) !== true)
                return;
            const hash = window.location.hash;
            const i = this.history.findIndex(item => item.hash === hash);
            if (i !== -1) {
                this.goToHistoryByIndex(i);
            }
            else {
                const i = this.historyFwd.findIndex(item => item.hash === hash);
                if (i === -1)
                    return;
                this.goToHistoryFwdByIndex(i);
            }
        };
        this.directory = new OneJournalDirectory(this);
    }
    get element() {
        return super.element;
    }
    get document() {
        return this.element.get(0).ownerDocument;
    }
    open(attachApp) {
        if (attachApp && this.detachedJournals.has(attachApp.entity.uuid)) {
            return;
        }
        this.render(true, { attachApp });
    }
    render(force, options = {}) {
        const { attachApp, ...rest } = options;
        if (this._state <= 0) {
            Hooks.once("render" + this.constructor.name, () => {
                Hooks.once("render" + this.directory.constructor.name, () => {
                    return this.onRenderComplete(attachApp);
                });
            });
            return super.render(force, rest);
        }
        else {
            if (attachApp) {
                this.attach(attachApp);
            }
        }
        return this;
    }
    toggleSidebar() {
        this.element.toggleClass("sidebar-mode-none");
        setSetting(settings.SIDEBAR_COLLAPSED, !getSetting(settings.SIDEBAR_COLLAPSED));
    }
    async onRenderComplete(attachApp) {
        if (attachApp) {
            this.attach(attachApp);
        }
        const sidebarDisabled = !game.user.isGM && getSetting(settings.SIDEBAR_DISABLE_PLAYER);
        if (sidebarDisabled) {
            this.element.find(".one-journal-shell > .sidebar-toggle").remove();
            this.element.addClass("sidebar-disabled");
        }
        else {
            this.element
                .find(".one-journal-shell > .sidebar-toggle")
                .click(() => this.toggleSidebar());
        }
        if (getSetting(settings.SIDEBAR_COLLAPSED) === true || sidebarDisabled) {
            this.element.addClass("sidebar-mode-none");
        }
    }
    async close() {
        var _a;
        // @ts-ignore
        const attachedClose = (_a = ui.windows[this.attachedId]) === null || _a === void 0 ? void 0 : _a.close();
        this.restoreMaximized();
        await Promise.all([
            attachedClose,
            this.directory.close(true),
            super.close(),
        ]);
    }
    async minimize() {
        this.restoreMaximized();
        return super.minimize();
    }
    activateListeners(html) {
        const header = this.element.children(".window-header");
        const close = header.find(".close");
        close.attr("title", i18n("ApplicationExitTitle"));
        close.contents().last().replaceWith(i18n("ApplicationExit"));
        header.children().wrapAll(`<div class="one-journal-header" />`);
        this.directory.render(true);
        this.element.find(".sub-mode-toggle").click(() => {
            this.toggleSubMode();
        });
        this.element
            .find(".history-navigation .forward")
            .click(() => this.forward());
        this.element
            .find(".history-navigation .backward")
            .click(() => this.backward());
        this.changeSidebarMode(getSetting(settings.SIDEBAR_MODE));
        this.setSidebarWidth(getSetting(settings.SIDEBAR_WIDTH));
        this._historyContextMenu(html);
    }
    attach(app) {
        var _a;
        if (app.appId == this.attachedId ||
            this.detachedJournals.has(app.entity.uuid)) {
            return;
        }
        if (this.attachedId != -1) {
            // @ts-ignore
            (_a = ui.windows[this.attachedId]) === null || _a === void 0 ? void 0 : _a.close();
        }
        this.attachedId = app.appId;
        this.attachedUid = app.entity.uuid;
        this.element.addClass("journal-attached");
        if (getSetting(settings.FOLDER_SELECTOR) === true) {
            this.element.addClass("show-folder-select");
        }
        app.element.addClass("one-journal-attached");
        // Check if element is open in another window (PopOut!)
        if (this.document != document) {
            this.document.adoptNode(app.element.get(0));
        }
        this.element.find(".shell-content").append(app.element);
        const headerContents = app.element
            .find(".window-header > *")
            .detach();
        if (headerContents.length > 0) {
            const header = this.element.children(".window-header");
            header.children(":not(.one-journal-header)").remove();
            header.prepend(headerContents);
            header
                .children(".header-button")
                .removeClass("header-button")
                .addClass("journal-header-button")
                .on("click", e => {
                //@ts-ignore
                const buttons = app._getHeaderButtons();
                e.preventDefault();
                const button = buttons.find(b => e.currentTarget.classList.contains(b.class));
                button.onclick(e);
            });
        }
        this.directory.selected(this.attachedUid);
        this.navigated(app);
        // @ts-ignore
        let minimized = app._minimized;
        if (minimized) {
            // @ts-ignore
            app.maximize();
            this.minimize();
        }
    }
    detach(app) {
        if (!this.swappingJournals.delete(app.entity.uuid)) {
            if (this.detachedJournals.delete(app.entity.uuid)) {
                this.directory.render(true);
            }
        }
        if (this.attachedId === app.appId) {
            this.element.removeClass("journal-attached");
            this.element
                .children(".window-header")
                .children(":not(.one-journal-header)")
                .remove();
            app.close();
            this.attachedId = -1;
            this.directory.deselected();
        }
    }
    async openDetached(uuid) {
        var _a;
        if (this.attachedUid === uuid) {
            //@ts-ignore
            (_a = ui.windows[this.attachedId]) === null || _a === void 0 ? void 0 : _a.close();
            await new Promise(r => setTimeout(r, 300));
            this.detachedJournals.add(uuid);
        }
        else {
            this.detachedJournals.add(uuid);
        }
        this.directory.render(true);
        const e = await fromUuid(uuid);
        e.sheet.render(true);
    }
    fullScreen() {
        if (this.element.hasClass("maximized")) {
            this.element.removeClass("maximized");
            this.element
                .find(".maximize-toggle")
                .contents()
                .last()[0].textContent = i18n("ApplicationMaximize");
            this.element
                .find(".maximize-toggle i")
                .removeClass("fa-compress-arrows-alt")
                .addClass("fa-expand-arrows-alt");
            $(document.body).removeClass("one-journal-sub-mode");
        }
        else {
            this.element.addClass("maximized");
            this.element
                .find(".maximize-toggle")
                .contents()
                .last()[0].textContent = i18n("ApplicationRestore");
            this.element
                .find(".maximize-toggle i")
                .removeClass("fa-expand-arrows-alt")
                .addClass("fa-compress-arrows-alt");
        }
    }
    toggleSubMode() {
        $(document.body).toggleClass("one-journal-sub-mode");
    }
    restoreMaximized() {
        if (this.element.hasClass("maximized")) {
            this.fullScreen();
        }
    }
    _getHeaderButtons() {
        let buttons = super._getHeaderButtons();
        buttons.unshift({
            label: i18n("ApplicationMaximize"),
            class: "maximize-toggle",
            icon: "fas fa-expand-arrows-alt",
            onclick: async (ev) => {
                this.fullScreen();
            },
        });
        return buttons;
    }
    pushWindowHistory(item) {
        if (getSetting(settings.USE_BROWSER_HISTORY) !== true)
            return;
        window.location.hash = item.hash;
    }
    // History
    navigated(app) {
        const navigatedTo = app.entity.uuid;
        if (this.history.length !== 0) {
            if (this.history[this.history.length - 1].id === navigatedTo) {
                // Already last in history
                return;
            }
            else {
                // Reset forward stack
                this.historyFwd.length = 0;
            }
        }
        if (getSetting(settings.NO_DUPLICATE_HISTORY) !== true &&
            getSetting(settings.USE_BROWSER_HISTORY) !== true) {
            this.history = this.history.filter(h => h.id !== navigatedTo);
        }
        this.history.push({
            id: navigatedTo,
            title: app.title,
            hash: `#OJ${this.historySeq++}`,
        });
        this.pushWindowHistory(this.history[this.history.length - 1]);
        this.updatedHistory();
    }
    async backward() {
        if (getSetting(settings.USE_BROWSER_HISTORY) === true) {
            if (this.history.length > 1)
                window.history.back();
            return;
        }
        if (this.history.length <= 1) {
            this.updatedHistory();
            return;
        }
        if (this.attachedId !== -1) {
            this.historyFwd.push(this.history.pop());
        }
        const entity = await fromUuid(this.history[this.history.length - 1].id);
        if (entity === null) {
            // Remove and retry
            this.history.pop();
            await this.backward();
        }
        else {
            entity.sheet.render(true);
            this.updatedHistory();
        }
    }
    async forward() {
        if (getSetting(settings.USE_BROWSER_HISTORY) === true) {
            if (this.historyFwd.length != 0)
                window.history.forward();
            return;
        }
        if (this.historyFwd.length == 0) {
            this.updatedHistory();
            return;
        }
        this.history.push(this.historyFwd.pop());
        const entity = await fromUuid(this.history[this.history.length - 1].id);
        if (entity === null) {
            // Remove and retry
            this.history.pop();
            this.forward();
        }
        else {
            entity.sheet.render(true);
            this.updatedHistory();
        }
    }
    async goToHistoryByIndex(index) {
        const entity = await fromUuid(this.history[index].id);
        while (this.history.length > index + 1) {
            this.historyFwd.push(this.history.pop());
        }
        entity.sheet.render(true);
        this.updatedHistory();
    }
    async goToHistoryFwdByIndex(index) {
        const entity = await fromUuid(this.historyFwd[index].id);
        while (this.historyFwd.length > index) {
            this.history.push(this.historyFwd.pop());
        }
        entity.sheet.render(true);
        this.updatedHistory();
    }
    clearHistory() {
        this.history.length = 0;
        this.historyFwd.length = 0;
        this.updatedHistory();
    }
    updatedHistory() {
        const historyItems = this.history.map((item, idx) => {
            return {
                name: item.title,
                icon: `<i class="fas fa-arrow-left"></i>`,
                callback: () => {
                    if (getSetting(settings.USE_BROWSER_HISTORY) === true) {
                        for (let i = 0; i < this.history.length - 1 - idx; i++) {
                            window.history.back();
                        }
                        return;
                    }
                    this.goToHistoryByIndex(idx);
                },
            };
        });
        const historyFwdItems = this.historyFwd.map((item, idx) => {
            return {
                name: item.title,
                icon: `<i class="fas fa-arrow-right"></i>`,
                callback: () => {
                    if (getSetting(settings.USE_BROWSER_HISTORY) === true) {
                        for (let i = 0; i < this.historyFwd.length - idx; i++) {
                            window.history.forward();
                        }
                        return;
                    }
                    this.goToHistoryFwdByIndex(idx);
                },
            };
        });
        if (historyItems.length > 0) {
            historyItems[historyItems.length - 1].icon = `<i class="fas fa-circle"></i>`;
        }
        this.contextMenu.menuItems = [
            ...historyItems,
            ...historyFwdItems.reverse(),
        ].reverse();
        if (getSetting(settings.USE_BROWSER_HISTORY) !== true) {
            this.contextMenu.menuItems.unshift({
                name: i18n("HistoryClearHistory"),
                icon: '<i class="fas fa-trash"></i>',
                callback: li => {
                    this.clearHistory();
                },
            });
        }
        else {
            this.contextMenu.menuItems.unshift({
                name: i18n("HistoryUsingBrowserHistory"),
                icon: "",
                callback: li => { },
            });
        }
        if (this.history.length > 1) {
            this.element.find(".history-navigation .backward").addClass("active");
        }
        else {
            this.element.find(".history-navigation .backward").removeClass("active");
        }
        if (this.historyFwd.length !== 0) {
            this.element.find(".history-navigation .forward").addClass("active");
        }
        else {
            this.element.find(".history-navigation .forward").removeClass("active");
        }
    }
    changeSidebarMode(mode) {
        if (mode === "left") {
            this.element.addClass("sidebar-mode-left");
        }
        else {
            this.element.removeClass("sidebar-mode-left");
        }
    }
    setSidebarWidth(width) {
        document.documentElement.style.setProperty("--ojSidebarWidth", `${width}px`);
    }
    _historyContextMenu(html) {
        this.contextMenu = new ContextMenu(html, ".history-navigation", [
            {
                name: i18n("HistoryClearHistory"),
                icon: '<i class="fas fa-trash"></i>',
                callback: li => {
                    this.clearHistory();
                },
            },
        ]);
    }
}
// @ts-ignore
class OneJournalDirectory extends JournalDirectory {
    constructor(shell, options) {
        super(options);
        this.shell = shell;
        // Record the directory as an application of the collection
        OneJournalDirectory.collection.apps.push(this);
    }
    get element() {
        return super.element;
    }
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.id = "OneJournalDirectory";
        options.template = "templates/sidebar/journal-directory.html";
        options.popOut = true;
        return options;
    }
    static get entity() {
        return "JournalEntry";
    }
    static get collection() {
        return game.journal;
    }
    render(force, options) {
        if (this.shell._state <= 0) {
            return;
        }
        return super.render(force, options);
    }
    close(force) {
        if (force) {
            return Application.prototype.close.call(this);
        }
        // Close the entire shell if someone tries to close directory
        return this.shell.close();
    }
    selected(uuid) {
        const [_, id] = uuid.split(".");
        this.element.find("li.selected").removeClass("selected");
        const selected = this.element.find(`li[data-entity-id="${id}"]`);
        selected.addClass("selected");
        if (getSetting(settings.SYNC_SIDEBAR) === false) {
            return;
        }
        this.expandFolderTree(selected);
        scrollElementIntoView(selected, this.element.find(".directory-list"));
    }
    deselected() {
        this.element.find("li.selected").removeClass("selected");
    }
    expandFolderTree(target) {
        target.parents(".folder").removeClass("collapsed");
    }
    expand(id, expanded) {
        const li = this.element.find(`li[data-folder-id="${id}"]`);
        if (expanded) {
            li.removeClass("collapsed");
        }
        else {
            li.addClass("collapsed");
            li.find(".folder").addClass("collapsed");
        }
        const expandedFolders = this.element.find(".directory-list > .folder:not(.collapsed)");
        if (expandedFolders.length === 0) {
            this.element.removeClass("has-expanded-journals");
        }
        else {
            this.element.addClass("has-expanded-journals");
        }
    }
    activateListeners(html) {
        super.activateListeners(html);
        this.shell.element.find(".shell-sidebar").append(this.element);
        if (this.shell.attachedId !== -1 && this.shell.attachedUid) {
            this.selected(this.shell.attachedUid);
        }
        let toggleSibling = this.element.find(".header-actions .create-folder");
        if (toggleSibling.length === 0) {
            toggleSibling = this.element.find(".header-search .collapse-all");
        }
        toggleSibling.after(`<div class="sidebar-toggle" title="${i18n("SidebarCollapse")}"><i class="far fa-window-maximize"></i></div>`);
        this.element.find(".sidebar-toggle").click(() => {
            this.shell.toggleSidebar();
        });
        if (getSetting(settings.SIDEBAR_FOLDER_COLOR) === true) {
            this.element.find("header.folder-header").each((i, el) => {
                if (el.style.backgroundColor) {
                    el.nextElementSibling.style.borderColor =
                        el.style.backgroundColor;
                }
            });
        }
        this.setSidebarCompact(getSetting(settings.SIDEBAR_COMPACT));
        this.element.find(".entity-name .fa-external-link-alt").remove();
        this.shell.detachedJournals.forEach(uuid => {
            const [_, id] = uuid.split(".");
            this.element
                .find(`[data-entity-id="${id}"]`)
                .addClass("journal-detached")
                .find(`h4`)
                .attr("title", i18n("JournalEntryDetached"))
                .append(`<i class="fas fa-external-link-alt"></i>`);
        });
    }
    setSidebarCompact(on) {
        if (on) {
            this.element.addClass("compact");
        }
        else {
            this.element.removeClass("compact");
        }
    }
    _getEntryContextOptions() {
        // @ts-ignore
        const options = super._getEntryContextOptions();
        return options.concat([
            {
                name: "SIDEBAR.JumpPin",
                icon: '<i class="fas fa-crosshairs"></i>',
                condition: li => {
                    const entry = game.journal.get(li.data("entity-id"));
                    return !!entry.sceneNote;
                },
                callback: li => {
                    const entry = game.journal.get(li.data("entity-id"));
                    entry.panToNote();
                },
            },
            {
                name: "ONEJOURNAL.OptionOpenDetached",
                icon: `<i class="fas fa-external-link-alt"></i>`,
                callback: li => {
                    const entry = game.journal.get(li.data("entity-id"));
                    this.shell.openDetached(entry.uuid);
                },
            },
        ]);
    }
}

class OneJournal {
    constructor() {
        this.expandedChangeHandler = {
            set: (target, property, value, receiver) => {
                target[property] = value;
                this.shell.directory.expand(property, value);
                return true;
            },
            deleteProperty: (target, property) => {
                const res = delete target[property];
                return res;
            },
        };
    }
    // Listen to changes of mode swapping to support detached windows
    hookSwapMode() {
        //@ts-ignore
        const oldOnSwapMode = JournalSheet.prototype._onSwapMode;
        //@ts-ignore
        JournalSheet.prototype._onSwapMode = function (event, mode) {
            var _a, _b;
            if (mode == "image" && this._sheetMode === "text") {
                (_a = window.oneJournal) === null || _a === void 0 ? void 0 : _a.shell.swappingJournals.add(this.entity.uuid);
            }
            else if (mode == "text" && this._sheetMode === "image") {
                (_b = window.oneJournal) === null || _b === void 0 ? void 0 : _b.shell.swappingJournals.add(this.entity.uuid);
            }
            return oldOnSwapMode.call(this, event, mode);
        };
    }
    onRenderJournalShell(app, html) {
        this._onJournalAdded(app);
        if (getSetting(settings.DBL_CLICK_EDIT) === true) {
            html.find(".editor").dblclick(evt => {
                if (evt.target.closest(".editor-content")) {
                    $(app.element).find(".editor-edit").click();
                }
            });
        }
    }
    init() {
        this.shell = new JournalShell();
        this.hookSwapMode();
        Hooks.on("closeJournalSheet", (app, html, data) => {
            this._onJournalRemoved(app);
        });
    }
    _onJournalAdded(sheet) {
        if (getSetting(settings.USE_ONE_JOURNAL) === false) {
            return;
        }
        this.shell.open(sheet);
    }
    _onJournalRemoved(app) {
        this.shell.detach(app);
    }
    toggleOpenButton(show) {
        if (show) {
            window.oneJournal.openButton.css("display", "block");
        }
        else {
            window.oneJournal.openButton.css("display", "none");
        }
    }
    userPermitted() {
        return !(getSetting(settings.GM_ONLY) === true && !game.user.isGM);
    }
}
Hooks.on("renderJournalSheet", (app, html) => {
    var _a;
    if (!app.popOut) {
        // GM Screen Renders journalSheets without popOut
        return;
    }
    (_a = window.oneJournal) === null || _a === void 0 ? void 0 : _a.onRenderJournalShell(app, html);
});
Hooks.once("init", async function () {
    var _a, _b;
    registerSettings({
        [settings.SIDEBAR_MODE]: val => {
            window.oneJournal.shell.changeSidebarMode(val);
        },
        [settings.OPEN_BUTTON_IN_DIRECTORY]: val => {
            window.oneJournal.toggleOpenButton(val);
        },
        [settings.SIDEBAR_WIDTH]: val => {
            var _a, _b;
            (_b = (_a = window.oneJournal) === null || _a === void 0 ? void 0 : _a.shell) === null || _b === void 0 ? void 0 : _b.setSidebarWidth(val);
        },
        [settings.SIDEBAR_COMPACT]: val => {
            var _a, _b, _c;
            (_c = (_b = (_a = window.oneJournal) === null || _a === void 0 ? void 0 : _a.shell) === null || _b === void 0 ? void 0 : _b.directory) === null || _c === void 0 ? void 0 : _c.setSidebarCompact(val);
        },
        [settings.FOLDER_SELECTOR]: val => {
            var _a, _b, _c, _d, _e, _f;
            if (val) {
                (_c = (_b = (_a = window.oneJournal) === null || _a === void 0 ? void 0 : _a.shell) === null || _b === void 0 ? void 0 : _b.element) === null || _c === void 0 ? void 0 : _c.addClass("show-folder-select");
            }
            else {
                (_f = (_e = (_d = window.oneJournal) === null || _d === void 0 ? void 0 : _d.shell) === null || _e === void 0 ? void 0 : _e.element) === null || _f === void 0 ? void 0 : _f.removeClass("show-folder-select");
            }
        },
    });
    (_a = CONFIG.TinyMCE.css) === null || _a === void 0 ? void 0 : _a.push("/modules/one-journal/editor.css");
    (_b = CONFIG.TinyMCE.content_css) === null || _b === void 0 ? void 0 : _b.push("/modules/one-journal/editor.css");
    window.oneJournal = window.oneJournal || new OneJournal();
    // Button in sidebar directory
    Hooks.on("renderJournalDirectory", (app, html, data) => {
        if (!window.oneJournal.userPermitted() ||
            html.closest("#OneJournalDirectory").length != 0) {
            return;
        }
        window.oneJournal.openButton = $(`<button class="one-journal-open">${i18n("OpenButton")}</button>`);
        window.oneJournal.openButton.click(() => {
            window.oneJournal.shell.render(true);
        });
        html.find(".directory-footer").append(window.oneJournal.openButton);
        window.oneJournal.toggleOpenButton(getSetting(settings.OPEN_BUTTON_IN_DIRECTORY));
    });
    // Patch links for opening detached
    {
        // Entity links in enriched html
        //@ts-ignore
        const oldOnClickEntityLink = TextEditor._onClickEntityLink;
        async function onClickEntityLink(event) {
            var _a;
            const a = event.currentTarget;
            if (!event.shiftKey) {
                oldOnClickEntityLink(event);
                return;
            }
            let uuid = "";
            if (a.dataset.pack &&
                ((_a = game.packs.get(a.dataset.pack)) === null || _a === void 0 ? void 0 : _a.entity) === "JournalEntry") {
                uuid = `Compendium.${a.dataset.pack}.${a.dataset.id}`;
            }
            else if (a.dataset.entity === "JournalEntry") {
                uuid = `${a.dataset.entity}.${a.dataset.id}`;
            }
            else {
                oldOnClickEntityLink(event);
                return;
            }
            event.preventDefault();
            window.oneJournal.shell.openDetached(uuid);
        }
        //@ts-ignore
        TextEditor._onClickEntityLink = onClickEntityLink;
        // Journal sidebar link handler
        //@ts-ignore
        const oldOnClickEntityName = JournalDirectory._onClickEntityName;
        function onClickEntityName(event) {
            event.preventDefault();
            const element = event.currentTarget;
            const entityId = element.parentElement.dataset.entityId;
            const entity = game.journal.get(entityId);
            if (event.shiftKey) {
                window.oneJournal.shell.openDetached(entity.uuid);
                return;
            }
            const sheet = entity.sheet;
            // @ts-ignore
            if (sheet._minimized)
                return sheet.maximize();
            else
                return sheet.render(true);
        }
        //@ts-ignore
        JournalDirectory.prototype._onClickEntityName = onClickEntityName;
    }
});
Hooks.once("ready", function () {
    var _a;
    console.log("One Journal | Initializing One Journal");
    if (!window.oneJournal.userPermitted()) {
        (_a = window.oneJournal.openButton) === null || _a === void 0 ? void 0 : _a.css("display", "none");
        console.log("One Journal | disabled for user");
        return;
    }
    window.oneJournal.init();
    if (game.modules.get("popout")) {
        popOutHacks();
    }
});
// Hacks for popout module
function popOutHacks() {
    // Opening journals from inside the popout should not act as a dialog
    Object.defineProperty(JournalSheet.prototype, "options", {
        get: function () {
            var _a;
            if (!this.entity) {
                return this._options;
            }
            const detaching = (_a = window.oneJournal) === null || _a === void 0 ? void 0 : _a.shell.detachedJournals.has(this.entity.uuid);
            return {
                ...this._options,
                popOutModuleDisable: !detaching,
            };
        },
        set: function (value) {
            this._options = value;
        },
    });
}
//# sourceMappingURL=one-journal.js.map

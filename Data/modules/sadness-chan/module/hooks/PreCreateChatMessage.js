import Settings from "../Settings.js";
import SadnessChan from "../SadnessChan.js";
import Utils from "../Utils.js";
import settingsDefaults from "../lists/settingsDefaults.js";
class PreCreateChatMessage {
    constructor() {
        this._errorMessages = settingsDefaults.ERROR_MESSAGES;
    }
    static getInstance() {
        if (!PreCreateChatMessage._instance)
            PreCreateChatMessage._instance = new PreCreateChatMessage();
        return PreCreateChatMessage._instance;
    }
    _executeResetCmd(args, message, options, userID) {
        let content = this._errorMessages.NOT_ENOUGH_PERMISSIONS;
        const resetPermissionLevel = Settings.getPermissionLevel();
        const playersDetails = Utils.getAllPlayerNamesAndIDs();
        if (game.user.hasRole(4)) {
            switch (args) {
                case "settings":
                    Settings.resetAllSettings();
                    content = this._errorMessages.SETTINGS_RESET;
                    break;
                case "counter":
                    Settings.resetCounter();
                    content = this._errorMessages.COUNTER_RESET;
                    break;
                case "lists":
                    Settings.resetLists();
                    content = this._errorMessages.LISTS_RESET;
                    break;
                default:
                    if (Object.keys(playersDetails).includes(args)) {
                        Settings.resetUserCounter(playersDetails[args]);
                        content = this._errorMessages.RESET_SOMEONE_ELSE;
                    }
                    else
                        content = this._errorMessages.INVALID_ARGUMENTS;
                    break;
            }
        }
        if (game.user.hasRole(resetPermissionLevel)) {
            switch (args) {
                case "me":
                    Settings.resetUserCounter(userID);
                    content = this._errorMessages.COUNTER_RESET;
                    break;
            }
        }
        message.content = SadnessChan.generateMessageStructure(content);
        this._prepareMessage(message, options, userID, true);
    }
    _prepareMessage(message, options, userId, sendToAll) {
        const isPublic = Settings.getSetting(settingsDefaults.SETTING_KEYS.STATS_MESSAGE_VISIBILITY);
        message.whisper = isPublic || sendToAll ? [] : [userId];
        message.speaker = { alias: ' ' };
        options.chatBubble = false;
    }
    _sendStatsMessage(message, options, userData, userId) {
        message.content = SadnessChan.getStatsMessage(userData);
        this._prepareMessage(message, options, userId);
    }
    _executeStatsCmd(message, options, user) {
        const counter = Settings.getCounter();
        if (counter && counter[user]) {
            this._sendStatsMessage(message, options, counter[user], user);
            Utils.debug('Sad stats displayed.');
        }
        else {
            message.content = SadnessChan.generateMessageStructure(this._errorMessages.NO_DATA);
            this._prepareMessage(message, options, user, true);
        }
    }
    _sendAllRollsMessage(message, options, userId) {
        const counter = Settings.getCounter();
        let sendToAll = false;
        if (!(counter && game.user.hasRole(4)))
            return;
        if (Object.keys(counter).length === 0) {
            message.content = SadnessChan.generateMessageStructure(this._errorMessages.NO_DATA);
            sendToAll = true;
        }
        else {
            message.content = '';
            const activeUsers = game.users.entities.filter((user) => user.active);
            activeUsers.forEach((user, index) => {
                // @ts-ignore
                const userData = counter[user?.data?._id];
                if (!userData)
                    return;
                message.content += SadnessChan.getStatsMessage(userData, index === 0);
            });
        }
        this._prepareMessage(message, options, userId, sendToAll);
    }
    _sendHelpMessage(message, options, userId) {
        const command = SadnessChan.getCmd();
        message.content = `
            <p>Are you that useless that you need help? Fine, I'll help you:</p>
            <p><b>${command}</b> - "happiness".</p>
            <p><b>${command} all</b> - AOE "happiness".</p>
            <p><b>${command} reset settings</b> - you want to make me a normie, sure I guess...</p>
            <p><b>${command} reset lists</b> -  back to square one, like the retards who made me intended.</p>
            <p><b>${command} reset counter</b> - makes me forget how much of a disappointment you are. Oh. Wait. I still have your browser history to remind me.</p>
            <p><b>${command} reset &lt;username&gt;</b> - reset someone's life.</p>
        `;
        this._prepareMessage(message, options, userId);
    }
    executeCommand(args, user, message, options) {
        const resetCommand = 'reset';
        const allCommand = 'all';
        const helpCommand = 'help';
        if (args.startsWith(resetCommand)) {
            return this._executeResetCmd(args.replace(resetCommand + ' ', ''), message, options, user);
        }
        if (args.startsWith(allCommand)) {
            return this._sendAllRollsMessage(message, options, user);
        }
        if (args.startsWith(helpCommand)) {
            return this._sendHelpMessage(message, options, user);
        }
    }
    preCreateChatMessageHook(message, options) {
        const content = message?.content;
        const user = message?.user;
        const command = SadnessChan.getCmd();
        if (!(user && content && content.startsWith(command)))
            return;
        if (content === command)
            return this._executeStatsCmd(message, options, user);
        return this.executeCommand(content.replace(command + ' ', ''), user, message, options);
    }
}
export default PreCreateChatMessage.getInstance();

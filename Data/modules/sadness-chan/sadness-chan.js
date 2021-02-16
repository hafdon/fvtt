import CreateChatMessage from "./module/hooks/CreateChatMessage.js";
import PreCreateChatMessage from "./module/hooks/PreCreateChatMessage.js";
import Init from "./module/hooks/Init.js";
Hooks.once('init', Init.initHook.bind(Init));
/**
 * This hook is used to add the command !sadness
 * The command will modify the message to be a whisper with some sad stats ◔w◔
 */
Hooks.on('preCreateChatMessage', PreCreateChatMessage.preCreateChatMessageHook.bind(PreCreateChatMessage));
/**
 * This hook is used to extract roll information from a message
 * Supports default rolls and betterrolls5e
 */
Hooks.on('createChatMessage', CreateChatMessage.createChatMessageHook.bind(CreateChatMessage));

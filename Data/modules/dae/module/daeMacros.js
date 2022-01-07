import { socketlibSocket } from "./GMAction.js";
import { warn, error } from "../dae.js";
import { DAEfromUuid } from "./dae.js";
export let applyActive = (itemName, activate = true, itemType = "") => {
};
export let activateItem = () => {
    //@ts-ignore cant do anything if there are no targets
    const speaker = ChatMessage.getSpeaker();
    const token = canvas.tokens.get(speaker.token);
    if (!token) {
        ui.notifications.warn(`${game.i18n.localize("dae.noSelection")}`);
        return;
    }
    // return new ActiveItemSelector(token.actor, {}).render(true);
};
let tokenScene = (tokenName, sceneName) => {
    if (!sceneName) {
        for (let scene of game.scenes) {
            //@ts-ignore
            let found = scene.tokens.getName(tokenName);
            if (found)
                return { scene, found };
        }
    }
    else {
        //@ts-ignore
        let scene = game.scenes.getName(sceneName);
        if (scene) {
            //@ts-ignore
            let found = scene.tokens.getName(tokenName);
            if (found) {
                return { scene, found };
            }
        }
    }
    return { scene: null, tokenDocument: null };
};
export let moveToken = async (token, targetTokenName, xGridOffset = 0, yGridOffset = 0, targetSceneName = "") => {
    let { scene, found } = tokenScene(targetTokenName, targetSceneName);
    if (!token) {
        warn("Dynmaiceffects | moveToken: Token not found");
        return ("Token not found");
    }
    if (!found) {
        warn("dae | moveToken: Target Not found");
        return `Token ${targetTokenName} not found`;
    }
    socketlibSocket.executeAsGM("recreateToken", {
        userId: game.user.id,
        startSceneId: canvas.scene.id,
        tokenUuid: token.uuid,
        targetSceneId: scene.id, tokenData: token.data,
        x: found.data.x + xGridOffset * canvas.scene.data.grid,
        y: found.data.y + yGridOffset * canvas.scene.data.grid
    });
    /*
    return await requestGMAction(GMAction.actions.recreateToken,
      { userId: game.user.id,
        startSceneId: canvas.scene.id,
        tokenUuid: token.uuid,
         targetSceneId: scene.id, tokenData: token.data,
         x: found.data.x + xGridOffset * canvas.scene.data.grid,
         y: found.data.y + yGridOffset * canvas.scene.data.grid
    });
    */
};
export let renameToken = async (token, newName) => {
    // requestGMAction(GMAction.actions.renameToken, { userId: game.user.id, startSceneId: canvas.scene.id,  tokenData: token.data, newName});
    socketlibSocket.executeAsGM("renameToken", { userId: game.user.id, startSceneId: canvas.scene.id, tokenData: token.data, newName });
};
export let teleportToToken = async (token, targetTokenName, xGridOffset = 0, yGridOffset = 0, targetSceneName = "") => {
    let { scene, found } = tokenScene(targetTokenName, targetSceneName);
    if (!token) {
        error("dae| teleportToToken: Token not found");
        return ("Token not found");
    }
    if (!found) {
        error("dae| teleportToToken: Target Not found");
        return `Token ${targetTokenName} not found`;
    }
    //@ts-ignore target.scene.data.grid
    return teleport(token, scene, found.data.x + xGridOffset * canvas.scene.data.grid, found.data.y + yGridOffset * canvas.scene.data.grid);
};
export async function createToken(tokenData, x, y) {
    let targetSceneId = canvas.scene.id;
    // requestGMAction(GMAction.actions.createToken, {userId: game.user.id, targetSceneId, tokenData, x, y})
    return socketlibSocket.execuateAsGM("createToken", { userId: game.user.id, targetSceneId, tokenData, x, y });
}
export let teleport = async (token, targetScene, xpos, ypos) => {
    let x = Number(xpos);
    let y = parseInt(ypos);
    if (isNaN(x) || isNaN(y)) {
        error("dae| teleport: Invalid co-ords", xpos, ypos);
        return `Invalid target co-ordinates (${xpos}, ${ypos})`;
    }
    if (!token) {
        console.warn("dae | teleport: No Token");
        return "No active token";
    }
    // Hide the current token
    if (targetScene.name === canvas.scene.name) {
        //@ts-ignore
        CanvasAnimation.terminateAnimation(`Token.${token.id}.animateMovement`);
        let sourceSceneId = canvas.scene.id;
        socketlibSocket.executeAsGM("recreateToken", { userId: game.user.id, tokenUuid: token.uuid, startSceneId: sourceSceneId, targetSceneId: targetScene.id, tokenData: token.data, x: xpos, y: ypos });
        //requestGMAction(GMAction.actions.recreateToken, { userId: game.user.id, tokenUuid: token.uuid, startSceneId: sourceSceneId, targetSceneId: targetScene.id, tokenData: token.data, x: xpos, y: ypos });
        canvas.pan({ x: xpos, y: ypos });
        return true;
    }
    // deletes and recreates the token
    var sourceSceneId = canvas.scene.id;
    Hooks.once("canvasReady", async () => {
        await socketlibSocket.executeAsGM("createToken", { userId: game.user.id, startSceneId: sourceSceneId, targetSceneId: targetScene.id, tokenData: token.data, x: xpos, y: ypos });
        // await requestGMAction(GMAction.actions.createToken, { userId: game.user.id, startSceneId: sourceSceneId, targetSceneId: targetScene.id, tokenData: token.data, x: xpos, y: ypos });
        // canvas.pan({ x: xpos, y: ypos });
        await socketlibSocket.executeAsGM("deleteToken", { userId: game.user.id, tokenUuid: token.uuid });
        // await requestGMAction(GMAction.actions.deleteToken, { userId: game.user.id, tokenUuid: token.uuid});
    });
    // Need to stop animation since we are going to delete the token and if that happens before the animation completes we get an error
    //@ts-ignore
    CanvasAnimation.terminateAnimation(`Token.${token.id}.animateMovement`);
    return await targetScene.view();
};
export async function setTokenVisibility(tokenId, visible) {
    let tokenUuid;
    if (typeof tokenId !== "string")
        tokenUuid = tokenId.uuid;
    else if (tokenId.startsWith("Token"))
        tokenUuid = tokenId;
    else
        tokenUuid = `Scene.${canvas.scene.id}.Token.${tokenId}`;
    return socketlibSocket.executeAsGM("setTokenVisibility", { tokenUuid, hidden: !visible });
    // return requestGMAction(GMAction.actions.setTokenVisibility, { targetSceneId: canvas.scene.id, tokenId, hidden: !visible })
}
export async function setTileVisibility(tileId, visible) {
    let tileUuid;
    if (typeof tileId !== "string")
        tileUuid = tileId.uuid;
    else {
        tileUuid = `Scene.${canvas.scene.id}.Tile.${tileId}`;
    }
    return socketlibSocket.executeAsGM("setTileVisibility", { targetSceneId: canvas.scene.id, tileId, hidden: !visible });
    // return requestGMAction(GMAction.actions.setTileVisibility, { targetSceneId: canvas.scene.id, tileId, hidden: !visible })
}
export async function blindToken(tokenId) {
    let tokenUuid;
    if (typeof tokenId !== "string")
        tokenUuid = tokenId.uuid;
    else if (tokenId.startsWith("Token"))
        tokenUuid = tokenId;
    else
        tokenUuid = `Scene.${canvas.scene.id}.Token.${tokenId}`;
    return socketlibSocket.executeAsGM("blindToken", { tokenUuid });
    // return requestGMAction(GMAction.actions.blindToken, { tokenId: tokenId, sceneId: canvas.scene.id })
}
export async function restoreVision(tokenId) {
    let tokenUuid;
    if (typeof tokenId !== "string")
        tokenUuid = tokenId.uuid;
    else if (tokenId.startsWith("Token"))
        tokenUuid = tokenId;
    else
        tokenUuid = `Scene.${canvas.scene.id}.Token.${tokenId}`;
    return socketlibSocket.executeAsGM("restoreVision", { tokenUuid });
    // return requestGMAction(GMAction.actions.restoreVision, { tokenId: tokenId, sceneId: canvas.scene.id })
}
export let macroReadySetup = () => {
};
export function getTokenFlag(token, flagName) {
    return getProperty(token, `data.flags.dae.${flagName}`);
}
export async function deleteActiveEffect(actorUuid, origin, ignore = []) {
    return socketlibSocket.executeAsGM("deleteEffects", { targets: [{ actorUuid }], origin, ignore });
    // requestGMAction(GMAction.actions.deleteEffects, {targets: [{actorUuid}], origin, ignore});
}
export async function setTokenFlag(token, flagName, flagValue) {
    let theToken;
    if (typeof token === "string")
        theToken = DAEfromUuid(token);
    else
        theToken = token;
    return socketlibSocket.executeAsGM("setTokenFlag", { tokenUuid: theToken.uuid, flagName, flagValue });
    // return requestGMAction(GMAction.actions.setTokenFlag, { tokenId: tokenId, sceneId: canvas.scene.id, flagName, flagValue })
}
export function getFlag(actor, flagId) {
    let theActor;
    if (!actor)
        return error(`dae.getFlag: actor not defined`);
    if (typeof actor === "string") { // assume tstring === tokenId
        theActor = canvas.tokens.get(actor)?.actor;
        if (!theActor)
            theActor = game.actors.get(actor); // if not a token maybe an actor
        if (!theActor) {
            const entity = DAEfromUuid(actor);
            theActor = entity.actor ?? entity;
        }
    }
    else {
        if (actor instanceof Actor)
            theActor = actor;
        else
            theActor = actor.actor;
    }
    if (!theActor)
        return error(`dae.getFlag: actor not defined`);
    warn("dae get flag ", actor, theActor, getProperty(theActor.data, `flags.dae.${flagId}`));
    return getProperty(theActor.data, `flags.dae.${flagId}`);
}
export async function setFlag(tactor, flagId, value) {
    if (typeof tactor === "string") {
        return socketlibSocket.executeAsGM("setFlag", { actorId: tactor, flagId, value });
        // return requestGMAction(GMAction.actions.setFlag, { actorId: actor, flagId, value})
    }
    let actor;
    if (tactor instanceof Token)
        actor = tactor.actor;
    if (tactor instanceof Actor)
        actor = tactor;
    if (!actor)
        return error(`dae.setFlag: actor not defined`);
    return socketlibSocket.executeAsGM("setFlag", { actorId: actor.id, actorUuid: actor.uuid, flagId, value });
    // return requestGMAction(GMAction.actions.setFlag, { actorId: actor.id, actorUuid: actor.uuid, flagId, value})
}
export async function unsetFlag(tactor, flagId) {
    if (typeof tactor === "string") {
        socketlibSocket.executeAsGM("unsetFlag", { actorId: tactor, flagId });
        // return requestGMAction(GMAction.actions.unsetFlag, { actorId: tactor, flagId})
    }
    let actor;
    if (tactor instanceof Token)
        actor = tactor.actor;
    if (tactor instanceof Actor)
        actor = tactor;
    if (!actor)
        return error(`dae.setFlag: actor not defined`);
    return socketlibSocket.executeAsGM("unsetFlag", { actorId: actor.id, actorUuid: actor.uuid, flagId });
    // return requestGMAction(GMAction.actions.unsetFlag, { actorId: actor.id, actorUuid: actor.uuid, flagId})
}
export async function macroActorUpdate(...args) {
    let [onOff, actorUuid, type, value, targetField, undo] = args;
    const lastArg = args[args.length - 1];
    console.error("Last arg ", lastArg);
    if (!(actorUuid && type && value && targetField)) {
        console.warn("dae | invalid arguments passed ", ...args);
        console.warn(`dae | macro.actorUpdate expects the following arguments:
      actorUuid: string
      type: "number", "boolean", "string"
      expression: a roll expression, optionally starting with +-/*
      targetField: "string", e.g. data.attrbutes.hp.value
      undo: boolean (optional)
    `);
        return;
    }
    let tactor = await fromUuid(actorUuid);
    let actor;
    actor = tactor.actor ? tactor.actor : tactor;
    // const fieldDef = `flags.dae.save.${targetField}`;
    const fieldDef = `flags.dae.actorUpdate.${targetField}`;
    if (args[0] === "on") {
        if (!game.user.isGM) {
            console.warn(`dae | macro.actorUpdate user ${game.user.name} is updating ${actor.name} ${targetField}`);
        }
        const oldValue = getProperty(actor.data, targetField);
        switch (type) {
            case "boolean": value = JSON.parse(value) ? true : false;
            case "number":
                value = value.trim();
                const op = value[0];
                if (["+", "-", "*", "/"].includes(op))
                    value = (await new Roll(`${oldValue}${value}`, actor.getRollData()).roll()).total;
                else
                    value = (await new Roll(value, actor.getRollData()).roll()).total;
                break;
            default: // assume a string
        }
        const update = {};
        update[fieldDef] = oldValue;
        update[targetField] = value;
        await actor.update(update);
    }
    else if (args[0] === "off") {
        if (typeof undo === "string")
            undo = JSON.parse(undo);
        if (undo === undefined || undo) {
            const restoreValue = getProperty(actor.data, fieldDef);
            const update = {};
            let nullField = fieldDef.split(".");
            nullField[nullField.length - 1] = "-=" + nullField[nullField.length - 1];
            const nulledField = nullField.join(".");
            update[nulledField] = null;
            update[targetField] = restoreValue;
            await actor.update(update);
            if (tactor.actor) { // TODO need to do something special for tokens
            }
        }
    }
}

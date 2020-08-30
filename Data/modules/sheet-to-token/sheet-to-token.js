Hooks.on("preUpdateActor", (actor, updateData) => {
    if ("img" in updateData) {
        actor.data.token.img = updateData.img;
    }
});

Hooks.on("preUpdateToken", (scene, token, updateData) => {
    if ("actorData" in updateData) {
        if ("img" in updateData.actorData) {
            updateData.img = updateData.actorData.img;
        }
    }
});

export function getDefaultSpeedAttribute() {
	switch (game.system.id) {
		case "dcc":
			return "actor.data.data.attributes.speed.value";
		case "dnd5e":
			return "actor.data.data.attributes.movement.walk"
		case "lancer":
			return "actor.data.data.mech.speed"
		case "pf1":
			return "actor.data.data.attributes.speed.land.total"
		case "shadowrun5e":
			return "actor.data.data.movement.walk.value";
		case "swade":
			return "actor.data.data.stats.speed.value"
	}
	return ""
}

export function getDefaultDashMultiplier() {
	switch (game.system.id) {
		case "swade":
			return 0
		case "dcc":
		case "dnd5e":
		case "lancer":
		case "pf1":
		case "shadowrun5e":
			return 2
	}
	return 0
}

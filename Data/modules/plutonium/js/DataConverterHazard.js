import {UtilApplications} from "./UtilApplications.js";
import {Config} from "./Config.js";
import {UtilDataConverter} from "./UtilDataConverter.js";

class DataConverterHazard {
	/**
	 * @param haz
	 * @param [opts] Options object.
	 * @param [opts.isAddPermission]
	 * @param [opts.defaultPermission]
	 */
	static async pGetHazardJournal (haz, opts) {
		opts = opts || {};

		const content = await UtilDataConverter.pGetWithDescriptionPlugins(() => {
			const subtitle = Renderer.traphazard.getSubtitle(haz);
			return `<div>
				${subtitle ? `<div class="mb-1 italic">${subtitle}</div>` : ""}
				${Renderer.get().setFirstSection(true).render({entries: haz.entries}, 2)}
				${Renderer.traphazard.getRenderedTrapPart(Renderer.get(), haz)}
			</div>`;
		});

		const out = {
			name: UtilApplications.getCleanEntityName(UtilDataConverter.getNameWithSourcePart(haz)),
			permission: {default: 0},
			entryTime: Date.now(),
			content,
		};

		if (opts.defaultPermission != null) out.permission = {default: opts.defaultPermission};
		else if (opts.isAddPermission) out.permission = {default: Config.get("importHazard", "permissions")};

		return out;
	}
}

export {DataConverterHazard};

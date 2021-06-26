const Auras = {
	getAllAuras: function (doc) {
		return Auras.getManualAuras(doc).concat(doc.getFlag('token-auras', 'auras') || []);
	},

	getManualAuras: function (doc) {
		let aura1 = doc.getFlag('token-auras', 'aura1');
		let aura2 = doc.getFlag('token-auras', 'aura2');
		return [aura1 || Auras.newAura(), aura2 || Auras.newAura()];
	},

	newAura: function () {
		return {
			distance: null,
			colour: '#ffffff',
			opacity: .5,
			square: false,
			uuid: Auras.uuid()
		};
	},

	onConfigRender: function (config, html) {
		const auras = Auras.getManualAuras(config.token);
		const imageTab = html.find('.tab[data-tab="image"]');

		imageTab.append($(`
			<fieldset class="auras">
				<legend>${game.i18n.localize('AURAS.Auras')}</legend>
				<ol class="form-group">
				${auras.map((aura, idx) => `
					<li class="aura-row flexrow">
						<input class="color" type="text" value="${aura.colour}"
						       name="flags.token-auras.aura${idx + 1}.colour">
						<input type="color" value="${aura.colour}"
						       data-edit="flags.token-auras.aura${idx + 1}.colour">
						<input type="text" data-dtype="Number" value="${aura.opacity}"
						       name="flags.token-auras.aura${idx + 1}.opacity">
						<span>${game.i18n.localize('AURAS.Opacity')}</span>
						<input type="text" name="flags.token-auras.aura${idx + 1}.distance"
						       value="${aura.distance ? aura.distance : ''}" data-dtype="Number">
						<span>${game.i18n.localize('SCENES.Units')}</span>
						<label class="checkbox">
							<input type="checkbox" name="flags.token-auras.aura${idx + 1}.square"
							       ${aura.square ? 'checked' : ''}>
							${game.i18n.localize('SCENES.GridSquare')}
						</label>
					</li>
				`).join('')}
				</ol>
			</fieldset>
		`));

		imageTab.find('.auras input[type="color"][data-edit]')
			.change(config._onChangeInput.bind(config));
	},

	uuid: function () {
		return ([1e7]+-1e3+-4e3+-8e3+-1e11)
			.replace(/[018]/g, c =>
				(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
	}
};

Hooks.on('renderTokenConfig', Auras.onConfigRender);

Token.prototype.draw = (function () {
	const cached = Token.prototype.draw;
	return function () {
		const p = cached.apply(this, arguments);
		this.auras = this.addChildAt(new PIXI.Container(), 0);
		this.drawAuras();
		return p;
	};
})();

Token.prototype.drawAuras = function () {
	this.auras.removeChildren().forEach(c => c.destroy());
	const auras = Auras.getAllAuras(this.document).filter(a => a.distance);

	if (auras.length) {
		const gfx = this.auras.addChild(new PIXI.Graphics());
		const squareGrid = canvas.scene.data.gridType === 1;
		const dim = canvas.dimensions;
		const unit = dim.size / dim.distance;
		const [cx, cy] = [this.w / 2, this.h / 2];
		const {width, height} = this.data;

		auras.forEach(aura => {
			let w, h;

			if (aura.square) {
				w = aura.distance * 2 + (width * dim.distance);
				h = aura.distance * 2 + (height * dim.distance);
			} else {
				[w, h] = [aura.distance, aura.distance];

				if (squareGrid) {
					w += width * dim.distance / 2;
					h += height * dim.distance / 2;
				} else {
					w += (width - 1) * dim.distance / 2;
					h += (height - 1) * dim.distance / 2;
				}
			}

			w *= unit;
			h *= unit;
			gfx.beginFill(colorStringToHex(aura.colour), aura.opacity);

			if (aura.square) {
				const [x, y] = [cx - w / 2, cy - h / 2];
				gfx.drawRect(x, y, w, h);
			} else {
				gfx.drawEllipse(cx, cy, w, h);
			}

			gfx.endFill();
		});
	}
};

Token.prototype._onUpdate = (function () {
	const cached = Token.prototype._onUpdate;
	return function (data) {
		cached.apply(this, arguments);
		const aurasUpdated =
			data.flags && data.flags['token-auras']
			&& ['aura1', 'aura2', 'auras']
				.some(k => typeof data.flags['token-auras'][k] === 'object');

		if (aurasUpdated) {
			this.drawAuras();
		}
	};
})();

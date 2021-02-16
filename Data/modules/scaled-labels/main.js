Hooks.once("init", async function() {
  const scaledTextStyle = function scaledTextStyle(forceScale) {
    let newScale = forceScale ? forceScale : 1 / canvas.stage.scale._x;
    const style = CONFIG.canvasTextStyle.clone();
    if (canvas.stage.scale._x < 1) {
      style.fontSize = Math.round(style.fontSize/canvas.stage.scale._x);
    }
    return style;
  };
  const scaleLabelsOnZoom = function (canvas, options) {
    let forceTokens = options.forceTokens ? options.forceTokens : false;
    let forceTemplates = options.forceTemplates ? options.forceTemplates : false;
    let force = forceTokens || forceTemplates;
    let scaleNameplates = game.settings.get("scaled-labels", "scaletokennameplates");
    let scaleTemplates = game.settings.get("scaled-labels", "scaletemplates");
    if ( scaleNameplates || scaleTemplates || force ) {
      let newScale = options.overrideNewScale ? options.overrideNewScale : (1 / canvas.stage.scale._x);
      if ( newScale > 1 ) {
        let scaleChange = newScale / game.scaledLabels.lastScale;

        // Do nothing if scale changed by less than 10%:
        if ( scaleChange>0.9 && scaleChange < 1.1 && newScale && !force ) return;
      } else {
        let newScale = 1;
        if ( game.scaledLabels.lastScale == 1 && !force ) return;
      }
      game.scaledLabels.lastScale = newScale;

      let tokens = [];
      if ( scaleNameplates || forceTokens ) tokens = canvas.tokens.placeables;

      let templates = [];
      if ( scaleTemplates || forceTemplates ) templates = canvas.templates.placeables;

      for ( let token of tokens ) {
        if (!token.nameplate.visible) continue;
        let newNameplate = token._drawNameplate(newScale);
        token.removeChild(token.nameplate);
        token.nameplate = token.addChild(newNameplate);
        token.nameplate.visible = true;
      };
      for ( let template of templates ) {
        let newRuler = new PIXI.Text(null, scaledTextStyle(newScale));
        template.removeChild(template.ruler);
        template.ruler = template.addChild(newRuler);
        template._refreshRulerText();
      };
    } else {
      game.scaledLabels.lastScale = 1;
    }
  };
  var origTemplateDraw = MeasuredTemplate.prototype.draw;
  var origRulerOnAddWaypoint = Ruler.prototype._onAddWaypoint;
  var origTokenDrawNameplate = Token.prototype._drawNameplate;
  game.scaledLabels = {lastScale: 1, scaleLabelsOnZoom: scaleLabelsOnZoom};

  game.settings.register("scaled-labels", "scaletemplates", {
    name: "Scale Measured Template labels on zoom-out",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
    onChange: scaletemplates => {
      game.scaledLabels.scaleLabelsOnZoom(canvas, {forceTemplates: true, overrideNewScale: !scaletemplates && 1 || undefined});
    },
  });

  game.settings.register("scaled-labels", "scaletokennameplates", {
    name: "Scale Token Nameplates on zoom-out",
    hint: "Use carfuly, because this can cause nameplates to overlap",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
    onChange: scaletokennameplates => {
      game.scaledLabels.scaleLabelsOnZoom(canvas, {forceTokens: true, overrideNewScale: !scaletokennameplates && 1 || undefined});
    },
  });
  game.settings.register("scaled-labels", "scalerulerlabels", {
    name: "Scale Ruler labels on zoom-out",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });

  MeasuredTemplate.prototype.draw = async function() {
    origTemplateDraw.call(this);
    if ( game.settings.get("scaled-labels", "scaletemplates") && canvas.stage.scale._x < 1 ) {
      this.removeChild(this.ruler);
      this.ruler = this.addChild(new PIXI.Text(null, scaledTextStyle()));
    };
    return this;
  };

  Ruler.prototype._onAddWaypoint = function(event) {
    if ( game.settings.get("scaled-labels", "scalerulerlabels") && canvas.stage.scale._x < 1) {
      let cursor = event.data.getLocalPosition(canvas.grid),
          waypoint = new PIXI.Point(...canvas.grid.getCenter(cursor.x, cursor.y));
      this.waypoints.push(waypoint);
      this.labels.addChild(new PIXI.Text("", scaledTextStyle()));
    } else {
      origRulerOnAddWaypoint.call(this, event);
    };
  };

  Token.prototype._drawNameplate = function(forceScale) {
    let newScale = forceScale ? forceScale : 1 / canvas.stage.scale._x;
    if ( game.settings.get("scaled-labels", "scaletokennameplates") && newScale > 1 ) {
      // Note: this is mostly a copy of code from foundry.js with some changes

      // Gate font size based on grid size
      const gs = canvas.dimensions.size;
      let h = 24 * newScale;
      if ( gs >= 200 ) h = 36 * newScale;
      else if ( gs <= 70 ) h = 20 * newScale;
  
      // Create the nameplate text
      const name = new PIXI.Text(this.data.name, scaledTextStyle());
  
      // Anchor to the top-center of the nameplate
      name.anchor.set(0.5, 0);
  
      // Adjust dimensions
      let bounds = name.getBounds(),
          r = (bounds.width / bounds.height),
          maxWidth = this.w * newScale,
          nrows = Math.ceil((h * r) / maxWidth);
  
      // Wrap for multiple rows
      if ( h * r > maxWidth ) {
        name.style.wordWrap = true;
        name.style.wordWrapWidth = (bounds.height / h) * maxWidth;
        bounds = name.getBounds();
        r = (bounds.width / bounds.height);
      }
  
      // Downsize the name using the given scaling ratio
      name.height = h * nrows;
      name.width = h * nrows * r;
  
      // Set position at bottom of token
      let ox = gs / 24;
      name.position.set(this.w / 2, this.h + ox);
      return name;
    } else {
      return origTokenDrawNameplate.call(this);
    };
  }
});


Hooks.on("canvasPan", (canvas, options) => {
  game.scaledLabels.scaleLabelsOnZoom(canvas, options);
});

export class SwpUtility {
  replaceBracketAttributes(content = '', data = {}) {
    if (content.length < 1) {
      return '';
    }

    let regex = /(\{\{)(\/[a-zA-Z]+\s)?([^\}]+)(\}\})/gi;
    return content.replace(regex, (match, p1, p2, p3, p4) => {
      // Handle deferred rolls.
      if (p2 && p2.includes('/r')) {
        let label = p3.split('#');
        return `<a class="inline-roll-plus" data-roll="${label[1] ? label[0] + '#' + label[1] : label[0]}"><i class="fa fa-dice-d20"></i> ${label[2] ? label[2] : label[0]}</a>`;
      }
      // Handle immediate rolls.
      else {
        return `<span class="inline-result-plus">${SwpUtility._replaceData(p3, data)}</span>`;
      }
    });
  }

  /**
   * Replace referenced data attributes in the roll formula with the syntax `@attr` with the corresponding key from
   * the provided `data` object.
   * @param {String} formula    The original formula within which to replace
   * @private
   */
  static _replaceData(formula, data) {
    let dataRgx = new RegExp(/@([a-z.0-9_\-]+)/gi);
    let rollFormula = formula.replace(dataRgx, (match, term) => {
      let value = getProperty(data, term);
      return value ? String(value).trim() : "0";
    });

    // Use the roll class to calculate.
    let r = new Roll(rollFormula, data).evaluate();
    return r.total;
  }

  /**
   * Update the templates available in TinyMCE.
   */
  static updateTinyMCETemplates(init = false) {
    if (init) {
      /**
       * Default configuration options for TinyMCE editors
       */
      let mceOptions = {
        css: ["/modules/simple-worldbuilding-plus/styles/dist/mce.css"],
        plugins: "template",
        toolbar: "template"
      };

      // Add our new options.
      for (let [key, value] of Object.entries(CONFIG.TinyMCE)) {
        let newOpt = null;
        if (Array.isArray(value) && value.includes(mceOptions[key]) == false) {
          newOpt = value.concat(mceOptions[key]);
        }
        else if (typeof value == 'string' && value.includes('template') == false) {
          newOpt = key == 'toolbar' ? value.replace('save', 'template save') : `${value} ${mceOptions[key]}`;
        }
        else if (typeof value == 'object') {
          newOpt = mergeObject(value, mceOptions[key]);
        }
        else {
          newOpt = value;
        }

        CONFIG.TinyMCE[key] = newOpt;
      }
    }

    // Build modifier values.
    let journalModifiers = game.journal.getName('SWP_DERIVED');
    if (journalModifiers) {
      let entries = [...journalModifiers.data.content.matchAll(/\|\|(.*)\|(.*)\|\|/g)];
      game.SimpleWorldbuildingPlus.modifiers = entries.map(m => {
        return {
          key: m[1],
          formula: m[2]
        };
      });
    }

    let journalTemplates = game.journal.filter(j => j.name.includes('SWP_TPL_'));
    let mceTemplates = journalTemplates.map(j => {
      let name = j.name.split('SWP_TPL_')[1];
      return {
        title: name,
        description: `A character sheet template for ${name} actors.`,
        content: j.data.content,
      }
    });

    // TODO: Get the grid templates working well with TinyMCE.
    // mceTemplates = mceTemplates.concat([
    //   { title: 'Grid (1 column)', description: 'A 1 column grid', content: await renderTemplate('/modules/simple-worldbuilding-plus/templates/1col.html', {}) },
    //   { title: 'Grid (2 column)', description: 'A 2 column grid', content: await renderTemplate('/modules/simple-worldbuilding-plus/templates/2col.html', {}) },
    //   { title: 'Grid (3 column)', description: 'A 3 column grid', content: await renderTemplate('/modules/simple-worldbuilding-plus/templates/3col.html', {}) },
    //   { title: 'Grid (4 column)', description: 'A 4 column grid', content: await renderTemplate('/modules/simple-worldbuilding-plus/templates/4col.html', {}) },
    //   { title: 'Grid (5 column)', description: 'A 5 column grid', content: await renderTemplate('/modules/simple-worldbuilding-plus/templates/5col.html', {}) },
    //   { title: 'Grid (6 column)', description: 'A 6 column grid', content: await renderTemplate('/modules/simple-worldbuilding-plus/templates/6col.html', {}) }
    // ]);

    // TODO: Find a better way to replace this.
    TextEditor.create = async function(options={}, content="") {
      let defaultOptions = {
        branding: false,
        menubar: false,
        statusbar: false,
        plugins: CONFIG.TinyMCE.plugins ?? "lists image table hr code save link template",
        toolbar: CONFIG.TinyMCE.toolbar ?? "styleselect bullist numlist image table hr link removeformat code template save",
        content_css: CONFIG.TinyMCE.content_css.join(",") ?? "/css/mce.css",
        save_enablewhendirty: true,
        table_default_styles: {},
        templates: mceTemplates,

        // Style Dropdown Formats
        style_formats: [
          {
            title: "Custom",
            items: [
              {
                title: "Secret",
                block: 'section',
                classes: 'secret',
                wrapper: true
              }
            ]
          }
        ],
        style_formats_merge: true,

        // Bind callback events
        init_instance_callback: editor => {
          const window = editor.getWin();

          // Set initial content
          if (content) editor.setContent(content);

          // Prevent window zooming
          window.addEventListener("wheel", event => {
            if (event.ctrlKey) event.preventDefault();
          }, { passive: false });

          // Handle dropped Entity data
          window.addEventListener("drop", ev => this._onDropEditorData(ev, editor))
        }
      };

      const mergedOptions = mergeObject(defaultOptions, options);
      const mceConfig = mergeObject(CONFIG.TinyMCE, mergedOptions, {inplace: false});
      mceConfig.target = options.target;
      const editors = await tinyMCE.init(mceConfig);
      return editors[0];
    }
  }
}
const _0x5472=['<button><i\x20class=\x22fas\x20fa-cogs\x22></i>\x20Configure\x20','pHandleButtonClick','insertAfter','menu','$getDirButton','import','span','renderCompendiumDirectory','text','4cLkOkV','25839sbuxjV','pb-1','_doRenderSettings_handleConfigHidePlutoniumDirectoryButtons','renderItemDirectory','renderJournalDirectory','9VZApXt','#compendium','<button\x20class=\x22ui__btn-open-menu\x22><i\x20class=\x22fas\x20fa-bars\x22></i>\x20Open\x20Game\x20Menu</button>','isFixEscapeKey','minimumRole','134FsqkPQ','element','<div\x20class=\x22w-100\x22></div>','_init_addCompendiumObfuscation','click','isStreamerMode','appendTo','.header-actions','button[data-action=\x22configure\x22]','find','_init_addDirectoryWrapper','746lXpnQs','.compendium-footer','151907YrzeuI','trim','css','init','30013khJrJM','.dir__wrp-header','_init_isRequireExtraSpacingFvttEntityType','get','54FeoVwL','</button>','6779nFCUcm','settings','slideDown','_doRenderSettings_handleConfigFixEscapeKey','SRD\x20Module','isAddOpenMainMenuButtonToSettings','user','.ui__wrp-player-settings','insertBefore','$getDirButtonQuick','renderMacroDirectory','isGM','length','dir__btn-header','.action-buttons','15421skKGNy','6dRZgbe','addClass','.ui__btn-open-menu','render','Plutonium\x20','_handleConfigUpdate','compendium','_doRenderSettings_addPlayerConfigButton','756194bUuhvF','.cfg__btn-open-alt'];const _0xa766=function(_0x3effb6,_0x9f22fe){_0x3effb6=_0x3effb6-0x17d;let _0x5472e2=_0x5472[_0x3effb6];return _0x5472e2;};const _0x10a0a1=_0xa766;(function(_0x19dc57,_0x225901){const _0x3fd344=_0xa766;while(!![]){try{const _0x4aa13e=parseInt(_0x3fd344(0x1a5))*-parseInt(_0x3fd344(0x1a7))+parseInt(_0x3fd344(0x19b))*-parseInt(_0x3fd344(0x190))+parseInt(_0x3fd344(0x19d))*parseInt(_0x3fd344(0x185))+-parseInt(_0x3fd344(0x1b7))*parseInt(_0x3fd344(0x1a1))+-parseInt(_0x3fd344(0x18b))*parseInt(_0x3fd344(0x186))+-parseInt(_0x3fd344(0x1b6))+parseInt(_0x3fd344(0x1bf));if(_0x4aa13e===_0x225901)break;else _0x19dc57['push'](_0x19dc57['shift']());}catch(_0x4f9ae5){_0x19dc57['push'](_0x19dc57['shift']());}}}(_0x5472,0x72aee));import{Config}from'./Config.js';import{ChooseImporter}from'./ChooseImporter.js';import{MenuCollectionTools}from'./MenuCollectionTools.js';import{SharedConsts}from'../shared/SharedConsts.js';class UtilUi{static[_0x10a0a1(0x1a0)](){const _0x27c71c=_0x10a0a1;game[_0x27c71c(0x1ad)][_0x27c71c(0x1b2)]&&(UtilUi[_0x27c71c(0x19a)]('renderActorDirectory'),UtilUi[_0x27c71c(0x19a)](_0x27c71c(0x189)),UtilUi[_0x27c71c(0x19a)](_0x27c71c(0x18a)),UtilUi['_init_addDirectoryWrapper']('renderRollTableDirectory'),UtilUi[_0x27c71c(0x19a)]('renderMacroDirectory')),UtilUi[_0x27c71c(0x193)](),Hooks['on']('plutonium.configUpdate',()=>this[_0x27c71c(0x1bc)]());}static[_0x10a0a1(0x193)](){const _0x2214eb=_0x10a0a1,_0x9d8bf8='('+SharedConsts['MODULE_NAME']+')';Hooks['on'](_0x2214eb(0x183),()=>{const _0x35cc2f=_0x2214eb;if(!Config[_0x35cc2f(0x1a4)]('ui',_0x35cc2f(0x195)))return;$(_0x35cc2f(0x18c))['find'](_0x35cc2f(0x19c))['each']((_0x2e6241,_0x4ee875)=>{const _0x52f752=_0x35cc2f;$(_0x4ee875)[_0x52f752(0x199)](_0x52f752(0x182))['filter']((_0x518bc9,_0x3363f3)=>$(_0x3363f3)[_0x52f752(0x184)]()[_0x52f752(0x19e)]()===_0x9d8bf8)['text']('\x20(Expanded\x20SRD)');});}),ui[_0x2214eb(0x1bd)][_0x2214eb(0x1ba)]();}static[_0x10a0a1(0x19a)](_0x5c6d02){const _0x1b4b2d=_0x10a0a1,_0x88afa5=Config[_0x1b4b2d(0x1a4)](_0x1b4b2d(0x181),_0x1b4b2d(0x18f)),_0xd8c31a=game[_0x1b4b2d(0x1ad)]['role']>=_0x88afa5&&this['_init_isImportableFvttEntityType'](_0x5c6d02);Hooks['on'](_0x5c6d02,(_0x4abe36,_0x167857)=>{const _0xfce37c=_0x1b4b2d;_0x167857[_0xfce37c(0x199)](_0xfce37c(0x1a2))['remove']();const _0x54bc59=ChooseImporter[_0xfce37c(0x180)](_0x5c6d02),_0x73ca3f=ChooseImporter[_0xfce37c(0x1b0)](_0x5c6d02),_0x3a02eb=_0xd8c31a?$$`<div class="btn-group flex-v-center mr-1 w-100">
				${_0x54bc59?_0x54bc59[_0xfce37c(0x1b8)](_0xfce37c(0x1b4)):null}
				${_0x73ca3f?_0x73ca3f[_0xfce37c(0x1b8)](_0xfce37c(0x1b4)):null}
			</div>`:_0xfce37c(0x192),_0xa368aa=$$`<div class="flex-col dir__wrp-header w-100 no-shrink min-w-100 dir__control-header ${this[_0xfce37c(0x1a3)](_0x5c6d02)?_0xfce37c(0x187):''}">
					<div class="flex w-100">
						${_0x3a02eb}
						${MenuCollectionTools[_0xfce37c(0x180)](_0x5c6d02)[_0xfce37c(0x1b8)](_0xfce37c(0x1b4))}
						${Config[_0xfce37c(0x180)]()[_0xfce37c(0x1b8)]('dir__btn-header')}
					</div>
				</div>`,_0x572ced=_0x167857[_0xfce37c(0x199)](_0xfce37c(0x197));if(_0x572ced[_0xfce37c(0x1b3)])_0xa368aa['insertAfter'](_0x572ced[0x0]);MenuCollectionTools['$getDirButton'](_0x5c6d02)[_0xfce37c(0x1b8)]('dir__btn-header\x20dir__control-header--alt')[_0xfce37c(0x19f)]({'maxWidth':0x1c})[_0xfce37c(0x196)](_0x167857[_0xfce37c(0x199)](_0xfce37c(0x1b5)));}),Hooks['on']('renderSettings',(_0x2b2e38,_0x1828a2)=>{const _0x3f4fde=_0x1b4b2d;this[_0x3f4fde(0x1aa)](_0x2b2e38,_0x1828a2),this[_0x3f4fde(0x188)](_0x2b2e38,_0x1828a2),this[_0x3f4fde(0x1be)](_0x2b2e38,_0x1828a2);});}static['_init_isImportableFvttEntityType'](_0x2905ce){const _0x5cee06=_0x10a0a1;return _0x2905ce!==_0x5cee06(0x1b1);}static[_0x10a0a1(0x1a3)](_0x560320){const _0xc7af2f=_0x10a0a1;return _0x560320===_0xc7af2f(0x1b1);}static['_handleConfigUpdate'](){const _0x26f419=_0x10a0a1;if(!ui[_0x26f419(0x1a8)]||!ui[_0x26f419(0x1a8)][_0x26f419(0x191)])return;this[_0x26f419(0x1aa)](ui[_0x26f419(0x1a8)],ui[_0x26f419(0x1a8)]['element']);}static['_doRenderSettings_handleConfigFixEscapeKey'](_0x5e8179,_0x123ba1){const _0x469521=_0x10a0a1;if(!Config[_0x469521(0x1a4)]('ui',_0x469521(0x18e))||!Config['get']('ui',_0x469521(0x1ac)))return _0x123ba1[_0x469521(0x199)](_0x469521(0x1b9))['remove']();if(_0x123ba1['find'](_0x469521(0x1b9))['length'])return;$(_0x469521(0x18d))[_0x469521(0x194)](()=>{const _0x1f1c12=_0x469521,_0x3941c2=ui['menu'][_0x1f1c12(0x191)];if(!_0x3941c2['length'])ui[_0x1f1c12(0x17f)]['render'](!![]);else _0x3941c2[_0x1f1c12(0x1a9)](0x96);})[_0x469521(0x1af)](_0x123ba1[_0x469521(0x199)](_0x469521(0x198)));}static['_doRenderSettings_handleConfigHidePlutoniumDirectoryButtons'](_0x468f7f,_0xc75a51){const _0x35567a=_0x10a0a1;if(!Config['get']('ui','isHidePlutoniumDirectoryButtons'))return _0xc75a51['find'](_0x35567a(0x1c0))['remove']();if(_0xc75a51[_0x35567a(0x199)]('.cfg__btn-open-alt')[_0x35567a(0x1b3)])return;Config[_0x35567a(0x180)]({'isGameSettingsButton':!![]})[_0x35567a(0x17e)](_0xc75a51[_0x35567a(0x199)](_0x35567a(0x198)));}static[_0x10a0a1(0x1be)](_0x51cb9b,_0x51c587){const _0x4afd4e=_0x10a0a1;if(game[_0x4afd4e(0x1ad)][_0x4afd4e(0x1b2)])return;if(_0x51c587['find'](_0x4afd4e(0x1ae))['length'])return;const _0x41bb03=$(_0x4afd4e(0x1c1)+(Config[_0x4afd4e(0x1a4)]('ui',_0x4afd4e(0x195))?_0x4afd4e(0x1ab):_0x4afd4e(0x1bb))+_0x4afd4e(0x1a6))['click'](_0x1016ae=>Config[_0x4afd4e(0x17d)](_0x1016ae));$$`<div class="ui__wrp-player-settings">${_0x41bb03}</div>`['insertAfter'](_0x51c587[_0x4afd4e(0x199)]('.game-system'));}}export{UtilUi};
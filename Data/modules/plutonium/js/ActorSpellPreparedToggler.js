const _0x1df8=['_activateListeners_initBtnListNew','_triggerCollectionUpdate','info','_activateListeners_initBtnListSave','length','.fltr__mini-view','_pageFilter','<button\x20class=\x22btn\x20btn-xxs\x20btn-danger\x22\x20title=\x22Delete\x22><span\x20class=\x22glyphicon\x20glyphicon-trash\x22></span></button>','getNextState','get','_renderableCollectionRules','_addHookBase','getFltrSpellLevelStr','forEach','3503wTlTxt','uid','QWE','render','_activateListeners_initBtnListLoad','Saved\x20as\x20\x22','getShowModal','ritual','_activateListeners_pInitListAndFilters','_$iptSearch','append','pSet','state','addToFilters','detach','_proxyAssignSimple','_actor','name','MODULE_NAME_FAKE','599779UwpSrc','vocal','ve-hidden','setNextState','ele','Failed\x20to\x20load\x20list!\x20','<div\x20class=\x22flex-col\x20w-100\x20h-100\x22></div>','[name=\x22btn-reset\x22]','[name=\x22cb-select-all\x22]','[name=btn-toggle-summary]','$wrpRow','Level','Material','spell','prepared','Somatic','.saves','1175774xjGoPH','toggleClass','map','Loaded\x20list\x20\x22','getData','_activateListeners_initIptListName','_pDoLoadInitialState','bind','doDeleteExistingRender','Unknown','saveId','Load\x20Prepared\x20Spell\x20List','1278126qyArJY','_getDefaultState','_list','_activeSaveId','triggerSpellListsCollectionUpdate','[name=\x22btn-list-load\x22]','Ritual','appendTo','[name=\x22ipt-list-name\x22]','somatic','constructor','input','_id','/template/ActorSpellPreparedToggler.hbs','pCommitState','error','find','addEventListener','.veapp__list','getValues','2JhGPYr','filter','getMaxWindowHeight','type','pHandleButtonClick','reset','then','index','[name=\x22btn-list-new\x22]','preparation','980806viGBhA','cbClose','EVNT_VALCHANGE','75OLWZjL','_addHookAll','addItem','[name=\x22btn-run\x22]','push','pGet','MODULE_LOCATION','filterBox','_$wrp','toDisplay','val','STR_SEE_CONSOLE','_filterBox','spellLists','doReorderExistingComponent','[data-name=\x22wrp-btns-sort\x22]','level','421966kZBNNi','actor','.act-sp-prep__disp-modified','_doLoadSave','Verbal','material','init','addHookSpellLists','5489621qEUImo','_$wrpSaveRows','1DNpGRE','_$iptName','_$btnReset','_PROP_SPELL_LISTS','flags','_miscFilter','_getActiveSave','click','_levelFilter','tool-actor-spell-prepared-toggler','AppFilter','concentration','_activateListeners_initBtnRun','data','pSetSpellItemIsPrepared','_cbClose','components','cbSel','prop','_pPopulateBoxOptions','indexOf','spellItemId','.search','fromObject','doAbsorbItems','spells','comp','_state','set','sortSpells','notifications','visibleItems','_fMisc','_activateListeners_initBtnReset','<button\x20class=\x22btn\x20btn-xxs\x22\x20title=\x22Load\x22><span\x20class=\x22glyphicon\x20glyphicon-ok\x22></span></button>','mode','Concentration','Components\x20&\x20Miscellaneous','close','change','_actorItems','_handleFilterChange','SavedSpellListComponent','_compSaves','activateListeners','entity','items'];const _0x73d4=function(_0x40b601,_0x5801f6){_0x40b601=_0x40b601-0x1be;let _0x1df85c=_0x1df8[_0x40b601];return _0x1df85c;};const _0x46e62d=_0x73d4;(function(_0x93a277,_0x3bdeb7){const _0xdb8151=_0x73d4;while(!![]){try{const _0x36d217=-parseInt(_0xdb8151(0x207))+-parseInt(_0xdb8151(0x239))+-parseInt(_0xdb8151(0x225))+-parseInt(_0xdb8151(0x1fb))+-parseInt(_0xdb8151(0x21b))*parseInt(_0xdb8151(0x1ea))+parseInt(_0xdb8151(0x228))*parseInt(_0xdb8151(0x1d7))+parseInt(_0xdb8151(0x241))*parseInt(_0xdb8151(0x243));if(_0x36d217===_0x3bdeb7)break;else _0x93a277['push'](_0x93a277['shift']());}catch(_0x8c2d80){_0x93a277['push'](_0x93a277['shift']());}}}(_0x1df8,0xa9f34));import{SharedConsts}from'../shared/SharedConsts.js';import{LGT,Util}from'./Util.js';import{AppFilter}from'./FilterApplications.js';import{DataConverterSpell}from'./DataConverterSpell.js';class ActorSpellPreparedToggler extends Application{static[_0x46e62d(0x21f)](_0x167d29,_0x2e3365,_0x50bbd4,_0x74e72){const _0x282d64=_0x46e62d,_0x360ddd=new ActorSpellPreparedToggler(_0x2e3365[_0x282d64(0x23a)]);_0x360ddd[_0x282d64(0x1da)](!![]);}constructor(_0xb8986f){const _0x3c7669=_0x46e62d;super({'title':'Spell\x20Prepared\x20Toggler','template':SharedConsts[_0x3c7669(0x22e)]+_0x3c7669(0x214),'width':0x1e0,'height':Util[_0x3c7669(0x21d)](),'resizable':!![]}),this[_0x3c7669(0x1e7)]=_0xb8986f,this[_0x3c7669(0x1c2)]=this['_actor'][_0x3c7669(0x1c8)][_0x3c7669(0x21c)](_0x5f1307=>_0x5f1307[_0x3c7669(0x21e)]===_0x3c7669(0x1f7)&&_0x5f1307[_0x3c7669(0x250)][_0x3c7669(0x250)][_0x3c7669(0x238)]!==0x0&&_0x5f1307[_0x3c7669(0x250)][_0x3c7669(0x250)][_0x3c7669(0x224)]&&_0x5f1307[_0x3c7669(0x250)][_0x3c7669(0x250)][_0x3c7669(0x224)][_0x3c7669(0x266)]==='prepared'),this[_0x3c7669(0x1cf)]=new ActorSpellPreparedToggler[(_0x3c7669(0x24d))](),this[_0x3c7669(0x244)]=null,this[_0x3c7669(0x20a)]=null,this[_0x3c7669(0x1c5)]=null,this[_0x3c7669(0x242)]=null,this[_0x3c7669(0x1d3)]=null,this['_list']=null,this[_0x3c7669(0x245)]=null,this[_0x3c7669(0x1e0)]=null;}[_0x46e62d(0x1c3)](){const _0x29749b=_0x46e62d,_0x4a3616=this['_pageFilter'][_0x29749b(0x22f)][_0x29749b(0x21a)]();this[_0x29749b(0x209)]['filter'](_0x2b65b8=>this[_0x29749b(0x1cf)][_0x29749b(0x231)](_0x4a3616,this['_rows'][_0x2b65b8['ix']]));}[_0x46e62d(0x1c6)](_0x2a4a67){const _0x55c25a=_0x46e62d;super[_0x55c25a(0x1c6)](_0x2a4a67),this[_0x55c25a(0x200)](_0x2a4a67),this[_0x55c25a(0x1c9)](_0x2a4a67),this[_0x55c25a(0x1cc)](_0x2a4a67),this['_activateListeners_initBtnListLoad'](_0x2a4a67),this[_0x55c25a(0x24f)](_0x2a4a67),this[_0x55c25a(0x264)](_0x2a4a67),this[_0x55c25a(0x1df)](_0x2a4a67)[_0x55c25a(0x221)](()=>this[_0x55c25a(0x201)]());}[_0x46e62d(0x200)](_0x4cfda9){const _0x19fb84=_0x46e62d;this[_0x19fb84(0x244)]=_0x4cfda9[_0x19fb84(0x217)](_0x19fb84(0x20f));}[_0x46e62d(0x1c9)](_0x55a452){const _0x1020ab=_0x46e62d;_0x55a452[_0x1020ab(0x217)](_0x1020ab(0x223))[_0x1020ab(0x24a)](async()=>{const _0x4cee43=_0x1020ab;this[_0x4cee43(0x20a)]=null,this['_$iptName'][_0x4cee43(0x232)]('');});}['_getActiveSave']({activeSaveId:activeSaveId=null}={}){const _0x39db01=_0x46e62d;return activeSaveId=activeSaveId||this['_activeSaveId'],this[_0x39db01(0x1c5)][_0x39db01(0x235)]['find'](_0x43706c=>_0x43706c['id']===activeSaveId);}[_0x46e62d(0x1cc)](_0x10021a){_0x10021a['find']('[name=\x22btn-list-save\x22]')['click'](async()=>{const _0x5a3d91=_0x73d4;try{let _0x5b5da4=this[_0x5a3d91(0x249)]();!_0x5b5da4&&(_0x5b5da4={'id':CryptUtil[_0x5a3d91(0x1d8)](),'entity':{'name':'','spells':[]}},this['_compSaves']['spellLists']['push'](_0x5b5da4));this['_activeSaveId']=_0x5b5da4['id'],_0x5b5da4[_0x5a3d91(0x1c7)][_0x5a3d91(0x1e8)]=this['_$iptName'][_0x5a3d91(0x232)]()['trim']()||'(Unnamed\x20List)',this[_0x5a3d91(0x244)][_0x5a3d91(0x232)](_0x5b5da4[_0x5a3d91(0x1c7)][_0x5a3d91(0x1e8)]),_0x5b5da4[_0x5a3d91(0x1c7)][_0x5a3d91(0x25c)]=this['_list']['items'][_0x5a3d91(0x1fd)](_0x31effa=>{const _0x72107b=_0x5a3d91,_0xf71bef=this[_0x72107b(0x1e7)][_0x72107b(0x1c8)][_0x72107b(0x1d2)](_0x31effa[_0x72107b(0x250)][_0x72107b(0x258)]);if(!_0xf71bef)return;return{'id':_0x31effa['data'][_0x72107b(0x258)],'isPrepared':_0x31effa[_0x72107b(0x250)][_0x72107b(0x1d1)]()};})[_0x5a3d91(0x21c)](Boolean);const _0x511acd=this[_0x5a3d91(0x1e7)][_0x5a3d91(0x247)]?.[SharedConsts[_0x5a3d91(0x1e9)]],_0x2641d6={..._0x511acd||{}};MiscUtil[_0x5a3d91(0x25f)](_0x2641d6,this[_0x5a3d91(0x211)]['name'],_0x5a3d91(0x205),this['_activeSaveId']),await this[_0x5a3d91(0x1e7)]['update']({'flags':{[SharedConsts['MODULE_NAME_FAKE']]:_0x2641d6}}),this['_compSaves'][_0x5a3d91(0x20b)](),ui[_0x5a3d91(0x261)][_0x5a3d91(0x1cb)](_0x5a3d91(0x1dc)+_0x5b5da4[_0x5a3d91(0x1c7)][_0x5a3d91(0x1e8)]+'\x22!');}catch(_0x485a31){ui['notifications'][_0x5a3d91(0x216)]('Failed\x20to\x20save\x20list!\x20'+VeCt['STR_SEE_CONSOLE']),console[_0x5a3d91(0x216)](...LGT,_0x485a31);}});}[_0x46e62d(0x1db)](_0x446041){const _0x3274d2=_0x46e62d;_0x446041['find'](_0x3274d2(0x20c))[_0x3274d2(0x24a)](async()=>{const _0xc38681=_0x3274d2;try{const {$modalInner:_0x355861,doClose:_0x269717}=UiUtil[_0xc38681(0x1dd)]({'title':_0xc38681(0x206),'isHeaderBorder':!![],'cbClose':_0xde6d57=>{const _0x570180=_0xc38681;this['_$wrpSaveRows'][_0x570180(0x1e5)]();if(!_0xde6d57)return;this[_0x570180(0x23c)](_0xde6d57),ui[_0x570180(0x261)][_0x570180(0x1cb)](_0x570180(0x1fe)+this[_0x570180(0x249)]()[_0x570180(0x1c7)][_0x570180(0x1e8)]+'\x22!');}});if(!this[_0xc38681(0x1c5)][_0xc38681(0x235)][_0xc38681(0x1cd)])_0x355861[_0xc38681(0x1e1)]('<div\x20class=\x22italic\x20ve-muted\x20py-1\x22>No\x20saved\x20spell\x20lists\x20found.</div>');this[_0xc38681(0x242)]=this[_0xc38681(0x242)]||$(_0xc38681(0x1f0)),this[_0xc38681(0x242)]['appendTo'](_0x355861);if(!this[_0xc38681(0x1d3)]){this[_0xc38681(0x1d3)]=new ActorSpellPreparedToggler['RenderableCollectionSpellLists'](this[_0xc38681(0x1c5)],this[_0xc38681(0x242)]);const _0x4051a6=()=>{const _0x1c5966=_0xc38681;this[_0x1c5966(0x1d3)][_0x1c5966(0x1da)](),StorageUtil[_0x1c5966(0x1e2)](this['_getStorageKeyAllLists'](),this[_0x1c5966(0x1c5)][_0x1c5966(0x235)]);};this['_compSaves'][_0xc38681(0x240)](_0x4051a6),_0x4051a6();}this[_0xc38681(0x1d3)]['cbClose']=_0x269717;}catch(_0x307f72){ui[_0xc38681(0x261)]['error'](_0xc38681(0x1ef)+VeCt[_0xc38681(0x233)]),console[_0xc38681(0x216)](...LGT,_0x307f72);}});}[_0x46e62d(0x24f)](_0xa7e9b8){const _0x392e52=_0x46e62d;_0xa7e9b8[_0x392e52(0x217)](_0x392e52(0x22b))['click'](async()=>{const _0xc85bbf=_0x392e52;for(const _0x42b2f9 of this[_0xc85bbf(0x209)][_0xc85bbf(0x1c8)]){await _0x42b2f9['data'][_0xc85bbf(0x215)]();}});}[_0x46e62d(0x264)](_0x3620d8){const _0xf82c06=_0x46e62d;this[_0xf82c06(0x245)]=_0x3620d8[_0xf82c06(0x217)](_0xf82c06(0x1f1))['click'](()=>{const _0x293930=_0xf82c06;_0x3620d8['find'](_0x293930(0x259))['val']('');if(!this[_0x293930(0x209)])return;this[_0x293930(0x209)][_0x293930(0x220)](),this[_0x293930(0x209)]['items'][_0x293930(0x1d6)](_0x52937e=>_0x52937e['data']['resetNextState']());});}['_activateListeners_pInitListAndFilters'](_0x5c1b6c){const _0x343f58=_0x46e62d;this[_0x343f58(0x1e0)]=_0x5c1b6c['find']('.search'),this[_0x343f58(0x209)]=new List({'$iptSearch':this[_0x343f58(0x1e0)],'$wrpList':_0x5c1b6c[_0x343f58(0x217)](_0x343f58(0x219)),'isUseJquery':!![],'fnSort':PageFilterSpells[_0x343f58(0x260)]}),SortUtil['initBtnSortHandlers'](_0x5c1b6c['find'](_0x343f58(0x237)),this[_0x343f58(0x209)]);const _0x2f5c31=_0x5c1b6c[_0x343f58(0x217)](_0x343f58(0x1f2))[_0x343f58(0x1c1)](()=>{const _0x1b6f64=_0x343f58,_0x5ee154=_0x2f5c31[_0x1b6f64(0x255)]('checked');this[_0x1b6f64(0x209)][_0x1b6f64(0x262)]['forEach'](_0x2b0272=>_0x2b0272[_0x1b6f64(0x250)][_0x1b6f64(0x1ed)](_0x5ee154));});return this[_0x343f58(0x1cf)]['pInitFilterBox']({'$iptSearch':this[_0x343f58(0x1e0)],'$btnReset':this[_0x343f58(0x245)],'$btnOpen':_0x5c1b6c[_0x343f58(0x217)]('[name=btn-filter]'),'$btnToggleSummaryHidden':_0x5c1b6c[_0x343f58(0x217)](_0x343f58(0x1f3)),'$wrpMiniPills':_0x5c1b6c[_0x343f58(0x217)](_0x343f58(0x1ce)),'namespace':_0x343f58(0x24c)})[_0x343f58(0x221)](()=>{const _0xd0cbbe=_0x343f58;this['_rows']['forEach'](_0x3c348a=>this[_0xd0cbbe(0x1cf)]['addToFilters'](_0x3c348a)),this[_0xd0cbbe(0x209)][_0xd0cbbe(0x25b)](this[_0xd0cbbe(0x1c2)],{'fnGetName':_0x578e40=>_0x578e40[_0xd0cbbe(0x1e8)],'fnGetValues':_0x50cf04=>({'level':MiscUtil[_0xd0cbbe(0x1d2)](_0x50cf04,_0xd0cbbe(0x250),'data',_0xd0cbbe(0x238))||-0x1}),'fnGetData':(_0x2353ff,_0x4f7e98)=>{const _0x1c6b7d=_0xd0cbbe,_0x180c6b=$(_0x2353ff[_0x1c6b7d(0x1ee)]);return{'spellItemId':_0x4f7e98[_0x1c6b7d(0x213)]||_0x4f7e98['id'],'cbSel':_0x180c6b[_0x1c6b7d(0x217)](_0x1c6b7d(0x212))[0x0],'$dispModified':_0x180c6b['find'](_0x1c6b7d(0x23b))};},'fnBindListeners':(_0x2212de,_0x4adfb7)=>{const _0x4504cb=_0xd0cbbe,_0x1f1c4b={'prepared':_0x4adfb7[_0x4504cb(0x250)]['data'][_0x4504cb(0x224)][_0x4504cb(0x1f8)]},_0x34b994=()=>{const _0x3fefb6=_0x4504cb;_0x2212de[_0x3fefb6(0x250)][_0x3fefb6(0x254)]['checked']=_0x1f1c4b[_0x3fefb6(0x1f8)],_0x2212de[_0x3fefb6(0x250)]['$dispModified'][_0x3fefb6(0x1fc)](_0x3fefb6(0x1ec),_0x4adfb7[_0x3fefb6(0x250)]['data'][_0x3fefb6(0x224)][_0x3fefb6(0x1f8)]===_0x1f1c4b[_0x3fefb6(0x1f8)]);},_0x385c87=_0x32da9b=>{const _0x2158c9=_0x4504cb;_0x1f1c4b[_0x2158c9(0x1f8)]=_0x32da9b,_0x34b994();},_0x37f4fc=()=>{const _0x7c6ecb=_0x4504cb;_0x1f1c4b[_0x7c6ecb(0x1f8)]=_0x4adfb7[_0x7c6ecb(0x250)][_0x7c6ecb(0x250)][_0x7c6ecb(0x224)][_0x7c6ecb(0x1f8)],_0x34b994();},_0x4aed4d=()=>_0x1f1c4b['prepared'],_0x2e23a9=async()=>{const _0x14d1de=_0x4504cb;await DataConverterSpell[_0x14d1de(0x251)](_0x4adfb7,_0x1f1c4b['prepared']),_0x34b994();};_0x2212de[_0x4504cb(0x250)][_0x4504cb(0x1ed)]=_0x385c87,_0x2212de[_0x4504cb(0x250)]['resetNextState']=_0x37f4fc,_0x2212de[_0x4504cb(0x250)][_0x4504cb(0x1d1)]=_0x4aed4d,_0x2212de[_0x4504cb(0x250)][_0x4504cb(0x215)]=_0x2e23a9,_0x2212de['ele'][_0x4504cb(0x218)](_0x4504cb(0x24a),_0x1c87f7=>{const _0x2e684c=_0x4504cb;ListUiUtil['handleSelectClick'](this[_0x2e684c(0x209)],_0x2212de,_0x1c87f7,{'isNoHighlightSelection':!![],'fnOnSelectionChange':(_0x3977c0,_0x493cc2)=>_0x3977c0[_0x2e684c(0x250)][_0x2e684c(0x1ed)](_0x493cc2)});});}}),this['_list'][_0xd0cbbe(0x23f)](),this[_0xd0cbbe(0x1cf)][_0xd0cbbe(0x22f)][_0xd0cbbe(0x1da)](),this['_pageFilter']['filterBox']['on'](FilterBox[_0xd0cbbe(0x227)],this[_0xd0cbbe(0x1c3)][_0xd0cbbe(0x202)](this)),this[_0xd0cbbe(0x1c3)]();});}async[_0x46e62d(0x201)](){const _0x4d0b91=_0x46e62d;this[_0x4d0b91(0x1c5)]=new ActorSpellPreparedToggler[(_0x4d0b91(0x1c4))](),window[_0x4d0b91(0x1d9)]=this[_0x4d0b91(0x1c5)];const _0x3dde7a=await StorageUtil[_0x4d0b91(0x22d)](this['_getStorageKeyAllLists']());if(!_0x3dde7a?.[_0x4d0b91(0x1cd)])return;this['_compSaves'][_0x4d0b91(0x235)]=_0x3dde7a;const _0x1cd935=this[_0x4d0b91(0x1e7)]['data'][_0x4d0b91(0x247)]?.[SharedConsts['MODULE_NAME_FAKE']];if(!_0x1cd935?.[this[_0x4d0b91(0x211)][_0x4d0b91(0x1e8)]]?.['saveId'])return;const _0x4e6d23=_0x3dde7a[_0x4d0b91(0x217)](_0x51ee00=>_0x51ee00['id']===_0x1cd935[this['constructor']['name']][_0x4d0b91(0x205)]);if(!_0x4e6d23)return;this[_0x4d0b91(0x23c)](_0x4e6d23);}[_0x46e62d(0x23c)](_0x24ac33){const _0x389274=_0x46e62d;if(!_0x24ac33?.[_0x389274(0x1c7)][_0x389274(0x25c)]?.[_0x389274(0x1cd)])return;this['_activeSaveId']=_0x24ac33['id'],this[_0x389274(0x244)][_0x389274(0x232)](_0x24ac33[_0x389274(0x1c7)][_0x389274(0x1e8)]),_0x24ac33[_0x389274(0x1c7)][_0x389274(0x25c)][_0x389274(0x1d6)](({id:_0x4570fa,isPrepared:_0x21f284})=>{const _0x4026d3=_0x389274,_0x47df18=this['_list'][_0x4026d3(0x1c8)][_0x4026d3(0x217)](_0x2ee0aa=>_0x2ee0aa['data'][_0x4026d3(0x258)]===_0x4570fa);if(_0x47df18)_0x47df18['data'][_0x4026d3(0x1ed)](_0x21f284);});}['_getStorageKeyAllLists'](){const _0xb9414f=_0x46e62d;return this[_0xb9414f(0x211)][_0xb9414f(0x1e8)]+_0xb9414f(0x1fa);}[_0x46e62d(0x1ff)](){const _0x54c9db=_0x46e62d;return this['_rows']=this[_0x54c9db(0x1c2)][_0x54c9db(0x1fd)]((_0x478dfa,_0x35864f)=>({'name':_0x478dfa[_0x54c9db(0x1e8)],'isPrepared':_0x478dfa[_0x54c9db(0x250)][_0x54c9db(0x250)][_0x54c9db(0x224)][_0x54c9db(0x1f8)],'level':MiscUtil['get'](_0x478dfa,_0x54c9db(0x250),_0x54c9db(0x250),_0x54c9db(0x238))||-0x1,'concentration':!!MiscUtil[_0x54c9db(0x1d2)](_0x478dfa,_0x54c9db(0x250),_0x54c9db(0x250),_0x54c9db(0x253),_0x54c9db(0x24e)),'v':!!MiscUtil[_0x54c9db(0x1d2)](_0x478dfa,_0x54c9db(0x250),'data',_0x54c9db(0x253),_0x54c9db(0x1eb)),'s':!!MiscUtil[_0x54c9db(0x1d2)](_0x478dfa,_0x54c9db(0x250),_0x54c9db(0x250),'components',_0x54c9db(0x210)),'m':!!MiscUtil[_0x54c9db(0x1d2)](_0x478dfa,_0x54c9db(0x250),_0x54c9db(0x250),_0x54c9db(0x253),_0x54c9db(0x23e)),'ritual':!!MiscUtil[_0x54c9db(0x1d2)](_0x478dfa,'data',_0x54c9db(0x250),_0x54c9db(0x253),_0x54c9db(0x1de)),'ix':_0x35864f})),{...super[_0x54c9db(0x1ff)](),'rows':this['_rows']};}['close'](..._0x38c731){const _0x2ca045=_0x46e62d;return this['_pageFilter']['teardown'](),super[_0x2ca045(0x1c0)](..._0x38c731);}}ActorSpellPreparedToggler['AppFilter']=class extends AppFilter{constructor(){const _0x4354c1=_0x46e62d;super(),this[_0x4354c1(0x24b)]=new Filter({'header':_0x4354c1(0x1f5),'items':[0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9],'displayFn':_0x24785a=>~_0x24785a?PageFilterSpells[_0x4354c1(0x1d5)](_0x24785a):_0x4354c1(0x204)}),this['_miscFilter']=new Filter({'header':_0x4354c1(0x1bf),'items':[_0x4354c1(0x1be),_0x4354c1(0x23d),_0x4354c1(0x1f9),_0x4354c1(0x1f6),_0x4354c1(0x20d)],'itemSortFn':PageFilterSpells['sortMetaFilter']});}[_0x46e62d(0x1e4)](_0x502da7,_0x2a5962){const _0x472436=_0x46e62d;if(_0x2a5962)return;this[_0x472436(0x24b)][_0x472436(0x22a)](_0x502da7[_0x472436(0x238)]),_0x502da7[_0x472436(0x263)]=[];if(_0x502da7['concentration'])_0x502da7[_0x472436(0x263)][_0x472436(0x22c)](_0x472436(0x1be));if(_0x502da7['v'])_0x502da7['_fMisc'][_0x472436(0x22c)]('Verbal');if(_0x502da7['s'])_0x502da7[_0x472436(0x263)][_0x472436(0x22c)](_0x472436(0x1f9));if(_0x502da7['m'])_0x502da7[_0x472436(0x263)][_0x472436(0x22c)](_0x472436(0x1f6));if(_0x502da7[_0x472436(0x1de)])_0x502da7[_0x472436(0x263)]['push'](_0x472436(0x20d));}async[_0x46e62d(0x256)](_0x92f3fc){const _0xdddf71=_0x46e62d;_0x92f3fc['filters']=[this['_levelFilter'],this[_0xdddf71(0x248)]];}[_0x46e62d(0x231)](_0x2378d0,_0x2df513){const _0x5364bc=_0x46e62d;return this[_0x5364bc(0x234)][_0x5364bc(0x231)](_0x2378d0,_0x2df513['level'],_0x2df513[_0x5364bc(0x263)]);}},ActorSpellPreparedToggler[_0x46e62d(0x1c4)]=class extends BaseComponent{get[_0x46e62d(0x235)](){const _0x1027c9=_0x46e62d;return this[_0x1027c9(0x25e)][ActorSpellPreparedToggler[_0x1027c9(0x1c4)][_0x1027c9(0x246)]];}set[_0x46e62d(0x235)](_0x28d7b0){const _0x302fc2=_0x46e62d;this[_0x302fc2(0x25e)][ActorSpellPreparedToggler[_0x302fc2(0x1c4)][_0x302fc2(0x246)]]=_0x28d7b0;}[_0x46e62d(0x240)](_0xcc9c27){const _0x1fd678=_0x46e62d;this[_0x1fd678(0x1d4)](ActorSpellPreparedToggler[_0x1fd678(0x1c4)][_0x1fd678(0x246)],_0xcc9c27);}[_0x46e62d(0x20b)](){const _0x4f2e8e=_0x46e62d;this[_0x4f2e8e(0x1ca)](ActorSpellPreparedToggler[_0x4f2e8e(0x1c4)][_0x4f2e8e(0x246)]);}[_0x46e62d(0x208)](){const _0x9d6fc2=_0x46e62d;return{[ActorSpellPreparedToggler[_0x9d6fc2(0x1c4)][_0x9d6fc2(0x246)]]:[]};}},ActorSpellPreparedToggler[_0x46e62d(0x1c4)]['_PROP_SPELL_LISTS']=_0x46e62d(0x235),ActorSpellPreparedToggler['RenderableCollectionSpellLists']=class extends RenderableCollectionBase{constructor(_0x3c712a,_0x56120c){const _0x48918b=_0x46e62d;super(_0x3c712a,ActorSpellPreparedToggler['SavedSpellListComponent'][_0x48918b(0x246)]),this[_0x48918b(0x230)]=_0x56120c,this[_0x48918b(0x252)]=null;}set[_0x46e62d(0x226)](_0xf43249){this['_cbClose']=_0xf43249;}['getNewRender'](_0xb710d3){const _0x4c156a=_0x46e62d,_0x466062=this['_comp'],_0x1bc6ab=BaseComponent[_0x4c156a(0x25a)](_0xb710d3['entity'],'*');_0x1bc6ab[_0x4c156a(0x229)](_0x4c156a(0x1e3),()=>{const _0xabcdaa=_0x4c156a;_0xb710d3[_0xabcdaa(0x1c7)]=_0x1bc6ab['toObject']('*'),_0x466062['triggerSpellListsCollectionUpdate']();});const _0x29ca48=$(_0x4c156a(0x265))[_0x4c156a(0x24a)](()=>{const _0x3d0b7c=_0x4c156a;this[_0x3d0b7c(0x252)](_0xb710d3);}),_0x1f88b5=$(_0x4c156a(0x1d0))[_0x4c156a(0x24a)](()=>{const _0x557e0c=_0x4c156a;_0x466062[_0x557e0c(0x235)]=_0x466062['spellLists'][_0x557e0c(0x21c)](_0x29e95b=>_0x29e95b!==_0xb710d3);}),_0x32503e=$$`<div class="flex-v-center py-1 stripe-even toggsp__row">
			<div class="mr-2">${_0x29ca48}</div>
			<div class="flex-v-center w-100 mr-2">${_0x1bc6ab[_0x4c156a(0x25e)][_0x4c156a(0x1e8)]}</div>
			<div class="">${_0x1f88b5}</div>
		</div>`['appendTo'](this[_0x4c156a(0x230)]);return{'comp':_0x1bc6ab,'$wrpRow':_0x32503e,'fnCleanup':()=>{}};}['doUpdateExistingRender'](_0x492850,_0x59aef8){const _0xed29ef=_0x46e62d;_0x492850[_0xed29ef(0x25d)][_0xed29ef(0x1e6)](_0xed29ef(0x1e3),_0x59aef8[_0xed29ef(0x1c7)],!![]);}[_0x46e62d(0x203)](_0x4c13da){_0x4c13da['fnCleanup']();}[_0x46e62d(0x236)](_0x29a0e7,_0x4c6f3d){const _0x1d0220=_0x46e62d,_0x53f871=this['_comp'],_0x39c1f7=_0x53f871[_0x1d0220(0x235)]['map'](_0x39b4ad=>_0x39b4ad['id'])[_0x1d0220(0x257)](_0x4c6f3d['id']),_0x3213f8=this[_0x1d0220(0x230)][_0x1d0220(0x217)]('.toggsp__row')[_0x1d0220(0x222)](_0x29a0e7[_0x1d0220(0x1f4)]),_0x5a8b9d=!this['_$wrp'][_0x1d0220(0x1cd)]||_0x3213f8!==_0x39c1f7;if(_0x5a8b9d)_0x29a0e7['$wrpRow'][_0x1d0220(0x1e5)]()[_0x1d0220(0x20e)](this[_0x1d0220(0x230)]);}};export{ActorSpellPreparedToggler};
const _0x925c=['depth','close','14jOpyaz','get','_mapEntitiesToRows','1028392eFZFhI','notifications','Moving...','3qyKBJS','112849GZRSiX','activateTab','Failed\x20to\x20move\x20','_list','Task','Move\x20Complete','/template/CollectionFolderizer.hbs','render','3584462xtUFfb','STR_SEE_CONSOLE','name','length','pRunTasks','...','Moved\x20','1oHqAzq','1190472ZCszzL','104553rARzkW','Please\x20select\x20something\x20to\x20folderize!','818269HupGyU','activateListeners','getMaxWindowHeight','_activateListeners_pInitListAndFilters','map','_activateListeners_initBtnRun','[name=\x22btn-run\x22]','No\x20target\x20folder\x20selected!','repeat','_rows','find','update','37441LRnznE','_folderType','_collectionName','getData','11mSZclW','_$btnReset'];const _0x5dcf=function(_0x41045c,_0x2ddee4){_0x41045c=_0x41045c-0x13e;let _0x925c67=_0x925c[_0x41045c];return _0x925c67;};const _0x180e51=_0x5dcf;(function(_0x481da4,_0x8f10f1){const _0x2a6bc8=_0x5dcf;while(!![]){try{const _0x511e2b=parseInt(_0x2a6bc8(0x169))+parseInt(_0x2a6bc8(0x165))*parseInt(_0x2a6bc8(0x152))+-parseInt(_0x2a6bc8(0x156))*-parseInt(_0x2a6bc8(0x155))+parseInt(_0x2a6bc8(0x166))+parseInt(_0x2a6bc8(0x167))*parseInt(_0x2a6bc8(0x14f))+parseInt(_0x2a6bc8(0x147))*-parseInt(_0x2a6bc8(0x14b))+-parseInt(_0x2a6bc8(0x15e));if(_0x511e2b===_0x8f10f1)break;else _0x481da4['push'](_0x481da4['shift']());}catch(_0x289f4e){_0x481da4['push'](_0x481da4['shift']());}}}(_0x925c,0xcdd65));import{SharedConsts}from'../shared/SharedConsts.js';import{UtilApplications}from'./UtilApplications.js';import{Util}from'./Util.js';import{BaseCollectionTool}from'./BaseCollectionTool.js';import{AppFilterBasic}from'./FilterApplications.js';class CollectionFolderizer extends BaseCollectionTool{constructor(_0x27dff3){const _0x5202e6=_0x5dcf;super({'title':'Bulk\x20Directory\x20Mover','template':SharedConsts['MODULE_LOCATION']+_0x5202e6(0x15c),'height':Util[_0x5202e6(0x16b)](),'width':0x280,'resizable':!![]},_0x27dff3),this['_pageFilter']=new AppFilterBasic(),this[_0x5202e6(0x159)]=null,this[_0x5202e6(0x14c)]=null;}[_0x180e51(0x16a)](_0x1cc4d9){const _0x3e9486=_0x180e51;super[_0x3e9486(0x16a)](_0x1cc4d9),this[_0x3e9486(0x140)](_0x1cc4d9),this['_activateListeners_initBtnReset'](_0x1cc4d9),this[_0x3e9486(0x13e)](_0x1cc4d9);}[_0x180e51(0x140)](_0x5ed953){const _0x2ec071=_0x180e51;_0x5ed953[_0x2ec071(0x145)](_0x2ec071(0x141))['click'](async()=>{const _0x1aed50=_0x2ec071;if(!this[_0x1aed50(0x159)])return;const _0x1f24d9=_0x5ed953[_0x1aed50(0x145)]('[name=\x22sel-folder\x22]')['val']();if(!_0x1f24d9)return ui[_0x1aed50(0x153)]['warn'](_0x1aed50(0x142));const _0x2e9c62=this['_getSelectedIds']();if(!_0x2e9c62[_0x1aed50(0x161)])return ui['notifications']['warn'](_0x1aed50(0x168));this[_0x1aed50(0x14e)](),ui['sidebar'][_0x1aed50(0x157)](this['_sidebarTab']);const _0x4074e6=_0x2e9c62[_0x1aed50(0x13f)](({id:_0x4a0f9b,name:_0x36cd9b})=>new Util[(_0x1aed50(0x15a))](_0x36cd9b,()=>this['_pMoveItem'](_0x4a0f9b,_0x1f24d9)));await UtilApplications[_0x1aed50(0x162)](_0x4074e6,{'titleInitial':_0x1aed50(0x154),'titleComplete':_0x1aed50(0x15b),'fnGetRowRunningText':_0x2a813d=>'Moving\x20'+_0x2a813d+_0x1aed50(0x163),'fnGetRowSuccessText':_0x3eace8=>_0x1aed50(0x164)+_0x3eace8+'.','fnGetRowErrorText':_0x12aa6c=>_0x1aed50(0x158)+_0x12aa6c+'!\x20'+VeCt[_0x1aed50(0x15f)]}),game[this['_gameProp']][_0x1aed50(0x15d)]();});}async['_pMoveItem'](_0x1af57d,_0x3d021e){const _0x597d20=_0x180e51;await this['_collection'][_0x597d20(0x150)](_0x1af57d)[_0x597d20(0x146)]({'folder':_0x3d021e});}[_0x180e51(0x14a)](){const _0x5de388=_0x180e51;return this[_0x5de388(0x144)]=this[_0x5de388(0x151)](),{...super[_0x5de388(0x14a)](),'titleSearch':this[_0x5de388(0x149)]+'s','folders':UtilApplications['getFolderList'](this[_0x5de388(0x148)])[_0x5de388(0x13f)](_0x1c0ced=>({'id':_0x1c0ced['id'],'name':''+(_0x1c0ced[_0x5de388(0x14d)]>0x1?'\x20'+'-'[_0x5de388(0x143)](_0x1c0ced[_0x5de388(0x14d)]-0x1)+'\x20':'')+_0x1c0ced[_0x5de388(0x160)]})),'rows':this[_0x5de388(0x144)]};}[_0x180e51(0x14e)](..._0xe397a4){return this['_pageFilter']['teardown'](),super['close'](..._0xe397a4);}}export{CollectionFolderizer};
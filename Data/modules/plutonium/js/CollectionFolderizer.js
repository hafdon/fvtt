const _0x4ed3=['depth','Task','close','_$btnReset','map','_gameProp','_collection','...','Please\x20select\x20something\x20to\x20folderize!','No\x20target\x20folder\x20selected!','[name=\x22btn-run\x22]','/template/CollectionFolderizer.handlebars','_folderType','_activateListeners_initBtnRun','activateListeners','name','_pMoveItem','_sidebarTab','repeat','activateTab','_rows','MODULE_LOCATION','warn','Moved\x20','_mapEntitiesToRows','render','Failed\x20to\x20move\x20','click','val','find','_activateListeners_pInitListAndFilters','sidebar','_activateListeners_initBtnReset','Move\x20Complete','STR_SEE_CONSOLE','getFolderList','_pageFilter','notifications','getData'];(function(_0x4868ae,_0x4ed384){const _0x15a299=function(_0x132452){while(--_0x132452){_0x4868ae['push'](_0x4868ae['shift']());}};_0x15a299(++_0x4ed384);}(_0x4ed3,0x194));const _0x15a2=function(_0x4868ae,_0x4ed384){_0x4868ae=_0x4868ae-0x0;let _0x15a299=_0x4ed3[_0x4868ae];return _0x15a299;};'use strict';import{SharedConsts}from'../shared/SharedConsts.js';import{UtilApplications}from'./UtilApplications.js';import{Util}from'./Util.js';import{BaseCollectionTool}from'./BaseCollectionTool.js';import{AppFilterBasic}from'./FilterApplications.js';class CollectionFolderizer extends BaseCollectionTool{constructor(_0x4d3af8){super({'title':'Bulk\x20Directory\x20Mover','template':SharedConsts[_0x15a2('0x7')]+_0x15a2('0x24'),'height':Util['getMaxWindowHeight'](),'width':0x280,'resizable':!![]},_0x4d3af8),this[_0x15a2('0x16')]=new AppFilterBasic(),this['_list']=null,this[_0x15a2('0x1c')]=null;}['activateListeners'](_0x115ec7){super[_0x15a2('0x0')](_0x115ec7),this[_0x15a2('0x26')](_0x115ec7),this[_0x15a2('0x12')](_0x115ec7),this[_0x15a2('0x10')](_0x115ec7);}[_0x15a2('0x26')](_0x43d775){_0x43d775[_0x15a2('0xf')](_0x15a2('0x23'))[_0x15a2('0xd')](async()=>{if(!this['_list'])return;const _0xe97bd2=_0x43d775[_0x15a2('0xf')]('[name=\x22sel-folder\x22]')[_0x15a2('0xe')]();if(!_0xe97bd2)return ui['notifications'][_0x15a2('0x8')](_0x15a2('0x22'));const _0x4f3cbf=this['_getSelectedIds']();if(!_0x4f3cbf['length'])return ui[_0x15a2('0x17')][_0x15a2('0x8')](_0x15a2('0x21'));this[_0x15a2('0x1b')](),ui[_0x15a2('0x11')][_0x15a2('0x5')](this[_0x15a2('0x3')]);const _0x17f4bb=_0x4f3cbf[_0x15a2('0x1d')](({id,name})=>new Util[(_0x15a2('0x1a'))](name,()=>this['_pMoveItem'](id,_0xe97bd2)));await UtilApplications['pRunTasks'](_0x17f4bb,{'titleInitial':'Moving...','titleComplete':_0x15a2('0x13'),'fnGetRowRunningText':_0x35a59b=>'Moving\x20'+_0x35a59b+_0x15a2('0x20'),'fnGetRowSuccessText':_0x75951f=>_0x15a2('0x9')+_0x75951f+'.','fnGetRowErrorText':_0x5c7c7e=>_0x15a2('0xc')+_0x5c7c7e+'!\x20'+VeCt[_0x15a2('0x14')]}),game[this[_0x15a2('0x1e')]][_0x15a2('0xb')]();});}async[_0x15a2('0x2')](_0x39d1f9,_0x131989){await this[_0x15a2('0x1f')]['get'](_0x39d1f9)['update']({'folder':_0x131989});}['getData'](){return this[_0x15a2('0x6')]=this[_0x15a2('0xa')](),{...super[_0x15a2('0x18')](),'titleSearch':this['_collectionName']+'s','folders':UtilApplications[_0x15a2('0x15')](this[_0x15a2('0x25')])['map'](_0x381674=>({'id':_0x381674['id'],'name':''+(_0x381674[_0x15a2('0x19')]>0x1?'\x20'+'-'[_0x15a2('0x4')](_0x381674[_0x15a2('0x19')]-0x1)+'\x20':'')+_0x381674[_0x15a2('0x1')]})),'rows':this[_0x15a2('0x6')]};}[_0x15a2('0x1b')](..._0xd3bda3){super[_0x15a2('0x1b')](..._0xd3bda3),this[_0x15a2('0x16')]['teardown']();}}export{CollectionFolderizer};
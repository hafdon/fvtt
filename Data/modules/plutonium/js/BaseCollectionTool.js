const _0x5935=['_collectionName','pRunTasks','journal','actors','_$iptSearch','activateTab','_pDeleteItem','entities','tool-folderizer_','[name=\x22cb-select-all\x22]','absorbFnGetData','content','info','click','doAbsorbItems','has','_pageFilter','Delete','.veapp__list','.search','tables','init','<h3>Are\x20you\x20sure?</h3><p>','prop','Delete\x20Folders','bindSelectAllCheckbox','_sortNamePathRows','val','pGetConfirmation','_sidebarTab','_activateListeners_pInitListAndFilters','\x20folder','_$btnReset','Delete\x20','_activateListeners_listAbsorbGetData','pInitFilterBox','name','filterBox','_listSortNamePathRows','checked','\x20and\x20','map','JournalEntry','_mapEntitiesToRows','_handleFilterChange','Delete\x20Complete','item','<h3>Are\x20you\x20sure?</h3><p>Any\x20empty\x20folders\x20will\x20be\x20permanently\x20deleted.</p>','its','[name=\x22btn-reset\x22]','length','_rows','bind','[data-name=\x22wrp-btns-sort\x22]','_list','initBtnSortHandlers','[name=btn-filter]','find','_pDoPruneFolders','Deleting...','_collection','actor','\x20data\x20will\x20be\x20permanently\x20deleted.</p>','Unknown\x20collection\x20\x22','Failed\x20to\x20delete\x20','filter','sidebar','Deleting\x20','_getSelectedIds','collection','get','data','RollTable','ascSortLower','reset','add','warn','getValues','_pDoDelete','Deleted\x20','_activateListeners_doBindSelectAll','Item','toDisplay','fa-trash','close','type','items','[name=btn-toggle-summary]','rolltable','forEach','notifications','STR_SEE_CONSOLE','path','addToFilters','EVNT_VALCHANGE','getFolderPath','children','render','_activateListeners_initBtnPrune','values','Task','[name=\x22btn-prune\x22]','_folderType','delete','_gameProp'];(function(_0x49751e,_0x5935b1){const _0x57f5e0=function(_0x292919){while(--_0x292919){_0x49751e['push'](_0x49751e['shift']());}};_0x57f5e0(++_0x5935b1);}(_0x5935,0x198));const _0x57f5=function(_0x49751e,_0x5935b1){_0x49751e=_0x49751e-0x0;let _0x57f5e0=_0x5935[_0x49751e];return _0x57f5e0;};'use strict';import{UtilList2}from'./UtilList2.js';import{UtilApplications}from'./UtilApplications.js';import{Util}from'./Util.js';class BaseCollectionTool extends Application{static[_0x57f5('0x26')](_0x49c292,_0x2b03ec){if(_0x49c292[_0x57f5('0x68')]==null&&_0x2b03ec['path']==null)return SortUtil['ascSortLower'](_0x49c292['name'],_0x2b03ec['name']);if(_0x49c292[_0x57f5('0x68')]!=null&&_0x2b03ec['path']==null)return-0x1;if(_0x49c292[_0x57f5('0x68')]==null&&_0x2b03ec[_0x57f5('0x68')]!=null)return 0x1;return SortUtil['ascSortLower'](_0x49c292['path'],_0x2b03ec[_0x57f5('0x68')])||SortUtil[_0x57f5('0x55')](_0x49c292[_0x57f5('0x30')],_0x2b03ec[_0x57f5('0x30')]);}static[_0x57f5('0x32')](_0x533fcc,_0x555ab6,_0x4c11b3){const _0x43245c={'name':_0x533fcc[_0x57f5('0x30')],'path':_0x533fcc[_0x57f5('0x6')]['path']},_0x2783cb={'name':_0x555ab6['name'],'path':_0x555ab6[_0x57f5('0x6')][_0x57f5('0x68')]};return BaseCollectionTool['_sortNamePathRows'](_0x43245c,_0x2783cb);}constructor(_0x417bd5,_0x18d916){super(_0x417bd5),this[_0x57f5('0xc')]=_0x18d916,this[_0x57f5('0x48')]=null,this['_sidebarTab']=null,this['_gameProp']=null,this[_0x57f5('0x9')]=null;switch(_0x18d916){case _0x57f5('0x3a'):{this[_0x57f5('0x48')]=Item[_0x57f5('0x51')],this[_0x57f5('0x29')]=_0x57f5('0x62'),this[_0x57f5('0xb')]=_0x57f5('0x62'),this['_folderType']=_0x57f5('0x5d');break;}case _0x57f5('0x49'):{this[_0x57f5('0x48')]=Actor['collection'],this[_0x57f5('0x29')]=_0x57f5('0xf'),this[_0x57f5('0xb')]=_0x57f5('0xf'),this[_0x57f5('0x9')]='Actor';break;}case _0x57f5('0xe'):{this[_0x57f5('0x48')]=JournalEntry[_0x57f5('0x51')],this[_0x57f5('0x29')]='journal',this[_0x57f5('0xb')]=_0x57f5('0xe'),this[_0x57f5('0x9')]=_0x57f5('0x36');break;}case _0x57f5('0x64'):{this[_0x57f5('0x48')]=RollTable[_0x57f5('0x51')],this[_0x57f5('0x29')]='tables',this['_gameProp']=_0x57f5('0x20'),this[_0x57f5('0x9')]=_0x57f5('0x54');break;}default:throw new Error(_0x57f5('0x4b')+_0x18d916+'\x22');}}[_0x57f5('0x37')](){return this['_collection'][_0x57f5('0x13')][_0x57f5('0x35')]((_0x4118f9,_0x504882)=>{const _0x50c2b0=UtilApplications[_0x57f5('0x2')](_0x4118f9,{'isAddTrailingSlash':!![]});return{'path':_0x50c2b0,'name':_0x4118f9[_0x57f5('0x30')],'displayName':''+(_0x50c2b0||'')+_0x4118f9[_0x57f5('0x30')],'id':_0x4118f9['id'],'type':MiscUtil[_0x57f5('0x52')](_0x4118f9,_0x57f5('0x53'),_0x57f5('0x61'))||'unknown','ix':_0x504882};})['sort'](BaseCollectionTool['_sortNamePathRows']);}[_0x57f5('0x38')](){const _0x44c818=this[_0x57f5('0x1c')]['filterBox'][_0x57f5('0x59')]();this['_list'][_0x57f5('0x4d')](_0x589605=>this[_0x57f5('0x1c')][_0x57f5('0x5e')](_0x44c818,this[_0x57f5('0x3f')][_0x589605['ix']]));}['_activateListeners_initBtnReset'](_0x4db0be){this[_0x57f5('0x2c')]=_0x4db0be[_0x57f5('0x45')](_0x57f5('0x3d'))['click'](()=>{_0x4db0be[_0x57f5('0x45')](_0x57f5('0x1f'))[_0x57f5('0x27')]('');if(this[_0x57f5('0x42')])this[_0x57f5('0x42')][_0x57f5('0x56')]();});}[_0x57f5('0x2e')](_0x465217){return UtilList2[_0x57f5('0x16')](_0x465217);}['_activateListeners_doBindSelectAll'](_0x4b07b8){ModalFilter[_0x57f5('0x25')](_0x4b07b8,this[_0x57f5('0x42')]);}[_0x57f5('0x2a')](_0x298158){return this[_0x57f5('0x10')]=_0x298158[_0x57f5('0x45')](_0x57f5('0x1f')),this[_0x57f5('0x42')]=new List({'$iptSearch':this['_$iptSearch'],'$wrpList':_0x298158[_0x57f5('0x45')](_0x57f5('0x1e')),'fnSort':BaseCollectionTool['_listSortNamePathRows']}),SortUtil[_0x57f5('0x43')](_0x298158[_0x57f5('0x45')](_0x57f5('0x41')),this[_0x57f5('0x42')]),this[_0x57f5('0x5c')](_0x298158['find'](_0x57f5('0x15'))),this[_0x57f5('0x1c')][_0x57f5('0x2f')]({'$iptSearch':this[_0x57f5('0x10')],'$btnReset':this[_0x57f5('0x2c')],'$btnOpen':_0x298158[_0x57f5('0x45')](_0x57f5('0x44')),'$btnToggleSummaryHidden':_0x298158[_0x57f5('0x45')](_0x57f5('0x63')),'$wrpMiniPills':_0x298158[_0x57f5('0x45')]('.fltr__mini-view'),'namespace':_0x57f5('0x14')+this[_0x57f5('0xc')]})['then'](()=>{this[_0x57f5('0x3f')]['forEach'](_0x5517a2=>this[_0x57f5('0x1c')][_0x57f5('0x0')](_0x5517a2)),this[_0x57f5('0x42')][_0x57f5('0x1a')](this[_0x57f5('0x3f')],{'fnGetName':_0x5323b5=>_0x5323b5[_0x57f5('0x30')],'fnGetValues':_0x421adc=>({'id':_0x421adc['id'],'path':_0x421adc['path']}),'fnGetData':this['_activateListeners_listAbsorbGetData'][_0x57f5('0x40')](this),'fnBindListeners':_0x209711=>UtilList2['absorbFnBindListeners'](this[_0x57f5('0x42')],_0x209711)}),this[_0x57f5('0x42')][_0x57f5('0x21')](),this[_0x57f5('0x1c')][_0x57f5('0x31')]['render'](),$(this['_pageFilter']['filterBox'])['on'](FilterBox[_0x57f5('0x1')],this[_0x57f5('0x38')][_0x57f5('0x40')](this)),this['_handleFilterChange']();});}[_0x57f5('0x50')](){return this[_0x57f5('0x42')][_0x57f5('0x62')][_0x57f5('0x4d')](_0x25dd37=>$(_0x25dd37['ele'])[_0x57f5('0x45')]('input')['prop'](_0x57f5('0x33')))['map'](_0x2fa5ed=>({'name':_0x2fa5ed[_0x57f5('0x30')],'id':_0x2fa5ed[_0x57f5('0x6')]['id']}));}[_0x57f5('0x5')](_0x35bd48){_0x35bd48[_0x57f5('0x45')](_0x57f5('0x8'))[_0x57f5('0x19')](async()=>{const _0x5b4601=await UtilApplications[_0x57f5('0x28')]({'title':_0x57f5('0x24'),'content':_0x57f5('0x3b'),'confirmText':_0x57f5('0x1d'),'faIcon':_0x57f5('0x5f')});if(!_0x5b4601)return;await this[_0x57f5('0x46')]();});}async[_0x57f5('0x5a')](_0xd3b4b0){if(!this[_0x57f5('0x42')])return;let _0x4c2880=this['_getSelectedIds']();if(!_0x4c2880[_0x57f5('0x3e')])return ui[_0x57f5('0x66')][_0x57f5('0x58')]('Please\x20select\x20something\x20to\x20delete!');const _0x493566=this[_0x57f5('0xc')]['uppercaseFirst'](),_0x558892=_0x4c2880[_0x57f5('0x3e')]!==0x1?'s':'',_0x4b61d1=await UtilApplications[_0x57f5('0x28')]({'title':_0x57f5('0x2d')+_0x493566+_0x558892,'content':_0x57f5('0x22')+_0x4c2880[_0x57f5('0x3e')]+'\x20'+_0x493566+_0x558892+_0x57f5('0x34')+(_0x558892?'their':_0x57f5('0x3c'))+_0x57f5('0x4a'),'confirmText':_0x57f5('0x1d'),'faIcon':_0x57f5('0x5f')});if(!_0x4b61d1)return;this[_0x57f5('0x60')](),ui[_0x57f5('0x4e')][_0x57f5('0x11')](this[_0x57f5('0x29')]);if(_0xd3b4b0[_0x57f5('0x23')]('checked')){const _0x1d5af1=await this[_0x57f5('0x46')](_0x4c2880[_0x57f5('0x35')](({id})=>id));_0x4c2880=_0x4c2880[_0x57f5('0x4d')](({id})=>!_0x1d5af1[_0x57f5('0x1b')](id));}const _0x15cd49=_0x4c2880[_0x57f5('0x35')](({id,name})=>new Util[(_0x57f5('0x7'))](name,()=>this[_0x57f5('0x12')](id)));await UtilApplications[_0x57f5('0xd')](_0x15cd49,{'titleInitial':_0x57f5('0x47'),'titleComplete':_0x57f5('0x39'),'fnGetRowRunningText':_0x221014=>_0x57f5('0x4f')+_0x221014+'...','fnGetRowSuccessText':_0x3f5b96=>'Deleted\x20'+_0x3f5b96+'.','fnGetRowErrorText':_0x2cc726=>_0x57f5('0x4c')+_0x2cc726+'!\x20'+VeCt[_0x57f5('0x67')]});if(_0xd3b4b0[_0x57f5('0x23')](_0x57f5('0x33')))await this[_0x57f5('0x46')]();game[this['_gameProp']][_0x57f5('0x4')]();}async[_0x57f5('0x12')](_0x578df2){await this[_0x57f5('0x48')][_0x57f5('0x52')](_0x578df2)[_0x57f5('0xa')]();}async[_0x57f5('0x46')](_0x4c714f){const _0x1a4a55=()=>Folder[_0x57f5('0x51')]['entities'][_0x57f5('0x4d')](_0x2ff515=>_0x2ff515[_0x57f5('0x53')]['type']===this[_0x57f5('0x9')]),_0x2d0076=_0x4c714f?new Set(_0x4c714f):null,_0x1a6777=new Set();let _0x379ec1=0x0,_0x16fe45=null,_0x5ad951=_0x1a4a55()[_0x57f5('0x3e')];do{let _0xc01751;_0x2d0076?_0xc01751=_0x1a4a55()['filter'](_0x38f3a6=>{if(!_0x38f3a6[_0x57f5('0x3')]||!_0x38f3a6[_0x57f5('0x3')][_0x57f5('0x3e')]){if(!_0x38f3a6[_0x57f5('0x17')][_0x57f5('0x3e')])return!![];const _0x2bcae8=_0x38f3a6[_0x57f5('0x17')][_0x57f5('0x35')](_0x592b52=>_0x592b52['id'])[_0x57f5('0x4d')](_0x2d5a66=>_0x2d0076[_0x57f5('0x1b')](_0x2d5a66));if(_0x2bcae8['length']===_0x38f3a6[_0x57f5('0x17')][_0x57f5('0x3e')])return _0x2bcae8[_0x57f5('0x65')](_0x46afce=>_0x1a6777[_0x57f5('0x57')](_0x46afce)),!![];}return![];}):_0xc01751=_0x1a4a55()['filter'](_0x1d714a=>!_0x1d714a['content'][_0x57f5('0x3e')]&&(!_0x1d714a[_0x57f5('0x3')]||!_0x1d714a[_0x57f5('0x3')]['length']));for(const _0x2612e7 of _0xc01751){await _0x2612e7[_0x57f5('0xa')]({'deleteSubfolders':!![],'deleteContents':!![]}),_0x379ec1++;}_0x16fe45=_0x5ad951,_0x5ad951=_0x1a4a55()[_0x57f5('0x3e')];}while(_0x5ad951!==_0x16fe45);if(_0x379ec1)ui[_0x57f5('0x66')][_0x57f5('0x18')](_0x57f5('0x5b')+_0x379ec1+_0x57f5('0x2b')+(_0x379ec1===0x1?'':'s')+'.');return _0x1a6777;}}export{BaseCollectionTool};
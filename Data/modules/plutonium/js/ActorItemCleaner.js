const _0x3e04=['124072MRHNbL','_activateListeners_pInitListAndFilters','MODULE_LOCATION','[name=btn-filter]','_activateListeners_initBtnRun','val','map','values','close','.search','deleteEmbeddedDocuments','getData','absorbFnBindListeners','get','1853741gxBKKb','prop','render','Delete\x20Item','init','<h3>Are\x20you\x20sure?</h3><p>','[name=\x22btn-reset\x22]','_activateListeners_initBtnReset','_$btnReset','absorbFnGetData','toDisplay','[name=\x22cb-select-all\x22]','checked','name','226wRuphg','filter','items','603uqtbzg','find','filterBox','Delete','/template/ActorItemCleaner.hbs','reset','_list','\x20data\x20will\x20be\x20permanently\x20deleted.</p>','\x20item','_$iptSearch','150142LYvFdZ','5QYBlmR','_pageFilter','input','_rows','116015VjHRxF','bind','pHandleButtonClick','activateListeners','their','692489fXePda','.veapp__list','[name=btn-toggle-summary]','ele','Deleted\x20','pGetConfirmation','_actor','click','[data-name=\x22wrp-btns-sort\x22]','pInitFilterBox','192345EMxnmH','getMaxWindowHeight','_handleFilterChange','length','.fltr__mini-view','forEach','fa-trash','getValues','actor'];const _0x1b78=function(_0x5cca66,_0x167908){_0x5cca66=_0x5cca66-0x109;let _0x3e0499=_0x3e04[_0x5cca66];return _0x3e0499;};const _0x5693b3=_0x1b78;(function(_0x2ca72e,_0x5c1bf4){const _0x39cd5c=_0x1b78;while(!![]){try{const _0x1d85af=-parseInt(_0x39cd5c(0x130))+-parseInt(_0x39cd5c(0x13a))+-parseInt(_0x39cd5c(0x131))*parseInt(_0x39cd5c(0x135))+parseInt(_0x39cd5c(0x144))+-parseInt(_0x39cd5c(0x123))*parseInt(_0x39cd5c(0x126))+-parseInt(_0x39cd5c(0x14d))+parseInt(_0x39cd5c(0x115));if(_0x1d85af===_0x5c1bf4)break;else _0x2ca72e['push'](_0x2ca72e['shift']());}catch(_0x250e9d){_0x2ca72e['push'](_0x2ca72e['shift']());}}}(_0x3e04,0x58a16));import{SharedConsts}from'../shared/SharedConsts.js';import{UtilApplications}from'./UtilApplications.js';import{UtilList2}from'./UtilList2.js';import{AppFilterBasic}from'./FilterApplications.js';import{Util}from'./Util.js';class ActorItemCleaner extends Application{static[_0x5693b3(0x137)](_0x4bb208,_0x46d16a,_0x184544,_0x5564b4){const _0x57d7c2=_0x5693b3,_0xcd511a=new ActorItemCleaner(_0x46d16a[_0x57d7c2(0x14c)]);_0xcd511a[_0x57d7c2(0x117)](!![]);}constructor(_0x59dda7){const _0x2f374b=_0x5693b3;super({'title':'Item\x20Cleaner','template':SharedConsts[_0x2f374b(0x109)]+_0x2f374b(0x12a),'width':0x1e0,'height':Util[_0x2f374b(0x145)](),'resizable':!![]}),this[_0x2f374b(0x140)]=_0x59dda7,this[_0x2f374b(0x132)]=new AppFilterBasic(),this[_0x2f374b(0x12c)]=null,this[_0x2f374b(0x11d)]=null,this[_0x2f374b(0x12f)]=null;}['_handleFilterChange'](){const _0x29bc1b=_0x5693b3,_0x13f45a=this['_pageFilter']['filterBox'][_0x29bc1b(0x14b)]();this[_0x29bc1b(0x12c)][_0x29bc1b(0x124)](_0x3b70bf=>this['_pageFilter'][_0x29bc1b(0x11f)](_0x13f45a,this['_rows'][_0x3b70bf['ix']]));}[_0x5693b3(0x138)](_0x91a5d8){const _0x2a20c3=_0x5693b3;super[_0x2a20c3(0x138)](_0x91a5d8),this[_0x2a20c3(0x10b)](_0x91a5d8),this['_activateListeners_initBtnReset'](_0x91a5d8),this[_0x2a20c3(0x14e)](_0x91a5d8);}[_0x5693b3(0x10b)](_0x354fc8){const _0x2a2880=_0x5693b3;_0x354fc8[_0x2a2880(0x127)]('[name=\x22btn-run\x22]')[_0x2a2880(0x141)](async()=>{const _0x222958=_0x2a2880;if(!this[_0x222958(0x12c)])return;const _0x45c2d3=this[_0x222958(0x12c)][_0x222958(0x125)][_0x222958(0x124)](_0x370102=>$(_0x370102[_0x222958(0x13d)])[_0x222958(0x127)](_0x222958(0x133))[_0x222958(0x116)](_0x222958(0x121)))[_0x222958(0x10d)](_0x3ff407=>({'name':_0x3ff407[_0x222958(0x122)],'id':_0x3ff407[_0x222958(0x10e)]['id']})),_0x55d0d1=_0x45c2d3[_0x222958(0x147)]!==0x1?'s':'',_0x48a3ee=await UtilApplications[_0x222958(0x13f)]({'title':_0x222958(0x118)+_0x55d0d1,'content':_0x222958(0x11a)+_0x45c2d3[_0x222958(0x147)]+_0x222958(0x12e)+_0x55d0d1+'\x20and\x20'+(_0x55d0d1?_0x222958(0x139):'its')+_0x222958(0x12d),'confirmText':_0x222958(0x129),'faIcon':_0x222958(0x14a)});if(!_0x48a3ee)return;this[_0x222958(0x10f)](),await this['_actor'][_0x222958(0x111)]('Item',_0x45c2d3[_0x222958(0x10d)](_0x1ae51e=>_0x1ae51e['id'])),ui['notifications']['info'](_0x222958(0x13e)+_0x45c2d3[_0x222958(0x147)]+_0x222958(0x12e)+(_0x45c2d3[_0x222958(0x147)]===0x1?'':'s'));});}[_0x5693b3(0x11c)](_0x346337){const _0x3b36ee=_0x5693b3;this[_0x3b36ee(0x11d)]=_0x346337[_0x3b36ee(0x127)](_0x3b36ee(0x11b))[_0x3b36ee(0x141)](()=>{const _0x12dbed=_0x3b36ee;_0x346337[_0x12dbed(0x127)](_0x12dbed(0x110))[_0x12dbed(0x10c)]('');if(this[_0x12dbed(0x12c)])this[_0x12dbed(0x12c)][_0x12dbed(0x12b)]();});}['_activateListeners_pInitListAndFilters'](_0x57fbae){const _0x37d994=_0x5693b3;return this['_$iptSearch']=_0x57fbae[_0x37d994(0x127)]('.search'),this[_0x37d994(0x12c)]=new List({'$iptSearch':this[_0x37d994(0x12f)],'$wrpList':_0x57fbae[_0x37d994(0x127)](_0x37d994(0x13b))}),SortUtil['initBtnSortHandlers'](_0x57fbae[_0x37d994(0x127)](_0x37d994(0x142)),this[_0x37d994(0x12c)]),ListUiUtil['bindSelectAllCheckbox'](_0x57fbae[_0x37d994(0x127)](_0x37d994(0x120)),this[_0x37d994(0x12c)]),this[_0x37d994(0x132)][_0x37d994(0x143)]({'$iptSearch':this['_$iptSearch'],'$btnReset':this[_0x37d994(0x11d)],'$btnOpen':_0x57fbae[_0x37d994(0x127)](_0x37d994(0x10a)),'$btnToggleSummaryHidden':_0x57fbae[_0x37d994(0x127)](_0x37d994(0x13c)),'$wrpMiniPills':_0x57fbae[_0x37d994(0x127)](_0x37d994(0x148)),'namespace':'tool-actor-item-cleaner'})['then'](()=>{const _0x353da7=_0x37d994;this[_0x353da7(0x134)][_0x353da7(0x149)](_0x4cfea0=>this[_0x353da7(0x132)]['addToFilters'](_0x4cfea0)),this[_0x353da7(0x12c)]['doAbsorbItems'](this[_0x353da7(0x134)],{'fnGetName':_0x44adcc=>_0x44adcc['name'],'fnGetValues':_0x15b717=>({'id':_0x15b717['id']}),'fnGetData':UtilList2[_0x353da7(0x11e)],'fnBindListeners':_0x32193c=>UtilList2[_0x353da7(0x113)](this[_0x353da7(0x12c)],_0x32193c)}),this[_0x353da7(0x12c)][_0x353da7(0x119)](),this[_0x353da7(0x132)][_0x353da7(0x128)]['render'](),this[_0x353da7(0x132)]['filterBox']['on'](FilterBox['EVNT_VALCHANGE'],this[_0x353da7(0x146)][_0x353da7(0x136)](this)),this['_handleFilterChange']();});}[_0x5693b3(0x112)](){const _0x3741ab=_0x5693b3;return this['_rows']=this[_0x3741ab(0x140)][_0x3741ab(0x125)]['map']((_0x559043,_0xf583b8)=>({'name':_0x559043[_0x3741ab(0x122)],'id':_0x559043['id'],'type':MiscUtil[_0x3741ab(0x114)](_0x559043,'data','type'),'ix':_0xf583b8})),{...super['getData'](),'rows':this[_0x3741ab(0x134)]};}[_0x5693b3(0x10f)](..._0x5b1875){const _0x3a72cc=_0x5693b3;return this[_0x3a72cc(0x132)]['teardown'](),super[_0x3a72cc(0x10f)](..._0x5b1875);}}export{ActorItemCleaner};
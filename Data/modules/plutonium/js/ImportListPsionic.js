const _0x16b5=['sourceJsonToAbv','_pImportEntry_pGetFolderId','DATA_URL_PSIONICS','isTemp','log','getPsionicItem','get','PG_PSIONICS','_page','type','DataSourceFile','DataSourceUrl','map','psionics','Custom\x20URL','items','pGetSources','Import\x20Psionics','_pageFilter','Order','psionic','_fOrder','sheet','pImportEntry','_pack','render','Upload\x20File','doAbsorbItems','createEmbeddedEntity','name','Source','source','_pImportEntry_pImportToItems','OwnedItem','absorbFnBindListeners','_actor','absorbFnGetData','text-center','create','Importing\x20psionic\x20\x22','pGetHomebrewSources','importEntity','psiTypeToMeta','_titleButtonRun','_content','Psionics','Name','\x22\x20(from\x20\x22','SOURCE_TYP_CUSTOM','Item','mutateForFilters','getPsionicItems','_pImportEntry_pImportToActor','isStreamerMode','short','full'];(function(_0x260fbb,_0x16b5b2){const _0x3f5317=function(_0x2ddf8f){while(--_0x2ddf8f){_0x260fbb['push'](_0x260fbb['shift']());}};_0x3f5317(++_0x16b5b2);}(_0x16b5,0x104));const _0x3f53=function(_0x260fbb,_0x16b5b2){_0x260fbb=_0x260fbb-0x0;let _0x3f5317=_0x16b5[_0x260fbb];return _0x3f5317;};'use strict';import{ImportList}from'./ImportList.js';import{Vetools}from'./Vetools.js';import{LGT}from'./Util.js';import{DataConverter}from'./DataConverter.js';import{Config}from'./Config.js';import{UtilList2}from'./UtilList2.js';class ImportListPsionic extends ImportList{constructor(_0x5b3488){_0x5b3488=_0x5b3488||{},super({'title':_0x3f53('0x25')},_0x5b3488,{'props':[_0x3f53('0x28')],'titleSearch':_0x3f53('0x21'),'sidebarTab':_0x3f53('0x23'),'gameProp':_0x3f53('0x23'),'defaultFolderPath':[_0x3f53('0x9')],'folderType':_0x3f53('0xd'),'pageFilter':new PageFilterPsionics(),'page':UrlUtil[_0x3f53('0x1b')],'isPreviewable':!![]});}async[_0x3f53('0x24')](){return[new ImportList['DataSourceUrl'](Config[_0x3f53('0x1a')]('ui',_0x3f53('0x11'))?'SRD':'5etools',Vetools[_0x3f53('0x16')],{'filterTypes':[ImportList['SOURCE_TYP_OFFICIAL_ALL']],'isDefault':!![]}),new ImportList[(_0x3f53('0x1f'))](_0x3f53('0x22'),'',{'filterTypes':[ImportList[_0x3f53('0xc')]]}),new ImportList[(_0x3f53('0x1e'))](_0x3f53('0x2e'),{'filterTypes':[ImportList[_0x3f53('0xc')]]}),...(await Vetools[_0x3f53('0x4')](_0x3f53('0x28')))[_0x3f53('0x20')](({name,url})=>new ImportList['DataSourceUrl'](name,url,{'filterTypes':[ImportList['SOURCE_TYP_BREW']]}))];}['getData'](){return{'isPreviewable':this['_isPreviewable'],'titleButtonRun':this[_0x3f53('0x7')],'titleSearch':this['_titleSearch'],'cols':[{'name':_0x3f53('0xa'),'width':0x4,'field':'name'},{'name':'Type','width':0x3,'field':_0x3f53('0x1d')},{'name':_0x3f53('0x27'),'width':0x3,'field':'order'},{'name':_0x3f53('0x32'),'width':0x1,'field':'source','titleProp':'sourceLong','displayProp':'sourceShort','rowClassName':_0x3f53('0x1')}],'rows':this[_0x3f53('0x8')]['map']((_0xfd0e93,_0x22f835)=>{return this[_0x3f53('0x26')][_0x3f53('0xe')](_0xfd0e93),{'name':_0xfd0e93['name'],'type':Parser[_0x3f53('0x6')](_0xfd0e93['type'])[_0x3f53('0x12')],'order':_0xfd0e93[_0x3f53('0x29')],'source':_0xfd0e93[_0x3f53('0x33')],'sourceShort':Parser[_0x3f53('0x14')](_0xfd0e93[_0x3f53('0x33')]),'sourceLong':Parser['sourceJsonToFull'](_0xfd0e93[_0x3f53('0x33')]),'ix':_0x22f835};})};}['_activateListeners_absorbListItems'](){this['_list'][_0x3f53('0x2f')](this[_0x3f53('0x8')],{'fnGetName':_0xc143a8=>_0xc143a8[_0x3f53('0x31')],'fnGetValues':_0x1bec10=>({'source':_0x1bec10['source'],'type':Parser[_0x3f53('0x6')](_0x1bec10[_0x3f53('0x1d')])[_0x3f53('0x13')],'order':_0x1bec10[_0x3f53('0x29')],'hash':UrlUtil['URL_TO_HASH_BUILDER'][this[_0x3f53('0x1c')]](_0x1bec10)}),'fnGetData':UtilList2[_0x3f53('0x0')],'fnBindListeners':_0x257c61=>UtilList2[_0x3f53('0x36')](this['_list'],_0x257c61)});}async[_0x3f53('0x2b')](_0x126c19,_0x1c7031){_0x1c7031=_0x1c7031||{},console[_0x3f53('0x18')](...LGT,_0x3f53('0x3')+_0x126c19[_0x3f53('0x31')]+_0x3f53('0xb')+Parser[_0x3f53('0x14')](_0x126c19[_0x3f53('0x33')])+'\x22)');if(_0x1c7031[_0x3f53('0x17')])return this[_0x3f53('0x34')](_0x126c19,_0x1c7031);else{if(this['_actor'])return this[_0x3f53('0x10')](_0x126c19,_0x1c7031);else return this['_pImportEntry_pImportToItems'](_0x126c19,_0x1c7031);}}async[_0x3f53('0x10')](_0x58419a,_0x137b56){const _0x210f96=DataConverter[_0x3f53('0xf')](_0x58419a);await this['_actor'][_0x3f53('0x30')](_0x3f53('0x35'),_0x210f96,{});if(this[_0x3f53('0x37')]['isToken'])this['_actor'][_0x3f53('0x2a')][_0x3f53('0x2d')]();return{'name':_0x58419a[_0x3f53('0x31')],'actor':this[_0x3f53('0x37')]};}async[_0x3f53('0x34')](_0x199312,_0x3df7ea){const _0xa3917c=DataConverter[_0x3f53('0x19')](_0x199312,{'isAddPermission':!![]});if(_0x3df7ea[_0x3f53('0x17')]||!this['_pack']){if(!_0x3df7ea[_0x3f53('0x17')]){const _0x1ff0e7=await this[_0x3f53('0x15')](_0x199312);if(_0x1ff0e7)_0xa3917c['folder']=_0x1ff0e7;}const _0x1fc5c0=await Item[_0x3f53('0x2')](_0xa3917c,{'renderSheet':!!_0x3df7ea[_0x3f53('0x17')],'temporary':!!_0x3df7ea[_0x3f53('0x17')]});if(!_0x3df7ea[_0x3f53('0x17')])await game['items']['insert'](_0x1fc5c0);return _0x1fc5c0;}else{const _0x16c844=new Item(_0xa3917c);return await this[_0x3f53('0x2c')][_0x3f53('0x5')](_0x16c844),_0x16c844;}}}export{ImportListPsionic};
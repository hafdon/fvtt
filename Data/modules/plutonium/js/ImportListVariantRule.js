const _0x43c8=['Cannot\x20import\x20rule\x20to\x20actor!','_titleSearch','_actor','get','_content','source','_pImportEntry_pGetFolderId','SOURCE_TYP_CUSTOM','Name','\x22\x20(from\x20\x22','_pageFilter','Variant\x20&\x20Optional\x20Rules','SOURCE_TYP_OFFICIAL_ALL','Import\x20Variant\x20&\x20Optional\x20Rules','JournalEntry','_list','insert','SOURCE_TYP_BREW','pGetHomebrewSources','variantrule','create','map','log','URL_TO_HASH_BUILDER','importEntity','variant\x20or\x20optional\x20rule','text-center','DataSourceUrl','sourceShort','_titleButtonRun','PG_VARIATNRULES','_activateListeners_absorbListItems','Importing\x20variantrule\x20\x22','sourceJsonToAbv','getVariantRuleJournal','Source','pImportEntry','Upload\x20File','pGetSources','5etools','absorbFnBindListeners','absorbFnGetData','name','_pack','isTemp','journal','SRD'];(function(_0x1020d8,_0x43c8be){const _0x107938=function(_0x4113c3){while(--_0x4113c3){_0x1020d8['push'](_0x1020d8['shift']());}};_0x107938(++_0x43c8be);}(_0x43c8,0xa7));const _0x1079=function(_0x1020d8,_0x43c8be){_0x1020d8=_0x1020d8-0x0;let _0x107938=_0x43c8[_0x1020d8];return _0x107938;};'use strict';import{ImportList}from'./ImportList.js';import{Vetools}from'./Vetools.js';import{LGT}from'./Util.js';import{DataConverter}from'./DataConverter.js';import{Config}from'./Config.js';import{UtilList2}from'./UtilList2.js';class ImportListVariantRule extends ImportList{constructor(_0x2af371){_0x2af371=_0x2af371||{},super({'title':_0x1079('0x22')},_0x2af371,{'props':[_0x1079('0x28')],'titleSearch':_0x1079('0x2e'),'sidebarTab':_0x1079('0x13'),'gameProp':_0x1079('0x13'),'defaultFolderPath':[_0x1079('0x20')],'folderType':_0x1079('0x23'),'pageFilter':new PageFilterVariantRules(),'page':UrlUtil[_0x1079('0x4')],'isPreviewable':!![]});}async[_0x1079('0xc')](){return[new ImportList['DataSourceUrl'](Config[_0x1079('0x18')]('ui','isStreamerMode')?_0x1079('0x14'):_0x1079('0xd'),Vetools['DATA_URL_VARIANTRULES'],{'filterTypes':[ImportList[_0x1079('0x21')]],'isDefault':!![]}),new ImportList[(_0x1079('0x1'))]('Custom\x20URL','',{'filterTypes':[ImportList[_0x1079('0x1c')]]}),new ImportList['DataSourceFile'](_0x1079('0xb'),{'filterTypes':[ImportList['SOURCE_TYP_CUSTOM']]}),...(await Vetools[_0x1079('0x27')](_0x1079('0x28')))[_0x1079('0x2a')](({name,url})=>new ImportList[(_0x1079('0x1'))](name,url,{'filterTypes':[ImportList[_0x1079('0x26')]]}))];}['getData'](){return{'isPreviewable':this['_isPreviewable'],'titleButtonRun':this[_0x1079('0x3')],'titleSearch':this[_0x1079('0x16')],'cols':[{'name':_0x1079('0x1d'),'width':0x9,'field':_0x1079('0x10')},{'name':_0x1079('0x9'),'width':0x2,'field':_0x1079('0x1a'),'titleProp':'sourceLong','displayProp':_0x1079('0x2'),'rowClassName':_0x1079('0x0')}],'rows':this[_0x1079('0x19')][_0x1079('0x2a')]((_0x345c38,_0x3b7f86)=>{return this[_0x1079('0x1f')]['mutateForFilters'](_0x345c38),{'name':_0x345c38[_0x1079('0x10')],'source':_0x345c38['source'],'sourceShort':Parser[_0x1079('0x7')](_0x345c38[_0x1079('0x1a')]),'sourceLong':Parser['sourceJsonToFull'](_0x345c38['source']),'ix':_0x3b7f86};})};}[_0x1079('0x5')](){this[_0x1079('0x24')]['doAbsorbItems'](this[_0x1079('0x19')],{'fnGetName':_0x257c3e=>_0x257c3e[_0x1079('0x10')],'fnGetValues':_0x3ebb8d=>({'source':_0x3ebb8d['source'],'hash':UrlUtil[_0x1079('0x2c')][this['_page']](_0x3ebb8d)}),'fnGetData':UtilList2[_0x1079('0xf')],'fnBindListeners':_0xd1181=>UtilList2[_0x1079('0xe')](this['_list'],_0xd1181)});}async[_0x1079('0xa')](_0x5eb432,_0x442c0a){_0x442c0a=_0x442c0a||{},console[_0x1079('0x2b')](...LGT,_0x1079('0x6')+_0x5eb432[_0x1079('0x10')]+_0x1079('0x1e')+Parser['sourceJsonToAbv'](_0x5eb432[_0x1079('0x1a')])+'\x22)');if(this[_0x1079('0x17')])throw new Error(_0x1079('0x15'));const _0x106d0e=DataConverter[_0x1079('0x8')](_0x5eb432,{'isAddPermission':!![]});if(_0x442c0a[_0x1079('0x12')]||!this[_0x1079('0x11')]){if(!_0x442c0a['isTemp']){const _0xe5b973=await this[_0x1079('0x1b')](_0x5eb432);if(_0xe5b973)_0x106d0e['folder']=_0xe5b973;}const _0x19cf6a=await JournalEntry[_0x1079('0x29')](_0x106d0e,{'renderSheet':!!_0x442c0a[_0x1079('0x12')],'temporary':!!_0x442c0a[_0x1079('0x12')]});if(!_0x442c0a[_0x1079('0x12')])await game[_0x1079('0x13')][_0x1079('0x25')](_0x19cf6a);return _0x19cf6a;}else{const _0x550077=new JournalEntry(_0x106d0e);return await this[_0x1079('0x11')][_0x1079('0x2d')](_0x550077),_0x550077;}}}export{ImportListVariantRule};
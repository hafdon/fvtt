const _0x4e07=['pact','_pImportEntry_pFillBase','prof','_isUseMods','details','slots','speed','ABIL_ABVS','/media/icon/mailed-fist.svg','_pTypes','activateListeners','fluff','creatures','MODULE_LOCATION','rwak','_pImportEntry_fillData_Attributes','val','pGetSpellHashToItemPosMapAndFillSpells','DataSourceFile','link','spell','length','Unknown\x20CR','text-center','med','SKILL_ABV_TO_FULL','ascSortLower','actor','con','Source','constant','_titleSearch','from','action','_isRadio','folder','_pImportEntry_pFillItems_pAddWeapon','trim','sourceJsonToAbv','_pImportEntry_fillData_Details','spellcasting','Cannot\x20import\x20creature\x20to\x20actor!','legendary','ScaleRename','getItemActorPassive','pGetItemItem','traits','PG_BESTIARY','_pImportEntry_pFillItems_pAddItem','feat','sourceLong','VALID_LANGUAGES','log','get','innate','type','Upload\x20File','spelldc','alias','item','/media/icon/mountain-cave.svg','SOURCE_TYP_OFFICIAL_ALL','prop','DataSourceUrl','_pImportEntry_pFillItems_lairActions','[name=\x22btn-run-mods\x22]','_pack','spellDc','SOURCE_TYP_ARCANA','getMaxWindowHeight','spellClass','copy','data','npc','_pImportEntry_fillData_Resources','spellAbility','crToNumber','trait','sourceJsonToFull','hover','Actor','titleSearch','close','pCacheAndGetHash','_pImportEntry_fillData_Traits','Importing...','parse','variant','stringify','dex','damageTuples','lairActions','custom','insert','importEntity','_getCasterLevelFromEntry','click','getSourceWithPagePart','/template/ImportListCreatureScaleRename.handlebars','forEach','.veapp__list','str','ele','/media/icon/spell-book.svg','spellLevel','map','legendaryActions','_content','_pImportEntry_pFillToken','getCreatureUrl','stripTags','_pImportEntry_pFillItems','_initSpellcasterData','asText','identified','list','render','_pImportEntry_pFillItems_pAction','.search','_resolve','_displayName','5etools-creatures','attributes','mutateForFilters','_pImportEntry_pFillItems_pActions','pImportEntry','find','_$btnRunWithMods','keys','...','source','pGetSources','_titleButtonRun','PG_ITEMS','getData','pGetCreatureIndex','[name=\x22btn-run\x22]','_pImportEntry_fillData_Currency','actors','_DEFAULT_SAVING_THROW_DATA','Challenge\x20Rating','SRD','monsterFluff','getDamageTuples','headerEntries','cha','size','mwak','Import\x20Creatures','reset','initBtnSortHandlers','items','_activateListeners_initRunButton','skills','int','URL_TO_HASH_BUILDER','_pFnPostProcessEntries','permission','function','_$btnReset','sort','alignment','\x22\x20(from\x20\x22','Type\x20(With\x20Tags)','senses','Import\x20with\x20CR\x20Scaling/Renames','importCreature','entries','_monList','will','Name','day','5etools','add','Legendary\x20Resistance','legres','monster','monTypeToFullObj','[name=\x22btn-reset\x22]','toTitleCase','data/bestiary/','formula','monCrToFull','pGetAllCreatures','ImportEntryOpts','getAbilityModNumber','_getBiographyValue','number','ixSub','Scale\x20and\x20Rename\x20Creatures','_activateListeners_doFindUiElements','init','scale','string','name','crToXpNumber','_pImportEntry_fillConditionsDamage','getMetaGroup','SOURCE_TYP_BREW','getCleanEntityName','Importing\x20creature\x20\x22','[name=\x22ipt-rename\x22]','lower','spell0','Custom\x20URL','_pImportEntry_fillData_Skills','toLowerCase','join','_list','replace','filter','bind','activationType','isStreamerMode','pAddActorItems','race','SOURCE_TYP_CUSTOM','weaponType','[data-name=\x22wrp-btns-sort\x22]','_actor','weapon','lair','spells','resources','img','uppercaseFirst','\x20+\x20@mod','_pImportEntry_pFillItems_addTextOnlyItem','_pImportEntry_fillData_Abilities','Creatures','split','prepared','currency','_getAbsorbListItemOpts','pGetHomebrewSources','_pImportEntry_fillData_Spells','_pageFilter','MODULE_NAME','activationCost','group','doAbsorbItems','_getRenamedMon','btn-run-mods','all','token','assumedPb','_postLoadVetools','modules/','languages','exec','Type','average','_pImportEntry_pFillItems_pSpellcasting_recharge','environment','daily','getSpeedString','ability','includes','_vCr','thieves\x27\x20cant','doHookSpellLinkRender','class','getFolderPathMeta','isTemp','create','_pHandleClickRunButton','_pImportEntry_pFillItems_pInventory','sortMonsters','weekly','msak','_getSavingThrowData','flat','pGetFluff','_getDamageTuplesWithMod','push','legendaryMeta','_pImportEntry_pFillItems_traitsReactionsLegendaries','_page','_pImportEntry_pFillItems_pSpellcasting','perm','_getCasterClassFromEntry','biography','wis','skill','creature'];(function(_0x579f7f,_0x4e07e7){const _0x1c9ac2=function(_0x1dad44){while(--_0x1dad44){_0x579f7f['push'](_0x579f7f['shift']());}};_0x1c9ac2(++_0x4e07e7);}(_0x4e07,0x1d4));const _0x1c9a=function(_0x579f7f,_0x4e07e7){_0x579f7f=_0x579f7f-0x0;let _0x1c9ac2=_0x4e07[_0x579f7f];return _0x1c9ac2;};'use strict';import{ImportList}from'./ImportList.js';import{ImportListActor}from'./ImportListActor.js';import{Vetools}from'./Vetools.js';import{Util,LGT}from'./Util.js';import{UtilActors}from'./UtilActors.js';import{UtilApplications}from'./UtilApplications.js';import{DataConverter}from'./DataConverter.js';import{DataConverterItem}from'./DataConverterItem.js';import{SharedConsts}from'../shared/SharedConsts.js';import{Config}from'./Config.js';import{UtilList2}from'./UtilList2.js';import{DataConverterSpell}from'./DataConverterSpell.js';class ImportListCreature extends ImportListActor{constructor(_0xb59162){_0xb59162=_0xb59162||{},super({'title':_0x1c9a('0xfa')},_0xb59162,{'props':[_0x1c9a('0x116')],'titleSearch':_0x1c9a('0x72'),'sidebarTab':_0x1c9a('0xf0'),'gameProp':_0x1c9a('0xf0'),'defaultFolderPath':[_0x1c9a('0x2e')],'folderType':_0x1c9a('0xb6'),'fnListSort':PageFilterBestiary[_0x1c9a('0x54')],'pageFilter':new PageFilterBestiary(),'isActorRadio':!![],'page':UrlUtil[_0x1c9a('0x95')],'isPreviewable':!![]},{'actorType':_0x1c9a('0xaf')}),this[_0x1c9a('0x69')]=![];}async[_0x1c9a('0xe9')](){const _0x2faa11=await Vetools[_0x1c9a('0xed')]();return[new ImportList['DataSourceSpecial'](Config['get']('ui',_0x1c9a('0x1e'))?_0x1c9a('0xf3'):_0x1c9a('0x112'),async()=>(await Vetools[_0x1c9a('0x0')]())[_0x1c9a('0x116')],{'cacheKey':_0x1c9a('0xdf'),'filterTypes':[ImportList[_0x1c9a('0xa3')]],'isDefault':!![]}),new ImportList[(_0x1c9a('0xa5'))](_0x1c9a('0x15'),'',{'filterTypes':[ImportList[_0x1c9a('0x21')]]}),new ImportList[(_0x1c9a('0x78'))](_0x1c9a('0x9e'),{'filterTypes':[ImportList[_0x1c9a('0x21')]]}),...Object['entries'](_0x2faa11)[_0x1c9a('0xcf')](([_0x30b204,_0x3f058a])=>new ImportList[(_0x1c9a('0xa5'))](Parser[_0x1c9a('0xb4')](_0x30b204),Vetools[_0x1c9a('0xd3')](_0x3f058a),{'source':_0x30b204,'pPostLoad':ImportListCreature[_0x1c9a('0x3f')]['bind'](ImportListCreature,_0x30b204),'filterTypes':SourceUtil['isNonstandardSource'](_0x30b204)?[ImportList[_0x1c9a('0xaa')]]:[ImportList['SOURCE_TYP_OFFICIAL_SINGLE']]})),...(await Vetools[_0x1c9a('0x33')](_0x1c9a('0x65')))[_0x1c9a('0xcf')](({name,url})=>new ImportList['DataSourceUrl'](name,url,{'filterTypes':[ImportList[_0x1c9a('0xf')]]}))];}static[_0x1c9a('0x3f')](_0x2647f6,_0x4e1eaa){return _0x4e1eaa[_0x1c9a('0x1b')](_0x2af2d7=>_0x2af2d7['source']===_0x2647f6);}[_0x1c9a('0x7')](..._0x164d1e){super[_0x1c9a('0x7')](..._0x164d1e),this[_0x1c9a('0xe5')]=this['_$wrpRun']['find'](_0x1c9a('0xa7'));}[_0x1c9a('0xfe')](..._0x3f0d18){super[_0x1c9a('0xfe')](..._0x3f0d18),this[_0x1c9a('0xe5')]['click'](async()=>{try{this['_isUseMods']=!![],await this[_0x1c9a('0x52')]();}finally{this['_isUseMods']=![];}});}[_0x1c9a('0xec')](){return{'isRadio':this[_0x1c9a('0x88')],'isPreviewable':this['_isPreviewable'],'titleButtonRun':this[_0x1c9a('0xea')],'titleSearch':this[_0x1c9a('0x85')],'buttonsAdditional':[{'name':_0x1c9a('0x3b'),'text':_0x1c9a('0x10b')}],'cols':[{'name':_0x1c9a('0x110'),'width':0x4,'field':_0x1c9a('0xb')},{'name':'Type','width':0x5,'field':_0x1c9a('0x9d')},{'name':'CR','width':0x1,'field':'cr','rowClassName':_0x1c9a('0x7d')},{'name':_0x1c9a('0x83'),'width':0x1,'field':_0x1c9a('0xe8'),'titleProp':_0x1c9a('0x98'),'displayProp':'sourceShort','rowClassName':_0x1c9a('0x7d')}],'rows':this[_0x1c9a('0xd1')][_0x1c9a('0xcf')]((_0x5e1019,_0x12e0c1)=>{return this[_0x1c9a('0x35')][_0x1c9a('0xe1')](_0x5e1019),_0x5e1019['_vCr']=_0x5e1019['_pCr']||'—',{'name':_0x5e1019[_0x1c9a('0xb')],'type':_0x5e1019[_0x1c9a('0x6f')][_0x1c9a('0xd7')][_0x1c9a('0x2a')](),'cr':_0x5e1019[_0x1c9a('0x4b')],'source':_0x5e1019[_0x1c9a('0xe8')],'sourceShort':Parser[_0x1c9a('0x8c')](_0x5e1019[_0x1c9a('0xe8')]),'sourceLong':Parser[_0x1c9a('0xb4')](_0x5e1019[_0x1c9a('0xe8')]),'ix':_0x12e0c1};})};}[_0x1c9a('0x32')](){return{'fnGetName':_0x538ff9=>_0x538ff9[_0x1c9a('0xb')],'fnGetValues':_0x342a55=>({'source':_0x342a55[_0x1c9a('0xe8')],'type':_0x342a55[_0x1c9a('0x6f')]['asText'],'cr':_0x342a55[_0x1c9a('0x4b')],'group':_0x342a55[_0x1c9a('0x38')]||'','alias':(_0x342a55[_0x1c9a('0xa0')]||[])['map'](_0x372c0f=>'\x22'+_0x372c0f+'\x22')[_0x1c9a('0x18')](','),'hash':UrlUtil[_0x1c9a('0x101')][this[_0x1c9a('0x5e')]](_0x342a55)}),'fnGetData':UtilList2['absorbFnGetData'],'fnBindListeners':_0x35f033=>UtilList2['absorbFnBindListeners'](this[_0x1c9a('0x19')],_0x35f033)};}['_activateListeners_absorbListItems'](){this[_0x1c9a('0x19')][_0x1c9a('0x39')](this[_0x1c9a('0xd1')],this[_0x1c9a('0x32')]());}[_0x1c9a('0x4f')](){return{...super[_0x1c9a('0x4f')](),'cr':{'label':_0x1c9a('0xf2'),'getter':_0x10ede4=>_0x10ede4['cr']?_0x10ede4['cr']['cr']||_0x10ede4['cr']:_0x1c9a('0x7c')},'type':{'label':_0x1c9a('0x43'),'getter':_0x54b646=>Parser[_0x1c9a('0x117')](_0x54b646[_0x1c9a('0x9d')])[_0x1c9a('0x9d')][_0x1c9a('0x119')]()},'typeTags':{'label':_0x1c9a('0x109'),'getter':_0x39d742=>Parser[_0x1c9a('0x117')](_0x39d742[_0x1c9a('0x9d')])['asText'][_0x1c9a('0x2a')]()}};}[_0x1c9a('0x102')](_0x42fa4e){if(!this[_0x1c9a('0x69')])return _0x42fa4e;return new Promise(_0x2f70f6=>{const _0x5a98fa=new ImportListCreature[(_0x1c9a('0x91'))](_0x42fa4e,_0x2f70f6,{'titleSearch':this[_0x1c9a('0x85')]});_0x5a98fa[_0x1c9a('0xda')](!![]);});}async[_0x1c9a('0xe3')](_0x1a79d6,_0x33bf49){_0x33bf49=_0x33bf49||{},console[_0x1c9a('0x9a')](...LGT,_0x1c9a('0x11')+_0x1a79d6['name']+_0x1c9a('0x108')+Parser[_0x1c9a('0x8c')](_0x1a79d6[_0x1c9a('0xe8')])+'\x22)');if(this[_0x1c9a('0x24')])throw new Error(_0x1c9a('0x8f'));let _0x4e6912=this[_0x1c9a('0xa8')]?null:await Actor[_0x1c9a('0x51')]({'name':_0x1c9a('0xbb'),'type':_0x1c9a('0xaf')},{'renderSheet':!!_0x33bf49['isTemp'],'temporary':!!_0x33bf49[_0x1c9a('0x50')]});const _0x75c784={},_0x2dbf48=await Renderer['utils'][_0x1c9a('0x59')]({'entity':_0x1a79d6,'pFnPostProcess':Renderer[_0x1c9a('0x116')]['postProcessFluff']['bind'](null,_0x1a79d6),'fluffBaseUrl':_0x1c9a('0x11a'),'fluffProp':_0x1c9a('0xf4')}),_0x5726e7=new ImportListCreature[(_0x1c9a('0x1'))](_0x4e6912,_0x1a79d6,_0x2dbf48);await this[_0x1c9a('0x67')](_0x1a79d6,_0x75c784,_0x5726e7[_0x1c9a('0x71')]),_0x75c784[_0x1c9a('0xae')]={};if(!_0x33bf49[_0x1c9a('0x50')]&&!this[_0x1c9a('0xa8')]){const _0x87c16b=await this['_pImportEntry_pGetFolderId'](_0x1a79d6);if(_0x87c16b)_0x75c784[_0x1c9a('0x89')]=_0x87c16b;}_0x75c784[_0x1c9a('0x103')]={'default':Config['get']('importCreature','permissions')},this[_0x1c9a('0x2d')](_0x1a79d6,_0x75c784[_0x1c9a('0xae')],_0x5726e7),this[_0x1c9a('0x75')](_0x1a79d6,_0x75c784['data'],_0x5726e7),this[_0x1c9a('0x8d')](_0x1a79d6,_0x75c784[_0x1c9a('0xae')],_0x5726e7),this[_0x1c9a('0x16')](_0x1a79d6,_0x75c784[_0x1c9a('0xae')],_0x5726e7),this[_0x1c9a('0xba')](_0x1a79d6,_0x75c784[_0x1c9a('0xae')],_0x5726e7),this['_pImportEntry_fillData_Currency'](_0x1a79d6,_0x75c784[_0x1c9a('0xae')],_0x5726e7),this[_0x1c9a('0x34')](_0x1a79d6,_0x75c784[_0x1c9a('0xae')],_0x5726e7),this[_0x1c9a('0xb0')](_0x1a79d6,_0x75c784[_0x1c9a('0xae')],_0x5726e7),await this[_0x1c9a('0xd2')](_0x1a79d6,_0x75c784,_0x1c9a('0x10c'));if(_0x33bf49[_0x1c9a('0x50')])return _0x4e6912=await Actor[_0x1c9a('0x51')]({..._0x75c784,'type':_0x1c9a('0xaf')},{'renderSheet':!![],'temporary':!![]}),_0x5726e7[_0x1c9a('0x81')]=_0x4e6912,await this[_0x1c9a('0xd5')](_0x1a79d6,_0x75c784,_0x5726e7,_0x33bf49),_0x4e6912;else{if(this['_pack'])return _0x4e6912=await Actor[_0x1c9a('0x51')]({..._0x75c784,'type':_0x1c9a('0xaf')},{'temporary':!![]}),_0x5726e7['actor']=_0x4e6912,await this[_0x1c9a('0xd5')](_0x1a79d6,_0x75c784,_0x5726e7,_0x33bf49),await this[_0x1c9a('0xa8')][_0x1c9a('0xc4')](_0x4e6912),_0x4e6912;else{await this['_pImportEntry_pFillItems'](_0x1a79d6,_0x75c784,_0x5726e7,_0x33bf49);const _0x3a5d83=_0x75c784[_0x1c9a('0x3d')][_0x1c9a('0x29')];await _0x4e6912['update'](_0x75c784);_0x4e6912[_0x1c9a('0xae')][_0x1c9a('0x3d')]!==_0x3a5d83&&await _0x4e6912['update']({'token':{'img':_0x3a5d83}});if(!_0x33bf49[_0x1c9a('0x50')])await game[_0x1c9a('0xf0')][_0x1c9a('0xc3')](_0x4e6912);return _0x4e6912;}}}[_0x1c9a('0x75')](_0x4a6829,_0x3d17bb,_0x2aeaec){const _0x91dd08={};let _0x3b44e9='10',_0xd08c4c='';if(_0x4a6829['ac']&&_0x4a6829['ac'][_0x1c9a('0x7b')]){const _0x45a7a8=_0x4a6829['ac'][0x0];if(typeof _0x45a7a8===_0x1c9a('0x4'))_0x3b44e9=''+_0x45a7a8;else{if(typeof _0x45a7a8['ac']===_0x1c9a('0x4'))_0x3b44e9=''+_0x45a7a8['ac'];}if(_0x45a7a8['from'])_0xd08c4c=_0x45a7a8[_0x1c9a('0x86')]['map'](_0x177022=>Renderer[_0x1c9a('0xd4')](_0x177022)[_0x1c9a('0x8b')]())[_0x1c9a('0x18')](',\x20');}_0x91dd08['ac']={'min':0x0,'value':_0x3b44e9};let _0x52e887=0x0,_0x3b3e44='';if(_0x4a6829['hp']){if(_0x4a6829['hp'][_0x1c9a('0x44')])_0x52e887=_0x4a6829['hp'][_0x1c9a('0x44')];if(_0x4a6829['hp'][_0x1c9a('0x11b')])_0x3b3e44=_0x4a6829['hp'][_0x1c9a('0x11b')];}_0x91dd08['hp']={'value':_0x52e887,'min':0x0,'max':_0x52e887,'temp':0x0,'tempmax':0x0,'formula':_0x3b3e44},_0x91dd08[_0x1c9a('0x8')]={'value':0x0,'mod':0x0,'bonus':0x0,'total':Parser[_0x1c9a('0x2')](_0x4a6829[_0x1c9a('0xbf')]),'prof':0x0},_0x91dd08[_0x1c9a('0x68')]=_0x2aeaec['pb'];const _0x5c501e=Parser[_0x1c9a('0x48')](_0x4a6829),[_0x26c5ac,..._0x2e7a9e]=_0x5c501e['split'](',\x20');_0x91dd08[_0x1c9a('0x6c')]={'value':_0x26c5ac,'special':_0x2e7a9e[_0x1c9a('0x18')](',\x20')},_0x91dd08[_0x1c9a('0x8e')]=_0x2aeaec[_0x1c9a('0xb1')],_0x91dd08[_0x1c9a('0x9f')]=_0x2aeaec[_0x1c9a('0xa9')],_0x3d17bb[_0x1c9a('0xe0')]=_0x91dd08;}[_0x1c9a('0x8d')](_0x254427,_0x3ef21b,_0x5d9d3f){const _0x3fabb6={};_0x3fabb6[_0x1c9a('0x107')]=_0x254427['alignment']?Parser['alignmentListToFull'](_0x254427[_0x1c9a('0x107')])[_0x1c9a('0x17')]():'',_0x3fabb6[_0x1c9a('0x62')]={'value':this[_0x1c9a('0x3')](_0x5d9d3f['fluff'])};_0x5d9d3f[_0x1c9a('0xce')]||_0x5d9d3f[_0x1c9a('0xac')]?_0x3fabb6[_0x1c9a('0x4e')]={'level':_0x5d9d3f['spellLevel'],'name':_0x5d9d3f['spellClass']}:_0x3fabb6[_0x1c9a('0x4e')]={};_0x3fabb6[_0x1c9a('0xce')]=_0x5d9d3f['spellLevel'],_0x3fabb6[_0x1c9a('0x20')]='',_0x3fabb6[_0x1c9a('0x9d')]=Parser[_0x1c9a('0x117')](_0x254427[_0x1c9a('0x9d')])[_0x1c9a('0xd7')],_0x3fabb6[_0x1c9a('0x46')]=_0x254427[_0x1c9a('0x46')]?_0x254427[_0x1c9a('0x46')][_0x1c9a('0x106')](SortUtil[_0x1c9a('0x80')])[_0x1c9a('0xcf')](_0x44ad76=>_0x44ad76[_0x1c9a('0x119')]())[_0x1c9a('0x18')](',\x20'):'';const _0x3da2a9=Parser[_0x1c9a('0xb2')](_0x254427['cr']);_0x3fabb6['cr']=_0x3da2a9===0x64?0x0:_0x3da2a9,_0x3fabb6['xp']={'value':_0x254427['cr']?Parser[_0x1c9a('0xc')](_0x254427['cr'])||0x0:0x0},_0x3fabb6['source']=DataConverter[_0x1c9a('0xc7')](_0x254427),_0x3ef21b[_0x1c9a('0x6a')]=_0x3fabb6;}['_pImportEntry_fillData_Skills'](_0x2cb62f,_0x1f93d3,_0x2db168){const _0x532713={};Object[_0x1c9a('0x10d')](UtilActors[_0x1c9a('0x7f')])['forEach'](([_0x18f611,_0xffe56c])=>{const _0xeafac0=Parser['skillToAbilityAbv'](_0xffe56c);let _0x487175=0x0,_0x49b71f=Parser[_0x1c9a('0x2')](_0x2cb62f[_0xeafac0]);if(_0x2cb62f[_0x1c9a('0x64')]&&_0x2cb62f[_0x1c9a('0x64')][_0xffe56c]){const _0x5a6b8d=Number(_0x2cb62f['skill'][_0xffe56c]);if(!isNaN(_0x5a6b8d)){const _0x1a08a4=Parser['getAbilityModNumber'](_0x2cb62f[_0xeafac0]);if(_0x1a08a4+_0x2db168['pb']===_0x5a6b8d)_0x487175=0x1;else{if(_0x1a08a4+0x2*_0x2db168['pb']===_0x5a6b8d)_0x487175=0x2;}}}_0x532713[_0x18f611]={'value':_0x487175,'ability':_0xeafac0,'mod':_0x49b71f,'bonus':0x0,'passive':0xa+_0x49b71f};}),_0x1f93d3[_0x1c9a('0xff')]=_0x532713;}[_0x1c9a('0xba')](_0x1126e2,_0x3b75ec,_0x25f80d){const _0x4471a8={};_0x4471a8[_0x1c9a('0xf8')]=UtilActors['VET_SIZE_TO_ABV'][_0x1126e2[_0x1c9a('0xf8')]]||_0x1c9a('0x7e'),_0x4471a8[_0x1c9a('0x10a')]=_0x1126e2[_0x1c9a('0x10a')]?_0x1126e2[_0x1c9a('0x10a')][_0x1c9a('0x18')](',\x20'):'';const _0x120441=new Set();let _0x4e21c2=[];_0x1126e2[_0x1c9a('0x41')]&&_0x1126e2[_0x1c9a('0x41')][_0x1c9a('0xc9')](_0x24e648=>{const _0x520f8a=_0x24e648['toLowerCase'](),_0xed0cd4=_0x520f8a===_0x1c9a('0x4c')?'cant':_0x520f8a;if(UtilActors[_0x1c9a('0x99')][_0x1c9a('0x4a')](_0xed0cd4))_0x120441[_0x1c9a('0x113')](_0xed0cd4);else _0x120441[_0x1c9a('0x113')](_0x1c9a('0xc2')),_0x4e21c2[_0x1c9a('0x5b')](_0x24e648);}),_0x4471a8[_0x1c9a('0x41')]={'value':[..._0x120441],'custom':_0x4e21c2[_0x1c9a('0x1b')](Boolean)[_0x1c9a('0x18')](';\x20')},this[_0x1c9a('0xd')](_0x1126e2,_0x4471a8),_0x3b75ec[_0x1c9a('0x94')]=_0x4471a8;}[_0x1c9a('0xef')](_0x2ffca0,_0x385a15,_0x1e18a7){_0x385a15[_0x1c9a('0x31')]={'pp':0x0,'gp':0x0,'ep':0x0,'sp':0x0,'cp':0x0};}[_0x1c9a('0x34')](_0x441fcc,_0x948ee4,_0x26e81f){const _0x3153ac={};_0x3153ac[_0x1c9a('0x14')]={'value':0x0,'max':0x0};if(_0x441fcc['spellcasting']&&_0x441fcc[_0x1c9a('0x8e')]['some'](_0x52ca06=>_0x52ca06[_0x1c9a('0x27')]))for(let _0xe02f5f=0x1;_0xe02f5f<0xa;++_0xe02f5f){const _0x468ca9=_0x441fcc[_0x1c9a('0x8e')]['find'](_0x5cf67c=>_0x5cf67c[_0x1c9a('0x27')]&&_0x5cf67c['spells'][_0xe02f5f]&&_0x5cf67c['spells'][_0xe02f5f]['slots']);let _0x10a0ec=0x0;if(_0x468ca9)_0x10a0ec=_0x468ca9[_0x1c9a('0x27')][_0xe02f5f][_0x1c9a('0x6b')];_0x3153ac[_0x1c9a('0x7a')+_0xe02f5f]={'value':_0x10a0ec,'max':_0x10a0ec};}else for(let _0x5ebe54=0x1;_0x5ebe54<0xa;++_0x5ebe54){_0x3153ac[_0x1c9a('0x7a')+_0x5ebe54]={'value':0x0,'max':0x0};}_0x948ee4[_0x1c9a('0x27')]=_0x3153ac;}[_0x1c9a('0xb0')](_0xfecb7f,_0x4987b9,_0x4a25e0){const _0x2537df={};let _0x4402c4=0x0;if(_0xfecb7f['legendary'])_0x4402c4=_0xfecb7f[_0x1c9a('0xd0')]||0x3;_0x2537df['legact']={'value':_0x4402c4,'max':_0x4402c4};let _0xd714bd=0x0;if(_0xfecb7f[_0x1c9a('0xb3')]){const _0x51fb7c=_0xfecb7f[_0x1c9a('0xb3')]['find'](_0x2497cd=>_0x2497cd['name']&&_0x2497cd['name']['includes'](_0x1c9a('0x114')));if(_0x51fb7c){const _0x49c963=/\((\d+)\/Day\)/i[_0x1c9a('0x42')](_0x51fb7c[_0x1c9a('0xb')]);if(_0x49c963)_0xd714bd=Number(_0x49c963[0x1]);}}_0x2537df[_0x1c9a('0x115')]={'value':_0xd714bd,'max':_0xd714bd},_0x2537df[_0x1c9a('0x26')]={'value':!!(_0x4a25e0[_0x1c9a('0x5c')]&&_0x4a25e0[_0x1c9a('0x5c')][_0x1c9a('0xc1')]),'initiative':0x14},_0x4987b9[_0x1c9a('0x28')]=_0x2537df;}async[_0x1c9a('0xd5')](_0x5c2497,_0x4088ae,_0xf4b366,_0x505bf3){await this[_0x1c9a('0xe2')](_0x5c2497,_0x4088ae,_0xf4b366),this[_0x1c9a('0x5d')](_0x5c2497,_0x4088ae,_0xf4b366,{'prop':_0x1c9a('0xb3')}),this[_0x1c9a('0x5d')](_0x5c2497,_0x4088ae,_0xf4b366,{'prop':'reaction','activationType':'reaction','activationCost':0x1}),this['_pImportEntry_pFillItems_traitsReactionsLegendaries'](_0x5c2497,_0x4088ae,_0xf4b366,{'prop':_0x1c9a('0x90'),'activationType':_0x1c9a('0x90'),'activationCost':_0x5e76bb=>{if(_0x5e76bb[_0x1c9a('0xb')]){const _0x32887c=/\(costs (\d+) actions?\)/i[_0x1c9a('0x42')](_0x5e76bb[_0x1c9a('0xb')]);if(_0x32887c)return Number(_0x32887c[0x1]);}return 0x1;}}),this[_0x1c9a('0xa6')](_0x5c2497,_0x4088ae,_0xf4b366),await this[_0x1c9a('0x53')](_0x5c2497,_0x4088ae,_0xf4b366);const _0x38883c=_0x505bf3[_0x1c9a('0x50')]||this[_0x1c9a('0xa8')]!=null;await this[_0x1c9a('0x5f')](_0x5c2497,_0x4088ae,_0x38883c,_0xf4b366),await UtilActors[_0x1c9a('0x1f')](_0xf4b366['actor'],_0xf4b366[_0x1c9a('0xfd')],_0x38883c);}[_0x1c9a('0x2c')](_0x1f0a2a,_0x5c0aed,_0x406fe6,_0x400160,_0x11c8c9){_0x5c0aed[_0x1c9a('0xfd')]['push'](DataConverter[_0x1c9a('0x92')](_0x400160,{..._0x11c8c9,'mode':'creature','source':_0x1f0a2a[_0x1c9a('0xe8')],'actor':{'data':_0x406fe6}}));}[_0x1c9a('0x5d')](_0x33153a,_0x90441c,_0x2f30a2,_0x2eb128){if(!_0x33153a[_0x2eb128[_0x1c9a('0xa4')]])return;_0x33153a[_0x2eb128[_0x1c9a('0xa4')]][_0x1c9a('0xc9')](_0x1b3c3f=>{const _0xea2b69=_0x2eb128[_0x1c9a('0x37')]&&typeof _0x2eb128[_0x1c9a('0x37')]===_0x1c9a('0x104')?_0x2eb128[_0x1c9a('0x37')](_0x1b3c3f):_0x2eb128[_0x1c9a('0x37')]||0x0;this[_0x1c9a('0x2c')](_0x33153a,_0x2f30a2,_0x90441c,_0x1b3c3f,{'fvttType':_0x1c9a('0x97'),'activationType':_0x2eb128[_0x1c9a('0x1d')],'activationCost':_0xea2b69,'img':_0x1c9a('0x40')+SharedConsts[_0x1c9a('0x36')]+'/media/icon/mighty-force.svg'});});}[_0x1c9a('0xa6')](_0xd4650b,_0x5f497e,_0xf120a9){if(!_0xf120a9[_0x1c9a('0x5c')]||!_0xf120a9[_0x1c9a('0x5c')][_0x1c9a('0xc1')])return;const _0x415e10=_0x3a353a=>{if(typeof _0x3a353a==='string'){const _0x43dda6=Renderer[_0x1c9a('0xd4')](_0x3a353a);let _0x513429='';const _0x247d2d=_0x43dda6[_0x1c9a('0x2f')]('\x20');for(const _0x53521e of _0x247d2d){if(_0x513429[_0x1c9a('0x7b')]+_0x53521e[_0x1c9a('0x7b')]<0x32)_0x513429+=_0x53521e+'\x20';else break;}if(_0x43dda6[_0x1c9a('0x7b')]>_0x513429[_0x1c9a('0x8b')]()['length'])_0x513429+=_0x1c9a('0xe7');else _0x513429=_0x513429[_0x1c9a('0x8b')]();_0x3a353a={'type':_0x1c9a('0x10d'),'name':_0x513429,'entries':[_0x3a353a]};}const _0x2ba9cd=JSON[_0x1c9a('0xbe')](_0x3a353a),{saveAbility,saveScaling,saveDc}=this[_0x1c9a('0x57')](_0xd4650b,_0xf120a9[_0x1c9a('0x3e')],_0x2ba9cd),_0x2dd531=typeof _0x3a353a['entries'][0x0]===_0x1c9a('0xa')?DataConverter[_0x1c9a('0xf5')](_0x3a353a[_0x1c9a('0x10d')][0x0])['damageTuples']:[],_0x4ae97d=this[_0x1c9a('0x5a')](_0x2dd531);this[_0x1c9a('0x2c')](_0xd4650b,_0xf120a9,_0x5f497e,_0x3a353a,{'fvttType':_0x1c9a('0x97'),'activationType':'lair','activationCost':0x1,'img':_0x1c9a('0x40')+SharedConsts[_0x1c9a('0x36')]+_0x1c9a('0xa2'),'saveAbility':saveAbility,'saveDc':saveDc,'saveScaling':saveScaling,'damageParts':_0x4ae97d});},_0x54880e=_0xf120a9['legendaryMeta']['lairActions'],_0x21c45e=_0x54880e['find'](_0x599f9b=>_0x599f9b[_0x1c9a('0x9d')]===_0x1c9a('0xd9'));_0x21c45e?_0x21c45e[_0x1c9a('0xfd')][_0x1c9a('0xc9')](_0x203bdf=>_0x415e10(_0x203bdf)):_0x415e10(_0x54880e);}async[_0x1c9a('0xe2')](_0x322289,_0x4e75a6,_0x17c34d){if(!_0x322289[_0x1c9a('0x87')])return;for(const _0x55e390 of _0x322289[_0x1c9a('0x87')]){await this[_0x1c9a('0xdb')](_0x322289,_0x4e75a6,_0x55e390,_0x17c34d);}}async['_pImportEntry_pFillItems_pAction'](_0x3a9bd6,_0x14835d,_0xf3858c,_0x1cae48){const _0x2007db=DataConverter['getEntryDescription'](_0xf3858c),_0x1919a0=_0xf3858c[_0x1c9a('0x10d')]?JSON[_0x1c9a('0xbe')](_0xf3858c[_0x1c9a('0x10d')]):null;let _0x275944=_0x1cae48[_0x1c9a('0x3e')]||_0x1cae48['pb']||0x0,_0xe78f15=!![];const _0x69bf50=[],_0x426af3=[];let _0x1578bf=0x0,_0x5e24f7=0x0,_0x3900e2='',_0x23564e=_0x1c9a('0xcb'),_0x5ea584=![],_0x244e16=0x0;if(_0xf3858c[_0x1c9a('0x10d')]&&_0xf3858c[_0x1c9a('0x10d')][0x0]&&typeof _0xf3858c[_0x1c9a('0x10d')][0x0]==='string'){const _0x4efe4e=_0xf3858c['entries'][0x0];_0x69bf50[_0x1c9a('0x5b')](...DataConverter[_0x1c9a('0xf5')](_0x4efe4e)[_0x1c9a('0xc0')]);const _0x5eba79=/range (\d+)\/(\d+) ft/gi[_0x1c9a('0x42')](_0x4efe4e);if(_0x5eba79)_0x1578bf=Number(_0x5eba79[0x1]),_0x5e24f7=Number(_0x5eba79[0x2]);else{const _0x15efe3=/reach (\d+) ft/gi['exec'](_0x4efe4e);_0x15efe3&&(_0x1578bf=Number(_0x15efe3[0x1]));}const _0x4cbbbe=/{@hit ([^}]+)}/gi[_0x1c9a('0x42')](_0x4efe4e);if(_0x4cbbbe){const _0x433bce=Number(_0x4cbbbe[0x1]);if(!isNaN(_0x433bce)){const _0x4f0c0d=/\+(\d)/['exec'](_0xf3858c[_0x1c9a('0xb')]||''),_0x252693=_0x4f0c0d?Number(_0x4f0c0d[0x0]):0x0,_0x16093f=_0x433bce-_0x252693-_0x275944,_0x57d9e4=_0x69bf50[_0x1c9a('0x7b')]?_0x69bf50[0x0][0x0]||'':'',_0x35b128=/\d+\s*([-+]\s*\d+)$/[_0x1c9a('0x42')](_0x57d9e4[_0x1c9a('0x8b')]());let _0x4eed5d;if(_0x35b128)_0x4eed5d=Number(_0x35b128[0x1][_0x1c9a('0x1a')](/\s+/g,''))-_0x252693;let _0xef28bf=_0x16093f;if(_0x4eed5d!=null&&_0x16093f!==_0x4eed5d){_0xef28bf=_0x4eed5d;if(_0x16093f<_0x4eed5d)_0xe78f15=![];else{const _0x3dc421=_0x16093f-_0x4eed5d;_0x1cae48['pb']===0x0?_0x1cae48['assumedPb']=_0x1cae48['assumedPb']||_0x3dc421:_0x244e16=_0x3dc421;}}for(const _0x19b543 of Parser[_0x1c9a('0x6d')]){const _0x4ca963=Parser[_0x1c9a('0x2')](_0x3a9bd6[_0x19b543]);if(_0x4ca963===_0xef28bf){_0x23564e=_0x19b543;break;}}}}const _0x4408b2=/{@atk ([^}]+)}/gi[_0x1c9a('0x42')](_0x4efe4e);if(_0x4408b2){_0x5ea584=!![];if(_0x4408b2[0x1][_0x1c9a('0x4a')]('s')){if(_0x4408b2[0x1][_0x1c9a('0x4a')]('m'))_0x3900e2=_0x1c9a('0x56');else _0x3900e2='rsak';}else{if(_0x4408b2[0x1][_0x1c9a('0x4a')]('m'))_0x3900e2=_0x1c9a('0xf9');else{if(_0x4408b2[0x1]['includes']('r'))_0x3900e2=_0x1c9a('0x74');}}}}_0x426af3['push'](...this[_0x1c9a('0x5a')](_0x69bf50,_0x3a9bd6[_0x23564e]));const {saveAbility,saveScaling,saveDc}=this['_getSavingThrowData'](_0x3a9bd6,_0x275944,_0x1919a0);_0x5ea584?await this[_0x1c9a('0x8a')](_0x3a9bd6,_0x14835d,_0xf3858c,_0x1cae48,{'offensiveAbility':_0x23564e,'damageParts':_0x426af3,'rangeShort':_0x1578bf,'rangeLong':_0x5e24f7,'actionType':_0x3900e2,'isProficient':_0xe78f15,'description':_0x2007db,'saveAbility':saveAbility,'saveDc':saveDc,'saveScaling':saveScaling,'attackBonus':_0x244e16}):this[_0x1c9a('0x2c')](_0x3a9bd6,_0x1cae48,_0x14835d,_0xf3858c,{'fvttType':_0x1c9a('0x97'),'img':'modules/'+SharedConsts[_0x1c9a('0x36')]+_0x1c9a('0x6e'),'activationType':_0x1c9a('0x87'),'activationCost':0x1,'description':_0x2007db,'saveAbility':saveAbility,'saveDc':saveDc,'saveScaling':saveScaling,'damageParts':_0x426af3,'attackBonus':_0x244e16});}['_getSavingThrowData'](_0x139549,_0x380d5b,_0x307f2b){if(!_0x307f2b)return MiscUtil['copy'](ImportListCreature['_DEFAULT_SAVING_THROW_DATA']);let {saveAbility,saveScaling,saveDc}=MiscUtil['copy'](ImportListCreature[_0x1c9a('0xf1')]);const _0x2f588b=/(?:{@dc (\d+)}|DC\s*(\d+))\s*(Strength|Dexterity|Constitution|Intelligence|Wisdom|Charisma)/i[_0x1c9a('0x42')](_0x307f2b);if(_0x2f588b){saveDc=Number(_0x2f588b[0x1]||_0x2f588b[0x2]),saveAbility=_0x2f588b[0x3][_0x1c9a('0x17')]()['substring'](0x0,0x3),saveScaling=_0x1c9a('0x58');if(_0x380d5b&&0x1===0x2){const _0x199ec1=saveDc-_0x380d5b-0x8;for(const _0x13b2ff of[_0x1c9a('0xf7'),_0x1c9a('0x63'),_0x1c9a('0x100'),_0x1c9a('0xcb'),_0x1c9a('0xbf'),_0x1c9a('0x82')]){const _0x5f03b8=Parser[_0x1c9a('0x2')](_0x139549[_0x13b2ff]);if(_0x5f03b8===_0x199ec1){saveScaling=_0x13b2ff;break;}}}}return{'saveAbility':saveAbility,'saveScaling':saveScaling,'saveDc':saveDc};}['_getDamageTuplesWithMod'](_0x1b1399,_0x250525){if(!_0x1b1399[_0x1c9a('0x7b')])return[];return _0x1b1399=MiscUtil[_0x1c9a('0xad')](_0x1b1399),_0x250525&&_0x1b1399[_0x1c9a('0xc9')](_0x1c2fad=>{const _0x405b40=Parser[_0x1c9a('0x2')](_0x250525),_0x2e19e6=/(\d+d\d+\s*)([-+]\s*\d+)([ -+].*)?$/['exec'](_0x1c2fad[0x0]);if(!_0x2e19e6)return;const _0x2bd116=Number(_0x2e19e6[0x2][_0x1c9a('0x1a')](/\s*/g,''));if(_0x2bd116===_0x405b40)_0x1c2fad[0x0]=_0x2e19e6[0x1]+_0x1c9a('0x2b')+(_0x2e19e6[0x3]||'');}),_0x1b1399[_0x1c9a('0x1b')](_0x8ae33a=>_0x8ae33a[_0x1c9a('0x7b')]);}async[_0x1c9a('0x8a')](_0xc6585,_0x149036,_0x4bf024,_0x226a25,{offensiveAbility,damageParts,rangeShort,rangeLong,actionType,isProficient,description,saveAbility,saveDc,saveScaling,attackBonus}){const _0x40b425=await DataConverterItem['pGetActionWeaponDetails'](_0xc6585[_0x1c9a('0xf8')],_0x4bf024),_0xf414c9={'name':UtilApplications[_0x1c9a('0x10')](Renderer[_0x1c9a('0xd4')](_0x4bf024[_0x1c9a('0xb')]||'')||'\x20'),'type':_0x1c9a('0x25'),'data':{'source':DataConverter[_0x1c9a('0xc7')](_0xc6585),'description':{'value':description},'damage':{'parts':damageParts,'versatile':_0x40b425['damageVersatile']},'range':{'value':rangeShort,'long':rangeLong,'units':'ft'},'actionType':actionType,'proficient':isProficient,'quantity':0x1,'weight':_0x40b425['weight'],'price':_0x40b425['price'],'rarity':_0x40b425['rarity'],'weaponType':_0x40b425[_0x1c9a('0x22')],'properties':_0x40b425['itemProperties'],'attuned':_0x40b425['attuned'],'ability':offensiveAbility,'equipped':!![],'identified':_0x40b425[_0x1c9a('0xd8')],'activation':{'type':_0x1c9a('0x87'),'cost':0x1,'condition':''},'duration':{'value':null,'units':''},'target':{'value':null,'units':'','type':''},'uses':{'value':0x0,'max':0x0,'per':null},'attackBonus':attackBonus,'chatFlavor':'','critical':null,'formula':'','save':{'ability':saveAbility,'dc':saveDc,'scaling':saveScaling}},'img':_0x40b425[_0x1c9a('0x29')]};_0x226a25['items'][_0x1c9a('0x5b')](_0xf414c9);}async['_pImportEntry_pFillItems_pInventory'](_0x2e4e54,_0x439a4a,_0x49ac0b){if(!_0x2e4e54['ac'])return;const _0x39c029=new Set();_0x2e4e54['ac']['filter'](_0x2f4f83=>_0x2f4f83[_0x1c9a('0x86')]&&_0x2f4f83[_0x1c9a('0x86')][_0x1c9a('0x7b')])[_0x1c9a('0xc9')](_0x14cdd0=>{_0x14cdd0[_0x1c9a('0x86')]['forEach'](_0xaf68ec=>{_0xaf68ec['replace'](/{@item ([^}]+)}/gi,(..._0x2618ae)=>{const [_0x4d1a13,_0x2656cd]=_0x2618ae[0x1][_0x1c9a('0x8b')]()[_0x1c9a('0x17')]()[_0x1c9a('0x2f')]('|'),_0x3519df=UrlUtil[_0x1c9a('0x101')][UrlUtil[_0x1c9a('0xeb')]]({'name':_0x4d1a13,'source':_0x2656cd||SRC_DMG});_0x39c029[_0x1c9a('0x113')](_0x3519df);});});});for(const _0x9ac1dc of _0x39c029){const _0x173ef2=await Renderer[_0x1c9a('0xb5')][_0x1c9a('0xb9')](UrlUtil['PG_ITEMS'],_0x9ac1dc);if(!_0x173ef2)continue;await this['_pImportEntry_pFillItems_pAddItem'](_0x2e4e54,_0x439a4a,_0x173ef2,_0x49ac0b);}}async[_0x1c9a('0x96')](_0x399333,_0x27e9d8,_0x3e325b,_0x58d8b1){const _0x4c7719=await Renderer[_0x1c9a('0xa1')][_0x1c9a('0x59')](_0x3e325b),_0x8d2e96=await DataConverterItem[_0x1c9a('0x93')](_0x3e325b,{'fluff':_0x4c7719,'size':_0x399333[_0x1c9a('0xf8')]});_0x58d8b1[_0x1c9a('0xfd')][_0x1c9a('0x5b')](_0x8d2e96);}async[_0x1c9a('0x5f')](_0x4d3691,_0x21af45,_0x115872,_0x4c24da){if(!_0x4d3691[_0x1c9a('0x8e')])return;const _0x286c21={},_0xe33924=_0x8a7b75=>{Object['entries'](_0x8a7b75)['forEach'](([_0x1d8454,_0x1cd50b])=>{_0x286c21[_0x1d8454]=_0x286c21[_0x1d8454]||_0x1cd50b;});},_0x3df1de=!![],_0x5ee5a9=[];for(const _0x568cea of _0x4d3691[_0x1c9a('0x8e')]){const _0xcc27ae=MiscUtil[_0x1c9a('0xad')](_0x568cea);if(_0xcc27ae[_0x1c9a('0x27')]){const _0x39e200=Object[_0x1c9a('0xe6')](_0xcc27ae[_0x1c9a('0x27')]);for(const _0x50761e of _0x39e200){const _0x2bd5b3=_0xcc27ae['spells'][_0x50761e],_0x8d89d2=_0x2bd5b3[_0x1c9a('0x13')]!=null?_0x1c9a('0x66'):_0x1c9a('0x30'),_0x37b65d=await DataConverterSpell['pGetSpellHashToItemPosMapAndFillSpells'](_0x4c24da[_0x1c9a('0x81')],JSON[_0x1c9a('0xbe')](_0x2bd5b3[_0x1c9a('0x27')]),{'isTemporary':_0x115872,'optsGetSpellItem':{'casterLevel':_0x4c24da[_0x1c9a('0xce')],'abilityAbv':_0x4c24da[_0x1c9a('0xb1')],'isPrepared':_0x3df1de,'preparationMode':_0x8d89d2}});_0xe33924(_0x37b65d);}delete _0xcc27ae[_0x1c9a('0x27')];}_0xcc27ae[_0x1c9a('0x55')]&&await this['_pImportEntry_pFillItems_pSpellcasting_recharge'](_0x4c24da,_0xcc27ae,_0x1c9a('0x55'),_0xe33924,{'isTemporary':_0x115872,'isPrepared':_0x3df1de,'usesPer':'charges'});_0xcc27ae[_0x1c9a('0x47')]&&await this[_0x1c9a('0x45')](_0x4c24da,_0xcc27ae,'daily',_0xe33924,{'isTemporary':_0x115872,'isPrepared':_0x3df1de,'usesPer':_0x1c9a('0x111')});_0xcc27ae['rest']&&await this[_0x1c9a('0x45')](_0x4c24da,_0xcc27ae,_0x1c9a('0x47'),_0xe33924,{'isTemporary':_0x115872,'isPrepared':_0x3df1de,'usesPer':'sr'});if(_0xcc27ae['will']){const _0x5eddfd=_0x1c9a('0x9c'),_0x407db0=await DataConverterSpell[_0x1c9a('0x77')](_0x4c24da[_0x1c9a('0x81')],JSON[_0x1c9a('0xbe')](_0xcc27ae['will']),{'isTemporary':_0x115872,'optsGetSpellItem':{'casterLevel':_0x4c24da[_0x1c9a('0xce')],'abilityAbv':_0x4c24da[_0x1c9a('0xb1')],'isPrepared':_0x3df1de,'preparationMode':_0x5eddfd}});_0xe33924(_0x407db0),delete _0xcc27ae[_0x1c9a('0x10f')];}if(_0xcc27ae[_0x1c9a('0x84')]){const _0x32b192='innate',_0x33cfa7=await DataConverterSpell[_0x1c9a('0x77')](_0x4c24da['actor'],JSON[_0x1c9a('0xbe')](_0xcc27ae[_0x1c9a('0x84')]),{'isTemporary':_0x115872,'optsGetSpellItem':{'casterLevel':_0x4c24da['spellLevel'],'abilityAbv':_0x4c24da[_0x1c9a('0xb1')],'isPrepared':_0x3df1de,'preparationMode':_0x32b192,'durationAmount':null,'durationUnit':_0x1c9a('0x60')}});_0xe33924(_0x33cfa7),delete _0xcc27ae[_0x1c9a('0x84')];}_0x5ee5a9[_0x1c9a('0x5b')](_0xcc27ae);}await DataConverterSpell[_0x1c9a('0x77')](_0x4c24da[_0x1c9a('0x81')],JSON[_0x1c9a('0xbe')](_0x5ee5a9),{'isTemporary':_0x115872,'hashToIdMap':_0x286c21,'optsGetSpellItem':{'casterLevel':_0x4c24da[_0x1c9a('0xce')],'abilityAbv':_0x4c24da[_0x1c9a('0xb1')]}});const _0x401114=DataConverterSpell[_0x1c9a('0x4d')][_0x1c9a('0x1c')](null,_0x4c24da[_0x1c9a('0x81')]['id'],_0x286c21);Renderer['get']()['addHook'](_0x1c9a('0x79'),_0x1c9a('0xcc'),_0x401114);const _0x7bd7f4=Renderer['monster']['getSpellcastingRenderedTraits'](_0x4d3691,Renderer[_0x1c9a('0x9b')]());_0x7bd7f4[_0x1c9a('0xc9')](_0x59c9e0=>{this[_0x1c9a('0x2c')](_0x4d3691,_0x4c24da,_0x21af45,_0x59c9e0,{'fvttType':_0x1c9a('0x97'),'img':_0x1c9a('0x40')+SharedConsts[_0x1c9a('0x36')]+_0x1c9a('0xcd'),'description':_0x59c9e0['rendered']});}),Renderer[_0x1c9a('0x9b')]()['removeHook'](_0x1c9a('0x79'),'ele',_0x401114);}async[_0x1c9a('0x45')](_0x4d7e8a,_0x3356ec,_0x2ecbf7,_0x3b31c0,{isTemporary,isPrepared,usesPer}){const _0x3db05d=_0x1c9a('0x9c');for(let _0x4ab85b=0x1;_0x4ab85b<=0x9;++_0x4ab85b){const _0x17a149=_0x4ab85b+'e',_0x45ee76=[..._0x3356ec[_0x2ecbf7][_0x4ab85b]||[],..._0x3356ec[_0x2ecbf7][_0x17a149]||[]];if(!_0x45ee76[_0x1c9a('0x7b')])continue;const _0x1d00e0=await DataConverterSpell[_0x1c9a('0x77')](_0x4d7e8a[_0x1c9a('0x81')],JSON[_0x1c9a('0xbe')](_0x45ee76),{'isTemporary':isTemporary,'optsGetSpellItem':{'casterLevel':_0x4d7e8a['spellLevel'],'abilityAbv':_0x4d7e8a['spellAbility'],'isPrepared':isPrepared,'preparationMode':_0x3db05d,'usesCurrent':_0x4ab85b,'usesMax':_0x4ab85b,'usesPer':usesPer}});_0x3b31c0(_0x1d00e0);}delete _0x3356ec[_0x2ecbf7];}static[_0x1c9a('0xc5')](_0x21e35b){let _0x48a3c9=0x0;return _0x21e35b[_0x1c9a('0xf6')]&&JSON['stringify'](_0x21e35b[_0x1c9a('0xf6')])[_0x1c9a('0x1a')](/an? (\d+)[A-Za-z]+-level/i,(..._0x1aff30)=>{const _0xb39f9a=Number(_0x1aff30[0x1]);if(!isNaN(_0xb39f9a))_0x48a3c9=_0xb39f9a;}),_0x48a3c9;}static[_0x1c9a('0x61')](_0x4b2f74){let _0x4f79d1='';return _0x4b2f74[_0x1c9a('0xf6')]&&JSON[_0x1c9a('0xbe')](_0x4b2f74[_0x1c9a('0xf6')])['replace'](/(?:^| )(bard|cleric|druid|paladin|ranger|sorcerer|warlock|wizard)(?:\W|$)?/i,(..._0x22a10c)=>{_0x4f79d1=_0x22a10c[0x1];}),_0x4f79d1;}}ImportListCreature[_0x1c9a('0xf1')]={'saveAbility':'','saveScaling':_0x1c9a('0x7a'),'saveDc':null},ImportListCreature[_0x1c9a('0x1')]=class{constructor(_0x353ec0,_0x2d2c2b,_0x2cd0a7){this[_0x1c9a('0x81')]=_0x353ec0,this['mon']=_0x2d2c2b,this['fluff']=_0x2cd0a7,this['pb']=Parser['crToPb'](_0x2d2c2b['cr']),this[_0x1c9a('0x3e')]=this['pb'],this['legendaryMeta']=DataUtil[_0x1c9a('0x116')][_0x1c9a('0xe')](_0x2d2c2b),this['spellAbility']='',this[_0x1c9a('0xa9')]=0x8,this[_0x1c9a('0xce')]=0x0,this[_0x1c9a('0xac')]='',this[_0x1c9a('0xd6')](_0x2d2c2b),this[_0x1c9a('0xfd')]=[];}[_0x1c9a('0xd6')](_0x14a616){if(_0x14a616[_0x1c9a('0x8e')]){const _0x4216dd=_0x14a616[_0x1c9a('0x8e')][_0x1c9a('0x1b')](_0x45bfe4=>_0x45bfe4[_0x1c9a('0x49')]);if(_0x4216dd[_0x1c9a('0x7b')]){const _0x37be9c=_0x4216dd[0x0]['ability'],_0x3a0dc9=Parser[_0x1c9a('0x2')](_0x14a616[_0x37be9c]);this[_0x1c9a('0xb1')]=_0x37be9c,this[_0x1c9a('0xa9')]=_0x3a0dc9+this['pb'];}this[_0x1c9a('0xce')]=_0x14a616[_0x1c9a('0x8e')]['map'](_0x47d2f4=>ImportListCreature[_0x1c9a('0xc5')](_0x47d2f4))[_0x1c9a('0xe4')](Boolean)||0x0,this[_0x1c9a('0xac')]=_0x14a616['spellcasting'][_0x1c9a('0xcf')](_0x5882bd=>ImportListCreature[_0x1c9a('0x61')](_0x5882bd))[_0x1c9a('0xe4')](Boolean)||'';}}},ImportListCreature[_0x1c9a('0x91')]=class extends Application{constructor(_0x1d1ca5,_0x3c8516,_0x2253f2){super({'title':_0x1c9a('0x6'),'template':SharedConsts[_0x1c9a('0x73')]+_0x1c9a('0xc8'),'width':0x3c0,'height':Util[_0x1c9a('0xab')](),'resizable':!![]}),this['_monList']=_0x1d1ca5,this['_resolve']=_0x3c8516,this['_titleSearch']=_0x2253f2[_0x1c9a('0xb7')],this[_0x1c9a('0x19')]=null,this['_$btnReset']=null;}[_0x1c9a('0xec')](){return{'rows':this[_0x1c9a('0x10e')][_0x1c9a('0xcf')]((_0x588c9a,_0x22fb8f)=>({'name':_0x588c9a[_0x1c9a('0xb')],'source':_0x588c9a['source'],'sourceShort':Parser[_0x1c9a('0x8c')](_0x588c9a[_0x1c9a('0xe8')]),'sourceLong':Parser[_0x1c9a('0xb4')](_0x588c9a['source']),'cr':Parser[_0x1c9a('0x11c')](_0x588c9a['cr']),'isAdjustable':Parser[_0x1c9a('0xb2')](_0x588c9a['cr'])!==0x64,'ix':_0x22fb8f}))};}[_0x1c9a('0x70')](_0x1f417c){super[_0x1c9a('0x70')](_0x1f417c),this[_0x1c9a('0x19')]=new List({'$iptSearch':_0x1f417c[_0x1c9a('0xe4')]('.search'),'$wrpList':_0x1f417c['find'](_0x1c9a('0xca')),'valueNames':[_0x1c9a('0xb'),_0x1c9a('0xe8'),'cr',_0x1c9a('0x5')]}),SortUtil[_0x1c9a('0xfc')](_0x1f417c['find'](_0x1c9a('0x23')),this[_0x1c9a('0x19')]),this[_0x1c9a('0x19')]['doAbsorbItems'](this['_monList'],{'fnGetName':_0x3911bc=>_0x3911bc[_0x1c9a('0xb')],'fnGetValues':_0x29896a=>({'source':_0x29896a[_0x1c9a('0xe8')],'cr':Parser[_0x1c9a('0x11c')](_0x29896a['cr'])})}),this[_0x1c9a('0x19')][_0x1c9a('0x8')](),this[_0x1c9a('0x105')]=_0x1f417c[_0x1c9a('0xe4')](_0x1c9a('0x118'))['click'](()=>{_0x1f417c[_0x1c9a('0xe4')](_0x1c9a('0xdc'))[_0x1c9a('0x76')]('');if(this[_0x1c9a('0x19')])this[_0x1c9a('0x19')][_0x1c9a('0xfb')]();}),_0x1f417c['find'](_0x1c9a('0xee'))[_0x1c9a('0xc6')](async()=>{const _0x5c6e56=this[_0x1c9a('0x19')][_0x1c9a('0xfd')][_0x1c9a('0xcf')](_0x447305=>{const _0x41c92f=$(_0x447305[_0x1c9a('0xcc')]),_0x335141=_0x41c92f[_0x1c9a('0xe4')]('[name=\x22sel-cr\x22]');return{'ix':_0x447305['ix'],'targetCr':_0x335141['length']?Number(_0x335141['val']())===-0x1?null:Number(_0x335141[_0x1c9a('0x76')]()):null,'rename':_0x41c92f[_0x1c9a('0xe4')](_0x1c9a('0x12'))[_0x1c9a('0x76')]()[_0x1c9a('0x8b')]()};}),_0xd5d546=await Promise[_0x1c9a('0x3c')](_0x5c6e56['map'](async({ix,targetCr,rename})=>{let _0x9c4f69=this[_0x1c9a('0x10e')][ix];if(targetCr!=null&&targetCr!==Parser[_0x1c9a('0xb2')](_0x9c4f69['cr']))_0x9c4f69=await ScaleCreature[_0x1c9a('0x9')](_0x9c4f69,targetCr);if(rename)_0x9c4f69=ImportListCreature[_0x1c9a('0x91')][_0x1c9a('0x3a')](_0x9c4f69,rename);return _0x9c4f69;}));this[_0x1c9a('0xdd')](_0xd5d546),this[_0x1c9a('0xb8')]();});if(this[_0x1c9a('0x105')])this[_0x1c9a('0x105')][_0x1c9a('0xc6')]();}static[_0x1c9a('0x3a')](_0x4d032e,_0x423553){_0x4d032e=MiscUtil[_0x1c9a('0xad')](_0x4d032e);const _0x5892b7=_0x423553['replace'](/\\/g,'\x5c\x5c')[_0x1c9a('0x1a')](/"/g,'\x5c\x22'),_0x9092f2=_0x1b54da=>{_0x4d032e[_0x1b54da]&&_0x4d032e[_0x1b54da][_0x1c9a('0xc9')](_0xc3163c=>{if(_0xc3163c['entries'])_0xc3163c[_0x1c9a('0x10d')]=JSON[_0x1c9a('0xbc')](JSON['stringify'](_0xc3163c[_0x1c9a('0x10d')])[_0x1c9a('0x1a')](new RegExp(_0x4d032e['name'],'gi'),_0x5892b7));if(_0xc3163c[_0x1c9a('0xf6')])_0xc3163c[_0x1c9a('0xf6')]=JSON[_0x1c9a('0xbc')](JSON[_0x1c9a('0xbe')](_0xc3163c[_0x1c9a('0xf6')])[_0x1c9a('0x1a')](new RegExp(_0x4d032e[_0x1c9a('0xb')],'gi'),_0x5892b7));});};return _0x9092f2('action'),_0x9092f2('reaction'),_0x9092f2('trait'),_0x9092f2('legendary'),_0x9092f2(_0x1c9a('0xbd')),_0x4d032e[_0x1c9a('0xde')]=_0x423553,_0x4d032e;}async[_0x1c9a('0xb8')](){return this[_0x1c9a('0xdd')](null),super[_0x1c9a('0xb8')]();}};export{ImportListCreature};
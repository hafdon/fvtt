const _0xd62d=['_isRadio','Vehicles','DATA_URL_VEHICLES','_pImportEntry_pFillItems','trait','isImportBio','_pImportEntry_fillData_Details','vehicleType','attributes','sourceJsonToAbv','_addShipAction','size','1459683boDQNh','Custom\x20URL','capacity','_getBiographyValue','_pImportEntry_fillConditionsDamage','getShipActionItems','toLocaleString','bonuses','getData','_addShipOther','1VmDirc','1wnPooT','Unhandled\x20vehicle\x20type\x20\x22','_addInfWarTrait','fluff','feat','\x20lb.','biography','join','CREATURE','getShipWeaponItem','dex','source','entries','mutateForFilters','capCargo','_pImportEntry_pFillToken','_pImportEntry_fillData_Traits','modules/','getTokenUrl','reaction','SOURCE_TYP_CUSTOM','Source','sourceJsonToFull','sourceShort','map','action','6382653yRWQLY','5etools','_addInfWarActionStation','tokenUrl','_addShipWeapon','670522bHMPLB','DataSourceUrl','getShipMovement','other','sourceLong','importVehicle','actionThresholds','382WdCssW','_addInfWarReaction','2812vCCKlc','currency','isUseTokenImageAsPortrait','sort','PG_VEHICLES','getShipEquipmentItem','_pImportEntry_fillData_Attributes','Upload\x20File','actors','1534762kTsFPw','movement','string','hull','\x20ft.','forEach','pImportEntry','_isPreviewable','slice','pAddActorItems','/media/icon/gears.svg','speed','SOURCE_TYP_OFFICIAL_ALL','_pageFilter','Name','_addShipEquipment','init','_pImportEntry_pGetImportMetadata','copy','pGetHomebrewSources','traits','_activateListeners_absorbListItems','length','VET_SIZE_TO_ABV','control','_pImportEntry_fillData_Currency','_pImportEntry_fillData_Abilities','get','cargo','details','Import\x20Vehicles','isTemp','med','SOURCE_TYP_BREW','name','actions','getInfwarCreatureCapacity','889510QLuEfc','permissions','dimensions','data','61521sgCLzq','vehicle','Actor','push','weapon','_pImportEntry_fillData_Cargo','pace','doAbsorbItems','_pImportEntry_pFillItems_infWar','getShipCreatureCapacity','_pImportEntry_pGetFolderId','getSourceWithPagePart','getShipOtherItem','spelldc','getItemActorPassive','getAbilityModNumber','_list','\x20miles\x20per\x20hour\x20(','pSyncStateFrom','_titleSearch','_pack','INFWAR','actor','MODULE_NAME','\x20miles\x20per\x20day)','items','absorbFnBindListenersRadio','pGetFluff','constructor','_page','pGetSources','_content','getInfWarActionItem'];const _0x401d=function(_0x32e7c8,_0x225b6d){_0x32e7c8=_0x32e7c8-0x121;let _0xd62d76=_0xd62d[_0x32e7c8];return _0xd62d76;};const _0x4fc687=_0x401d;(function(_0x1a7cc0,_0x839a3){const _0x3d71d6=_0x401d;while(!![]){try{const _0x4ae6ae=-parseInt(_0x3d71d6(0x128))*parseInt(_0x3d71d6(0x17e))+parseInt(_0x3d71d6(0x182))+-parseInt(_0x3d71d6(0x1af))+-parseInt(_0x3d71d6(0x150))*parseInt(_0x3d71d6(0x14e))+-parseInt(_0x3d71d6(0x159))*parseInt(_0x3d71d6(0x127))+-parseInt(_0x3d71d6(0x147))+parseInt(_0x3d71d6(0x142));if(_0x4ae6ae===_0x839a3)break;else _0x1a7cc0['push'](_0x1a7cc0['shift']());}catch(_0x594e3e){_0x1a7cc0['push'](_0x1a7cc0['shift']());}}}(_0xd62d,0xc7199));import{ImportListActor}from'./ImportListActor.js';import{Vetools}from'./Vetools.js';import{Config}from'./Config.js';import{UtilList2}from'./UtilList2.js';import{DataConverter}from'./DataConverter.js';import{UtilActors}from'./UtilActors.js';import{ImportListCreature}from'./ImportListCreature.js';import{DataConverterVehicle}from'./DataConverterVehicle.js';import{SharedConsts}from'../shared/SharedConsts.js';import{UtilDataSource}from'./UtilDataSource.js';class ImportListVehicle extends ImportListActor{constructor(_0x3bbbc6){const _0x280e66=_0x401d;_0x3bbbc6=_0x3bbbc6||{},super({'title':_0x280e66(0x177)},_0x3bbbc6,{'props':['vehicle'],'titleSearch':'vehicles','sidebarTab':'actors','gameProp':_0x280e66(0x158),'defaultFolderPath':[_0x280e66(0x1a4)],'folderType':_0x280e66(0x184),'pageFilter':new PageFilterVehicles(),'page':UrlUtil[_0x280e66(0x154)],'isDedupable':!![]},{'actorType':_0x280e66(0x183)});}async[_0x4fc687(0x1a0)](){const _0x4bd3d7=_0x4fc687;return[new UtilDataSource[(_0x4bd3d7(0x148))](Config[_0x4bd3d7(0x174)]('ui','isStreamerMode')?'SRD':_0x4bd3d7(0x143),Vetools[_0x4bd3d7(0x1a5)],{'filterTypes':[UtilDataSource[_0x4bd3d7(0x165)]],'isDefault':!![]}),new UtilDataSource[(_0x4bd3d7(0x148))](_0x4bd3d7(0x1b0),'',{'filterTypes':[UtilDataSource[_0x4bd3d7(0x13c)]]}),new UtilDataSource['DataSourceFile'](_0x4bd3d7(0x157),{'filterTypes':[UtilDataSource['SOURCE_TYP_CUSTOM']]}),...(await Vetools[_0x4bd3d7(0x16c)](_0x4bd3d7(0x183)))[_0x4bd3d7(0x140)](({name:_0x5e10c2,url:_0x18df4f})=>new UtilDataSource[(_0x4bd3d7(0x148))](_0x5e10c2,_0x18df4f,{'filterTypes':[UtilDataSource[_0x4bd3d7(0x17a)]]}))];}[_0x4fc687(0x125)](){const _0x4a340c=_0x4fc687;return{'isRadio':this[_0x4a340c(0x1a3)],'isPreviewable':this[_0x4a340c(0x160)],'titleButtonRun':this['_titleButtonRun'],'titleSearch':this[_0x4a340c(0x195)],'cols':[{'name':_0x4a340c(0x167),'width':0x9,'field':'name'},{'name':_0x4a340c(0x13d),'width':0x2,'field':_0x4a340c(0x133),'titleProp':_0x4a340c(0x14b),'displayProp':_0x4a340c(0x13f),'classNameProp':'sourceClassName','rowClassName':'text-center'}],'rows':this[_0x4a340c(0x1a1)][_0x4a340c(0x140)]((_0x4c3937,_0x3982ee)=>{const _0x414be9=_0x4a340c;return this[_0x414be9(0x166)][_0x414be9(0x19e)][_0x414be9(0x135)](_0x4c3937),{'name':_0x4c3937[_0x414be9(0x17b)],'source':_0x4c3937['source'],'sourceShort':Parser[_0x414be9(0x1ac)](_0x4c3937[_0x414be9(0x133)]),'sourceLong':Parser[_0x414be9(0x13e)](_0x4c3937[_0x414be9(0x133)]),'sourceClassName':Parser['sourceJsonToColor'](_0x4c3937['source']),'ix':_0x3982ee};})};}[_0x4fc687(0x16e)](){const _0x39de5c=_0x4fc687;this[_0x39de5c(0x192)][_0x39de5c(0x189)](this[_0x39de5c(0x1a1)],{'fnGetName':_0x5b2dad=>_0x5b2dad[_0x39de5c(0x17b)],'fnGetValues':_0x5d5100=>({'source':_0x5d5100[_0x39de5c(0x133)],'hash':UrlUtil['URL_TO_HASH_BUILDER'][this[_0x39de5c(0x19f)]](_0x5d5100)}),'fnGetData':UtilList2['absorbFnGetData'],'fnBindListeners':_0x224ea3=>this[_0x39de5c(0x1a3)]?UtilList2[_0x39de5c(0x19c)](this['_list'],_0x224ea3):UtilList2['absorbFnBindListeners'](this[_0x39de5c(0x192)],_0x224ea3)});}async[_0x4fc687(0x16a)](_0x43ea5e,_0x371af5,_0x4e6268){const _0x2dc4fb=_0x4fc687,_0x3cecee={},_0x590d90=await Renderer['vehicle'][_0x2dc4fb(0x19d)](_0x371af5),_0x2a1d6a=new ImportListVehicle['ImportEntryOpts'](_0x43ea5e,_0x590d90);await this['_pImportEntry_pFillBase'](_0x371af5,_0x3cecee,_0x2a1d6a[_0x2dc4fb(0x12b)],{'isUseTokenImageAsPortrait':Config[_0x2dc4fb(0x174)](_0x2dc4fb(0x14c),_0x2dc4fb(0x152))}),_0x3cecee[_0x2dc4fb(0x181)]={};if(!_0x4e6268['isTemp']&&!this[_0x2dc4fb(0x196)]){const _0x52f16b=await this[_0x2dc4fb(0x18c)](_0x371af5);if(_0x52f16b)_0x3cecee['folder']=_0x52f16b;}return _0x3cecee['permission']={'default':Config['get'](_0x2dc4fb(0x14c),_0x2dc4fb(0x17f))},this[_0x2dc4fb(0x173)](_0x371af5,_0x3cecee['data'],_0x2a1d6a),this[_0x2dc4fb(0x156)](_0x371af5,_0x3cecee[_0x2dc4fb(0x181)],_0x2a1d6a),this[_0x2dc4fb(0x1a9)](_0x371af5,_0x3cecee['data'],_0x2a1d6a),this['_pImportEntry_fillData_Traits'](_0x371af5,_0x3cecee[_0x2dc4fb(0x181)],_0x2a1d6a),this['_pImportEntry_fillData_Currency'](_0x371af5,_0x3cecee['data'],_0x2a1d6a),this[_0x2dc4fb(0x187)](_0x371af5,_0x3cecee['data'],_0x2a1d6a),_0x3cecee['data'][_0x2dc4fb(0x124)]={},await this[_0x2dc4fb(0x137)](_0x371af5,_0x3cecee,_0x2dc4fb(0x14c)),{'dataBuilderOpts':_0x2a1d6a,'actorData':_0x3cecee};}async[_0x4fc687(0x15f)](_0x2f0a75,_0x436a39){const _0x3f2243=_0x4fc687;_0x436a39=_0x436a39||{};if(_0x2f0a75['vehicleType']===_0x3f2243(0x130)){const _0x4b4837=new ImportListCreature({});return await _0x4b4837['pInit'](),await _0x4b4837[_0x3f2243(0x194)](this),_0x2f0a75=MiscUtil[_0x3f2243(0x16b)](_0x2f0a75),_0x2f0a75[_0x3f2243(0x145)]=Vetools[_0x3f2243(0x13a)](_0x3f2243(0x183),_0x2f0a75),_0x4b4837[_0x3f2243(0x15f)](_0x2f0a75,_0x436a39);}return super[_0x3f2243(0x15f)](_0x2f0a75,_0x436a39);}[_0x4fc687(0x156)](_0x24121f,_0x12ad84){const _0x3a5b07=_0x4fc687,_0x4b3e3c={};_0x4b3e3c[_0x3a5b07(0x169)]={'value':0x0,'bonus':0x0,'mod':0x0,'prof':0x0,'total':0x0},_0x4b3e3c[_0x3a5b07(0x18f)]=null,_0x4b3e3c[_0x3a5b07(0x15a)]=DataConverterVehicle[_0x3a5b07(0x149)](_0x24121f);switch(_0x24121f[_0x3a5b07(0x1aa)]){case'INFWAR':{const _0x2abbc3=Parser[_0x3a5b07(0x191)](_0x24121f[_0x3a5b07(0x132)]);_0x4b3e3c['ac']={'value':0x13+_0x2abbc3,'motionless':'19'},_0x4b3e3c['hp']={'value':MiscUtil[_0x3a5b07(0x174)](_0x24121f,'hp','hp')||0x0,'min':0x0,'max':MiscUtil[_0x3a5b07(0x174)](_0x24121f,'hp','hp')||0x0,'temp':0x0,'tempmax':0x0,'dt':MiscUtil['get'](_0x24121f,'hp','dt')||0x0,'mt':MiscUtil[_0x3a5b07(0x174)](_0x24121f,'hp','mt')||0x0},_0x4b3e3c[_0x3a5b07(0x17c)]={'stations':!![],'value':0x0,'thresholds':{0x0:0x0,0x1:0x0,0x2:0x0}},_0x4b3e3c[_0x3a5b07(0x1b1)]={'creature':Renderer[_0x3a5b07(0x183)][_0x3a5b07(0x17d)](_0x24121f),'cargo':typeof _0x24121f[_0x3a5b07(0x136)]==='string'?0x0:_0x24121f[_0x3a5b07(0x136)]},_0x4b3e3c[_0x3a5b07(0x164)]=_0x24121f[_0x3a5b07(0x164)]+_0x3a5b07(0x15d);break;}case'SHIP':{_0x4b3e3c['ac']={'value':MiscUtil[_0x3a5b07(0x174)](_0x24121f,_0x3a5b07(0x15c),'ac')||0x0,'motionless':''},_0x4b3e3c['hp']={'value':MiscUtil[_0x3a5b07(0x174)](_0x24121f,_0x3a5b07(0x15c),'hp')||0x0,'min':0x0,'max':MiscUtil[_0x3a5b07(0x174)](_0x24121f,'hull','hp')||0x0,'temp':0x0,'tempmax':0x0,'dt':MiscUtil[_0x3a5b07(0x174)](_0x24121f,_0x3a5b07(0x15c),'dt')||0x0,'mt':0x0};let _0x4119ea=0x0;const _0x5332de={0x0:0x0,0x1:0x0,0x2:0x0};_0x24121f[_0x3a5b07(0x14d)]&&Object[_0x3a5b07(0x134)](_0x24121f[_0x3a5b07(0x14d)])[_0x3a5b07(0x153)](([_0xca16ce],[_0x5ce0bd])=>SortUtil['ascSort'](Number(_0x5ce0bd),Number(_0xca16ce)))[_0x3a5b07(0x161)](0x0,0x3)['forEach'](([_0x1890e8,_0x43cf26],_0x26d44a)=>{_0x5332de[_0x26d44a]=_0x43cf26;});_0x4b3e3c[_0x3a5b07(0x17c)]={'stations':![],'value':_0x4119ea,'thresholds':_0x5332de},_0x4b3e3c['capacity']={'creature':Renderer[_0x3a5b07(0x183)][_0x3a5b07(0x18b)](_0x24121f),'cargo':typeof _0x24121f[_0x3a5b07(0x136)]===_0x3a5b07(0x15b)?0x0:_0x24121f['capCargo']},_0x4b3e3c['speed']=_0x24121f[_0x3a5b07(0x188)]+_0x3a5b07(0x193)+_0x24121f[_0x3a5b07(0x188)]*0x18+_0x3a5b07(0x19a);break;}default:throw new Error('Unhandled\x20vehicle\x20type\x20\x22'+_0x24121f[_0x3a5b07(0x1aa)]+'\x22');}_0x12ad84[_0x3a5b07(0x1ab)]=_0x4b3e3c;}[_0x4fc687(0x1a9)](_0x5c1622,_0x1b6c40,_0x4de081){const _0x56902b=_0x4fc687,_0x44b81b={};_0x44b81b[_0x56902b(0x12e)]={'value':Config['get']('importVehicle',_0x56902b(0x1a8))?this[_0x56902b(0x1b2)](_0x4de081['fluff']):''},_0x44b81b[_0x56902b(0x133)]=DataConverter[_0x56902b(0x18d)](_0x5c1622),_0x1b6c40[_0x56902b(0x176)]=_0x44b81b;}[_0x4fc687(0x138)](_0x5119a5,_0x1126c7){const _0x5410ae=_0x4fc687,_0x1f4154={};_0x1f4154[_0x5410ae(0x1ae)]=UtilActors[_0x5410ae(0x170)][_0x5119a5[_0x5410ae(0x1ae)]]||_0x5410ae(0x179);switch(_0x5119a5[_0x5410ae(0x1aa)]){case _0x5410ae(0x197):{_0x1f4154[_0x5410ae(0x180)]=_0x5119a5['weight'][_0x5410ae(0x123)]()+_0x5410ae(0x12d);break;}case'SHIP':{_0x1f4154[_0x5410ae(0x180)]=_0x5119a5['dimensions']?_0x5119a5[_0x5410ae(0x180)][_0x5410ae(0x12f)]('\x20by\x20'):'';break;}default:throw new Error(_0x5410ae(0x129)+_0x5119a5[_0x5410ae(0x1aa)]+'\x22');}this[_0x5410ae(0x121)](_0x5119a5,_0x1f4154),_0x1126c7[_0x5410ae(0x16d)]=_0x1f4154;}[_0x4fc687(0x172)](_0x3d8768,_0x17250b){const _0x2b1a80=_0x4fc687;_0x17250b[_0x2b1a80(0x151)]={'pp':0x0,'gp':0x0,'ep':0x0,'sp':0x0,'cp':0x0};}async[_0x4fc687(0x1a6)](_0x39d458,_0xfce0c6,_0x1548e5,_0x26db08){const _0x23e3db=_0x4fc687;await this['_pImportEntry_pFillItems_ship'](_0x39d458,_0xfce0c6,_0x1548e5,_0x26db08),await this[_0x23e3db(0x18a)](_0x39d458,_0xfce0c6,_0x1548e5,_0x26db08);const _0x19e25c=_0x26db08[_0x23e3db(0x178)]||this[_0x23e3db(0x196)]!=null;await UtilActors[_0x23e3db(0x162)](_0x1548e5['actor'],_0x1548e5[_0x23e3db(0x19b)],_0x19e25c);}['_pImportEntry_pFillItems_ship'](_0x5c0036,_0x4c3f3f,_0x2d3495,_0x452d22){const _0x4984b0=_0x4fc687;_0x5c0036[_0x4984b0(0x171)]&&_0x5c0036[_0x4984b0(0x171)]['forEach'](_0x9e9652=>this[_0x4984b0(0x168)](_0x5c0036,_0x4c3f3f,_0x2d3495,_0x452d22,_0x9e9652,'control')),_0x5c0036[_0x4984b0(0x15a)]&&_0x5c0036[_0x4984b0(0x15a)][_0x4984b0(0x15e)](_0x2255e8=>this[_0x4984b0(0x168)](_0x5c0036,_0x4c3f3f,_0x2d3495,_0x452d22,_0x2255e8,_0x4984b0(0x15a))),_0x5c0036[_0x4984b0(0x186)]&&_0x5c0036[_0x4984b0(0x186)]['forEach'](_0x4c71b0=>this[_0x4984b0(0x146)](_0x5c0036,_0x4c3f3f,_0x2d3495,_0x452d22,_0x4c71b0)),_0x5c0036[_0x4984b0(0x14a)]&&_0x5c0036[_0x4984b0(0x14a)][_0x4984b0(0x15e)](_0xf8c375=>this[_0x4984b0(0x126)](_0x5c0036,_0x4c3f3f,_0x2d3495,_0x452d22,_0xf8c375)),_0x5c0036[_0x4984b0(0x141)]&&this['_addShipAction'](_0x5c0036,_0x4c3f3f,_0x2d3495,_0x452d22,_0x5c0036[_0x4984b0(0x141)]);}[_0x4fc687(0x168)](_0x426854,_0x48738f,_0x3a379a,_0x2ef540,_0x56a570,_0x1002b3){const _0x420a7f=_0x4fc687,_0x30404c=DataConverterVehicle[_0x420a7f(0x155)](_0x426854,_0x56a570,_0x1002b3);if(!_0x30404c)return;_0x3a379a[_0x420a7f(0x19b)]['push'](_0x30404c);}[_0x4fc687(0x146)](_0x18b56c,_0x1b23c1,_0xbe8d54,_0x292391,_0x587898){const _0xc67fe6=_0x4fc687,_0x5f5750=DataConverterVehicle[_0xc67fe6(0x131)](_0x18b56c,_0x587898);if(!_0x5f5750)return;_0xbe8d54['items'][_0xc67fe6(0x185)](_0x5f5750);}['_addShipOther'](_0x135ed0,_0x5893e4,_0x467ac2,_0x4c5289,_0x415e60){const _0x1f26fe=_0x4fc687,_0x3e72c8=DataConverterVehicle[_0x1f26fe(0x18e)](_0x135ed0,_0x415e60);if(!_0x3e72c8)return;_0x467ac2[_0x1f26fe(0x19b)]['push'](_0x3e72c8);}[_0x4fc687(0x1ad)](_0x260863,_0x28e230,_0x51ae0c,_0xc3cdd1,_0x46a6b0){const _0x2d1376=_0x4fc687,_0x38b693=DataConverterVehicle[_0x2d1376(0x122)](_0x260863,_0x46a6b0);if(!_0x38b693||!_0x38b693[_0x2d1376(0x16f)])return;_0x51ae0c['items'][_0x2d1376(0x185)](..._0x38b693);}[_0x4fc687(0x18a)](_0x1c4c6a,_0x3cf587,_0x12b364,_0x592249){const _0x4ae4b0=_0x4fc687;_0x1c4c6a[_0x4ae4b0(0x1a7)]&&_0x1c4c6a['trait']['forEach'](_0x5dff96=>this[_0x4ae4b0(0x12a)](_0x1c4c6a,_0x3cf587,_0x12b364,_0x592249,_0x5dff96)),_0x1c4c6a['actionStation']&&_0x1c4c6a['actionStation'][_0x4ae4b0(0x15e)](_0x2cce30=>this[_0x4ae4b0(0x144)](_0x1c4c6a,_0x3cf587,_0x12b364,_0x592249,_0x2cce30)),_0x1c4c6a[_0x4ae4b0(0x13b)]&&_0x1c4c6a[_0x4ae4b0(0x13b)][_0x4ae4b0(0x15e)](_0x410ede=>this[_0x4ae4b0(0x14f)](_0x1c4c6a,_0x3cf587,_0x12b364,_0x592249,_0x410ede));}[_0x4fc687(0x12a)](_0xada054,_0x194595,_0x3909db,_0x594e94,_0x156f1e){const _0x38731f=_0x4fc687,_0x5d04bf=DataConverter[_0x38731f(0x190)](_0x156f1e,{'fvttType':_0x38731f(0x12c),'mode':_0x38731f(0x183),'entity':_0xada054,'source':_0xada054['source'],'actor':{'data':_0x194595},'img':_0x38731f(0x139)+SharedConsts[_0x38731f(0x199)]+_0x38731f(0x163)});_0x3909db[_0x38731f(0x19b)][_0x38731f(0x185)](_0x5d04bf);}[_0x4fc687(0x144)](_0x3adda9,_0xd9547c,_0x456509,_0x113fcd,_0xa02746){const _0x52cbf7=_0x4fc687,_0x57d45f=DataConverterVehicle[_0x52cbf7(0x1a2)](_0x3adda9,_0xa02746);if(!_0x57d45f)return;_0x456509[_0x52cbf7(0x19b)]['push'](_0x57d45f);}[_0x4fc687(0x14f)](_0x22daae,_0x219a2e,_0x39725d,_0x19fba3,_0x4e2b14){const _0x3694a4=_0x4fc687,_0x48a8dd=DataConverter[_0x3694a4(0x190)](_0x4e2b14,{'activationType':_0x3694a4(0x13b),'activationCost':0x1,'fvttType':_0x3694a4(0x12c),'mode':'vehicle','entity':_0x22daae,'source':_0x22daae[_0x3694a4(0x133)],'actor':{'data':_0x219a2e},'img':_0x3694a4(0x139)+SharedConsts[_0x3694a4(0x199)]+_0x3694a4(0x163)});_0x39725d['items']['push'](_0x48a8dd);}['_pImportEntry_fillData_Cargo'](_0x476dba,_0x5c16a8){const _0xe39ae4=_0x4fc687;_0x5c16a8[_0xe39ae4(0x175)]={'crew':[],'passengers':[]};}}ImportListVehicle['ImportEntryOpts']=class{constructor(_0x3933ed,_0x120c04){const _0x2a5c37=_0x4fc687;this[_0x2a5c37(0x198)]=_0x3933ed,this['fluff']=_0x120c04,this[_0x2a5c37(0x19b)]=[];}};export{ImportListVehicle};
const _0x5dfa=['capacity','_pImportEntry_pFillItems_pActionEntry','DataSourceUrl','data','Custom\x20URL','speed','attackEntries','actionEntries','objects','pGetParsedAction','capCrew','vehicle','type','name','copy','push','_pImportEntry_fillData_Traits','_pImportEntry_fillData_Currency','VET_SIZE_TO_ABV','_pImportEntry_pFillToken','importObject','SOURCE_TYP_BREW','875082mENWxd','_pFillWeaponItem','entries','size','_pImportEntry_fillData_Details','780754RtLlhR','actors','ImportEntryOpts','object','_pack','getMovement','init','PG_OBJECTS','attributes','items','hitEntries','folder','attackType','\x20{@h}','_pImportEntry_fillData_Cargo','attack','Actor','capCargo','isTemp','map','traits','Unnamed\x20Action','toLowerCase','permission','SOURCE_TYP_CUSTOM','creature','source','get','pGetObjectSideData','5etools','1aDZgUz','Import\x20Objects','fluff','_getSavingThrowData','getEntryDescription','144069sWtCLE','1426913jLKvxk','_pImportEntry_pFillBase','currency','54528uUnObH','_isSkipFolder','6OfBZbz','pGetSources','1502522URsrnS','pGetHomebrewSources','movement','foundryObject','3068810vdTjlG','getSourceWithPagePart','getItemActorPassive','spelldc','biography','SOURCE_TYP_OFFICIAL_ALL','length','med','_pImportEntry_fillData_Attributes','DATA_URL_OBJECTS','string','Objects'];const _0x2889=function(_0x2da819,_0x42266a){_0x2da819=_0x2da819-0xac;let _0x5dfa81=_0x5dfa[_0x2da819];return _0x5dfa81;};const _0xd09fe9=_0x2889;(function(_0x4d6b05,_0x49aff3){const _0x40c97b=_0x2889;while(!![]){try{const _0x4b1ee9=parseInt(_0x40c97b(0xac))+-parseInt(_0x40c97b(0xd0))*parseInt(_0x40c97b(0xca))+-parseInt(_0x40c97b(0xd3))+-parseInt(_0x40c97b(0xd7))+-parseInt(_0x40c97b(0xcf))*-parseInt(_0x40c97b(0xd5))+-parseInt(_0x40c97b(0xfd))+parseInt(_0x40c97b(0xdb));if(_0x4b1ee9===_0x49aff3)break;else _0x4d6b05['push'](_0x4d6b05['shift']());}catch(_0x3fbd1d){_0x4d6b05['push'](_0x4d6b05['shift']());}}}(_0x5dfa,0xd0b95));import{ImportListActor}from'./ImportListActor.js';import{Vetools}from'./Vetools.js';import{Config}from'./Config.js';import{DataConverter}from'./DataConverter.js';import{UtilActors}from'./UtilActors.js';import{DataConverterObject}from'./DataConverterObject.js';import{UtilDataSource}from'./UtilDataSource.js';class ImportListObject extends ImportListActor{constructor(_0x437f5b){const _0x2102ef=_0x2889;_0x437f5b=_0x437f5b||{},super({'title':_0x2102ef(0xcb)},_0x437f5b,{'props':[_0x2102ef(0xaf)],'propsBrewAdditionalData':[_0x2102ef(0xda)],'fnLoadSideData':Vetools[_0x2102ef(0xc8)],'titleSearch':_0x2102ef(0xef),'sidebarTab':_0x2102ef(0xad),'gameProp':_0x2102ef(0xad),'defaultFolderPath':[_0x2102ef(0xe6)],'folderType':_0x2102ef(0xbc),'pageFilter':new PageFilterObjects(),'page':UrlUtil[_0x2102ef(0xb3)],'isDedupable':!![]},{'actorType':'vehicle'});}async[_0xd09fe9(0xd6)](){const _0x497ca2=_0xd09fe9;return[new UtilDataSource[(_0x497ca2(0xe9))](Config[_0x497ca2(0xc7)]('ui','isStreamerMode')?'SRD':_0x497ca2(0xc9),Vetools[_0x497ca2(0xe4)],{'filterTypes':[UtilDataSource[_0x497ca2(0xe0)]],'isDefault':!![]}),new UtilDataSource[(_0x497ca2(0xe9))](_0x497ca2(0xeb),'',{'filterTypes':[UtilDataSource[_0x497ca2(0xc4)]]}),new UtilDataSource['DataSourceFile']('Upload\x20File',{'filterTypes':[UtilDataSource[_0x497ca2(0xc4)]]}),...(await Vetools[_0x497ca2(0xd8)](_0x497ca2(0xaf)))[_0x497ca2(0xbf)](({name:_0xb0aa8,url:_0x26d1eb})=>new UtilDataSource['DataSourceUrl'](_0xb0aa8,_0x26d1eb,{'filterTypes':[UtilDataSource[_0x497ca2(0xfc)]]}))];}async['_pImportEntry_pGetImportMetadata'](_0x2f61f3,_0x4d5a1b,_0x4b1a57){const _0x4041db=_0xd09fe9,_0x14a846={},_0x4fdf0b=_0x4d5a1b[_0x4041db(0xff)]?{'entries':_0x4d5a1b['entries']}:null,_0x36bd94=new ImportListObject[(_0x4041db(0xae))]({'actor':_0x2f61f3,'fluff':_0x4fdf0b});await this[_0x4041db(0xd1)](_0x4d5a1b,_0x14a846,_0x36bd94[_0x4041db(0xcc)],{'isUseTokenImageAsPortrait':!![]}),_0x14a846[_0x4041db(0xea)]={};if(!this[_0x4041db(0xd4)]&&!_0x4b1a57['isTemp']&&!this['_pack']){const _0xd48259=await this['_pImportEntry_pGetFolderId'](_0x4d5a1b);if(_0xd48259)_0x14a846[_0x4041db(0xb7)]=_0xd48259;}return _0x14a846[_0x4041db(0xc3)]={'default':Config[_0x4041db(0xc7)](_0x4041db(0xfb),'permissions')},this['_pImportEntry_fillData_Abilities'](_0x4d5a1b,_0x14a846[_0x4041db(0xea)],_0x36bd94),this[_0x4041db(0xe3)](_0x4d5a1b,_0x14a846[_0x4041db(0xea)],_0x36bd94),this[_0x4041db(0x101)](_0x4d5a1b,_0x14a846[_0x4041db(0xea)],_0x36bd94),this['_pImportEntry_fillData_Traits'](_0x4d5a1b,_0x14a846[_0x4041db(0xea)],_0x36bd94),this['_pImportEntry_fillData_Currency'](_0x4d5a1b,_0x14a846[_0x4041db(0xea)],_0x36bd94),this[_0x4041db(0xba)](_0x4d5a1b,_0x14a846[_0x4041db(0xea)],_0x36bd94),await this[_0x4041db(0xfa)](_0x4d5a1b,_0x14a846,_0x4041db(0xfb)),{'dataBuilderOpts':_0x36bd94,'actorData':_0x14a846};}[_0xd09fe9(0xe3)](_0x51b6a2,_0x53fa15){const _0x481a01=_0xd09fe9,_0x16a097={};_0x16a097[_0x481a01(0xb2)]={'value':0x0,'bonus':0x0,'mod':0x0,'prof':0x0,'total':0x0},_0x16a097[_0x481a01(0xde)]=null;if(_0x51b6a2['speed']!=null)_0x16a097[_0x481a01(0xd9)]=DataConverter[_0x481a01(0xb1)](_0x51b6a2[_0x481a01(0xec)]);else _0x16a097[_0x481a01(0xd9)]={'walk':0x0};typeof _0x51b6a2['ac']==='number'&&(_0x16a097['ac']={'value':_0x51b6a2['ac'],'motionless':''}),typeof _0x51b6a2['hp']==='number'&&(_0x16a097['hp']={'value':_0x51b6a2['hp'],'min':0x0,'max':_0x51b6a2['hp'],'temp':0x0,'tempmax':0x0,'dt':0x0,'mt':0x0}),(_0x51b6a2[_0x481a01(0xf1)]!=null||_0x51b6a2['capPassenger']!=null||_0x51b6a2[_0x481a01(0xbd)]!=null)&&(_0x16a097[_0x481a01(0xe7)]={'creature':Renderer[_0x481a01(0xf2)]['getShipCreatureCapacity'](_0x51b6a2),'cargo':typeof _0x51b6a2[_0x481a01(0xbd)]===_0x481a01(0xe5)?0x0:_0x51b6a2[_0x481a01(0xbd)]}),_0x53fa15[_0x481a01(0xb4)]=_0x16a097;}[_0xd09fe9(0x101)](_0x562e55,_0x1a943b,_0x2fdf13){const _0x59b484=_0xd09fe9,_0x5207e9={};_0x5207e9[_0x59b484(0xdf)]={'value':this['_getBiographyValue'](_0x562e55,_0x2fdf13['fluff'],{'isImportText':!![]})},_0x5207e9[_0x59b484(0xc6)]=DataConverter[_0x59b484(0xdc)](_0x562e55),_0x1a943b['details']=_0x5207e9;}[_0xd09fe9(0xf7)](_0x29ef24,_0x95e501){const _0x16f95c=_0xd09fe9,_0x24b2eb={};_0x24b2eb['size']=UtilActors[_0x16f95c(0xf9)][_0x29ef24[_0x16f95c(0x100)]]||_0x16f95c(0xe2),this['_pImportEntry_fillConditionsDamage'](_0x29ef24,_0x24b2eb),_0x95e501[_0x16f95c(0xc0)]=_0x24b2eb;}[_0xd09fe9(0xf8)](_0x2c6a44,_0xa0ebca){const _0x1c803a=_0xd09fe9;_0xa0ebca[_0x1c803a(0xd2)]={'pp':0x0,'gp':0x0,'ep':0x0,'sp':0x0,'cp':0x0};}async['_pImportEntry_pFillItems'](_0x46ec16,_0x2ae3b5,_0x85b859,_0x3e4d58){const _0x5308aa=_0xd09fe9;if(_0x46ec16[_0x5308aa(0xee)]?.['length'])for(const _0x97d3aa of _0x46ec16['actionEntries'])await this[_0x5308aa(0xe8)](_0x46ec16,_0x2ae3b5,_0x97d3aa,_0x85b859);const _0x5e6895=_0x3e4d58[_0x5308aa(0xbe)]||this[_0x5308aa(0xb0)]!=null;await UtilActors['pAddActorItems'](_0x85b859['actor'],_0x85b859[_0x5308aa(0xb5)],{'isTemporary':_0x5e6895});}async[_0xd09fe9(0xe8)](_0x279ded,_0x48b247,_0x28c88f,_0x159905){const _0xe166c4=_0xd09fe9;if(_0x28c88f[_0xe166c4(0xf3)]==='actions'){for(const _0x44f9d9 of _0x28c88f['entries']){if(typeof _0x44f9d9==='object'){const _0x21b684=MiscUtil[_0xe166c4(0xf5)](_0x44f9d9);_0x21b684[_0xe166c4(0xf4)]=_0x21b684[_0xe166c4(0xf4)]||_0x28c88f[_0xe166c4(0xf4)],_0x44f9d9[_0xe166c4(0xf3)]===_0xe166c4(0xbb)&&_0x21b684[_0xe166c4(0xed)]?.[_0xe166c4(0xe1)]===0x1&&_0x21b684[_0xe166c4(0xb6)]?.[_0xe166c4(0xe1)]===0x1&&typeof _0x21b684['attackEntries'][0x0]==='string'&&typeof _0x21b684[_0xe166c4(0xb6)][0x0]==='string'&&(_0x21b684[_0xe166c4(0xff)]=['{@atk\x20'+_0x44f9d9[_0xe166c4(0xb8)][_0xe166c4(0xc2)]()+'}\x20'+_0x21b684[_0xe166c4(0xed)][0x0]+_0xe166c4(0xb9)+_0x21b684[_0xe166c4(0xb6)][0x0]],delete _0x21b684['attackEntries'],delete _0x21b684[_0xe166c4(0xb6)]),await this[_0xe166c4(0xe8)](_0x279ded,_0x48b247,_0x21b684,_0x159905);}else await this['_pImportEntry_pFillItems_pActionEntry'](_0x279ded,_0x48b247,_0x44f9d9,_0x159905);}return;}_0x28c88f=typeof _0x28c88f==='object'?_0x28c88f:{'name':_0xe166c4(0xc1),'entries':[_0x28c88f]};const _0x52d305=DataConverter[_0xe166c4(0xce)](_0x28c88f),_0xf59d08=_0x28c88f['entries']?JSON['stringify'](_0x28c88f['entries']):null,{damageTuples:_0x58f512,formula:_0x915bcb,isAttack:_0x548a9b,rangeShort:_0x20470c,rangeLong:_0x484342,actionType:_0x4120dc,isProficient:_0x5dbf9a,attackBonus:_0x5c6332,_foundryData:_0x5643a0,foundryData:_0x2b202a,_foundryFlags:_0x20d93a,foundryFlags:_0x5da549,img:_0x11e7d0}=await DataConverterObject[_0xe166c4(0xf0)](_0x279ded,_0x28c88f,_0x159905),_0x3461f1=_0x58f512,{saveAbility:_0x247f24,saveScaling:_0x13a0b5,saveDc:_0xf714cf}=this[_0xe166c4(0xcd)](_0xf59d08);_0x548a9b?await this[_0xe166c4(0xfe)](_0x279ded,_0x48b247,_0x28c88f,_0x159905,{'damageParts':_0x3461f1,'formula':_0x915bcb,'rangeShort':_0x20470c,'rangeLong':_0x484342,'actionType':_0x4120dc,'isProficient':_0x5dbf9a,'description':_0x52d305,'saveAbility':_0x247f24,'saveDc':_0xf714cf,'saveScaling':_0x13a0b5,'attackBonus':_0x5c6332,'_foundryData':_0x5643a0,'foundryData':_0x2b202a,'_foundryFlags':_0x20d93a,'foundryFlags':_0x5da549,'img':_0x11e7d0,'isSiegeWeapon':_0x279ded['objectType']==='SW'}):_0x159905['items'][_0xe166c4(0xf6)](DataConverter[_0xe166c4(0xdd)](_0x28c88f,{'mode':_0xe166c4(0xc5),'fvttType':'feat','activationType':'action','activationCost':0x1,'description':_0x52d305,'saveAbility':_0x247f24,'saveDc':_0xf714cf,'saveScaling':_0x13a0b5,'damageParts':_0x3461f1,'formula':_0x915bcb,'attackBonus':_0x5c6332,'_foundryData':_0x5643a0,'foundryData':_0x2b202a,'_foundryFlags':_0x20d93a,'foundryFlags':_0x5da549,'img':_0x11e7d0,'entity':_0x279ded,'source':_0x279ded[_0xe166c4(0xc6)],'actor':{'data':_0x48b247}}));}[_0xd09fe9(0xba)](_0xc8be9,_0x26da01){_0x26da01['cargo']={'crew':[],'passengers':[]};}}ImportListObject[_0xd09fe9(0xae)]=class extends ImportListActor['ImportEntryOpts']{};export{ImportListObject};
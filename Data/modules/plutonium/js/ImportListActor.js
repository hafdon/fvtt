const _0x5ad8=['custom','existing','_pack','setFirstSection','tokenIsAddVision','data','tremorsense','expert','items','entries','TASK_EXIT_COMPLETE_DATA_ONLY','abs','find','getNameWithSourcePart','110193ciEbXV','darkvision','Unimplemented!','push','some','_pImportEntry_pFillItems','effects','max','isUseTokenImageAsPortrait','getCleanEntityName','_pImportEntry_pFillBase_pGetCompendiumImage','325773KqrVhQ','includes','truesight','immune','_PROPS_DAMAGE_IMM_VULN_RES','slashing','14wDLUFn','\x22)\x20will\x20be\x20used.','copy','getAbilityModNumber','_pImportEntry_fillData_Abilities','_pImportEntry_pHandlePostItemItemUpdates','join','postItemItemUpdates','type','exec','getTokenUrl','setEq','add','pGetCompendiumImage','_data','_getDuplicateMeta','Importing\x20','actors','_pImportEntry_getTokenImage','VALID_CONDITIONS','length','isOverwrite','create','blindsight','1UFdBSx','resist','tokenBar1Attribute','get','assumedPb','pImportEntry','_actorType','1133197YcwOMv','abilities','token','tokenDisposition','Creature\x20\x22','toLowerCase','render','save','warn','sourceJsonToAbv','mystery-man.svg','importEntity','\x22\x20bonus\x20\x22','intToBonus','249ezThco','ABIL_ABVS','_SET_PHYSICAL_DAMAGE','conditionImmune','insert','\x20to\x20actor!','map','proficient','TASK_EXIT_COMPLETE','size','5653NZmOVO','VALID_DAMAGE_TYPES','6339024TAhnpV','deleteEmbeddedEntity','\x22\x20=\x20\x22','monImmResToFull','name','physical','\x22\x20(from\x20\x22','_actor','isTemp','_pImportEntry_hasTokenImage','_pImportEntry_pGetImportMetadata','\x22\x20did\x20not\x20match\x20an\x20expected\x20modifier/proficiency\x20amount!\x20A\x20fallback\x20value\x20(\x22','tokenNameDisplay','133984xWsUYl','_props','_pImportEntry_pApplyEffects','source','isDataOnly','_displayName','_pImportEntry_pFillBase','updateEntity','vulnerable','TASK_EXIT_SKIPPED_DUPLICATE','has','actor','piercing','cond','992609xIuFxH','pAddActorEffects','assign','update','icons/svg/mystery-man.svg','forEach','hasTokenUrl'];const _0x5ee0=function(_0x3ab88c,_0x53670e){_0x3ab88c=_0x3ab88c-0x116;let _0x5ad877=_0x5ad8[_0x3ab88c];return _0x5ad877;};const _0x50c804=_0x5ee0;(function(_0x5e59f5,_0x42c955){const _0xc7aadf=_0x5ee0;while(!![]){try{const _0xda8f55=parseInt(_0xc7aadf(0x11c))*-parseInt(_0xc7aadf(0x12d))+-parseInt(_0xc7aadf(0x173))+-parseInt(_0xc7aadf(0x127))+parseInt(_0xc7aadf(0x164))*-parseInt(_0xc7aadf(0x15a))+-parseInt(_0xc7aadf(0x181))+-parseInt(_0xc7aadf(0x14c))+-parseInt(_0xc7aadf(0x145))*-parseInt(_0xc7aadf(0x166));if(_0xda8f55===_0x42c955)break;else _0x5e59f5['push'](_0x5e59f5['shift']());}catch(_0x59f25f){_0x5e59f5['push'](_0x5e59f5['shift']());}}}(_0x5ad8,0xc415a));import{ImportList}from'./ImportList.js';import{DataConverter}from'./DataConverter.js';import{Vetools}from'./Vetools.js';import{Config}from'./Config.js';import{UtilApplications}from'./UtilApplications.js';import{UtilActors}from'./UtilActors.js';import{LGT}from'./Util.js';import{Consts}from'./Consts.js';class ImportListActor extends ImportList{constructor(_0x168acd,_0x4d21bc,_0x513735,_0x2df4bf){super(_0x168acd,_0x4d21bc,_0x513735),this['_actorType']=_0x2df4bf['actorType'];}async[_0x50c804(0x14a)](_0x199876,_0x263369){const _0x1abaab=_0x50c804;_0x263369=_0x263369||{},console['log'](...LGT,_0x1abaab(0x13d)+this[_0x1abaab(0x14b)]+'\x20\x22'+_0x199876[_0x1abaab(0x16a)]+_0x1abaab(0x16c)+Parser[_0x1abaab(0x155)](_0x199876[_0x1abaab(0x176)])+'\x22)');if(this[_0x1abaab(0x16d)])throw new Error('Cannot\x20import\x20'+this['_actorType']+_0x1abaab(0x15f));let _0x24debc;const _0x4c853f=this[_0x1abaab(0x13c)]({'entity':_0x199876});if(_0x4c853f['isSkip'])return{'status':UtilApplications[_0x1abaab(0x17c)]};else{if(_0x4c853f[_0x1abaab(0x142)])_0x24debc=_0x4c853f[_0x1abaab(0x189)];else _0x24debc=this['_pack']?null:await Actor[_0x1abaab(0x143)]({'name':Consts['ACTOR_TEMP_NAME'],'type':this[_0x1abaab(0x14b)]},{'renderSheet':!!_0x263369[_0x1abaab(0x16e)],'temporary':!!_0x263369[_0x1abaab(0x16e)]});}const {dataBuilderOpts:_0x36e5eb,actorData:_0x158fe8}=await this['_pImportEntry_pGetImportMetadata'](_0x24debc,_0x199876,_0x263369);if(_0x263369[_0x1abaab(0x16e)])return _0x24debc=await Actor[_0x1abaab(0x143)]({..._0x158fe8,'type':this[_0x1abaab(0x14b)]},{'renderSheet':!_0x263369['isDataOnly'],'temporary':!![]}),_0x36e5eb['actor']=_0x24debc,await this[_0x1abaab(0x121)](_0x199876,_0x158fe8,_0x36e5eb,_0x263369),await this[_0x1abaab(0x175)](_0x158fe8,_0x36e5eb,_0x263369),await this[_0x1abaab(0x132)](_0x24debc,_0x263369,_0x36e5eb),_0x263369[_0x1abaab(0x177)]?{'imported':_0x24debc,'status':UtilApplications[_0x1abaab(0x118)]}:{'imported':_0x24debc,'status':UtilApplications[_0x1abaab(0x162)]};else{if(this[_0x1abaab(0x18a)]){if(_0x4c853f[_0x1abaab(0x142)]){_0x36e5eb['actor']=_0x24debc,Object[_0x1abaab(0x183)](_0x24debc[_0x1abaab(0x18d)],_0x158fe8),_0x24debc[_0x1abaab(0x18d)][_0x1abaab(0x116)]=[],await this['_pImportEntry_pFillItems'](_0x199876,_0x158fe8,_0x36e5eb,_0x263369),await this[_0x1abaab(0x175)](_0x158fe8,_0x36e5eb,_0x263369);const _0x16932a=await this[_0x1abaab(0x18a)][_0x1abaab(0x17a)](MiscUtil[_0x1abaab(0x12f)](_0x24debc[_0x1abaab(0x18d)]));return await this[_0x1abaab(0x132)](_0x16932a,_0x263369,_0x36e5eb),{'imported':_0x24debc,'status':UtilApplications[_0x1abaab(0x162)]};}else{_0x24debc=await Actor[_0x1abaab(0x143)]({..._0x158fe8,'type':this[_0x1abaab(0x14b)]},{'temporary':!![]}),_0x36e5eb[_0x1abaab(0x17e)]=_0x24debc,await this[_0x1abaab(0x121)](_0x199876,_0x158fe8,_0x36e5eb,_0x263369),await this[_0x1abaab(0x175)](_0x158fe8,_0x36e5eb,_0x263369);if(_0x24debc['_data'])_0x24debc[_0x1abaab(0x13b)]=MiscUtil['copy'](_0x24debc[_0x1abaab(0x18d)]);const _0x460368=await this[_0x1abaab(0x18a)][_0x1abaab(0x157)](_0x24debc);await this['_pImportEntry_pHandlePostItemItemUpdates'](_0x460368,_0x263369,_0x36e5eb);}return{'imported':_0x24debc,'status':UtilApplications['TASK_EXIT_COMPLETE']};}else{if(_0x4c853f[_0x1abaab(0x142)])await _0x24debc[_0x1abaab(0x167)]('OwnedItem',_0x24debc[_0x1abaab(0x18d)][_0x1abaab(0x116)][_0x1abaab(0x160)](_0x53feaa=>_0x53feaa['id']||_0x53feaa['_id']));return await this[_0x1abaab(0x121)](_0x199876,_0x158fe8,_0x36e5eb,_0x263369),await this[_0x1abaab(0x175)](_0x158fe8,_0x36e5eb,_0x263369),await _0x24debc[_0x1abaab(0x184)](_0x158fe8),await game[_0x1abaab(0x13e)][_0x1abaab(0x15e)](_0x24debc),await this[_0x1abaab(0x132)](_0x24debc,_0x263369,_0x36e5eb),{'imported':_0x24debc,'status':UtilApplications[_0x1abaab(0x162)]};}}}async['_pImportEntry_pApplyEffects'](_0x213f7f,_0x2aa6a8,_0x3e6606){const _0x2f2182=_0x50c804;if(!_0x2aa6a8['effects']?.[_0x2f2182(0x141)])return;const _0x2bc856=_0x3e6606[_0x2f2182(0x16e)]||this[_0x2f2182(0x18a)]!=null;await UtilActors[_0x2f2182(0x182)](_0x2aa6a8[_0x2f2182(0x17e)],_0x2aa6a8[_0x2f2182(0x122)],_0x2bc856);}async[_0x50c804(0x132)](_0x26439f,_0x4422a5,_0x37268e){const _0x43e248=_0x50c804;if(!_0x37268e[_0x43e248(0x134)])return;for(const _0x7e3702 of _0x37268e[_0x43e248(0x134)]){await _0x7e3702({'actor':_0x26439f,'isTemp':_0x4422a5[_0x43e248(0x16e)],'isPack':this[_0x43e248(0x18a)]!=null,'pack':this['_pack']});}}[_0x50c804(0x170)](){const _0x2a6a32=_0x50c804;throw new Error(_0x2a6a32(0x11e));}[_0x50c804(0x121)](){const _0x2f9dce=_0x50c804;throw new Error(_0x2f9dce(0x11e));}[_0x50c804(0x16f)](_0x5377d5){const _0x5a8cd2=_0x50c804;return this[_0x5a8cd2(0x174)][_0x5a8cd2(0x120)](_0x21c5e2=>Vetools[_0x5a8cd2(0x187)](_0x21c5e2,_0x5377d5));}[_0x50c804(0x13f)](_0x498c16){const _0x1bc17c=_0x50c804,_0x4ffe8f=this[_0x1bc17c(0x174)][_0x1bc17c(0x11a)](_0x3924ee=>Vetools['hasTokenUrl'](_0x3924ee,_0x498c16));if(_0x4ffe8f)return Vetools[_0x1bc17c(0x137)](_0x4ffe8f,_0x498c16);return _0x1bc17c(0x185);}async[_0x50c804(0x179)](_0x286d21,_0xd5e037,_0x320c96,_0x54f191){const _0xfb930d=_0x50c804;_0x54f191=_0x54f191||{},_0xd5e037[_0xfb930d(0x16a)]=DataConverter[_0xfb930d(0x11b)](_0x286d21);let _0xe7b730=_0x54f191[_0xfb930d(0x124)]?null:Vetools['getImageUrlFromFluff'](_0x320c96);if(!_0xe7b730){if(this[_0xfb930d(0x16f)](_0x286d21))_0xe7b730=this['_pImportEntry_getTokenImage'](_0x286d21);else{const _0x9df0ae=await this[_0xfb930d(0x126)](_0x286d21);if(_0x9df0ae)_0xe7b730=_0x9df0ae;else _0xe7b730=this[_0xfb930d(0x13f)](_0x286d21);}}_0xd5e037['img']=_0xe7b730,_0xd5e037[_0xfb930d(0x135)]=this['_actorType'];}async[_0x50c804(0x126)](_0x2562fa){const _0x162b7a=_0x50c804;for(const _0x3ff304 of this[_0x162b7a(0x174)]){const _0x2f50f8=await DataConverter[_0x162b7a(0x13a)](_0x3ff304,_0x2562fa);if(_0x2f50f8&&!_0x2f50f8[_0x162b7a(0x151)]()['includes'](_0x162b7a(0x156)))return _0x2f50f8;}return null;}async['_pImportEntry_pFillToken'](_0x25bbce,_0x58a908,_0x39e0c8){const _0x188185=_0x50c804;let _0x4c437b=0x1;switch(_0x25bbce[_0x188185(0x163)]||'M'){case'T':_0x4c437b=0.5;break;case'L':_0x4c437b=0x2;break;case'H':_0x4c437b=0x3;break;case'G':_0x4c437b=0x4;break;}let _0x3fbc93=0x0,_0x38460e=0x0;(_0x25bbce['senses']||[])['forEach'](_0x370ee1=>{const _0x15aa90=_0x188185,_0xae699b=/(blindsight|darkvision|tremorsense|truesight)\s*(\d+)/i[_0x15aa90(0x136)](_0x370ee1);if(_0xae699b){const _0x2ace0d=Number(_0xae699b[0x2]);switch(_0xae699b[0x1]){case _0x15aa90(0x11d):_0x3fbc93=Math[_0x15aa90(0x123)](_0x3fbc93,_0x2ace0d);break;case _0x15aa90(0x144):case _0x15aa90(0x18e):case _0x15aa90(0x129):_0x38460e=Math[_0x15aa90(0x123)](_0x38460e,_0x2ace0d);break;}}}),_0x58a908[_0x188185(0x14e)]={'displayName':Config[_0x188185(0x148)](_0x39e0c8,_0x188185(0x172)),'name':UtilApplications[_0x188185(0x125)](_0x25bbce[_0x188185(0x178)]||_0x25bbce[_0x188185(0x16a)]),'img':this[_0x188185(0x13f)](_0x25bbce),'width':_0x4c437b,'height':_0x4c437b,'scale':0x1,'elevation':0x0,'lockRotation':![],'rotation':0x0,'vision':Config[_0x188185(0x148)](_0x39e0c8,_0x188185(0x18c)),'dimSight':_0x3fbc93,'brightSight':_0x38460e,'dimLight':0x0,'brightLight':0x0,'sightAngle':0x168,'lightAngle':0x168,'actorLink':![],'actorData':{},'disposition':Config[_0x188185(0x148)](_0x39e0c8,_0x188185(0x14f)),'displayBars':Config[_0x188185(0x148)](_0x39e0c8,'tokenBarDisplay'),'bar1':{'attribute':Config['get'](_0x39e0c8,_0x188185(0x147))},'bar2':{'attribute':Config[_0x188185(0x148)](_0x39e0c8,'tokenBar2Attribute')},'flags':{},'effects':[],'randomImg':![]};}[_0x50c804(0x131)](_0x415ff2,_0x132839,_0x535906){const _0x577ce8=_0x50c804,_0x4cdf85={};Parser[_0x577ce8(0x15b)]['forEach'](_0x5a43a3=>{const _0x457c33=_0x577ce8;let _0xeb279e=0x0;const _0x5fd96b=Parser[_0x457c33(0x130)](_0x415ff2[_0x5a43a3]);if(_0x415ff2['save']&&_0x415ff2[_0x457c33(0x153)][_0x5a43a3]){const _0x12958a=Number(_0x415ff2[_0x457c33(0x153)][_0x5a43a3]);if(!isNaN(_0x12958a)){const _0x3dfc8e=Parser[_0x457c33(0x130)](_0x415ff2[_0x5a43a3]),_0x58d59a=_0x3dfc8e+(_0x535906[_0x457c33(0x149)]||_0x535906['pb']),_0x3af5b1=_0x3dfc8e+0x2*(_0x535906[_0x457c33(0x149)]||_0x535906['pb']);if(_0x58d59a===_0x12958a)_0xeb279e=0x1;else{if(_0x3af5b1===_0x12958a)_0xeb279e=0x2;else{const _0x366d9c=Math[_0x457c33(0x119)](_0x12958a-_0x58d59a),_0x4bb71a=Math[_0x457c33(0x119)](_0x12958a-_0x3af5b1);if(_0x366d9c<_0x4bb71a)_0xeb279e=0x1;else _0xeb279e=0x2;const _0x9a2750=_0xeb279e===0x2?_0x3af5b1:_0x58d59a;console[_0x457c33(0x154)](...LGT,_0x457c33(0x150)+_0x415ff2['name']+'\x22\x20('+_0x415ff2['source']+')\x20save\x20\x22'+_0x5a43a3+_0x457c33(0x158)+_0x415ff2[_0x457c33(0x153)][_0x5a43a3]+_0x457c33(0x171)+(_0xeb279e===0x2?_0x457c33(0x18f):_0x457c33(0x161))+_0x457c33(0x168)+UiUtil[_0x457c33(0x159)](_0x9a2750)+_0x457c33(0x12e));}}}}_0x4cdf85[_0x5a43a3]={'value':_0x415ff2[_0x5a43a3],'proficient':_0xeb279e,'mod':_0x5fd96b};}),_0x132839[_0x577ce8(0x14d)]=_0x4cdf85;}['_getBiographyValue'](_0x3628ec){const _0x5719f4=_0x50c804;if(!_0x3628ec||!_0x3628ec[_0x5719f4(0x117)])return'';const _0x5caa6d=_0x3628ec['type']==='section'?-0x1:0x2;if(_0x3628ec[_0x5719f4(0x135)]!=='section')Renderer[_0x5719f4(0x148)]()[_0x5719f4(0x18b)](![]);return Renderer['get']()[_0x5719f4(0x18b)](!![])[_0x5719f4(0x152)]({'type':_0x3628ec['type'],'entries':_0x3628ec[_0x5719f4(0x117)]},_0x5caa6d);}['_pImportEntry_fillConditionsDamage'](_0x53ae42,_0x4b546e){const _0x23661b=_0x50c804,_0x1515ba=(_0x4707fd,_0x19e068,_0x4bfe82,_0x201444,_0x425656)=>{const _0x5e369a=_0x5ee0;if(!_0x53ae42[_0x4bfe82])return;_0x53ae42[_0x4bfe82][_0x5e369a(0x186)](_0x51bfe7=>{const _0x47697d=_0x5e369a;if(_0x4707fd[_0x47697d(0x128)](_0x51bfe7))_0x201444[_0x47697d(0x139)](_0x51bfe7);else{if(ImportListActor[_0x47697d(0x12b)][_0x47697d(0x17d)](_0x4bfe82)&&_0x51bfe7[_0x4bfe82]&&_0x51bfe7[_0x4bfe82]instanceof Array&&CollectionUtil[_0x47697d(0x138)](new Set(_0x51bfe7[_0x4bfe82]),ImportListActor['_SET_PHYSICAL_DAMAGE'])&&_0x51bfe7['note']&&_0x51bfe7[_0x47697d(0x180)])_0x201444[_0x47697d(0x139)](_0x47697d(0x16b));else{const _0x5a4c2f=_0x19e068([_0x51bfe7]);_0x201444[_0x47697d(0x139)](_0x47697d(0x188)),_0x425656[_0x47697d(0x11f)](_0x5a4c2f);}}});},_0x26acf2=new Set();let _0x4857be=[];_0x1515ba(UtilActors[_0x23661b(0x165)],Parser[_0x23661b(0x169)],_0x23661b(0x12a),_0x26acf2,_0x4857be),_0x4b546e['di']={'value':[..._0x26acf2],'custom':_0x4857be[_0x23661b(0x133)](',\x20')};const _0x1c831c=new Set();let _0xa5232b=[];_0x1515ba(UtilActors[_0x23661b(0x165)],Parser[_0x23661b(0x169)],_0x23661b(0x146),_0x1c831c,_0xa5232b),_0x4b546e['dr']={'value':[..._0x1c831c],'custom':_0xa5232b[_0x23661b(0x133)](',\x20')};const _0x4144bd=new Set();let _0x9c2aea=[];_0x1515ba(UtilActors[_0x23661b(0x165)],Parser['monImmResToFull'],_0x23661b(0x17b),_0x4144bd,_0x9c2aea),_0x4b546e['dv']={'value':[..._0x4144bd],'custom':_0x9c2aea[_0x23661b(0x133)](',\x20')};const _0x1ea4de=new Set();let _0x57a09b=[];_0x1515ba(UtilActors[_0x23661b(0x140)],_0x225a4c=>Parser['monCondImmToFull'](_0x225a4c,!![]),_0x23661b(0x15d),_0x1ea4de,_0x57a09b),_0x4b546e['ci']={'value':[..._0x1ea4de],'custom':_0x57a09b[_0x23661b(0x133)](',\x20')};}}ImportListActor[_0x50c804(0x12b)]=new Set([_0x50c804(0x12a),'resist',_0x50c804(0x17b)]),ImportListActor[_0x50c804(0x15c)]=new Set(['bludgeoning',_0x50c804(0x17f),_0x50c804(0x12c)]);export{ImportListActor};
const _0xda16=['toolProf','languages','pAddActorEffects','pFillActorSkillData','ability','titleLog','TASK_EXIT_COMPLETE','_pImportEntry_pAddSubEntities','ascSort','pFillActorWeaponProfData','link','entries','pFillActorImmunityData','_titleLog','skills','_pImportEntry_pFillItems','armorProf','_pImportEntry_pFillSkills','chosenAbilityScoreIncrease','getImportedEmbed','get','languageProficiencies','name','_pGetSideData','pImportEntry','_pGetClassSubclassFeatureAdditionalEntities','render','items','update','resist','pFillActorAbilityData','_pGetEntityItem','887708MZcueP','subEntities','_pImportEntry_pFillTraits','_pHasSideLoadedEffects','sourceJsonToAbv','\x22\x20(from\x20\x22','keys','pGetUserInput','_doPopulateFlags','constructor','skillProficiencies','31CpaXHE','dnd5e','toolProficiencies','immune','data','5POQxLe','8923nkIxYn','pFillActorArmorProfData','pFillActorLanguageData','log','_pImportEntry_pImportToActor_fillFlags','sort','Unimplemented!','TASK_EXIT_COMPLETE_DATA_ONLY','CHAR_MAX_LEVEL','isCancelled','pApplyFormDataToActor','push','_pImportEntry_pImportToActor','pInit','document','conditionImmune','869960WhwklI','SYM_UI_SKIP','78781pvaFye','_pImportEntry_pImportToDirectoryGeneric','1066580VujVXN','isToken','3890POnnIS','traits','111242EtEFxg','ImportEntryOpts','weaponProficiencies','weaponProf','./ChooseImporter.js','pAddActorItems','_pImportEntry_pFillAbilities','_pImportEntry_pHandleAdditionalSpells','getTotalClassLevels','34zCXsgL','_pMutActorUpdateFeature','TASK_EXIT_CANCELLED','sheet','length','source','isTemp','flags','_foundryChosenAbilityScoreIncrease','pFillActorVulnerabilityData','armorProficiencies','_actor'];const _0x1334=function(_0xb7427d,_0xe33bc1){_0xb7427d=_0xb7427d-0x1cc;let _0xda16fa=_0xda16[_0xb7427d];return _0xda16fa;};const _0x283d07=_0x1334;(function(_0x41dbe9,_0x412ce3){const _0x346832=_0x1334;while(!![]){try{const _0x18e7c3=-parseInt(_0x346832(0x1d8))*parseInt(_0x346832(0x1e3))+-parseInt(_0x346832(0x1d6))+parseInt(_0x346832(0x21f))*parseInt(_0x346832(0x1d4))+parseInt(_0x346832(0x20f))+parseInt(_0x346832(0x1d2))+-parseInt(_0x346832(0x1da))+parseInt(_0x346832(0x21a))*-parseInt(_0x346832(0x220));if(_0x18e7c3===_0x412ce3)break;else _0x41dbe9['push'](_0x41dbe9['shift']());}catch(_0x56d9a1){_0x41dbe9['push'](_0x41dbe9['shift']());}}}(_0xda16,0x89e8e));import{ImportListCharacter}from'./ImportListCharacter.js';import{LGT}from'./Util.js';import{UtilApplications}from'./UtilApplications.js';import{DataConverter}from'./DataConverter.js';import{DataConverterSpell}from'./DataConverterSpell.js';import{UtilActors}from'./UtilActors.js';import{Charactermancer_AdditionalSpellsSelect}from'./UtilCharactermancerAdditionalSpells.js';import{Consts}from'./Consts.js';import{Charactermancer_AbilityScoreSelect}from'./UtilCharactermancer.js';class ImportListFeature extends ImportListCharacter{static['init'](){const _0x125774=_0x1334;throw new Error(_0x125774(0x226));}constructor(_0x39d2a5,_0x450192,_0xf0e98d,_0xd90ac3){const _0x529d15=_0x1334;super(_0x39d2a5,_0x450192,_0xf0e98d),this[_0x529d15(0x1fc)]=_0xd90ac3[_0x529d15(0x1f4)];}static async[_0x283d07(0x206)](_0x3227de,_0x3afe00){throw new Error('Unimplemented!');}static async[_0x283d07(0x20e)](_0x2f776c,_0x4f0674){const _0x187b59=_0x283d07;throw new Error(_0x187b59(0x226));}static async[_0x283d07(0x212)](_0x4560e2,_0x20ab9b){const _0x4d2ec7=_0x283d07;throw new Error(_0x4d2ec7(0x226));}async[_0x283d07(0x1e4)](_0x3719d2,_0x41655e,_0x43d24f){const _0x5c770a=_0x283d07;throw new Error(_0x5c770a(0x226));}async['pImportEntry'](_0x1144e7,_0x169a86){const _0x778480=_0x283d07;_0x169a86=_0x169a86||{},console[_0x778480(0x223)](...LGT,'Importing\x20'+this[_0x778480(0x1fc)]+'\x20\x22'+_0x1144e7[_0x778480(0x205)]+_0x778480(0x214)+Parser[_0x778480(0x213)](_0x1144e7[_0x778480(0x1e8)])+'\x22)');if(_0x169a86['isDataOnly'])return{'imported':[await this[_0x778480(0x218)][_0x778480(0x20e)](this[_0x778480(0x1ee)],_0x1144e7)],'status':UtilApplications[_0x778480(0x227)]};if(_0x169a86[_0x778480(0x1e9)])return this[_0x778480(0x1d5)](_0x1144e7,_0x169a86);else{if(this[_0x778480(0x1ee)])return this[_0x778480(0x1ce)](_0x1144e7,_0x169a86);else return this[_0x778480(0x1d5)](_0x1144e7,_0x169a86);}}async['_pImportEntry_pImportToActor'](_0x5eb392,_0x342450){const _0x223211=_0x283d07,_0x26f7a1={'data':{}},_0x5baaf2=new ImportListFeature[(_0x223211(0x1db))]({'chosenAbilityScoreIncrease':_0x5eb392[_0x223211(0x1eb)],'isCharactermancer':!!_0x342450['isCharactermancer']});await this[_0x223211(0x224)](_0x5eb392,_0x26f7a1,_0x342450),await this[_0x223211(0x1e0)](_0x5eb392,_0x26f7a1,_0x5baaf2);if(_0x5baaf2[_0x223211(0x229)])return{'status':UtilApplications['TASK_EXIT_CANCELLED']};await this[_0x223211(0x200)](_0x5eb392,_0x26f7a1['data'],_0x5baaf2);if(_0x5baaf2[_0x223211(0x229)])return{'status':UtilApplications['TASK_EXIT_CANCELLED']};await this[_0x223211(0x211)](_0x5eb392,_0x26f7a1[_0x223211(0x21e)],_0x5baaf2);if(_0x5baaf2[_0x223211(0x229)])return{'status':UtilApplications[_0x223211(0x1e5)]};await this[_0x223211(0x1fe)](_0x5eb392,_0x26f7a1,_0x5baaf2);if(_0x5baaf2['isCancelled'])return{'status':UtilApplications[_0x223211(0x1e5)]};if(Object[_0x223211(0x215)](_0x26f7a1['data'])[_0x223211(0x1e7)])await this['_actor'][_0x223211(0x20b)](_0x26f7a1);await this['_pImportEntry_pAddSubEntities'](_0x5eb392);if(this[_0x223211(0x1ee)][_0x223211(0x1d7)])this[_0x223211(0x1ee)][_0x223211(0x1e6)][_0x223211(0x209)]();return{'imported':[{'name':_0x5eb392[_0x223211(0x205)],'actor':this[_0x223211(0x1ee)]}],'status':UtilApplications[_0x223211(0x1f5)]};}[_0x283d07(0x224)](_0x3d65b6,_0x10b75b,_0x224c70){const _0x6f7007=_0x283d07,_0x43fb47={},_0x5908af={};this[_0x6f7007(0x217)]({'feature':_0x3d65b6,'actor':_0x10b75b,'importOpts':_0x224c70});if(Object[_0x6f7007(0x215)](_0x5908af)[_0x6f7007(0x1e7)])_0x43fb47[_0x6f7007(0x21b)]=_0x5908af;if(Object[_0x6f7007(0x215)](_0x43fb47)['length'])_0x10b75b[_0x6f7007(0x1ea)]=_0x43fb47;}['_doPopulateFlags']({feature:_0x599983,actor:_0x4615b3,importOpts:_0x13a01b,flags:_0x1683a5,flagsDnd5e:_0x51b9b8}){}async[_0x283d07(0x1e0)](_0x4dacdb,_0x5b3b7b,_0xf61ea9){const _0xe2244=_0x283d07,_0x37a8ef=await Charactermancer_AbilityScoreSelect[_0xe2244(0x20d)](this[_0xe2244(0x1ee)],_0x4dacdb[_0xe2244(0x1f3)],_0x5b3b7b,_0xf61ea9);if(_0xf61ea9[_0xe2244(0x229)])return;if(_0x37a8ef==null)return;_0xf61ea9['chosenAbilityScoreIncrease']=_0x37a8ef[_0xe2244(0x21e)];}async[_0x283d07(0x200)](_0x59451e,_0x3918e3,_0x133dc1){const _0x32a15b=_0x283d07;await DataConverter[_0x32a15b(0x1f2)](MiscUtil[_0x32a15b(0x203)](this[_0x32a15b(0x1ee)],_0x32a15b(0x21e),_0x32a15b(0x21e),_0x32a15b(0x1fd)),_0x59451e[_0x32a15b(0x219)],_0x3918e3,_0x133dc1);}async[_0x283d07(0x211)](_0x1c8bda,_0x23103a,_0x46471c){const _0x27edb5=_0x283d07;_0x23103a[_0x27edb5(0x1d9)]={},await DataConverter[_0x27edb5(0x222)](MiscUtil[_0x27edb5(0x203)](this[_0x27edb5(0x1ee)],_0x27edb5(0x21e),_0x27edb5(0x21e),_0x27edb5(0x1d9),_0x27edb5(0x1f0)),_0x1c8bda[_0x27edb5(0x204)],_0x23103a,_0x46471c);if(_0x46471c[_0x27edb5(0x229)])return;await DataConverter['pFillActorToolProfData'](MiscUtil[_0x27edb5(0x203)](this[_0x27edb5(0x1ee)],_0x27edb5(0x21e),_0x27edb5(0x21e),_0x27edb5(0x1d9),_0x27edb5(0x1ef)),_0x1c8bda[_0x27edb5(0x21c)],_0x23103a,_0x46471c);if(_0x46471c['isCancelled'])return;await DataConverter[_0x27edb5(0x221)](MiscUtil[_0x27edb5(0x203)](this['_actor'],_0x27edb5(0x21e),'data',_0x27edb5(0x1d9),_0x27edb5(0x1ff)),_0x1c8bda[_0x27edb5(0x1ed)],_0x23103a,_0x46471c);if(_0x46471c[_0x27edb5(0x229)])return;await DataConverter[_0x27edb5(0x1f8)](MiscUtil[_0x27edb5(0x203)](this[_0x27edb5(0x1ee)],'data',_0x27edb5(0x21e),'traits',_0x27edb5(0x1dd)),_0x1c8bda[_0x27edb5(0x1dc)],_0x23103a,_0x46471c);if(_0x46471c[_0x27edb5(0x229)])return;await DataConverter[_0x27edb5(0x1fb)](MiscUtil[_0x27edb5(0x203)](this['_actor'],_0x27edb5(0x21e),_0x27edb5(0x21e),_0x27edb5(0x1d9),'di'),_0x1c8bda[_0x27edb5(0x21d)],_0x23103a,_0x46471c);if(_0x46471c[_0x27edb5(0x229)])return;await DataConverter['pFillActorResistanceData'](MiscUtil[_0x27edb5(0x203)](this[_0x27edb5(0x1ee)],_0x27edb5(0x21e),'data','traits','dr'),_0x1c8bda[_0x27edb5(0x20c)],_0x23103a,_0x46471c);if(_0x46471c[_0x27edb5(0x229)])return;await DataConverter[_0x27edb5(0x1ec)](MiscUtil[_0x27edb5(0x203)](this[_0x27edb5(0x1ee)],_0x27edb5(0x21e),_0x27edb5(0x21e),_0x27edb5(0x1d9),'dv'),_0x1c8bda['vulnerable'],_0x23103a,_0x46471c);if(_0x46471c[_0x27edb5(0x229)])return;await DataConverter['pFillActorConditionImmunityData'](MiscUtil[_0x27edb5(0x203)](this['_actor'],_0x27edb5(0x21e),_0x27edb5(0x21e),_0x27edb5(0x1d9),'ci'),_0x1c8bda[_0x27edb5(0x1d1)],_0x23103a,_0x46471c);}async[_0x283d07(0x1fe)](_0x188188,_0x31989b,_0xd3103d){const _0x296e24=_0x283d07;await this[_0x296e24(0x1e4)](_0x188188,_0x31989b,_0xd3103d);if(_0xd3103d[_0x296e24(0x229)])return;const _0x389b50={};await this[_0x296e24(0x1e1)](_0x188188,_0x31989b,_0xd3103d,_0x389b50);if(_0xd3103d[_0x296e24(0x229)])return;const _0x3b26fc=DataConverterSpell['doHookSpellLinkRender']['bind'](null,this[_0x296e24(0x1ee)]['id'],_0x389b50),_0x5468d9=await Renderer['get']()['pWithPlugin']({'entryType':_0x296e24(0x1f9),'pluginType':'*','fnPlugin':_0x3b26fc,'pFn':async()=>{const _0x2d2595=_0x296e24,_0x2ac283=await this['constructor'][_0x2d2595(0x20e)](this['_actor'],_0x188188);return _0xd3103d[_0x2d2595(0x20a)]['push'](_0x2ac283),_0x2ac283;}}),_0x10e8ae=await UtilActors[_0x296e24(0x1df)](this['_actor'],_0xd3103d[_0x296e24(0x20a)]),_0x4365f2=[];if(await this[_0x296e24(0x218)]['_pHasSideLoadedEffects'](this['_actor'],_0x188188)){const _0x5ebc80=DataConverter[_0x296e24(0x202)](_0x10e8ae,_0x5468d9);if(_0x5ebc80)_0x4365f2[_0x296e24(0x1cd)](...await this[_0x296e24(0x218)]['_pGetItemEffects'](this[_0x296e24(0x1ee)],_0x188188,_0x5ebc80[_0x296e24(0x1d0)],_0xd3103d));}await UtilActors[_0x296e24(0x1f1)](this[_0x296e24(0x1ee)],_0x4365f2);}async[_0x283d07(0x1e1)](_0x506852,_0x5cdf3b,_0x16089e,_0x316e6f){const _0x5759d8=_0x283d07,_0x31b7c6=Object[_0x5759d8(0x1fa)](_0x16089e[_0x5759d8(0x201)]||{})[_0x5759d8(0x225)](([,_0x244a24],[,_0x5435b1])=>SortUtil[_0x5759d8(0x1f7)](_0x5435b1,_0x244a24)),_0x4939b8=_0x31b7c6?.[0x0]?.[0x0]||null,_0x41675b=await Charactermancer_AdditionalSpellsSelect[_0x5759d8(0x216)]({'additionalSpells':_0x506852['additionalSpells'],'sourceHintText':_0x506852['name'],'curLevel':0x0,'targetLevel':Consts[_0x5759d8(0x228)],'spellLevelLow':0x0,'spellLevelHigh':0x9});if(_0x41675b==null)return _0x16089e['isCancelled']=!![];if(_0x41675b===VeCt[_0x5759d8(0x1d3)])return;const _0xb82422=UtilActors[_0x5759d8(0x1e2)](this[_0x5759d8(0x1ee)]);await Charactermancer_AdditionalSpellsSelect[_0x5759d8(0x1cc)](this['_actor'],_0x41675b,{'parentAbilityAbv':_0x4939b8,'hashToIdMap':_0x316e6f});}async[_0x283d07(0x1f6)](_0x18b0a7){const _0x547234=_0x283d07;await this[_0x547234(0x218)][_0x547234(0x208)](this[_0x547234(0x1ee)],_0x18b0a7);}static async[_0x283d07(0x208)](_0x3ebcc4,_0x1ec6fe){const _0x2e958b=_0x283d07,_0xa76a52=await this['_pGetSideData'](_0x3ebcc4,_0x1ec6fe);if(!_0xa76a52)return[];if(!_0xa76a52[_0x2e958b(0x210)])return[];const {ChooseImporter:_0x2369f9}=await import(_0x2e958b(0x1de));for(const _0x2637c0 in _0xa76a52[_0x2e958b(0x210)]){if(!_0xa76a52[_0x2e958b(0x210)]['hasOwnProperty'](_0x2637c0))continue;const _0x5b1529=_0xa76a52[_0x2e958b(0x210)][_0x2637c0];if(!(_0x5b1529 instanceof Array))continue;const _0x230f8a=_0x2369f9['getImporter'](_0x2637c0,_0x3ebcc4);await _0x230f8a[_0x2e958b(0x1cf)]();for(const _0x45e3ea of _0x5b1529){await _0x230f8a[_0x2e958b(0x207)](_0x45e3ea);}}}}ImportListFeature[_0x283d07(0x1db)]=class extends ImportListCharacter[_0x283d07(0x1db)]{constructor(_0x46153b){const _0x243b19=_0x283d07;_0x46153b=_0x46153b||{},super(_0x46153b),this[_0x243b19(0x201)]=_0x46153b['chosenAbilityScoreIncrease'];}};export{ImportListFeature};
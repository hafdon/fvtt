const _0x1b6b=['197963PIogVZ','46YCQdBj','parent','removeChild','max','Token.prototype._onUpdate','value','object','data','tokens','init','16010hueyNR','clone','Text','1lCOCVn','fill','warn','215705uivXUC','219483LcyHbM','refresh','visible','TokenDocument.prototype._onUpdateTokenActor','set','MODULE_NAME','style','92786wpoLin','5TYPhYY','_handleConfigUpdate_displayDamageDealt_doUpdateDisplay','min','attributes','get','fontSize','register','floor','7082XqiuzA','addChild','Token.prototype.refresh','isDisplayDamageDealt','Failed\x20to\x20refresh\x20token\x20\x22','canvasTextStyle','_handleConfigUpdate_displayDamageDealt_doRefreshTokens','_plutonium_xDispDamageDealt','actor','_handleConfigUpdate_displayDamageDealt_doAddDisplay','73744QzgUbE','LIBWRAPPER_MODE_WRAPPER'];const _0x1d17=function(_0x171be7,_0xdc2891){_0x171be7=_0x171be7-0x191;let _0x1b6be5=_0x1b6b[_0x171be7];return _0x1b6be5;};const _0x3a3cd8=_0x1d17;(function(_0x51dafd,_0x2c2550){const _0x4bb7e5=_0x1d17;while(!![]){try{const _0x7e460e=parseInt(_0x4bb7e5(0x1a6))+-parseInt(_0x4bb7e5(0x19f))+parseInt(_0x4bb7e5(0x1b9))+-parseInt(_0x4bb7e5(0x1bb))*-parseInt(_0x4bb7e5(0x19b))+-parseInt(_0x4bb7e5(0x198))*parseInt(_0x4bb7e5(0x1a7))+-parseInt(_0x4bb7e5(0x19e))+-parseInt(_0x4bb7e5(0x1af))*-parseInt(_0x4bb7e5(0x1bc));if(_0x7e460e===_0x2c2550)break;else _0x51dafd['push'](_0x51dafd['shift']());}catch(_0x2f4fdc){_0x51dafd['push'](_0x51dafd['shift']());}}}(_0x1b6b,0x2abb3));import{libWrapper,UtilLibWrapper}from'./PatcherLibWrapper.js';import{SharedConsts}from'../shared/SharedConsts.js';import{Config}from'./Config.js';import{LGT}from'./Util.js';class Patcher_Token{static[_0x3a3cd8(0x197)](){const _0x15e6b1=_0x3a3cd8;libWrapper[_0x15e6b1(0x1ad)](SharedConsts[_0x15e6b1(0x1a4)],_0x15e6b1(0x1b1),function(_0x3b2916,..._0x3017f0){const _0x4434c2=_0x15e6b1;if(Config['get'](_0x4434c2(0x196),'isDisplayDamageDealt'))Patcher_Token[_0x4434c2(0x1a8)](this);return _0x3b2916(..._0x3017f0);},UtilLibWrapper[_0x15e6b1(0x1ba)]),libWrapper[_0x15e6b1(0x1ad)](SharedConsts[_0x15e6b1(0x1a4)],_0x15e6b1(0x192),function(_0x13e611,..._0x3b8b66){const _0x13edca=_0x15e6b1;if(Config['get']('tokens',_0x13edca(0x1b2)))Patcher_Token[_0x13edca(0x1a8)](this);return _0x13e611(..._0x3b8b66);},UtilLibWrapper['LIBWRAPPER_MODE_WRAPPER']),libWrapper[_0x15e6b1(0x1ad)](SharedConsts['MODULE_NAME'],_0x15e6b1(0x1a2),function(_0xaf49f8,..._0x2fda95){const _0x2e40bd=_0x15e6b1;if(Config['get'](_0x2e40bd(0x196),'isDisplayDamageDealt'))Patcher_Token[_0x2e40bd(0x1a8)](this[_0x2e40bd(0x194)]);return _0xaf49f8(..._0x2fda95);},UtilLibWrapper['LIBWRAPPER_MODE_WRAPPER']),libWrapper['register'](SharedConsts['MODULE_NAME'],'TokenDocument.prototype._onUpdateBaseActor',function(_0x42f457,..._0x9947a2){const _0x6f55b3=_0x15e6b1;if(Config['get'](_0x6f55b3(0x196),_0x6f55b3(0x1b2)))Patcher_Token[_0x6f55b3(0x1a8)](this[_0x6f55b3(0x194)]);return _0x42f457(..._0x9947a2);},UtilLibWrapper['LIBWRAPPER_MODE_WRAPPER']);}static['handleConfigUpdate'](){const _0x52c9fd=_0x3a3cd8;this[_0x52c9fd(0x1b5)]();}static[_0x3a3cd8(0x1b5)](_0x1b211c){const _0x75cb6e=_0x3a3cd8;_0x1b211c=_0x1b211c||{};const _0x8d38da=MiscUtil['get'](canvas,_0x75cb6e(0x196),'placeables')||[];for(const _0x50e937 of _0x8d38da){try{_0x1b211c['isRemoveDisplays']&&_0x50e937['_plutonium_xDispDamageDealt']&&(_0x50e937[_0x75cb6e(0x1be)](_0x50e937['_plutonium_xDispDamageDealt']),_0x50e937[_0x75cb6e(0x1b6)]=null),_0x50e937[_0x75cb6e(0x1a0)]();}catch(_0x5bf926){console[_0x75cb6e(0x19d)](...LGT,_0x75cb6e(0x1b3)+_0x50e937['id']+'\x22!',_0x5bf926);}}}static[_0x3a3cd8(0x1a8)](_0x4568b3){const _0x2062d1=_0x3a3cd8;this[_0x2062d1(0x1b8)](_0x4568b3);const _0x2dbf04=MiscUtil[_0x2062d1(0x1ab)](_0x4568b3[_0x2062d1(0x1b7)],_0x2062d1(0x195),_0x2062d1(0x195),_0x2062d1(0x1aa),'hp',_0x2062d1(0x191))||0x0,_0x5353cc=MiscUtil['get'](_0x4568b3['actor'],_0x2062d1(0x195),'data',_0x2062d1(0x1aa),'hp',_0x2062d1(0x193))||0x0,_0x3baa96=Math[_0x2062d1(0x1a9)](_0x2dbf04,Math[_0x2062d1(0x191)](0x0,_0x2dbf04-_0x5353cc));_0x4568b3[_0x2062d1(0x1b6)]['text']='-'+_0x3baa96,_0x4568b3[_0x2062d1(0x1b6)][_0x2062d1(0x1a1)]=!!_0x3baa96;if(_0x5353cc<=Math[_0x2062d1(0x1ae)](_0x2dbf04/0x2))_0x4568b3[_0x2062d1(0x1b6)][_0x2062d1(0x1a5)][_0x2062d1(0x19c)]=0xff0000;else _0x4568b3[_0x2062d1(0x1b6)][_0x2062d1(0x1a5)][_0x2062d1(0x19c)]=0xffffff;}static[_0x3a3cd8(0x1b8)](_0x2e4246){const _0x5c7f62=_0x3a3cd8;if(_0x2e4246['_plutonium_xDispDamageDealt']&&_0x2e4246['_plutonium_xDispDamageDealt'][_0x5c7f62(0x1bd)])return;_0x2e4246[_0x5c7f62(0x1b6)]&&!_0x2e4246[_0x5c7f62(0x1b6)][_0x5c7f62(0x1bd)]&&(_0x2e4246[_0x5c7f62(0x1be)](_0x2e4246[_0x5c7f62(0x1b6)]),_0x2e4246[_0x5c7f62(0x1b6)]=null),_0x2e4246[_0x5c7f62(0x1b6)]=new PIXI[(_0x5c7f62(0x19a))]('',CONFIG[_0x5c7f62(0x1b4)][_0x5c7f62(0x199)]()),_0x2e4246['_plutonium_xDispDamageDealt'][_0x5c7f62(0x1a5)][_0x5c7f62(0x1ac)]=0x18,_0x2e4246['_plutonium_xDispDamageDealt']['anchor'][_0x5c7f62(0x1a3)](0x1,0x1),_0x2e4246[_0x5c7f62(0x1b6)]['position'][_0x5c7f62(0x1a3)](_0x2e4246['w']-0x3,_0x2e4246['h']-0x1),_0x2e4246[_0x5c7f62(0x1b0)](_0x2e4246[_0x5c7f62(0x1b6)]);}}export{Patcher_Token};
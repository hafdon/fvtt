const _0x2239=['body','each','ENTITY_PERMISSIONS','click','\x22><a\x20target=\x22_blank\x20w-100\x22\x20href=\x22','isAutoExpandJournalEmbeds','615461gIoLLa','getHtml','replace','collection','journalEntries','STR_SEE_CONSOLE','plutRichLinkText','user','1919515cGgzMR','attr','jemb__btn-toggle','entities','register','find','handleToggleClick','sidebarIcon','</button>','<button\x20class=\x22btn\x20btn-xxs\x20btn-5et\x20btn-default\x20flex-vh-center\x20mx-1\x20jemb__btn-toggle\x22\x20data-plut-is-expanded=\x22','currentTarget','<a\x20class=\x22entity-link\x20broken\x22\x20title=\x22Unknown\x20Tag\x20&quot;','getImporter','data','</a>','name','error','\x20<i>(you\x20do\x20not\x20have\x20sufficient\x20permissions\x20to\x20view\x20this\x20journal\x20entry)</i></a>','</div>\x0a\x09\x09\x09</div>','\x22\x20data-plut-rich-link-tag=\x22','ve-hidden','getElementsByTagName','\x20Journal\x20Entry\x20(SHIFT\x20for\x20All\x20Entries)','LIBWRAPPER_MODE_WRAPPER','isEnableContentLinks','_MAX_RECURSION_DEPTH','TextEditor.enrichHTML','Collapse','max','_doEnableToggleButtons','\x22><img\x20src=\x22','parent','1keOPQF','_getEntityPermissions','_sheetMode','<div\x20class=\x22mb-1\x20bold\x20veapp__msg-error\x22>Warning:\x20too\x20many\x20recursive\x20embeds!\x20Have\x20you\x20made\x20an\x20infinite\x20loop?</div>','&quot;\x22><i\x20class=\x22fas\x20fa-unlink\x22></i>\x20','_getBtnHtmlToggle','5731ahJLPG','isGM','934431oNTxLT','.jlnk__entity-link','isEnableJournalEmbeds','\x22\x20title=\x22','next','contains','sheet','<div\x20class=\x22w-100\x20flex-col\x22>\x0a\x09\x09\x09\x09<div\x20class=\x22flex-v-center\x20mb-1\x20jemb__wrp-lnk\x22>','OWNER','Embed','handleClick','rolls','\x22\x20with\x20tag\x20\x22','render','forEach','removeAttribute','OBSERVER','test','<a\x20class=\x22jlnk__entity-link\x22\x20draggable=\x22true\x22\x20data-plut-rich-link-text=\x22','_getEntity','pImportEntry','.jemb__btn-toggle','getTagMeta','142LSkroo','outerHTML','stopPropagation','shiftKey','105603XdblLO','1GTusli','</div>\x0a\x09\x09\x09\x09<div\x20class=\x22flex-vh-center\x20jemb__wrp-content\x20','imported','hover','382282dShwuc','\x22\x20class=\x22jemb__img\x22></a></div>\x0a\x09\x09\x09</div>','contents','disabled','folderType','get','enrichHTML','title','.editor','_handleExpandCollapse','MODULE_NAME','dataset','catch','secrets','content','encodeForHash','img','utils','<i\x20class=\x22fa\x20fa-caret-square-left\x22></i>','\x22></i>\x20','links','450094urifyi','permission','_createContentLink','Expand','preventDefault','<a\x20class=\x22entity-link\x20broken\x22><i\x20class=\x22fas\x20fa-unlink\x22></i>\x20','splitTagByPipe','ContentLoader','<i\x20class=\x22fa\x20fa-caret-square-down\x22></i>'];const _0x59b6=function(_0x49e8dc,_0x4664a4){_0x49e8dc=_0x49e8dc-0xc5;let _0x223962=_0x2239[_0x49e8dc];return _0x223962;};const _0x47bb40=_0x59b6;(function(_0x5cb18e,_0x2433cb){const _0x43f318=_0x59b6;while(!![]){try{const _0x50b22e=parseInt(_0x43f318(0x10a))+parseInt(_0x43f318(0x126))*parseInt(_0x43f318(0x125))+parseInt(_0x43f318(0x12a))+-parseInt(_0x43f318(0x108))*-parseInt(_0x43f318(0x121))+-parseInt(_0x43f318(0xcb))+parseInt(_0x43f318(0xda))+-parseInt(_0x43f318(0x102))*parseInt(_0x43f318(0xe2));if(_0x50b22e===_0x2433cb)break;else _0x5cb18e['push'](_0x5cb18e['shift']());}catch(_0x2c3347){_0x5cb18e['push'](_0x5cb18e['shift']());}}}(_0x2239,0x75ab2));import{libWrapper,UtilLibWrapper}from'./PatcherLibWrapper.js';import{SharedConsts}from'../shared/SharedConsts.js';import{Config}from'./Config.js';import{ChooseImporter}from'./ChooseImporter.js';import{LGT}from'./Util.js';import{UtilApplications}from'./UtilApplications.js';class Patcher_TextEditor{static['init'](){const _0x7944e4=_0x59b6;libWrapper[_0x7944e4(0xe6)](SharedConsts[_0x7944e4(0x134)],_0x7944e4(0xfc),function(_0x13414f,..._0x30c93f){const _0x553421=_0x7944e4;if(!Config[_0x553421(0x12f)](_0x553421(0xde),_0x553421(0x10c))&&!Config[_0x553421(0x12f)](_0x553421(0xde),_0x553421(0xfa)))return _0x13414f(..._0x30c93f);return Patcher_TextEditor['enrichHTML'](_0x13414f,..._0x30c93f);},UtilLibWrapper[_0x7944e4(0xf9)]),libWrapper[_0x7944e4(0xe6)](SharedConsts[_0x7944e4(0x134)],'JournalSheet.prototype._disableFields',function(_0x80b884,..._0x15968e){const _0xbdc924=_0x7944e4,_0x4abdad=_0x80b884(..._0x15968e);if(!Config['get'](_0xbdc924(0xde),_0xbdc924(0x10c)))return _0x4abdad;return Patcher_TextEditor['Embed'][_0xbdc924(0xff)](..._0x15968e),_0x4abdad;},UtilLibWrapper[_0x7944e4(0xf9)]),$(document[_0x7944e4(0xd4)])['on'](_0x7944e4(0xd7),_0x7944e4(0x11f),_0x27720c=>{const _0x1c9720=_0x7944e4;Patcher_TextEditor[_0x1c9720(0x113)]['handleToggleClick'](_0x27720c);})['on'](_0x7944e4(0xd7),_0x7944e4(0x10b),_0x23cd11=>{const _0x211de6=_0x7944e4;Patcher_TextEditor[_0x211de6(0xd2)][_0x211de6(0x114)](_0x23cd11);});}static[_0x47bb40(0x130)](_0x33da91,_0x11ca34,_0x2207e4,_0x134475=0x0){const _0x249ea9=_0x47bb40;_0x2207e4=_0x2207e4||{};if(_0x2207e4[_0x249ea9(0x137)]===undefined)_0x2207e4['secrets']=![];if(_0x2207e4[_0x249ea9(0xe5)]===undefined)_0x2207e4[_0x249ea9(0xe5)]=!![];if(_0x2207e4['links']===undefined)_0x2207e4[_0x249ea9(0xca)]=!![];if(_0x2207e4[_0x249ea9(0x115)]===undefined)_0x2207e4[_0x249ea9(0x115)]=!![];_0x11ca34=_0x33da91(_0x11ca34,_0x2207e4);if(!_0x2207e4[_0x249ea9(0xe5)])return _0x11ca34;return _0x11ca34=_0x11ca34['replace'](/@Embed(JournalEntry)\[([^\]]+)](?:{([^}]+)})?/g,(..._0x20ffc)=>Patcher_TextEditor[_0x249ea9(0x113)]['getHtml'](_0x2207e4,_0x134475,..._0x20ffc))[_0x249ea9(0xdc)](/@([a-zA-Z]+)\[([^\]]+)](?:{([^}]+)})?/g,(..._0x39d232)=>Patcher_TextEditor[_0x249ea9(0xd2)][_0x249ea9(0xdb)](_0x2207e4,_0x134475,..._0x39d232)),_0x11ca34;}}Patcher_TextEditor[_0x47bb40(0x113)]=class{static[_0x47bb40(0xdb)](_0x4a6859,_0x441ce5,_0x9529b0,_0x296f4f,_0x37ab88,_0xa77812){const _0x353145=_0x47bb40,_0xfdd2d=CONFIG[_0x296f4f],_0x12699b=_0xfdd2d[_0x353145(0xdd)]['instance'],_0x26f60e=this[_0x353145(0x11d)](_0x12699b,_0x37ab88);if(!_0x26f60e)return'<a\x20class=\x22entity-link\x20broken\x22><i\x20class=\x22fas\x20fa-unlink\x22></i>\x20'+(_0xa77812||_0x37ab88)+_0x353145(0xf0);if(this[_0x353145(0x103)](_0x26f60e)<CONST['ENTITY_PERMISSIONS'][_0x353145(0x11a)])return _0x353145(0xd0)+(_0xa77812||_0x37ab88)+_0x353145(0xf3);const _0x42fed1=TextEditor[_0x353145(0xcd)](_0x9529b0,_0x296f4f,_0x37ab88,_0xa77812)[_0x353145(0x122)],_0x12436d=Config['get'](_0x353145(0xde),_0x353145(0xd9));if(_0x26f60e[_0x353145(0x110)][_0x353145(0x104)]==='image'){const _0xdade5=_0x26f60e[_0x353145(0xef)][_0x353145(0xc6)];return _0x353145(0x111)+_0x42fed1+this[_0x353145(0x107)](_0x12436d)+_0x353145(0x127)+(_0x12436d?'':_0x353145(0xf6))+_0x353145(0xd8)+_0xdade5+_0x353145(0x100)+_0xdade5+_0x353145(0x12b);}else{const _0x1b8b92=_0x441ce5===Patcher_TextEditor[_0x353145(0x113)][_0x353145(0xfb)],_0x27f4fd=_0x1b8b92?_0x26f60e[_0x353145(0xef)][_0x353145(0x138)]:TextEditor[_0x353145(0x130)](_0x26f60e['data'][_0x353145(0x138)],_0x4a6859,_0x441ce5+0x1);return _0x353145(0x111)+_0x42fed1+this[_0x353145(0x107)](_0x12436d)+'</div>\x0a\x09\x09\x09\x09'+(_0x1b8b92?_0x353145(0x105):'')+'\x0a\x09\x09\x09\x09<div\x20class=\x22w-100\x20jemb__wrp-content\x20'+(_0x12436d?'':'ve-hidden')+'\x22>'+_0x27f4fd+_0x353145(0xf4);}}static[_0x47bb40(0x103)](_0x5a99b3){const _0x1219e5=_0x47bb40;if(game[_0x1219e5(0xe1)][_0x1219e5(0x109)])return CONST[_0x1219e5(0xd6)][_0x1219e5(0x112)];return Math[_0x1219e5(0xfe)](_0x5a99b3[_0x1219e5(0xef)][_0x1219e5(0xcc)][game[_0x1219e5(0xe1)]['id']],_0x5a99b3[_0x1219e5(0xef)][_0x1219e5(0xcc)]['default']);}static[_0x47bb40(0x11d)](_0x763074,_0x299666){const _0x18a5d8=_0x47bb40;let _0x51a619=null;if(/^[a-zA-Z0-9]{16}$/[_0x18a5d8(0x11b)](_0x299666))_0x51a619=_0x763074[_0x18a5d8(0x12f)](_0x299666);if(!_0x51a619)_0x51a619=_0x763074[_0x18a5d8(0x12c)][_0x18a5d8(0xe7)](_0x557358=>_0x557358[_0x18a5d8(0xef)][_0x18a5d8(0xf1)]===_0x299666);return _0x51a619;}static[_0x47bb40(0xe8)](_0x26f4ad){const _0x33cf4c=_0x47bb40,_0x4a09ad=$(_0x26f4ad[_0x33cf4c(0xec)]),_0x326302=_0x4a09ad[_0x33cf4c(0xe3)]('data-plut-is-expanded')==='1';if(_0x26f4ad[_0x33cf4c(0x124)]){_0x26f4ad[_0x33cf4c(0xcf)]();const _0x36d2a5=_0x4a09ad['closest'](_0x33cf4c(0x132));_0x36d2a5[_0x33cf4c(0xe7)]('button[data-plut-is-expanded]')[_0x33cf4c(0xd5)]((_0x3f79d4,_0x400309)=>this[_0x33cf4c(0x133)]($(_0x400309),_0x326302));return;}this['_handleExpandCollapse'](_0x4a09ad,_0x326302);}static[_0x47bb40(0x133)](_0x2c8a0d,_0x1d1795){const _0xb2a804=_0x47bb40,_0x151974=_0x2c8a0d[_0xb2a804(0x101)]()[_0xb2a804(0x10e)]();_0x151974['toggleClass'](_0xb2a804(0xf6),_0x1d1795),_0x2c8a0d[_0xb2a804(0xe3)]('data-plut-is-expanded',_0x1d1795?'0':'1')['html'](_0x1d1795?'<i\x20class=\x22fa\x20fa-caret-square-left\x22></i>':_0xb2a804(0xd3))[_0xb2a804(0x131)]((_0x1d1795?'Expand':_0xb2a804(0xfd))+_0xb2a804(0xf8));}static[_0x47bb40(0x107)](_0x591a2c){const _0x5bdf85=_0x47bb40;return _0x5bdf85(0xeb)+(_0x591a2c?0x1:0x0)+_0x5bdf85(0x10d)+(_0x591a2c?_0x5bdf85(0xfd):_0x5bdf85(0xce))+'\x20Journal\x20Entry\x20(SHIFT\x20for\x20All\x20Entries)\x22\x20type=\x22button\x22>'+(_0x591a2c?_0x5bdf85(0xd3):_0x5bdf85(0xc8))+_0x5bdf85(0xea);}static[_0x47bb40(0xff)](_0x52e529){const _0x4488e0=_0x47bb40;for(let _0x2af051 of _0x52e529[_0x4488e0(0xf7)]('BUTTON')){if(_0x2af051['classList'][_0x4488e0(0x10f)](_0x4488e0(0xe4)))_0x2af051[_0x4488e0(0x119)](_0x4488e0(0x12d));}}},Patcher_TextEditor['Embed'][_0x47bb40(0xfb)]=0x45,Patcher_TextEditor[_0x47bb40(0xd2)]=class{static[_0x47bb40(0xdb)](_0x3616c3,_0x48fb62,_0x47f1f0,_0x528fbc,_0x2ead69,_0x306be1){const _0x1170e2=_0x47bb40,_0x4f1a7b=ChooseImporter[_0x1170e2(0xee)](_0x528fbc),_0x3ea2ef=Renderer[_0x1170e2(0xd1)](_0x2ead69)[0x0]||'';if(!_0x4f1a7b)return _0x1170e2(0xed)+_0x528fbc['qq']()+_0x1170e2(0x106)+StrUtil['qq'](_0x306be1||_0x3ea2ef)+_0x1170e2(0xf0);const _0x384656=CONFIG[_0x4f1a7b['folderType']];if(!_0x384656)return'<a\x20class=\x22entity-link\x20broken\x22\x20title=\x22No\x20CONFIG\x20found\x20for\x20type\x20&quot;'+_0x4f1a7b[_0x1170e2(0x12e)]+'&quot;—this\x20is\x20a\x20bug!\x22><i\x20class=\x22fas\x20fa-unlink\x22></i>\x20'+StrUtil['qq'](_0x306be1||_0x3ea2ef)+_0x1170e2(0xf0);const {displayText:_0x19cd32}=Renderer[_0x1170e2(0xc7)][_0x1170e2(0x120)](_0x2ead69,'@'+_0x528fbc);return _0x1170e2(0x11c)+_0x2ead69['qq']()+_0x1170e2(0xf5)+_0x528fbc['qq']()+'\x22\x20title=\x22Click\x20to\x20show.\x20SHIFT-click\x20to\x20import.\x22><i\x20class=\x22fas\x20'+_0x384656[_0x1170e2(0xe9)]+_0x1170e2(0xc9)+StrUtil['qq'](_0x19cd32||_0x306be1||_0x3ea2ef)+_0x1170e2(0xf0);}static[_0x47bb40(0x114)](_0x4ba556){const _0x3b730b=_0x47bb40;_0x4ba556[_0x3b730b(0x123)](),_0x4ba556[_0x3b730b(0xcf)]();const _0x122e1d=_0x4ba556['currentTarget'][_0x3b730b(0x135)][_0x3b730b(0xe0)],_0x151815=_0x4ba556[_0x3b730b(0xec)][_0x3b730b(0x135)]['plutRichLinkTag'];if(!_0x122e1d||!_0x151815)return;const _0x3c1e19=ChooseImporter[_0x3b730b(0xee)](_0x151815),{source:_0x1bc9f8,page:_0x357453,hash:_0x4320ee,hashPreEncoded:_0x498889,hashHover:_0x18826b,hashPreEncodedHover:_0x246281}=Renderer[_0x3b730b(0xc7)][_0x3b730b(0x120)](_0x122e1d,'@'+_0x151815);let _0x21c1c9=_0x4320ee;if(!_0x498889)_0x21c1c9=UrlUtil[_0x3b730b(0xc5)](_0x21c1c9);if(_0x18826b)_0x21c1c9=_0x18826b;if(_0x18826b&&!_0x246281)_0x21c1c9=UrlUtil[_0x3b730b(0xc5)](_0x21c1c9);const _0x21d689=!!_0x4ba556[_0x3b730b(0x124)];Renderer[_0x3b730b(0x129)]['pCacheAndGet'](_0x357453,_0x1bc9f8,_0x21c1c9)['then'](_0x2ed8b8=>{const _0x133155=_0x3b730b,_0x179501='Could\x20not\x20load\x20\x22'+_0x122e1d+_0x133155(0x116)+_0x151815+'\x22!';if(!_0x2ed8b8)return console[_0x133155(0xf2)](...LGT,_0x179501),ui['notifications'][_0x133155(0xf2)](_0x179501);_0x3c1e19[_0x133155(0x11e)](_0x2ed8b8,{'isTemp':!_0x21d689})['then'](_0x28709e=>{const _0x37695a=_0x133155;if(_0x21d689)UtilApplications['doShowImportedNotification'](_0x28709e);_0x28709e[_0x37695a(0x128)][_0x37695a(0x118)](_0x3c5f0f=>{const _0x3ef1ec=_0x37695a;if(_0x3c5f0f[_0x3ef1ec(0x110)])return _0x3c5f0f['sheet']['render'](!![]);_0x3c5f0f[_0x3ef1ec(0x117)](!![]);});})[_0x133155(0x136)](_0x1e1269=>{const _0x30cb80=_0x133155;console[_0x30cb80(0xf2)](...LGT,_0x1e1269),ui['notifications'][_0x30cb80(0xf2)](_0x179501+'\x20'+VeCt[_0x30cb80(0xdf)]);});});}};export{Patcher_TextEditor};
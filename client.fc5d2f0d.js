webpackJsonp([0,2],[,,function(e,n,t){e.exports=!t(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,n){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,n){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},function(e,n){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},,function(e,n){var t=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=t)},function(e,n){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,n,t){var r=t(32);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,n){var t=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:t)(e)}},function(e,n,t){var r=t(9),i=t(8);e.exports=function(e){return r(i(e))}},function(e,n,t){"use strict";var r=t(0),i=t.n(r),o=t(64),a=t.n(o),s=t(70),c=t.n(s),u=new i.a;u.model({name:"home",state:{active:0,total:6,jumping:!1},mutations:{NAVIGATE_DOWN:function(e){e.active++},NAVIGATE_TO:function(e,n){e.active=n},JUMP_START:function(e){e.jumping=!0},JUMP_END:function(e){e.jumping=!1}}}),u.router(function(e){return[e("/",c.a)]}),u.start(a.a,"#app"),u.$router.beforeEach(function(e,n,t){t(),ga("set","page",e),ga("send","pageview")})},function(e,n,t){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;e(n)}(function(e){function n(e){return e.replace(/[&<>]/gm,function(e){return T[e]})}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0===t.index}function i(e){return C.test(e)}function o(e){var n,t,r,o,a=e.className+" ";if(a+=e.parentNode?e.parentNode.className:"",t=N.exec(a))return E(t[1])?t[1]:"no-highlight";for(a=a.split(/\s+/),n=0,r=a.length;n<r;n++)if(o=a[n],i(o)||E(o))return o}function a(e,n){var t,r={};for(t in e)r[t]=e[t];if(n)for(t in n)r[t]=n[t];return r}function s(e){var n=[];return function e(r,i){for(var o=r.firstChild;o;o=o.nextSibling)3===o.nodeType?i+=o.nodeValue.length:1===o.nodeType&&(n.push({event:"start",offset:i,node:o}),i=e(o,i),t(o).match(/br|hr|img|input/)||n.push({event:"stop",offset:i,node:o}));return i}(e,0),n}function c(e,r,i){function o(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function a(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}l+="<"+t(e)+w.map.call(e.attributes,r).join("")+">"}function s(e){l+="</"+t(e)+">"}function c(e){("start"===e.event?a:s)(e.node)}for(var u=0,l="",f=[];e.length||r.length;){var d=o();if(l+=n(i.substr(u,d[0].offset-u)),u=d[0].offset,d===e){f.reverse().forEach(s);do c(d.splice(0,1)[0]),d=o();while(d===e&&d.length&&d[0].offset===u);f.reverse().forEach(a)}else"start"===d[0].event?f.push(d[0].node):f.pop(),c(d.splice(0,1)[0])}return l+n(i.substr(u))}function u(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}function r(i,o){if(!i.compiled){if(i.compiled=!0,i.keywords=i.keywords||i.beginKeywords,i.keywords){var s={},c=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");s[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof i.keywords?c("keyword",i.keywords):y(i.keywords).forEach(function(e){c(e,i.keywords[e])}),i.keywords=s}i.lexemesRe=t(i.lexemes||/\w+/,!0),o&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")\\b"),i.begin||(i.begin=/\B|\b/),i.beginRe=t(i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(i.endRe=t(i.end)),i.terminator_end=n(i.end)||"",i.endsWithParent&&o.terminator_end&&(i.terminator_end+=(i.end?"|":"")+o.terminator_end)),i.illegal&&(i.illegalRe=t(i.illegal)),null==i.relevance&&(i.relevance=1),i.contains||(i.contains=[]);var u=[];i.contains.forEach(function(e){e.variants?e.variants.forEach(function(n){u.push(a(e,n))}):u.push("self"===e?i:e)}),i.contains=u,i.contains.forEach(function(e){r(e,i)}),i.starts&&r(i.starts,o);var l=i.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([i.terminator_end,i.illegal]).map(n).filter(Boolean);i.terminators=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function l(e,t,i,o){function a(e,n){var t,i;for(t=0,i=n.contains.length;t<i;t++)if(r(n.contains[t].beginRe,e))return n.contains[t]}function s(e,n){if(r(e.endRe,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return s(e.parent,n)}function c(e,n){return!i&&r(n.illegalRe,e)}function d(e,n){var t=_.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function p(e,n,t,r){var i=r?"":S.classPrefix,o='<span class="'+i,a=t?"":O;return o+=e+'">',o+n+a}function h(){var e,t,r,i;if(!y.keywords)return n(N);for(i="",t=0,y.lexemesRe.lastIndex=0,r=y.lexemesRe.exec(N);r;)i+=n(N.substr(t,r.index-t)),e=d(y,r),e?(M+=e[1],i+=p(e[0],n(r[0]))):i+=n(r[0]),t=y.lexemesRe.lastIndex,r=y.lexemesRe.exec(N);return i+n(N.substr(t))}function g(){var e="string"==typeof y.subLanguage;if(e&&!x[y.subLanguage])return n(N);var t=e?l(y.subLanguage,N,!0,R[y.subLanguage]):f(N,y.subLanguage.length?y.subLanguage:void 0);return y.relevance>0&&(M+=t.relevance),e&&(R[y.subLanguage]=t.top),p(t.language,t.value,!1,!0)}function v(){C+=null!=y.subLanguage?g():h(),N=""}function m(e){C+=e.className?p(e.className,"",!0):"",y=Object.create(e,{parent:{value:y}})}function b(e,n){if(N+=e,null==n)return v(),0;var t=a(n,y);if(t)return t.skip?N+=n:(t.excludeBegin&&(N+=n),v(),t.returnBegin||t.excludeBegin||(N=n)),m(t,n),t.returnBegin?0:n.length;var r=s(y,n);if(r){var i=y;i.skip?N+=n:(i.returnEnd||i.excludeEnd||(N+=n),v(),i.excludeEnd&&(N=n));do y.className&&(C+=O),y.skip||(M+=y.relevance),y=y.parent;while(y!==r.parent);return r.starts&&m(r.starts,""),i.returnEnd?0:n.length}if(c(n,y))throw new Error('Illegal lexeme "'+n+'" for mode "'+(y.className||"<unnamed>")+'"');return N+=n,n.length||1}var _=E(e);if(!_)throw new Error('Unknown language: "'+e+'"');u(_);var w,y=o||_,R={},C="";for(w=y;w!==_;w=w.parent)w.className&&(C=p(w.className,"",!0)+C);var N="",M=0;try{for(var T,A,k=0;;){if(y.terminators.lastIndex=k,T=y.terminators.exec(t),!T)break;A=b(t.substr(k,T.index-k),T[0]),k=T.index+A}for(b(t.substr(k)),w=y;w.parent;w=w.parent)w.className&&(C+=O);return{relevance:M,value:C,language:e,top:y}}catch(e){if(e.message&&e.message.indexOf("Illegal")!==-1)return{relevance:0,value:n(t)};throw e}}function f(e,t){t=t||S.languages||y(x);var r={relevance:0,value:n(e)},i=r;return t.filter(E).forEach(function(n){var t=l(n,e,!1);t.language=n,t.relevance>i.relevance&&(i=t),t.relevance>r.relevance&&(i=r,r=t)}),i.language&&(r.second_best=i),r}function d(e){return S.tabReplace||S.useBR?e.replace(M,function(e,n){return S.useBR&&"\n"===e?"<br>":S.tabReplace?n.replace(/\t/g,S.tabReplace):void 0}):e}function p(e,n,t){var r=n?R[n]:t,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),e.indexOf(r)===-1&&i.push(r),i.join(" ").trim()}function h(e){var n,t,r,a,u,h=o(e);i(h)||(S.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e,u=n.textContent,r=h?l(h,u,!0):f(u),t=s(n),t.length&&(a=document.createElementNS("http://www.w3.org/1999/xhtml","div"),a.innerHTML=r.value,r.value=c(t,s(a),u)),r.value=d(r.value),e.innerHTML=r.value,e.className=p(e.className,h,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function g(e){S=a(S,e)}function v(){if(!v.called){v.called=!0;var e=document.querySelectorAll("pre code");w.forEach.call(e,h)}}function m(){addEventListener("DOMContentLoaded",v,!1),addEventListener("load",v,!1)}function b(n,t){var r=x[n]=t(e);r.aliases&&r.aliases.forEach(function(e){R[e]=n})}function _(){return y(x)}function E(e){return e=(e||"").toLowerCase(),x[e]||x[R[e]]}var w=[],y=Object.keys,x={},R={},C=/^(no-?highlight|plain|text)$/i,N=/\blang(?:uage)?-([\w-]+)\b/i,M=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,O="</span>",S={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},T={"&":"&amp;","<":"&lt;",">":"&gt;"};return e.highlight=l,e.highlightAuto=f,e.fixMarkup=d,e.highlightBlock=h,e.configure=g,e.initHighlighting=v,e.initHighlightingOnLoad=m,e.registerLanguage=b,e.listLanguages=_,e.getLanguage=E,e.inherit=a,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.COMMENT=function(n,t,r){var i=e.inherit({className:"comment",begin:n,end:t,contains:[]},r||{});return i.contains.push(e.PHRASAL_WORDS_MODE),i.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),i},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e})},function(e,n){e.exports=function(e){var n={className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{(.*?)}/}]},t={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,{className:"variable",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]}]},r={className:"string",begin:/'/,end:/'/};return{aliases:["sh","zsh"],lexemes:/-?[a-z\._]+/,keywords:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},contains:[{className:"meta",begin:/^#![^\n]+sh\s*$/,relevance:10},{className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},e.HASH_COMMENT_MODE,t,r,n]}}},function(e,n){e.exports=function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},r={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},i={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},o={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,i]};i.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,r,e.REGEXP_MODE];var a=i.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:a}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:a}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},,,,,function(e,n,t){"use strict";var r=t(13),i=t.n(r);i.a.registerLanguage("javascript",t(15)),i.a.registerLanguage("bash",t(14)),n.default={props:{code:String},computed:{highlightedCode:function(){var e=this.code||this.$slots.default[0].text;return i.a.highlightAuto(e).value}}}},function(e,n,t){"use strict";n.default={data:function(){return{count:0}}}},function(e,n,t){"use strict";var r=t(1),i=t.n(r);n.default={props:{to:String},methods:{jumpTo:function(){i()(this.to)}}}},function(e,n,t){"use strict";var r=t(1),i=t.n(r);n.default={props:{active:Number,total:Number},methods:{navigateTo:function(e){var n=this;this.$store.commit("JUMP_START"),i()("#slide"+e,{callback:function(){n.$store.commit("NAVIGATE_TO",e),n.$store.commit("JUMP_END")}})}}}},function(e,n,t){"use strict";n.default={props:{title:String,browser:Boolean}}},function(e,n,t){"use strict";var r=t(27),i=t.n(r),o=t(0),a=(t.n(o),t(6)),s=t.n(a),c=t(69),u=t.n(c),l=t(65),f=t.n(l),d=t(67),p=t.n(d),h=t(66),g=t.n(h),v=t(68),m=t.n(v);n.default={name:"home",data:function(){return{exampleCode:"// My App Entry\nimport Vue from 'vue'\nimport Counter from './components/Counter.vue'\n\nnew Vue({\n  el: '#app',\n  render: h => h(Counter)\n})",exampleCommand:"$ npm install -g vbuild\n$ ~/my-project vbuild --dev\n\n> vbuild app is running at http://localhost:4000",configExampleCode:'// In fact, there\'re few things you need to config!\n{\n  "title": "My Awesome Project",\n  "dist": "./public",\n  "postcss": {\n    "use": ["postcss-mixins", "postcss-simple-vars"],\n    "autoprefixer": {\n      "browsers": ["ie > 10"]\n    }\n  }\n  // ...\n}'}},computed:i()({},t.i(o.mapState)(["home"])),created:function(){document.title="vbuild: Install once, Build everywhere"},mounted:function(){for(var e=this,n=function(n){s()("#slide"+n+" h1").on("enter",function(){e.home.jumping||e.$store.commit("NAVIGATE_TO",n)})},t=0;t<this.home.total;t++)n(t)},components:{CodeBlock:f.a,Jump:p.a,Window:u.a,Counter:g.a,SlideIndicator:m.a}}},function(e,n,t){e.exports={default:t(28),__esModule:!0}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var i=t(26),o=r(i);n.default=o.default||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}},function(e,n,t){t(54),e.exports=t(7).Object.assign},function(e,n){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,n,t){var r=t(5);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,n,t){var r=t(11),i=t(50),o=t(49);e.exports=function(e){return function(n,t,a){var s,c=r(n),u=i(c.length),l=o(a,u);if(e&&t!=t){for(;u>l;)if(s=c[l++],s!=s)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===t)return e||l||0;return!e&&-1}}},function(e,n){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},function(e,n,t){var r=t(29);e.exports=function(e,n,t){if(r(e),void 0===n)return e;switch(t){case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,i){return e.call(n,t,r,i)}}return function(){return e.apply(n,arguments)}}},function(e,n,t){var r=t(5),i=t(4).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},function(e,n){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,n,t){var r=t(4),i=t(7),o=t(33),a=t(38),s="prototype",c=function(e,n,t){var u,l,f,d=e&c.F,p=e&c.G,h=e&c.S,g=e&c.P,v=e&c.B,m=e&c.W,b=p?i:i[n]||(i[n]={}),_=b[s],E=p?r:h?r[n]:(r[n]||{})[s];p&&(t=n);for(u in t)l=!d&&E&&void 0!==E[u],l&&u in b||(f=l?E[u]:t[u],b[u]=p&&"function"!=typeof E[u]?t[u]:v&&l?o(f,r):m&&E[u]==f?function(e){var n=function(n,t,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(n);case 2:return new e(n,t)}return new e(n,t,r)}return e.apply(this,arguments)};return n[s]=e[s],n}(f):g&&"function"==typeof f?o(Function.call,f):f,g&&((b.virtual||(b.virtual={}))[u]=f,e&c.R&&_&&!_[u]&&a(_,u,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,n){var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},function(e,n,t){var r=t(41),i=t(46);e.exports=t(2)?function(e,n,t){return r.f(e,n,i(1,t))}:function(e,n,t){return e[n]=t,e}},function(e,n,t){e.exports=!t(2)&&!t(3)(function(){return 7!=Object.defineProperty(t(34)("div"),"a",{get:function(){return 7}}).a})},function(e,n,t){"use strict";var r=t(44),i=t(42),o=t(45),a=t(51),s=t(9),c=Object.assign;e.exports=!c||t(3)(function(){var e={},n={},t=Symbol(),r="abcdefghijklmnopqrst";return e[t]=7,r.split("").forEach(function(e){n[e]=e}),7!=c({},e)[t]||Object.keys(c({},n)).join("")!=r})?function(e,n){for(var t=a(e),c=arguments.length,u=1,l=i.f,f=o.f;c>u;)for(var d,p=s(arguments[u++]),h=l?r(p).concat(l(p)):r(p),g=h.length,v=0;g>v;)f.call(p,d=h[v++])&&(t[d]=p[d]);return t}:c},function(e,n,t){var r=t(30),i=t(39),o=t(52),a=Object.defineProperty;n.f=t(2)?Object.defineProperty:function(e,n,t){if(r(e),n=o(n,!0),r(t),i)try{return a(e,n,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[n]=t.value),e}},function(e,n){n.f=Object.getOwnPropertySymbols},function(e,n,t){var r=t(37),i=t(11),o=t(31)(!1),a=t(47)("IE_PROTO");e.exports=function(e,n){var t,s=i(e),c=0,u=[];for(t in s)t!=a&&r(s,t)&&u.push(t);for(;n.length>c;)r(s,t=n[c++])&&(~o(u,t)||u.push(t));return u}},function(e,n,t){var r=t(43),i=t(35);e.exports=Object.keys||function(e){return r(e,i)}},function(e,n){n.f={}.propertyIsEnumerable},function(e,n){e.exports=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}}},function(e,n,t){var r=t(48)("keys"),i=t(53);e.exports=function(e){return r[e]||(r[e]=i(e))}},function(e,n,t){var r=t(4),i="__core-js_shared__",o=r[i]||(r[i]={});e.exports=function(e){return o[e]||(o[e]={})}},function(e,n,t){var r=t(10),i=Math.max,o=Math.min;e.exports=function(e,n){return e=r(e),e<0?i(e+n,0):o(e,n)}},function(e,n,t){var r=t(10),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},function(e,n,t){var r=t(8);e.exports=function(e){return Object(r(e))}},function(e,n,t){var r=t(5);e.exports=function(e,n){if(!r(e))return e;var t,i;if(n&&"function"==typeof(t=e.toString)&&!r(i=t.call(e)))return i;if("function"==typeof(t=e.valueOf)&&!r(i=t.call(e)))return i;if(!n&&"function"==typeof(t=e.toString)&&!r(i=t.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,n){var t=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+r).toString(36))}},function(e,n,t){var r=t(36);r(r.S+r.F,"Object",{assign:t(40)})},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},,function(e,n,t){var r,i;t(59);var o=t(74);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=r},function(e,n,t){var r,i;t(61),r=t(20);var o=t(76);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=r},function(e,n,t){var r,i;t(60),r=t(21);var o=t(75);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=r},function(e,n,t){var r,i;t(57),r=t(22);var o=t(72);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=r},function(e,n,t){var r,i;t(58),r=t(23);var o=t(73);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=r},function(e,n,t){var r,i;t(62),r=t(24);var o=t(77);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=r},function(e,n,t){var r,i;t(55),t(56),r=t(25);var o=t(71);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-081e412e",e.exports=r},function(e,n){e.exports={render:function(){var e=this;return e._h("div",{staticClass:"page"},[e._h("slide-indicator",{attrs:{active:e.home.active,total:e.home.total}})," ",e._h("section",{staticClass:"slide",attrs:{id:"slide0"}},[e._m(0)," ",e._h("div",{staticClass:"actions"},[e._h("a",{staticClass:"btn",staticStyle:{"margin-right":"10px"},attrs:{href:"https://github.com/egoist/vbuild"}},[e._h("svg",{attrs:{id:"i-github",viewBox:"0 0 64 64",width:"32",height:"32"}},[e._h("path",{attrs:{"stroke-width":"0",fill:"currentColor",d:"M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"}})]),"Star me on GitHub"])," ",e._h("a",{staticClass:"btn",attrs:{href:"/docs"}},[e._h("svg",{attrs:{id:"i-book",viewBox:"0 0 32 32",width:"32",height:"32",fill:"none",stroke:"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"6.25%"}},[e._h("path",{attrs:{d:"M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28"}})])," Read the Guide"])])," ",e._h("jump",{attrs:{to:"#slide1"}})])," ",e._h("section",{staticClass:"slide",attrs:{id:"slide1"}},[e._m(1)," ",e._h("window",{attrs:{title:"~/my-project/src/index.js"}},[e._h("code-block",{attrs:{code:e.exampleCode}})])," ",e._h("jump",{attrs:{to:"#slide2"}})])," ",e._h("section",{staticClass:"slide",attrs:{id:"slide2"}},[e._m(2)," ",e._h("window",{attrs:{title:"Terminal"}},[e._h("code-block",{attrs:{code:e.exampleCommand}})])," ",e._h("jump",{attrs:{to:"#slide3"}})])," ",e._h("section",{staticClass:"slide",attrs:{id:"slide3"}},[e._h("h1",["And Boom!!!"])," ",e._h("window",{attrs:{title:"http://localhost:4000",browser:""}},[e._h("counter")])," ",e._h("jump",{attrs:{to:"#slide4"}})])," ",e._h("section",{staticClass:"slide",attrs:{id:"slide4"}},[e._h("h1",["Optionally, config file, the easy way"])," ",e._h("window",{attrs:{title:"~/my-project/vue.config.json"}},[e._h("code-block",{attrs:{code:e.configExampleCode}})])," ",e._h("jump",{attrs:{to:"#slide5"}})])," ",e._h("section",{staticClass:"slide",attrs:{id:"slide5"}},[e._h("h1",["Almost There!"])," ",e._h("a",{staticClass:"btn",attrs:{href:"/docs"}},[e._h("svg",{attrs:{id:"i-book",viewBox:"0 0 32 32",width:"32",height:"32",fill:"none",stroke:"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"6.25%"}},[e._h("path",{attrs:{d:"M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28"}})])," Read the Guide"])])])},staticRenderFns:[function(){var e=this;return e._h("h1",{staticClass:"site-name"},[e._h("span",{staticClass:"title"},[e._h("strong",["vbuild:"])," Install once, Build everywhere"]),e._h("br")," ",e._h("span",{staticClass:"description"},["Vue happiness build tool"])])},function(){var e=this;return e._h("h1",["\n        Start by writing your app directly",e._h("br")," ",e._h("span",{staticClass:"description"},["time is money!"])])},function(){var e=this;return e._h("h1",["Run a single command to develop it",e._h("br")," ",e._h("span",{staticClass:"description"},["with hot reloading or live reloading"])])}]}},function(e,n){e.exports={render:function(){var e=this;return e._h("div",{staticClass:"jump",on:{click:e.jumpTo}},[e._h("svg",{attrs:{id:"i-chevron-bottom",viewBox:"0 0 32 32",width:"32",height:"32",fill:"none",stroke:"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"6.25%"}},[e._h("path",{attrs:{d:"M30 12 L16 24 2 12"}})])])},staticRenderFns:[]}},function(e,n){e.exports={render:function(){var e=this;return e._h("div",{staticClass:"indicators"},[e._l(e.total,function(n,t){return e._h("span",{staticClass:"indicator",class:{active:e.active===t},on:{click:function(n){e.navigateTo(t)}}})})])},staticRenderFns:[]}},function(e,n){e.exports={render:function(){var e=this;return e._h("div",{attrs:{id:"app"}},[e._h("router-view")])},staticRenderFns:[]}},function(e,n){e.exports={render:function(){var e=this;return e._h("div",{staticClass:"counter",on:{click:function(n){e.count++}}},["\n  "+e._s(e.count||"Just Click Me!")+"\n"])},staticRenderFns:[]}},function(e,n){e.exports={render:function(){var e=this;return e._h("pre",[e._h("code",{domProps:{innerHTML:e._s(e.highlightedCode)}})])},staticRenderFns:[]}},function(e,n){e.exports={render:function(){var e=this;return e._h("div",{staticClass:"window",class:{browser:e.browser}},[e._h("div",{staticClass:"header"},[e._m(0)," ",e._h("span",{staticClass:"title"},[e._s(e.title)])])," ",e._h("div",{staticClass:"body"},[e._t("default")])])},staticRenderFns:[function(){var e=this;return e._h("div",{staticClass:"bullets"},[e._h("span",{staticClass:"bullet bullet-red"})," ",e._h("span",{staticClass:"bullet bullet-yellow"})," ",e._h("span",{staticClass:"bullet bullet-green"})])}]}},function(e,n,t){e.exports=t(12)}],[78]);
//# sourceMappingURL=client.fc5d2f0d.js.map
import{_ as Se}from"../chunks/preload-helper-a069e731.js";import{S as W,i as U,s as Z,e as L,t as j,k as X,c as z,a as A,h as q,d as _,m as Y,b,g as O,F as x,E as P,v as ie,G as he,w as ee,x as se,y as te,q as B,o as G,B as ne,H as M,I as N,J as Ce,n as _e,p as xe,K as Ie,L as Le,M as ze,N as Te,O as Pe}from"../chunks/index-44742a5b.js";function He(v){let r,t,u,c,n,a,e,i;return{c(){r=L("div"),t=L("div"),u=L("div"),c=L("h3"),n=j("Javascript developer"),a=X(),e=L("p"),i=j(`Hello, I'm Austin, a web developer with a primary focus in React development. I'm confident\r
				in working with the various MERN stack technologies and I'm on a persistent journey in\r
				honing my craft in web development.`),this.h()},l(o){r=z(o,"DIV",{class:!0});var h=A(r);t=z(h,"DIV",{class:!0});var w=A(t);u=z(w,"DIV",{class:!0});var p=A(u);c=z(p,"H3",{class:!0});var $=A(c);n=q($,"Javascript developer"),$.forEach(_),a=Y(p),e=z(p,"P",{class:!0});var C=A(e);i=q(C,`Hello, I'm Austin, a web developer with a primary focus in React development. I'm confident\r
				in working with the various MERN stack technologies and I'm on a persistent journey in\r
				honing my craft in web development.`),C.forEach(_),p.forEach(_),w.forEach(_),h.forEach(_),this.h()},h(){b(c,"class","main-header svelte-8aye6s"),b(e,"class","description svelte-8aye6s"),b(u,"class","text-container svelte-8aye6s"),b(t,"class","text-content"),b(r,"class","container svelte-8aye6s")},m(o,h){O(o,r,h),x(r,t),x(t,u),x(u,c),x(c,n),x(u,a),x(u,e),x(e,i)},p:P,i:P,o:P,d(o){o&&_(r)}}}class De extends W{constructor(r){super(),U(this,r,null,He,Z,{})}}var me=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ae={exports:{}};(function(v){var r=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(u){var c=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,a={},e={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function l(s){return s instanceof i?new i(s.type,l(s.content),s.alias):Array.isArray(s)?s.map(l):s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).slice(8,-1)},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++n}),l.__id},clone:function l(s,d){d=d||{};var g,f;switch(e.util.type(s)){case"Object":if(f=e.util.objId(s),d[f])return d[f];g={},d[f]=g;for(var y in s)s.hasOwnProperty(y)&&(g[y]=l(s[y],d));return g;case"Array":return f=e.util.objId(s),d[f]?d[f]:(g=[],d[f]=g,s.forEach(function(E,m){g[m]=l(E,d)}),g);default:return s}},getLanguage:function(l){for(;l;){var s=c.exec(l.className);if(s)return s[1].toLowerCase();l=l.parentElement}return"none"},setLanguage:function(l,s){l.className=l.className.replace(RegExp(c,"gi"),""),l.classList.add("language-"+s)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(g){var l=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(g.stack)||[])[1];if(l){var s=document.getElementsByTagName("script");for(var d in s)if(s[d].src==l)return s[d]}return null}},isActive:function(l,s,d){for(var g="no-"+s;l;){var f=l.classList;if(f.contains(s))return!0;if(f.contains(g))return!1;l=l.parentElement}return!!d}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(l,s){var d=e.util.clone(e.languages[l]);for(var g in s)d[g]=s[g];return d},insertBefore:function(l,s,d,g){g=g||e.languages;var f=g[l],y={};for(var E in f)if(f.hasOwnProperty(E)){if(E==s)for(var m in d)d.hasOwnProperty(m)&&(y[m]=d[m]);d.hasOwnProperty(E)||(y[E]=f[E])}var S=g[l];return g[l]=y,e.languages.DFS(e.languages,function(T,D){D===S&&T!=l&&(this[T]=y)}),y},DFS:function l(s,d,g,f){f=f||{};var y=e.util.objId;for(var E in s)if(s.hasOwnProperty(E)){d.call(s,E,s[E],g||E);var m=s[E],S=e.util.type(m);S==="Object"&&!f[y(m)]?(f[y(m)]=!0,l(m,d,null,f)):S==="Array"&&!f[y(m)]&&(f[y(m)]=!0,l(m,d,E,f))}}},plugins:{},highlightAll:function(l,s){e.highlightAllUnder(document,l,s)},highlightAllUnder:function(l,s,d){var g={callback:d,container:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};e.hooks.run("before-highlightall",g),g.elements=Array.prototype.slice.apply(g.container.querySelectorAll(g.selector)),e.hooks.run("before-all-elements-highlight",g);for(var f=0,y;y=g.elements[f++];)e.highlightElement(y,s===!0,g.callback)},highlightElement:function(l,s,d){var g=e.util.getLanguage(l),f=e.languages[g];e.util.setLanguage(l,g);var y=l.parentElement;y&&y.nodeName.toLowerCase()==="pre"&&e.util.setLanguage(y,g);var E=l.textContent,m={element:l,language:g,grammar:f,code:E};function S(D){m.highlightedCode=D,e.hooks.run("before-insert",m),m.element.innerHTML=m.highlightedCode,e.hooks.run("after-highlight",m),e.hooks.run("complete",m),d&&d.call(m.element)}if(e.hooks.run("before-sanity-check",m),y=m.element.parentElement,y&&y.nodeName.toLowerCase()==="pre"&&!y.hasAttribute("tabindex")&&y.setAttribute("tabindex","0"),!m.code){e.hooks.run("complete",m),d&&d.call(m.element);return}if(e.hooks.run("before-highlight",m),!m.grammar){S(e.util.encode(m.code));return}if(s&&u.Worker){var T=new Worker(e.filename);T.onmessage=function(D){S(D.data)},T.postMessage(JSON.stringify({language:m.language,code:m.code,immediateClose:!0}))}else S(e.highlight(m.code,m.grammar,m.language))},highlight:function(l,s,d){var g={code:l,grammar:s,language:d};if(e.hooks.run("before-tokenize",g),!g.grammar)throw new Error('The language "'+g.language+'" has no grammar.');return g.tokens=e.tokenize(g.code,g.grammar),e.hooks.run("after-tokenize",g),i.stringify(e.util.encode(g.tokens),g.language)},tokenize:function(l,s){var d=s.rest;if(d){for(var g in d)s[g]=d[g];delete s.rest}var f=new w;return p(f,f.head,l),h(l,f,s,f.head,0),C(f)},hooks:{all:{},add:function(l,s){var d=e.hooks.all;d[l]=d[l]||[],d[l].push(s)},run:function(l,s){var d=e.hooks.all[l];if(!(!d||!d.length))for(var g=0,f;f=d[g++];)f(s)}},Token:i};u.Prism=e;function i(l,s,d,g){this.type=l,this.content=s,this.alias=d,this.length=(g||"").length|0}i.stringify=function l(s,d){if(typeof s=="string")return s;if(Array.isArray(s)){var g="";return s.forEach(function(S){g+=l(S,d)}),g}var f={type:s.type,content:l(s.content,d),tag:"span",classes:["token",s.type],attributes:{},language:d},y=s.alias;y&&(Array.isArray(y)?Array.prototype.push.apply(f.classes,y):f.classes.push(y)),e.hooks.run("wrap",f);var E="";for(var m in f.attributes)E+=" "+m+'="'+(f.attributes[m]||"").replace(/"/g,"&quot;")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'"'+E+">"+f.content+"</"+f.tag+">"};function o(l,s,d,g){l.lastIndex=s;var f=l.exec(d);if(f&&g&&f[1]){var y=f[1].length;f.index+=y,f[0]=f[0].slice(y)}return f}function h(l,s,d,g,f,y){for(var E in d)if(!(!d.hasOwnProperty(E)||!d[E])){var m=d[E];m=Array.isArray(m)?m:[m];for(var S=0;S<m.length;++S){if(y&&y.cause==E+","+S)return;var T=m[S],D=T.inside,re=!!T.lookbehind,K=!!T.greedy,$e=T.alias;if(K&&!T.pattern.global){var Ee=T.pattern.toString().match(/[imsuy]*$/)[0];T.pattern=RegExp(T.pattern.source,Ee+"g")}for(var pe=T.pattern||T,H=g.next,R=f;H!==s.tail&&!(y&&R>=y.reach);R+=H.value.length,H=H.next){var Q=H.value;if(s.length>l.length)return;if(!(Q instanceof i)){var le=1,V;if(K){if(V=o(pe,R,l,re),!V||V.index>=l.length)break;var oe=V.index,Fe=V.index+V[0].length,J=R;for(J+=H.value.length;oe>=J;)H=H.next,J+=H.value.length;if(J-=H.value.length,R=J,H.value instanceof i)continue;for(var ae=H;ae!==s.tail&&(J<Fe||typeof ae.value=="string");ae=ae.next)le++,J+=ae.value.length;le--,Q=l.slice(R,J),V.index-=R}else if(V=o(pe,0,Q,re),!V)continue;var oe=V.index,ue=V[0],de=Q.slice(0,oe),ve=Q.slice(oe+ue.length),ge=R+Q.length;y&&ge>y.reach&&(y.reach=ge);var ce=H.prev;de&&(ce=p(s,ce,de),R+=de.length),$(s,ce,le);var ke=new i(E,D?e.tokenize(ue,D):ue,$e,ue);if(H=p(s,ce,ke),ve&&p(s,H,ve),le>1){var fe={cause:E+","+S,reach:ge};h(l,s,d,H.prev,R,fe),y&&fe.reach>y.reach&&(y.reach=fe.reach)}}}}}}function w(){var l={value:null,prev:null,next:null},s={value:null,prev:l,next:null};l.next=s,this.head=l,this.tail=s,this.length=0}function p(l,s,d){var g=s.next,f={value:d,prev:s,next:g};return s.next=f,g.prev=f,l.length++,f}function $(l,s,d){for(var g=s.next,f=0;f<d&&g!==l.tail;f++)g=g.next;s.next=g,g.prev=s,l.length-=f}function C(l){for(var s=[],d=l.head.next;d!==l.tail;)s.push(d.value),d=d.next;return s}if(!u.document)return u.addEventListener&&(e.disableWorkerMessageHandler||u.addEventListener("message",function(l){var s=JSON.parse(l.data),d=s.language,g=s.code,f=s.immediateClose;u.postMessage(e.highlight(g,e.languages[d],d)),f&&u.close()},!1)),e;var F=e.util.currentScript();F&&(e.filename=F.src,F.hasAttribute("data-manual")&&(e.manual=!0));function k(){e.manual||e.highlightAll()}if(!e.manual){var I=document.readyState;I==="loading"||I==="interactive"&&F&&F.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return e}(r);v.exports&&(v.exports=t),typeof me!="undefined"&&(me.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(u){u.type==="entity"&&(u.attributes.title=u.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(c,n){var a={};a["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[n]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var e={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};e["language-"+n]={pattern:/[\s\S]+/,inside:t.languages[n]};var i={};i[c]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:e},t.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(u,c){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+u+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:t.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(u){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;u.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},u.languages.css.atrule.inside.rest=u.languages.css;var n=u.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var u="Loading\u2026",c=function(F,k){return"\u2716 Error "+F+" while fetching file: "+k},n="\u2716 Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},e="data-src-status",i="loading",o="loaded",h="failed",w="pre[data-src]:not(["+e+'="'+o+'"]):not(['+e+'="'+i+'"])';function p(F,k,I){var l=new XMLHttpRequest;l.open("GET",F,!0),l.onreadystatechange=function(){l.readyState==4&&(l.status<400&&l.responseText?k(l.responseText):l.status>=400?I(c(l.status,l.statusText)):I(n))},l.send(null)}function $(F){var k=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(F||"");if(k){var I=Number(k[1]),l=k[2],s=k[3];return l?s?[I,Number(s)]:[I,void 0]:[I,I]}}t.hooks.add("before-highlightall",function(F){F.selector+=", "+w}),t.hooks.add("before-sanity-check",function(F){var k=F.element;if(k.matches(w)){F.code="",k.setAttribute(e,i);var I=k.appendChild(document.createElement("CODE"));I.textContent=u;var l=k.getAttribute("data-src"),s=F.language;if(s==="none"){var d=(/\.(\w+)$/.exec(l)||[,"none"])[1];s=a[d]||d}t.util.setLanguage(I,s),t.util.setLanguage(k,s);var g=t.plugins.autoloader;g&&g.loadLanguages(s),p(l,function(f){k.setAttribute(e,o);var y=$(k.getAttribute("data-range"));if(y){var E=f.split(/\r\n?|\n/g),m=y[0],S=y[1]==null?E.length:y[1];m<0&&(m+=E.length),m=Math.max(0,Math.min(m-1,E.length)),S<0&&(S+=E.length),S=Math.max(0,Math.min(S,E.length)),f=E.slice(m,S).join(`
`),k.hasAttribute("data-start")||k.setAttribute("data-start",String(m+1))}I.textContent=f,t.highlightElement(I)},function(f){k.setAttribute(e,h),I.textContent=f})}}),t.plugins.fileHighlight={highlight:function(k){for(var I=(k||document).querySelectorAll(w),l=0,s;s=I[l++];)t.highlightElement(s)}};var C=!1;t.fileHighlight=function(){C||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),C=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Ae);var Me=Ae.exports;(function(){if(typeof Prism=="undefined"||typeof document=="undefined")return;var v="line-numbers",r=/\n(?!$)/g,t=Prism.plugins.lineNumbers={getLine:function(a,e){if(!(a.tagName!=="PRE"||!a.classList.contains(v))){var i=a.querySelector(".line-numbers-rows");if(!!i){var o=parseInt(a.getAttribute("data-start"),10)||1,h=o+(i.children.length-1);e<o&&(e=o),e>h&&(e=h);var w=e-o;return i.children[w]}}},resize:function(a){u([a])},assumeViewportIndependence:!0};function u(a){if(a=a.filter(function(i){var o=c(i),h=o["white-space"];return h==="pre-wrap"||h==="pre-line"}),a.length!=0){var e=a.map(function(i){var o=i.querySelector("code"),h=i.querySelector(".line-numbers-rows");if(!(!o||!h)){var w=i.querySelector(".line-numbers-sizer"),p=o.textContent.split(r);w||(w=document.createElement("span"),w.className="line-numbers-sizer",o.appendChild(w)),w.innerHTML="0",w.style.display="block";var $=w.getBoundingClientRect().height;return w.innerHTML="",{element:i,lines:p,lineHeights:[],oneLinerHeight:$,sizer:w}}}).filter(Boolean);e.forEach(function(i){var o=i.sizer,h=i.lines,w=i.lineHeights,p=i.oneLinerHeight;w[h.length-1]=void 0,h.forEach(function($,C){if($&&$.length>1){var F=o.appendChild(document.createElement("span"));F.style.display="block",F.textContent=$}else w[C]=p})}),e.forEach(function(i){for(var o=i.sizer,h=i.lineHeights,w=0,p=0;p<h.length;p++)h[p]===void 0&&(h[p]=o.children[w++].getBoundingClientRect().height)}),e.forEach(function(i){var o=i.sizer,h=i.element.querySelector(".line-numbers-rows");o.style.display="none",o.innerHTML="",i.lineHeights.forEach(function(w,p){h.children[p].style.height=w+"px"})})}}function c(a){return a?window.getComputedStyle?getComputedStyle(a):a.currentStyle||null:null}var n=void 0;window.addEventListener("resize",function(){t.assumeViewportIndependence&&n===window.innerWidth||(n=window.innerWidth,u(Array.prototype.slice.call(document.querySelectorAll("pre."+v))))}),Prism.hooks.add("complete",function(a){if(!!a.code){var e=a.element,i=e.parentNode;if(!(!i||!/pre/i.test(i.nodeName))&&!e.querySelector(".line-numbers-rows")&&!!Prism.util.isActive(e,v)){e.classList.remove(v),i.classList.add(v);var o=a.code.match(r),h=o?o.length+1:1,w,p=new Array(h+1).join("<span></span>");w=document.createElement("span"),w.setAttribute("aria-hidden","true"),w.className="line-numbers-rows",w.innerHTML=p,i.hasAttribute("data-start")&&(i.style.counterReset="linenumber "+(parseInt(i.getAttribute("data-start"),10)-1)),a.element.appendChild(w),u([i]),Prism.hooks.run("line-numbers",a)}}}),Prism.hooks.add("line-numbers",function(a){a.plugins=a.plugins||{},a.plugins.lineNumbers=!0})})();var Ne={exports:{}};(function(v){(function(){if(typeof Prism=="undefined")return;var r=Object.assign||function(n,a){for(var e in a)a.hasOwnProperty(e)&&(n[e]=a[e]);return n};function t(n){this.defaults=r({},n)}function u(n){return n.replace(/-(\w)/g,function(a,e){return e.toUpperCase()})}function c(n){for(var a=0,e=0;e<n.length;++e)n.charCodeAt(e)=="	".charCodeAt(0)&&(a+=3);return n.length+a}t.prototype={setDefaults:function(n){this.defaults=r(this.defaults,n)},normalize:function(n,a){a=r(this.defaults,a);for(var e in a){var i=u(e);e!=="normalize"&&i!=="setDefaults"&&a[e]&&this[i]&&(n=this[i].call(this,n,a[e]))}return n},leftTrim:function(n){return n.replace(/^\s+/,"")},rightTrim:function(n){return n.replace(/\s+$/,"")},tabsToSpaces:function(n,a){return a=a|0||4,n.replace(/\t/g,new Array(++a).join(" "))},spacesToTabs:function(n,a){return a=a|0||4,n.replace(RegExp(" {"+a+"}","g"),"	")},removeTrailing:function(n){return n.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(n){return n.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(n){var a=n.match(/^[^\S\n\r]*(?=\S)/gm);return!a||!a[0].length||(a.sort(function(e,i){return e.length-i.length}),!a[0].length)?n:n.replace(RegExp("^"+a[0],"gm"),"")},indent:function(n,a){return n.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++a).join("	")+"$&")},breakLines:function(n,a){a=a===!0?80:a|0||80;for(var e=n.split(`
`),i=0;i<e.length;++i)if(!(c(e[i])<=a)){for(var o=e[i].split(/(\s+)/g),h=0,w=0;w<o.length;++w){var p=c(o[w]);h+=p,h>a&&(o[w]=`
`+o[w],h=p)}e[i]=o.join("")}return e.join(`
`)}},v.exports&&(v.exports=t),Prism.plugins.NormalizeWhitespace=new t({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(n){var a=Prism.plugins.NormalizeWhitespace;if(!(n.settings&&n.settings["whitespace-normalization"]===!1)&&!!Prism.util.isActive(n.element,"whitespace-normalization",!0)){if((!n.element||!n.element.parentNode)&&n.code){n.code=a.normalize(n.code,n.settings);return}var e=n.element.parentNode;if(!(!n.code||!e||e.nodeName.toLowerCase()!=="pre")){for(var i=e.childNodes,o="",h="",w=!1,p=0;p<i.length;++p){var $=i[p];$==n.element?w=!0:$.nodeName==="#text"&&(w?h+=$.nodeValue:o+=$.nodeValue,e.removeChild($),--p)}if(!n.element.children.length||!Prism.plugins.KeepMarkup)n.code=o+n.code+h,n.code=a.normalize(n.code,n.settings);else{var C=o+n.element.innerHTML+h;n.element.innerHTML=a.normalize(C,n.settings),n.code=n.element.textContent}}}})})()})(Ne);function Ve(v){let r,t,u,c,n,a,e,i,o,h,w,p,$,C,F,k,I,l,s,d;return{c(){r=L("div"),t=L("div"),u=L("div"),c=L("div"),n=L("div"),a=L("div"),e=L("pre"),i=j(`\r
							`),o=L("code"),h=j(`\r
					`),w=X(),p=L("div"),$=X(),C=L("div"),F=L("pre"),k=j(`\r
							`),I=L("code"),l=j(`\r
					`),s=X(),d=L("div"),this.h()},l(g){r=z(g,"DIV",{class:!0});var f=A(r);t=z(f,"DIV",{class:!0});var y=A(t);u=z(y,"DIV",{class:!0});var E=A(u);c=z(E,"DIV",{id:!0,class:!0});var m=A(c);n=z(m,"DIV",{class:!0});var S=A(n);a=z(S,"DIV",{class:!0});var T=A(a);e=z(T,"PRE",{class:!0});var D=A(e);i=q(D,`\r
							`),o=z(D,"CODE",{class:!0}),A(o).forEach(_),h=q(D,`\r
					`),D.forEach(_),T.forEach(_),w=Y(S),p=z(S,"DIV",{class:!0}),A(p).forEach(_),$=Y(S),C=z(S,"DIV",{class:!0});var re=A(C);F=z(re,"PRE",{class:!0});var K=A(F);k=q(K,`\r
							`),I=z(K,"CODE",{class:!0}),A(I).forEach(_),l=q(K,`\r
					`),K.forEach(_),re.forEach(_),S.forEach(_),m.forEach(_),E.forEach(_),y.forEach(_),s=Y(f),d=z(f,"DIV",{class:!0}),A(d).forEach(_),f.forEach(_),this.h()},h(){b(o,"class","language-js line-numbers"),b(e,"class","prism-code svelte-rnpevm"),b(a,"class","prism-code-container svelte-rnpevm"),b(p,"class","code-divider svelte-rnpevm"),b(I,"class","language-js line-numbers"),b(F,"class","prism-code svelte-rnpevm"),b(C,"class","prism-code-container svelte-rnpevm"),b(n,"class","prism-code-wrapper svelte-rnpevm"),b(c,"id","main-laptop-obs"),b(c,"class","laptop svelte-rnpevm"),b(u,"class","code-editor-container"),b(t,"class","main-content"),b(d,"class","base"),b(r,"class","container")},m(g,f){O(g,r,f),x(r,t),x(t,u),x(u,c),x(c,n),x(n,a),x(a,e),x(e,i),x(e,o),v[3](o),x(e,h),x(n,w),x(n,p),x(n,$),x(n,C),x(C,F),x(F,k),x(F,I),v[4](I),x(F,l),v[5](c),x(r,s),x(r,d)},p:P,i:P,o:P,d(g){g&&_(r),v[3](null),v[4](null),v[5](null)}}}function Re(v,r,t){let u,c,n;const a=(p,$)=>new Promise((C,F)=>{setTimeout(()=>{$(),C()},p)}),e=async(p,$="",C)=>{var F=15;for(let k=0;k<p.length;k++){const I=p[k];await a(F,()=>{$+=I,C.innerHTML=$,Me.highlightAll()})}},i=async(p,$)=>{if(p[0].isIntersecting){$.disconnect();let C=`const mySkills = await 
 axios.get('/api/skills')
 console.log(mySkills.data)`,F=`const app = express();
app.get('api/skills', (req,res) =>
{ res.json(["React","Javascript",
"nodeJS", "CSS", "HTML"])})`;await e(C,"",c),await e(F,"",n)}};ie(async()=>{}),ie(async()=>{new IntersectionObserver(i,{threshold:[.2]}).observe(u)});function o(p){he[p?"unshift":"push"](()=>{c=p,t(1,c)})}function h(p){he[p?"unshift":"push"](()=>{n=p,t(2,n)})}function w(p){he[p?"unshift":"push"](()=>{u=p,t(0,u)})}return[u,c,n,o,h,w]}class Be extends W{constructor(r){super(),U(this,r,Re,Ve,Z,{})}}function Oe(v){let r,t,u,c,n,a,e;return c=new Be({}),a=new De({}),{c(){r=L("div"),t=L("div"),u=L("div"),ee(c.$$.fragment),n=X(),ee(a.$$.fragment),this.h()},l(i){r=z(i,"DIV",{class:!0});var o=A(r);t=z(o,"DIV",{class:!0});var h=A(t);u=z(h,"DIV",{class:!0});var w=A(u);se(c.$$.fragment,w),w.forEach(_),n=Y(h),se(a.$$.fragment,h),h.forEach(_),o.forEach(_),this.h()},h(){b(u,"class","laptop-container svelte-13opeim"),b(t,"class","main-container svelte-13opeim"),b(r,"class","wrapper svelte-13opeim")},m(i,o){O(i,r,o),x(r,t),x(t,u),te(c,u,null),x(t,n),te(a,t,null),e=!0},p:P,i(i){e||(B(c.$$.fragment,i),B(a.$$.fragment,i),e=!0)},o(i){G(c.$$.fragment,i),G(a.$$.fragment,i),e=!1},d(i){i&&_(r),ne(c),ne(a)}}}function je(v){return ie(async()=>{}),[]}class qe extends W{constructor(r){super(),U(this,r,je,Oe,Z,{})}}function Ge(v){let r,t,u;return{c(){r=M("svg"),t=M("rect"),u=M("path"),this.h()},l(c){r=N(c,"svg",{xmlns:!0,"enable-background":!0,height:!0,viewBox:!0,width:!0});var n=A(r);t=N(n,"rect",{fill:!0,height:!0,width:!0}),A(t).forEach(_),u=N(n,"path",{d:!0}),A(u).forEach(_),n.forEach(_),this.h()},h(){b(t,"fill","none"),b(t,"height","100%"),b(t,"width","100%"),b(u,"d","M13.17,4L18,8.83V20H6V4H13.17 M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2L14,2z M12,14 c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C10,13.1,10.9,14,12,14z M16,17.43c0-0.81-0.48-1.53-1.22-1.85 C13.93,15.21,12.99,15,12,15c-0.99,0-1.93,0.21-2.78,0.58C8.48,15.9,8,16.62,8,17.43V18h8V17.43z"),b(r,"xmlns","http://www.w3.org/2000/svg"),b(r,"enable-background","new 0 0 24 24"),b(r,"height","100%"),b(r,"viewBox","0 0 24 24"),b(r,"width","100%")},m(c,n){O(c,r,n),x(r,t),x(r,u)},p:P,i:P,o:P,d(c){c&&_(r)}}}class We extends W{constructor(r){super(),U(this,r,null,Ge,Z,{})}}function Ue(v){let r,t,u,c;return{c(){r=M("svg"),t=M("title"),u=j("LinkedIn icon"),c=M("path"),this.h()},l(n){r=N(n,"svg",{role:!0,viewBox:!0,xmlns:!0});var a=A(r);t=N(a,"title",{});var e=A(t);u=q(e,"LinkedIn icon"),e.forEach(_),c=N(a,"path",{d:!0}),A(c).forEach(_),a.forEach(_),this.h()},h(){b(c,"d","M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"),b(r,"role","img"),b(r,"viewBox","0 0 24 24"),b(r,"xmlns","http://www.w3.org/2000/svg")},m(n,a){O(n,r,a),x(r,t),x(t,u),x(r,c)},p:P,i:P,o:P,d(n){n&&_(r)}}}class Ze extends W{constructor(r){super(),U(this,r,null,Ue,Z,{})}}function Je(v){let r,t,u,c;return{c(){r=M("svg"),t=M("title"),u=j("Gmail icon"),c=M("path"),this.h()},l(n){r=N(n,"svg",{role:!0,viewBox:!0,xmlns:!0});var a=A(r);t=N(a,"title",{});var e=A(t);u=q(e,"Gmail icon"),e.forEach(_),c=N(a,"path",{d:!0}),A(c).forEach(_),a.forEach(_),this.h()},h(){b(c,"d","M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"),b(r,"role","img"),b(r,"viewBox","0 0 24 24"),b(r,"xmlns","http://www.w3.org/2000/svg")},m(n,a){O(n,r,a),x(r,t),x(t,u),x(r,c)},p:P,i:P,o:P,d(n){n&&_(r)}}}class Xe extends W{constructor(r){super(),U(this,r,null,Je,Z,{})}}function Ye(v){let r,t,u,c;return{c(){r=M("svg"),t=M("title"),u=j("GitHub icon"),c=M("path"),this.h()},l(n){r=N(n,"svg",{role:!0,viewBox:!0,xmlns:!0});var a=A(r);t=N(a,"title",{});var e=A(t);u=q(e,"GitHub icon"),e.forEach(_),c=N(a,"path",{d:!0}),A(c).forEach(_),a.forEach(_),this.h()},h(){b(c,"d","M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"),b(r,"role","img"),b(r,"viewBox","0 0 24 24"),b(r,"xmlns","http://www.w3.org/2000/svg")},m(n,a){O(n,r,a),x(r,t),x(t,u),x(r,c)},p:P,i:P,o:P,d(n){n&&_(r)}}}class Ke extends W{constructor(r){super(),U(this,r,null,Ye,Z,{})}}function we(v,r,t){const u=v.slice();return u[1]=r[t],u}function ye(v){let r,t,u,c,n,a,e,i;var o=v[1].component;function h(p){return{}}o&&(t=new o(h()));function w(){return v[0](v[1])}return{c(){r=L("a"),t&&ee(t.$$.fragment),u=X(),this.h()},l(p){r=z(p,"A",{download:!0,rel:!0,href:!0,class:!0});var $=A(r);t&&se(t.$$.fragment,$),u=Y($),$.forEach(_),this.h()},h(){b(r,"download",c=v[1].download),b(r,"rel","external"),b(r,"href",n=v[1].download?v[1].link:null),b(r,"class","icon-container svelte-5fpt8e")},m(p,$){O(p,r,$),t&&te(t,r,null),x(r,u),a=!0,e||(i=Ce(r,"click",w),e=!0)},p(p,$){if(v=p,o!==(o=v[1].component)){if(t){_e();const C=t;G(C.$$.fragment,1,0,()=>{ne(C,1)}),xe()}o?(t=new o(h()),ee(t.$$.fragment),B(t.$$.fragment,1),te(t,r,u)):t=null}},i(p){a||(t&&B(t.$$.fragment,p),a=!0)},o(p){t&&G(t.$$.fragment,p),a=!1},d(p){p&&_(r),t&&ne(t),e=!1,i()}}}function Qe(v){let r,t,u,c=be,n=[];for(let e=0;e<c.length;e+=1)n[e]=ye(we(v,c,e));const a=e=>G(n[e],1,1,()=>{n[e]=null});return{c(){r=L("div"),t=L("div");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){r=z(e,"DIV",{class:!0});var i=A(r);t=z(i,"DIV",{class:!0});var o=A(t);for(let h=0;h<n.length;h+=1)n[h].l(o);o.forEach(_),i.forEach(_),this.h()},h(){b(t,"class","icons-container svelte-5fpt8e"),b(r,"class","wrapper svelte-5fpt8e")},m(e,i){O(e,r,i),x(r,t);for(let o=0;o<n.length;o+=1)n[o].m(t,null);u=!0},p(e,[i]){if(i&0){c=be;let o;for(o=0;o<c.length;o+=1){const h=we(e,c,o);n[o]?(n[o].p(h,i),B(n[o],1)):(n[o]=ye(h),n[o].c(),B(n[o],1),n[o].m(t,null))}for(_e(),o=c.length;o<n.length;o+=1)a(o);xe()}},i(e){if(!u){for(let i=0;i<c.length;i+=1)B(n[i]);u=!0}},o(e){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)G(n[i]);u=!1},d(e){e&&_(r),Ie(n,e)}}}const be=[{link:"https://github.com/ajl0023",component:Ke,download:null},{link:"mailto:austinjlee.0@gmail.com",component:Xe,download:null},{link:"https://www.linkedin.com/in/austin-lee-91a341215/",component:Ze,download:null},{link:"./AustinLeeResume.pdf",component:We,download:"AustinLeeResume.pdf"}];function et(v){return ie(async()=>{}),[t=>{t.download||window.open(t.link,"_blank")}]}class tt extends W{constructor(r){super(),U(this,r,et,Qe,Z,{})}}function nt(v){let r,t,u,c,n,a;t=new tt({});const e=v[1].default,i=Le(e,v,v[0],null);return n=new qe({}),{c(){r=L("div"),ee(t.$$.fragment),u=X(),i&&i.c(),c=X(),ee(n.$$.fragment),this.h()},l(o){r=z(o,"DIV",{class:!0});var h=A(r);se(t.$$.fragment,h),u=Y(h),i&&i.l(h),c=Y(h),se(n.$$.fragment,h),h.forEach(_),this.h()},h(){b(r,"class","wrapper svelte-hckrfc")},m(o,h){O(o,r,h),te(t,r,null),x(r,u),i&&i.m(r,null),x(r,c),te(n,r,null),a=!0},p(o,[h]){i&&i.p&&(!a||h&1)&&ze(i,e,o,o[0],a?Pe(e,o[0],h,null):Te(o[0]),null)},i(o){a||(B(t.$$.fragment,o),B(i,o),B(n.$$.fragment,o),a=!0)},o(o){G(t.$$.fragment,o),G(i,o),G(n.$$.fragment,o),a=!1},d(o){o&&_(r),ne(t),i&&i.d(o),ne(n)}}}function rt(v,r,t){let{$$slots:u={},$$scope:c}=r;return ie(async()=>{await Se(()=>import("../chunks/cubes-436ca759.js"),[])}),v.$$set=n=>{"$$scope"in n&&t(0,c=n.$$scope)},[c,u]}class st extends W{constructor(r){super(),U(this,r,rt,nt,Z,{})}}export{st as default};
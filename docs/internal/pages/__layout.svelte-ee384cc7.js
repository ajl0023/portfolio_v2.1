import{_ as Se}from"../chunks/preload-helper-a069e731.js";import{S as Z,i as J,s as X,e as L,t as j,k as G,c as z,a as A,h as q,d as _,m as W,b,g as O,F as x,E as P,v as ie,G as he,w as ee,x as se,y as te,q as B,o as U,B as ne,H as M,I as N,J as Ie,n as _e,p as xe,K as Ce,L as Le,M as ze,N as Te,O as Pe}from"../chunks/index-44742a5b.js";function De(m){let r,t,o,u,n,a,e,l;return{c(){r=L("div"),t=L("div"),o=L("div"),u=L("h3"),n=j("Javascript developer"),a=G(),e=L("p"),l=j(`Hello, I'm Austin, a web developer with a primary focus in React development. I'm confident\r
				in working with the various MERN stack technologies and I'm on a persistent journey in\r
				honing my craft in web development.`),this.h()},l(c){r=z(c,"DIV",{class:!0});var v=A(r);t=z(v,"DIV",{class:!0});var p=A(t);o=z(p,"DIV",{class:!0});var g=A(o);u=z(g,"H3",{class:!0});var $=A(u);n=q($,"Javascript developer"),$.forEach(_),a=W(g),e=z(g,"P",{class:!0});var I=A(e);l=q(I,`Hello, I'm Austin, a web developer with a primary focus in React development. I'm confident\r
				in working with the various MERN stack technologies and I'm on a persistent journey in\r
				honing my craft in web development.`),I.forEach(_),g.forEach(_),p.forEach(_),v.forEach(_),this.h()},h(){b(u,"class","main-header svelte-8aye6s"),b(e,"class","description svelte-8aye6s"),b(o,"class","text-container svelte-8aye6s"),b(t,"class","text-content"),b(r,"class","container svelte-8aye6s")},m(c,v){O(c,r,v),x(r,t),x(t,o),x(o,u),x(u,n),x(o,a),x(o,e),x(e,l)},p:P,i:P,o:P,d(c){c&&_(r)}}}class He extends Z{constructor(r){super(),J(this,r,null,De,X,{})}}var me=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ae={exports:{}};(function(m){var r=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(o){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,a={},e={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function s(i){return i instanceof l?new l(i.type,s(i.content),i.alias):Array.isArray(i)?i.map(s):i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(s){return Object.prototype.toString.call(s).slice(8,-1)},objId:function(s){return s.__id||Object.defineProperty(s,"__id",{value:++n}),s.__id},clone:function s(i,d){d=d||{};var f,h;switch(e.util.type(i)){case"Object":if(h=e.util.objId(i),d[h])return d[h];f={},d[h]=f;for(var y in i)i.hasOwnProperty(y)&&(f[y]=s(i[y],d));return f;case"Array":return h=e.util.objId(i),d[h]?d[h]:(f=[],d[h]=f,i.forEach(function(E,w){f[w]=s(E,d)}),f);default:return i}},getLanguage:function(s){for(;s;){var i=u.exec(s.className);if(i)return i[1].toLowerCase();s=s.parentElement}return"none"},setLanguage:function(s,i){s.className=s.className.replace(RegExp(u,"gi"),""),s.classList.add("language-"+i)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(f){var s=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(f.stack)||[])[1];if(s){var i=document.getElementsByTagName("script");for(var d in i)if(i[d].src==s)return i[d]}return null}},isActive:function(s,i,d){for(var f="no-"+i;s;){var h=s.classList;if(h.contains(i))return!0;if(h.contains(f))return!1;s=s.parentElement}return!!d}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(s,i){var d=e.util.clone(e.languages[s]);for(var f in i)d[f]=i[f];return d},insertBefore:function(s,i,d,f){f=f||e.languages;var h=f[s],y={};for(var E in h)if(h.hasOwnProperty(E)){if(E==i)for(var w in d)d.hasOwnProperty(w)&&(y[w]=d[w]);d.hasOwnProperty(E)||(y[E]=h[E])}var S=f[s];return f[s]=y,e.languages.DFS(e.languages,function(T,H){H===S&&T!=s&&(this[T]=y)}),y},DFS:function s(i,d,f,h){h=h||{};var y=e.util.objId;for(var E in i)if(i.hasOwnProperty(E)){d.call(i,E,i[E],f||E);var w=i[E],S=e.util.type(w);S==="Object"&&!h[y(w)]?(h[y(w)]=!0,s(w,d,null,h)):S==="Array"&&!h[y(w)]&&(h[y(w)]=!0,s(w,d,E,h))}}},plugins:{},highlightAll:function(s,i){e.highlightAllUnder(document,s,i)},highlightAllUnder:function(s,i,d){var f={callback:d,container:s,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};e.hooks.run("before-highlightall",f),f.elements=Array.prototype.slice.apply(f.container.querySelectorAll(f.selector)),e.hooks.run("before-all-elements-highlight",f);for(var h=0,y;y=f.elements[h++];)e.highlightElement(y,i===!0,f.callback)},highlightElement:function(s,i,d){var f=e.util.getLanguage(s),h=e.languages[f];e.util.setLanguage(s,f);var y=s.parentElement;y&&y.nodeName.toLowerCase()==="pre"&&e.util.setLanguage(y,f);var E=s.textContent,w={element:s,language:f,grammar:h,code:E};function S(H){w.highlightedCode=H,e.hooks.run("before-insert",w),w.element.innerHTML=w.highlightedCode,e.hooks.run("after-highlight",w),e.hooks.run("complete",w),d&&d.call(w.element)}if(e.hooks.run("before-sanity-check",w),y=w.element.parentElement,y&&y.nodeName.toLowerCase()==="pre"&&!y.hasAttribute("tabindex")&&y.setAttribute("tabindex","0"),!w.code){e.hooks.run("complete",w),d&&d.call(w.element);return}if(e.hooks.run("before-highlight",w),!w.grammar){S(e.util.encode(w.code));return}if(i&&o.Worker){var T=new Worker(e.filename);T.onmessage=function(H){S(H.data)},T.postMessage(JSON.stringify({language:w.language,code:w.code,immediateClose:!0}))}else S(e.highlight(w.code,w.grammar,w.language))},highlight:function(s,i,d){var f={code:s,grammar:i,language:d};if(e.hooks.run("before-tokenize",f),!f.grammar)throw new Error('The language "'+f.language+'" has no grammar.');return f.tokens=e.tokenize(f.code,f.grammar),e.hooks.run("after-tokenize",f),l.stringify(e.util.encode(f.tokens),f.language)},tokenize:function(s,i){var d=i.rest;if(d){for(var f in d)i[f]=d[f];delete i.rest}var h=new p;return g(h,h.head,s),v(s,h,i,h.head,0),I(h)},hooks:{all:{},add:function(s,i){var d=e.hooks.all;d[s]=d[s]||[],d[s].push(i)},run:function(s,i){var d=e.hooks.all[s];if(!(!d||!d.length))for(var f=0,h;h=d[f++];)h(i)}},Token:l};o.Prism=e;function l(s,i,d,f){this.type=s,this.content=i,this.alias=d,this.length=(f||"").length|0}l.stringify=function s(i,d){if(typeof i=="string")return i;if(Array.isArray(i)){var f="";return i.forEach(function(S){f+=s(S,d)}),f}var h={type:i.type,content:s(i.content,d),tag:"span",classes:["token",i.type],attributes:{},language:d},y=i.alias;y&&(Array.isArray(y)?Array.prototype.push.apply(h.classes,y):h.classes.push(y)),e.hooks.run("wrap",h);var E="";for(var w in h.attributes)E+=" "+w+'="'+(h.attributes[w]||"").replace(/"/g,"&quot;")+'"';return"<"+h.tag+' class="'+h.classes.join(" ")+'"'+E+">"+h.content+"</"+h.tag+">"};function c(s,i,d,f){s.lastIndex=i;var h=s.exec(d);if(h&&f&&h[1]){var y=h[1].length;h.index+=y,h[0]=h[0].slice(y)}return h}function v(s,i,d,f,h,y){for(var E in d)if(!(!d.hasOwnProperty(E)||!d[E])){var w=d[E];w=Array.isArray(w)?w:[w];for(var S=0;S<w.length;++S){if(y&&y.cause==E+","+S)return;var T=w[S],H=T.inside,re=!!T.lookbehind,K=!!T.greedy,$e=T.alias;if(K&&!T.pattern.global){var Ee=T.pattern.toString().match(/[imsuy]*$/)[0];T.pattern=RegExp(T.pattern.source,Ee+"g")}for(var pe=T.pattern||T,D=f.next,R=h;D!==i.tail&&!(y&&R>=y.reach);R+=D.value.length,D=D.next){var Q=D.value;if(i.length>s.length)return;if(!(Q instanceof l)){var le=1,V;if(K){if(V=c(pe,R,s,re),!V||V.index>=s.length)break;var oe=V.index,Fe=V.index+V[0].length,Y=R;for(Y+=D.value.length;oe>=Y;)D=D.next,Y+=D.value.length;if(Y-=D.value.length,R=Y,D.value instanceof l)continue;for(var ae=D;ae!==i.tail&&(Y<Fe||typeof ae.value=="string");ae=ae.next)le++,Y+=ae.value.length;le--,Q=s.slice(R,Y),V.index-=R}else if(V=c(pe,0,Q,re),!V)continue;var oe=V.index,ue=V[0],de=Q.slice(0,oe),ve=Q.slice(oe+ue.length),ge=R+Q.length;y&&ge>y.reach&&(y.reach=ge);var ce=D.prev;de&&(ce=g(i,ce,de),R+=de.length),$(i,ce,le);var ke=new l(E,H?e.tokenize(ue,H):ue,$e,ue);if(D=g(i,ce,ke),ve&&g(i,D,ve),le>1){var fe={cause:E+","+S,reach:ge};v(s,i,d,D.prev,R,fe),y&&fe.reach>y.reach&&(y.reach=fe.reach)}}}}}}function p(){var s={value:null,prev:null,next:null},i={value:null,prev:s,next:null};s.next=i,this.head=s,this.tail=i,this.length=0}function g(s,i,d){var f=i.next,h={value:d,prev:i,next:f};return i.next=h,f.prev=h,s.length++,h}function $(s,i,d){for(var f=i.next,h=0;h<d&&f!==s.tail;h++)f=f.next;i.next=f,f.prev=i,s.length-=h}function I(s){for(var i=[],d=s.head.next;d!==s.tail;)i.push(d.value),d=d.next;return i}if(!o.document)return o.addEventListener&&(e.disableWorkerMessageHandler||o.addEventListener("message",function(s){var i=JSON.parse(s.data),d=i.language,f=i.code,h=i.immediateClose;o.postMessage(e.highlight(f,e.languages[d],d)),h&&o.close()},!1)),e;var F=e.util.currentScript();F&&(e.filename=F.src,F.hasAttribute("data-manual")&&(e.manual=!0));function k(){e.manual||e.highlightAll()}if(!e.manual){var C=document.readyState;C==="loading"||C==="interactive"&&F&&F.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return e}(r);m.exports&&(m.exports=t),typeof me!="undefined"&&(me.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(u,n){var a={};a["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[n]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var e={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};e["language-"+n]={pattern:/[\s\S]+/,inside:t.languages[n]};var l={};l[u]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return u}),"i"),lookbehind:!0,greedy:!0,inside:e},t.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(o,u){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[u,"language-"+u],inside:t.languages[u]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(o){var u=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+u.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+u.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+u.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:u,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var n=o.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading\u2026",u=function(F,k){return"\u2716 Error "+F+" while fetching file: "+k},n="\u2716 Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},e="data-src-status",l="loading",c="loaded",v="failed",p="pre[data-src]:not(["+e+'="'+c+'"]):not(['+e+'="'+l+'"])';function g(F,k,C){var s=new XMLHttpRequest;s.open("GET",F,!0),s.onreadystatechange=function(){s.readyState==4&&(s.status<400&&s.responseText?k(s.responseText):s.status>=400?C(u(s.status,s.statusText)):C(n))},s.send(null)}function $(F){var k=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(F||"");if(k){var C=Number(k[1]),s=k[2],i=k[3];return s?i?[C,Number(i)]:[C,void 0]:[C,C]}}t.hooks.add("before-highlightall",function(F){F.selector+=", "+p}),t.hooks.add("before-sanity-check",function(F){var k=F.element;if(k.matches(p)){F.code="",k.setAttribute(e,l);var C=k.appendChild(document.createElement("CODE"));C.textContent=o;var s=k.getAttribute("data-src"),i=F.language;if(i==="none"){var d=(/\.(\w+)$/.exec(s)||[,"none"])[1];i=a[d]||d}t.util.setLanguage(C,i),t.util.setLanguage(k,i);var f=t.plugins.autoloader;f&&f.loadLanguages(i),g(s,function(h){k.setAttribute(e,c);var y=$(k.getAttribute("data-range"));if(y){var E=h.split(/\r\n?|\n/g),w=y[0],S=y[1]==null?E.length:y[1];w<0&&(w+=E.length),w=Math.max(0,Math.min(w-1,E.length)),S<0&&(S+=E.length),S=Math.max(0,Math.min(S,E.length)),h=E.slice(w,S).join(`
`),k.hasAttribute("data-start")||k.setAttribute("data-start",String(w+1))}C.textContent=h,t.highlightElement(C)},function(h){k.setAttribute(e,v),C.textContent=h})}}),t.plugins.fileHighlight={highlight:function(k){for(var C=(k||document).querySelectorAll(p),s=0,i;i=C[s++];)t.highlightElement(i)}};var I=!1;t.fileHighlight=function(){I||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),I=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Ae);var Me=Ae.exports;(function(){if(typeof Prism=="undefined"||typeof document=="undefined")return;var m="line-numbers",r=/\n(?!$)/g,t=Prism.plugins.lineNumbers={getLine:function(a,e){if(!(a.tagName!=="PRE"||!a.classList.contains(m))){var l=a.querySelector(".line-numbers-rows");if(!!l){var c=parseInt(a.getAttribute("data-start"),10)||1,v=c+(l.children.length-1);e<c&&(e=c),e>v&&(e=v);var p=e-c;return l.children[p]}}},resize:function(a){o([a])},assumeViewportIndependence:!0};function o(a){if(a=a.filter(function(l){var c=u(l),v=c["white-space"];return v==="pre-wrap"||v==="pre-line"}),a.length!=0){var e=a.map(function(l){var c=l.querySelector("code"),v=l.querySelector(".line-numbers-rows");if(!(!c||!v)){var p=l.querySelector(".line-numbers-sizer"),g=c.textContent.split(r);p||(p=document.createElement("span"),p.className="line-numbers-sizer",c.appendChild(p)),p.innerHTML="0",p.style.display="block";var $=p.getBoundingClientRect().height;return p.innerHTML="",{element:l,lines:g,lineHeights:[],oneLinerHeight:$,sizer:p}}}).filter(Boolean);e.forEach(function(l){var c=l.sizer,v=l.lines,p=l.lineHeights,g=l.oneLinerHeight;p[v.length-1]=void 0,v.forEach(function($,I){if($&&$.length>1){var F=c.appendChild(document.createElement("span"));F.style.display="block",F.textContent=$}else p[I]=g})}),e.forEach(function(l){for(var c=l.sizer,v=l.lineHeights,p=0,g=0;g<v.length;g++)v[g]===void 0&&(v[g]=c.children[p++].getBoundingClientRect().height)}),e.forEach(function(l){var c=l.sizer,v=l.element.querySelector(".line-numbers-rows");c.style.display="none",c.innerHTML="",l.lineHeights.forEach(function(p,g){v.children[g].style.height=p+"px"})})}}function u(a){return a?window.getComputedStyle?getComputedStyle(a):a.currentStyle||null:null}var n=void 0;window.addEventListener("resize",function(){t.assumeViewportIndependence&&n===window.innerWidth||(n=window.innerWidth,o(Array.prototype.slice.call(document.querySelectorAll("pre."+m))))}),Prism.hooks.add("complete",function(a){if(!!a.code){var e=a.element,l=e.parentNode;if(!(!l||!/pre/i.test(l.nodeName))&&!e.querySelector(".line-numbers-rows")&&!!Prism.util.isActive(e,m)){e.classList.remove(m),l.classList.add(m);var c=a.code.match(r),v=c?c.length+1:1,p,g=new Array(v+1).join("<span></span>");p=document.createElement("span"),p.setAttribute("aria-hidden","true"),p.className="line-numbers-rows",p.innerHTML=g,l.hasAttribute("data-start")&&(l.style.counterReset="linenumber "+(parseInt(l.getAttribute("data-start"),10)-1)),a.element.appendChild(p),o([l]),Prism.hooks.run("line-numbers",a)}}}),Prism.hooks.add("line-numbers",function(a){a.plugins=a.plugins||{},a.plugins.lineNumbers=!0})})();var Ne={exports:{}};(function(m){(function(){if(typeof Prism=="undefined")return;var r=Object.assign||function(n,a){for(var e in a)a.hasOwnProperty(e)&&(n[e]=a[e]);return n};function t(n){this.defaults=r({},n)}function o(n){return n.replace(/-(\w)/g,function(a,e){return e.toUpperCase()})}function u(n){for(var a=0,e=0;e<n.length;++e)n.charCodeAt(e)=="	".charCodeAt(0)&&(a+=3);return n.length+a}t.prototype={setDefaults:function(n){this.defaults=r(this.defaults,n)},normalize:function(n,a){a=r(this.defaults,a);for(var e in a){var l=o(e);e!=="normalize"&&l!=="setDefaults"&&a[e]&&this[l]&&(n=this[l].call(this,n,a[e]))}return n},leftTrim:function(n){return n.replace(/^\s+/,"")},rightTrim:function(n){return n.replace(/\s+$/,"")},tabsToSpaces:function(n,a){return a=a|0||4,n.replace(/\t/g,new Array(++a).join(" "))},spacesToTabs:function(n,a){return a=a|0||4,n.replace(RegExp(" {"+a+"}","g"),"	")},removeTrailing:function(n){return n.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(n){return n.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(n){var a=n.match(/^[^\S\n\r]*(?=\S)/gm);return!a||!a[0].length||(a.sort(function(e,l){return e.length-l.length}),!a[0].length)?n:n.replace(RegExp("^"+a[0],"gm"),"")},indent:function(n,a){return n.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++a).join("	")+"$&")},breakLines:function(n,a){a=a===!0?80:a|0||80;for(var e=n.split(`
`),l=0;l<e.length;++l)if(!(u(e[l])<=a)){for(var c=e[l].split(/(\s+)/g),v=0,p=0;p<c.length;++p){var g=u(c[p]);v+=g,v>a&&(c[p]=`
`+c[p],v=g)}e[l]=c.join("")}return e.join(`
`)}},m.exports&&(m.exports=t),Prism.plugins.NormalizeWhitespace=new t({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(n){var a=Prism.plugins.NormalizeWhitespace;if(!(n.settings&&n.settings["whitespace-normalization"]===!1)&&!!Prism.util.isActive(n.element,"whitespace-normalization",!0)){if((!n.element||!n.element.parentNode)&&n.code){n.code=a.normalize(n.code,n.settings);return}var e=n.element.parentNode;if(!(!n.code||!e||e.nodeName.toLowerCase()!=="pre")){for(var l=e.childNodes,c="",v="",p=!1,g=0;g<l.length;++g){var $=l[g];$==n.element?p=!0:$.nodeName==="#text"&&(p?v+=$.nodeValue:c+=$.nodeValue,e.removeChild($),--g)}if(!n.element.children.length||!Prism.plugins.KeepMarkup)n.code=c+n.code+v,n.code=a.normalize(n.code,n.settings);else{var I=c+n.element.innerHTML+v;n.element.innerHTML=a.normalize(I,n.settings),n.code=n.element.textContent}}}})})()})(Ne);function Ve(m){let r,t,o,u,n,a,e,l,c,v,p,g,$,I,F,k,C,s,i,d;return{c(){r=L("div"),t=L("div"),o=L("div"),u=L("div"),n=L("div"),a=L("div"),e=L("pre"),l=j(`\r
							`),c=L("code"),v=j(`\r
					`),p=G(),g=L("div"),$=G(),I=L("div"),F=L("pre"),k=j(`\r
							`),C=L("code"),s=j(`\r
					`),i=G(),d=L("div"),this.h()},l(f){r=z(f,"DIV",{class:!0});var h=A(r);t=z(h,"DIV",{class:!0});var y=A(t);o=z(y,"DIV",{class:!0});var E=A(o);u=z(E,"DIV",{id:!0,class:!0});var w=A(u);n=z(w,"DIV",{class:!0});var S=A(n);a=z(S,"DIV",{class:!0});var T=A(a);e=z(T,"PRE",{class:!0});var H=A(e);l=q(H,`\r
							`),c=z(H,"CODE",{class:!0}),A(c).forEach(_),v=q(H,`\r
					`),H.forEach(_),T.forEach(_),p=W(S),g=z(S,"DIV",{class:!0}),A(g).forEach(_),$=W(S),I=z(S,"DIV",{class:!0});var re=A(I);F=z(re,"PRE",{class:!0});var K=A(F);k=q(K,`\r
							`),C=z(K,"CODE",{class:!0}),A(C).forEach(_),s=q(K,`\r
					`),K.forEach(_),re.forEach(_),S.forEach(_),w.forEach(_),E.forEach(_),y.forEach(_),i=W(h),d=z(h,"DIV",{class:!0}),A(d).forEach(_),h.forEach(_),this.h()},h(){b(c,"class","language-js line-numbers"),b(e,"class","prism-code svelte-rnpevm"),b(a,"class","prism-code-container svelte-rnpevm"),b(g,"class","code-divider svelte-rnpevm"),b(C,"class","language-js line-numbers"),b(F,"class","prism-code svelte-rnpevm"),b(I,"class","prism-code-container svelte-rnpevm"),b(n,"class","prism-code-wrapper svelte-rnpevm"),b(u,"id","main-laptop-obs"),b(u,"class","laptop svelte-rnpevm"),b(o,"class","code-editor-container"),b(t,"class","main-content"),b(d,"class","base"),b(r,"class","container")},m(f,h){O(f,r,h),x(r,t),x(t,o),x(o,u),x(u,n),x(n,a),x(a,e),x(e,l),x(e,c),m[3](c),x(e,v),x(n,p),x(n,g),x(n,$),x(n,I),x(I,F),x(F,k),x(F,C),m[4](C),x(F,s),m[5](u),x(r,i),x(r,d)},p:P,i:P,o:P,d(f){f&&_(r),m[3](null),m[4](null),m[5](null)}}}function Re(m,r,t){let o,u,n;const a=(g,$)=>new Promise((I,F)=>{setTimeout(()=>{$(),I()},g)}),e=async(g,$="",I)=>{var F=15;for(let k=0;k<g.length;k++){const C=g[k];await a(F,()=>{$+=C,I.innerHTML=$,Me.highlightAll()})}},l=async(g,$)=>{if(g[0].isIntersecting){$.disconnect();let I=`const mySkills = await 
 axios.get('/api/skills')
 console.log(mySkills.data)`,F=`const app = express();
app.get('api/skills', (req,res) =>
{ res.json(["React","Javascript",
"nodeJS", "CSS", "HTML"])})`;await e(I,"",u),await e(F,"",n)}};ie(async()=>{}),ie(async()=>{new IntersectionObserver(l,{threshold:[.2]}).observe(o)});function c(g){he[g?"unshift":"push"](()=>{u=g,t(1,u)})}function v(g){he[g?"unshift":"push"](()=>{n=g,t(2,n)})}function p(g){he[g?"unshift":"push"](()=>{o=g,t(0,o)})}return[o,u,n,c,v,p]}class Be extends Z{constructor(r){super(),J(this,r,Re,Ve,X,{})}}function Oe(m){let r,t,o,u,n,a,e;return u=new Be({}),a=new He({}),{c(){r=L("div"),t=L("div"),o=L("div"),ee(u.$$.fragment),n=G(),ee(a.$$.fragment),this.h()},l(l){r=z(l,"DIV",{class:!0});var c=A(r);t=z(c,"DIV",{class:!0});var v=A(t);o=z(v,"DIV",{class:!0});var p=A(o);se(u.$$.fragment,p),p.forEach(_),n=W(v),se(a.$$.fragment,v),v.forEach(_),c.forEach(_),this.h()},h(){b(o,"class","laptop-container svelte-13opeim"),b(t,"class","main-container svelte-13opeim"),b(r,"class","wrapper svelte-13opeim")},m(l,c){O(l,r,c),x(r,t),x(t,o),te(u,o,null),x(t,n),te(a,t,null),e=!0},p:P,i(l){e||(B(u.$$.fragment,l),B(a.$$.fragment,l),e=!0)},o(l){U(u.$$.fragment,l),U(a.$$.fragment,l),e=!1},d(l){l&&_(r),ne(u),ne(a)}}}function je(m){return ie(async()=>{}),[]}class qe extends Z{constructor(r){super(),J(this,r,je,Oe,X,{})}}function Ge(m){let r,t,o;return{c(){r=M("svg"),t=M("rect"),o=M("path"),this.h()},l(u){r=N(u,"svg",{xmlns:!0,"enable-background":!0,height:!0,viewBox:!0,width:!0});var n=A(r);t=N(n,"rect",{fill:!0,height:!0,width:!0}),A(t).forEach(_),o=N(n,"path",{d:!0}),A(o).forEach(_),n.forEach(_),this.h()},h(){b(t,"fill","none"),b(t,"height","100%"),b(t,"width","100%"),b(o,"d","M13.17,4L18,8.83V20H6V4H13.17 M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2L14,2z M12,14 c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C10,13.1,10.9,14,12,14z M16,17.43c0-0.81-0.48-1.53-1.22-1.85 C13.93,15.21,12.99,15,12,15c-0.99,0-1.93,0.21-2.78,0.58C8.48,15.9,8,16.62,8,17.43V18h8V17.43z"),b(r,"xmlns","http://www.w3.org/2000/svg"),b(r,"enable-background","new 0 0 24 24"),b(r,"height","100%"),b(r,"viewBox","0 0 24 24"),b(r,"width","100%")},m(u,n){O(u,r,n),x(r,t),x(r,o)},p:P,i:P,o:P,d(u){u&&_(r)}}}class We extends Z{constructor(r){super(),J(this,r,null,Ge,X,{})}}function Ue(m){let r,t,o,u;return{c(){r=M("svg"),t=M("title"),o=j("LinkedIn icon"),u=M("path"),this.h()},l(n){r=N(n,"svg",{role:!0,viewBox:!0,xmlns:!0});var a=A(r);t=N(a,"title",{});var e=A(t);o=q(e,"LinkedIn icon"),e.forEach(_),u=N(a,"path",{d:!0}),A(u).forEach(_),a.forEach(_),this.h()},h(){b(u,"d","M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"),b(r,"role","img"),b(r,"viewBox","0 0 24 24"),b(r,"xmlns","http://www.w3.org/2000/svg")},m(n,a){O(n,r,a),x(r,t),x(t,o),x(r,u)},p:P,i:P,o:P,d(n){n&&_(r)}}}class Ze extends Z{constructor(r){super(),J(this,r,null,Ue,X,{})}}function Je(m){let r,t,o,u;return{c(){r=M("svg"),t=M("title"),o=j("Gmail icon"),u=M("path"),this.h()},l(n){r=N(n,"svg",{role:!0,viewBox:!0,xmlns:!0});var a=A(r);t=N(a,"title",{});var e=A(t);o=q(e,"Gmail icon"),e.forEach(_),u=N(a,"path",{d:!0}),A(u).forEach(_),a.forEach(_),this.h()},h(){b(u,"d","M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"),b(r,"role","img"),b(r,"viewBox","0 0 24 24"),b(r,"xmlns","http://www.w3.org/2000/svg")},m(n,a){O(n,r,a),x(r,t),x(t,o),x(r,u)},p:P,i:P,o:P,d(n){n&&_(r)}}}class Xe extends Z{constructor(r){super(),J(this,r,null,Je,X,{})}}function Ye(m){let r,t,o,u;return{c(){r=M("svg"),t=M("title"),o=j("GitHub icon"),u=M("path"),this.h()},l(n){r=N(n,"svg",{role:!0,viewBox:!0,xmlns:!0});var a=A(r);t=N(a,"title",{});var e=A(t);o=q(e,"GitHub icon"),e.forEach(_),u=N(a,"path",{d:!0}),A(u).forEach(_),a.forEach(_),this.h()},h(){b(u,"d","M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"),b(r,"role","img"),b(r,"viewBox","0 0 24 24"),b(r,"xmlns","http://www.w3.org/2000/svg")},m(n,a){O(n,r,a),x(r,t),x(t,o),x(r,u)},p:P,i:P,o:P,d(n){n&&_(r)}}}class Ke extends Z{constructor(r){super(),J(this,r,null,Ye,X,{})}}function we(m,r,t){const o=m.slice();return o[1]=r[t],o}function ye(m){let r,t,o,u,n,a,e,l;var c=m[1].component;function v(g){return{}}c&&(t=new c(v()));function p(){return m[0](m[1])}return{c(){r=L("a"),t&&ee(t.$$.fragment),o=G(),this.h()},l(g){r=z(g,"A",{download:!0,rel:!0,href:!0,class:!0});var $=A(r);t&&se(t.$$.fragment,$),o=W($),$.forEach(_),this.h()},h(){b(r,"download",u=m[1].download),b(r,"rel","external"),b(r,"href",n=m[1].download?m[1].link:null),b(r,"class","icon-container svelte-5fpt8e")},m(g,$){O(g,r,$),t&&te(t,r,null),x(r,o),a=!0,e||(l=Ie(r,"click",p),e=!0)},p(g,$){if(m=g,c!==(c=m[1].component)){if(t){_e();const I=t;U(I.$$.fragment,1,0,()=>{ne(I,1)}),xe()}c?(t=new c(v()),ee(t.$$.fragment),B(t.$$.fragment,1),te(t,r,o)):t=null}},i(g){a||(t&&B(t.$$.fragment,g),a=!0)},o(g){t&&U(t.$$.fragment,g),a=!1},d(g){g&&_(r),t&&ne(t),e=!1,l()}}}function Qe(m){let r,t,o,u=be,n=[];for(let e=0;e<u.length;e+=1)n[e]=ye(we(m,u,e));const a=e=>U(n[e],1,1,()=>{n[e]=null});return{c(){r=L("div"),t=L("div");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){r=z(e,"DIV",{class:!0});var l=A(r);t=z(l,"DIV",{class:!0});var c=A(t);for(let v=0;v<n.length;v+=1)n[v].l(c);c.forEach(_),l.forEach(_),this.h()},h(){b(t,"class","icons-container svelte-5fpt8e"),b(r,"class","wrapper svelte-5fpt8e")},m(e,l){O(e,r,l),x(r,t);for(let c=0;c<n.length;c+=1)n[c].m(t,null);o=!0},p(e,[l]){if(l&0){u=be;let c;for(c=0;c<u.length;c+=1){const v=we(e,u,c);n[c]?(n[c].p(v,l),B(n[c],1)):(n[c]=ye(v),n[c].c(),B(n[c],1),n[c].m(t,null))}for(_e(),c=u.length;c<n.length;c+=1)a(c);xe()}},i(e){if(!o){for(let l=0;l<u.length;l+=1)B(n[l]);o=!0}},o(e){n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)U(n[l]);o=!1},d(e){e&&_(r),Ce(n,e)}}}const be=[{link:"https://github.com/ajl0023",component:Ke,download:null},{link:"mailto:austinjlee.0@gmail.com",component:Xe,download:null},{link:"https://www.linkedin.com/in/austin-lee-91a341215/",component:Ze,download:null},{link:"./AustinLeeResume.pdf",component:We,download:"AustinLeeResume.pdf"}];function et(m){return ie(async()=>{}),[t=>{t.download||window.open(t.link,"_blank")}]}class tt extends Z{constructor(r){super(),J(this,r,et,Qe,X,{})}}function nt(m){let r,t,o,u,n,a,e,l;t=new tt({});const c=m[1].default,v=Le(c,m,m[0],null);return n=new qe({}),{c(){r=L("div"),ee(t.$$.fragment),o=G(),v&&v.c(),u=G(),ee(n.$$.fragment),a=G(),e=L("div"),this.h()},l(p){r=z(p,"DIV",{class:!0});var g=A(r);se(t.$$.fragment,g),o=W(g),v&&v.l(g),u=W(g),se(n.$$.fragment,g),a=W(g),e=z(g,"DIV",{class:!0}),A(e).forEach(_),g.forEach(_),this.h()},h(){b(e,"class","test"),b(r,"class","wrapper svelte-hckrfc")},m(p,g){O(p,r,g),te(t,r,null),x(r,o),v&&v.m(r,null),x(r,u),te(n,r,null),x(r,a),x(r,e),l=!0},p(p,[g]){v&&v.p&&(!l||g&1)&&ze(v,c,p,p[0],l?Pe(c,p[0],g,null):Te(p[0]),null)},i(p){l||(B(t.$$.fragment,p),B(v,p),B(n.$$.fragment,p),l=!0)},o(p){U(t.$$.fragment,p),U(v,p),U(n.$$.fragment,p),l=!1},d(p){p&&_(r),ne(t),v&&v.d(p),ne(n)}}}function rt(m,r,t){let{$$slots:o={},$$scope:u}=r;return ie(async()=>{await Se(()=>import("../chunks/cubes-436ca759.js"),[])}),m.$$set=n=>{"$$scope"in n&&t(0,u=n.$$scope)},[u,o]}class st extends Z{constructor(r){super(),J(this,r,rt,nt,X,{})}}export{st as default};

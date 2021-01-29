var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var g=/\blang(?:uage)?-([\w-]+)\b/i,t=0,O=_self.Prism={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof i?new i(e.type,O.util.encode(e.content),e.alias):"Array"===O.util.type(e)?e.map(O.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,n){var t=O.util.type(e);switch(n=n||{},t){case"Object":if(n[O.util.objId(e)])return n[O.util.objId(e)];var a={};for(var r in n[O.util.objId(e)]=a,e)e.hasOwnProperty(r)&&(a[r]=O.util.clone(e[r],n));return a;case"Array":if(n[O.util.objId(e)])return n[O.util.objId(e)];var a=[];return n[O.util.objId(e)]=a,e.forEach(function(e,t){a[t]=O.util.clone(e,n)}),a}return e}},languages:{extend:function(e,t){var n=O.util.clone(O.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(n,e,t,a){var r=(a=a||O.languages)[n];if(2==arguments.length){for(var s in t=e)t.hasOwnProperty(s)&&(r[s]=t[s]);return r}var i={};for(var o in r)if(r.hasOwnProperty(o)){if(o==e)for(var s in t)t.hasOwnProperty(s)&&(i[s]=t[s]);i[o]=r[o]}var l=a[n];return a[n]=i,O.languages.DFS(O.languages,function(e,t){t===l&&e!=n&&(this[e]=i)}),i},DFS:function(e,t,n,a){for(var r in a=a||{},e)e.hasOwnProperty(r)&&(t.call(e,r,e[r],n||r),"Object"!==O.util.type(e[r])||a[O.util.objId(e[r])]?"Array"!==O.util.type(e[r])||a[O.util.objId(e[r])]||(a[O.util.objId(e[r])]=!0,O.languages.DFS(e[r],t,r,a)):(a[O.util.objId(e[r])]=!0,O.languages.DFS(e[r],t,null,a)))}},plugins:{},highlightAll:function(e,t){O.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};O.hooks.run("before-highlightall",a);for(var r,s=a.elements||e.querySelectorAll(a.selector),i=0;r=s[i++];)O.highlightElement(r,!0===t,a.callback)},highlightElement:function(e,t,n){for(var a,r,s=e;s&&!g.test(s.className);)s=s.parentNode;s&&(a=(s.className.match(g)||[,""])[1].toLowerCase(),r=O.languages[a]),e.className=e.className.replace(g,"").replace(/\s+/g," ")+" language-"+a,e.parentNode&&(s=e.parentNode,/pre/i.test(s.nodeName)&&(s.className=s.className.replace(g,"").replace(/\s+/g," ")+" language-"+a));var i,o={element:e,language:a,grammar:r,code:e.textContent};if(O.hooks.run("before-sanity-check",o),!o.code||!o.grammar)return o.code&&(O.hooks.run("before-highlight",o),o.element.textContent=o.code,O.hooks.run("after-highlight",o)),void O.hooks.run("complete",o);if(O.hooks.run("before-highlight",o),t&&_self.Worker){var l=new Worker(O.filename);l.onmessage=function(e){o.highlightedCode=e.data,O.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,O.hooks.run("after-highlight",o),O.hooks.run("complete",o),n&&n.call(o.element)},l.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else o.highlightedCode=O.highlight(o.code,o.grammar,o.language),O.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,O.hooks.run("after-highlight",o),O.hooks.run("complete",o),n&&n.call(e)},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};return O.hooks.run("before-tokenize",a),a.tokens=O.tokenize(a.code,a.grammar),O.hooks.run("after-tokenize",a),i.stringify(O.util.encode(a.tokens),a.language)},matchGrammar:function(e,t,n,a,r,s,i){var o=O.Token;for(var l in n)if(n.hasOwnProperty(l)&&n[l]){if(l==i)return;var g=n[l];g="Array"===O.util.type(g)?g:[g];for(var u=0;u<g.length;++u){var c=g[u],p=c.inside,d=!!c.lookbehind,m=!!c.greedy,f=0,h=c.alias;if(m&&!c.pattern.global){var b=c.pattern.toString().match(/[imuy]*$/)[0];c.pattern=RegExp(c.pattern.source,b+"g")}c=c.pattern||c;for(var y=a,k=r;y<t.length;k+=t[y].length,++y){var w=t[y];if(t.length>e.length)return;if(!(w instanceof o)){if(m&&y!=t.length-1){var v;if(c.lastIndex=k,!(v=c.exec(e)))break;for(var P=v.index+(d?v[1].length:0),_=v.index+v[0].length,x=y,F=k,$=t.length;x<$&&(F<_||!t[x].type&&!t[x-1].greedy);++x)(F+=t[x].length)<=P&&(++y,k=F);if(t[y]instanceof o)continue;S=x-y,w=e.slice(k,F),v.index-=k}else{c.lastIndex=0;var v=c.exec(w),S=1}if(v){d&&(f=v[1]?v[1].length:0);var P,v,_=(P=v.index+f)+(v=v[0].slice(f)).length,j=w.slice(0,P),A=w.slice(_),B=[y,S];j&&(++y,k+=j.length,B.push(j));var z=new o(l,p?O.tokenize(v,p):v,h,v,m);if(B.push(z),A&&B.push(A),Array.prototype.splice.apply(t,B),1!=S&&O.matchGrammar(e,t,n,y,k,!0,l),s)break}else if(s)break}}}}},tokenize:function(e,t){var n=[e],a=t.rest;if(a){for(var r in a)t[r]=a[r];delete t.rest}return O.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=O.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=O.hooks.all[e];if(n&&n.length)for(var a,r=0;a=n[r++];)a(t)}}},i=O.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r};if(i.stringify=function(t,n,e){if("string"==typeof t)return t;if("Array"===O.util.type(t))return t.map(function(e){return i.stringify(e,n,t)}).join("");var a={type:t.type,content:i.stringify(t.content,n,e),tag:"span",classes:["token",t.type],attributes:{},language:n,parent:e};if(t.alias){var r="Array"===O.util.type(t.alias)?t.alias:[t.alias];Array.prototype.push.apply(a.classes,r)}O.hooks.run("wrap",a);var s=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(s?" "+s:"")+">"+a.content+"</"+a.tag+">"},!_self.document)return _self.addEventListener&&(O.disableWorkerMessageHandler||_self.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,a=t.code,r=t.immediateClose;_self.postMessage(O.highlight(a,O.languages[n],n)),r&&_self.close()},!1)),_self.Prism;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(O.filename=e.src,O.manual||e.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(O.highlightAll):window.setTimeout(O.highlightAll,16):document.addEventListener("DOMContentLoaded",O.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.languages.css,Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css",greedy:!0}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},/\b(?:as|async|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\(|\.(?:apply|bind|call)\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript",greedy:!0}}),Prism.languages.js=Prism.languages.javascript,Prism.languages["markup-templating"]={},Object.defineProperties(Prism.languages["markup-templating"],{buildPlaceholders:{value:function(n,a,e,r){n.language===a&&(n.tokenStack=[],n.code=n.code.replace(e,function(e){if("function"==typeof r&&!r(e))return e;for(var t=n.tokenStack.length;-1!==n.code.indexOf("___"+a.toUpperCase()+t+"___");)++t;return n.tokenStack[t]=e,"___"+a.toUpperCase()+t+"___"}),n.grammar=Prism.languages.markup)}},tokenizePlaceholders:{value:function(c,p){if(c.language===p&&c.tokenStack){c.grammar=Prism.languages[p];var d=0,m=Object.keys(c.tokenStack),f=function(e){if(!(d>=m.length))for(var t=0;t<e.length;t++){var n=e[t];if("string"==typeof n||n.content&&"string"==typeof n.content){var a=m[d],r=c.tokenStack[a],s="string"==typeof n?n:n.content,i=s.indexOf("___"+p.toUpperCase()+a+"___");if(-1<i){++d;var o,l=s.substring(0,i),g=new Prism.Token(p,Prism.tokenize(r,c.grammar,p),"language-"+p,r),u=s.substring(i+("___"+p.toUpperCase()+a+"___").length);if(l||u?(o=[l,g,u].filter(function(e){return!!e}),f(o)):o=g,"string"==typeof n?Array.prototype.splice.apply(e,[t,1].concat(o)):n.content=o,d>=m.length)break}}else n.content&&"string"!=typeof n.content&&f(n.content)}};f(c.tokens)}}}}),function(n){n.languages.php=n.languages.extend("clike",{keyword:/\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0}}),n.languages.insertBefore("php","string",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),n.languages.insertBefore("php","keyword",{delimiter:{pattern:/\?>|<\?(?:php|=)?/i,alias:"important"},variable:/\$+(?:\w+\b|(?={))/i,package:{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),n.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}});var e={pattern:/{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,lookbehind:!0,inside:{rest:n.languages.php}};n.languages.insertBefore("php","string",{"nowdoc-string":{pattern:/<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},"heredoc-string":{pattern:/<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:e}},"single-quoted-string":{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,alias:"string",inside:{interpolation:e}}}),delete n.languages.php.string,n.hooks.add("before-tokenize",function(e){if(/(?:<\?php|<\?)/gi.test(e.code)){var t=/(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi;n.languages["markup-templating"].buildPlaceholders(e,"php",t)}}),n.hooks.add("after-tokenize",function(e){n.languages["markup-templating"].tokenizePlaceholders(e,"php")})}(Prism),Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.scss.property={pattern:/(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}},Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss,function(i){var e=i.util.clone(i.languages.javascript);i.languages.jsx=i.languages.extend("markup",e),i.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i,i.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,i.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,i.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*$/,i.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},i.languages.jsx.tag),i.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:i.languages.jsx},alias:"language-javascript"}},i.languages.jsx.tag);var o=function(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(o).join(""):""},l=function(e){for(var t=[],n=0;n<e.length;n++){var a=e[n],r=!1;if("string"!=typeof a&&("tag"===a.type&&a.content[0]&&"tag"===a.content[0].type?"</"===a.content[0].content[0].content?0<t.length&&t[t.length-1].tagName===o(a.content[0].content[1])&&t.pop():"/>"===a.content[a.content.length-1].content||t.push({tagName:o(a.content[0].content[1]),openedBraces:0}):0<t.length&&"punctuation"===a.type&&"{"===a.content?t[t.length-1].openedBraces++:0<t.length&&0<t[t.length-1].openedBraces&&"punctuation"===a.type&&"}"===a.content?t[t.length-1].openedBraces--:r=!0),(r||"string"==typeof a)&&0<t.length&&0===t[t.length-1].openedBraces){var s=o(a);n<e.length-1&&("string"==typeof e[n+1]||"plain-text"===e[n+1].type)&&(s+=o(e[n+1]),e.splice(n+1,1)),0<n&&("string"==typeof e[n-1]||"plain-text"===e[n-1].type)&&(s=o(e[n-1])+s,e.splice(n-1,1),n--),e[n]=new i.Token("plain-text",s,null,s)}a.content&&"string"!=typeof a.content&&l(a.content)}};i.hooks.add("after-tokenize",function(e){("jsx"===e.language||"tsx"===e.language)&&l(e.tokens)})}(Prism),function(e){e.languages.sass=e.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,lookbehind:!0}}),e.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,inside:{atrule:/(?:@[\w-]+|[+=])/m}}}),delete e.languages.sass.atrule;var t=/\$[-\w]+|#\{\$[-\w]+\}/,n=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,{pattern:/(\s+)-(?=\s)/,lookbehind:!0}];e.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,inside:{punctuation:/:/,variable:t,operator:n}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:t,operator:n,important:e.languages.sass.important}}}),delete e.languages.sass.property,delete e.languages.sass.important,delete e.languages.sass.selector,e.languages.insertBefore("sass","punctuation",{selector:{pattern:/([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,lookbehind:!0}})}(Prism);
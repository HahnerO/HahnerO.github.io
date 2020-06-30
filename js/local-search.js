function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}window.addEventListener("DOMContentLoaded",function(){var n=!1,r=void 0,o=!0,e=CONFIG.path;function T(e,t,n){var r=e.length;if(0===r)return[];var o=0,a=[],c=[];for(n||(t=t.toLowerCase(),e=e.toLowerCase());-1<(a=t.indexOf(e,o));)c.push({position:a,word:e}),o=a+r;return c}function q(e,t,n,r){for(var o=n[n.length-1],a=o.position,c=o.word,i=[],l=0;a+c.length<=t&&0!==n.length;){c===r&&l++,i.push({position:a,length:c.length});var s=a+c.length;for(n.pop();0!==n.length&&(a=(o=n[n.length-1]).position,c=o.word,a<s);)n.pop()}return{hits:i,start:e,end:t,searchTextCount:l}}function E(n,e){var r="",o=e.start;return e.hits.forEach(function(e){r+=n.substring(o,e.position);var t=e.position+e.length;r+='<b class="search-keyword">'+n.substring(e.position,t)+"</b>",o=t}),r+=n.substring(o,e.end)}function t(){var x=i.value.trim().toLowerCase(),L=x.split(/[-\s]+/);1<L.length&&L.push(x);var S=[];if(0<x.length&&r.forEach(function(e){if(e.title){var t=0,n=e.title.trim(),r=n.toLowerCase(),o=e.content?e.content.trim().replace(/<[^>]+>/g,""):"";CONFIG.localsearch.unescape&&(o=String(o).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#x3A;/g,":").replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(t)}).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"));var a=o.toLowerCase(),c=decodeURIComponent(e.url).replace(/\/{2,}/g,"/"),i=[],l=[];if(L.forEach(function(e){i=i.concat(T(e,r,!1)),l=l.concat(T(e,a,!1))}),0<i.length||0<l.length){var s=i.length+l.length;[i,l].forEach(function(e){e.sort(function(e,t){return t.position!==e.position?t.position-e.position:e.word.length-t.word.length})});var u=[];if(0!==i.length){var h=q(0,n.length,i,x);t+=h.searchTextCountInSlice,u.push(h)}for(var p=[];0!==l.length;){var d=l[l.length-1],f=d.position,g=d.word,y=f-20,v=f+80;y<0&&(y=0),v<f+g.length&&(v=f+g.length),v>o.length&&(v=o.length);var C=q(y,v,l,x);t+=C.searchTextCountInSlice,p.push(C)}p.sort(function(e,t){return e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hits.length!==t.hits.length?t.hits.length-e.hits.length:e.start-t.start});var m=parseInt(CONFIG.localsearch.top_n_per_article,10);0<=m&&(p=p.slice(0,m));var w="";0!==u.length?w+='<li><a href="'+c+'" class="search-result-title">'+E(n,u[0])+"</a>":w+='<li><a href="'+c+'" class="search-result-title">'+n+"</a>",p.forEach(function(e){w+='<a href="'+c+'"><p class="search-result">'+E(o,e)+"...</p></a>"}),w+="</li>",S.push({item:w,searchTextCount:t,hitCount:s,id:S.length})}}}),1===L.length&&""===L[0])l.innerHTML='<div id="no-result"><i class="fa fa-search fa-5x"></i></div>';else if(0===S.length)l.innerHTML='<div id="no-result"><i class="fa fa-frown-o fa-5x"></i></div>';else{S.sort(function(e,t){return e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hitCount!==t.hitCount?t.hitCount-e.hitCount:t.id-e.id});var t='<ul class="search-result-list">';S.forEach(function(e){t+=e.item}),t+="</ul>",l.innerHTML=t,window.pjax&&window.pjax.refresh(l)}}function a(t){fetch(c).then(function(e){return e.text()}).then(function(e){n=!0,r=o?[].concat(_toConsumableArray((new DOMParser).parseFromString(e,"text/xml").querySelectorAll("entry"))).map(function(e){return{title:e.querySelector("title").innerHTML,content:e.querySelector("content").innerHTML,url:e.querySelector("url").innerHTML}}):JSON.parse(e),document.querySelector(".search-pop-overlay").innerHTML="",document.body.style.overflow="",t&&t()})}0===e.length?e="search.xml":/json$/i.test(e)&&(o=!1);var c=CONFIG.root+e,i=document.querySelector(".search-input"),l=document.getElementById("search-result");function s(){document.body.style.overflow="hidden",document.querySelector(".search-pop-overlay").style.display="block",document.querySelector(".popup").style.display="block",document.querySelector(".search-input").focus()}function u(){document.body.style.overflow="",document.querySelector(".search-pop-overlay").style.display="none",document.querySelector(".popup").style.display="none"}CONFIG.localsearch.preload&&a(),"auto"===CONFIG.localsearch.trigger?i.addEventListener("input",t):(document.querySelector(".search-icon").addEventListener("click",t),i.addEventListener("keypress",function(e){"Enter"===e.key&&t()})),document.querySelector(".popup-trigger").addEventListener("click",function(){!1===n?(document.querySelector(".search-pop-overlay").style.display="",document.querySelector(".search-pop-overlay").innerHTML='<div class="search-loading-icon"><i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i></div>',a(s)):s()}),document.querySelector(".search-pop-overlay").addEventListener("click",u),document.querySelector(".popup-btn-close").addEventListener("click",u),window.addEventListener("pjax:success",u),window.addEventListener("keyup",function(e){"Escape"===e.key&&u()})});
/* esm.sh - esbuild bundle(trim-lines@3.0.1) node production */
function r(c){let i=String(c),o=/\r?\n|\r/g,e=o.exec(i),t=0,n=[];for(;e;)n.push(s(i.slice(t,e.index),t>0,!0),e[0]),t=e.index+e[0].length,e=o.exec(i);return n.push(s(i.slice(t),t>0,!1)),n.join("")}function s(c,i,o){let e=0,t=c.length;if(i){let n=c.codePointAt(e);for(;n===9||n===32;)e++,n=c.codePointAt(e)}if(o){let n=c.codePointAt(t-1);for(;n===9||n===32;)t--,n=c.codePointAt(t-1)}return t>e?c.slice(e,t):""}export{r as trimLines};
//# sourceMappingURL=trim-lines.mjs.map
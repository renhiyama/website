/* esm.sh - esbuild bundle(estree-util-attach-comments@2.1.1) node production */
var a={}.hasOwnProperty;function f(n,e){let t=(e||[]).concat().sort(l);return t.length>0&&u(n,{comments:t,index:0}),n}function u(n,e){if(e.index===e.comments.length)return;let t=[],o=[],i;for(i in n)if(a.call(n,i)){let c=n[i];if(c&&typeof c=="object"&&i!=="comments")if(Array.isArray(c)){let r=-1;for(;++r<c.length;)c[r]&&typeof c[r].type=="string"&&t.push(c[r])}else typeof c.type=="string"&&t.push(c)}t.sort(l),o.push(...m(e,n,!1,{leading:!0,trailing:!1}));let s=-1;for(;++s<t.length;)u(t[s],e);o.push(...m(e,n,!0,{leading:!1,trailing:t.length>0})),o.length>0&&(n.comments=o)}function m(n,e,t,o){let i=[];for(;n.comments[n.index]&&l(n.comments[n.index],e,t)<1;)i.push(Object.assign({},n.comments[n.index++],o));return i}function l(n,e,t){let o=t?"end":"start";return n.range&&e.range?n.range[0]-e.range[t?1:0]:n.loc&&n.loc.start&&e.loc&&e.loc[o]?n.loc.start.line-e.loc[o].line||n.loc.start.column-e.loc[o].column:"start"in n&&o in e?n.start-e[o]:Number.NaN}export{f as attachComments};
//# sourceMappingURL=estree-util-attach-comments.mjs.map
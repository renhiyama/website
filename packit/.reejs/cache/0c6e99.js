/* esm.sh - esbuild bundle(trough@2.1.0) node production */
function x(){let f=[],u={run:c,use:h};return u;function c(...n){let s=-1,t=n.pop();if(typeof t!="function")throw new TypeError("Expected function as last argument, not "+t);o(null,...n);function o(e,...i){let r=f[++s],l=-1;if(e){t(e);return}for(;++l<n.length;)(i[l]===null||i[l]===void 0)&&(i[l]=n[l]);n=i,r?p(r,o)(...i):t(null,...i)}}function h(n){if(typeof n!="function")throw new TypeError("Expected `middelware` to be a function, not "+n);return f.push(n),u}}function p(f,u){let c;return h;function h(...t){let o=f.length>t.length,e;o&&t.push(n);try{e=f.apply(this,t)}catch(i){let r=i;if(o&&c)throw r;return n(r)}o||(e instanceof Promise?e.then(s,n):e instanceof Error?n(e):s(e))}function n(t,...o){c||(c=!0,u(t,...o))}function s(t){n(null,t)}}export{x as trough,p as wrap};
//# sourceMappingURL=trough.mjs.map
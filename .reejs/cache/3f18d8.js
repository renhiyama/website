/* esm.sh - esbuild bundle(unist-util-position-from-estree@1.1.2) node production */
function u(t){let d=t||{},n=d.loc||{},o=d.range||[0,0],r=n.start?e(n.start.column):void 0,i=n.end?e(n.end.column):void 0;return{start:{line:n.start?e(n.start.line):void 0,column:r===void 0?void 0:r+1,offset:e(o[0]||d.start)},end:{line:n.end?e(n.end.line):void 0,column:i===void 0?void 0:i+1,offset:e(o[1]||d.end)}}}function e(t){return typeof t=="number"&&t>-1?t:void 0}export{u as positionFromEstree};
//# sourceMappingURL=unist-util-position-from-estree.mjs.map
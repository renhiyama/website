/* esm.sh - esbuild bundle(micromark-extension-gfm-tagfilter@1.0.2) node production */
var i=/<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi,s=new RegExp("^"+i.source,"i"),o={exit:{htmlFlowData(t){l.call(this,t,i)},htmlTextData(t){l.call(this,t,s)}}};function l(t,a){let e=this.sliceSerialize(t);this.options.allowDangerousHtml&&(e=e.replace(a,"&lt;$1$2")),this.raw(this.encode(e))}export{o as gfmTagfilterHtml};
//# sourceMappingURL=micromark-extension-gfm-tagfilter.mjs.map
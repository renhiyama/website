/* esm.sh - esbuild bundle(mdast-util-from-markdown@1.3.1) node production */
import{toString as Ce}from"./80f300.js";import{parse as Re}from"./154865.js";import{preprocess as He}from"./68bdf9.js";import{postprocess as Le}from"./b6387f.js";import{decodeNumericCharacterReference as ze}from"./52f831.js";import{decodeString as De}from"./1b971a.js";import{normalizeIdentifier as F}from"./46e3c9.js";import{decodeNamedCharacterReference as Oe}from"./9e39f9.js";import{stringifyPosition as T}from"./c81b5e.js";var Q={}.hasOwnProperty,Pe=function(d,r,c){return typeof r!="string"&&(c=r,r=void 0),Me(c)(Le(Re(c).document().write(He()(d,r,!0))))};function Me(d){let r={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(P),autolinkProtocol:k,autolinkEmail:k,atxHeading:a(z),blockQuote:a(xe),characterEscape:k,characterReference:k,codeFenced:a(L),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:a(L,u),codeText:a(ye,u),codeTextData:k,data:k,codeFlowValue:k,definition:a(Se),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:a(be),hardBreakEscape:a(D),hardBreakTrailing:a(D),htmlFlow:a(O,u),htmlFlowData:k,htmlText:a(O,u),htmlTextData:k,image:a(we),label:u,link:a(P),listItem:a(Ie),listItemValue:j,listOrdered:a(M,_),listUnordered:a(M),paragraph:a(Te),reference:ue,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:a(z),strong:a(Ee),thematicBreak:a(Be)},exit:{atxHeading:o(),atxHeadingSequence:Z,autolink:o(),autolinkEmail:me,autolinkProtocol:ke,blockQuote:o(),characterEscapeValue:m,characterReferenceMarkerHexadecimal:H,characterReferenceMarkerNumeric:H,characterReferenceValue:ge,codeFenced:o(G),codeFencedFence:$,codeFencedFenceInfo:A,codeFencedFenceMeta:W,codeFlowValue:m,codeIndented:o(J),codeText:o(se),codeTextData:m,data:m,definition:o(),definitionDestinationString:Y,definitionLabelString:K,definitionTitleString:X,emphasis:o(),hardBreakEscape:o(R),hardBreakTrailing:o(R),htmlFlow:o(ie),htmlFlowData:m,htmlText:o(re),htmlTextData:m,image:o(ae),label:le,labelText:oe,lineEnding:ne,link:o(ce),listItem:o(),listOrdered:o(),listUnordered:o(),paragraph:o(),referenceString:pe,resourceDestinationString:de,resourceTitleString:he,resource:fe,setextHeading:o(te),setextHeadingLineSequence:ee,setextHeadingText:v,strong:o(),thematicBreak:o()}};q(r,(d||{}).mdastExtensions||[]);let c={};return f;function f(e){let t={type:"root",children:[]},n={stack:[t],tokenStack:[],config:r,enter:B,exit:C,buffer:u,resume:U,setData:h,getData:g},i=[],s=-1;for(;++s<e.length;)if(e[s][1].type==="listOrdered"||e[s][1].type==="listUnordered")if(e[s][0]==="enter")i.push(s);else{let p=i.pop();s=N(e,p,s)}for(s=-1;++s<e.length;){let p=r[e[s][0]];Q.call(p,e[s][1].type)&&p[e[s][1].type].call(Object.assign({sliceSerialize:e[s][2].sliceSerialize},n),e[s][1])}if(n.tokenStack.length>0){let p=n.tokenStack[n.tokenStack.length-1];(p[1]||V).call(n,void 0,p[0])}for(t.position={start:b(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:b(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},s=-1;++s<r.transforms.length;)t=r.transforms[s](t)||t;return t}function N(e,t,n){let i=t-1,s=-1,p=!1,S,x,w,I;for(;++i<=n;){let l=e[i];if(l[1].type==="listUnordered"||l[1].type==="listOrdered"||l[1].type==="blockQuote"?(l[0]==="enter"?s++:s--,I=void 0):l[1].type==="lineEndingBlank"?l[0]==="enter"&&(S&&!I&&!s&&!w&&(w=i),I=void 0):l[1].type==="linePrefix"||l[1].type==="listItemValue"||l[1].type==="listItemMarker"||l[1].type==="listItemPrefix"||l[1].type==="listItemPrefixWhitespace"||(I=void 0),!s&&l[0]==="enter"&&l[1].type==="listItemPrefix"||s===-1&&l[0]==="exit"&&(l[1].type==="listUnordered"||l[1].type==="listOrdered")){if(S){let E=i;for(x=void 0;E--;){let y=e[E];if(y[1].type==="lineEnding"||y[1].type==="lineEndingBlank"){if(y[0]==="exit")continue;x&&(e[x][1].type="lineEndingBlank",p=!0),y[1].type="lineEnding",x=E}else if(!(y[1].type==="linePrefix"||y[1].type==="blockQuotePrefix"||y[1].type==="blockQuotePrefixWhitespace"||y[1].type==="blockQuoteMarker"||y[1].type==="listItemIndent"))break}w&&(!x||w<x)&&(S._spread=!0),S.end=Object.assign({},x?e[x][1].start:l[1].end),e.splice(x||i,0,["exit",S,l[2]]),i++,n++}l[1].type==="listItemPrefix"&&(S={type:"listItem",_spread:!1,start:Object.assign({},l[1].start),end:void 0},e.splice(i,0,["enter",S,l[2]]),i++,n++,w=void 0,I=!0)}}return e[t][1]._spread=p,n}function h(e,t){c[e]=t}function g(e){return c[e]}function a(e,t){return n;function n(i){B.call(this,e(i),i),t&&t.call(this,i)}}function u(){this.stack.push({type:"fragment",children:[]})}function B(e,t,n){return this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n]),e.position={start:b(t.start)},e}function o(e){return t;function t(n){e&&e.call(this,n),C.call(this,n)}}function C(e,t){let n=this.stack.pop(),i=this.tokenStack.pop();if(i)i[0].type!==e.type&&(t?t.call(this,e,i[0]):(i[1]||V).call(this,e,i[0]));else throw new Error("Cannot close `"+e.type+"` ("+T({start:e.start,end:e.end})+"): it\u2019s not open");return n.position.end=b(e.end),n}function U(){return Ce(this.stack.pop())}function _(){h("expectingFirstListItemValue",!0)}function j(e){if(g("expectingFirstListItemValue")){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),h("expectingFirstListItemValue")}}function A(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function W(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function $(){g("flowCodeInside")||(this.buffer(),h("flowCodeInside",!0))}function G(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),h("flowCodeInside")}function J(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,"")}function K(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=F(this.sliceSerialize(e)).toLowerCase()}function X(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function Y(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function Z(e){let t=this.stack[this.stack.length-1];if(!t.depth){let n=this.sliceSerialize(e).length;t.depth=n}}function v(){h("setextHeadingSlurpLineEnding",!0)}function ee(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).charCodeAt(0)===61?1:2}function te(){h("setextHeadingSlurpLineEnding")}function k(e){let t=this.stack[this.stack.length-1],n=t.children[t.children.length-1];(!n||n.type!=="text")&&(n=Fe(),n.position={start:b(e.start)},t.children.push(n)),this.stack.push(n)}function m(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=b(e.end)}function ne(e){let t=this.stack[this.stack.length-1];if(g("atHardBreak")){let n=t.children[t.children.length-1];n.position.end=b(e.end),h("atHardBreak");return}!g("setextHeadingSlurpLineEnding")&&r.canContainEols.includes(t.type)&&(k.call(this,e),m.call(this,e))}function R(){h("atHardBreak",!0)}function ie(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function re(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function se(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ce(){let e=this.stack[this.stack.length-1];if(g("inReference")){let t=g("referenceType")||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;h("referenceType")}function ae(){let e=this.stack[this.stack.length-1];if(g("inReference")){let t=g("referenceType")||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;h("referenceType")}function oe(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=De(t),n.identifier=F(t).toLowerCase()}function le(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];if(h("inReference",!0),n.type==="link"){let i=e.children;n.children=i}else n.alt=t}function de(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function he(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function fe(){h("inReference")}function ue(){h("referenceType","collapsed")}function pe(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=F(this.sliceSerialize(e)).toLowerCase(),h("referenceType","full")}function H(e){h("characterReferenceType",e.type)}function ge(e){let t=this.sliceSerialize(e),n=g("characterReferenceType"),i;n?(i=ze(t,n==="characterReferenceMarkerNumeric"?10:16),h("characterReferenceType")):i=Oe(t);let s=this.stack.pop();s.value+=i,s.position.end=b(e.end)}function ke(e){m.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function me(e){m.call(this,e);let t=this.stack[this.stack.length-1];t.url="mailto:"+this.sliceSerialize(e)}function xe(){return{type:"blockquote",children:[]}}function L(){return{type:"code",lang:null,meta:null,value:""}}function ye(){return{type:"inlineCode",value:""}}function Se(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function be(){return{type:"emphasis",children:[]}}function z(){return{type:"heading",depth:void 0,children:[]}}function D(){return{type:"break"}}function O(){return{type:"html",value:""}}function we(){return{type:"image",title:null,url:"",alt:null}}function P(){return{type:"link",title:null,url:"",children:[]}}function M(e){return{type:"list",ordered:e.type==="listOrdered",start:null,spread:e._spread,children:[]}}function Ie(e){return{type:"listItem",spread:e._spread,checked:null,children:[]}}function Te(){return{type:"paragraph",children:[]}}function Ee(){return{type:"strong",children:[]}}function Fe(){return{type:"text",value:""}}function Be(){return{type:"thematicBreak"}}}function b(d){return{line:d.line,column:d.column,offset:d.offset}}function q(d,r){let c=-1;for(;++c<r.length;){let f=r[c];Array.isArray(f)?q(d,f):Ve(d,f)}}function Ve(d,r){let c;for(c in r)if(Q.call(r,c)){if(c==="canContainEols"){let f=r[c];f&&d[c].push(...f)}else if(c==="transforms"){let f=r[c];f&&d[c].push(...f)}else if(c==="enter"||c==="exit"){let f=r[c];f&&Object.assign(d[c],f)}}}function V(d,r){throw d?new Error("Cannot close `"+d.type+"` ("+T({start:d.start,end:d.end})+"): a different token (`"+r.type+"`, "+T({start:r.start,end:r.end})+") is open"):new Error("Cannot close document, a token (`"+r.type+"`, "+T({start:r.start,end:r.end})+") is still open")}export{Pe as fromMarkdown};
//# sourceMappingURL=mdast-util-from-markdown.mjs.map
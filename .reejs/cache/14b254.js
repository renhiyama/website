var o=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});import*as s from"./8203cc.js";import*as p from"./6c12f0.js";import x from"node:fs";var O=s.default??s,g=p.default??p,$=Object.create,c=Object.defineProperty,j=Object.getOwnPropertyDescriptor,S=Object.getOwnPropertyNames,M=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,N=(e=>typeof o<"u"?o:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof o<"u"?o:t)[r]}):e)(function(e){if(typeof o<"u")return o.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')}),D=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),F=(e,t)=>{for(var r in t)c(e,r,{get:t[r],enumerable:!0})},f=(e,t,r,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of S(t))!R.call(e,a)&&a!==r&&c(e,a,{get:()=>t[a],enumerable:!(u=j(t,a))||u.enumerable});return e},T=(e,t,r)=>(f(e,t,"default"),r&&f(r,t,"default")),b=(e,t,r)=>(r=e!=null?$(M(e)):{},f(t||!e||!e.__esModule?c(r,"default",{value:e,enumerable:!0}):r,e)),w=D(e=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.serveStatic=void 0;var t=x,r=g,u=O,a=(n={root:""})=>async(l,d)=>{l.finalized&&await d();let q=new URL(l.req.url),y=n.path??decodeURI(q.pathname),i=(0,r.getFilePath)({filename:n.rewriteRequestPath?n.rewriteRequestPath(y):y,root:n.root,defaultDocument:n.index??"index.html"});if(i=`./${i}`,(0,t.existsSync)(i)){let v=(0,t.readFileSync)(i);if(v){let m=(0,u.getMimeType)(i);return m&&l.header("Content-Type",m),l.body(v)}}console.warn(`Static file: ${i} is not found`),await d()};e.serveStatic=a}),P={};F(P,{__esModule:()=>U,default:()=>E,serveStatic:()=>z});var h=b(w());T(P,b(w()));var U=!0,{serveStatic:z}=h,{default:_,...C}=h,E=_!==void 0?_:C;export{U as __esModule,E as default,z as serveStatic};
//# sourceMappingURL=serve-static.bundle.js.map
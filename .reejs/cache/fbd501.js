/* esm.sh - esbuild bundle(property-information@6.2.0) node production */
var E=Object.defineProperty;var U=(e,o)=>{for(var r in o)E(e,r,{get:o[r],enumerable:!0})};var m=class{constructor(o,r,a){this.property=o,this.normal=r,a&&(this.space=a)}};m.prototype.property={};m.prototype.normal={};m.prototype.space=null;function b(e,o){let r={},a={},d=-1;for(;++d<e.length;)Object.assign(r,e[d].property),Object.assign(a,e[d].normal);return new m(r,a,o)}function v(e){return e.toLowerCase()}var u=class{constructor(o,r){this.property=o,this.attribute=r}};u.prototype.space=null;u.prototype.boolean=!1;u.prototype.booleanish=!1;u.prototype.overloadedBoolean=!1;u.prototype.number=!1;u.prototype.commaSeparated=!1;u.prototype.spaceSeparated=!1;u.prototype.commaOrSpaceSeparated=!1;u.prototype.mustUseProperty=!1;u.prototype.defined=!1;var k={};U(k,{boolean:()=>l,booleanish:()=>i,commaOrSpaceSeparated:()=>s,commaSeparated:()=>g,number:()=>n,overloadedBoolean:()=>C,spaceSeparated:()=>t});var z=0,l=f(),i=f(),C=f(),n=f(),t=f(),g=f(),s=f();function f(){return 2**++z}var L=Object.keys(k),y=class extends u{constructor(o,r,a,d){let c=-1;if(super(o,r),O(this,"space",d),typeof a=="number")for(;++c<L.length;){let h=L[c];O(this,L[c],(a&k[h])===k[h])}}};y.prototype.defined=!0;function O(e,o,r){r&&(e[o]=r)}var I={}.hasOwnProperty;function p(e){let o={},r={},a;for(a in e.properties)if(I.call(e.properties,a)){let d=e.properties[a],c=new y(a,e.transform(e.attributes||{},a),d,e.space);e.mustUseProperty&&e.mustUseProperty.includes(a)&&(c.mustUseProperty=!0),o[a]=c,r[v(a)]=a,r[v(c.attribute)]=a}return new m(o,r,e.space)}var w=p({space:"xlink",transform(e,o){return"xlink:"+o.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});var P=p({space:"xml",transform(e,o){return"xml:"+o.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function x(e,o){return o in e?e[o]:o}function S(e,o){return x(e,o.toLowerCase())}var D=p({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:S,properties:{xmlns:null,xmlnsXLink:null}});var M=p({transform(e,o){return o==="role"?o:"aria-"+o.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:i,ariaAutoComplete:null,ariaBusy:i,ariaChecked:i,ariaColCount:n,ariaColIndex:n,ariaColSpan:n,ariaControls:t,ariaCurrent:null,ariaDescribedBy:t,ariaDetails:null,ariaDisabled:i,ariaDropEffect:t,ariaErrorMessage:null,ariaExpanded:i,ariaFlowTo:t,ariaGrabbed:i,ariaHasPopup:null,ariaHidden:i,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:t,ariaLevel:n,ariaLive:null,ariaModal:i,ariaMultiLine:i,ariaMultiSelectable:i,ariaOrientation:null,ariaOwns:t,ariaPlaceholder:null,ariaPosInSet:n,ariaPressed:i,ariaReadOnly:i,ariaRelevant:null,ariaRequired:i,ariaRoleDescription:t,ariaRowCount:n,ariaRowIndex:n,ariaRowSpan:n,ariaSelected:i,ariaSetSize:n,ariaSort:null,ariaValueMax:n,ariaValueMin:n,ariaValueNow:n,ariaValueText:null,role:null}});var R=p({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:S,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:g,acceptCharset:t,accessKey:t,action:null,allow:null,allowFullScreen:l,allowPaymentRequest:l,allowUserMedia:l,alt:null,as:null,async:l,autoCapitalize:null,autoComplete:t,autoFocus:l,autoPlay:l,capture:l,charSet:null,checked:l,cite:null,className:t,cols:n,colSpan:null,content:null,contentEditable:i,controls:l,controlsList:t,coords:n|g,crossOrigin:null,data:null,dateTime:null,decoding:null,default:l,defer:l,dir:null,dirName:null,disabled:l,download:C,draggable:i,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:l,formTarget:null,headers:t,height:n,hidden:l,high:n,href:null,hrefLang:null,htmlFor:t,httpEquiv:t,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:l,itemId:null,itemProp:t,itemRef:t,itemScope:l,itemType:t,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:l,low:n,manifest:null,max:null,maxLength:n,media:null,method:null,min:null,minLength:n,multiple:l,muted:l,name:null,nonce:null,noModule:l,noValidate:l,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:l,optimum:n,pattern:null,ping:t,placeholder:null,playsInline:l,poster:null,preload:null,readOnly:l,referrerPolicy:null,rel:t,required:l,reversed:l,rows:n,rowSpan:n,sandbox:t,scope:null,scoped:l,seamless:l,selected:l,shape:null,size:n,sizes:null,slot:null,span:n,spellCheck:i,src:null,srcDoc:null,srcLang:null,srcSet:null,start:n,step:null,style:null,tabIndex:n,target:null,title:null,translate:null,type:null,typeMustMatch:l,useMap:null,value:i,width:n,wrap:null,align:null,aLink:null,archive:t,axis:null,background:null,bgColor:null,border:n,borderColor:null,bottomMargin:n,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:l,declare:l,event:null,face:null,frame:null,frameBorder:null,hSpace:n,leftMargin:n,link:null,longDesc:null,lowSrc:null,marginHeight:n,marginWidth:n,noResize:l,noHref:l,noShade:l,noWrap:l,object:null,profile:null,prompt:null,rev:null,rightMargin:n,rules:null,scheme:null,scrolling:i,standby:null,summary:null,text:null,topMargin:n,valueType:null,version:null,vAlign:null,vLink:null,vSpace:n,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:l,disableRemotePlayback:l,prefix:null,property:null,results:n,security:null,unselectable:null}});var T=p({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:x,properties:{about:s,accentHeight:n,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:n,amplitude:n,arabicForm:null,ascent:n,attributeName:null,attributeType:null,azimuth:n,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:n,by:null,calcMode:null,capHeight:n,className:t,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:n,diffuseConstant:n,direction:null,display:null,dur:null,divisor:n,dominantBaseline:null,download:l,dx:null,dy:null,edgeMode:null,editable:null,elevation:n,enableBackground:null,end:null,event:null,exponent:n,externalResourcesRequired:null,fill:null,fillOpacity:n,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:g,g2:g,glyphName:g,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:n,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:n,horizOriginX:n,horizOriginY:n,id:null,ideographic:n,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:n,k:n,k1:n,k2:n,k3:n,k4:n,kernelMatrix:s,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:n,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:n,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:n,overlineThickness:n,paintOrder:null,panose1:null,path:null,pathLength:n,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:t,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:n,pointsAtY:n,pointsAtZ:n,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:s,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:s,rev:s,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:s,requiredFeatures:s,requiredFonts:s,requiredFormats:s,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:n,specularExponent:n,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:n,strikethroughThickness:n,string:null,stroke:null,strokeDashArray:s,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:n,strokeOpacity:n,strokeWidth:null,style:null,surfaceScale:n,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:s,tabIndex:n,tableValues:null,target:null,targetX:n,targetY:n,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:s,to:null,transform:null,u1:null,u2:null,underlinePosition:n,underlineThickness:n,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:n,values:null,vAlphabetic:n,vMathematical:n,vectorEffect:null,vHanging:n,vIdeographic:n,version:null,vertAdvY:n,vertOriginX:n,vertOriginY:n,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:n,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}});var B=/^data[-\w.:]+$/i,A=/-[a-z]/g,H=/[A-Z]/g;function F(e,o){let r=v(o),a=o,d=u;if(r in e.normal)return e.property[e.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&B.test(o)){if(o.charAt(4)==="-"){let c=o.slice(5).replace(A,W);a="data"+c.charAt(0).toUpperCase()+c.slice(1)}else{let c=o.slice(4);if(!A.test(c)){let h=c.replace(H,V);h.charAt(0)!=="-"&&(h="-"+h),o="data"+h}}d=y}return new d(a,o)}function V(e){return"-"+e.toLowerCase()}function W(e){return e.charAt(1).toUpperCase()}var j={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var zn=b([P,w,D,M,R],"html"),In=b([P,w,D,M,T],"svg");export{F as find,j as hastToReact,zn as html,v as normalize,In as svg};
//# sourceMappingURL=property-information.mjs.map
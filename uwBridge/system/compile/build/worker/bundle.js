(function () {

    self.window = self;

    !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).$={});}(window,(function(t){const e=Array.from,n=Reflect.apply,r=Object,s=r.keys,i=r.is,o=r.assign,c=r.getOwnPropertyDescriptor,u=r.defineProperty,a=r.getOwnPropertyNames,l=t=>s(t).length;function f(t){return void 0===t}function p(t){return null===t}function h(t){return !f(t)&&!p(t)}function g(t){return e=>!!h(e)&&e.constructor===t}const m=/\.|\+/,y=Array.isArray,d=g(String),b=g(Number),A=t=>!!h(t)&&"Object("===t.constructor.toString().trim().slice(9,16),w=t=>!!h(t)&&t instanceof Function,j=t=>Boolean(t.length),O=t=>e=>!!h(e)&&t.test(e),S=O(/\.css$/),v=O(/\.json$/),C=O(/\.js$/),M=O(/\.html$/),I=O(/\./),R=/\.([0-9a-z]+)/,k=t=>!!t&&t instanceof Promise,x=t=>!!t&&"AsyncFunction"===t.constructor?.name;const F=t=>y(t)&&t||h(t)&&[t]||[],E=t=>t.flat(1/0),U=t=>(t.length=0,t),N=Math,P=N.floor,T=N.random,B=(t,e=0)=>P(T()*(t-e))+e,L=(t,n=t.length)=>{if(t.length<=1)return e(t);const r=e(t);let s,i,o=0;for(;o<n;)s=B(r.length-1,0),i=r[o],r[o]=r[s],r[s]=i,o++;return r},D=Math.min;function $(t,e,n){const r=t.length;for(let s=0;s<r;s++)e(t[s],s,t,r,n);return t}function z(t,e,n){const r=t.length;for(let s=r-1;s>=0;s--)e(t[s],s,t,r,n);return t}function K(t,e,n){const r=t.length;for(let s=0;s<r;s++)if(!1===e(t[s],s,t,r,n))return !1;return !0}function q(t,e,n=[],r){return $(t,((t,s,i,o)=>{!0===e(t,s,n,i,o,r)&&n.push(t);})),n}function W(t,e,n=[],r){return $(t,((t,s,i,o)=>{n[s]=e(t,s,n,i,o,r);})),n}function _(t,e,n=[],r){return $(t,((t,s,i,o)=>{const c=e(t,s,n,i,o,r);h(c)&&n.push(c);})),n}const J=(t,e,n=t.length)=>t.splice(e,n),V=(t,e)=>t.length===e.length&&K(t,((t,n)=>e[n]===t)),Z=Math.max,G=async(t,e)=>{const n=t.length;for(let r=0;r<n;r++)await e(t[r],r,t,n);return t},H=async(t,e)=>{const n=t.length;for(let r=n-1;r>=0;r--)await e(t[r],r,t,n);return t},Q=async(t,e)=>{const n=[];return await G(t,(async(t,r,s)=>{n[r]=await e(t,r,s);})),n},X=(t,e,n)=>n.indexOf(t)===e,Y=(t,e,n)=>t!==n[e-1],tt=(t,e)=>e?t.filter(Y):t.filter(X),et=(t,e)=>t-e,nt=(t,e)=>e-t,rt=(t,e,n)=>{const r=n?t:0,s=n?e:t,i=n||e;for(let t=r;t<s;t++)i(t,r,s);},st=(t,e,n=!0)=>(n?t:[...t]).sort(((t,n)=>n[e]?t[e]?t[e]<n[e]?1:t[e]>n[e]?-1:0:1:-1)),it=(t,e="id",n=!0)=>(n?t:[...t]).sort(((t,n)=>n[e]?t[e]?t[e]<n[e]?-1:t[e]>n[e]?1:0:-1:1)),ot=(t,e)=>W(e,(e=>t[e])),ct=(t,e,n,r,s)=>{if(t[s]===r)return !0},ut=(t,e)=>{$(s(t),((n,r,s,i)=>{e(t[n],n,t,i,s);}));},at=(t,e)=>K(s(t),((n,r,s,i)=>e(t[n],n,t,i,s))),lt=(t,e,n={})=>(ut(t,((t,r,s,i,o)=>{!0===e(t,r,n,s,i,o)&&(n[r]=t);})),n),ft=(t,e,n={})=>(ut(t,((t,r,s,i,o)=>{n[r]=e(t,r,n,s,i,o);})),n),pt=(t,e,n={})=>(ut(t,((t,r,s,i,o)=>{const c=e(t,r,n,s,i,o);h(c)&&(n[r]=c);})),n),ht=(t,e)=>t.forEach(e),gt=(t,e)=>(n,r,s)=>{let i;if(h(n))return i=y(n)?t:A(n)||w(n)?e:n.forEach?ht:e,i(n,r,s)},mt=gt(K,at),yt=gt($,ut),dt=gt(q,lt),bt=gt(W,ft),At=gt(_,pt),wt=mt,jt=(t,e)=>setTimeout(t,e),Ot=(t,e)=>setInterval(t,e),St=(t,e)=>()=>{rt(0,t((()=>{}),0),(t=>{e(t);}));},vt=St(jt,clearTimeout),Ct=St(Ot,clearInterval),Mt=(t,e)=>{const n=s(t);return K(e,(t=>n.includes(t)))},It=async(t,e)=>{const n=s(t);return await G(n,((r,s,i,o)=>e(t[r],r,t,o,n))),t},Rt=/[-_]/g,kt=/ (.)/g,xt=(t,e=1)=>t.substr(e),Ft=/%(?![\da-f]{2})/gi,Et=/&/g,Ut=/</g,Nt=/>/g,Pt=/"/g,Tt=t=>decodeURIComponent(t.replace(Ft,(()=>"%25"))),Bt=t=>t.replace(Et,"&amp;").replace(Ut,"&lt;").replace(Nt,"&gt;").replace(Pt,"&quot;"),Lt=/\S+/g,Dt=/\w+/g,$t=/ (.)/g,zt=t=>t[0].toUpperCase(),Kt=t=>zt(t)+xt(t).toLowerCase(),qt=Reflect.construct;function Wt(t,e=[],n){return n?qt(t,e,n):qt(t,e)}const _t=Object.create,Jt=(t,e,n=!1,r,i,o)=>{if(t){if(o){const s=o.pop();if(s){const r=e[s];t[s]=Jt(t[s],r,n);}else if(!i)return t;if(i){let s=r||0;if(s++,s<i)return Jt(t,e,n,s,i,o)}return Jt(t,e,n,null,null,o)}if(i){if(r<i){let s=r||0;const c=e[s];if(c){const r=t[s];if(n?t.push(Jt(r,c,n)):t[s]=Jt(r,c,n),s++,s<i)return Jt(t,e,n,s,i,o)}}}else {if(y(e))return 0===i?t:Jt(t,e,n,0,e.length);if(A(e)){const r=s(e);return Jt(t,e,n,null,null,r)}}}else {if(A(e))return o?Jt({},e,n,null,null,o):Jt({},e,n);if(y(e))return r<i?Jt([],e,n,r,i,o):Jt([],e,n)}return t||e},Vt=globalThis.structuredClone;t.clone=void 0,t.clone=Vt?t=>globalThis.structuredClone(t):t=>A(t)?Jt({},t):y(t)?Jt([],t):_t(t);const Zt=Function.prototype;const Gt=(t,e)=>{if(t===e)return !0;if(t.toString()===e.toString())if(A(t)){const n=s(t);if(Mt(e,n))return K(n,(n=>Gt(t[n],e[n])))}else if(y(t)&&t.length===e.length)return K(t,((t,n)=>Gt(t,e[n])));return !1},Ht=/\.|\[/,Qt=/]/g,Xt=t=>t.replace(Qt,"").split(Ht);let Yt=0;const te=[],ee={};function ne(){let t=te.shift(te);return h(t)||(t=Yt,ee[t]=!0,Yt++),t}ne.free=t=>{ee[t]=null,te.push(t);};const re=(t,e)=>{let n=e;return K(Xt(t),(t=>(n=n[t],h(n)))),n},se=JSON,ie=se.parse,oe=se.stringify;class ce{static models={};constructor(t,e){h(e)?(o(this,e),this.modelName=t,ce.models.set(t,e)):o(this,t);}}const ue=t=>(...e)=>n=>{let r=n;return t(e,(t=>{r=t(r);})),r},ae=ue($),le=ue(z),fe=t=>(...e)=>async n=>{let r=n;return await t(e,(async t=>{r=await t(r);})),r},pe=fe(G),he=fe(H);class ge{constructor(t={}){this.items=t;}getItem(t){return this.items[t]}setItem(t,e){this.items[t]=e;}clear(){this.items={};}removeItem(t){this.items[t]=null;}}t.Model=ce,t.VirtualStorage=ge,t.add=(t,e)=>t+e,t.after=(t,e)=>{let n,r=t;return (...t)=>(null!==r&&r--,r<=0&&(n=e(...t),r=null),n)},t.apply=n,t.arrayToObject=(t,e)=>{const n={};return $(t,((t,r)=>{n[e[r]]=t;})),n},t.ary=(t,e)=>(...n)=>t(...n.splice(0,e)),t.assign=o,t.assignDeep=Jt,t.asyncEach=async(t,e)=>{const n=t.length;for(let r=0;r<n;r++){const s=t[r];await s(e,r,t,n);}return t},t.before=(t,e)=>{let n,r=t;return (...t)=>(null!==r&&r--,r>=1?n=e(...t):r=null,n)},t.bindAll=(t,e)=>bt(t,(t=>w(t)?t.bind(e):t)),t.cacheNativeMethod=function(t){return Zt.call.bind(t)},t.camelCase=t=>t.toLowerCase().replace(kt,(t=>t.toUpperCase().replace(/ /g,""))),t.chain=t=>{const e=t=>(e.value=t,e.methods);return o(e,{add:t=>((t,e)=>(yt(e,((e,n)=>{t.methods[n]=(...n)=>(e(t.value,...n),t.methods);})),t))(e,t),done(){const t=e.value;return e.value=null,t},methods:{}}),e.add(t),e},t.chunk=(t,e=1)=>{const n=[];let r=0;return t.forEach(((t,s)=>{s%e||(n.push([]),s&&r++),n[r].push(t);})),n},t.chunkString=(t,e)=>t.match(new RegExp(`(.|[\r\n]){1,${e}}`,"g")),t.clear=U,t.clearIntervals=Ct,t.clearTimers=vt,t.cloneArray=t=>t.slice(),t.compact=t=>t.filter((t=>!(d(t)&&!t.length)&&t)),t.compactKeys=t=>{const e=[];return ut(t,((t,n)=>{t&&e.push(n);})),e},t.compactMap=At,t.compactMapArray=_,t.compactMapAsync=async(t,e)=>{const n=[];let r;return await G(t,(async(t,s,i)=>{r=await e(t,s,n,i),h(r)&&n.push(r);})),n},t.compactMapObject=pt,t.compactMapObjectAsync=async(t,e,n={})=>(await It(t,(async(t,r,s,i,o)=>{const c=await e(t,r,n,i,o);h(c)&&(n[r]=c);})),n),t.construct=Wt,t.countBy=(t,e)=>{const n={};let r;return $(t,(t=>{r=e(t),n[r]||(n[r]=0),n[r]++;})),n},t.countKey=(t,e)=>{let n=0;return $(t,(t=>{t[e]&&n++;})),n},t.countWithoutKey=(t,e)=>{let n=0;return $(t,(t=>{t[e]||n++;})),n},t.curry=(t,e=t.length)=>{const n=[],r=(...s)=>{if(n.push(...s),n.length===e){const e=t(...n);return U(n),e}return r};return r},t.curryRight=(t,e=t.length)=>{const n=[],r=(...s)=>{if(n.unshift(...s),n.length===e){const e=t(...n);return U(n),e}return r};return r},t.debounce=(t,e)=>{let n=!1;const r=(...r)=>{!1!==n&&clearTimeout(n),n=jt((()=>{t(...r),n=!1;}),e);};return r.clear=()=>{n&&(clearTimeout(n),n=!1);},r},t.decimalCheck=m,t.deduct=t=>t-1,t.defineProperty=u,t.difference=(t,...e)=>{const n=E(e);return _(t,(t=>{if(!n.includes(t))return t}))},t.divide=(t,e)=>t/e,t.drop=J,t.dropRight=(t,e,n=t.length)=>J(t,0,n-e),t.each=yt,t.eachArray=$,t.eachArrayRight=z,t.eachAsync=G,t.eachAsyncRight=H,t.eachObject=ut,t.eachObjectAsync=It,t.eachWhile=mt,t.ensureArray=F,t.every=wt,t.filter=dt,t.filterArray=q,t.filterObject=lt,t.findIndex=(t,e,n="id")=>{const r=t.findIndex(((t,r)=>ct(t,0,0,e,n)));return -1!==r&&r},t.findItem=(t,e,n="id")=>{const r=t.find(((t,r)=>ct(t,0,0,e,n)));return -1!==r&&r},t.first=(t,e)=>e?t.slice(0,e):t[0],t.flatten=(t,e=1)=>{let n=t;for(let t=0;t<e;t++)n=n.reduce(((t,e)=>t.concat(F(e))),[]);return n},t.flattenDeep=E,t.flow=ae,t.flowAsync=pe,t.flowAsyncRight=he,t.flowRight=le,t.get=re,t.getExtensionRegex=R,t.getFileExtension=t=>{const e=t.match(R);if(e)return e[1]},t.getNewest=(t,e)=>st(t,e,!1)[0],t.getOldest=(t,e="id")=>it(t,e)[0],t.getOwnPropertyDescriptor=c,t.getOwnPropertyNames=a,t.groupBy=(t,e)=>{const n={};return $(t,(t=>{const r=e(t);n[r]||(n[r]=[]),n[r].push(t);})),n},t.has=(t,...e)=>t.includes(...e),t.hasAnyKeys=(t,e)=>{const n=s(t);return Boolean(e.find((t=>n.includes(t))))},t.hasDot=I,t.hasKeys=Mt,t.hasLength=j,t.hasValue=h,t.htmlEntities=Bt,t.ifInvoke=(t,...e)=>{if(w(t))return t(...e)},t.ifNotEqual=(t,e,n)=>(e&&!h(t[e])&&(t[e]=n),t),t.inAsync=async(t,e)=>G(t,(async t=>{await t(e);})),t.inSync=(t,e)=>yt(t,(t=>{t(e);})),t.increment=t=>t+1,t.indexBy=(t,e="id")=>{const n={};return $(t,(t=>{n[t[e]]=t;})),n},t.initial=t=>t.slice(0,t.length-1),t.initialString=(t,e=1)=>t.slice(0,-1*e),t.insertInRange=(t,e,n)=>t.slice(0,e)+n+t.slice(e,t.length),t.intersect=(t,...e)=>_(t,(t=>{if(K(e,(e=>e.includes(t))))return t})),t.interval=Ot,t.invert=(t,e={})=>(ut(t,((t,n)=>{e[t]=n;})),e),t.invoke=(t,e,n)=>W(t,((t,r)=>t[e](n,r))),t.invokeAsync=(t,e,n)=>Q(t,(async(t,r)=>t[e](n,r))),t.is=i,t.isArguments=function(t){return !!h(t)&&"[object Arguments]"===t.toString()},t.isArray=y,t.isAsync=x,t.isBoolean=t=>"Boolean"===t.constructor.name,t.isBuffer=function(t){return !!h(t)&&"ArrayBuffer"===t.constructor?.name},t.isConstructor=g,t.isDate=t=>t instanceof Date,t.isDecimal=t=>m.test(t.toString()),t.isEmpty=t=>d(t)||y(t)?!j(t):A(t)?!l(t):!h(t),t.isEqual=Gt,t.isFileCSS=S,t.isFileHTML=M,t.isFileJS=C,t.isFileJSON=v,t.isFloat32=function(t){return !!h(t)&&"Float32Array"===t.constructor?.name},t.isFloat64=function(t){return !!h(t)&&"Float64Array"===t.constructor?.name},t.isFunction=w,t.isInt16=function(t){return !!h(t)&&"Int16Array"===t.constructor?.name},t.isInt32=function(t){return !!h(t)&&"Int32Array"===t.constructor?.name},t.isInt8=function(t){return !!h(t)&&"Int8Array"===t.constructor?.name},t.isKindAsync=t=>!!t&&(k(t)||x(t)),t.isMap=function(t){return !!h(t)&&"[object Map]"===t.toString()},t.isMatchArray=V,t.isMatchObject=(t,e)=>{const n=s(t);return !!V(n,s(e))&&K(n,(n=>t[n]===e[n]))},t.isNull=p,t.isNumber=b,t.isNumberEqual=(t,e)=>t===e,t.isNumberInRange=(t,e,n)=>t>e&&t<n,t.isPlainObject=A,t.isPrimitive=t=>{const e=typeof t;return null==t||"object"!==e&&"function"!==e},t.isPromise=k,t.isRegExp=t=>t instanceof RegExp,t.isSet=function(t){return !!h(t)&&"[object Set]"===t.toString()},t.isString=d,t.isUint16=function(t){return !!h(t)&&"Uint16Array"===t.constructor?.name},t.isUint32=function(t){return !!h(t)&&"Uint32Array"===t.constructor?.name},t.isUint8=function(t){return !!h(t)&&"Uint8Array"===t.constructor?.name},t.isUint8Clamped=function(t){return !!h(t)&&"Uint8ClampedArray"===t.constructor?.name},t.isUndefined=f,t.isWeakMap=function(t){return !!h(t)&&"[object WeakMap]"===t.toString()},t.isZero=t=>0===t,t.jsonParse=ie,t.kebabCase=t=>t.replace(Rt," ").trim().toLowerCase().replace(kt,"-$1"),t.keys=s,t.largest=t=>Z(...t),t.last=(t,e)=>{const n=t.length;return e?t.slice(n-e,n):t[n-1]},t.map=bt,t.mapArray=W,t.mapArrayRight=function(t,e,n=[],r){let s=0;const i=t.length;for(let o=i-1;o>=0;o--)n[s]=e(t[o],o,t,i,r),s++;return n},t.mapAsync=Q,t.mapObject=ft,t.mapObjectAsync=async(t,e,n={})=>(await It(t,(async(t,r,s,i,o)=>{n[r]=await e(t,r,n,s,i,o);})),n),t.mapWhile=function(t,e,n=[],r){const s=t.length;for(let i=0;i<s;i++){const o=t[i];if(!1===e(o,i,n,t,s,r))break;n[i]=o;}return n},t.minus=(t,e)=>t-e,t.model=function(t,e){return h(e)?Wt(ce,[t,e]):re(t,ce.models)},t.multiply=(t,e)=>t*e,t.negate=t=>(...e)=>!t(...e),t.noop=()=>{},t.nthArg=(t=0)=>(...e)=>e[t],t.numSort=t=>t.sort(et),t.numericalCompare=et,t.numericalCompareReverse=nt,t.objectCreate=_t,t.objectSize=l,t.omit=(t,e)=>lt(t,((t,n)=>!e.includes(n))),t.once=t=>{let e;return (...n)=>(h(e)||(e=t(...n)),e)},t.over=t=>(...e)=>bt(t,(t=>t(...e))),t.overEvery=t=>(...e)=>mt(t,(t=>t(...e))),t.partition=(t,e)=>{const n=[];return [_(t,(t=>{if(e(t))return t;n.push(t);})),n]},t.pick=(t,e,n={})=>($(e,(e=>{n[e]=t[e];})),n),t.pluck=(t,e)=>W(t,(t=>t[e])),t.pluckObject=ot,t.pluckValues=(t,e)=>W(t,(t=>ot(t,e))),t.promise=t=>new Promise(t),t.propertyMatch=(t,e,n=s(t))=>K(n,(n=>Gt(t[n],e[n]))),t.rNumSort=t=>t.sort(nt),t.randomArbitrary=(t,e=0)=>T()*(t-e)+e,t.randomInt=B,t.range=(t,e,n=1)=>t<e?((t,e,n)=>{const r=[];let s=t;for(;s<e;)r.push(s),s+=n;return r})(t,e,n):((t,e,n)=>{const r=n<0?-1*n:n,s=[];let i=t;for(;i>e;)s.push(i),i-=r;return s})(t,e,n),t.rawURLDecode=Tt,t.reArg=(t,e)=>(...n)=>t(...e.map((t=>n[t]))),t.regexGenerator=O,t.remainder=(t,e)=>t%e,t.remove=(t,e)=>{let n=t.length;for(let r=0;r<n;r++){const s=t[r];e.includes(s)&&(t.splice(r,1),r--,n--);}return t},t.removeBy=(t,e)=>{let n=t.length;for(let r=0;r<n;r++){e(t[r],r)&&(t.splice(r,1),r--,n--);}return t},t.replaceList=(t,e,n)=>t.replace(new RegExp(`\\b${e.join("|")}\\b`,"gi"),n),t.rest=t=>t.slice(1,t.length),t.restString=xt,t.right=(t,e)=>t[t.length-1-e],t.rightString=(t,e=1)=>t[t.length-e],t.sample=(t,e=1)=>{if(!t)return !1;const n=t.length;if(n===e||e>n)return L(t);if(1===e)return [t[B(n-1,0)]];const r=[],s={};let i,o=0;for(;o<e;)i=B(t.length-1,0),s[i]||(r.push(t[i]),s[i]=!0,o++);return r},t.sanitize=t=>Bt(Tt(t)),t.shuffle=L,t.smallest=t=>D(...t),t.snakeCase=t=>t.replace(Rt," ").trim().toLowerCase().replace(kt,"_$1"),t.sortAlphabetical=(t,e)=>t.sort(((t,n)=>{const r=t[e],s=n[e];return r<s?-1:r>s?1:0})),t.sortNewest=st,t.sortOldest=it,t.sortedIndex=(t,e)=>{let n=0;return K(t,((t,r)=>(n=r,e>t))),n},t.stringify=oe,t.stubArray=()=>[],t.stubFalse=()=>!1,t.stubObject=()=>({}),t.stubString=()=>"",t.stubTrue=()=>!0,t.sum=t=>t.reduce(((t,e)=>t+e),0),t.take=(t,e=1)=>t.slice(0,e),t.takeRight=(t,e=1)=>{const n=t.length;return t.slice(n-e,n)},t.throttle=(t,e)=>{let n,r=!1;const s=(...s)=>{r?n=!0:(t(...s),r=jt((()=>{n&&t(...s),r=!1;}),e));};return s.clear=()=>{clearTimeout(r),r=!1;},s},t.timer=jt,t.times=rt,t.timesMap=(t,e,n,r=[])=>{const s=n?t:0,i=n?e:t,o=n||e;let c;return rt(s,i,(t=>{c=o(t,s,i,r),h(c)&&r.push(c);})),r},t.toArray=e,t.toPath=Xt,t.toggle=(t,e=!0,n=!1)=>Gt(e,t)?n:e,t.tokenize=t=>t.match(Lt)||[],t.truncate=(t,e)=>{const n=t.length;return n>e?((t,e,n)=>{const r=t.split(""),s=r.length;let i,o=n-e;for(;o<s&&o>=0&&(i=r[o]," "!==i);o--);return t.slice(0,o).trim()})(t,e,n):t},t.truncateRight=(t,e)=>{const n=t.length;return n>e?((t,e,n)=>{const r=t.split(""),s=r.length;let i,o=e;for(;o<s&&o>0&&(i=r[o]," "!==i);o++);return t.substr(o,n).trim()})(t,e,n):t},t.uid=ne,t.unZip=t=>t[0].map(((e,n)=>t.map((t=>t[n])))),t.unZipObject=t=>{const e=[],n=[];return ut(t,((t,r)=>{e.push(r),n.push(t);})),[e,n]},t.union=(...t)=>tt(E(t)),t.unique=tt,t.upperCase=t=>t.replace(Rt," ").trim().toUpperCase(),t.upperFirst=t=>zt(t)+xt(t),t.upperFirstAll=t=>t.replace($t,(t=>t.toUpperCase())),t.upperFirstLetter=zt,t.upperFirstOnly=Kt,t.upperFirstOnlyAll=t=>Kt(t.toLowerCase()).replace($t,(t=>t.toUpperCase())),t.virtualStorage=function(){return new ge},t.whileArray=K,t.whileCompactMap=function(t,e,n=[],r){let s=0;for(;s<t.length;){const i=n.push(e(t[s],s,t,t.length,r));s++,h(i)&&n.push(i);}return t},t.whileEachArray=function(t,e,n){let r=0;for(;r<t.length;)e(t[r],r,t,t.length,n),r++;return t},t.whileMapArray=function(t,e,n=[],r){let s=0;for(;s<t.length;)n.push(e(t[s],s,t,t.length,r)),s++;return t},t.whileObject=at,t.without=(t,e)=>t.filter((t=>!e.includes(t))),t.words=t=>t.match(Dt)||[],t.wrap=(t,e)=>(...n)=>e(t,...n),t.xor=(...t)=>{const e=[];return $(t,(t=>{$(tt(t),(t=>{e.includes(t)?e.splice(e.indexOf(t),1):e.push(t);}));})),e},t.zip=(...t)=>t[0].map(((e,n)=>t.map((t=>t[n])))),t.zipObject=(t,e)=>{const n={};return $(t,((t,r)=>{n[t]=e[r];})),n},Object.defineProperty(t,"__esModule",{value:!0});}));

    (function() {
    	const { isFileJS } = self.$;
    	const shouldNotUpgrade = /(^js\/lib\/)|(\.min\.js)/;
    	const importRegexGlobal = /\bimport\b([^:;=]*?){([^;]*?)}(\s\bfrom\b).*(('|"|`).*('|"|`));$/gm;
    	const importSingleRegexGlobal = /\bimport\b([^:;={}]*?)([^;{}]*?)(\s\bfrom\b).*(('|"|`).*('|"|`));$/gm;
    	const importEntire = /\bimport\b\s(('|"|`).*('|"|`));$/gm;
    	const importDynamic = /{([^;]*?)}\s=\simport\((('|"|`).*('|"|`))\);$/gm;
    	const replaceImports = function(file) {
    		let compiled = file;
    		const dirnameOptions = `import.meta`;
    		compiled = compiled.replace(importRegexGlobal, `const {$2} = await appGlobal.demandJs($4, ${dirnameOptions});`);
    		compiled = compiled.replace(importSingleRegexGlobal, `const $2 = await appGlobal.demandJs($4, ${dirnameOptions});`);
    		compiled = compiled.replace(importEntire, `await appGlobal.demandJs($1, ${dirnameOptions});`);
    		compiled = compiled.replace(importDynamic, `{$1} = await appGlobal.demandJs($2, ${dirnameOptions});`);
    		return compiled;
    	};
    	const keepObject = {
    		keep: true
    	};
    	const processScriptRequest = async function(contex, response, configObj, workerInfo) {
    		const { body } = response;
    		const {
    			file, cs, cache
    		} = body;
    		const key = body.key;
    		const fileList = configObj.fileList;
    		const filepath = fileList.files[key];
    		const completedFiles = configObj.completedFiles;
    		const checksums = configObj.checksum;
    		const isLib = shouldNotUpgrade.test(filepath);
    		const isJs = isFileJS(filepath);
    		if (file) {
    			completedFiles[key] = file;
    			checksums[key] = cs;
    			configObj.filesLoaded += 1;
    		} else if (file === false) {
    			checksums[key] = false;
    			completedFiles[key] = false;
    			configObj.filesLoaded += 1;
    		} else if (cache) {
    			completedFiles[key] = true;
    			configObj.filesLoaded += 1;
    		}
    		let completedFile = completedFiles[key];
    		if (completedFile !== true && isJs && !isLib && completedFile !== false) {
    			completedFile = replaceImports(completedFile);
    		}
    		const message = {
    			key
    		};
    		if (cs) {
    			message.cs = cs;
    		}
    		if (completedFile) {
    			message.file = completedFile;
    		}
    		contex.post(workerInfo.id, message, keepObject);
    		if (configObj.filesLoaded === configObj.fileListLength) {
    			const returned = {
    				loaded: configObj.filesLoaded
    			};
    			return returned;
    		}
    		return false;
    	};
    	const {
    		uid, promise, construct: construct$2, isPlainObject, isString, stringify, jsonParse, hasValue
    	} = self.$;
    	class ClientSocket {
    		constructor(app) {
    			this.app = app;
    			console.log('Worker Socket Module', 'notify');
    			this.hostDomain = `${app.config.socketHostname || location.hostname}`;
    			if (app.config.port) {
    				this.hostDomain = `${this.hostDomain}:${app.config.port}`;
    			}
    			console.log(this.hostDomain);
    			this.connect();
    			clearInterval();
    		}
        callbacks = {};
        status = 0;
        ready() {
        	console.log('Socket Is Ready');
        	if (this.status) {
        		this.app.update({
        			type: 'connection',
        			status: 'reconnected'
        		});
        	} else {
        		this.app.post('ready', {
        			type: 'connection',
        			status: 'connected'
        		});
        		this.status = 1;
        		console.log('connected');
        	}
        }
        process(response) {
        	const compiledResponse = jsonParse(response);
        	console.log(compiledResponse);
        	if (!compiledResponse.id) {
        		return this.app.update(compiledResponse);
        	}
        	console.log(compiledResponse.id, this.callbacks[compiledResponse.id]);
        	const callback = this.callbacks[compiledResponse.id];
        	if (callback) {
        		return callback(compiledResponse);
        	}
        }
        reconnect() {
        	const thisContext = this;
        	if (!hasValue(thisContext.connectInterval)) {
        		this.socket.close();
        		thisContext.connectInterval = setInterval(() => {
        			thisContext.connect();
        		}, 2000);
        	}
        }
        connect() {
        	const thisContext = this;
        	thisContext.socket = construct$2(WebSocket, [thisContext.hostDomain]);
        	thisContext.socket.addEventListener('open', () => {
        		if (hasValue(thisContext.connectInterval)) {
        			clearInterval(thisContext.connectInterval);
        		}
        		this.ready();
        	});
        	// Listen for messages
        	thisContext.socket.addEventListener('message', (socketEvent) => {
        		console.log('Message from server ', socketEvent.data);
        		thisContext.process(socketEvent.data);
        	});
        	thisContext.socket.addEventListener('disconnect', () => {
        		console.log('disconnected');
        		if (!hasValue(thisContext.connectInterval)) {
        			thisContext.app.update({
        				type: 'connection',
        				status: 'disconnected'
        			});
        		}
        		thisContext.reconnect();
        	});
        	thisContext.socket.addEventListener('close', () => {
        		console.log('close');
        		if (!hasValue(thisContext.connectInterval)) {
        			thisContext.app.update({
        				type: 'connection',
        				status: 'closed'
        			});
        		}
        		thisContext.reconnect();
        	});
        }
        send(data) {
        	if (isPlainObject(data)) {
        		this.socket.send(stringify(data));
        	} else if (isString(data)) {
        		this.socket.send(data);
        	} else {
        		this.socket.send(data);
        	}
        }
        taskCleanup(id) {
        	this.callbacks[id] = null;
        	uid.free(id);
        }
        async request(configObj) {
        	const results = await promise((accept) => {
        		const {
        			data, callback
        		} = configObj;
        		if (data.id) {
        			data.id = null;
        		} else {
        			const uuid = uid().toString();
        			data.id = uuid;
        			this.callbacks[uuid] = async (requestData) => {
        				console.log(callback);
        				if (callback) {
        					const returned = await callback(requestData);
        					if (returned) {
        						this.taskCleanup(uuid);
        						accept(returned);
        					}
        				} else {
        					this.taskCleanup(uuid);
        					accept(requestData);
        				}
        			};
        		}
        		this.send(data);
        	});
        	return results;
        }
    	}
    	const {
    		assign, construct: construct$1, get, map, apply
    	} = self.$;
    	class AppWorker {
    		constructor() {
    			self.onmessage = async (workerEvent) => {
    				this.onmessage(workerEvent);
    			};
    		}
    		async onmessage(workerEvent) {
    			console.log(workerEvent.data);
    			const {
    				task, id, data
    			} = workerEvent.data;
    			const eventCallback = get(task, this.tasks);
    			console.log(task, data);
    			if (eventCallback) {
    				const results = await apply(eventCallback, this, [
    					data,
    					{
    						id
    					}
    				]);
    				if (results) {
    					this.post(id, results);
    				}
    				if (this.debug) {
    					console.log(`Worker api.${task}`);
    				}
    			} else {
    				console.log(`FAILED Worker api.${task}`);
    			}
    		}
    		update(body) {
    			console.log(body);
    			this.post('_', {
    				body
    			});
    		}
    		post(id, data, options) {
    			const responseData = {
    				data,
    				id
    			};
    			assign(responseData, options);
    			postMessage(responseData);
    		}
        state = 1;
        config = {};
        tasks = {
        	configure(data) {
        		assign(this.config, data);
        		console.log('STARTING');
        		this.socket = construct$1(ClientSocket, [this]);
        	},
        	post(id, data, options) {
        		const responseData = {
        			data,
        			id
        		};
        		assign(responseData, options);
        		postMessage(responseData);
        	},
        	socket: {
        		async get(options, workerInfo) {
        			const context = this;
        			const { body } = options;
        			const fileList = body.files;
        			const configObj = {
        				checksum: [],
        				completedFiles: map(fileList, () => {
        					return '';
        				}),
        				fileList: body,
        				fileListLength: fileList.length,
        				filesLoaded: 0,
        				progress: options.progress
        			};
        			const requestConfig = {
        				async callback(json) {
        					return processScriptRequest(context, json, configObj, workerInfo);
        				},
        				data: {
        					task: 'file.get',
        					body
        				}
        			};
        			const results = await this.socket.request(requestConfig);
        			return results;
        		},
        		async request(data) {
        			const results = await this.socket.request(data);
        			return results;
        		}
        	}
        };
        utility = self.$;
    	}
    	const { construct } = self.$;
    	construct(AppWorker, []);
    })();

})();

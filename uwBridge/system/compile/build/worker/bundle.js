(function () {

	self.window = self;

	!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).$={});}(window,(function(t){const e=Array.from,n=Reflect.apply,r=Object,s=r.keys,i=r.is,c=r.assign,o=r.getOwnPropertyDescriptor,a=r.defineProperty,u=r.getOwnPropertyNames,l=t=>s(t).length;function p(t){return void 0===t}function f(t){return null===t}function h(t){return !p(t)&&!f(t)}function g(t){return e=>!!h(e)&&e.constructor===t}const m=/\.|\+/,y=Array.isArray,d=g(String),b=g(Number),A=t=>!!h(t)&&"Object("===t.constructor.toString().trim().slice(9,16),w=t=>!!h(t)&&t instanceof Function,O=t=>Boolean(t.length),j=t=>e=>!!h(e)&&t.test(e),S=j(/\.css$/),C=j(/\.json$/),v=j(/\.js$/),M=j(/\.html$/),R=j(/\./),k=/\.([0-9a-z]+)/,x=t=>!!t&&t instanceof Promise,F=t=>!!t&&"AsyncFunction"===t.constructor?.name;const I=t=>y(t)&&t||h(t)&&[t]||[],E=t=>t.flat(1/0),U=t=>(t.length=0,t),N=Math,P=N.floor,T=N.random,B=(t,e=0)=>P(T()*(t-e))+e,L=(t,n=t.length)=>{if(t.length<=1)return e(t);const r=e(t);let s,i,c=0;for(;c<n;)s=B(r.length-1,0),i=r[c],r[c]=r[s],r[s]=i,c++;return r},D=Math.min;function $(t,e,n){const r=t.length;for(let s=0;s<r;s++)e(t[s],s,t,r,n);return t}function _(t,e,n){const r=t.length;for(let s=r-1;s>=0;s--)e(t[s],s,t,r,n);return t}function z(t,e,n){const r=t.length;for(let s=0;s<r;s++)if(!1===e(t[s],s,t,r,n))return !1;return !0}function K(t,e,n=[],r){return $(t,((t,s,i,c)=>{!0===e(t,s,n,i,c,r)&&n.push(t);})),n}function q(t,e,n=[],r){return $(t,((t,s,i,c)=>{n[s]=e(t,s,n,i,c,r);})),n}function W(t,e,n=[],r){return $(t,((t,s,i,c)=>{const o=e(t,s,n,i,c,r);h(o)&&n.push(o);})),n}const J=(t,e,n=t.length)=>t.splice(e,n),Z=(t,e)=>t.length===e.length&&z(t,((t,n)=>e[n]===t)),V=Math.max,G=async(t,e)=>{const n=t.length;for(let r=0;r<n;r++)await e(t[r],r,t,n);return t},H=async(t,e)=>{const n=t.length;for(let r=n-1;r>=0;r--)await e(t[r],r,t,n);return t},Q=async(t,e)=>{const n=[];return await G(t,(async(t,r,s)=>{n[r]=await e(t,r,s);})),n},X=(t,e,n)=>n.indexOf(t)===e,Y=(t,e,n)=>t!==n[e-1],tt=(t,e)=>e?t.filter(Y):t.filter(X),et=(t,e)=>t-e,nt=(t,e)=>e-t,rt=(t,e,n)=>{const r=n?t:0,s=n?e:t,i=n||e;for(let t=r;t<s;t++)i(t,r,s);},st=(t,e,n=!0)=>(n?t:[...t]).sort(((t,n)=>n[e]?t[e]?t[e]<n[e]?1:t[e]>n[e]?-1:0:1:-1)),it=(t,e="id",n=!0)=>(n?t:[...t]).sort(((t,n)=>n[e]?t[e]?t[e]<n[e]?-1:t[e]>n[e]?1:0:-1:1)),ct=(t,e)=>q(e,(e=>t[e])),ot=(t,e,n,r,s)=>{if(t[s]===r)return !0},at=(t,e)=>{$(s(t),((n,r,s,i)=>{e(t[n],n,t,i,s);}));},ut=(t,e)=>z(s(t),((n,r,s,i)=>e(t[n],n,t,i,s))),lt=(t,e,n={})=>(at(t,((t,r,s,i,c)=>{!0===e(t,r,n,s,i,c)&&(n[r]=t);})),n),pt=(t,e,n={})=>(at(t,((t,r,s,i,c)=>{n[r]=e(t,r,n,s,i,c);})),n),ft=(t,e,n={})=>(at(t,((t,r,s,i,c)=>{const o=e(t,r,n,s,i,c);h(o)&&(n[r]=o);})),n),ht=(t,e)=>t.forEach(e),gt=(t,e)=>(n,r,s)=>{let i;if(h(n))return i=y(n)?t:A(n)||w(n)?e:n.forEach?ht:e,i(n,r,s)},mt=gt(z,ut),yt=gt($,at),dt=gt(K,lt),bt=gt(q,pt),At=gt(W,ft),wt=mt,Ot=(t,e)=>setTimeout(t,e),jt=(t,e)=>setInterval(t,e),St=(t,e)=>()=>{rt(0,t((()=>{}),0),(t=>{e(t);}));},Ct=St(Ot,clearTimeout),vt=St(jt,clearInterval),Mt=(t,e)=>{const n=s(t);return z(e,(t=>n.includes(t)))},Rt=async(t,e)=>{const n=s(t);return await G(n,((r,s,i,c)=>e(t[r],r,t,c,n))),t},kt=/[-_]/g,xt=/ (.)/g,Ft=(t,e=1)=>t.substr(e),It=/%(?![\da-f]{2})/gi,Et=/&/g,Ut=/</g,Nt=/>/g,Pt=/"/g,Tt=t=>decodeURIComponent(t.replace(It,(()=>"%25"))),Bt=t=>t.replace(Et,"&amp;").replace(Ut,"&lt;").replace(Nt,"&gt;").replace(Pt,"&quot;"),Lt=/\S+/g,Dt=/\w+/g,$t=/ (.)/g,_t=t=>t[0].toUpperCase(),zt=t=>_t(t)+Ft(t).toLowerCase(),Kt=Reflect.construct;const qt=Object.create,Wt=(t,e,n=!1,r,i,c)=>{if(t){if(c){const s=c.pop();if(s){const r=e[s];t[s]=Wt(t[s],r,n);}else if(!i)return t;if(i){let s=r||0;if(s++,s<i)return Wt(t,e,n,s,i,c)}return Wt(t,e,n,null,null,c)}if(i){if(r<i){let s=r||0;const o=e[s];if(o){const r=t[s];if(n?t.push(Wt(r,o,n)):t[s]=Wt(r,o,n),s++,s<i)return Wt(t,e,n,s,i,c)}}}else {if(y(e))return 0===i?t:Wt(t,e,n,0,e.length);if(A(e)){const r=s(e);return Wt(t,e,n,null,null,r)}}}else {if(A(e))return c?Wt({},e,n,null,null,c):Wt({},e,n);if(y(e))return r<i?Wt([],e,n,r,i,c):Wt([],e,n)}return t||e},Jt=globalThis.structuredClone;t.clone=void 0,t.clone=Jt?t=>globalThis.structuredClone(t):t=>A(t)?Wt({},t):y(t)?Wt([],t):qt(t);const Zt=Function.prototype;const Vt=(t,e)=>{if(t===e)return !0;if(t.toString()===e.toString())if(A(t)){const n=s(t);if(Mt(e,n))return z(n,(n=>Vt(t[n],e[n])))}else if(y(t)&&t.length===e.length)return z(t,((t,n)=>Vt(t,e[n])));return !1},Gt=/\.|\[/,Ht=/]/g,Qt=t=>t.replace(Ht,"").split(Gt);let Xt=0;const Yt=[],te={};function ee(){let t=Yt.shift(Yt);return h(t)||(t=Xt,te[t]=!0,Xt++),t}ee.free=t=>{te[t]=null,Yt.push(t);};const ne=(t,e)=>{let n=e;return z(Qt(t),(t=>(n=n[t],h(n)))),n},re=JSON,se=re.parse,ie=re.stringify,ce=(t,e)=>(h(e)&&(ce[t]=e),ne(t,ce)),oe=t=>(...e)=>n=>{let r=n;return t(e,(t=>{r=t(r);})),r},ae=oe($),ue=oe(_),le=t=>(...e)=>async n=>{let r=n;return await t(e,(async t=>{r=await t(r);})),r},pe=le(G),fe=le(H);t.add=(t,e)=>t+e,t.after=(t,e)=>{let n,r=t;return (...t)=>(null!==r&&r--,r<=0&&(n=e(...t),r=null),n)},t.apply=n,t.arrayToObject=(t,e)=>{const n={};return $(t,((t,r)=>{n[e[r]]=t;})),n},t.ary=(t,e)=>(...n)=>t(...n.splice(0,e)),t.assign=c,t.assignDeep=Wt,t.asyncEach=async(t,e)=>{const n=t.length;for(let r=0;r<n;r++){const s=t[r];await s(e,r,t,n);}return t},t.before=(t,e)=>{let n,r=t;return (...t)=>(null!==r&&r--,r>=1?n=e(...t):r=null,n)},t.bindAll=(t,e)=>bt(t,(t=>w(t)?t.bind(e):t)),t.cacheNativeMethod=function(t){return Zt.call.bind(t)},t.camelCase=t=>t.toLowerCase().replace(xt,(t=>t.toUpperCase().replace(/ /g,""))),t.chain=t=>{const e=t=>(e.value=t,e.methods);return c(e,{add:t=>((t,e)=>(yt(e,((e,n)=>{t.methods[n]=(...n)=>(e(t.value,...n),t.methods);})),t))(e,t),done(){const t=e.value;return e.value=null,t},methods:{}}),e.add(t),e},t.chunk=(t,e=1)=>{const n=[];let r=0;return t.forEach(((t,s)=>{s%e||(n.push([]),s&&r++),n[r].push(t);})),n},t.chunkString=(t,e)=>t.match(new RegExp(`(.|[\r\n]){1,${e}}`,"g")),t.clear=U,t.clearIntervals=vt,t.clearTimers=Ct,t.cloneArray=t=>t.slice(),t.compact=t=>t.filter((t=>!(d(t)&&!t.length)&&t)),t.compactKeys=t=>{const e=[];return at(t,((t,n)=>{t&&e.push(n);})),e},t.compactMap=At,t.compactMapArray=W,t.compactMapAsync=async(t,e)=>{const n=[];let r;return await G(t,(async(t,s,i)=>{r=await e(t,s,n,i),h(r)&&n.push(r);})),n},t.compactMapObject=ft,t.compactMapObjectAsync=async(t,e,n={})=>(await Rt(t,(async(t,r,s,i,c)=>{const o=await e(t,r,n,i,c);h(o)&&(n[r]=o);})),n),t.construct=function(t,e=[],n){return n?Kt(t,e,n):Kt(t,e)},t.countBy=(t,e)=>{const n={};let r;return $(t,(t=>{r=e(t),n[r]||(n[r]=0),n[r]++;})),n},t.countKey=(t,e)=>{let n=0;return $(t,(t=>{t[e]&&n++;})),n},t.countWithoutKey=(t,e)=>{let n=0;return $(t,(t=>{t[e]||n++;})),n},t.curry=(t,e=t.length)=>{const n=[],r=(...s)=>{if(n.push(...s),n.length===e){const e=t(...n);return U(n),e}return r};return r},t.curryRight=(t,e=t.length)=>{const n=[],r=(...s)=>{if(n.unshift(...s),n.length===e){const e=t(...n);return U(n),e}return r};return r},t.debounce=(t,e)=>{let n=!1;const r=(...r)=>{!1!==n&&clearTimeout(n),n=Ot((()=>{t(...r),n=!1;}),e);};return r.clear=()=>{n&&(clearTimeout(n),n=!1);},r},t.decimalCheck=m,t.deduct=t=>t-1,t.defineProperty=a,t.difference=(t,...e)=>{const n=E(e);return W(t,(t=>{if(!n.includes(t))return t}))},t.divide=(t,e)=>t/e,t.drop=J,t.dropRight=(t,e,n=t.length)=>J(t,0,n-e),t.each=yt,t.eachArray=$,t.eachArrayRight=_,t.eachAsync=G,t.eachAsyncRight=H,t.eachObject=at,t.eachObjectAsync=Rt,t.eachWhile=mt,t.ensureArray=I,t.every=wt,t.filter=dt,t.filterArray=K,t.filterObject=lt,t.findIndex=(t,e,n="id")=>{const r=t.findIndex(((t,r)=>ot(t,0,0,e,n)));return -1!==r&&r},t.findItem=(t,e,n="id")=>{const r=t.find(((t,r)=>ot(t,0,0,e,n)));return -1!==r&&r},t.first=(t,e)=>e?t.slice(0,e):t[0],t.flatten=(t,e=1)=>{let n=t;for(let t=0;t<e;t++)n=n.reduce(((t,e)=>t.concat(I(e))),[]);return n},t.flattenDeep=E,t.flow=ae,t.flowAsync=pe,t.flowAsyncRight=fe,t.flowRight=ue,t.get=ne,t.getExtensionRegex=k,t.getFileExtension=t=>{const e=t.match(k);if(e)return e[1]},t.getNewest=(t,e)=>st(t,e,!1)[0],t.getOldest=(t,e="id")=>it(t,e)[0],t.getOwnPropertyDescriptor=o,t.getOwnPropertyNames=u,t.groupBy=(t,e)=>{const n={};return $(t,(t=>{const r=e(t);n[r]||(n[r]=[]),n[r].push(t);})),n},t.has=(t,...e)=>t.includes(...e),t.hasAnyKeys=(t,e)=>{const n=s(t);return Boolean(e.find((t=>n.includes(t))))},t.hasDot=R,t.hasKeys=Mt,t.hasLength=O,t.hasValue=h,t.htmlEntities=Bt,t.ifInvoke=(t,...e)=>{if(w(t))return t(...e)},t.ifNotEqual=(t,e,n)=>(e&&!h(t[e])&&(t[e]=n),t),t.inAsync=async(t,e)=>G(t,(async t=>{await t(e);})),t.inSync=(t,e)=>yt(t,(t=>{t(e);})),t.increment=t=>t+1,t.indexBy=(t,e="id")=>{const n={};return $(t,(t=>{n[t[e]]=t;})),n},t.initial=t=>t.slice(0,t.length-1),t.initialString=(t,e=1)=>t.slice(0,-1*e),t.insertInRange=(t,e,n)=>t.slice(0,e)+n+t.slice(e,t.length),t.intersect=(t,...e)=>W(t,(t=>{if(z(e,(e=>e.includes(t))))return t})),t.interval=jt,t.invert=(t,e={})=>(at(t,((t,n)=>{e[t]=n;})),e),t.invoke=(t,e,n)=>q(t,((t,r)=>t[e](n,r))),t.invokeAsync=(t,e,n)=>Q(t,(async(t,r)=>t[e](n,r))),t.is=i,t.isArguments=function(t){return !!h(t)&&"[object Arguments]"===t.toString()},t.isArray=y,t.isAsync=F,t.isBoolean=t=>"Boolean"===t.constructor.name,t.isBuffer=function(t){return !!h(t)&&"ArrayBuffer"===t.constructor?.name},t.isConstructor=g,t.isDate=t=>t instanceof Date,t.isDecimal=t=>m.test(t.toString()),t.isEmpty=t=>d(t)||y(t)?!O(t):A(t)?!l(t):!h(t),t.isEqual=Vt,t.isFileCSS=S,t.isFileHTML=M,t.isFileJS=v,t.isFileJSON=C,t.isFloat32=function(t){return !!h(t)&&"Float32Array"===t.constructor?.name},t.isFloat64=function(t){return !!h(t)&&"Float64Array"===t.constructor?.name},t.isFunction=w,t.isInt16=function(t){return !!h(t)&&"Int16Array"===t.constructor?.name},t.isInt32=function(t){return !!h(t)&&"Int32Array"===t.constructor?.name},t.isInt8=function(t){return !!h(t)&&"Int8Array"===t.constructor?.name},t.isKindAsync=t=>!!t&&(x(t)||F(t)),t.isMap=function(t){return !!h(t)&&"[object Map]"===t.toString()},t.isMatchArray=Z,t.isMatchObject=(t,e)=>{const n=s(t);return !!Z(n,s(e))&&z(n,(n=>t[n]===e[n]))},t.isNull=f,t.isNumber=b,t.isNumberEqual=(t,e)=>t===e,t.isNumberInRange=(t,e,n)=>t>e&&t<n,t.isPlainObject=A,t.isPrimitive=t=>"__proto__"!==t&&"constructor"!==t&&"prototype"!==t,t.isPromise=x,t.isRegExp=t=>t instanceof RegExp,t.isSet=function(t){return !!h(t)&&"[object Set]"===t.toString()},t.isString=d,t.isUint16=function(t){return !!h(t)&&"Uint16Array"===t.constructor?.name},t.isUint32=function(t){return !!h(t)&&"Uint32Array"===t.constructor?.name},t.isUint8=function(t){return !!h(t)&&"Uint8Array"===t.constructor?.name},t.isUint8Clamped=function(t){return !!h(t)&&"Uint8ClampedArray"===t.constructor?.name},t.isUndefined=p,t.isWeakMap=function(t){return !!h(t)&&"[object WeakMap]"===t.toString()},t.isZero=t=>0===t,t.jsonParse=se,t.kebabCase=t=>t.replace(kt," ").trim().toLowerCase().replace(xt,"-$1"),t.keys=s,t.largest=t=>V(...t),t.last=(t,e)=>{const n=t.length;return e?t.slice(n-e,n):t[n-1]},t.map=bt,t.mapArray=q,t.mapArrayRight=function(t,e,n=[],r){let s=0;const i=t.length;for(let c=i-1;c>=0;c--)n[s]=e(t[c],c,t,i,r),s++;return n},t.mapAsync=Q,t.mapObject=pt,t.mapObjectAsync=async(t,e,n={})=>(await Rt(t,(async(t,r,s,i,c)=>{n[r]=await e(t,r,n,s,i,c);})),n),t.mapWhile=function(t,e,n=[],r){const s=t.length;for(let i=0;i<s;i++){const c=t[i];if(!1===e(c,i,n,t,s,r))break;n[i]=c;}return n},t.minus=(t,e)=>t-e,t.model=ce,t.multiply=(t,e)=>t*e,t.negate=t=>(...e)=>!t(...e),t.noop=()=>{},t.nthArg=(t=0)=>(...e)=>e[t],t.numSort=t=>t.sort(et),t.numericalCompare=et,t.numericalCompareReverse=nt,t.objectCreate=qt,t.objectSize=l,t.omit=(t,e)=>lt(t,((t,n)=>!e.includes(n))),t.once=t=>{let e;return (...n)=>(h(e)||(e=t(...n)),e)},t.over=t=>(...e)=>bt(t,(t=>t(...e))),t.overEvery=t=>(...e)=>mt(t,(t=>t(...e))),t.partition=(t,e)=>{const n=[];return [W(t,(t=>{if(e(t))return t;n.push(t);})),n]},t.pick=(t,e,n={})=>($(e,(e=>{n[e]=t[e];})),n),t.pluck=(t,e)=>q(t,(t=>t[e])),t.pluckObject=ct,t.pluckValues=(t,e)=>q(t,(t=>ct(t,e))),t.promise=t=>new Promise(t),t.propertyMatch=(t,e,n=s(t))=>z(n,(n=>Vt(t[n],e[n]))),t.rNumSort=t=>t.sort(nt),t.randomArbitrary=(t,e=0)=>T()*(t-e)+e,t.randomInt=B,t.range=(t,e,n=1)=>t<e?((t,e,n)=>{const r=[];let s=t;for(;s<e;)r.push(s),s+=n;return r})(t,e,n):((t,e,n)=>{const r=n<0?-1*n:n,s=[];let i=t;for(;i>e;)s.push(i),i-=r;return s})(t,e,n),t.rawURLDecode=Tt,t.reArg=(t,e)=>(...n)=>t(...e.map((t=>n[t]))),t.regexGenerator=j,t.remainder=(t,e)=>t%e,t.remove=(t,e)=>{let n=t.length;for(let r=0;r<n;r++){const s=t[r];e.includes(s)&&(t.splice(r,1),r--,n--);}return t},t.removeBy=(t,e)=>{let n=t.length;for(let r=0;r<n;r++){e(t[r],r)&&(t.splice(r,1),r--,n--);}return t},t.replaceList=(t,e,n)=>t.replace(new RegExp(`\\b${e.join("|")}\\b`,"gi"),n),t.rest=t=>t.slice(1,t.length),t.restString=Ft,t.right=(t,e)=>t[t.length-1-e],t.rightString=(t,e=1)=>t[t.length-e],t.sample=(t,e=1)=>{if(!t)return !1;const n=t.length;if(n===e||e>n)return L(t);if(1===e)return [t[B(n-1,0)]];const r=[],s={};let i,c=0;for(;c<e;)i=B(t.length-1,0),s[i]||(r.push(t[i]),s[i]=!0,c++);return r},t.sanitize=t=>Bt(Tt(t)),t.shuffle=L,t.smallest=t=>D(...t),t.snakeCase=t=>t.replace(kt," ").trim().toLowerCase().replace(xt,"_$1"),t.sortAlphabetical=(t,e)=>t.sort(((t,n)=>{const r=t[e],s=n[e];return r<s?-1:r>s?1:0})),t.sortNewest=st,t.sortOldest=it,t.sortedIndex=(t,e)=>{let n=0;return z(t,((t,r)=>(n=r,e>t))),n},t.stringify=ie,t.stubArray=()=>[],t.stubFalse=()=>!1,t.stubObject=()=>({}),t.stubString=()=>"",t.stubTrue=()=>!0,t.sum=t=>t.reduce(((t,e)=>t+e),0),t.take=(t,e=1)=>t.slice(0,e),t.takeRight=(t,e=1)=>{const n=t.length;return t.slice(n-e,n)},t.throttle=(t,e)=>{let n,r=!1;const s=(...s)=>{r?n=!0:(t(...s),r=Ot((()=>{n&&t(...s),r=!1;}),e));};return s.clear=()=>{clearTimeout(r),r=!1;},s},t.timer=Ot,t.times=rt,t.timesMap=(t,e,n,r=[])=>{const s=n?t:0,i=n?e:t,c=n||e;let o;return rt(s,i,(t=>{o=c(t,s,i,r),h(o)&&r.push(o);})),r},t.toArray=e,t.toPath=Qt,t.toggle=(t,e=!0,n=!1)=>Vt(e,t)?n:e,t.tokenize=t=>t.match(Lt)||[],t.truncate=(t,e)=>{const n=t.length;return n>e?((t,e,n)=>{const r=t.split(""),s=r.length;let i,c=n-e;for(;c<s&&c>=0&&(i=r[c]," "!==i);c--);return t.slice(0,c).trim()})(t,e,n):t},t.truncateRight=(t,e)=>{const n=t.length;return n>e?((t,e,n)=>{const r=t.split(""),s=r.length;let i,c=e;for(;c<s&&c>0&&(i=r[c]," "!==i);c++);return t.substr(c,n).trim()})(t,e,n):t},t.uid=ee,t.unZip=t=>t[0].map(((e,n)=>t.map((t=>t[n])))),t.unZipObject=t=>{const e=[],n=[];return at(t,((t,r)=>{e.push(r),n.push(t);})),[e,n]},t.union=(...t)=>tt(E(t)),t.unique=tt,t.upperCase=t=>t.replace(kt," ").trim().toUpperCase(),t.upperFirst=t=>_t(t)+Ft(t),t.upperFirstAll=t=>t.replace($t,(t=>t.toUpperCase())),t.upperFirstLetter=_t,t.upperFirstOnly=zt,t.upperFirstOnlyAll=t=>zt(t.toLowerCase()).replace($t,(t=>t.toUpperCase())),t.whileArray=z,t.whileCompactMap=function(t,e,n=[],r){let s=0;for(;s<t.length;){const i=n.push(e(t[s],s,t,t.length,r));s++,h(i)&&n.push(i);}return t},t.whileEachArray=function(t,e,n){let r=0;for(;r<t.length;)e(t[r],r,t,t.length,n),r++;return t},t.whileMapArray=function(t,e,n=[],r){let s=0;for(;s<t.length;)n.push(e(t[s],s,t,t.length,r)),s++;return t},t.whileObject=ut,t.without=(t,e)=>t.filter((t=>!e.includes(t))),t.words=t=>t.match(Dt)||[],t.wrap=(t,e)=>(...n)=>e(t,...n),t.xor=(...t)=>{const e=[];return $(t,(t=>{$(tt(t),(t=>{e.includes(t)?e.splice(e.indexOf(t),1):e.push(t);}));})),e},t.zip=(...t)=>t[0].map(((e,n)=>t.map((t=>t[n])))),t.zipObject=(t,e)=>{const n={};return $(t,((t,r)=>{n[t]=e[r];})),n},Object.defineProperty(t,"__esModule",{value:!0});}));

	(function() {
		const { assign: assign$1 } = self.$;
		const app = {
			config: {},
			utility: self.$,
			events: {
				appStatus: {
					state: 0
				},
				post(id, data, options) {
					const responseData = {
						data,
						id
					};
					assign$1(responseData, options);
					postMessage(responseData);
				},
				socket: {}
			}
		};
		console.log(app.$);
		const {
			config,
			utility: {
				assign, uid, isFileJS, isFileJSON, isFileCSS, initial, map, promise, construct, isPlainObject, isString, stringify, jsonParse
			},
			events: { post: post$1 }
		} = app;
		const shouldNotUpgrade = /(^js\/lib\/)|(\.min\.js)/;
		const importRegexGlobal = /\bimport\b([^:;=]*?){([^;]*?)}(\s\bfrom\b).*(('|"|`).*('|"|`));$/gm;
		const importSingleRegexGlobal = /\bimport\b([^:;={}]*?)([^;{}]*?)(\s\bfrom\b).*(('|"|`).*('|"|`));$/gm;
		const importEntire = /\bimport\b\s(('|"|`).*('|"|`));$/gm;
		const importDynamic = /{([^;]*?)}\s=\simport\((('|"|`).*('|"|`))\);$/gm;
		const slashString = '/';
		const replaceImports = function(file) {
			let compiled = file;
			compiled = compiled.replace(importRegexGlobal, 'const {$2} = await appGlobal.demandJs($4);');
			compiled = compiled.replace(importSingleRegexGlobal, 'const $2 = await appGlobal.demandJs($4);');
			compiled = compiled.replace(importEntire, 'await appGlobal.demandJs($1);');
			compiled = compiled.replace(importDynamic, '{$1} = await appGlobal.demandJs($2);');
			return compiled;
		};
		const getCallback = async function(response, configObj, workerInfo) {
			const { body } = response;
			const item = body.file;
			const checksum = body.cs;
			const cacheCheck = body.cache;
			const key = body.key;
			const fileList = configObj.fileList;
			const filename = fileList.files[key];
			const completedFiles = configObj.completedFiles;
			const checksums = configObj.checksum;
			const isLib = shouldNotUpgrade.test(filename);
			const isJs = isFileJS(filename);
			const isJson = isFileJSON(filename);
			const isCss = isFileCSS(filename);
			const dirname = initial(filename.split(slashString)).join(slashString);
			let sendNow;
			/*
		    During an active stream data is compiled.
		    Based on Key coming in.
		    */
			if (item) {
				completedFiles[key] += item;
			} else if (item === false) {
				checksums[key] = false;
				completedFiles[key] = false;
				configObj.filesLoaded += 1;
				sendNow = true;
			} else if (cacheCheck) {
				completedFiles[key] = true;
				configObj.filesLoaded += 1;
				sendNow = true;
			} else {
				configObj.filesLoaded += 1;
				checksums[key] = checksum;
				sendNow = true;
			}
			if (sendNow) {
				let completedFile = completedFiles[key];
				if (completedFile !== true && isJs && !isLib && completedFile !== false) {
					completedFile = replaceImports(completedFile);
				}
				post$1(
					workerInfo.id,
					{
						cs: checksums[key],
						dirname,
						file: completedFile,
						isCss,
						isJs,
						isJson,
						isLib,
						key
					},
					{
						keep: true
					}
				);
			}
			if (configObj.filesLoaded === configObj.fileListLength) {
				const returned = {
					loaded: configObj.filesLoaded
				};
				return returned;
			}
			return false;
		};
		class client {
			update(json) {
				post$1('_', json);
			}
	    callbacks = {
	    	update(json) {
	    		return this.update(json);
	    	}
	    };
	    status = 0;
	    ready() {
	    	console.log('Socket Is Ready');
	    	if (this.status) {
	    		this.update({
	    			data: {
	    				type: 'connection',
	    				status: 'reconnected'
	    			}
	    		});
	    	} else {
	    		post$1('ready', {
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
	    		return this.update(compiledResponse);
	    	}
	    	const callback = this.callbacks[compiledResponse.id];
	    	if (callback) {
	    		return callback(compiledResponse);
	    	}
	    }
	    connect() {
	    	this.socket = construct(WebSocket, [this.hostDomain]);
	    	this.socket.addEventListener('open', () => {
	    		this.ready();
	    	});
	    	// Listen for messages
	    	this.socket.addEventListener('message', (socketEvent) => {
	    		console.log('Message from server ', socketEvent.data);
	    		this.process(socketEvent.data);
	    	});
	    	this.socket.addEventListener('disconnect', (reason) => {
	    		console.log('disconnected');
	    		if (reason === 'io server disconnect') {
	    			this.connect();
	    		}
	    		this.update({
	    			data: {
	    				type: 'connection',
	    				status: 'disconnected'
	    			}
	    		});
	    	});
	    	this.socket.addEventListener('close', (reason) => {
	    		console.log('disconnected');
	    		if (reason === 'io server disconnect') {
	    			this.socket.connect();
	    		}
	    		this.update({
	    			data: {
	    				type: 'connection',
	    				status: 'closed'
	    			}
	    		});
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
	    				if (callback) {
	    					const returned = await callback(requestData);
	    					if (returned) {
	    						this.callbacks[uuid] = null;
	    						uid.free(uuid);
	    						accept(returned);
	    					}
	    				} else {
	    					accept(requestData.data);
	    				}
	    			};
	    		}
	    		this.send(data);
	    	});
	    	return results;
	    }
	    constructor() {
	    	console.log('Worker Socket Module', 'notify');
	    	this.hostDomain = `${app.config.socketHostname || location.hostname}`;
	    	if (app.config.port) {
	    		this.hostDomain = `${this.hostDomain}:${app.config.port}`;
	    	}
	    	console.log(this.hostDomain);
	    	this.connect();
	    }
		}
		let socketObject;
		assign(app.events.socket, {
			async get(options, workerInfo) {
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
						return getCallback(json, configObj, workerInfo);
					},
					data: {
						request: 'file.get',
						body
					}
				};
				const results = await socketObject.request(requestConfig);
				post$1(workerInfo.id, results);
			},
			request(data) {
				socketObject.request(data);
			}
		});
		app.events.configure = (data) => {
			assign(config, data);
			console.log('STARTING');
			socketObject = construct(client, []);
		};
		const {
			utility: { get },
			events,
			events: { post }
		} = app;
		self.onmessage = async (workerEvent) => {
			const {
				request, id, data
			} = workerEvent.data;
			const eventCallback = get(request, events);
			console.log(request, data);
			if (eventCallback) {
				const results = await eventCallback(data, {
					id
				});
				if (results) {
					post(id, results);
				}
				if (app.debug) {
					console.log(`Worker api.${request}`);
				}
			} else {
				console.log(`FAILED Worker api.${request}`);
			}
		};
	})();

})();

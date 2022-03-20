(function () {

	!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):function(){var n=t.Ractive,i=e();t.Ractive=i,i.noConflict=function(){return t.Ractive=n,i};}();}(window,function(){function t(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function e(e){for(var n=[],i=arguments.length-1;i-->0;)n[i]=arguments[i+1];for(var r=0;r<n.length;r++){var s=n[r];for(var a in s)a in e||!t(s,a)||(e[a]=s[a]);}return e}function n(e){void 0===e&&(e={});var n=[];for(var i in e)t(e,i)&&n.push([i,e[i]]);return n}function i(t,e){return null===t&&null===e?!0:u(t)||u(e)?!1:t===e}function r(t){return !isNaN(parseFloat(t))&&isFinite(t)}function s(t){return t&&"[object Object]"===Ga.call(t)}function a(t){return !(!t||!u(t)&&!h(t)||o(t))}function o(t){return t instanceof Date}function u(t){return "object"==typeof t}function h(t){return "function"==typeof t}function l(t){return "string"==typeof t}function c(t){return "number"==typeof t}function f(t){return void 0===t}function d(){}function p(t,e){return t.replace(/%s/g,function(){return e.shift()})}function m(t){for(var e=[],n=arguments.length-1;n-->0;)e[n]=arguments[n+1];throw t=p(t,e),new Error(t)}function v(){za.DEBUG&&po.apply(null,arguments);}function g(t){for(var e=[],n=arguments.length-1;n-->0;)e[n]=arguments[n+1];t=p(t,e),mo(t,e);}function y(t){for(var e=[],n=arguments.length-1;n-->0;)e[n]=arguments[n+1];t=p(t,e),bo[t]||(bo[t]=!0,mo(t,e));}function b(){za.DEBUG&&g.apply(null,arguments);}function w(){za.DEBUG&&y.apply(null,arguments);}function x(t,e,n){var i=k(t,e,n);return i?i[t][n]:null}function k(t,e,n){for(;e;){if(n in e[t])return e;if(e.isolated)return null;e=e.parent;}}function _(t,e,n,i){if(t===e)return null;if(i){var r=x("interpolators",n,i);if(r)return r(t,e)||null;m(Eo(i,"interpolator"));}return So.number(t,e)||So.array(t,e)||So.object(t,e)||null}function E(t){return l(t)?t.replace(Oo,"\\$&"):t}function S(t){return t?t.replace(Ao,".$1"):""}function A(t){var e,n=[];for(t=S(t);e=Co.exec(t);){var i=e.index+e[1].length;n.push(t.substr(0,i)),t=t.substr(i+1);}return n.push(t),n}function C(t){return l(t)?t.replace(No,"$1$2"):t}function O(t,e){var n=t.indexOf(e);-1===n&&t.push(e);}function N(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]==e)return !0;return !1}function j(t,e){var n;if(!Qa(t)||!Qa(e))return !1;if(t.length!==e.length)return !1;for(n=t.length;n--;)if(t[n]!==e[n])return !1;return !0}function T(t){return l(t)?[t]:f(t)?[]:t}function V(t){return t[t.length-1]}function P(t,e){if(t){var n=t.indexOf(e);-1!==n&&t.splice(n,1);}}function M(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];for(var n=t.concat.apply([],t),i=n.length;i--;){var r=n.indexOf(n[i]);~r&&i>r&&n.splice(i,1);}return n}function I(t){for(var e=[],n=t.length;n--;)e[n]=t[n];return e}function R(t,e){for(var n=t.length,i=0;n>i;i++){var r=e(t[i]);if(r)return r}}function B(t,e,n){var i=t,r=e;n&&(i=i.map(n),r=r.map(n));var s=i.length,a={},o=0,u=i.map(function(t){var e,n=o;do{if(e=r.indexOf(t,n),-1===e)return -1;n=e+1;}while(a[e]===!0&&s>n);return e===o&&(o+=1),a[e]=!0,e}),h=u.oldLen=i.length;if(u.newLen=r.length,h===u.newLen){var l=0;for(l;h>l&&u[l]===l;l++);l===h&&(u.same=!0);}return u}function K(t,e){if(!/this/.test(t.toString()))return t;var n=jo.call(t,e);for(var i in t)n[i]=t[i];return n}function L(t,e,n){return n&&h(e)&&t.parent&&t.parent.isRoot?(t.boundValue||(t.boundValue=K(e._r_unbound||e,t.parent.ractive)),t.boundValue):e}function D(t){t.updateFromBindings(!0);}function F(t){for(var e=t.length;e--;)if(t[e].bound){var n=t[e].owner;if(n){var i="checked"===n.name?n.node.checked:n.node.value;return {value:i}}}}function z(t){if(t){var e=To[t];To[t]=[];for(var n=e.length;n--;)e[n]();var i=Vo[t];for(Vo[t]=[],n=i.length;n--;)i[n].model.register(i[n].item);}else z("early"),z("mark");}function U(t,e,n,i){t.shuffling=!0;for(var r=t.source().length!==t.source().value.length,s=e.length;s--;){var a=e[s];s!==a&&(r=!0,s in t.childByKey&&t.childByKey[s].rebind(~a?t.joinKey(a):void 0,t.childByKey[s],!i));}for(t.links.forEach(function(t){return t.shuffle(e)}),n||z("early"),s=t.deps.length;s--;)t.deps[s].shuffle&&t.deps[s].shuffle(e);t[n?"marked":"mark"](),n||z("mark"),r&&t.notifyUpstream(),t.shuffling=!1;}function $(t,e){e!==t.dataModel&&(e&&e.viewmodel&&e.viewmodel.isRoot&&t.childByKey.data?(t.childByKey.data.link(e.viewmodel,"data"),t.dataModel=e):t.dataModel&&(t.childByKey.data.unlink(),t.dataModel=!0));}function q(){Bo.push(Ro=[]);}function H(){var t=Bo.pop();return Ro=Bo[Bo.length-1],t}function Z(t){Ro&&O(Ro,t);}function W(t){t.bind();}function G(t){t.cancel();}function Q(t){t.destroyed();}function Y(t){t.handleChange();}function J(t){t.mark();}function X(t){t.mark(!0);}function tt(t){t.marked();}function et(t){t.markedAll();}function nt(t){t.render();}function it(t){t.shuffled();}function rt(t){t.teardown();}function st(t){t.unbind();}function at(t){t.unrender();}function ot(t){t.update();}function ut(t){return t.toString()}function ht(t){return t.toString(!0)}function lt(t,e,n,i){var r=t.r||t;if(!r||!l(r))return e;if("."===r||"@"===r[0]||(e||n).isKey||(e||n).isKeypath)return e;var s=r.split("/"),a=A(s[s.length-1]),o=a[a.length-1],u=e||n;u&&1===a.length&&o!==u.key&&i&&(a=ct(o,i)||a);for(var h=a.length,c=!0,f=!1;u&&h--;)u.shuffling&&(f=!0),a[h]!=u.key&&(c=!1),u=u.parent;return !e&&c&&f?n:e&&!c&&f?n:e}function ct(t,e){for(;e;){var n=e.aliases;if(n&&n[t]){for(var i=(e.owner.iterations?e.owner:e).owner.template.z,r=0;r<i.length;r++)if(i[r].n===t){var s=i[r].x;if(!s.r)return !1;var a=s.r.split("/");return A(a[a.length-1])}return}e=e.componentParent||e.parent;}}function ft(t,e){void 0===e&&(e=0);for(var n=new Array(e);e--;)n[e]="_"+e;return new Function([],"return function ("+n.join(",")+"){return("+t+");};")()}function dt(t,e){return Do[t]?Do[t]:Do[t]=Ke(t,e)}function pt(t){if(t){var e=t.e;e&&Wa(e).forEach(function(t){Do[t]||(Do[t]=e[t]);});}}function mt(t){if(!t.matchString("="))return null;var e=t.pos;t.sp();var n=t.matchPattern(Fu);if(!n)return t.pos=e,null;if(!t.matchPattern(zu))return null;var i=t.matchPattern(Fu);return i?(t.sp(),t.matchString("=")?[n,i]:(t.pos=e,null)):(t.pos=e,null)}function vt(t){var e;return (e=t.matchPattern(Uu))?{t:vu,v:e}:null}function gt(t){return t.replace($u,"\\$&")}function yt(t,e){return t.search(qu[e.join()]||(qu[e.join()]=new RegExp(e.map(gt).join("|"))))}function bt(t){return t.replace(Qu,function(t,e){var n;return n="#"!==e[0]?Wu[e]:"x"===e[1]?parseInt(e.substring(2),16):parseInt(e.substring(1),10),n?Ju(xt(n)):t})}function wt(t){return t.replace(eh,"&amp;").replace(Xu,"&lt;").replace(th,"&gt;")}function xt(t){return t?10===t?32:128>t?t:159>=t?Gu[t-128]:55296>t?t:57343>=t?nh:65535>=t?t:Yu?t>=65536&&131071>=t?t:t>=131072&&196607>=t?t:nh:nh:nh}function kt(t){var e;return (e=t.matchPattern(sh))?{t:cu,v:e}:null}function _t(t){var e=t.remaining();return "true"===e.substr(0,4)?(t.pos+=4,{t:mu,v:"true"}):"false"===e.substr(0,5)?(t.pos+=5,{t:mu,v:"false"}):null}function Et(t){return function(e){for(var n,i='"',r=!1;!r;)n=e.matchPattern(ah)||e.matchPattern(oh)||e.matchString(t),n?i+='"'===n?'\\"':"\\'"===n?"'":n:(n=e.matchPattern(uh),n?i+="\\u"+("000"+n.charCodeAt(1).toString(16)).slice(-4):r=!0);return i+='"',JSON.parse(i)}}function St(t){var e=t.pos,n=t.matchString("'")||t.matchString('"');if(n){var i=("'"===n?hh:lh)(t);return t.matchString(n)?{t:fu,v:i}:(t.pos=e,null)}return null}function At(t){return JSON.parse('"'+t.replace(fh,Ct)+'"')}function Ct(t){switch(t){case"\n":return "\\n";case"\r":return "\\r";case"	":return "\\t";case"\b":return "\\b";case"\f":return "\\f"}}function Ot(t){if(!t.matchString("`"))return null;for(var e,n="",i=!1,r=[];!i;)if(e=t.matchPattern(ch)||t.matchPattern(oh)||t.matchString("$")||t.matchString('"'))if('"'===e)n+='\\"';else if("\\`"===e)n+="`";else if("$"===e)if(t.matchString("{")){r.push({t:fu,v:At(n)}),n="",t.sp();var s=Ft(t);s||t.error("Expected valid expression"),r.push({t:_u,x:s}),t.sp(),t.matchString("}")||t.error("Expected closing '}' after interpolated expression");}else n+="$";else n+=e;else e=t.matchPattern(uh),e?n+="\\u"+("000"+e.charCodeAt(1).toString(16)).slice(-4):i=!0;if(n.length&&r.push({t:fu,v:At(n)}),t.matchString("`")||t.error("Expected closing '`'"),r.length){if(1===r.length)return r[0];for(var a,o=r.pop();a=r.pop();)o={t:Su,s:"+",o:[a,o]};return {t:_u,x:o}}return {t:fu,v:""}}function Nt(t){var e;return (e=St(t))?gh.test(e.v)?e.v:'"'+e.v.replace(/"/g,'\\"')+'"':(e=kt(t))?e.v:(e=t.matchPattern(dh))?e:null}function jt(t){var e,n=t.pos;t.sp();var i="'"!==t.nextChar()&&'"'!==t.nextChar();i&&(e=t.matchPattern(ph));var r=e?Ft(t):Nt(t);if(null===r)return t.pos=n,null;if(t.sp(),i&&(","===t.nextChar()||"}"===t.nextChar())){e||dh.test(r)||t.error("Expected a valid reference, but found '"+r+"' instead.");var s={t:yu,k:r,v:{t:bu,n:r}};return e&&(s.p=!0),s}if(!t.matchString(":"))return t.pos=n,null;t.sp();var a=Ft(t);return null===a?(t.pos=n,null):{t:yu,k:r,v:a}}function Tt(t){var e=t.pos,n=jt(t);if(null===n)return null;var i=[n];if(t.matchString(",")){var r=Tt(t);return r?i.concat(r):(t.pos=e,null)}return i}function Vt(t){var e=t.pos;if(t.sp(),!t.matchString("{"))return t.pos=e,null;var n=Tt(t);return t.sp(),t.matchString("}")?{t:pu,m:n}:(t.pos=e,null)}function Pt(t){var e=t.pos;if(t.sp(),!t.matchString("["))return t.pos=e,null;var n=zt(t,!0);return t.matchString("]")?{t:du,m:n}:(t.pos=e,null)}function Mt(t){return kt(t)||_t(t)||St(t)||Ot(t)||Vt(t)||Pt(t)||vt(t)}function It(t){var e,n,i,r,s,a=t.pos;e=t.matchPattern(wh)||"",n=!e&&t.relaxedNames&&t.matchPattern(vh)||t.matchPattern(mh);var o=e.length+(n&&n.length||0);if("@."===e&&(e="@",n=n?"this."+n:"this"),!n&&e&&(n=e,e=""),!n)return null;if("@"===e)if(xh.test(n))if(n.indexOf("event")&&n.indexOf("node")||t.inEvent){if(!n.indexOf("context"))return t.pos=t.pos-(n.length-7),{t:_u,x:{t:bu,n:"@context"}}}else t.error("@event and @node are only valid references within an event directive");else t.error("Unrecognized special reference @"+n);if(!e&&!t.relaxedNames&&bh.test(n))return t.pos=a,null;if(!e&&yh.test(n))return i=yh.exec(n)[0],t.pos=a+i.length,{t:gu,v:i};if(r=(e||"")+S(n),t.matchString("("))if(s=r.lastIndexOf("."),-1!==s&&"]"!==n[n.length-1])if(0===s)r=".",t.pos=a;else {var u=r.length;r=r.substr(0,s),t.pos=a+(o-(u-s));}else t.pos-=1;return {t:bu,n:r.replace(/^this\./,"./").replace(/^this$/,".")}}function Rt(t){if(!t.matchString("("))return null;t.sp();var e=Ft(t);return e||t.error(ih),t.sp(),t.matchString(")")||t.error(rh),{t:_u,x:e}}function Bt(t){return Mt(t)||It(t)||Rt(t)}function Kt(t){if(t.strictRefinement||t.sp(),t.matchString(".")){t.sp();var e=t.matchPattern(dh);if(e)return {t:wu,n:e};t.error("Expected a property name");}if(t.matchString("[")){t.sp();var n=Ft(t);return n||t.error(ih),t.sp(),t.matchString("]")||t.error("Expected ']'"),{t:wu,x:n}}return null}function Lt(t){var e=Bt(t);if(!e)return null;for(;e;){var n=Kt(t);if(n)e={t:xu,x:e,r:n};else {if(!t.matchString("("))break;t.sp();var i=zt(t,!0);t.sp(),t.matchString(")")||t.error(rh),e={t:Au,x:e},i&&(e.o=i);}}return e}function Dt(t){var e=Ah(t);if(!e)return null;var n=t.pos;if(t.sp(),!t.matchString("?"))return t.pos=n,e;t.sp();var i=Ft(t);i||t.error(ih),t.sp(),t.matchString(":")||t.error('Expected ":"'),t.sp();var r=Ft(t);return r||t.error(ih),{t:Eu,o:[e,i,r]}}function Ft(t){if(t.allowExpressions===!1){var e=It(t);return t.sp(),e}return Dt(t)}function zt(t,e){var n,i=[],r=t.pos;do{t.sp(),e&&(n=t.matchPattern(ph));var s=Ft(t);if(null===s&&i.length)t.error(ih);else if(null===s)return t.pos=r,null;n&&(s.p=!0),i.push(s),t.sp();}while(t.matchString(","));return i}function Ut(t,e){var n=t.pos,i=Ft(t);if(!i){var r=t.matchPattern(/^(\w+)/);return r?{t:bu,n:r}:null}for(var s=0;s<e.length;s+=1)if(t.remaining().substr(0,e[s].length)===e[s])return i;return t.pos=n,It(t)}function $t(t){function e(t){for(var e=[],n=a-1;n>=0;n--)e.push("x$"+n);return e.length?"(function(){var "+e.join(",")+";return("+t+");})()":t}function n(t){if(l(t))return t;switch(t.t){case mu:case gu:case cu:case vu:return t.v;case fu:return JSON.stringify(String(t.v));case du:return t.m&&qt(t.m)?"[].concat("+r(t.m,"[","]",n)+")":"["+(t.m?t.m.map(n).join(","):"")+"]";case pu:return t.m&&qt(t.m)?"Object.assign({},"+r(t.m,"{","}",i)+")":"{"+(t.m?t.m.map(function(t){return t.k+":"+n(t.v)}).join(","):"")+"}";case ku:return ("typeof"===t.s?"typeof ":t.s)+n(t.o);case Su:return n(t.o[0])+("in"===t.s.substr(0,2)?" "+t.s+" ":t.s)+n(t.o[1]);case Au:if(t.o&&qt(t.o)){var e=a++;return "(x$"+e+"="+n(t.x)+").apply(x$"+e+","+n({t:du,m:t.o})+")"}return n(t.x)+"("+(t.o?t.o.map(n).join(","):"")+")";case _u:return "("+n(t.x)+")";case xu:return n(t.x)+n(t.r);case wu:return t.n?"."+t.n:"["+n(t.x)+"]";case Eu:return n(t.o[0])+"?"+n(t.o[1])+":"+n(t.o[2]);case bu:return "_"+s.indexOf(t.n);default:throw new Error("Expected legal JavaScript")}}function i(t){return t.p?n(t.k):t.k+":"+n(t.v)}function r(t,e,n,i){var r=t.reduce(function(t,r){return r.p?t.str+=""+(t.open?n+",":t.str.length?",":"")+i(r):t.str+=""+(t.str.length?t.open?",":","+e:e)+i(r),t.open=!r.p,t},{open:!1,str:""});return r.open&&(r.str+=n),r.str}var s,a=0;Ht(t,s=[]);var o=n(t);return {r:s,s:e(o)}}function qt(t){for(var e=0;e<t.length;e++)if(t[e].p)return !0;return !1}function Ht(t,e){t.t===bu&&l(t.n)&&(~e.indexOf(t.n)||e.unshift(t.n));var n=t.o||t.m;if(n)if(s(n))Ht(n,e);else for(var i=n.length;i--;)Ht(n[i],e);t.k&&t.t===yu&&!l(t.k)&&Ht(t.k,e),t.x&&Ht(t.x,e),t.r&&Ht(t.r,e),t.v&&Ht(t.v,e);}function Zt(t,e){var n;if(t){for(;t.t===_u&&t.x;)t=t.x;if(t.t===bu){var i=t.n;~i.indexOf("@context")?e.x=$t(t):e.r=t.n;}else (n=Wt(t))?e.rx=n:e.x=$t(t);return e}}function Wt(t){for(var e,n=[];t.t===xu&&t.r.t===wu;)e=t.r,e.x?e.x.t===bu?n.unshift(e.x):n.unshift($t(e.x)):n.unshift(e.n),t=t.x;return t.t!==bu?null:{r:t.n,m:n}}function Gt(t){for(var e=[],n=0,i=0;i<t.length;i++)"-"===t[i]&&"\\"!==t[i-1]&&(e.push(t.substring(n,i).replace(Kh,"")),n=i+1);return e.push(t.substring(n).replace(Kh,"")),e}function Qt(t){var e,n,i,r;if(t.sp(),e=t.matchPattern(Ch),!e)return null;for(i=e.length,n=0;n<t.tags.length;n++)~(r=e.indexOf(t.tags[n].open))&&i>r&&(i=r);return i<e.length&&(t.pos-=e.length-i,e=e.substr(0,i),!e)?null:{n:e}}function Yt(t){var e=t.pos;if(/[=\/>\s]/.test(t.nextChar())||t.error("Expected `=`, `/`, `>` or whitespace"),t.sp(),!t.matchString("="))return t.pos=e,null;t.sp();var n=t.pos,i=t.sectionDepth,r=te(t,"'")||te(t,'"')||Xt(t);return null===r&&t.error("Expected valid attribute value"),t.sectionDepth!==i&&(t.pos=n,t.error("An attribute value must contain as many opening section tags as closing section tags")),r.length?1===r.length&&l(r[0])?bt(r[0]):r:""}function Jt(t){var e,n,i=t.pos;if(e=t.matchPattern(Ih),!e)return null;var r=e,s=t.tags.map(function(t){return t.open});return -1!==(n=yt(r,s))&&(e=e.substr(0,n),t.pos=i+e.length),e}function Xt(t){t.inAttribute=!0;for(var e=[],n=se(t)||Jt(t);n;)e.push(n),n=se(t)||Jt(t);return e.length?(t.inAttribute=!1,e):null}function te(t,e){var n=t.pos;if(!t.matchString(e))return null;t.inAttribute=e;for(var i=[],r=se(t)||ee(t,e);null!==r;)i.push(r),r=se(t)||ee(t,e);return t.matchString(e)?(t.inAttribute=!1,i):(t.pos=n,null)}function ee(t,e){var n=t.remaining(),i=t.tags.map(function(t){return t.open});i.push(e);var r=yt(n,i);return -1===r&&t.error("Quoted attribute value must have a closing quote"),r?(t.pos+=r,n.substr(0,r)):null}function ne(t){var e,n,i=Qt(t);if(!i)return null;if(n=Mh[i.n])i.t=n.t,n.v&&(i.v=n.v),delete i.n,t.sp(),"="===t.nextChar()&&(i.f=Yt(t));else if(e=Th.exec(i.n))i.n=e[1],i.t=Bu,re(t,i);else if(e=Vh.exec(i.n))i.n=e[1],i.t=Ku,re(t,i),i.v="in-out"===e[2]?"t0":"in"===e[2]?"t1":"t2";else if(e=Nh.exec(i.n))i.n=Gt(e[1]),i.t=Ru,t.matchString("(")&&(i.a=$t({t:du,m:zt(t)}),t.matchString(")")||t.error("Expected closing ')'")),t.inEvent=!0,ie(t,i)?jh.test(i.f)&&(t.pos-=i.f.length,t.error("Cannot use reserved event names (change, reset, teardown, update, construct, config, init, render, unrender, complete, detach, insert, destruct, attachchild, detachchild)")):re(t,i,!0),t.inEvent=!1;else if(e=Ph.exec(i.n)){var r="bind"===e[2];i.n=r?e[3]:e[1],i.t=iu,re(t,i,!1,!0),!i.f&&r&&(i.f=[{t:Zo,r:e[3]}]);}else {t.sp();var s="="===t.nextChar()?Yt(t):null;if(i.f=null!=s?s:i.f,t.sanitizeEventAttributes&&Oh.test(i.n))return {exclude:!0};i.f=i.f||(""===i.f?"":0),i.t=iu;}return i}function ie(t,e){var n=t.pos;t.matchString("=")||t.error("Missing required directive arguments");var i=t.matchString("'")||t.matchString('"');t.sp();var r=t.matchPattern(Rh);if(void 0!==r)if(i){if(t.sp(),t.matchString(i))return (e.f=r)||!0;t.pos=n;}else {if(t.matchPattern(Bh))return (e.f=r)||!0;t.pos=n;}else t.pos=n;}function re(t,e,n,i){if(void 0===n&&(n=!1),void 0===i&&(i=!1),t.sp(),!t.matchString("="))return void(n&&t.error("Missing required directive arguments"));t.sp();var r=t.matchString('"')||t.matchString("'"),s=t.spreadArgs;t.spreadArgs=!0,t.inUnquotedAttribute=!r;var a=i?Ut(t,[r||" ","/",">"]):{m:zt(t),t:du};if(t.inUnquotedAttribute=!1,t.spreadArgs=s,r&&(t.sp(),t.matchString(r)!==r&&t.error("Expected matching quote '"+r+"'")),i){var o={t:Zo};Zt(a,o),e.f=[o];}else e.f=$t(a);}function se(t){var e,n;if(t.interpolate[t.inside]===!1)return null;for(n=0;n<t.tags.length;n+=1)if(e=ae(t,t.tags[n]))return e;return t.inTag&&!t.inAttribute&&(e=ne(t))?(t.sp(),e):void 0}function ae(t,e){var n,i,r,s=t.pos;if(t.matchString("\\"+e.open)){if(0===s||"\\"!==t.str[s-1])return e.open}else if(!t.matchString(e.open))return null;if(n=mt(t))return t.matchString(e.close)?(e.open=n[0],e.close=n[1],t.sortMustacheTags(),Lh):null;if(t.sp(),t.matchString("/")){t.pos-=1;var a=t.pos;if(vt(t))t.pos=a;else {if(t.pos=a-e.close.length,t.inAttribute)return t.pos=s,null;t.error("Attempted to close a section that wasn't open");}}for(r=0;r<e.readers.length;r+=1)if(i=e.readers[r],n=i(t,e))return e.isStatic&&(n.s=1),t.includeLinePositions&&(n.q=t.getLinePos(s)),n;return t.pos=s,null}function oe(t,e){var n=Ft(t);if(!n)return null;t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'");var i={t:Wo};return Zt(n,i),i}function ue(t,e){if(!t.matchString("&"))return null;t.sp();var n=Ft(t);if(!n)return null;t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'");var i={t:Wo};return Zt(n,i),i}function he(t){var e,n=[],i=t.pos;if(t.sp(),e=le(t)){for(e.x=Zt(e.x,{}),n.push(e),t.sp();t.matchString(",");)e=le(t),e||t.error("Expected another alias."),e.x=Zt(e.x,{}),n.push(e),t.sp();return n}return t.pos=i,null}function le(t){var e=t.pos;t.sp();var n=Ft(t);if(!n)return t.pos=e,null;t.sp(),t.matchPattern(Fh),t.sp();var i=t.matchPattern(Dh);return i?{n:i,x:n}:(t.pos=e,null)}function ce(t,e){var n,i=t.matchString(">")||t.matchString("yield"),r={t:">"===i?Xo:au};if(!i)return null;if(t.sp(),">"===i||!(n=t.matchString("with"))){t.relaxedNames=t.strictRefinement=!0;var s=Ft(t);if(t.relaxedNames=t.strictRefinement=!1,!s&&">"===i)return null;s&&(Zt(s,r),t.sp(),">"!==i&&(n=t.matchString("with")));}if(t.sp(),n||">"===i){if(n=he(t),n&&n.length)r.z=n;else {var a=Ft(t);a&&(r.c={},Zt(a,r.c)),t.matchString(",")&&(n=he(t),n&&n.length&&(r.z=n));}">"===i||r.c||r.z||t.error("Expected a context or one or more aliases");}return t.sp(),t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'"),r}function fe(t,e){if(!t.matchString("!"))return null;var n=t.remaining().indexOf(e.close);return -1!==n?(t.pos+=n+e.close.length,{t:tu}):void 0}function de(t,e){var n,i,r=t.pos;try{n=Ut(t,[e.close]);}catch(s){i=s;}if(!n){if("!"===t.str.charAt(r))return t.pos=r,null;if(i)throw i}if(!t.matchString(e.close)&&(t.error("Expected closing delimiter '"+e.close+"' after reference"),!n)){if("!"===t.nextChar())return null;t.error("Expected expression or legal reference");}var a={t:Zo};return Zt(n,a),a}function pe(t,e){var n=t.pos;if(!t.matchString(e.open))return null;if(t.sp(),!t.matchString("/"))return t.pos=n,null;t.sp();var i=t.remaining(),r=i.indexOf(e.close);if(-1!==r){var s={t:Yo,r:i.substr(0,r).split(" ")[0]};return t.pos+=r,t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'"),s}return t.pos=n,null}function me(t,e,n){var i=t.pos;if(!t.matchString(e.open))return null;if(!t.matchPattern(zh[n]))return t.pos=i,null;var r={t:Uh[n]};if("elseif"===n)r.x=Ft(t);else if("catch"===n||"then"===n){var s=t.matchPattern(dh);s&&(r.n=s);}return t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'"),r}function ve(t,e){var n,i,r,s,a,o,u,h,l,c,f,d,p,m=!1,v=t.pos;if(t.matchString("^")){if(t.matchString("^/"))return t.pos=v,null;i={t:Go,f:[],n:Ou};}else {if(!t.matchString("#"))return null;i={t:Go,f:[]},t.matchString("partial")&&(t.pos=v-t.standardDelimiters[0].length,t.error("Partial definitions can only be at the top level of the template, or immediately inside components")),(o=t.matchString("await"))?(c=o,i.t=lu):(o=t.matchPattern(Zh))&&(c=o,i.n=$h[o]);}if(t.sp(),"with"===o){var g=he(t);g&&(m=!0,i.z=g,i.t=hu);}else if("each"===o){var y=le(t);y&&(i.z=[{n:y.n,x:{r:"."}}],n=y.x);}if(!m){if(n||(n=Ft(t)),n||t.error("Expected expression"),"each"===o&&t.matchString(",")){var b=he(t);b&&(i.z&&b.unshift(i.z[0]),i.z=b);}if("each"!==o&&o||!(l=t.matchPattern(qh)))"await"===o&&t.matchString("then")&&(t.sp(),f=!0,p=t.matchPattern(dh),p||(p=!0));else {var w;(w=t.matchPattern(Hh))?i.i=l+","+w:i.i=l;}!o&&n.n&&(c=n.n);}t.sp(),t.matchString("-")&&(i.w=1),t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'"),t.sectionDepth+=1,s=i.f;var x;do if(x=t.pos,r=pe(t,e))c&&r.r!==c&&(o?(t.pos=x,t.error("Expected "+e.open+"/"+c+e.close)):r.r&&t.warn("Expected "+e.open+"/"+c+e.close+" but found "+e.open+"/"+r.r+e.close)),t.sectionDepth-=1,h=!0;else if(!m&&((r=me(t,e,"elseif"))||(r=me(t,e,"else"))||"await"===o&&((r=me(t,e,"then"))||(r=me(t,e,"catch"))))){if(i.n===Ou&&t.error("{{else}} not allowed in {{#unless}}"),a&&(r.t===Vu?t.error("there can only be one {{else}} block, at the end of a section"):r.t===Pu&&t.error("illegal {{elseif...}} after {{else}}")),!u&&(p||!f)&&!d)if("await"===o){var k={f:s};i.f=[k],p?(k.t=Mu,p!==!0&&(k.n=p)):k.t=Go;}else u=[];var _={t:Go,f:s=[]};r.t===Vu?("await"===o?(i.f.push(_),_.t=Vu):(_.n=Ou,u.push(_)),a=!0):r.t===Pu?(_.n=Cu,Zt(r.x,_),u.push(_)):r.t===Mu?(a&&t.error("{{then}} block must appear before any {{else}} block"),d&&t.error("{{then}} block must appear before any {{catch}} block"),f&&t.error("there can only be one {{then}} block per {{#await}}"),_.t=Mu,f=!0,r.n&&(_.n=r.n),i.f.push(_)):r.t===Iu&&(a&&t.error("{{catch}} block must appear before any {{else}} block"),d&&t.error("there can only be one {{catch}} block per {{#await}}"),_.t=Iu,d=!0,_.n=r.n,i.f.push(_));}else {if(r=t.read(gl),!r)break;s.push(r);}while(!h);if(u&&(i.l=u),m||Zt(n,i),"await"===o&&(p||!f)&&!d&&!a){var E={f:i.f};i.f=[E],p?(E.t=Mu,p!==!0&&(E.n=p)):E.t=Go;}return i.f.length||delete i.f,i}function ge(t){var e=t.pos;if(t.textOnlyMode||!t.matchString(Wh))return null;var n=t.remaining(),i=n.indexOf(Gh);-1===i&&t.error("Illegal HTML - expected closing comment sequence ('-->')");var r=n.substr(0,i);t.pos+=i+3;var s={t:tu,c:r};return t.includeLinePositions&&(s.q=t.getLinePos(e)),s}function ye(t,e){var n,i,r,s,a;for(n=1;n<t.length;n+=1)i=t[n],r=t[n-1],s=t[n-2],l(i)&&be(r)&&l(s)&&Yh.test(s)&&Qh.test(i)&&(t[n-2]=s.replace(Yh,"\n"),t[n]=i.replace(Qh,"")),e||(we(i)&&l(r)&&Yh.test(r)&&l(i.f[0])&&Qh.test(i.f[0])&&(t[n-1]=r.replace(Yh,"\n"),i.f[0]=i.f[0].replace(Qh,"")),l(i)&&we(r)&&(a=V(r.f),l(a)&&Yh.test(a)&&Qh.test(i)&&(r.f[r.f.length-1]=a.replace(Yh,"\n"),t[n]=i.replace(Qh,""))));return t}function be(t){return t.t===tu||t.t===eu}function we(t){return (t.t===Go||t.t===Qo)&&t.f}function xe(t,e,n){var i;e&&(i=t[0],l(i)&&(i=i.replace(e,""),i?t[0]=i:t.shift())),n&&(i=V(t),l(i)&&(i=i.replace(n,""),i?t[t.length-1]=i:t.pop()));}function ke(t,e,n,i,r,s,a){if(!l(t)){var o,u,h,c,f,d,p;for(ye(t,a),o=t.length;o--;)u=t[o],u.exclude?t.splice(o,1):e&&u.t===tu&&t.splice(o,1);for(xe(t,i?Xh:null,r?tl:null),o=t.length;o--;){if(u=t[o],d=p=!1,u.w){var m=t[o-1],v=!0;if("string"==typeof m&&(t[o-1]=m.replace(il,"$1")),u.f){"string"==typeof u.f[0]&&(u.f[0]=u.f[0].replace(rl,""));var g=u.f.length-1;"string"==typeof u.f[g]&&(u.f[g]=u.f[g].replace(il,function(t,e){return v=e,e||""}));}var y=t[o+1];v&&"string"==typeof y&&(t[o+1]=y.replace(rl,""));}if(u.f){var b=u.t===Jo&&(s[u.e.toLowerCase()]||s[u.e]);f=n||b,!n&&b&&xe(u.f,el,nl),f||(h=t[o-1],c=t[o+1],(!h||l(h)&&tl.test(h))&&(d=!0),(!c||l(c)&&Xh.test(c))&&(p=!0)),ke(u.f,e,f,d,p,s);}u.l&&(u.w&&u.l.forEach(function(t){return t.w=1}),ke(u.l,e,n,d,p,s),u.l.forEach(function(t){return t.l=1}),u.l.unshift(o+1,0),t.splice.apply(t,u.l),delete u.l),u.m&&(ke(u.m,e,n,d,p,s),u.m.length<1&&delete u.m),delete u.w;}for(o=t.length;o--;)l(t[o])&&(l(t[o+1])&&(t[o]=t[o]+t[o+1],t.splice(o+1,1)),n||(t[o]=t[o].replace(Jh," ")),""===t[o]&&t.splice(o,1));}}function _e(t){var e,n=t.pos;return t.matchString("</")?(e=t.matchPattern(sl))?t.inside&&e!==t.inside?(t.pos=n,null):{t:ru,e:e}:(t.pos-=2,void t.error("Illegal closing tag")):null}function Ee(t){return t.replace(/([A-Z])/g,function(t,e){return "-"+e.toLowerCase()})}function Se(t){var e,n,i,r,s,a,o,u,h,c,f,d=t.pos;if(t.inside||t.inAttribute||t.textOnlyMode)return null;if(!t.matchString("<"))return null;if("/"===t.nextChar())return null;var p={};if(t.includeLinePositions&&(p.q=t.getLinePos(d)),t.matchString("!"))return p.t=uu,t.matchPattern(/^doctype/i)||t.error("Expected DOCTYPE declaration"),p.a=t.matchPattern(/^(.+?)>/),p;if(f=t.matchString("#"))t.sp(),p.t=nu,p.n=t.matchPattern(ol);else if(p.t=Jo,p.e=t.matchPattern(al),!p.e)return null;for(ul.test(t.nextChar())||t.error("Illegal tag name"),t.sp(),t.inTag=!0;e=se(t);)e!==!1&&(p.m||(p.m=[]),p.m.push(e)),t.sp();if(t.inTag=!1,t.sp(),t.matchString("/")&&(n=!0),!t.matchString(">"))return null;var m=(p.e||p.n).toLowerCase(),v=t.preserveWhitespace;if(!n&&(f||!Zu[p.e.toLowerCase()])){f||(t.elementStack.push(m),m in t.interpolate&&(t.inside=m)),i=[],r=qa(null);do{if(u=t.pos,h=t.remaining(),!h){if("script"===t.inside){o=!0;break}t.error("Missing end "+(t.elementStack.length>1?"tags":"tag")+" ("+t.elementStack.reverse().map(function(t){return "</"+t+">"}).join("")+")");}if(f||Ae(m,h))if(!f&&(c=_e(t))){o=!0;var g=c.e.toLowerCase();if(g!==m&&(t.pos=u,!~t.elementStack.indexOf(g))){var y="Unexpected closing tag";Zu[g.toLowerCase()]&&(y+=" (<"+g+"> is a void element - it cannot contain children)"),t.error(y);}}else if(f&&Ce(t,p.n))o=!0;else {var b={open:t.standardDelimiters[0],close:t.standardDelimiters[1]};pe(t,b)||Oe(t,b)?(o=!0,t.pos=u):(a=t.read(yl))?(r[a.n]&&(t.pos=u,t.error("Duplicate partial definition")),ke(a.f,t.stripComments,v,!v,!v,t.whiteSpaceElements),r[a.n]=a.f,s=!0):(a=t.read(gl))?i.push(a):o=!0;}else o=!0;}while(!o);i.length&&(p.f=i),s&&(p.p=r),t.elementStack.pop();}if(t.inside=null,t.sanitizeElements&&-1!==t.sanitizeElements.indexOf(m))return ll;if(p.m&&"input"!==m&&"select"!==m&&"textarea"!==m&&"option"!==m){for(var w,x,k,_,E,S=p.m,A=0;A<S.length;)E=S[A],E.t===iu?0!==E.n.indexOf("class-")||E.f?0===E.n.indexOf("style-")&&l(E.f)?((x||(x=[])).push(Ee(E.n.slice(6))+": "+E.f+";"),S.splice(A,1)):"class"===E.n&&l(E.f)?((w||(w=[])).push(E.f),S.splice(A,1)):"style"===E.n&&l(E.f)?((x||(x=[])).push(E.f+(hl.test(E.f)?"":";")),S.splice(A,1)):"class"===E.n?(k=E,A++):"style"===E.n?(_=E,A++):!~E.n.indexOf(":")&&"value"!==E.n&&"contenteditable"!==E.n&&l(E.f)?(E.g=1,A++):A++:((w||(w=[])).push(E.n.slice(6)),S.splice(A,1)):A++;w?k&&l(k.f)?k.f+=" "+w.join(" "):S.unshift({t:iu,n:"class",f:w.join(" "),g:1}):k&&l(k.f)&&(k.g=1),x?_&&l(_.f)?_.f+="; "+x.join(" "):S.unshift({t:iu,n:"style",f:x.join(" "),g:1}):_&&l(_.f)&&(_.g=1);}return p}function Ae(t,e){var n=/^<([a-zA-Z][a-zA-Z0-9]*)/.exec(e),i=cl[t];return n&&i?!~i.indexOf(n[1].toLowerCase()):!0}function Ce(t,e){var n=t.pos;return t.matchString("</")?(t.matchString("#"),t.sp(),t.matchString(e)?(t.sp(),t.matchString(">")?!0:(t.pos=n,null)):(t.pos=n,null)):null}function Oe(t,e){var n=t.pos;if(t.matchString(e.open))return t.matchPattern(fl)?!0:void(t.pos=n)}function Ne(t){var e,n,i,r=t.remaining();return t.textOnlyMode?(n=t.tags.map(function(t){return t.open}),n=n.concat(t.tags.map(function(t){return "\\"+t.open})),e=yt(r,n)):(i=t.inside?"</"+t.inside:"<",t.inside&&!t.interpolate[t.inside]?e=r.indexOf(i):(n=t.tags.map(function(t){return t.open}),n=n.concat(t.tags.map(function(t){return "\\"+t.open})),t.inAttribute===!0?n.push('"',"'","=","<",">","`"):t.inAttribute?n.push(t.inAttribute):n.push(i),e=yt(r,n))),e?(-1===e&&(e=r.length),t.pos+=e,t.inside&&"textarea"!==t.inside||t.textOnlyMode?r.substr(0,e):bt(r.substr(0,e))):null}function je(t){var e,n,i=t.pos,r=t.standardDelimiters;if(!t.matchString(r[0]))return null;if(!t.matchPattern(dl))return t.pos=i,null;var s=t.matchPattern(/^[a-zA-Z_$][a-zA-Z_$0-9\-\/]*/);s||t.error("expected legal partial name"),t.sp(),t.matchString(r[1])||t.error("Expected closing delimiter '"+r[1]+"'");var a=[],o=r[0],u=r[1];do(e=pe(t,{open:o,close:u}))?("partial"!==e.r&&t.error("Expected "+o+"/partial"+u),n=!0):(e=t.read(gl),e||t.error("Expected "+o+"/partial"+u),a.push(e));while(!n);return {t:ou,n:s,f:a}}function Te(t){for(var e=[],n=qa(null),i=!1,r=t.preserveWhitespace;t.pos<t.str.length;){var s=t.pos,a=void 0,o=void 0;(o=t.read(yl))?(n[o.n]&&(t.pos=s,t.error("Duplicated partial definition")),ke(o.f,t.stripComments,r,!r,!r,t.whiteSpaceElements),n[o.n]=o.f,i=!0):(a=t.read(gl))?e.push(a):t.error("Unexpected template content");}var u={v:Fo,t:e};return i&&(u.p=n),u}function Ve(t,e){Wa(t).forEach(function(n){if(Pe(n,t))return Me(t,e);var i=t[n];Ie(i)&&Ve(i,e);});}function Pe(t,e){return "s"===t&&Qa(e.r)}function Me(t,e){var n=t.s,i=t.r;e[n]||(e[n]=ft(n,i.length));}function Ie(t){return Qa(t)||s(t)}function Re(t,e){return new xl(t,e||{}).result}function Be(t,e,n){t||m("Missing Ractive.parse - cannot parse "+e+". "+n);}function Ke(t,e){return Be(ft,"new expression function",_l),ft(t,e)}function Le(t,e){Be(Re,'compution string "${str}"',El);var n=Re(t,{expression:!0});return function(){return n.e.apply(e,n.r.map(function(t){return e.get(t)}))}}function De(t,e,n){var i,r,s,a,o;return h(n)&&(i=K(n,t),s=n.toString(),a=!0),l(n)&&(i=Le(n,t),s=n),u(n)&&(l(n.get)?(i=Le(n.get,t),s=n.get):h(n.get)?(i=K(n.get,t),s=n.get.toString(),a=!0):m("`%s` computation must have a `get()` method",e),h(n.set)&&(r=K(n.set,t),o=n.set.toString())),{getter:i,setter:r,getterString:s,setterString:o,getterUseStack:a}}function Fe(t){!t.started||t.outros.length||t.outroChildren||(t.outrosComplete||(t.outrosComplete=!0,t.parent&&t.parent.decrementOutros(t),ze(t)&&t.detachNodes()),t.intros.length||t.totalChildren||(h(t.callback)&&t.callback(),t.parent&&!t.notifiedTotal&&(t.notifiedTotal=!0,t.parent.decrementTotal())));}function ze(t){return !t||t.outrosComplete&&ze(t.parent)}function Ue(t){var e=t.detachQueue,n=$e(t);if(n.length){var i,r,s=e.length,a=0,o=t.detachQueue=[];t:for(;s--;){for(i=e[s].node,a=n.length;a--;)if(r=n[a].element.node,r===i||r.contains(i)||i.contains(r)){o.push(e[s]);continue t}e[s].detach();}}else t.detachNodes();}function $e(t,e){var n=e;if(n){for(var i=t.children.length;i--;)n=$e(t.children[i],n);return t.outros.length&&(n=n.concat(t.outros)),n}n=[];for(var r=t;r.parent;)r=r.parent;return $e(r,n)}function qe(t){t.dispatch();}function He(){var t=Nl.immediateObservers;Nl.immediateObservers=[],t.forEach(qe);var e,n=Nl.fragments.length;for(t=Nl.fragments,Nl.fragments=[];n--;)e=t[n],e.update();Nl.transitionManager.ready(),t=Nl.deferredObservers,Nl.deferredObservers=[],t.forEach(qe);var i=Nl.tasks;for(Nl.tasks=[],n=0;n<i.length;n+=1)i[n]();return Nl.fragments.length||Nl.immediateObservers.length||Nl.deferredObservers.length||Nl.tasks.length?He():void 0}function Ze(){jl.start();var t,e,n=performance.now();for(t=0;t<Tl.length;t+=1)e=Tl[t],e.tick(n)||Tl.splice(t--,1);jl.end(),Tl.length?requestAnimationFrame(Ze):Vl=!1;}function We(e,n){var i={};if(!n)return e;n+=".";for(var r in e)t(e,r)&&(i[n+r]=e[r]);return i}function Ge(t){var e;return Il[t]||(e=t?t+".":"",Il[t]=function(n,i){var r;return l(n)?(r={},r[e+n]=i,r):u(n)?e?We(n,t):n:void 0}),Il[t]}function Qe(t){for(var e=[],n=0;n<t.length;n++)e[n]=(t.childByKey[n]||{}).value;
	return e}function Ye(t){for(var e=t;e&&!e.context&&!e.aliases;)e=e.parent;return e}function Je(e,n){var i=e;if("."===n)return e.findContext();if("~"===n[0])return e.ractive.viewmodel.joinAll(A(n.slice(2)));if("."===n[0]||"^"===n[0]){for(var r=e,s=n.split("/"),a="^^"===s[0];r&&!r.context;)r=Xe(r);for(var o=r&&r.context;r&&"^^"===s[0];){for(s.shift(),r=r.isIteration?r.parent.parent:Xe(r);r&&!r.context;)r=Xe(r);o=r&&r.context;}if(!o&&a)throw new Error("Invalid context parent reference ('"+n+"'). There is not context at that level.");for(;"."===s[0]||".."===s[0];){var u=s.shift();".."===u&&(o=o.parent);}return n=s.join("/"),"."===n[0]&&(n=n.slice(1)),o.joinAll(A(n))}var l=A(n);if(l.length){var c=l.shift();if("@"===c[0]){if("@this"===c||"@"===c)return e.ractive.viewmodel.getRactiveModel().joinAll(l);if("@index"===c||"@key"===c){l.length&&nn(c);var f=tn(e);return f&&f["get"+("i"===c[1]?"Index":"Key")]()}if("@last"===c){var d=tn(e);return d&&d.parent.getLast()}if("@global"===c)return Fl.joinAll(l);if("@shared"===c)return Dl.joinAll(l);if("@keypath"===c||"@rootpath"===c){for(var p="r"===n[1]?e.ractive.root:null,m=e;m&&(!m.context||m.isRoot&&m.ractive.component&&(p||!m.ractive.isolated));)m=m.isRoot?m.componentParent:m.parent;return m.getKeypath(p)}if("@context"===c)return new Ll(e.getContext(),"context").joinAll(l);if("@local"===c)return e.getContext()._data.joinAll(l);if("@style"===c)return e.ractive.constructor._cssModel.joinAll(l);if("@helpers"===c)return e.ractive.viewmodel.getHelpers().joinAll(l);if("@macro"===c){var v=en(e);return v?new Ll(v,"macro").joinAll(l):void 0}throw new Error("Invalid special reference '"+c+"'")}if(c&&!l.length){var g=e.ractive.viewmodel.getHelpers();if(g.has(c))return g.joinKey(c)}var y=Ye(e);y=y&&y.context?y.context:e.findContext();for(var w,x=!1,k=e.ractive.warnAboutAmbiguity,_=0;e;){if(e.isIteration&&(c===e.parent.keyRef?w=e.getKey():c===e.parent.indexRef&&(w=e.getIndex()),w&&l.length&&nn(c)),!w&&e.aliases&&t(e.aliases,c)&&(w=e.aliases[c]),!w&&e.context&&e.context.has(c)&&(w=e.context.joinKey(c),x?k&&b("'"+n+"' resolved but is ambiguous and will create a mapping to a parent component."):k&&_&&b("'"+n+"' resolved but is ambiguous.")),w)return x&&(w=i.ractive.viewmodel.createLink(c,w,c,{implicit:!0})),l.length>0&&h(w.joinAll)&&(w=w.joinAll(l)),w;e.context&&!e.aliases&&(_=1),e.ractive.isolated||e.owner&&e.owner.containerFragment||!(e.componentParent||!e.parent&&e.ractive.component)?e=e.parent:(e=e.componentParent||e.ractive.component.up,x=!0);}var E=i.ractive;return E.resolveInstanceMembers&&"data"!==c&&c in E?E.viewmodel.getRactiveModel().joinKey(c).joinAll(l):(k&&b("'"+n+"' is ambiguous and did not resolve."),y.joinKey(c).joinAll(l))}}function Xe(t){return t&&(!t.ractive.isolated&&!(t.owner&&t.owner.containerFragment)&&(t.componentParent||!t.parent&&t.ractive.component)||t.parent)}function tn(t){for(var e,n=t;!n.isIteration&&(e=Xe(n));)n=e;return n.isIteration&&n}function en(t){for(var e=t;e;){if(e.owner.handle)return e.owner.handle;e=Xe(e);}}function nn(t){throw new Error("An index or key reference ("+t+") cannot have child properties")}function rn(t){for(var e=[],n=arguments.length-1;n-->0;)e[n]=arguments[n+1];var i=t.fragment||t._fakeFragment||(t._fakeFragment=new Ul(t));return i.getContext.apply(i,e)}function sn(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return this.ctx||(this.ctx=new zl.Context(this)),t.unshift(qa(this.ctx)),$a.apply(null,t)}function an(t){for(var e=t;e&&!e.context;)e=e.parent;return e?e:t&&t.ractive.fragment}function on(t,e){var n=ql,i=e&&e.deep,r=e&&e.shuffle,s=jl.start();e&&"keep"in e&&(ql=e.keep);for(var a=t.length;a--;){var o=t[a][0],u=t[a][1],h=t[a][2];if(!o)throw jl.end(),new Error("Failed to set invalid keypath '"+h+"'");if(i)ln(o,u);else if(r){var l=u,c=o.get();if(l||(l=c),f(c))o.set(l);else {if(!Qa(c)||!Qa(l))throw jl.end(),new Error("You cannot merge an array with a non-array");var d=cn(r);o.merge(l,d);}}else o.set(u);}return jl.end(),ql=n,1===t.length?s.then(function(){return t[0][1]}):s}function un(t,e,n,i){if(!n&&("."===e[0]||"^"===e[1]))return b("Attempted to set a relative keypath from a non-relative context. You can use a context object to set relative keypaths."),[];var r=A(e),s=n||t.viewmodel;return Hl.test(e)?s.findMatches(r):s===t.viewmodel?!t.component||t.isolated||s.has(r[0])||"@"===e[0]||!e[0]||i?[s.joinAll(r)]:[Je(t.fragment||new Ul(t),e)]:[s.joinAll(r)]}function hn(e,n,i,r){var a=[];if(s(n)){var o=function(i){t(n,i)&&a.push.apply(a,un(e,i,null,r).map(function(t){return [t,n[i],i]}));};for(var u in n)o(u);}else a.push.apply(a,un(e,n,null,r).map(function(t){return [t,i,n]}));return a}function ln(e,n){var i=e.get(!1,Zl);if(null==i||!u(n)||o(n))return e.set(n);if(!u(i))return e.set(n);for(var r in n)t(n,r)&&ln(e.joinKey(r),n[r]);}function cn(t){if(t===!0)return null;if(h(t))return t;if(l(t))return Wl[t]||(Wl[t]=function(e){return e[t]});throw new Error("If supplied, options.compare must be a string, function, or true")}function fn(t,e,n,i){if(!l(e)||!r(n))throw new Error("Bad arguments");var s=hn(t,e,n,i&&i.isolated);return on(s.map(function(t){var e=t[0],n=t[1],i=e.get();if(!r(n)||!r(i))throw new Error(Gl);return [e,i+n]}))}function dn(t,e,n){var i=c(e)?e:1,r=u(e)?e:n;return fn(this,t,i,r)}function pn(t){var e=Promise.resolve(t);return Ha(e,"stop",{value:d}),e}function mn(t,e){t=t||{};var n;return t.easing&&(n=h(t.easing)?t.easing:e.easing[t.easing]),{easing:n||Ql,duration:"duration"in t?t.duration:400,complete:t.complete||d,step:t.step||d,interpolator:t.interpolator}}function vn(t,e,n,r){r=mn(r,t);var s=e.get();if(i(s,n))return r.complete(r.to),pn(n);var a=_(s,n,t,r.interpolator);return a?e.animate(s,n,r,a):(jl.start(),e.set(n),jl.end(),pn(n))}function gn(t,e,n){if(u(t)){var i=Wa(t);throw new Error("ractive.animate(...) no longer supports objects. Instead of ractive.animate({\n  "+i.map(function(e){return "'"+e+"': "+t[e]}).join("\n  ")+"\n}, {...}), do\n\n"+i.map(function(e){return "ractive.animate('"+e+"', "+t[e]+", {...});"}).join("\n")+"\n")}return vn(this,this.viewmodel.joinAll(A(t)),e,n)}function yn(t,e){t.event&&t._eventQueue.push(t.event),t.event=e;}function bn(t){t._eventQueue.length?t.event=t._eventQueue.pop():t.event=null;}function wn(t,e){var n=e?Yl:Jl;if(n[t])return n[t];var i=t.split("."),r=[],s=!1;e&&(i.unshift("this"),s=!0);for(var a=Math.pow(2,i.length)-(e?1:0),o=0;a>o;o++){for(var u=[],h=0;h<i.length;h++)u.push(1&o>>h?"*":i[h]);r.unshift(u.join("."));}return s&&(i.length>2?r.push.apply(r,wn(t,!1)):(r.push("*"),r.push(t))),n[t]=r,r}function xn(t,e,n,i){if(void 0===i&&(i=[]),e){n.name=e,i.unshift(n);var r=t._nsSubs?wn(e,!0):["*",e];return kn(t,r,n,i,!0)}}function kn(t,e,n,i,r){void 0===r&&(r=!1);var s=!0;if(r||t._nsSubs){yn(t,n);for(var a=e.length;a--;)e[a]in t._subs&&(s=_n(t,t._subs[e[a]],n,i)&&s);bn(t);}if(t.parent&&s){if(r&&t.component){var o=t.component.name+"."+e[e.length-1];e=wn(o,!1),n&&!n.component&&(n.component=t);}s=kn(t.parent,e,n,i);}return s}function _n(t,e,n,i){var r=null,s=!1;e=e.slice();for(var a=0,o=e.length;o>a;a+=1)e[a].off||e[a].handler.apply(t,i)!==!1||(s=!0);return n&&s&&(r=n.event)&&(r.preventDefault&&r.preventDefault(),r.stopPropagation&&r.stopPropagation()),!s}function En(t,e){return t[e._guid]||(t[e._guid]=[])}function Sn(t,e){var n=En(t.queue,e);for(t.hook.fire(e);n.length;)Sn(t,n.shift());delete t.queue[e._guid];}function An(t,e){void 0===e&&(e=null);var n=[];return Cn(t,e,n,t.ractive),n}function Cn(t,e,n,i){if(t.isAnchor)e&&t.name!==e||n.push(t);else if(t.items)t.items.forEach(function(t){return Cn(t,e,n,i)});else if(t.iterations)t.iterations.forEach(function(t){return Cn(t,e,n,i)});else if(!t.fragment||t.component&&t.fragment.ractive!==i){if(t.instance&&t.instance.fragment){var r=[];Cn(t.instance.fragment,e,r,i),r.forEach(function(t){return t.ractive===i&&n.push(t)});}}else Cn(t.fragment,e,n,i);}function On(t,e){void 0===e&&(e=null);var n=An(t.fragment,e),i={},r=t._children.byName;n.forEach(function(t){var e=t.name;e in i||(i[e]=0);var n=i[e],s=(r[e]||[])[n];s&&s.lastBound!==t&&(s.lastBound&&s.lastBound.removeChild(s),t.addChild(s)),i[e]++;});}function Nn(t){t.instance.fragment.rendered&&(t.shouldDestroy=!0,t.instance.unrender()),t.instance.el=null;}function jn(t,e){void 0===e&&(e={});var n,i=this._children;if(t.parent&&t.parent!==this)throw new Error("Instance "+t._guid+" is already attached to a different instance "+t.parent._guid+". Please detach it from the other instance using detachChild first.");if(t.parent)throw new Error("Instance "+t._guid+" is already attached to this instance.");var r={instance:t,ractive:this,name:e.name||t.constructor.name||"Ractive",target:e.target||!1,bubble:Tn,findNextNode:Vn};if(r.nameOption=e.name,r.target){var s;(s=i.byName[r.target])||(s=[],this.set("@this.children.byName."+r.target,s)),n=e.prepend?0:void 0!==e.insertAt?e.insertAt:s.length;}else r.up=this.fragment,r.external=!0;t.parent=this,t.root=this.root,t.component=r,i.push(r);var a=jl.start(),o=t.viewmodel.getRactiveModel();return o.joinKey("parent",{lastLink:!1}).link(this.viewmodel.getRactiveModel()),o.joinKey("root",{lastLink:!1}).link(this.root.viewmodel.getRactiveModel()),nc.attachchild.fire(t),r.target?(Nn(r),this.splice("@this.children.byName."+r.target,n,0,r),On(this,r.target)):t.isolated||t.viewmodel.attached(this.fragment),jl.end(),a.ractive=t,a.then(function(){return t})}function Tn(){jl.addFragment(this.instance.fragment);}function Vn(){return this.anchor?this.anchor.findNextNode():void 0}function Pn(t,e){this.computed[t]=e,(l(e)||h(e))&&(e=this.computed[t]={get:e});var n=A(t);if(!~t.indexOf("*")){var i=n.pop();return this.viewmodel.joinAll(n).compute(i,e)}e.pattern=new RegExp("^"+n.map(function(t){return t.replace(/\*\*/g,"(.+)").replace(/\*/g,"((?:\\\\.|[^\\.])+)")}).join("\\.")+"$");}function Mn(t,e){var n=jl.start(),i=Pn.call(this,t,e);if(i){var r=A(t);1!==r.length||i.isReadonly||i.set(this.viewmodel.value[r[0]]);var s=r.reduce(function(t,e){return t&&t.childByKey[e]},this.viewmodel);s&&(s.rebind(i,s,!1),s.parent&&delete s.parent.childByKey[s.key],z());}return jl.end(),n}function In(){return this.isDetached?this.el:(this.el&&P(this.el.__ractive_instances__,this),this.el=this.fragment.detach(),this.isDetached=!0,nc.detach.fire(this),this.el)}function Rn(t){for(var e,n,i=this._children,r=i.length;r--;)if(i[r].instance===t){n=r,e=i[r];break}if(!e||t.parent!==this)throw new Error("Instance "+t._guid+" is not attached to this instance.");var s=jl.start();e.anchor&&e.anchor.removeChild(e),t.isolated||t.viewmodel.detached(),i.splice(n,1),e.target&&(this.splice("@this.children.byName."+e.target,i.byName[e.target].indexOf(e),1),On(this,e.target));var a=t.viewmodel.getRactiveModel();return a.joinKey("parent",{lastLink:!1}).unlink(),a.joinKey("root",{lastLink:!1}).link(a),t.root=t,t.parent=null,t.component=null,nc.detachchild.fire(t),jl.end(),s.ractive=t,s.then(function(){return t})}function Bn(t,e){var n=this;if(void 0===e&&(e={}),!this.rendered)throw new Error("Cannot call ractive.find('"+t+"') unless instance is rendered to the DOM");var i=this.fragment.find(t,e);if(i)return i;if(e.remote)for(var r=0;r<this._children.length;r++)if(n._children[r].instance.fragment.rendered&&(i=n._children[r].instance.find(t,e)))return i}function Kn(t,e){if(void 0===e&&(e={}),!this.rendered)throw new Error("Cannot call ractive.findAll('"+t+"', ...) unless instance is rendered to the DOM");return Qa(e.result)||(e.result=[]),this.fragment.findAll(t,e),e.remote&&this._children.forEach(function(n){!n.target&&n.instance.fragment&&n.instance.fragment.rendered&&n.instance.findAll(t,e);}),e.result}function Ln(t,e){return !e&&u(t)&&(e=t,t=""),e=e||{},Qa(e.result)||(e.result=[]),this.fragment.findAllComponents(t,e),e.remote&&this._children.forEach(function(n){!n.target&&n.instance.fragment&&n.instance.fragment.rendered&&(t&&n.name!==t||e.result.push(n.instance),n.instance.findAllComponents(t,e));}),e.result}function Dn(t,e){var n=this;void 0===e&&(e={}),u(t)&&(e=t,t="");var i=this.fragment.findComponent(t,e);if(i)return i;if(e.remote){if(!t&&this._children.length)return this._children[0].instance;for(var r=0;r<this._children.length;r++)if(!n._children[r].target){if(n._children[r].name===t)return n._children[r].instance;if(i=n._children[r].instance.findComponent(t,e))return i}}}function Fn(t){return this.container?this.container.component&&this.container.component.name===t?this.container:this.container.findContainer(t):null}function zn(t){return this.parent?this.parent.component&&this.parent.component.name===t?this.parent:this.parent.findParent(t):null}function Un(t,e,n){for(void 0===e&&(e=!0);t&&(t.type!==Jo||n&&t.name!==n)&&(!e||t.type!==su&&t.type!==nu);)t=t.owner?t.owner:t.component||t["yield"]?t.containerFragment||t.component.up:t.parent?t.parent:t.up?t.up:void 0;return t}function $n(t,e,n){var i=[],r=qn(t,e,n);if(!r)return null;var s=r.length-2-r[1],a=Math.min(t,r[0]),o=a+r[1];i.startIndex=a;var u;for(u=0;a>u;u+=1)i.push(u);for(;o>u;u+=1)i.push(-1);for(;t>u;u+=1)i.push(u+s);return 0!==s?i.touchedFrom=r[0]:i.touchedFrom=t,i}function qn(t,e,n){switch(e){case"splice":for(void 0!==n[0]&&n[0]<0&&(n[0]=t+Math.max(n[0],-t)),f(n[0])&&(n[0]=0);n.length<2;)n.push(t-n[0]);return c(n[1])||(n[1]=t-n[0]),n[1]=Math.min(n[1],t-n[0]),n;case"sort":case"reverse":return null;case"pop":return t?[t-1,1]:[0,0];case"push":return [t,0].concat(n);case"shift":return [0,t?1:0];case"unshift":return [0,0].concat(n)}}function Hn(t){function e(t){for(var e=[],i=arguments.length-1;i-->0;)e[i]=arguments[i+1];return n(this.viewmodel.joinAll(A(t)),e)}function n(e,n){var i=e.get();if(!Qa(i)){if(f(i)){i=[];var r=ic[t].apply(i,n),s=jl.start().then(function(){return r});return e.set(i),jl.end(),s}throw new Error("shuffle array method "+t+" called on non-array at "+e.getKeypath())}var a=$n(i.length,t,n),o=ic[t].apply(i,n),u=jl.start().then(function(){return o});return u.result=o,a?e.shuffle?e.shuffle(a):e.mark():e.set(o),jl.end(),u}return {path:e,model:n}}function Zn(t,e,n){e.parent&&e.parent.wrapper&&e.parent.adapt();var i=jl.start();return e.mark(n&&n.force),e.notifyUpstream(),jl.end(),nc.update.fire(t,e),i}function Wn(t,e){var n,i;return l(t)?(i=A(t),n=e):n=t,Zn(this,i?this.viewmodel.joinAll(i):this.viewmodel,n)}function Gn(e,n,i){var r=[];if(s(n))for(var a in n)t(n,a)&&r.push([Qn(e,a).model,n[a]]);else r.push([Qn(e,n).model,i]);return r}function Qn(t,e){var n=t.fragment;return l(e)?{model:Je(n,e),instance:n.ractive}:{model:n.findContext(),instance:e}}function Yn(t,e){return t.events&&t.events.find&&t.events.find(function(t){return ~t.template.n.indexOf(e)})}function Jn(t){for(var e=[],n=arguments.length-1;n-->0;)e[n]=arguments[n+1];var i;if(e[0]instanceof dc){var r=e.shift();i=qa(r),$a(i,r);}else i=!u(e[0])||null!==e[0]&&e[0].constructor!==Object?dc.forRactive(this):dc.forRactive(this,e.shift());return xn(this,t,i,e)}function Xn(t,e){if(!l(t))return this.viewmodel.get(!0,t);var n,i=A(t),r=i[0];return this.viewmodel.has(r)||this.component&&!this.isolated&&(n=Je(this.fragment||new Ul(this),r)),n=this.viewmodel.joinAll(i),n.get(!0,e)}function ti(){return cc.f?cc.f.getContext():void 0}function ei(t){l(t)&&Sc&&(t=Sc.call(document,t));var e;if(t){if(t._ractive)return t._ractive.proxy.getContext();if(!(e=t.__ractive_instances__))return ei(t.parentNode);if(1===e.length)return rn(e[0])}}function ni(t,e){return t?(l(t)&&(t=this.find(t,e)),ei(t)):rn(this)}function ii(t){return Pc?t:{is:t}}function ri(){return Xa.createDocumentFragment()}function si(t){var e;if(t&&"boolean"!=typeof t){if(!Ja||!Xa||!t)return null;if(t.nodeType)return t;if(l(t)){if(e=Xa.getElementById(t),!e&&Xa.querySelector)try{e=Xa.querySelector(t);}catch(n){}if(e&&e.nodeType)return e}return t[0]&&t[0].nodeType?t[0]:null}}function ai(t){return t&&"unknown"!=typeof t.parentNode&&t.parentNode&&t.parentNode.removeChild(t),t}function oi(t){return null==t||c(t)&&isNaN(t)||!t.toString?"":""+t}function ui(t){return oi(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function hi(t,e){if(!this.fragment.rendered)throw new Error("The API has changed - you must call `ractive.render(target[, anchor])` to render your Ractive instance. Once rendered you can use `ractive.insert()`.");if(t=si(t),e=si(e)||null,!t)throw new Error("You must specify a valid target to insert into");t.insertBefore(this.detach(),e),this.el=t,(t.__ractive_instances__||(t.__ractive_instances__=[])).push(this),this.isDetached=!1,li(this);}function li(t){nc.insert.fire(t),t.findAllComponents("*").forEach(function(t){li(t.instance);});}function ci(t,e,n){var i,r=n&&(n.ractive||n.instance)||this,s=A(t);!r.viewmodel.has(s[0])&&r.component&&(i=Je(r.component.up,s[0]),i=i.joinAll(s.slice(1)));var a=i||r.viewmodel.joinAll(s),o=this.viewmodel.joinAll(A(e),{lastLink:!1});if(fi(a,o)||fi(o,a))throw new Error("A keypath cannot be linked to itself.");var u=jl.start();return o.link(a,n&&n.keypath||t),jl.end(),u}function fi(t,e){for(var n=e;n;){if(n===t||n.owner===t)return !0;n=n.target||n.parent;}}function di(t,e){var n=e&&t.model?t.model.get():t.newValue;try{t.oldValue=t.oldFn?t.oldFn.call(t.oldContext,void 0,n,t.keypath):n;}catch(i){b("Failed to execute observer oldValue callback for '"+this.keypath+"': "+(i.message||i)),t.oldValue=n;}}function pi(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.map(E).join(".")}function mi(t){return A(t).map(C)}function vi(t,e,n){var i=t.oldValues;t.oldFn?(n||(t.oldValues={}),Wa(e).forEach(function(n){var r=[i[n],e[n],n],s=t.pattern.exec(n);s&&r.push.apply(r,s.slice(1)),t.oldValues[n]=t.oldFn.apply(t.oldContext,r);})):n?Wa(e).forEach(function(t){return i[t]=e[t]}):t.oldValues=e;}function gi(){return -1}function yi(t,e,n){var i,r,a=this,o=[];s(t)?(i=t,r=e||{}):h(t)?(i={"":t},r=e||{}):(i={},i[t]=e,r=n||{});var u=!1;return Wa(i).forEach(function(t){var e=i[t],n=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return u?void 0:e.apply(this,t)},s=t.split(" ");s.length>1&&(s=s.filter(function(t){return t})),s.forEach(function(t){r.keypath=t;var e=bi(a,t,n,r);e&&o.push(e);});}),this._observers.push.apply(this._observers,o),{cancel:function(){return o.forEach(function(t){return t.cancel()})},isSilenced:function(){return u},silence:function(){return u=!0},resume:function(){return u=!1}}}function bi(t,e,n,i){var r=A(e),s=r.indexOf("*");~s||(s=r.indexOf("**")),i.fragment=i.fragment||t.fragment;var a;if(i.fragment?~r[0].indexOf(".*")?(a=i.fragment.findContext(),s=0,r[0]=r[0].slice(1)):a=0===s?i.fragment.findContext():Je(i.fragment,r[0]):a=t.viewmodel.joinKey(r[0]),a||(a=t.viewmodel.joinKey(r[0])),~s){var o=r.indexOf("**");return ~o&&(o+1!==r.length||~r.indexOf("*"))?void w("Recursive observers may only specify a single '**' at the end of the path."):(a=a.joinAll(r.slice(1,s)),new Bc(t,a,r.slice(s),n,i))}return a=a.joinAll(r.slice(1)),i.array?new Lc(t,a,n,i):new Mc(t,a,n,i)}function wi(t,e,n){return s(t)||h(t)?(n=$a(e||{},Fc),this.observe(t,n)):(n=$a(n||{},Fc),this.observe(t,e,n))}function xi(t,e){var n=this;if(t){var i=t.split(" ").map(zc).filter(Uc);i.forEach(function(t){var i=n._subs[t];if(i&&e){var r=i.find(function(t){return t.callback===e});r&&(P(i,r),r.off=!0,t.indexOf(".")&&n._nsSubs--);}else i&&(t.indexOf(".")&&(n._nsSubs-=i.length),i.length=0);});}else this._subs={};return this}function ki(e,n){var i=this,r=u(e)?e:{};l(e)&&(r[e]=n);var s=!1,a=[],o=function(e){var n=r[e],o=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return s?void 0:n.apply(this,t)},u={callback:n,handler:o};if(t(r,e)){var h=e.split(" ").map(zc).filter(Uc);h.forEach(function(t){(i._subs[t]||(i._subs[t]=[])).push(u),t.indexOf(".")&&i._nsSubs++,a.push([t,u]);});}};for(var h in r)o(h);return {cancel:function(){return a.forEach(function(t){return i.off(t[0],t[1].callback)})},isSilenced:function(){return s},silence:function(){return s=!0},resume:function(){return s=!1}}}function _i(t,e){var n=this.on(t,function(){e.apply(this,arguments),n.cancel();});return n}function Ei(t,e){void 0===e&&(e={});var n=A(t);if(this.viewmodel.has(n[0])){var i=this.viewmodel.joinAll(n);if(!i.isLink)return;for(;(i=i.target)&&e.canonical!==!1&&i.isLink;);if(i)return {ractive:i.root.ractive,keypath:i.getKeypath()}}}function Si(t){return void 0===t?Yc:Yc=t}function Ai(t){Zc.push(t),Wc=!0;}function Ci(t){var e=Ti();e&&(t||Wc)&&(Yc?Zc.forEach(function(t){var e=Ni(t.id);if(e){var n=Oi(t.id);Qc?e.styleSheet.cssText!==n&&(e.styleSheet.cssText=n):e.innerHTML!==n&&(e.innerHTML=n);}}):Qc?e.styleSheet.cssText=Oi(null):e.innerHTML=Oi(null),Wc=!1);}function Oi(t){t&&!Qa(t)&&(t=[t]);var e=t?Zc.filter(function(e){return ~t.indexOf(e.id)}):Zc;return e.forEach(function(t){return t.applied=!0}),e.reduce(function(t,e){return ""+(t?t+"\n\n/* {"+e.id+"} */\n"+e.styles:"")},Hc)}function Ni(t){return Xa&&(Xa.querySelector('[data-ractive-css="'+t+'"]')||ji(t))}function ji(t){if(Xa){var e=Xa.createElement("style");return e.type="text/css",e.setAttribute("data-ractive-css",t||""),Xa.getElementsByTagName("head")[0].appendChild(e),null===Qc&&(Qc=!!e.styleSheet),e}}function Ti(){return Gc||(Gc=ji()),Gc}function Vi(t,e,n){void 0===n&&(n=[]);var i=[],r=function(t){return t.replace(ef,function(t,e){return i[e]})};return t=t.replace(tf,function(t){return "\x00"+(i.push(t)-1)}).replace(Xc,""),n.forEach(function(e){t=t.replace(e,function(t){return "\x00"+(i.push(t)-1)});}),e(t,r)}function Pi(t){return t.trim()}function Mi(t){return t.str}function Ii(t,e){for(var n,i=[];n=of.exec(t);)i.push({str:n[0],base:n[1],modifiers:n[2]});for(var r=i.map(Mi),s=[],a=i.length;a--;){var o=r.slice(),u=i[a];o[a]=u.base+e+u.modifiers||"";var h=r.slice();h[a]=e+" "+h[a],s.push(o.join(" "),h.join(" "));}return s.join(", ")}function Ri(t,e){var i='[data-ractive-css~="{'+e+'}"]';return hf.test(t)?t.replace(hf,i):Vi(t,function(t,e){return t=t.replace(rf,"$&").replace(nf,function(t,e){if(uf.test(e))return t;var n=e.split(",").map(Pi),r=n.map(function(t){return Ii(t,i)}).join(", ")+" ";return t.replace(e,r)}).replace(sf,""),e(t)},[af])}function Bi(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function Ki(){return Bi()+Bi()+"-"+Bi()+"-"+Bi()+"-"+Bi()+"-"+Bi()+Bi()+Bi()}function Li(t,e,n){var i=u(t)?e:n,r=this._cssModel;r.locked=!0;var s=on(hn({viewmodel:r},t,e,!0),i);r.locked=!1;var a=jl.start();return this.extensions.forEach(function(t){var e=t._cssModel;e.mark(),e.downstreamChanged("",1);}),jl.end(),Di(this,!i||i.apply!==!1),s.then(function(){return a})}function Di(t,e){var n=Fi(t),i=t.extensions.map(function(t){return Di(t,!1)}).reduce(function(t,e){return e||t},!1);if(e&&(n||i)){var r=t._cssDef;(!r||r&&r.applied)&&Ci(!0);}return n||i}function Fi(t){var e=t.css;if(h(e)){var n=t._cssDef,i=Ui(t,e),r=n.transform?Ri(i,n.id):i;if(n.styles!==r)return n.styles=r,!0}}function zi(t){for(var e=t,n=[];e;)e.prototype.cssId&&n.push(e.prototype.cssId),e=e.Parent;return n}function Ui(t,e){if(l(e))return e;var n=t.cssData,i=t._cssModel,r=function(t){return i.joinAll(A(t)).get()};r.__proto__=n;var s=e.call(t,r);return l(s)?s:""}function $i(t,e,n){var i=t.css===!0?"":l(t.css)&&!cf.test(t.css)?si(t.css)||t.css:t.css,r=i,s=t.cssId||Ki();u(i)?(i="textContent"in i?i.textContent:i.innerHTML,r=i):h(i)&&(r=i,i=Ui(e,i));var a={transform:"noCSSTransform"in t?!t.noCSSTransform:!t.noCssTransform};Ha(e,"_cssDef",{configurable:!0,value:a}),Ha(e,"css",{get:function(){return r},set:function(t){r=t;var n=Ui(e,r),i=a.styles;a.styles=a.transform?Ri(n,s):n,a.applied&&i!==a.styles&&Ci(!0);}}),a.styles=a.transform?Ri(i,s):i,a.id=n.cssId=s,e._cssIds.push(s),Ai(e._cssDef);}function qi(t){t&&t.constructor!==Object&&(h(t)||(u(t)?b("If supplied, options.data should be a plain JavaScript object - using a non-POJO as the root object may work, but is discouraged"):m("data option must be an object or a function, `"+t+"` is not valid")));}function Hi(){return {}}function Zi(t,e){qi(e);var n=h(t);e||n||(e=Hi);var i=h(e);return n||i?function(){var r=i?Wi(e,this):e,s=n?Wi(t,this):t;return Gi(r,s)}:Gi(e,t)}function Wi(t,e){var n=t.call(e);if(n)return u(n)||m("Data function must return an object"),n.constructor!==Object&&w("Data function returned something other than a plain JavaScript object. This might work, but is strongly discouraged"),n}function Gi(t,e){if(t&&e){for(var n in e)n in t||(t[n]=e[n]);return t}return t||e}function Qi(t){var e=t._config.template;if(e&&e.fn){var n=Yi(t,e.fn);return n!==e.result?(e.result=n,n):void 0}}function Yi(t,e){return e.call(t,{fromId:Sl.fromId,isParsed:Sl.isParsed,parse:function(e,n){return void 0===n&&(n=Sl.getParseOptions(t)),Sl.parse(e,n)}})}function Ji(t,e){return l(t)?t=Xi(t,e):(tr(t),pt(t)),t}function Xi(t,e){return "#"===t[0]&&(t=Sl.fromId(t)),Sl.parseFor(t,e)}function tr(t){if(void 0==t)throw new Error("The template cannot be "+t+".");if(!c(t.v))throw new Error("The template parser was passed a non-string template, but the template doesn't have a version.  Make sure you're passing in the template you think you are.");if(t.v!==Fo)throw new Error("Mismatched template version (expected "+Fo+", got "+t.v+") Please ensure you are using the latest version of Ractive.js in your build process as well as in your app")}function er(e,n,i){if(n)for(var r in n)(i||!t(e,r))&&(e[r]=n[r]);}function nr(t,e,n){function i(){var t=ir(i._parent,e),r="_super"in this,s=this._super;this._super=t;var a=n.apply(this,arguments);return r?this._super=s:delete this._super,a}return /_super/.test(n)?(i._parent=t,i._method=n,i):n}function ir(t,e){if(e in t){var n=t[e];return h(n)?n:function(){return n}}return d}function rr(t,e,n){return "options."+t+" has been deprecated in favour of options."+e+"."+(n?" You cannot specify both options, please use options."+e+".":"")}function sr(t,e,n){if(e in t){if(n in t)throw new Error(rr(e,n,!0));b(rr(e,n)),t[n]=t[e];}}function ar(t){sr(t,"beforeInit","onconstruct"),sr(t,"init","onrender"),sr(t,"complete","oncomplete"),sr(t,"eventDefinitions","events"),Qa(t.adaptors)&&sr(t,"adaptors","adapt");}function or(e,n,i,r,s){ar(r);for(var a in r)if(t(_f,a)){var o=r[a];"el"!==a&&h(o)?b(a+" is a Ractive option that does not expect a function and will be ignored","init"===e?i:null):i[a]=o;}if(i.append&&i.enhance)throw new Error("Cannot use append and enhance at the same time");bf.forEach(function(t){t[e](n,i,r,s);}),Jc[e](n,i,r,s),pf[e](n,i,r,s),ff[e](n,i,r,s),ur(n.prototype,i,r);}function ur(e,n,i){for(var r in i)if(!Ef[r]&&t(i,r)){var s=i[r];h(s)&&((r in rm||"on"===r.slice(0,2)&&r.slice(2)in nc&&r in n)&&!Af.test(s.toString())&&b("Overriding Ractive prototype function '"+r+"' without calling the '"+Af+"' method can be very dangerous."),s=nr(e,r,s)),n[r]=s;}}function hr(t){var e={};return t.forEach(function(t){return e[t]=!0}),e}function lr(t){return l(t)?Vi(t,function(t,e){return t.split(";").filter(function(t){return !!t.trim()}).map(e).reduce(function(t,e){var n=e.indexOf(":"),i=e.substr(0,n).trim();return t[i]=e.substr(n+1).trim(),t},{})}):{}}function cr(t){for(var e=t.split(jf),n=e.length;n--;)e[n]||e.splice(n,1);return e}function fr(t){var e=t.element,n=t.name;if("value"===n){if(t.interpolator&&(t.interpolator.bound=!0),"select"===e.name&&"value"===n)return e.getAttribute("multiple")?dr:pr;if("textarea"===e.name)return yr;if(null!=e.getAttribute("contenteditable"))return mr;if("input"===e.name){var i=e.getAttribute("type");if("file"===i)return d;if("radio"===i&&e.binding&&"name"===e.binding.attribute.name)return vr;if(~Tf.indexOf(i))return yr}return gr}var r=e.node;if(t.isTwoway&&"name"===n){if("radio"===r.type)return br;if("checkbox"===r.type)return wr}if("style"===n)return xr;if(0===n.indexOf("style-"))return kr;if("class"===n&&(!r.namespaceURI||r.namespaceURI===Ac))return _r;if(0===n.indexOf("class-"))return Er;if(t.isBoolean){var s=e.getAttribute("type");return !t.interpolator||"checked"!==n||"checkbox"!==s&&"radio"!==s||(t.interpolator.bound=!0),Sr}return t.namespace&&t.namespace!==t.node.namespaceURI?Cr:Ar}function dr(t){var e=this.getValue();Qa(e)||(e=[e]);var n=this.node.options,i=n.length;if(t)for(;i--;)n[i].selected=!1;else for(;i--;){var r=n[i],s=r._ractive?r._ractive.value:r.value;r.selected=N(e,s);}}function pr(t){var e=this.getValue();if(!this.locked){this.node._ractive.value=e;var n=this.node.options,i=n.length,r=!1;if(t)for(;i--;)n[i].selected=!1;else for(;i--;){var s=n[i],a=s._ractive?s._ractive.value:s.value;if(s.disabled&&s.selected&&(r=!0),a==e)return void(s.selected=!0)}r||(this.node.selectedIndex=-1);}}function mr(t){var e=this.getValue();this.locked||(t?this.node.innerHTML="":this.node.innerHTML=f(e)?"":e);}function vr(t){var e=this.node,n=e.checked,i=this.getValue();return t?e.checked=!1:(e.value=this.node._ractive.value=i,e.checked=this.element.compare(i,this.element.getAttribute("name")),void(n&&!e.checked&&this.element.binding&&this.element.binding.rendered&&this.element.binding.group.model.set(this.element.binding.group.getValue())))}function gr(t){if(!this.locked)if(t)this.node.removeAttribute("value"),this.node.value=this.node._ractive.value=null;else {var e=this.getValue();this.node.value=this.node._ractive.value=e,this.node.setAttribute("value",oi(e));}}function yr(t){if(!this.locked)if(t)this.node._ractive.value="",this.node.removeAttribute("value");else {var e=this.getValue();this.node._ractive.value=e;var n=oi(e);this.node.value!==n&&(this.node.value=n),this.node.setAttribute("value",n);}}function br(t){t?this.node.checked=!1:this.node.checked=this.element.compare(this.getValue(),this.element.binding.getValue());}function wr(t){var e=this,n=e.element,i=e.node,r=n.binding,s=this.getValue(),a=n.getAttribute("value");if(Qa(s)){for(var o=s.length;o--;)if(n.compare(a,s[o]))return void(r.isChecked=i.checked=!0);r.isChecked=i.checked=!1;}else r.isChecked=i.checked=n.compare(s,a);}function xr(t){for(var e=t?{}:lr(this.getValue()||""),n=this.node.style,i=Wa(e),r=this.previous||[],s=0;s<i.length;){if(i[s]in n){var a=e[i[s]].replace("!important","");n.setProperty(i[s],a,a.length!==e[i[s]].length?"important":"");}s++;}for(s=r.length;s--;)!~i.indexOf(r[s])&&r[s]in n&&n.setProperty(r[s],"","");this.previous=i;}function kr(t){if(this.style||(this.style=Ee(this.name.substr(6))),!t||this.node.style.getPropertyValue(this.style)===this.last){var e=t?"":oi(this.getValue()),n=e.replace("!important","");this.node.style.setProperty(this.style,n,n.length!==e.length?"important":""),this.last=this.node.style.getPropertyValue(this.style);}}function _r(t){var e=t?[]:cr(oi(this.getValue())),n=this.node.className;n=void 0!==n.baseVal?n.baseVal:n;var i=cr(n),r=this.previous||[],s=e.concat(i.filter(function(t){return !~r.indexOf(t)})).join(" ");s!==n&&(l(this.node.className)?this.node.className=s:this.node.className.baseVal=s),this.previous=e;}function Er(t){var e=this.name.substr(6),n=this.node.className;n=void 0!==n.baseVal?n.baseVal:n;var i=cr(n),r=t?!1:this.getValue();this.inlineClass||(this.inlineClass=e),r&&!~i.indexOf(e)?i.push(e):!r&&~i.indexOf(e)&&i.splice(i.indexOf(e),1),l(this.node.className)?this.node.className=i.join(" "):this.node.className.baseVal=i.join(" ");}function Sr(t){if(!this.locked)if(t)this.useProperty&&(this.node[this.propertyName]=!1),this.node.removeAttribute(this.propertyName);else if(this.useProperty)this.node[this.propertyName]=this.getValue();else {var e=this.getValue();e?this.node.setAttribute(this.propertyName,l(e)?e:""):this.node.removeAttribute(this.propertyName);}}function Ar(t){t?this.node.getAttribute(this.name)===this.value&&this.node.removeAttribute(this.name):(this.value=oi(this.getString()),this.node.setAttribute(this.name,this.value));}function Cr(t){t?this.value===this.node.getAttributeNS(this.namespace,this.name.slice(this.name.indexOf(":")+1))&&this.node.removeAttributeNS(this.namespace,this.name.slice(this.name.indexOf(":")+1)):(this.value=oi(this.getString()),this.node.setAttributeNS(this.namespace,this.name.slice(this.name.indexOf(":")+1),this.value));}function Or(){return Mf}function Nr(t,e){if(Rf.test(t))return [];var n=e?"svg":"div";return t?(Pf.innerHTML="<"+n+" "+t+"></"+n+">")&&I(Pf.childNodes[0].attributes):[]}function jr(t,e){for(var n=t.length;n--;)if(t[n].name===e.name)return !1;
	return !0}function Tr(t,e){for(var n="xmlns:"+e;t;){if(t.hasAttribute&&t.hasAttribute(n))return t.getAttribute(n);t=t.parentNode;}return Vc[e]}function Vr(){return Bf}function Pr(t,e,n){0===e?t.value=!0:"true"===e?t.value=!0:"false"===e||"0"===e?t.value=!1:t.value=e;var i=t.element[t.flag];return t.element[t.flag]=t.value,n&&!t.element.attributes.binding&&i!==t.value&&t.element.recreateTwowayBinding(),t.value}function Mr(t){Cf.call(this,t);}function Ir(){var t=this;return this.torndown?(b("ractive.teardown() was called on a Ractive instance that was already torn down"),Promise.resolve()):(this.shouldDestroy=!0,Rr(this,function(){return t.fragment.rendered?t.unrender():Promise.resolve()}))}function Rr(t,e){t.torndown=!0,t.fragment.unbind(),t._observers.slice().forEach(G),t.el&&t.el.__ractive_instances__&&P(t.el.__ractive_instances__,t);var n=e();return nc.teardown.fire(t),n.then(function(){nc.destruct.fire(t),t.viewmodel.teardown();}),n}function Br(t,e){if(t.applyValue=function(t){this.parent.value[e]=t,t&&t.viewmodel?(this.link(t.viewmodel.getRactiveModel(),e),this._link.markedAll()):(this.link(qa(Ko),e),this._link.markedAll());},"root"===e){var n=t.mark;t.mark=function(t){this._marking||(this._marking=!0,n.apply(this,t),this._marking=!1);};}return t.applyValue(t.parent.ractive[e],e),t._link.set=function(e){return t.applyValue(e)},t._link.applyValue=function(e){return t.applyValue(e)},t._link}function Kr(t,e){t._link&&t._link.implicit&&t._link.isDetached()&&t.attach(e);for(var n in t.childByKey)if(t.value)if(n in t.value)Kr(t.childByKey[n],e);else if(!t.childByKey[n]._link||t.childByKey[n]._link.isDetached()){var i=Je(e,n);i&&t.childByKey[n].link(i,n,{implicit:!0});}}function Lr(t){t._link&&t._link.implicit&&t.unlink();for(var e in t.childByKey)Lr(t.childByKey[e]);}function Dr(t,e,i){var r=(t.constructor["_"+i]||[]).concat(n(e[i]||[])),s="on"===i?"once":i+"Once";r.forEach(function(e){var n=e[0],r=e[1];h(r)?t[i](n,r):u(r)&&h(r.handler)&&t[r.once?s:i](n,r.handler,qa(r));});}function Fr(e,n){za.DEBUG&&vo(),Ur(e),$r(e),Dr(e,n,"on"),!t(n,"delegate")&&e.parent&&e.parent.delegate!==e.delegate&&(e.delegate=!1),Qa(n.use)&&e.use.apply(e,n.use.filter(function(t){return t.construct})),nc.construct.fire(e,n),n.onconstruct&&n.onconstruct.call(e,rn(e),n);for(var i=$f.length;i--;){var r=$f[i];e[r]=$a(qa(e.constructor[r]||null),n[r]);}for(i=qf.length;i--;){var s=qf[i];e[s]=$a(qa(e.constructor.prototype[s]),n[s]);}e._attributePartial&&(e.partials["extra-attributes"]=e._attributePartial,delete e._attributePartial);var a=new Uf({adapt:zr(e,e.adapt,n),data:df.init(e.constructor,e,n),ractive:e});e.adapt=a.adaptors,e.viewmodel=a;for(var o in e.computed)Pn.call(e,o,e.computed[o]);}function zr(t,e,n){function i(e){return l(e)&&(e=x("adaptors",t,e),e||m(Eo(e,"adaptor"))),e}e=e.map(i);var r=T(n.adapt).map(i),s=[e,r];return t.parent&&!t.isolated&&s.push(t.parent.viewmodel.adaptors),M.apply(null,s)}function Ur(t){t._guid="r-"+Hf++,t._subs=qa(null),t._nsSubs=0,t._config={},t.event=null,t._eventQueue=[],t._observers=[],t._children=[],t._children.byName={},t.children=t._children,t.component||(t.root=t,t.parent=t.container=null);}function $r(t){var e=t.component,n=t.constructor.attributes;if(n&&e){var i=e.template,r=i.m?i.m.slice():[],s=r.filter(function(t){return t.t===iu}).map(function(t){return t.n});n.required.forEach(function(t){~s.indexOf(t)||b("Component '"+e.name+"' requires attribute '"+t+"' to be provided");});for(var a=n.optional.concat(n.required),o=[],u=r.length;u--;){var h=r[u];h.t!==iu||~a.indexOf(h.n)?n.mapAll||h.t!==Bu&&h.t!==Ku&&h.t!==Lu||o.unshift(r.splice(u,1)[0]):n.mapAll?o.unshift({t:iu,n:h.n,f:[{t:Zo,r:"~/"+h.n}]}):o.unshift(r.splice(u,1)[0]);}o.length&&(e.template={t:i.t,e:i.e,f:i.f,m:r,p:i.p}),t._attributePartial=o;}}function qr(t){this.item&&this.removeChild(this.item);var e=t.instance;t.anchor=this,t.up=this.up,t.name=t.nameOption||this.name,this.name=t.name,e.isolated||e.viewmodel.attached(this.up),this.rendered&&Zr(this,t);}function Hr(t){this.item===t&&(Wr(this,t),this.name=this.template.n);}function Zr(t,e){if(t.rendered){e.shouldDestroy=!1,e.up=t.up,t.item=e,t.instance=e.instance;var n=t.up.findNextNode(t);e.instance.fragment.rendered&&e.instance.unrender(),e.partials=e.instance.partials,e.instance.partials=$a(qa(e.partials),e.partials,t._partials),e.instance.fragment.unbind(!0),e.instance.fragment.componentParent=t.up,e.instance.fragment.bind(e.instance.viewmodel),t.attributes.forEach(W),t.eventHandlers.forEach(W),t.attributes.forEach(nt),t.eventHandlers.forEach(nt);var i=t.up.findParentNode();fa(e.instance,i,i.contains(n)?n:null,t.occupants),e.lastBound!==t&&(e.lastBound=t);}}function Wr(t,e){t.rendered&&(e.shouldDestroy=!0,e.instance.unrender(),t.eventHandlers.forEach(at),t.attributes.forEach(at),t.eventHandlers.forEach(st),t.attributes.forEach(st),e.instance.el=e.instance.anchor=null,e.instance.fragment.componentParent=null,e.up=null,e.anchor=null,t.item=null,t.instance=null);}function Gr(){var t=Wf;Wf=[],t.forEach(On);}function Qr(t){t.deps.length||t.refs||t.links.length||t.teardown();}function Yr(t,e,n,i){void 0===i&&(i={}),e&&e.f&&e.f.s&&(i.register?(t.model=new Xf(n,e.f),t.model.register(t)):t.fn=dt(e.f.s,e.f.r.length));}function Jr(t,e,n,i){return void 0===i&&(i={}),e.f.r.map(function(t,e){var r;return i.specialRef&&(r=i.specialRef(t,e))?r:r=Je(n,t)})}function Xr(t){t.model&&t.model.unregister(t);}function ts(){this._ractive.binding.handleChange();}function es(t,e,n){var i=t+"-bindingGroup";return e[i]||(e[i]=new ld(i,e,n))}function ns(){var t=this,e=this.bindings.filter(function(t){return t.node&&t.node.checked}).map(function(t){return t.element.getAttribute("value")}),n=[];return e.forEach(function(e){t.bindings[0].arrayContains(n,e)||n.push(e);}),n}function is(){ts.call(this);var t=this._ractive.binding.model.get();this.value=void 0==t?"":t;}function rs(t){var e;return function(){var n=this;e&&clearTimeout(e),e=setTimeout(function(){var t=n._ractive.binding;t.rendered&&ts.call(n),e=null;},t);}}function ss(t){return t.selectedOptions?I(t.selectedOptions):t.options?I(t.options).filter(function(t){return t.selected}):[]}function as(t){return bd[t]||(bd[t]=[])}function os(){var t=this.bindings.filter(function(t){return t.node.checked});return t.length>0?t[0].element.getAttribute("value"):void 0}function us(t){return t&&t.template.f&&1===t.template.f.length&&!t.template.f[0].s?t.template.f[0].t===Zo?!0:(t.template.f[0].t===Wo&&b("It is not possible create a binding using a triple mustache."),!1):!1}function hs(t){var e=t.name,n=t.attributeByName;if("input"===e||"textarea"===e||"select"===e||n.contenteditable){var i=us(n.value),r=us(n.contenteditable),s=t.getAttribute("contenteditable");if((s||r)&&i)return pd;if("input"===e){var a=t.getAttribute("type");if("radio"===a){var o=us(n.name),u=us(n.checked);return o&&u?(b("A radio input can have two-way binding on its name attribute, or its checked attribute - not both",{ractive:t.root}),xd):o?xd:u?wd:null}if("checkbox"===a){var h=us(n.name),l=us(n.checked);return h&&l?hd:h?dd:l?hd:null}return "file"===a&&i?vd:"number"===a&&i?yd:"range"===a&&i?yd:i?md:null}return "select"===e&&i?t.getAttribute("multiple")?gd:kd:"textarea"===e&&i?md:null}}function ls(t){var e=t.attributeByName.name;return "radio"===t.getAttribute("type")&&(e||{}).interpolator&&t.getAttribute("value")===e.interpolator.model.get()}function cs(t){var e=t.toString();return e?" "+e:""}function fs(t){var e=t.getAttribute("xmlns");if(e)return e;if("svg"===t.name)return Oc;var n=t.parent;return n?"foreignobject"===n.name?Ac:n.node.namespaceURI:t.ractive.el.namespaceURI}function ds(){Sd=!0;}function ps(){Ad=!0;}function ms(){Cd=!0;}function vs(t){var e,n=t.type,i=t.currentTarget,r=i._ractive&&i._ractive.proxy,s=t.target,a=!0,o=!1;Sd=Ad=Cd=!1;var u=t.stopPropagation,h=t.stopImmediatePropagation,l=t.preventDefault;for(t.stopPropagation=ds,t.stopImmediatePropagation=ps,t.preventDefault=ms;a&&s&&s!==i;){var c=s._ractive&&s._ractive.proxy;if(c&&c.up.delegate===r&&gs(t,s,i)&&(e=c.listeners&&c.listeners[n]))for(var f=e.length,d=0;f>d;d++){if(a=e[d].call(s,t)!==!1&&a,Ad){a=!1;break}Sd&&(a=!1),Cd&&!o&&(o=!0,l.call(t));}s=s.parentNode||s.correspondingUseElement;}return a&&(a=!Sd&&!Ad),Sd&&u.call(t),Ad&&h.call(t),t.stopPropagation=u,t.stopImmediaitePropagation=h,t.preventDefault=l,a}function gs(t,e,n){if(Od&&t instanceof Od)for(var i=e;i&&i!==n;){if(i.disabled)return !1;i=i.parentNode||i.correspondingUseElement;}return !0}function ys(t){var e,n=this,i=this._ractive.proxy;if(i.listeners&&(e=i.listeners[t.type]))for(var r=e.length,s=0;r>s;s++)e[s]&&e[s].call(n,t);}function bs(){var t=this._ractive.proxy;jl.start(),t.formBindings.forEach(ws),jl.end();}function ws(t){t.model.set(t.resetValue);}function xs(t,e,n,i){if(n){var r=n[0];if(r&&3===r.nodeType){var s=r.nodeValue.indexOf(i);n.shift(),0===s?r.nodeValue.length!==i.length&&n.unshift(r.splitText(i.length)):r.nodeValue=i;}else r=t.node=Xa.createTextNode(i),n[0]?e.insertBefore(r,n[0]):e.appendChild(r);t.node=r;}else t.node||(t.node=Xa.createTextNode(i)),e.appendChild(t.node);}function ks(t){t.base&&t.base.unregister(t.proxy),t.models&&t.models.forEach(function(e){e.unregister&&e.unregister(t);});}function _s(t){var e,n,i=t.deps.length;for(e=0;i>e;e++)n=t.deps[e],n.pathChanged&&n.pathChanged(),n.fragment&&n.fragment.pathModel&&n.fragment.pathModel.applyValue(t.getKeypath());for(i=t.children.length,e=0;i>e;e++)_s(t.children[e]);}function Es(t,e){return e.r?Je(t,e.r):e.x?new Xf(t,e.x):e.rx?new Fd(t,e.rx):void 0}function Ss(t){$d.call(this,t);}function As(t){t.sp();var e=Nt(t);if(!e)return null;var n={key:e};if(t.sp(),!t.matchString(":"))return null;t.sp();var i=t.read();return i?(n.value=i.v,n):null}function Cs(t,e){var n=new tp(t,{values:e});return n.result}function Os(t){var e=t.template.f,n=t.element.instance.viewmodel,i=n.value;if(1===e.length&&e[0].t===Zo){var r=Es(t.up,e[0]),s=r.get(!1);e[0].s?!u(s)||e[0].x?n.joinKey(A(t.name)).set(s):b("Cannot copy non-computed object value from static mapping '"+t.name+"'"):(t.model=r,t.link=n.createLink(t.name,r,e[0].r,{mapping:!0}),f(s)&&!r.isReadonly&&t.name in i&&r.set(i[t.name])),r!==t.model&&r.unregister();}else t.boundFragment=new Qp({owner:t,template:e}).bind(),t.model=n.joinKey(A(t.name)),t.model.set(t.boundFragment.valueOf()),t.boundFragment.bubble=function(){Qp.prototype.bubble.call(t.boundFragment),jl.scheduleTask(function(){t.boundFragment.update(),t.model.set(t.boundFragment.valueOf());});};}function Ns(t,n,i){var r=js(t,n,i||{});if(r)return r;if(r=Sl.fromId(n,{noThrow:!0})){var s=Sl.parseFor(r,t);return s.p&&e(t.partials,s.p),t.partials[n]=s.t}}function js(e,n,i){var r=Ps(n,i.owner);if(r)return r;var s=k("partials",e,n);if(s){r=s.partials[n];var a;if(h(r)){if(a=r,a.styleSet)return a;a=r.bind(s),a.isOwner=t(s.partials,n),r=a.call(e,Sl);}if(!r&&""!==r)return void b(_o,n,"partial","partial",{ractive:e});if(!Sl.isParsed(r)){var o=Sl.parseFor(r,s);o.p&&b("Partials ({{>%s}}) cannot contain nested inline partials",n,{ractive:e});var u=a?s:Ts(s,n);u.partials[n]=r=o.t;}return a&&(r._fn=a),r.v?(pt(r),s.partials[n]=r.t):r}}function Ts(e,n){return t(e.partials,n)?e:Vs(e.constructor,n)}function Vs(e,n){return e?t(e.partials,n)?e:Vs(e.Parent,n):void 0}function Ps(e,n){if(n){if(n.template&&n.template.p&&!Qa(n.template.p)&&t(n.template.p,e))return n.template.p[e];if(n.up&&n.up.owner)return Ps(e,n.up.owner)}}function Ms(t){Ss.call(this,t);var e=t.template;e.t===au?this.yielder=1:e.t===Jo&&(this.type=Xo,this.macro=t.macro);}function Is(t,e){t.partial=t.last=e,Rs(t);var n={owner:t,template:t.partial};t.yielder&&(n.ractive=t.container.parent),t.fn&&(n.cssIds=t.fn._cssIds),t.fragment=new Qp(n);}function Rs(t){t.template.c&&(t.partial=[{t:Go,n:ju,f:t.partial}],$a(t.partial[0],t.template.c),t.yielder?t.partial[0].y=t:t.partial[0].z=t.template.z);}function Bs(t,e,n){var i=e;return Qa(i)?t.partial=i:i&&u(i)?Qa(i.t)?t.partial=i.t:l(i.template)&&(t.partial=Fs(i.template,i.template,t.ractive).t):h(i)&&i.styleSet?(t.fn=i,t.fragment&&(t.fragment.cssIds=i._cssIds)):null!=i&&(i=Ns(t.ractive,""+i,t.containerFragment||t.up),i?(t.name=e,i.styleSet?(t.fn=i,t.fragment&&(t.fragment.cssIds=i._cssIds)):t.partial=i):n?t.partial=Fs(""+e,""+e,t.ractive).t:t.name=e),t.partial}function Ks(t){if(Bs(this,t,!0),!this.initing){if(this.dirtyTemplate=!0,this.fnTemplate=this.partial,!this.updating){var e=jl.start();return this.bubble(),jl.end(),e}this.bubble(),jl.promise();}}function Ls(t,e){var n=this.fragment.aliases||(this.fragment.aliases={});e?n[e]=this._data.joinAll(A(t)):n[t]=this._data;}function Ds(e){var n=e.fn,i=e.fragment,r=e.template=$a({},e.template),s=e.handle=i.getContext({proxy:e,aliasLocal:Ls,name:e.template.e||e.name,attributes:{},setTemplate:Ks.bind(e),template:r,macro:n});if(r.p||(r.p={}),r.p=s.partials=$a({},r.p),t(r.p,"content")||(r.p.content=r.f||[]),Qa(n.attributes)){e._attrs={};var a=function(){this.dirty=!0,e.dirtyAttrs=!0,e.bubble();};if(Qa(r.m)){var o=r.m;r.p[rp]=r.m=o.filter(function(t){return !~n.attributes.indexOf(t.n)}),o.filter(function(t){return ~n.attributes.indexOf(t.n)}).forEach(function(t){var n=new Qp({template:t.f,owner:e});n.bubble=a,n.findFirstNode=d,e._attrs[t.n]=n;});}else r.p[rp]=[];}else r.p[rp]=r.m;e._attrs&&(Wa(e._attrs).forEach(function(t){e._attrs[t].bind();}),e.refreshAttrs()),e.initing=1,e.proxy=n.call(e.ractive,s,s.attributes)||{},e.partial||(e.partial=[]),e.fnTemplate=e.partial,e.initing=0,Rs(e),i.resetTemplate(e.partial);}function Fs(t,e,n){var i;try{i=Sl.parse(e,Sl.getParseOptions(n));}catch(r){b("Could not parse partial from expression '"+t+"'\n"+r.message);}return i||{t:[]}}function zs(t){var e,n,i=t;t:for(;i;){for(n=0;!n&&i;){if(i.owner.type===Jo&&(n=i.owner),i.owner.ractive&&i.owner.ractive.delegate===!1)break t;i=i.parent||i.componentParent;}if(n.delegate===!1)break t;for(e=n.delegate||n;i&&!i.iterations;){if(i.owner.ractive&&i.owner.ractive.delegate===!1)break t;i=i.parent||i.componentParent;}}return e}function Us(t,e,n,i){var r=t.context?qs(t,e,n):void 0;e.key=n,e.index=i,e.context=r,t.source&&(e.lastValue=r&&r.get()),e.idxModel&&e.idxModel.applyValue(i),e.keyModel&&e.keyModel.applyValue(n),e.pathModel&&(e.pathModel.context=r,e.pathModel.applyValue(r.getKeypath())),e.rootModel&&(e.rootModel.context=r,e.rootModel.applyValue(r.getKeypath(e.ractive.root)));var s=e.aliases;t.aliases&&t.aliases.forEach(function(t){"."===t.x.r?s[t.n]=r:"@index"===t.x.r?s[t.n]=e.getIndex():"@key"===t.x.r?s[t.n]=e.getKey():"@keypath"===t.x.r?s[t.n]=e.getKeypath():"@rootpath"===t.x.r&&(s[t.n]=e.getKeypath(!0));});}function $s(t,e){var n=t.context.get()||[];return e===!0?n.slice():n.map(function(t){return e.reduce(function(t,e){return t&&t[e]},t)})}function qs(t,e,n){if(t.source){var i,r=t.source.model.get();if(r.indexOf&&~(i=r.indexOf(t.context.joinKey(n).get())))return t.source.model.joinKey(i)}return t.context.joinKey(n)}function Hs(t){return !t||Qa(t)&&0===t.length||s(t)&&0===Wa(t).length}function Zs(t,e){return e||Qa(t)?Nu:a(t)?Tu:f(t)?null:Cu}function Ws(t,e){var n=(t.containerFragment||t.up).findNextNode(t);if(n){var i=ri();e.render(i),n.parentNode.insertBefore(i,n);}else e.render(t.up.findParentNode());}function Gs(){mp=!Xa[vp];}function Qs(){mp=!1;}function Ys(){mp=!0;}function Js(t){return t?(Sp.test(t)&&(t="-"+t),t.replace(/[A-Z]/g,function(t){return "-"+t.toLowerCase()})):""}function Xs(e,n,i){for(var r=n;r;){if(t(r,e)&&(f(i)||i?r.rendering:r.unrendering))return r[e];r=r.component&&r.component.ractive;}return n[e]}function ta(t,e){var n=[];if(null==t||""===t)return n;var i,r,s;Up&&(r=$p[e.tagName])?(i=ea("DIV"),i.innerHTML=r[0]+t+r[1],i=i.querySelector(".x"),"SELECT"===i.tagName&&(s=i.options[i.selectedIndex])):e.namespaceURI===Oc?(i=ea("DIV"),i.innerHTML='<svg class="x">'+t+"</svg>",i=i.querySelector(".x")):"TEXTAREA"===e.tagName?(i=vc("div"),"undefined"!=typeof i.textContent?i.textContent=t:i.innerHTML=t):(i=ea(e.tagName),i.innerHTML=t,"SELECT"===i.tagName&&(s=i.options[i.selectedIndex]));for(var a;a=i.firstChild;)n.push(a),i.removeChild(a);var o;if("SELECT"===e.tagName)for(o=n.length;o--;)n[o]!==s&&(n[o].selected=!1);return n}function ea(t){return qp[t]||(qp[t]=vc(t))}function na(e,n){var i,r=k("components",e,n);if(r&&(i=r.components[n],i&&!i.isInstance))if(i["default"]&&i["default"].isInstance)i=i["default"];else if(!i.then&&h(i)){var s=i.bind(r);if(s.isOwner=t(r.components,n),i=s(),!i)return void b(_o,n,"component","component",{ractive:e});l(i)&&(i=na(e,i)),i._fn=s,r.components[n]=i;}return i}function ia(t,e){var n=e.template.p||{},i=e.template.e,r=$a({},e,{template:{t:Jo,e:i},macro:function(r){r.setTemplate(n["async-loading"]||[]),t.then(function(t){e.up.ractive.components[i]=t,n["async-loaded"]?(r.partials.component=[e.template],r.setTemplate(n["async-loaded"])):r.setTemplate([e.template]);},function(t){n["async-failed"]?(r.aliasLocal("error","error"),r.set("@local.error",t),r.setTemplate(n["async-failed"])):r.setTemplate([]);});}});return new Ms(r)}function ra(t,e,n){var i=t.f.find(function(t){return t.t===e});return i?i.n?[{t:19,n:54,f:i.f||[],z:[{n:i.n,x:{r:"__await."+n}}]}]:i.f||[]:[]}function sa(t){var e=t.template,n=ra(e,Mu,"value"),i=ra(e,Iu,"error"),r=ra(e,Go),s=ra(e,Vu),a=$a({},t,{template:{t:Jo,m:[{t:iu,n:"for",f:[{t:Zo,r:e.r,rx:e.rx,x:e.x}]}]},macro:function(t,e){function a(e){e["for"]&&h(e["for"].then)?(t.setTemplate(r),e["for"].then(function(e){t.set("@local.value",e),t.setTemplate(n);},function(e){t.set("@local.error",e),t.setTemplate(i);})):f(e["for"])?t.setTemplate(s):(t.set("@local.value",e["for"]),t.setTemplate(n));}return t.aliasLocal("__await"),a(e),{update:a}}});return a.macro.attributes=["for"],new Ms(a)}function aa(t){if(l(t.template))return new dp(t);var e,n,i=t.template.t;if(i===Jo){if(n=t.template.e,e=k("partials",t.up.ractive,n),e&&(e=e.partials[n],e.styleSet))return t.macro=e,new Ms(t);if(e=na(t.up.ractive,n)){if(h(e.then))return ia(e,t);if(h(e))return new Zf(t,e)}return new(e=Gp[n.toLowerCase()]||Ed)(t)}var r;if(i===iu){var s=t.owner;(!s||s.type!==nu&&s.type!==su&&s.type!==Jo)&&(s=Un(t.up)),t.element=s,r=s.type===su||s.type===nu?ep:Kf;}else r=Wp[i];if(!r)throw new Error("Unrecognised item type "+i);return new r(t)}function oa(t,e,n,i){return void 0===i&&(i=0),t.map(function(t){if(t.type===Ho)return t.template;if(t.fragment)return t.fragment.iterations?t.fragment.iterations.map(function(t){return oa(t.items,e,n,i)}).join(""):oa(t.fragment.items,e,n,i);var r=n+"-"+i++,s=t.model||t.newModel;return e[r]=s?s.wrapper?s.wrapperValue:s.get():void 0,"${"+r+"}"}).join("")}function ua(t,e,n){void 0===n&&(n={});for(var i=0;i<t.length;i++)if(!n[t[i].n]){var r=Es(e,t[i].x);n[t[i].n]=r,r.reference();}return n}function ha(t){var e,n=an(this);if(t){if(this.rootModel)return this.rootModel;this.rootModel=new sp(this.context.getKeypath(this.ractive.root),this.context,this.ractive.root),e=this.rootModel;}else {if(this.pathModel)return this.pathModel;this.pathModel=new sp(this.context.getKeypath(),this.context),e=this.pathModel;}return n&&n.context&&n.getKeypath(t).registerChild(e),e}function la(t,e,n){var i=t.viewmodel.computed;if(i)for(var r in i)r in t.viewmodel.value&&i[r]&&!i[r].isReadonly&&i[r].set(t.viewmodel.value[r]);wf.init(t.constructor,t,e),Qa(e.use)&&t.use.apply(t,e.use.filter(function(t){return !t.construct})),nc.config.fire(t),nc.init.begin(t);var s=t.fragment=ca(t,n);if(s&&s.bind(t.viewmodel),nc.init.end(t),Dr(t,e,"observe"),s){var a=t.el=t.target=si(t.el||t.target);if(a&&!t.component){var o=t.render(a,t.append);za.DEBUG_PROMISES&&o["catch"](function(e){throw w("Promise debugging is enabled, to help solve errors that happen asynchronously. Some browsers will log unhandled promise rejections, in which case you can safely disable promise debugging:\n  Ractive.DEBUG_PROMISES = false;"),b("An error happened during rendering",{ractive:t}),v(e),e});}}}function ca(t,e){if(void 0===e&&(e={}),t.template){var n=[].concat(t.constructor._cssIds||[],e.cssIds||[]);return new Qp({owner:t,template:t.template,cssIds:n})}}function fa(t,e,n,i){t.rendering=!0;var r=jl.start();if(jl.scheduleTask(function(){return nc.render.fire(t)},!0),t.fragment.rendered)throw new Error("You cannot call ractive.render() on an already rendered instance! Call ractive.unrender() first");if(t.destroyed&&(t.destroyed=!1,t.fragment=ca(t).bind(t.viewmodel)),n=si(n)||t.anchor,t.el=t.target=e,t.anchor=n,t.cssId&&Ci(),e)if((e.__ractive_instances__||(e.__ractive_instances__=[])).push(t),n){var s=Xa.createDocumentFragment();t.fragment.render(s),e.insertBefore(s,n);}else t.fragment.render(e,i);return jl.end(),t.rendering=!1,r.then(function(){t.torndown||nc.complete.fire(t);})}function da(t,e){if(this.torndown)return b("ractive.render() was called on a Ractive instance that was already torn down"),Promise.resolve();if(t=si(t)||this.el,!this.append&&t){var n=t.__ractive_instances__;n&&n.forEach(rt),this.enhance||(t.innerHTML="");}var i=this.enhance?I(t.childNodes):null,r=fa(this,t,e,i);if(i)for(;i.length;)t.removeChild(i.pop());return r}function pa(t){if(t=t||{},!u(t))throw new Error("The reset method takes either no arguments, or an object containing new data");t=df.init(this.constructor,this,{data:t});var e=jl.start(),n=this.viewmodel.wrapper;n&&n.reset?n.reset(t)===!1&&this.viewmodel.set(t):this.viewmodel.set(t);for(var i,r=wf.reset(this),s=r.length;s--;)if(Jp.indexOf(r[s])>-1){i=!0;break}return i&&(nc.unrender.fire(this),this.fragment.resetTemplate(this.template),nc.render.fire(this),nc.complete.fire(this)),jl.end(),nc.reset.fire(this,t),e}function ma(t,e,n,i){t.forEach(function(t){if(t.type===Xo&&(t.refName===e||t.name===e))return t.inAttribute=n,void i.push(t);if(t.fragment)ma(t.fragment.iterations||t.fragment.items,e,n,i);else if(Qa(t.items))ma(t.items,e,n,i);else if(t.type===su&&t.instance){if(t.instance.partials[e])return;ma(t.instance.fragment.items,e,n,i);}t.type===Jo&&Qa(t.attributes)&&ma(t.attributes,e,!0,i);});}function va(t,e){var n=[];ma(this.fragment.items,t,!1,n);var i=jl.start();return this.partials[t]=e,n.forEach(Y),jl.end(),i}function ga(t){pf.init(null,this,{template:t});var e=this.transitionsEnabled;this.transitionsEnabled=!1;var n=this.component;n&&(n.shouldDestroy=!0),this.unrender(),n&&(n.shouldDestroy=!1);var i=jl.start();this.fragment.unbind().unrender(!0),this.fragment=new Qp({template:this.template,root:this,owner:this});var r=ri();return this.fragment.bind(this.viewmodel).render(r),n&&!n.external?this.fragment.findParentNode().insertBefore(r,n.findNextNode()):this.el.insertBefore(r,this.anchor),jl.end(),this.transitionsEnabled=e,i}function ya(t,e,n){var i=this,r=u(t)?e:n;return on(hn(i,t,e,r&&r.isolated),r)}function ba(t,e,n){var i=c(e)?-e:-1,r=u(e)?e:n;return fn(this,t,i,r)}function wa(t,e){if(!l(t))throw new TypeError(ko);return on(un(this,t,null,e&&e.isolated).map(function(t){return [t,!t.get()]}),e)}function xa(){var t=[this.cssId].concat(this.findAllComponents().map(function(t){return t.cssId})),e=Wa(t.reduce(function(t,e){return t[e]=!0,t},{}));return Oi(e)}function ka(){return this.fragment.toString(!0)}function _a(){return this.fragment.toString(!1)}function Ea(t,e,n){e instanceof HTMLElement||s(e)&&(n=e),e=e||this.event.node,e&&e._ractive||m("No node was supplied for transition "+t),n=n||{};var i=e._ractive.proxy,r=new Dp({owner:i,up:i.up,name:t,params:n});r.bind();var a=jl.start();return jl.registerTransition(r),jl.end(),a.then(function(){return r.unbind()}),a}function Sa(t){var e=jl.start();return this.viewmodel.joinAll(A(t),{lastLink:!1}).unlink(),jl.end(),e}function Aa(){if(!this.fragment.rendered)return b("ractive.unrender() was called on a Ractive instance that was not rendered"),Promise.resolve();this.unrendering=!0;var t=jl.start();nc.unrendering.fire(this);var e=!this.component||(this.component.anchor||{}).shouldDestroy||this.component.shouldDestroy||this.shouldDestroy;return this.fragment.unrender(e),e&&(this.destroyed=!0),P(this.el.__ractive_instances__,this),nc.unrender.fire(this),jl.end(),this.unrendering=!1,t}function Ca(t,e){var n=jl.start();return t?this.viewmodel.joinAll(A(t)).updateFromBindings(e!==!1):this.viewmodel.updateFromBindings(!0),jl.end(),n}function Oa(){for(var t=this,e=[],n=arguments.length;n--;)e[n]=arguments[n];return e.forEach(function(e){e({proto:t,Ractive:t.constructor.Ractive,instance:t});}),this}function Na(t){return t&&t instanceof this}function ja(t,e){return this._cssModel.joinAll(A(t)).get(!0,e)}function Ta(t,e){if(sm.find(function(e){return e.id===t}))throw new Error("Extra styles with the id '"+t+"' have already been added.");sm.push({id:t,css:e}),this.css||Object.defineProperty(this,"css",{configurable:!1,writable:!1,value:Va}),this._cssDef||(Object.defineProperty(this,"_cssDef",{configurable:!0,writable:!1,value:{transform:!1,id:"Ractive.addStyle"}}),Ai(this._cssDef)),Fi(this),Ci(!0);}function Va(t){return sm.map(function(e){return "\n/* ---- extra style "+e.id+" */\n"+(h(e.css)?e.css(t):e.css)}).join("")}function Pa(t){return !!sm.find(function(e){return e.id===t})}function Ma(t,e,n){var i=u(t)?e:n,r=Dl;return on(hn({viewmodel:r},t,e,!0),i)}function Ia(t,e){return Dl.joinAll(A(t)).get(!0,e)}function Ra(){for(var t=this,e=[],n=arguments.length;n--;)e[n]=arguments[n];return e.forEach(function(e){h(e)&&e({proto:t.prototype,Ractive:t.Ractive,instance:t});}),this}function Ba(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.length?t.reduce(La,this):La(this)}function Ka(t,e){return void 0===e&&(e={}),La(this,e,t)}function La(t,e,i){void 0===e&&(e={});var r,s=h(i)&&i;if(e.prototype instanceof za)throw new Error("Ractive no longer supports multiple inheritance.");if(s){if(!(s.prototype instanceof t))throw new Error("Only classes that inherit the appropriate prototype may be used with extend");if(!am.test(s.toString()))throw new Error("Only classes that call super in their constructor may be used with extend");r=s.prototype;}else s=function(t){return this instanceof s?void(t&&t.component===!0||(Fr(this,t||{}),la(this,t||{},{}))):new s(t)},r=qa(t.prototype),r.constructor=s,s.prototype=r;if(Za(s,{defaults:{value:r},extend:{value:Ba,writable:!0,configurable:!0},extendWith:{value:Ka,writable:!0,configurable:!0},extensions:{value:[]},use:{value:Ra},isInstance:{value:Na},Parent:{value:t},Ractive:{value:za},styleGet:{value:ja.bind(s),configurable:!0},styleSet:{value:Li.bind(s),configurable:!0}}),wf.extend(t,r,e,s),s._on=(t._on||[]).concat(n(e.on)),s._observe=(t._observe||[]).concat(n(e.observe)),t.extensions.push(s),e.attributes){var a;a=Qa(e.attributes)?{optional:e.attributes,required:[]}:e.attributes,Qa(a.required)||(a.required=[]),Qa(a.optional)||(a.optional=[]),s.attributes=a;}return df.extend(t,r,e,s),Ha(s,"helpers",{writable:!0,value:r.helpers}),Qa(e.use)&&s.use.apply(s,e.use),s}function Da(t,e){if(!h(t))throw new Error("The macro must be a function");return $a(t,e),Za(t,{extensions:{value:[]},_cssIds:{value:[]},cssData:{value:$a(qa(this.cssData),t.cssData||{})},styleGet:{value:ja.bind(t)},styleSet:{value:Li.bind(t)}}),Ha(t,"_cssModel",{value:new lf(t)}),t.css&&$i(t,t,t),this.extensions.push(t),t}function Fa(t,e,n){return x(e,n,t)}function za(t){return this instanceof za?void(t&&t.component||(Fr(this,t||{}),la(this,t||{},{}))):new za(t)}Object.assign||(Object.assign=function(t){for(var e=[],n=arguments.length-1;n-->0;)e[n]=arguments[n+1];if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),r=e.length,s=0;r>s;s++){var a=e[s];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(i[o]=a[o]);}return i});var Ua=Object,$a=Ua.assign,qa=Ua.create,Ha=Ua.defineProperty,Za=Ua.defineProperties,Wa=Ua.keys,Ga=Object.prototype.toString,Qa=Array.isArray;if(Array.prototype.find||Ha(Array.prototype,"find",{value:function(e,n){if(null===this||f(this))throw new TypeError("Array.prototype.find called on null or undefined");if(!h(e))throw new TypeError(e+" is not a function");for(var i=Object(this),r=i.length>>>0,s=0;r>s;s++)if(t(i,s)&&e.call(n,i[s],s,i))return i[s];return void 0},configurable:!0,writable:!0}),"undefined"!=typeof window&&window.Node&&window.Node.prototype&&!window.Node.prototype.contains&&(Node.prototype.contains=function(t){var e=this;if(!t)throw new TypeError("node required");do if(e===t)return !0;while(t=t&&t.parentNode);return !1}),"undefined"!=typeof window&&window.performance&&!window.performance.now){window.performance=window.performance||{};var Ya=Date.now();window.performance.now=function(){return Date.now()-Ya};}var Ja="undefined"!=typeof window?window:null,Xa=Ja?document:null,to=!!Xa,eo="undefined"!=typeof global?global:Ja,no="undefined"!=typeof console&&h(console.warn)&&h(console.warn.apply),io=Xa?Xa.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"):!1,ro=["o","ms","moz","webkit"];if(!eo.Promise){var so={},ao={},oo={},uo=eo.Promise=function(t){var e,n,i=[],r=[],s=so,a=function(t){return function(a){s===so&&(e=a,s=t,n=lo(s===ao?i:r,e),ho(n));}},o=a(ao),u=a(oo);try{t(o,u);}catch(l){u(l);}return {then:function(t,e){var a=new uo(function(o,u){var l=function(t,e,n){h(t)?e.push(function(e){try{co(a,t(e),o,u);}catch(n){u(n);}}):e.push(n);};l(t,i,o),l(e,r,u),s!==so&&ho(n);});return a},"catch":function(t){return this.then(null,t)},"finally":function(t){return this.then(function(e){return t(),e},function(e){throw t(),e})}}};uo.all=function(t){return new uo(function(e,n){var i,r,s=[];if(!t.length)return void e(s);var a=function(t,r){t&&h(t.then)?t.then(function(t){s[r]=t,--i||e(s);},n):(s[r]=t,--i||e(s));};for(i=r=t.length;r--;)a(t[r],r);})},uo.race=function(t){return new uo(function(e,n){function i(t){s&&(s=!1,e(t));}function r(t){s&&(s=!1,n(t));}for(var s=!0,a=0;a<t.length;a++)t[a]&&h(t[a].then)&&t[a].then(i,r);})},uo.resolve=function(t){return t&&h(t.then)?t:new uo(function(e){e(t);})},uo.reject=function(t){return t&&h(t.then)?t:new uo(function(e,n){n(t);})};var ho=function(t){setTimeout(t,0);},lo=function(t,e){return function(){for(var n=void 0;n=t.shift();)n(e);}},co=function(t,e,n,i){var r;if(e===t)throw new TypeError("A promise's fulfillment handler cannot return the same promise");if(e instanceof uo)e.then(n,i);else if(e&&(u(e)||h(e))){try{r=e.then;}catch(s){return void i(s)}if(h(r)){var a,o=function(e){a||(a=!0,co(t,e,n,i));},l=function(t){a||(a=!0,i(t));};try{r.call(e,o,l);}catch(s){if(!a)return i(s),void(a=!0)}}else n(e);}else n(e);};}if(!("undefined"==typeof window||window.requestAnimationFrame&&window.cancelAnimationFrame)){var fo=0;window.requestAnimationFrame=function(t){var e=Date.now(),n=Math.max(0,16-(e-fo)),i=window.setTimeout(function(){t(e+n);},n);return fo=e+n,i},window.cancelAnimationFrame=function(t){clearTimeout(t);};}var po,mo,vo,go={el:void 0,append:!1,delegate:!0,enhance:!1,template:null,allowExpressions:!0,delimiters:["{{","}}"],tripleDelimiters:["{{{","}}}"],staticDelimiters:["[[","]]"],staticTripleDelimiters:["[[[","]]]"],csp:!0,interpolate:!1,preserveWhitespace:!1,preserveStandaloneSections:!1,sanitize:!1,stripComments:!0,contextLines:0,data:qa(null),helpers:qa(null),computed:qa(null),syncComputedChildren:!1,resolveInstanceMembers:!1,warnAboutAmbiguity:!1,adapt:[],isolated:!0,twoway:!0,lazy:!1,noIntro:!1,noOutro:!1,transitionsEnabled:!0,complete:void 0,nestedTransitions:!0,css:null,noCSSTransform:!1},yo={linear:function(t){return t},easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return (t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}},bo={};if(no){var wo=["%cRactive.js %c1.4.0 %cin debug mode, %cmore...","color: rgb(114, 157, 52); font-weight: normal;","color: rgb(85, 85, 85); font-weight: normal;","color: rgb(85, 85, 85); font-weight: normal;","color: rgb(82, 140, 224); font-weight: normal; text-decoration: underline;"],xo="You're running Ractive 1.4.0 in debug mode - messages will be printed to the console to help you fix problems and optimise your application.\n\nTo disable debug mode, add this line at the start of your app:\n  Ractive.DEBUG = false;\n\nTo disable debug mode when your app is minified, add this snippet:\n  Ractive.DEBUG = /unminified/.test(function(){/*unminified*/});\n\nGet help and support:\n  http://ractive.js.org\n  http://stackoverflow.com/questions/tagged/ractivejs\n  http://groups.google.com/forum/#!forum/ractive-js\n  http://twitter.com/ractivejs\n\nFound a bug? Raise an issue:\n  https://github.com/ractivejs/ractive/issues\n\n";
	vo=function(){if(za.WELCOME_MESSAGE===!1)return void(vo=d);var t="WELCOME_MESSAGE"in za?za.WELCOME_MESSAGE:xo,e=!!console.groupCollapsed;e&&console.groupCollapsed.apply(console,wo),console.log(t),e&&console.groupEnd(wo),vo=d;},mo=function(t,e){if(vo(),u(e[e.length-1])){var n=e.pop(),i=n?n.ractive:null;if(i){var r;i.component&&(r=i.component.name)&&(t="<"+r+"> "+t);var s;(s=n.node||i.fragment&&i.fragment.rendered&&i.find("*"))&&e.push(s);}}console.warn.apply(console,["%cRactive.js: %c"+t,"color: rgb(114, 157, 52);","color: rgb(85, 85, 85);"].concat(e));},po=function(){console.log.apply(console,arguments);};}else mo=po=vo=d;var ko="Bad arguments",_o='A function was specified for "%s" %s, but no %s was returned',Eo=function(t,e){return 'Missing "'+t+'" '+e+" plugin. You may need to download a plugin via http://ractive.js.org/integrations/#"+e+"s"},So={number:function(t,e){if(!r(t)||!r(e))return null;t=+t,e=+e;var n=e-t;return n?function(e){return t+e*n}:function(){return t}},array:function(t,e){var n,i;if(!Qa(t)||!Qa(e))return null;var r=[],s=[];for(i=n=Math.min(t.length,e.length);i--;)s[i]=_(t[i],e[i]);for(i=n;i<t.length;i+=1)r[i]=t[i];for(i=n;i<e.length;i+=1)r[i]=e[i];return function(t){for(var e=n;e--;)r[e]=s[e](t);return r}},object:function(e,n){if(!s(e)||!s(n))return null;var i=[],r={},a={},o=function(s){t(e,s)&&(t(n,s)?(i.push(s),a[s]=_(e[s],n[s])||function(){return n[s]}):r[s]=e[s]);};for(var u in e)o(u);for(var h in n)t(n,h)&&!t(e,h)&&(r[h]=n[h]);var l=i.length;return function(t){for(var e=l;e--;){var n=i[e];r[n]=a[n](t);}return r}}},Ao=/\[\s*(\*|[0-9]|[1-9][0-9]+)\s*\]/g,Co=/([^\\](?:\\\\)*)\./,Oo=/\\|\./g,No=/((?:\\)+)\1|\\(\.)/g,jo=Function.prototype.bind,To={early:[],mark:[]},Vo={early:[],mark:[]},Po={virtual:!1},Mo=function(t){this.deps=[],this.children=[],this.childByKey={},this.links=[],this.bindings=[],t&&(this.parent=t,this.root=t.root);},Io=Mo.prototype;Io.addShuffleTask=function(t,e){void 0===e&&(e="early"),To[e].push(t);},Io.addShuffleRegister=function(t,e){void 0===e&&(e="early"),Vo[e].push({model:this,item:t});},Io.downstreamChanged=function(){},Io.findMatches=function(t){var e,n,i=t.length,r=[this],s=function(){var i=t[n];"*"===i?(e=[],r.forEach(function(t){e.push.apply(e,t.getValueChildren(t.get()));})):e=r.map(function(t){return t.joinKey(i)}),r=e;};for(n=0;i>n;n+=1)s();return e},Io.getKeypath=function(t){if(t!==this.ractive&&this._link)return this._link.target.getKeypath(t);if(!this.keypath){var e=this.parent&&this.parent.getKeypath(t);this.keypath=e?this.parent.getKeypath(t)+"."+E(this.key):E(this.key);}return this.keypath},Io.getValueChildren=function(t){var e,n=this;Qa(t)?(e=[],"length"in this&&this.length!==t.length&&e.push(this.joinKey("length")),t.forEach(function(t,i){e.push(n.joinKey(i));})):s(t)||h(t)?e=Wa(t).map(function(t){return n.joinKey(E(t))}):null!=t&&(e=[]);var i=this.computed;return i&&e.push.apply(e,Wa(i).map(function(t){return n.joinKey(t)})),e},Io.getVirtual=function(t){var e=this,n=this.get(t,{virtual:!1});if(a(n)){for(var i=Qa(n)?[]:qa(null),r=Wa(n),s=r.length;s--;){var o=e.childByKey[r[s]];o?o._link?i[r[s]]=o._link.getVirtual():i[r[s]]=o.getVirtual():i[r[s]]=n[r[s]];}for(s=this.children.length;s--;){var u=e.children[s];u.key in i||!u._link||(i[u.key]=u._link.getVirtual());}if(this.computed)for(r=Wa(this.computed),s=r.length;s--;)i[r[s]]=e.computed[r[s]].get();return i}return n},Io.has=function(t){var e=this;if(this._link)return this._link.has(t);var n=this.get(!1,Po);if(!n)return !1;if(t=C(t),(h(n)||s(n))&&t in n)return !0;var i=this.computed;return i&&t in this.computed?!0:(i=this.root.ractive&&this.root.ractive.computed,i&&Wa(i).forEach(function(t){return i[t].pattern&&i[t].pattern.test(e.getKeypath())?!0:void 0}),!1)},Io.joinAll=function(t,e){for(var n=this,i=0;i<t.length;i+=1){if(e&&e.lastLink===!1&&i+1===t.length&&n.childByKey[t[i]]&&n.childByKey[t[i]]._link)return n.childByKey[t[i]];n=n.joinKey(t[i],e);}return n},Io.notifyUpstream=function(t){for(var e=this,n=this.parent,i=t||[this.key];n;)n.patterns&&n.patterns.forEach(function(t){return t.notify(i.slice())}),i.unshift(n.key),n.links.forEach(function(t){return t.notifiedUpstream(i,e.root)}),n.deps.forEach(function(t){return t.handleChange(i)}),n.downstreamChanged(t),n=n.parent;},Io.rebind=function(t,e,n){var i=this;if(this._link&&this._link.rebind(t,e,!1),t!==this){for(var r=this.deps.length;r--;)i.deps[r].rebind&&i.deps[r].rebind(t,e,n);for(r=this.links.length;r--;){var s=i.links[r];s.owner&&s.owner._link&&s.relinking(t,n);}for(r=this.children.length;r--;){var a=i.children[r];a.rebind(t?t.joinKey(a.key):void 0,a._link||a,n),i.dataModel&&i.addShuffleTask(function(){return $(i,i.retrieve())},"early");}for(r=this.bindings.length;r--;)i.bindings[r].rebind(t,e,n);}},Io.reference=function(){"refs"in this?this.refs++:this.refs=1;},Io.register=function(t){this.deps.push(t);},Io.registerLink=function(t){O(this.links,t);},Io.registerPatternObserver=function(t){(this.patterns||(this.patterns=[])).push(t),this.register(t);},Io.registerTwowayBinding=function(t){this.bindings.push(t);},Io.unreference=function(){"refs"in this&&this.refs--;},Io.unregister=function(t){P(this.deps,t);},Io.unregisterLink=function(t){P(this.links,t);},Io.unregisterPatternObserver=function(t){P(this.patterns,t),this.unregister(t);},Io.unregisterTwowayBinding=function(t){P(this.bindings,t);},Io.updateFromBindings=function(t){for(var e=this,n=this.bindings.length;n--;){var i=e.bindings[n].getValue();i!==e.value&&e.set(i);}if(!this.bindings.length){var r=F(this.deps);r&&r.value!==this.value&&this.set(r.value);}t&&(this.children.forEach(D),this.links.forEach(D),this._link&&this._link.updateFromBindings(t));};var Ro,Bo=[],Ko={key:"@missing",animate:d,applyValue:d,get:d,getKeypath:function(){return this.key},joinAll:function(){return this},joinKey:function(){return this},mark:d,registerLink:d,shufle:d,set:d,unregisterLink:d};Ko.parent=Ko;var Lo=function(e){function n(t,n,i,r){e.call(this,t),this.owner=n,this.target=i,this.key=f(r)?n.key:r,n&&n.isLink&&(this.sourcePath=n.sourcePath+"."+this.key),i&&i.registerLink(this),t&&(this.isReadonly=t.isReadonly),this.isLink=!0;}e&&(n.__proto__=e);var i=n.prototype=Object.create(e&&e.prototype);return i.constructor=n,i.animate=function(t,e,n,i){return this.target.animate(t,e,n,i)},i.applyValue=function(t){this.boundValue&&(this.boundValue=null),this.target.applyValue(t);},i.attach=function(t){var e=Je(t,this.key);e?this.relinking(e,!1):this.owner.unlink();},i.detach=function(){this.relinking(Ko,!1);},i.get=function(t,e){void 0===e&&(e={}),t&&(Z(this),e.unwrap="unwrap"in e?e.unwrap:!0);var n="shouldBind"in e?e.shouldBind:!0;return e.shouldBind=this.mapping&&this.target.parent&&this.target.parent.isRoot,L(this,this.target.get(!1,e),n)},i.getKeypath=function(t){return t&&t!==this.root.ractive?this.target.getKeypath(t):e.prototype.getKeypath.call(this,t)},i.handleChange=function(){this.deps.forEach(Y),this.links.forEach(Y),this.notifyUpstream();},i.isDetached=function(){return this.virtual&&this.target===Ko},i.joinKey=function(e){if(f(e)||""===e)return this;if(!t(this.childByKey,e)){var i=new n(this,this,this.target.joinKey(e),e);this.children.push(i),this.childByKey[e]=i;}return this.childByKey[e]},i.mark=function(t){this.target.mark(t);},i.marked=function(){this.boundValue&&(this.boundValue=null),this.links.forEach(tt),this.deps.forEach(Y);},i.markedAll=function(){this.children.forEach(et),this.marked();},i.notifiedUpstream=function(t,e){var n=this;if(this.links.forEach(function(e){return e.notifiedUpstream(t,n.root)}),this.deps.forEach(Y),t&&this.rootLink){var i=this.parent;if(this.root!==e){var r=t.slice(1);r.unshift(this.key),this.notifyUpstream(r);}else if(i&&i!==this.target){var s=[i.key,this.key];i.links.forEach(function(t){return t.notifiedUpstream(s,i.root)}),i.deps.forEach(function(t){return t.handleChange(s)}),i.notifyUpstream(s);}}},i.relinked=function(){this.target.registerLink(this),this.children.forEach(function(t){return t.relinked()});},i.relinking=function(t,e){var n=this;this.rootLink&&this.sourcePath&&(t=lt(this.sourcePath,t,this.target)),t&&this.target!==t&&(this.target&&this.target.unregisterLink(this),this.target=t,this.children.forEach(function(n){n.relinking(t.joinKey(n.key),e);}),e||(this.keypath=void 0),this.rootLink&&this.addShuffleTask(function(){n.relinked(),e||(n.markedAll(),n.notifyUpstream());}));},i.set=function(t){this.boundValue&&(this.boundValue=null),this.target.set(t);},i.shuffle=function(t){this.shuffling||(this.target.shuffling?U(this,t,!0):this.target.shuffle?this.target.shuffle(t):this.target.mark());},i.source=function(){return this.target.source?this.target.source():this.target},i.teardown=function(){this._link&&this._link.teardown(),this.target.unregisterLink(this),this.children.forEach(rt);},n}(Mo);Mo.prototype.link=function(t,e,n){var i=this._link||new Lo(this.parent,this,t,this.key);return i.implicit=n&&n.implicit,i.mapping=n&&n.mapping,i.sourcePath=e,i.rootLink=!0,this._link&&this._link.relinking(t,!1),this._link=i,this.rebind(i,this,!1),z(),i.markedAll(),this.notifyUpstream(),i},Mo.prototype.unlink=function(){if(this._link){var t=this._link;this._link=void 0,t.rebind(this,t,!1),z(),t.teardown(),this.notifyUpstream();}};var Do=qa(null),Fo=4,zo=/^\s+/,Uo=function(t){this.name="ParseError",this.message=t;try{throw new Error(t)}catch(e){this.stack=e.stack;}};Uo.prototype=Error.prototype;var $o=function(t,e){var n,i=0;this.str=t,this.options=e||{},this.pos=0,this.lines=this.str.split("\n"),this.lineEnds=this.lines.map(function(t){var e=i+t.length+1;return i=e,e},0),this.init&&this.init(t,e);for(var r=[];this.pos<this.str.length&&(n=this.read());)r.push(n);this.leftover=this.remaining(),this.result=this.postProcess?this.postProcess(r,e):r;};$o.prototype={read:function(t){var e,n,i=this;t||(t=this.converters);var r=this.pos,s=t.length;for(e=0;s>e;e+=1)if(i.pos=r,n=t[e](i))return n;return null},getContextMessage:function(t,e){var n=this.getLinePos(t),i=n[0],r=n[1];if(-1===this.options.contextLines)return [i,r,e+" at line "+i+" character "+r];var s=this.lines[i-1],a="",o="";if(this.options.contextLines){var u=i-1-this.options.contextLines<0?0:i-1-this.options.contextLines;a=this.lines.slice(u,i-1-u).join("\n").replace(/\t/g,"  "),o=this.lines.slice(i,i+this.options.contextLines).join("\n").replace(/\t/g,"  "),a&&(a+="\n"),o&&(o="\n"+o);}var h=0,l=a+s.replace(/\t/g,function(t,e){return r>e&&(h+=1),"  "})+"\n"+new Array(r+h).join(" ")+"^----"+o;return [i,r,e+" at line "+i+" character "+r+":\n"+l]},getLinePos:function(t){for(var e=this,n=0,i=0;t>=this.lineEnds[n];)i=e.lineEnds[n],n+=1;var r=t-i;return [n+1,r+1,t]},error:function hm(t){var e=this.getContextMessage(this.pos,t),n=e[0],i=e[1],r=e[2],hm=new Uo(r);throw hm.line=n,hm.character=i,hm.shortMessage=t,hm},matchString:function(t){return this.str.substr(this.pos,t.length)===t?(this.pos+=t.length,t):void 0},matchPattern:function(t){var e;return (e=t.exec(this.remaining()))?(this.pos+=e[0].length,e[1]||e[0]):void 0},sp:function(){this.matchPattern(zo);},remaining:function(){return this.str.substring(this.pos)},nextChar:function(){return this.str.charAt(this.pos)},warn:function(t){var e=this.getContextMessage(this.pos,t)[2];b(e);}},$o.extend=function(e){var n=this,i=function(t,e){$o.call(this,t,e);};i.prototype=qa(n.prototype);for(var r in e)t(e,r)&&(i.prototype[r]=e[r]);return i.extend=$o.extend,i};var qo,Ho=1,Zo=2,Wo=3,Go=4,Qo=5,Yo=6,Jo=7,Xo=8,tu=9,eu=10,nu=11,iu=13,ru=14,su=15,au=16,ou=17,uu=18,hu=19,lu=55,cu=20,fu=21,du=22,pu=23,mu=24,vu=25,gu=26,yu=27,bu=30,wu=31,xu=32,ku=33,_u=34,Eu=35,Su=36,Au=40,Cu=50,Ou=51,Nu=52,ju=53,Tu=54,Vu=60,Pu=61,Mu=62,Iu=63,Ru=70,Bu=71,Ku=72,Lu=73,Du=74,Fu=/^[^\s=]+/,zu=/^\s+/,Uu=/^(\/(?:[^\n\r\u2028\u2029/\\[]|\\.|\[(?:[^\n\r\u2028\u2029\]\\]|\\.)*])+\/(?:([gimuy])(?![a-z]*\2))*(?![a-zA-Z_$0-9]))/,$u=/[-/\\^$*+?.()|[\]{}]/g,qu={},Hu={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,compact:1,controls:1,declare:1,"default":1,defaultchecked:1,defaultmuted:1,defaultselected:1,defer:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,indeterminate:1,inert:1,ismap:1,itemscope:1,loop:1,multiple:1,muted:1,nohref:1,noresize:1,noshade:1,novalidate:1,nowrap:1,open:1,pauseonexit:1,readonly:1,required:1,reversed:1,scoped:1,seamless:1,selected:1,sortable:1,translate:1,truespeed:1,typemustmatch:1,visible:1},Zu={area:1,base:1,br:1,col:1,command:1,doctype:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1},Wu={quot:34,amp:38,apos:39,lt:60,gt:62,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,copy:169,ordf:170,laquo:171,not:172,shy:173,reg:174,macr:175,deg:176,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,"int":8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Gu=[8364,129,8218,402,8222,8230,8224,8225,710,8240,352,8249,338,141,381,143,144,8216,8217,8220,8221,8226,8211,8212,732,8482,353,8250,339,157,382,376],Qu=new RegExp("&(#?(?:x[\\w\\d]+|\\d+|"+Wa(Wu).join("|")+"));?","g"),Yu=h(String.fromCodePoint),Ju=Yu?String.fromCodePoint:String.fromCharCode,Xu=/</g,th=/>/g,eh=/&/g,nh=65533,ih="Expected a JavaScript expression",rh="Expected closing paren",sh=/^(?:[+-]?)0*(?:(?:(?:[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/,ah=/^(?=.)[^"'\\]+?(?:(?!.)|(?=["'\\]))/,oh=/^\\(?:[`'"\\bfnrt]|0(?![0-9])|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|(?=.)[^ux0-9])/,uh=/^\\(?:\r\n|[\u000A\u000D\u2028\u2029])/,hh=Et('"'),lh=Et("'"),ch=/^[^`"\\\$]+?(?:(?=[`"\\\$]))/,fh=/[\r\n\t\b\f]/g,dh=/^[a-zA-Z_$][a-zA-Z_$0-9]*/,ph=/^\s*\.{3}/,mh=/^(?:[a-zA-Z$_0-9]|\\\.)+(?:(?:\.(?:[a-zA-Z$_0-9]|\\\.)+)|(?:\[[0-9]+\]))*/,vh=/^[a-zA-Z_$][-\/a-zA-Z_$0-9]*(?:\.(?:[a-zA-Z_$][-\/a-zA-Z_$0-9]*))*/,gh=/^[a-zA-Z_$][a-zA-Z_$0-9]*$/,yh=/^(?:Array|console|Date|RegExp|decodeURIComponent|decodeURI|encodeURIComponent|encodeURI|isFinite|isNaN|parseFloat|parseInt|JSON|Math|NaN|undefined|null|Object|Number|String|Boolean)\b/,bh=/^(?:break|case|catch|continue|debugger|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|throw|try|typeof|var|void|while|with)$/,wh=/^(?:\@\.|\@|~\/|(?:\^\^\/(?:\^\^\/)*(?:\.\.\/)*)|(?:\.\.\/)+|\.\/(?:\.\.\/)*|\.)/,xh=/^(key|index|keypath|rootpath|this|global|shared|context|event|node|local|style|helpers|last|macro)/,kh=function(t,e){return function(n){var i;return (i=e(n))?i:n.matchString(t)?(n.sp(),i=Ft(n),i||n.error(ih),{s:t,o:i,t:ku}):null}};!function(){var t,e,n,i,r="! ~ + - typeof".split(" ");for(i=Lt,t=0,e=r.length;e>t;t+=1)n=kh(r[t],i),i=n;qo=i;}();var _h,Eh=qo,Sh=function(t,e){return function(n){if(n.inUnquotedAttribute&&(">"===t||"/"===t))return e(n);var i,r,s;if(r=e(n),!r)return null;for(;;){if(i=n.pos,n.sp(),!n.matchString(t))return n.pos=i,r;if("in"===t&&/[a-zA-Z_$0-9]/.test(n.remaining().charAt(0)))return n.pos=i,r;if(n.sp(),s=e(n),!s)return n.pos=i,r;r={t:Su,s:t,o:[r,s]};}}};!function(){var t,e,n,i,r="* / % + - << >> >>> < <= > >= in instanceof == != === !== & ^ | && ||".split(" ");for(i=Eh,t=0,e=r.length;e>t;t+=1)n=Sh(r[t],i),i=n;_h=i;}();var Ah=_h,Ch=/^[^\s"'>\/=(]+/,Oh=/^on/,Nh=/^on-([a-zA-Z\*\.$_]((?:[a-zA-Z\*\.$_0-9\-]|\\-)+))$/,jh=/^(?:change|reset|teardown|update|construct|config|init|render|complete|unrender|detach|insert|destruct|attachchild|detachchild)$/,Th=/^as-([a-z-A-Z][-a-zA-Z_0-9]*)$/,Vh=/^([a-zA-Z](?:(?!-in-out)[-a-zA-Z_0-9])*)-(in|out|in-out)$/,Ph=/^((bind|class)-(([-a-zA-Z0-9_])+))$/,Mh={lazy:{t:Lu,v:"l"},twoway:{t:Lu,v:"t"},"no-delegation":{t:Du}},Ih=/^[^\s"'=<>\/`]+/,Rh=/^[^\s"'=<>@\[\]()]*/,Bh=/^\s+/,Kh=/\\/g,Lh={t:eu,exclude:!0},Dh=/^(?:[a-zA-Z$_0-9]|\\\.)+(?:(?:(?:[a-zA-Z$_0-9]|\\\.)+)|(?:\[[0-9]+\]))*/,Fh=/^as/i,zh={"else":/^\s*else\s*/,elseif:/^\s*elseif\s+/,then:/^\s*then\s*/,"catch":/^\s*catch\s*/},Uh={"else":Vu,elseif:Pu,then:Mu,"catch":Iu},$h={each:Nu,"if":Cu,"with":Tu,unless:Ou},qh=/^\s*:\s*([a-zA-Z_$][a-zA-Z_$0-9]*)/,Hh=/^\s*,\s*([a-zA-Z_$][a-zA-Z_$0-9]*)/,Zh=new RegExp("^("+Wa($h).join("|")+")\\b"),Wh="<!--",Gh="-->",Qh=/^[ \t\f\r\n]*\r?\n/,Yh=/\r?\n[ \t\f\r\n]*$/,Jh=/[ \t\f\r\n]+/g,Xh=/^[ \t\f\r\n]+/,tl=/[ \t\f\r\n]+$/,el=/^(?:\r\n|\r|\n)/,nl=/(?:\r\n|\r|\n)$/,il=/(\n)?[ \t]*$/,rl=/[ \t]*\n/,sl=/^([a-zA-Z]{1,}:?[a-zA-Z0-9\-]*)\s*\>/,al=/^[a-zA-Z]{1,}:?[a-zA-Z0-9\-]*/,ol=/^[a-zA-Z_$][-a-zA-Z0-9_$]*/,ul=/^[\s\n\/>]/,hl=/;\s*$/,ll={exclude:!0},cl={li:["li"],dt:["dt","dd"],dd:["dt","dd"],p:"address article aside blockquote div dl fieldset footer form h1 h2 h3 h4 h5 h6 header hgroup hr main menu nav ol p pre section table ul".split(" "),rt:["rt","rp"],rp:["rt","rp"],optgroup:["optgroup"],option:["option","optgroup"],thead:["tbody","tfoot"],tbody:["tbody","tfoot"],tfoot:["tbody"],tr:["tr","tbody"],td:["td","th","tr"],th:["td","th","tr"]},fl=/^\s*(elseif|else|then|catch)\s*/,dl=/^\s*#\s*partial\s+/,pl={},ml=[ce,ue,ve,de,fe],vl=[oe],gl=[se,ge,Se,Ne],yl=[je],bl={pre:1,script:1,style:1,textarea:1},wl={textarea:!0,script:!0,style:!0,template:!0},xl=$o.extend({init:function(t,e){var n=e.tripleDelimiters||pl.defaults.tripleDelimiters,i=e.staticDelimiters||pl.defaults.staticDelimiters,r=e.staticTripleDelimiters||pl.defaults.staticTripleDelimiters;this.standardDelimiters=e.delimiters||pl.defaults.delimiters,this.tags=[{isStatic:!1,isTriple:!1,open:this.standardDelimiters[0],close:this.standardDelimiters[1],readers:ml},{isStatic:!1,isTriple:!0,open:n[0],close:n[1],readers:vl},{isStatic:!0,isTriple:!1,open:i[0],close:i[1],readers:ml},{isStatic:!0,isTriple:!0,open:r[0],close:r[1],readers:vl}],this.contextLines=e.contextLines||pl.defaults.contextLines,this.sortMustacheTags(),this.sectionDepth=0,this.elementStack=[],this.interpolate=$a({},wl,pl.defaults.interpolate,e.interpolate),e.sanitize===!0&&(e.sanitize={elements:"applet base basefont body frame frameset head html isindex link meta noframes noscript object param script style title".split(" "),eventAttributes:!0}),this.stripComments=e.stripComments!==!1,this.preserveWhitespace=u(e.preserveWhitespace)?!1:e.preserveWhitespace,this.sanitizeElements=e.sanitize&&e.sanitize.elements,this.sanitizeEventAttributes=e.sanitize&&e.sanitize.eventAttributes,this.includeLinePositions=e.includeLinePositions,this.textOnlyMode=e.textOnlyMode,this.csp=e.csp,this.allowExpressions=e.allowExpressions,this.preserveStandaloneSections=this.preserveWhitespace&&e.preserveStandaloneSections,e.expression&&(this.converters=[Ft]),e.attributes&&(this.inTag=!0),this.whiteSpaceElements=$a({},e.preserveWhitespace,bl);},postProcess:function(t,e){var n=t[0];if(e.expression){var i=$t(n);return i.e=ft(i.s,i.r.length),i}if(!t.length)return {t:[],v:Fo};if(this.sectionDepth>0&&this.error("A section was left open"),ke(n.t,this.stripComments,this.preserveWhitespace,!this.preserveWhitespace,!this.preserveWhitespace,this.whiteSpaceElements,this.preserveStandaloneSections),this.csp!==!1){var r={};Ve(n.t,r),Ve(n.p||{},r),Wa(r).length&&(n.e=r);}return n},converters:[Te],sortMustacheTags:function(){this.tags.sort(function(t,e){return e.open.length-t.open.length});}}),kl=["delimiters","tripleDelimiters","staticDelimiters","staticTripleDelimiters","csp","interpolate","preserveWhitespace","preserveStandaloneSections","sanitize","stripComments","contextLines","allowExpressions","attributes"],_l="Either preparse or use a ractive runtime source that includes the parser. ",El="Either include a version of Ractive that can parse or convert your computation strings to functions.",Sl={fromId:function(t,e){if(!Xa){if(e&&e.noThrow)return;throw new Error("Cannot retrieve template #"+t+" as Ractive is not running in a browser.")}t&&(t=t.replace(/^#/,""));var n;if(!(n=Xa.getElementById(t))){if(e&&e.noThrow)return;throw new Error("Could not find template element with id #"+t)}if("SCRIPT"!==n.tagName.toUpperCase()){if(e&&e.noThrow)return;throw new Error("Template element with id #"+t+", must be a <script> element")}return "textContent"in n?n.textContent:n.innerHTML},isParsed:function(t){return !l(t)},getParseOptions:function(t){return t.defaults&&(t=t.defaults),kl.reduce(function(e,n){return e[n]=t[n],e},{})},parse:function(t,e){Be(Re,"template",_l);var n=Re(t,e);return pt(n),n},parseFor:function(t,e){return this.parse(t,this.getParseOptions(e))}},Al=0,Cl=function(t,e){this.callback=t,this.parent=e,this.intros=[],this.outros=[],this.children=[],this.totalChildren=this.outroChildren=0,this.detachQueue=[],this.outrosComplete=!1,this.id=Al++,e&&e.addChild(this);},Ol=Cl.prototype;Ol.add=function(t){var e=t.isIntro?this.intros:this.outros;t.starting=!0,e.push(t);},Ol.addChild=function(t){this.children.push(t),this.totalChildren+=1,this.outroChildren+=1;},Ol.checkStart=function(){this.parent&&this.parent.started&&this.start();},Ol.decrementOutros=function(){this.outroChildren-=1,Fe(this);},Ol.decrementTotal=function(){this.totalChildren-=1,Fe(this);},Ol.detachNodes=function(){for(var t=this,e=this.detachQueue.length,n=0;e>n;n++)t.detachQueue[n].detach();e=this.children.length;for(var i=0;e>i;i++)t.children[i].detachNodes();this.detachQueue=[];},Ol.ready=function(){this.detachQueue.length&&Ue(this);},Ol.remove=function(t){var e=t.isIntro?this.intros:this.outros;P(e,t),Fe(this);},Ol.start=function(){this.started=!0,this.children.forEach(function(t){return t.start()}),this.intros.concat(this.outros).forEach(function(t){return t.start()}),Fe(this);};var Nl,jl={active:function(){return !!Nl},start:function(){var t,e=new Promise(function(e){return t=e});return Nl={previousBatch:Nl,transitionManager:new Cl(t,Nl&&Nl.transitionManager),fragments:[],tasks:[],immediateObservers:[],deferredObservers:[],promise:e},e},end:function(){He(),Nl.previousBatch?Nl.transitionManager.checkStart():Nl.transitionManager.start(),Nl=Nl.previousBatch;},addFragment:function(t){O(Nl.fragments,t);},addFragmentToRoot:function(t){if(Nl){for(var e=Nl;e.previousBatch;)e=e.previousBatch;O(e.fragments,t);}},addObserver:function(t,e){Nl?O(e?Nl.deferredObservers:Nl.immediateObservers,t):t.dispatch();},registerTransition:function(t){t._manager=Nl.transitionManager,Nl.transitionManager.add(t);},detachWhenReady:function(t){Nl.transitionManager.detachQueue.push(t);},scheduleTask:function(t,e){var n;if(Nl){for(n=Nl;e&&n.previousBatch;)n=n.previousBatch;n.tasks.push(t);}else t();},promise:function(){if(!Nl)return Promise.resolve();for(var t=Nl;t.previousBatch;)t=t.previousBatch;return t.promise||Promise.resolve()}},Tl=[],Vl=!1,Pl=function(t){this.duration=t.duration,this.step=t.step,this.complete=t.complete,this.easing=t.easing,this.start=performance.now(),this.end=this.start+this.duration,this.running=!0,Tl.push(this),Vl||requestAnimationFrame(Ze);},Ml=Pl.prototype;Ml.tick=function(t){if(!this.running)return !1;if(t>this.end)return this.step&&this.step(1),this.complete&&this.complete(1),!1;var e=t-this.start,n=this.easing(e/this.duration);return this.step&&this.step(n),!0},Ml.stop=function(){this.abort&&this.abort(),this.running=!1;};var Il={},Rl={},Bl=function(e){function n(t,n){e.call(this,t),this.ticker=null,t&&(this.key=C(n),this.isReadonly=t.isReadonly,t.value&&(this.value=t.value[this.key],Qa(this.value)&&(this.length=this.value.length),this.adapt()));}e&&(n.__proto__=e);var s=n.prototype=Object.create(e&&e.prototype);return s.constructor=n,s.adapt=function(){var t=this,e=this.root.adaptors,n=e.length;if(this.rewrap=!1,0!==n){var i=this.wrapper?"newWrapperValue"in this?this.newWrapperValue:this.wrapperValue:this.value,r=this.root.ractive,s=this.getKeypath();if(this.wrapper){var a=this.wrapperValue===i?!1:!this.wrapper.reset||this.wrapper.reset(i)===!1;if(!a)return delete this.newWrapperValue,void(this.value=this.wrapper.get());if(this.wrapper.teardown(),delete this.wrapper,delete this.wrapperValue,delete this.newWrapperValue,void 0!==this.value){var o=this.parent.value||this.parent.createBranch(this.key);o[this.key]!==i&&(o[this.key]=i),this.value=i;}}var u;for(u=0;n>u;u+=1){var h=e[u];if(h.filter(i,s,r)){t.wrapper=h.wrap(r,i,s,Ge(s)),t.wrapperValue=i,t.wrapper.__model=t,t.value=t.wrapper.get();break}}}},s.animate=function(t,e,n,i){var r=this;this.ticker&&this.ticker.stop();var s,a=new Promise(function(t){return s=t});return this.ticker=new Pl({duration:n.duration,easing:n.easing,step:function(t){var e=i(t);r.applyValue(e),n.step&&n.step(t,e);},complete:function(){r.applyValue(e),n.complete&&n.complete(e),r.ticker=null,s(e);}}),a.stop=this.ticker.stop,a},s.applyValue=function(t,e){if(void 0===e&&(e=!0),!i(t,this.value)){if(this.boundValue&&(this.boundValue=null),this.parent.wrapper&&this.parent.wrapper.set)this.parent.wrapper.set(this.key,t),this.parent.value=this.parent.wrapper.get(),this.value=this.parent.value[this.key],this.wrapper&&(this.newWrapperValue=this.value),this.adapt();else if(this.wrapper)this.newWrapperValue=t,this.adapt();else {var n=this.parent.value||this.parent.createBranch(this.key);if(!a(n))return void b("Attempted to set a property of a non-object '"+this.getKeypath()+"'");n[this.key]=t,this.value=t,this.adapt();}(this.dataModel||t&&t.viewmodel&&t.viewmodel.isRoot)&&$(this,t),Qa(t)?(this.length=t.length,this.isArray=!0):this.isArray=!1,this.links.forEach(Y),this.children.forEach(J),this.deps.forEach(Y),e&&this.notifyUpstream(),this.parent.isArray&&("length"===this.key?this.parent.length=t:this.parent.joinKey("length").mark());}},s.compute=function(t,e){var n=this.computed||(this.computed={});return n[t]?(n[t].signature=De(this.root.ractive,t,e),n[t].mark()):n[t]=new Rl.Computation(this,De(this.root.ractive,t,e),t),n[t]},s.createBranch=function(t){var e=r(t)?[]:{};return this.applyValue(e,!1),e},s.get=function(t,e){return this._link?this._link.get(t,e):(t&&Z(this),e&&e.virtual?this.getVirtual(!1):L(this,(e&&"unwrap"in e?e.unwrap!==!1:t)&&this.wrapper?this.wrapperValue:this.value,!e||e.shouldBind!==!1))},s.joinKey=function(e,i){var r=this;if(this._link)return i&&i.lastLink!==!1&&(f(e)||""===e)?this:this._link.joinKey(e);if(f(e)||""===e)return this;var s;if(s=t(this.childByKey,e)?this.childByKey[e]:this.computed&&this.computed[e],!s){var a;if(this.isRoot&&this.ractive&&(a=this.ractive.computed[e]))s=this.compute(e,a);else if(!this.isRoot&&this.root.ractive){var o=this.root.ractive.computed;for(var u in o)a=o[u],a.pattern&&a.pattern.test(r.getKeypath()+"."+e)&&(s=r.compute(e,a));}}if(!s&&(s=new n(this,e),this.children.push(s),this.childByKey[e]=s,"data"===e)){var h=this.retrieve();h&&h.viewmodel&&h.viewmodel.isRoot&&(s.link(h.viewmodel,"data"),this.dataModel=h);}return !s._link||i&&i.lastLink===!1?s:s._link},s.mark=function(t){if(this._link)return this._link.mark(t);var e=this.value,n=this.retrieve();(this.dataModel||n&&n.viewmodel&&n.viewmodel.isRoot)&&$(this,n),(t||!i(n,e))&&(this.value=n,this.boundValue&&(this.boundValue=null),(e!==n||this.rewrap)&&(this.wrapper&&(this.newWrapperValue=n),this.adapt()),Qa(n)?(this.length=n.length,this.isArray=!0):this.isArray=!1,this.children.forEach(t?X:J),this.links.forEach(tt),this.deps.forEach(Y));},s.merge=function(t,e){var n=B(this.value===t?Qe(this):this.value,t,e);this.parent.value[this.key]=t,this.shuffle(n,!0);},s.retrieve=function(){return this.parent.value?this.parent.value[this.key]:void 0},s.set=function(t){this.ticker&&this.ticker.stop(),this.applyValue(t);},s.shuffle=function(t,e){U(this,t,!1,e);},s.source=function(){return this},s.teardown=function(){var t=this;this._link&&(this._link.teardown(),this._link=null),this.children.forEach(rt),this.wrapper&&this.wrapper.teardown(),this.computed&&Wa(this.computed).forEach(function(e){return t.computed[e].teardown()});},n}(Mo),Kl={},Ll=function(t){function e(e,n,i){t.call(this,null,"@"+n),this.key="@"+n,this.value=e,this.isRoot=!0,this.root=this,this.adaptors=[],this.ractive=i;}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getKeypath=function(){return this.key},n.retrieve=function(){return this.value},e}(Bl),Dl=new Ll(Kl,"shared"),Fl=new Ll(eo,"global"),zl={},Ul=function(t){this.ractive=t;};Ul.prototype.findContext=function(){return this.ractive.viewmodel};var $l=Ul.prototype;$l.getContext=sn,$l.find=$l.findComponent=$l.findAll=$l.findAllComponents=d;var ql=!1,Hl=/\*/,Zl={virtual:!1},Wl={},Gl="Cannot add to a non-numeric value",Ql=yo.linear,Yl={},Jl={},Xl=function(t){this.event=t,this.method="on"+t;};Xl.prototype.fire=function(t,e){var n=rn(t),i=this.method;t[i]&&(e?t[i](n,e):t[i](n)),xn(t,this.event,n,e?[e,t]:[t]);};var tc=function(t){this.hook=new Xl(t),this.inProcess={},this.queue={};},ec=tc.prototype;ec.begin=function(t){this.inProcess[t._guid]=!0;},ec.end=function(t){var e=t.parent;e&&this.inProcess[e._guid]?En(this.queue,e).push(t):Sn(this,t),delete this.inProcess[t._guid];};var nc={};["construct","config","attachchild","detach","detachchild","insert","complete","reset","render","unrendering","unrender","teardown","destruct","update"].forEach(function(t){nc[t]=new Xl(t);}),nc.init=new tc("init");var ic=Array.prototype,rc=Hn("push").model,sc=Hn("pop").model,ac=Hn("shift").model,oc=Hn("unshift").model,uc=Hn("sort").model,hc=Hn("splice").model,lc=Hn("reverse").model,cc={},fc=function(t){function e(e){t.call(this,null,null),this.isRoot=!0,this.root=this,this.value={},this.ractive=e.ractive,this.adaptors=[],this.context=e.context;}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getKeypath=function(){return "@context.data"},n.rebound=function(){},e}(Bl),dc=function(t,e){this.fragment=t,this.element=e||Un(t),this.node=this.element&&this.element.node,this.ractive=t.ractive,this.root=this;},pc=dc.prototype,mc={decorators:{},_data:{}};mc.decorators.get=function(){var t={};return this.element?(this.element.decorators.forEach(function(e){return t[e.name]=e.handle}),t):t},mc._data.get=function(){return this.model||(this.root.model=new fc({ractive:this.ractive,context:this.root}))},pc.add=function(t,e,n){var i=c(e)?+e:1,s=u(e)?e:n;return on(Gn(this,t,i).map(function(t){var e=t[0],n=t[1],i=e.get();if(!r(n)||!r(i))throw new Error("Cannot add non-numeric value");
	return [e,i+n]}),s)},pc.animate=function(t,e,n){var i=Qn(this,t).model;return vn(this.ractive,i,e,n)},pc.find=function(t,e){return this.fragment.find(t,e)},pc.findAll=function(t,e){var n=[];return e=e||{},e.result=n,this.fragment.findAll(t,e),n},pc.findAllComponents=function(t,e){var n=[];return e=e||{},e.result=n,this.fragment.findAllComponents(t,e),n},pc.findComponent=function(t,e){return this.fragment.findComponent(t,e)},pc.get=function(t){if(!t)return this.fragment.findContext().get(!0);var e=Qn(this,t),n=e.model;return n?n.get(!0):void 0},pc.getParent=function(t){var e=this.fragment;return !e.parent&&t?e=e.componentParent:e.context?e=an(e.parent):(e=an(e.parent),e&&(e=!e.parent&&t?e.componentParent:an(e.parent))),e&&e!==this.fragment?e.getContext():void 0},pc.hasListener=function(t,e){var n,i=this.fragment.owner.component?this.fragment.owner:this.element||this.fragment.owner;do{if(n=i.component||i,n.template.t===Jo&&Yn(n,t))return !0;i=i.up&&i.up.owner,i&&i.component&&(i=i.component);}while(i&&e)},pc.link=function(t,e){var n=Qn(this,t).model,i=Qn(this,e).model,r=jl.start();return i.link(n,t),jl.end(),r},pc.listen=function(t,e){var n=this.element;return n.on(t,e),{cancel:function(){n.off(t,e);}}},pc.observe=function(t,e,n){return void 0===n&&(n={}),s(t)&&(n=e||{}),n.fragment=this.fragment,this.ractive.observe(t,e,n)},pc.observeOnce=function(t,e,n){return void 0===n&&(n={}),s(t)&&(n=e||{}),n.fragment=this.fragment,this.ractive.observeOnce(t,e,n)},pc.pop=function(t){return sc(Qn(this,t).model,[])},pc.push=function(t){for(var e=[],n=arguments.length-1;n-->0;)e[n]=arguments[n+1];return rc(Qn(this,t).model,e)},pc.raise=function(t,e){for(var n=[],i=arguments.length-2;i-->0;)n[i]=arguments[i+2];for(var r,s=this.element;s;){if(s.component&&(s=s.component),r=Yn(s,t))return r.fire(r.element.getContext(e||{},!e||"original"in e?{}:{original:{}}),n);s=s.up&&s.up.owner;}},pc.readLink=function(t,e){return this.ractive.readLink(this.resolve(t),e)},pc.resolve=function(t,e){var n=Qn(this,t),i=n.model,r=n.instance;return i?i.getKeypath(e||r):t},pc.reverse=function(t){return lc(Qn(this,t).model,[])},pc.set=function(t,e,n){return on(Gn(this,t,e),n)},pc.shift=function(t){return ac(Qn(this,t).model,[])},pc.splice=function(t,e,n){for(var i=[],r=arguments.length-3;r-->0;)i[r]=arguments[r+3];return i.unshift(e,n),hc(Qn(this,t).model,i)},pc.sort=function(t){return uc(Qn(this,t).model,[])},pc.subtract=function(t,e,n){var i=c(e)?e:1,s=u(e)?e:n;return on(Gn(this,t,i).map(function(t){var e=t[0],n=t[1],i=e.get();if(!r(n)||!r(i))throw new Error("Cannot add non-numeric value");return [e,i-n]}),s)},pc.toggle=function(t,e){var n=Qn(this,t),i=n.model;return on([[i,!i.get()]],e)},pc.unlink=function(t){var e=Qn(this,t).model,n=jl.start();return e.owner&&e.owner._link&&e.owner.unlink(),jl.end(),n},pc.unlisten=function(t,e){this.element.off(t,e);},pc.unshift=function(t){for(var e=[],n=arguments.length-1;n-->0;)e[n]=arguments[n+1];return oc(Qn(this,t).model,e)},pc.update=function(t,e){return Zn(this.ractive,Qn(this,t).model,e)},pc.updateModel=function(t,e){var n=Qn(this,t),i=n.model,r=jl.start();return i.updateFromBindings(e),jl.end(),r},pc.isBound=function(){var t=this.getBindingModel(this),e=t.model;return !!e},pc.getBindingPath=function(t){var e=this.getBindingModel(this),n=e.model,i=e.instance;return n?n.getKeypath(t||i):void 0},pc.getBinding=function(){var t=this.getBindingModel(this),e=t.model;return e?e.get(!0):void 0},pc.getBindingModel=function(t){var e=t.element;return {model:e.binding&&e.binding.model,instance:e.up.ractive}},pc.setBinding=function(t){var e=this.getBindingModel(this),n=e.model;return on([[n,t]])},Object.defineProperties(pc,mc),dc.forRactive=rn,zl.Context=dc;var vc,gc,yc,bc,wc,xc,kc,_c,Ec,Sc=Xa&&Xa.querySelector,Ac="http://www.w3.org/1999/xhtml",Cc="http://www.w3.org/1998/Math/MathML",Oc="http://www.w3.org/2000/svg",Nc="http://www.w3.org/1999/xlink",jc="http://www.w3.org/XML/1998/namespace",Tc="http://www.w3.org/2000/xmlns",Vc={html:Ac,mathml:Cc,svg:Oc,xlink:Nc,xml:jc,xmlns:Tc},Pc=to&&"registerElement"in Xa;if(vc=io?function(t,e,n){return e&&e!==Ac?n?Xa.createElementNS(e,t,ii(n)):Xa.createElementNS(e,t):n?Xa.createElement(t,ii(n)):Xa.createElement(t)}:function(t,e,n){if(e&&e!==Ac)throw "This browser does not support namespaces other than http://www.w3.org/1999/xhtml. The most likely cause of this error is that you're trying to render SVG in an older browser. See http://ractive.js.org/support/#svgs for more information";return n?Xa.createElement(t,ii(n)):Xa.createElement(t)},to){for(yc=vc("div"),bc=["matches","matchesSelector"],Ec=function(t){return function(e,n){return e[t](n)}},kc=bc.length;kc--&&!gc;)if(wc=bc[kc],yc[wc])gc=Ec(wc);else for(_c=ro.length;_c--;)if(xc=ro[kc]+wc.substr(0,1).toUpperCase()+wc.substring(1),yc[xc]){gc=Ec(xc);break}gc||(gc=function(t,e){var n,i;n=t.parentNode,n||(yc.innerHTML="",n=yc,t=t.cloneNode(),yc.appendChild(t));var r=n.querySelectorAll(e);for(i=r.length;i--;)if(r[i]===t)return !0;return !1});}else gc=null;var Mc=function(t,e,n,i){this.context=i.context||t,this.callback=n,this.ractive=t,this.keypath=i.keypath,this.options=i,e&&this.resolved(e),h(i.old)&&(this.oldContext=qa(t),this.oldFn=i.old),i.init!==!1?(this.dirty=!0,this.dispatch()):di(this),this.dirty=!1;},Ic=Mc.prototype;Ic.cancel=function(){this.cancelled=!0,this.model?this.model.unregister(this):this.resolver.unbind(),P(this.ractive._observers,this);},Ic.dispatch=function(){if(!this.cancelled){try{this.callback.call(this.context,this.newValue,this.oldValue,this.keypath);}catch(t){b("Failed to execute observer callback for '"+this.keypath+"': "+(t.message||t));}di(this,!0),this.dirty=!1;}},Ic.handleChange=function(){var t=this;if(this.dirty)this.newValue=this.model.get();else {var e=this.model.get();if(i(e,this.oldValue))return;if(this.newValue=e,this.options.strict&&this.newValue===this.oldValue)return;jl.addObserver(this,this.options.defer),this.dirty=!0,this.options.once&&jl.scheduleTask(function(){return t.cancel()});}},Ic.rebind=function(t,e){var n=this;return t=lt(this.keypath,t,e),t===this.model?!1:(this.model&&this.model.unregister(this),void(t&&t.addShuffleTask(function(){return n.resolved(t)})))},Ic.resolved=function(t){this.model=t,this.oldValue=void 0,this.newValue=t.get(),t.register(this);};var Rc=/\*+/g,Bc=function(t,e,n,i,r){var s=this;this.context=r.context||t,this.ractive=t,this.baseModel=e,this.keys=n,this.callback=i;var a=n.join("\\.").replace(Rc,"(.+)"),o=this.baseKeypath=e.getKeypath(t);this.pattern=new RegExp("^"+(o?o+"\\.":"")+a+"$"),this.recursive=1===n.length&&"**"===n[0],this.recursive&&(this.keys=["*"]),r.old&&(this.oldContext=qa(t),this.oldFn=r.old),this.oldValues={},this.newValues={},this.defer=r.defer,this.once=r.once,this.strict=r.strict,this.dirty=!1,this.changed=[],this.cache=[],this.partial=!1,this.links=r.links;var u=e.findMatches(this.keys);u.forEach(function(t){s.newValues[t.getKeypath(s.ractive)]=t.get();}),r.init!==!1?this.dispatch():vi(this,this.newValues),e.registerPatternObserver(this);},Kc=Bc.prototype;Kc.cancel=function(){this.baseModel.unregisterPatternObserver(this),P(this.ractive._observers,this);},Kc.dispatch=function(){var t=this,e=this.newValues;this.newValues={},Wa(e).forEach(function(n){var r=e[n],s=t.oldValues[n];if(!(t.strict&&r===s||i(r,s))){var a=[r,s,n];if(n){var o=t.pattern.exec(n);o&&(a=a.concat(o.slice(1)));}try{t.callback.apply(t.context,a);}catch(u){b("Failed to execute pattern observer callback for '"+t.keypath+"': "+(u.message||u));}}}),vi(this,e,this.partial),this.dirty=!1;},Kc.notify=function(t){var e=pi(t);~this.cache.indexOf(e)||(this.cache.push(e),this.changed.push(t));},Kc.shuffle=function(t){var e=this;if(Qa(this.baseModel.value)){for(var n=this.baseModel.value.length,i=0;i<t.length;i++)-1!==t[i]&&t[i]!==i&&e.changed.push([i]);for(var r=t.touchedFrom;n>r;r++)e.changed.push([r]);}},Kc.handleChange=function(){var t=this;if(!this.dirty||this.changed.length){if(this.dirty||(this.newValues={}),this.changed.length){var e=0;if(this.recursive){var n=this.changed.slice();this.changed.length=0,this.dirty=!0,n.forEach(function(n){var i=t.baseModel.joinAll(n);(!i.isLink||t.links)&&(e++,t.newValues[i.getKeypath(t.ractive)]=i.get());}),this.dirty=!1;}else {var i=this.baseModel.isRoot?this.changed.map(function(t){return t.map(E).join(".")}):this.changed.map(function(e){return t.baseKeypath+"."+e.map(E).join(".")});this.baseModel.findMatches(this.keys).forEach(function(n){var r=n.getKeypath(t.ractive),s=function(t){return 0===t.indexOf(r)&&(t.length===r.length||"."===t[r.length])||0===r.indexOf(t)&&(t.length===r.length||"."===r[t.length])};i.filter(s).length&&(e++,t.newValues[r]=n.get());});}if(!e)return;this.partial=!0;}else this.baseModel.findMatches(this.keys).forEach(function(e){var n=e.getKeypath(t.ractive);t.newValues[n]=e.get();}),this.partial=!1;jl.addObserver(this,this.defer),this.dirty=!0,this.changed.length=0,this.cache=[],this.once&&this.cancel();}};var Lc=function(t,e,n,i){this.ractive=t,this.model=e,this.keypath=e.getKeypath(),this.callback=n,this.options=i,this.pending=null,e.register(this),i.init!==!1?(this.sliced=[],this.shuffle([]),this.dispatch()):this.sliced=this.slice();},Dc=Lc.prototype;Dc.cancel=function(){this.model.unregister(this),P(this.ractive._observers,this);},Dc.dispatch=function(){try{this.callback(this.pending);}catch(t){b("Failed to execute array observer callback for '"+this.keypath+"': "+(t.message||t));}this.pending=null,this.options.once&&this.cancel();},Dc.handleChange=function(t){this.pending?jl.addObserver(this,this.options.defer):t||(this.shuffle(this.sliced.map(gi)),this.handleChange());},Dc.shuffle=function(t){var e,n=this,i=this.slice(),r=[],s=[],a={};t.forEach(function(t,i){a[t]=!0,t!==i&&f(e)&&(e=i),-1===t&&s.push(n.sliced[i]);}),f(e)&&(e=t.length);for(var o=i.length,u=0;o>u;u+=1)a[u]||r.push(i[u]);this.pending={inserted:r,deleted:s,start:e},this.sliced=i;},Dc.slice=function(){var t=this.model.get();return Qa(t)?t.slice():[]};var Fc={init:!1,once:!0},zc=function(t){return t.trim()},Uc=function(t){return ""!==t},$c=Hn("pop").path,qc=Hn("push").path,Hc="/* Ractive.js component styles */",Zc=[],Wc=!1,Gc=null,Qc=null,Yc=!1,Jc={extend:function(t,e,n){e.adapt=M(e.adapt,T(n.adapt));},init:function(){}},Xc=/\/\*(?:[\s\S]*?)\*\//g,tf=/url\(\s*(['"])(?:\\[\s\S]|(?!\1).)*\1\s*\)|url\((?:\\[\s\S]|[^)])*\)|(['"])(?:\\[\s\S]|(?!\2).)*\2/gi,ef=/\0(\d+)/g,nf=/(?:^|\}|\{|\x01)\s*([^\{\}\0\x01]+)\s*(?=\{)/g,rf=/@import\s*\([^)]*\)\s*;?/gi,sf=/\x01/g,af=/@keyframes\s+[^\{\}]+\s*\{(?:[^{}]+|\{[^{}]+})*}/gi,of=/((?:(?:\[[^\]]+\])|(?:[^\s\+\>~:]))+)((?:::?[^\s\+\>\~\(:]+(?:\([^\)]+\))?)*\s*[\s\+\>\~]?)\s*/g,uf=/^(?:@|\d+%)/,hf=/\[data-ractive-css~="\{[a-z0-9-]+\}"]/g,lf=function(t){function e(e){t.call(this,e.cssData,"@style"),this.component=e;}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.downstreamChanged=function(t,e){if(!this.locked){var n=this.component;n.extensions.forEach(function(n){var i=n._cssModel;i.mark(),i.downstreamChanged(t,e||1);}),e||Di(n,!0);}},e}(Ll),cf=/\{/,ff={name:"css",extend:function(t,e,n,i){i._cssIds=zi(t),Ha(i,"cssData",{configurable:!0,value:$a(qa(t.cssData),n.cssData||{})}),Ha(i,"_cssModel",{configurable:!0,value:new lf(i)}),n.css&&$i(n,i,e);},init:function(t,e,n){n.css&&b("\nThe css option is currently not supported on a per-instance basis and will be discarded. Instead, we recommend instantiating from a component definition with a css option.\n\nconst Component = Ractive.extend({\n	...\n	css: '/* your css */',\n	...\n});\n\nconst componentInstance = new Component({ ... })\n		");}},df={name:"data",extend:function(t,e,n){var i,r;if(n.data&&s(n.data))for(i in n.data)r=n.data[i],r&&u(r)&&(s(r)||Qa(r))&&b("Passing a `data` option with object and array properties to Ractive.extend() is discouraged, as mutating them is likely to cause bugs. Consider using a data function instead:\n\n  // this...\n  data: function () {\n    return {\n      myObject: {}\n    };\n  })\n\n  // instead of this:\n  data: {\n    myObject: {}\n  }");e.data=Zi(e.data,n.data);},init:function(t,e,n){var i=Zi(t.prototype.data,n.data);if(h(i)&&(i=i.call(e)),i&&i.constructor===Object)for(var r in i)if(h(i[r])){var s=i[r];i[r]=K(s,e),i[r]._r_unbound=s;}return i||{}},reset:function(t){var e=this.init(t.constructor,t,t.viewmodel);return t.viewmodel.root.set(e),!0}},pf={name:"template",extend:function(t,e,n){if("template"in n){var i=n.template;h(i)?e.template=i:e.template=Ji(i,e);}},init:function(t,e,n){var i="template"in n?n.template:t.prototype.template;if(i=i||{v:Fo,t:[]},h(i)){var r=i;i=Yi(e,r),e._config.template={fn:r,result:i};}i=Ji(i,e),e.template=i.t,i.p&&er(e.partials,i.p);},reset:function(t){var e=Qi(t);if(e){var n=Ji(e,t);return t.template=n.t,er(t.partials,n.p,!0),!0}}},mf=["adaptors","components","computed","decorators","easing","events","helpers","interpolators","partials","transitions"],vf=["computed","helpers"],gf=function(t,e){this.name=t,this.useDefaults=e;},yf=gf.prototype;yf.extend=function(t,e,n){var i=this.useDefaults?t.defaults:t,r=this.useDefaults?e:e.constructor;this.configure(i,r,n);},yf.init=function(){},yf.configure=function(t,e,n){var i=this.name,r=n[i],s=qa(t[i]);$a(s,r),e[i]=s,"partials"===i&&e[i]&&Wa(e[i]).forEach(function(t){pt(e[i][t]);});},yf.reset=function(t){var e=t[this.name],n=!1;return Wa(e).forEach(function(t){var i=e[t];i._fn&&(i._fn.isOwner?e[t]=i._fn:delete e[t],n=!0);}),n};var bf=mf.map(function(t){var e=vf.indexOf(t)>-1;return new gf(t,e)}),wf={extend:function(t,e,n,i){return or("extend",t,e,n,i)},init:function(t,e,n){return or("init",t,e,n)},reset:function(t){return Sf.filter(function(e){return e.reset&&e.reset(t)}).map(function(t){return t.name})}},xf={adapt:Jc,computed:wf,css:ff,data:df,helpers:wf,template:pf},kf=Wa(go),_f=hr(kf.filter(function(t){return !xf[t]})),Ef=hr(kf.concat(bf.map(function(t){return t.name}),["on","observe","attributes","cssData","use"])),Sf=[].concat(kf.filter(function(t){return !bf[t]&&!xf[t]}),bf,xf.template,xf.css),Af=/\b_super\b/,Cf=function(t){this.up=t.up,this.ractive=t.up.ractive,this.template=t.template,this.index=t.index,this.type=t.template.t,this.dirty=!1;},Of=Cf.prototype;Of.bubble=function(){this.dirty||(this.dirty=!0,this.up.bubble());},Of.destroyed=function(){this.fragment&&this.fragment.destroyed();},Of.find=function(){return null},Of.findComponent=function(){return null},Of.findNextNode=function(){return this.up.findNextNode(this)},Of.rebound=function(t){this.fragment&&this.fragment.rebound(t);},Of.shuffled=function(){this.fragment&&this.fragment.shuffled();},Of.valueOf=function(){return this.toString()},Cf.prototype.findAll=d,Cf.prototype.findAllComponents=d;var Nf=function(t){function e(e){t.call(this,e);}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.detach=function(){return this.fragment?this.fragment.detach():ri()},n.find=function(t){return this.fragment?this.fragment.find(t):void 0},n.findAll=function(t,e){this.fragment&&this.fragment.findAll(t,e);},n.findComponent=function(t){return this.fragment?this.fragment.findComponent(t):void 0},n.findAllComponents=function(t,e){this.fragment&&this.fragment.findAllComponents(t,e);},n.firstNode=function(t){return this.fragment&&this.fragment.firstNode(t)},n.toString=function(t){return this.fragment?this.fragment.toString(t):""},e}(Cf),jf=/\s+/,Tf=[void 0,"text","search","url","email","hidden","password","search","reset","submit"],Vf={"accept-charset":"acceptCharset",accesskey:"accessKey",bgcolor:"bgColor","class":"className",codebase:"codeBase",colspan:"colSpan",contenteditable:"contentEditable",datetime:"dateTime",dirname:"dirName","for":"htmlFor","http-equiv":"httpEquiv",ismap:"isMap",maxlength:"maxLength",novalidate:"noValidate",pubdate:"pubDate",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",usemap:"useMap"},Pf=Xa?vc("div"):null,Mf=!1,If=function(t){function e(e){t.call(this,e),this.attributes=[],this.owner=e.owner,this.fragment=new Qp({ractive:this.ractive,owner:this,template:this.template}),this.fragment.findNextNode=d,this.dirty=!1;}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){this.fragment.bind();},n.bubble=function(){this.dirty||(this.dirty=!0,this.owner.bubble());},n.destroyed=function(){this.unrender();},n.render=function(){this.node=this.owner.node,this.node&&(this.isSvg=this.node.namespaceURI===Oc),Mf=!0,this.rendered||this.fragment.render(),this.rendered=!0,this.dirty=!0,this.update(),Mf=!1;},n.toString=function(){return this.fragment.toString()},n.unbind=function(t){this.fragment.unbind(t);},n.unrender=function(){this.rendered=!1,this.fragment.unrender();},n.update=function(){var t,e,n=this;if(this.dirty){this.dirty=!1;var i=Mf;Mf=!0,this.fragment.update(),this.rendered&&this.node&&(t=this.fragment.toString(),e=Nr(t,this.isSvg),this.attributes.filter(function(t){return jr(e,t)}).forEach(function(t){n.node.removeAttribute(t.name);}),e.forEach(function(t){n.node.setAttribute(t.name,t.value);}),this.attributes=e),Mf=i||!1;}},e}(Cf),Rf=/^\s*$/,Bf=!1,Kf=function(t){function e(e){return t.call(this,e),this.name=e.template.n,this.namespace=null,this.owner=e.owner||e.up.owner||e.element||Un(e.up),this.element=e.element||(this.owner.attributeByName?this.owner:Un(e.up)),this.up=e.up,this.ractive=this.up.ractive,this.rendered=!1,this.updateDelegate=null,this.fragment=null,this.element.attributeByName[this.name]=this,Qa(e.template.f)?(this.fragment=new Qp({owner:this,template:e.template.f}),this.interpolator=this.fragment&&1===this.fragment.items.length&&this.fragment.items[0].type===Zo&&this.fragment.items[0],void(this.interpolator&&(this.interpolator.owner=this))):(this.value=e.template.f,void(0===this.value?this.value="":f(this.value)&&(this.value=!0)))}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){this.fragment&&this.fragment.bind();},n.bubble=function(){this.dirty||(this.up.bubble(),this.element.bubble(),this.dirty=!0);},n.firstNode=function(){},n.getString=function(){Bf=!0;var t=this.fragment?this.fragment.toString():null!=this.value?""+this.value:"";return Bf=!1,t},n.getValue=function(){Bf=!0;var t=this.fragment?this.fragment.valueOf():Hu[this.name.toLowerCase()]?!0:this.value;return Bf=!1,t},n.render=function(){var t=this.element.node;if(this.node=t,t.namespaceURI&&t.namespaceURI!==Vc.html||(this.propertyName=Vf[this.name]||this.name,void 0!==t[this.propertyName]&&(this.useProperty=!0),(Hu[this.name.toLowerCase()]||this.isTwoway)&&(this.isBoolean=!0),"value"===this.propertyName&&(t._ractive.value=this.value)),t.namespaceURI){var e=this.name.indexOf(":");-1!==e?this.namespace=Tr(t,this.name.slice(0,e)):this.namespace=t.namespaceURI;}this.rendered=!0,this.updateDelegate=fr(this),this.updateDelegate();},n.toString=function(){if(Or())return "";Bf=!0;var t=this.getValue();if("value"!==this.name||void 0===this.element.getAttribute("contenteditable")&&"select"!==this.element.name&&"textarea"!==this.element.name){if("name"===this.name&&"input"===this.element.name&&this.interpolator&&"radio"===this.element.getAttribute("type"))return 'name="{{'+this.interpolator.model.getKeypath()+'}}"';if(this.owner!==this.element||"style"!==this.name&&"class"!==this.name&&!this.style&&!this.inlineClass){if(!(this.rendered||this.owner!==this.element||this.name.indexOf("style-")&&this.name.indexOf("class-")))return void(this.name.indexOf("style-")?this.inlineClass=this.name.substr(6):this.style=Ee(this.name.substr(6)));if(Hu[this.name.toLowerCase()])return t?l(t)?this.name+'="'+ui(t)+'"':this.name:"";if(null==t)return "";var e=ui(this.getString());return Bf=!1,e?this.name+'="'+e+'"':this.name}}},n.unbind=function(t){this.fragment&&this.fragment.unbind(t);},n.unrender=function(){this.updateDelegate(!0),this.rendered=!1;},n.update=function(){if(this.dirty){var t;if(this.dirty=!1,this.fragment&&this.fragment.update(),this.rendered&&this.updateDelegate(),this.isTwoway&&!this.locked)this.interpolator.twowayBinding.lastVal(!0,this.interpolator.model.get());else if("value"===this.name&&(t=this.element.binding)){var e=t.attribute;e&&!e.dirty&&e.rendered&&this.element.binding.attribute.updateDelegate();}}},e}(Cf),Lf=function(t){function e(e){t.call(this,e),this.owner=e.owner||e.up.owner||Un(e.up),this.element=this.owner.attributeByName?this.owner:Un(e.up),this.flag="l"===e.template.v?"lazy":"twoway",this.bubbler=this.owner===this.element?this.element:this.up,this.element.type===Jo&&(Qa(e.template.f)&&(this.fragment=new Qp({owner:this,template:e.template.f})),this.interpolator=this.fragment&&1===this.fragment.items.length&&this.fragment.items[0].type===Zo&&this.fragment.items[0]);}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){this.fragment&&this.fragment.bind(),Pr(this,this.getValue(),!0);},n.bubble=function(){this.dirty||(this.bubbler.bubble(),this.dirty=!0);},n.getValue=function(){return this.fragment?this.fragment.valueOf():"value"in this?this.value:"f"in this.template?this.template.f:!0},n.render=function(){Pr(this,this.getValue(),!0);},n.toString=function(){return ""},n.unbind=function(t){this.fragment&&this.fragment.unbind(t),delete this.element[this.flag];},n.unrender=function(){this.element.rendered&&this.element.recreateTwowayBinding();},n.update=function(){this.dirty&&(this.dirty=!1,this.fragment&&this.fragment.update(),Pr(this,this.getValue(),!0));},e}(Cf),Df=qa(Cf.prototype);$a(Df,{bind:d,unbind:d,update:d,detach:function(){return ai(this.node)},firstNode:function(){return this.node},render:function(t){this.rendered=!0,this.node=Xa.createComment(this.template.c),t.appendChild(this.node);},toString:function(){return "<!-- "+this.template.c+" -->"},unrender:function(t){this.rendered&&t&&this.detach(),this.rendered=!1;}}),Mr.prototype=Df;var Ff=function(t){function e(e){t.call(this,e,"@this"),this.ractive=e;}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.joinKey=function(e){var n=t.prototype.joinKey.call(this,e);return "root"!==e&&"parent"!==e||n.isLink?"data"===e?this.ractive.viewmodel:"cssData"===e?this.ractive.constructor._cssModel:n:Br(n,e)},e}(Ll),zf={"@this":function(t){return t.getRactiveModel()},"@global":function(){return Fl},"@shared":function(){return Dl},"@style":function(t){return t.getRactiveModel().joinKey("cssData")},"@helpers":function(t){return t.getHelpers()}};zf["@"]=zf["@this"];var Uf=function(t){function e(e){t.call(this,null,null),this.isRoot=!0,this.root=this,this.ractive=e.ractive,this.value=e.data,this.adaptors=e.adapt,this.adapt();}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.attached=function(t){Kr(this,t);},n.createLink=function(t,e,n,i){for(var r=A(t),s=this;r.length;){var a=r.shift();s=s.childByKey[a]||s.joinKey(a);}return s.link(e,n,i)},n.detached=function(){Lr(this);},n.get=function(t,e){return t&&Z(this),e&&e.virtual===!1?this.value:this.getVirtual()},n.getHelpers=function(){return this.helpers||(this.helpers=new Ll(this.ractive.helpers,"helpers",this.ractive)),this.helpers},n.getKeypath=function(){return ""},n.getRactiveModel=function(){return this.ractiveModel||(this.ractiveModel=new Ff(this.ractive))},n.getValueChildren=function(){var e=t.prototype.getValueChildren.call(this,this.value);return this.children.forEach(function(t){if(t._link){var n=e.indexOf(t);~n?e.splice(n,1,t._link):e.push(t._link);}}),e},n.has=function(e){if("~"===e[0]&&"/"===e[1]&&(e=e.slice(2)),zf[e]||""===e)return !0;if(t.prototype.has.call(this,e))return !0;var n=C(e);return this.childByKey[n]&&this.childByKey[n]._link?!0:void 0},n.joinKey=function(e,n){if("~"===e[0]&&"/"===e[1]&&(e=e.slice(2)),"@"!==e[0])return t.prototype.joinKey.call(this,e,n);var i=zf[e];return i?i(this):void 0},n.set=function(t){var e=this.wrapper;if(e){var n=!e.reset||e.reset(t)===!1;n&&(e.teardown(),this.wrapper=null,this.value=t,this.adapt());}else this.value=t,this.adapt();this.deps.forEach(Y),this.children.forEach(J);},n.retrieve=function(){return this.wrapper?this.wrapper.get():this.value},n.teardown=function(){t.prototype.teardown.call(this),this.ractiveModel&&this.ractiveModel.teardown();},e}(Bl);Uf.prototype.update=d;var $f=["adaptors","components","decorators","easing","events","interpolators","partials","transitions"],qf=["computed","helpers"],Hf=0,Zf=function(t){function e(e,n){var i=this;t.call(this,e);var r=e.template;this.isAnchor=r.t===nu,this.type=this.isAnchor?nu:su;var s=r.m,a=r.p||{};if("content"in a||(a.content=r.f||[]),this._partials=a,this.isAnchor)this.name=r.n,this.addChild=qr,this.removeChild=Hr;else {var o=new n({component:!0});this.instance=o,this.name=r.e,(o.el||o.target)&&(b("The <"+this.name+"> component has a default '"+(o.el?"el":"target")+"' property; it has been disregarded"),o.el=o.target=null);for(var u,h=e.up;h;){if(h.owner.type===au){u=h.owner.container;break}h=h.parent;}o.parent=this.up.ractive,o.container=u||null,o.root=o.parent.root,o.component=this,Fr(this.instance,{partials:a}),r=this.template,s=r.m,Qa(this.mappings)?s=(s||[]).concat(this.mappings):l(this.mappings)&&(s=(s||[]).concat(Sl.parse(this.mappings,{attributes:!0}).t)),o._inlinePartials=a;}if(this.attributeByName={},this.attributes=[],s){var c=[];s.forEach(function(t){switch(t.t){case iu:case Ru:i.attributes.push(aa({owner:i,up:i.up,template:t}));break;case Ku:case Lu:case Bu:break;default:c.push(t);}}),c.length&&this.attributes.push(new If({owner:this,up:this.up,template:c}));}this.eventHandlers=[];}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){this.isAnchor||(this.attributes.forEach(W),this.eventHandlers.forEach(W),la(this.instance,{partials:this._partials},{cssIds:this.up.cssIds}),(this.instance.target||this.instance.el)&&(this.extern=!0),this.bound=!0);},n.bubble=function(){this.dirty||(this.dirty=!0,this.up.bubble());},n.destroyed=function(){!this.isAnchor&&this.instance.fragment&&this.instance.fragment.destroyed();},n.detach=function(){return this.isAnchor?this.instance?this.instance.fragment.detach():ri():this.instance.fragment.detach()},n.find=function(t,e){return this.instance?this.instance.fragment.find(t,e):void 0},n.findAll=function(t,e){this.instance&&this.instance.fragment.findAll(t,e);},n.findComponent=function(t,e){return t&&this.name!==t?this.instance.fragment?this.instance.fragment.findComponent(t,e):void 0:this.instance},n.findAllComponents=function(t,e){var n=e.result;!this.instance||t&&this.name!==t||n.push(this.instance),this.instance&&this.instance.findAllComponents(t,e);},n.firstNode=function(t){return this.instance?this.instance.fragment.firstNode(t):void 0},n.getContext=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.unshift(this.instance),rn.apply(null,t)},n.rebound=function(t){this.attributes.forEach(function(e){return e.rebound(t)});},n.render=function(t,e){this.isAnchor?(this.rendered=!0,this.target=t,Wf.length||(Wf.push(this.ractive),e?(this.occupants=e,Gr(),this.occupants=null):jl.scheduleTask(Gr,!0))):(this.attributes.forEach(nt),this.eventHandlers.forEach(nt),this.extern?(this.instance.delegate=!1,this.instance.render()):fa(this.instance,t,null,e),this.rendered=!0);},n.shuffled=function(){t.prototype.shuffled.call(this),this.instance&&!this.instance.isolated&&this.instance.fragment&&this.instance.fragment.shuffled();},n.toString=function(){return this.instance?this.instance.toHTML():void 0},n.unbind=function(t){this.isAnchor||(this.bound=!1,this.attributes.forEach(st),t?this.instance.fragment.unbind():Rr(this.instance,function(){return jl.promise()}));},n.unrender=function(t){this.shouldDestroy=t,this.isAnchor?(this.item&&Wr(this,this.item),this.target=null,Wf.length||(Wf.push(this.ractive),jl.scheduleTask(Gr,!0))):(this.instance.unrender(),this.instance.el=this.instance.target=null,this.attributes.forEach(at),this.eventHandlers.forEach(at)),this.rendered=!1;},n.update=function(){this.dirty=!1,this.instance&&(this.instance.fragment.update(),this.attributes.forEach(ot),this.eventHandlers.forEach(ot));},e}(Cf),Wf=[],Gf=function(e){function n(t,n){e.call(this,t,n),this.isReadonly=!this.root.ractive.syncComputedChildren,this.dirty=!0,this.isComputed=!0;}e&&(n.__proto__=e);var i=n.prototype=Object.create(e&&e.prototype);i.constructor=n;var r={setRoot:{}};return r.setRoot.get=function(){return this.parent.setRoot},i.applyValue=function(t){if(e.prototype.applyValue.call(this,t),!this.isReadonly){for(var n=this.parent;n&&n.shuffle;)n=n.parent;n&&n.dependencies.forEach(J);}this.setRoot&&this.setRoot.set(this.setRoot.value);},i.get=function(t,e){if(t&&Z(this),this.dirty){var n=this.parent.get();this.value=n?n[this.key]:void 0,this.wrapper&&(this.newWrapperValue=this.value),this.adapt();}return this.dirty=!1,(e&&"unwrap"in e?e.unwrap!==!1:t)&&this.wrapper?this.wrapperValue:this.value},i.handleChange=function(){return this.dirty?void this.deps.forEach(Y):(this.dirty=!0,this.boundValue&&(this.boundValue=null),this.links.forEach(tt),this.deps.forEach(Y),void this.children.forEach(Y))},i.joinKey=function(e){if(f(e)||""===e)return this;if(!t(this.childByKey,e)){var i=new n(this,e);this.children.push(i),this.childByKey[e]=i;}return this.childByKey[e]},Object.defineProperties(i,r),n}(Bl),Qf=function(t){function e(e,n,i){t.call(this,e,i),this.signature=n,this.isReadonly=!this.signature.setter,this.isComputed=!0,this.dependencies=[],this.children=[],this.childByKey={},this.deps=[],this.dirty=!0,this.shuffle=void 0;}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);n.constructor=e;var r={setRoot:{}};return r.setRoot.get=function(){return this.signature.setter?this:void 0},n.get=function(t,e){if(t&&Z(this),this.dirty){var n=this.value;this.value=this.getValue(),jl.active()?i(n,this.value)||this.notifyUpstream():(jl.start(),i(n,this.value)||this.notifyUpstream(),jl.end()),this.wrapper&&(this.newWrapperValue=this.value),this.adapt(),this.dirty=!1;}return L(this,this.wrapper&&(e&&"unwrap"in e?e.unwrap!==!1:t)?this.wrapperValue:this.value,!e||e.shouldBind!==!1)},n.getContext=function(){return this.parent.isRoot?this.root.ractive:this.parent.get(!1,Po)},n.getValue=function(){q();var t;try{t=this.signature.getter.call(this.root.ractive,this.getContext(),this.getKeypath());}catch(e){if(b("Failed to compute "+this.getKeypath()+": "+(e.message||e)),no){console.groupCollapsed&&console.groupCollapsed("%cshow details","color: rgb(82, 140, 224); font-weight: normal; text-decoration: underline;");var n=this.signature;console.error(e.name+": "+e.message+"\n\n"+n.getterString+(n.getterUseStack?"\n\n"+e.stack:"")),console.groupCollapsed&&console.groupEnd();}}var i=H();return this.parent.keypath&&!~i.indexOf(this.parent)&&i.push(this.parent),this.setDependencies(i),t},n.mark=function(){this.handleChange();},n.rebind=function(t,e){t!==e&&this.handleChange();},n.set=function(t){if(this.isReadonly)throw new Error("Cannot set read-only computed value '"+this.key+"'");this.signature.setter(t,this.getContext(),this.getKeypath()),this.mark();},n.setDependencies=function(t){for(var e=this,n=this.dependencies.length;n--;){var i=e.dependencies[n];~t.indexOf(i)||i.unregister(e);}for(n=t.length;n--;){var r=t[n];~e.dependencies.indexOf(r)||r.register(e);}this.dependencies=t;},n.teardown=function(){for(var e=this,n=this.dependencies.length;n--;)e.dependencies[n]&&e.dependencies[n].unregister(e);this.parent.computed[this.key]===this&&delete this.parent.computed[this.key],t.prototype.teardown.call(this);},Object.defineProperties(n,r),e}(Bl),Yf=Qf.prototype,Jf=Gf.prototype;Yf.handleChange=Jf.handleChange,Yf.joinKey=Jf.joinKey,Rl.Computation=Qf;var Xf=function(t){function e(e,n){var i=this;t.call(this,e.ractive.viewmodel,null),this.fragment=e,this.template=n,this.isReadonly=!0,this.isComputed=!0,this.dirty=!0,this.fn=e.ractive.allowExpressions===!1?d:dt(n.s,n.r.length),this.models=this.template.r.map(function(t){return Je(i.fragment,t)}),this.dependencies=[],this.shuffle=void 0,this.bubble();}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);
	return n.constructor=e,n.bubble=function(t){void 0===t&&(t=!0),this.keypath=void 0,t&&this.handleChange();},n.getKeypath=function(){var t=this;return this.template?(this.keypath||(this.keypath="@"+this.template.s.replace(/_(\d+)/g,function(e,n){if(n>=t.models.length)return e;var i=t.models[n];return i?i.getKeypath():"@undefined"})),this.keypath):"@undefined"},n.getValue=function(){var t=this;q();var e;try{var n=this.models.map(function(t){return t?t.get(!0):void 0});e=this.fn.apply(this.fragment.ractive,n);}catch(i){b("Failed to compute "+this.getKeypath()+": "+(i.message||i));}var r=H();return this.dependencies.filter(function(t){return !~r.indexOf(t)}).forEach(function(e){e.unregister(t),P(t.dependencies,e);}),r.filter(function(e){return !~t.dependencies.indexOf(e)}).forEach(function(e){e.register(t),t.dependencies.push(e);}),e},n.notifyUpstream=function(){},n.rebind=function(t,e,n){var i=this.models.indexOf(e);~i&&(t=lt(this.template.r[i],t,e),t!==e&&(e.unregister(this),this.models.splice(i,1,t),t&&t.addShuffleRegister(this,"mark"))),this.bubble(!n);},n.rebound=function(t){var e=this;this.models=this.template.r.map(function(t){return Je(e.fragment,t)}),t&&this.bubble(!0);},n.retrieve=function(){return this.get()},n.teardown=function(){var e=this;this.fragment=void 0,this.dependencies&&this.dependencies.forEach(function(t){return t.unregister(e)}),t.prototype.teardown.call(this);},n.unreference=function(){t.prototype.unreference.call(this),Qr(this);},n.unregister=function(e){t.prototype.unregister.call(this,e),Qr(this);},n.unregisterLink=function(e){t.prototype.unregisterLink.call(this,e),Qr(this);},e}(Bl),td=Xf.prototype,ed=Qf.prototype;td.get=ed.get,td.handleChange=ed.handleChange,td.joinKey=ed.joinKey,td.mark=ed.mark,td.unbind=d;var nd={update:d,teardown:d},id=function(t){this.owner=t.owner||t.up.owner||Un(t.up),this.element=this.owner.attributeByName?this.owner:Un(t.up),this.up=t.up||this.owner.up,this.ractive=this.up.ractive||this.owner.ractive;var e=this.template=t.template;this.name=e.n,this.node=null,this.handle=null,this.element.decorators.push(this);},rd=id.prototype;rd.bind=function(){var t=this.element===this.owner?new Qp({owner:this.owner}):this.up;Yr(this,this.template,t,{register:!0});},rd.bubble=function(){this.dirty||(this.dirty=!0,this.owner.bubble(),this.up.bubble());},rd.destroyed=function(){this.handle&&(this.handle.teardown(),this.handle=null),this.shouldDestroy=!0;},rd.handleChange=function(){this.bubble();},rd.rebound=function(t){this.model&&this.model.rebound(t);},rd.render=function(){var t=this;this.shouldDestroy=!1,this.handle&&this.unrender();var e=this.ractive;jl.scheduleTask(function(){if(t.element.rendered){var n=x("decorators",e,t.name);if(!n)return y(Eo(t.name,"decorator")),void(t.handle=nd);t.node=t.element.node;var i=t.model?t.model.get():[];if(cc.f=t.up,t.handle=n.apply(e,[t.node].concat(i)),cc.f=null,!t.handle||!t.handle.teardown)throw new Error("The '"+t.name+"' decorator must return an object with a teardown method");t.shouldDestroy&&t.destroyed();}},!0);},rd.shuffled=function(){this.handle&&this.handle.shuffled&&this.handle.shuffled();},rd.toString=function(){return ""},rd.unbind=function(){Xr(this,this.template);},rd.unrender=function(t){t&&!this.element.rendered||!this.handle||(this.handle.teardown(),this.handle=null);},rd.update=function(){var t=this.handle;if(!this.dirty)return void(t&&t.invalidate&&jl.scheduleTask(function(){return t.invalidate()},!0));if(this.dirty=!1,t)if(t.update){var e=this.model?this.model.get():[];t.update.apply(this.ractive,e);}else this.unrender(),this.render();},id.prototype.firstNode=d;var sd=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.toString=function(){return "<!DOCTYPE"+this.template.a+">"},e}(Cf),ad=sd.prototype;ad.bind=ad.render=ad.teardown=ad.unbind=ad.unrender=ad.update=d;var od=function(t,e){void 0===e&&(e="value"),this.element=t,this.ractive=t.ractive,this.attribute=t.attributeByName[e];var n=this.attribute.interpolator;n.twowayBinding=this;var i=n.model;if(i.isReadonly&&!i.setRoot){var r=i.getKeypath().replace(/^@/,"");return w("Cannot use two-way binding on <"+t.name+"> element: "+r+" is read-only. To suppress this warning use <"+t.name+" twoway='false'...>",{ractive:this.ractive}),!1}this.attribute.isTwoway=!0,this.model=i;var s=i.get();this.wasUndefined=f(s),f(s)&&this.getInitialValue&&(s=this.getInitialValue(),i.set(s)),this.lastVal(!0,s);var a=Un(this.element,!1,"form");a&&(this.resetValue=s,a.formBindings.push(this));},ud=od.prototype;ud.bind=function(){this.model.registerTwowayBinding(this);},ud.handleChange=function(){var t=this,e=this.getValue();this.lastVal()!==e&&(jl.start(),this.attribute.locked=!0,this.model.set(e),this.lastVal(!0,e),this.model.get()!==e?this.attribute.locked=!1:jl.scheduleTask(function(){return t.attribute.locked=!1}),jl.end());},ud.lastVal=function(t,e){return t?void(this.lastValue=e):this.lastValue},ud.rebind=function(t,e){var n=this;this.model&&this.model===e&&e.unregisterTwowayBinding(this),t&&(this.model=t,jl.scheduleTask(function(){return t.registerTwowayBinding(n)}));},ud.rebound=function(){this.model&&this.model.unregisterTwowayBinding(this),this.model=this.attribute.interpolator.model,this.model&&this.model.registerTwowayBinding(this);},ud.render=function(){this.node=this.element.node,this.node._ractive.binding=this,this.rendered=!0;},ud.setFromNode=function(t){this.model.set(t.value);},ud.unbind=function(){this.model&&this.model.unregisterTwowayBinding(this);},od.prototype.unrender=d;var hd=function(t){function e(e){t.call(this,e,"checked");}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.render=function(){t.prototype.render.call(this),this.element.on("change",ts),this.node.attachEvent&&this.element.on("click",ts);},n.unrender=function(){this.element.off("change",ts),this.node.attachEvent&&this.element.off("click",ts);},n.getInitialValue=function(){return !!this.element.getAttribute("checked")},n.getValue=function(){return this.node.checked},n.setFromNode=function(t){this.model.set(t.checked);},e}(od),ld=function(t,e,n){var i=this;this.model=e,this.hash=t,this.getValue=function(){return i.value=n.call(i),i.value},this.bindings=[];},cd=ld.prototype;cd.add=function(t){this.bindings.push(t);},cd.bind=function(){var t=this;this.value=this.model.get(),this.bindings.forEach(function(e){return e.lastVal(!0,t.value)}),this.model.registerTwowayBinding(this),this.bound=!0;},cd.remove=function(t){P(this.bindings,t),this.bindings.length||this.unbind();},cd.unbind=function(){this.model.unregisterTwowayBinding(this),this.bound=!1,delete this.model[this.hash];},ld.prototype.rebind=od.prototype.rebind;var fd=[].push,dd=function(t){function e(e){if(t.call(this,e,"name"),this.checkboxName=!0,this.group=es("checkboxes",this.model,ns),this.group.add(this),this.noInitialValue&&(this.group.noInitialValue=!0),this.group.noInitialValue&&this.element.getAttribute("checked")){var n=this.model.get(),i=this.element.getAttribute("value");this.arrayContains(n,i)||fd.call(n,i);}}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){this.group.bound||this.group.bind();},n.getInitialValue=function(){return this.noInitialValue=!0,[]},n.getValue=function(){return this.group.value},n.handleChange=function(){this.isChecked=this.element.node.checked;var e=this.model.get();this.group.value=void 0===e?[]:e.slice();var n=this.element.getAttribute("value");this.isChecked&&!this.arrayContains(this.group.value,n)?this.group.value.push(n):!this.isChecked&&this.arrayContains(this.group.value,n)&&this.removeFromArray(this.group.value,n),this.lastValue=null,t.prototype.handleChange.call(this);},n.render=function(){t.prototype.render.call(this);var e=this.node,n=this.model.get(),i=this.element.getAttribute("value");Qa(n)?this.isChecked=this.arrayContains(n,i):this.isChecked=this.element.compare(n,i),e.name="{{"+this.model.getKeypath()+"}}",e.checked=this.isChecked,this.element.on("change",ts),this.node.attachEvent&&this.element.on("click",ts);},n.setFromNode=function(t){if(this.group.bindings.forEach(function(t){return t.wasUndefined=!0}),t.checked){var e=this.group.getValue();e.push(this.element.getAttribute("value")),this.group.model.set(e);}},n.unbind=function(){this.group.remove(this);},n.unrender=function(){var t=this.element;t.off("change",ts),this.node.attachEvent&&t.off("click",ts);},n.arrayContains=function(t,e){for(var n=this,i=t.length;i--;)if(n.element.compare(e,t[i]))return !0;return !1},n.removeFromArray=function(t,e){var n=this;if(t)for(var i=t.length;i--;)n.element.compare(e,t[i])&&t.splice(i,1);},e}(od),pd=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getInitialValue=function(){return this.element.fragment?this.element.fragment.toString():""},n.getValue=function(){return this.element.node.innerHTML},n.render=function(){t.prototype.render.call(this);var e=this.element;e.on("change",ts),e.on("blur",ts),this.ractive.lazy||(e.on("input",ts),this.node.attachEvent&&e.on("keyup",ts));},n.setFromNode=function(t){this.model.set(t.innerHTML);},n.unrender=function(){var t=this.element;t.off("blur",ts),t.off("change",ts),t.off("input",ts),t.off("keyup",ts);},e}(od),md=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getInitialValue=function(){return ""},n.getValue=function(){return this.node.value},n.render=function(){t.prototype.render.call(this);var e=this.ractive.lazy,n=!1,i=this.element;"lazy"in this.element&&(e=this.element.lazy),r(e)&&(n=+e,e=!1),this.handler=n?rs(n):ts;var s=this.node;i.on("change",ts),"file"!==s.type&&(e||(i.on("input",this.handler),s.attachEvent&&i.on("keyup",this.handler)),i.on("blur",is));},n.unrender=function(){var t=this.element;this.rendered=!1,t.off("change",ts),t.off("input",this.handler),t.off("keyup",this.handler),t.off("blur",is);},e}(od),vd=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getInitialValue=function(){return void 0},n.getValue=function(){return this.node.files},n.render=function(){this.element.lazy=!1,t.prototype.render.call(this);},n.setFromNode=function(t){this.model.set(t.files);},e}(md),gd=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getInitialValue=function(){return this.element.options.filter(function(t){return t.getAttribute("selected")}).map(function(t){return t.getAttribute("value")})},n.getValue=function(){for(var t=this.element.node.options,e=t.length,n=[],i=0;e>i;i+=1){var r=t[i];if(r.selected){var s=r._ractive?r._ractive.value:r.value;n.push(s);}}return n},n.handleChange=function(){var e=this.attribute,n=e.getValue(),i=this.getValue();return (f(n)||!j(i,n))&&t.prototype.handleChange.call(this),this},n.render=function(){t.prototype.render.call(this),this.element.on("change",ts),f(this.model.get())&&this.handleChange();},n.setFromNode=function(t){for(var e=ss(t),n=e.length,i=new Array(n);n--;){var r=e[n];i[n]=r._ractive?r._ractive.value:r.value;}this.model.set(i);},n.unrender=function(){this.element.off("change",ts);},e}(od),yd=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getInitialValue=function(){return void 0},n.getValue=function(){var t=parseFloat(this.node.value);return isNaN(t)?void 0:t},n.setFromNode=function(t){var e=parseFloat(t.value);isNaN(e)||this.model.set(e);},e}(md),bd={},wd=function(t){function e(e){t.call(this,e,"checked"),this.siblings=as(this.ractive._guid+this.element.getAttribute("name")),this.siblings.push(this);}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getValue=function(){return this.node.checked},n.handleChange=function(){jl.start(),this.siblings.forEach(function(t){t.model.set(t.getValue());}),jl.end();},n.render=function(){t.prototype.render.call(this),this.element.on("change",ts),this.node.attachEvent&&this.element.on("click",ts);},n.setFromNode=function(t){this.model.set(t.checked);},n.unbind=function(){P(this.siblings,this);},n.unrender=function(){this.element.off("change",ts),this.node.attachEvent&&this.element.off("click",ts);},e}(od),xd=function(t){function e(e){var n=this;t.call(this,e,"name"),this.group=es("radioname",this.model,os),this.group.add(this),e.checked&&(this.group.value=this.getValue()),this.attribute.interpolator.pathChanged=function(){return n.updateName()};}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){this.group.bound||this.group.bind();},n.getInitialValue=function(){return this.element.getAttribute("checked")?this.element.getAttribute("value"):void 0},n.getValue=function(){return this.element.getAttribute("value")},n.handleChange=function(){this.node.checked&&(this.group.value=this.getValue(),t.prototype.handleChange.call(this)),this.updateName();},n.lastVal=function(t,e){return this.group?t?void(this.group.lastValue=e):this.group.lastValue:void 0},n.rebind=function(e,n){t.prototype.rebind.call(this,e,n),this.updateName();},n.rebound=function(e){t.prototype.rebound.call(this,e),this.updateName();},n.render=function(){t.prototype.render.call(this);var e=this.node;this.updateName(),e.checked=this.element.compare(this.model.get(),this.element.getAttribute("value")),this.element.on("change",ts),e.attachEvent&&this.element.on("click",ts);},n.setFromNode=function(t){t.checked&&this.group.model.set(this.element.getAttribute("value"));},n.unbind=function(){this.group.remove(this);},n.unrender=function(){var t=this.element;t.off("change",ts),this.node.attachEvent&&t.off("click",ts);},n.updateName=function(){this.node&&(this.node.name="{{"+this.model.getKeypath()+"}}");},e}(od),kd=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.forceUpdate=function(){var t=this,e=this.getValue();void 0!==e&&(this.attribute.locked=!0,jl.scheduleTask(function(){return t.attribute.locked=!1}),this.model.set(e));},n.getInitialValue=function(){if(void 0===this.element.getAttribute("value")){var t=this.element.options,e=t.length;if(e){for(var n,i,r=e;r--;){var s=t[r];if(s.getAttribute("selected")){s.getAttribute("disabled")||(n=s.getAttribute("value")),i=!0;break}}if(!i)for(;++r<e;)if(!t[r].getAttribute("disabled")){n=t[r].getAttribute("value");break}return void 0!==n&&(this.element.attributeByName.value.value=n),n}}},n.getValue=function(){var t,e=this.node.options,n=e.length;for(t=0;n>t;t+=1){var i=e[t];if(e[t].selected&&!e[t].disabled)return i._ractive?i._ractive.value:i.value}},n.render=function(){t.prototype.render.call(this),this.element.on("change",ts);},n.setFromNode=function(t){var e=ss(t)[0];this.model.set(e._ractive?e._ractive.value:e.value);},n.unrender=function(){this.element.off("change",ts);},e}(od),_d=/;\s*$/,Ed=function(t){function e(e){var n=this;if(t.call(this,e),this.name=e.template.e.toLowerCase(),this.parent=Un(this.up,!1),this.parent&&"option"===this.parent.name)throw new Error("An <option> element cannot contain other elements (encountered <"+this.name+">)");this.decorators=[],this.attributeByName={};for(var i,r,s,a,o,u,h,c,f=this.template.m,d=f&&f.length||0,p=0;d>p;p++)if(h=f[p],h.g)(n.statics||(n.statics={}))[h.n]=l(h.f)?h.f:h.n;else switch(h.t){case iu:case Lu:case Bu:case Ru:case Ku:s=aa({owner:n,up:n.up,template:h}),r=h.n,i=i||(i=n.attributes=[]),"value"===r?a=s:"name"===r?u=s:"class"===r?o=s:i.push(s);break;case Du:n.delegate=!1;break;default:(c||(c=[])).push(h);}a&&i.push(a),u&&i.push(u),o&&i.unshift(o),c&&((i||(this.attributes=[])).push(new If({owner:this,up:this.up,template:c})),c=[]),e.template.f&&!e.deferContent&&(this.fragment=new Qp({template:e.template.f,owner:this,cssIds:null})),this.binding=null;}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){var t=this.attributes;if(t){t.binding=!0;for(var e=t.length,n=0;e>n;n++)t[n].bind();t.binding=!1;}this.fragment&&this.fragment.bind(),this.binding?this.binding.bind():this.recreateTwowayBinding();},n.createTwowayBinding=function(){if("twoway"in this?this.twoway:this.ractive.twoway){var t=hs(this);if(t){var e=new t(this);if(e&&e.model)return e}}},n.destroyed=function(){this.attributes&&this.attributes.forEach(Q),this.fragment&&this.fragment.destroyed();},n.detach=function(){return this.rendered||this.destroyed(),ai(this.node)},n.find=function(t,e){return this.node&&gc(this.node,t)?this.node:this.fragment?this.fragment.find(t,e):void 0},n.findAll=function(t,e){var n=e.result;gc(this.node,t)&&n.push(this.node),this.fragment&&this.fragment.findAll(t,e);},n.findNextNode=function(){return null},n.firstNode=function(){return this.node},n.getAttribute=function(t){if(this.statics&&t in this.statics)return this.statics[t];var e=this.attributeByName[t];return e?e.getValue():void 0},n.getContext=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return this.fragment?(n=this.fragment).getContext.apply(n,t):(this.ctx||(this.ctx=new dc(this.up,this)),t.unshift(qa(this.ctx)),$a.apply(null,t));var n;},n.off=function(t,e,n){void 0===n&&(n=!1);var i=this.up.delegate,r=this.listeners&&this.listeners[t];if(r)if(P(r,e),i){var s=(i.listeners||(i.listeners=[]))&&(i.listeners[t]||(i.listeners[t]=[]));s.refs&&!--s.refs&&i.off(t,vs,!0);}else if(this.rendered){var a=this.node,o=a.addEventListener,u=a.removeEventListener;r.length?r.length&&!r.refs&&n&&(u.call(a,t,ys,!0),o.call(a,t,ys,!1)):u.call(a,t,ys,n);}},n.on=function(t,e,n){void 0===n&&(n=!1);var i=this.up.delegate,r=(this.listeners||(this.listeners={}))[t]||(this.listeners[t]=[]);if(i){var s=(i.listeners||(i.listeners=[]))&&i.listeners[t]||(i.listeners[t]=[]);s.refs?s.refs++:(s.refs=0,i.on(t,vs,!0),s.refs++);}else if(this.rendered){var a=this.node,o=a.addEventListener,u=a.removeEventListener;r.length?r.length&&!r.refs&&n&&(u.call(a,t,ys,!1),o.call(a,t,ys,!0)):o.call(a,t,ys,n);}O(this.listeners[t],e);},n.recreateTwowayBinding=function(){this.binding&&(this.binding.unbind(),this.binding.unrender()),(this.binding=this.createTwowayBinding())&&(this.binding.bind(),this.rendered&&this.binding.render());},n.rebound=function(e){t.prototype.rebound.call(this,e),this.attributes&&this.attributes.forEach(function(t){return t.rebound(e)}),this.binding&&this.binding.rebound(e);},n.render=function(t,e){var n=this;this.namespace=fs(this);var i,r=!1;if(e)for(var s;s=e.shift();){if(s.nodeName.toUpperCase()===n.template.e.toUpperCase()&&s.namespaceURI===n.namespace){n.node=i=s,r=!0;break}ai(s);}if(!r&&this.node&&(i=this.node,t.appendChild(i),r=!0),!i){var a=this.template.e;i=vc(this.namespace===Ac?a.toLowerCase():a,this.namespace,this.getAttribute("is")),this.node=i;}Ha(i,"_ractive",{value:{proxy:this},configurable:!0}),this.statics&&Wa(this.statics).forEach(function(t){i.setAttribute(t,n.statics[t]);}),r&&this.foundNode&&this.foundNode(i);var o=this.intro;if(o&&o.shouldFire("intro")&&(o.isIntro=!0,o.isOutro=!1,jl.registerTransition(o)),this.fragment){var u=r?I(i.childNodes):void 0;this.fragment.render(i,u),u&&u.forEach(ai);}if(r){this.binding&&this.binding.wasUndefined&&this.binding.setFromNode(i);for(var h=i.attributes.length;h--;){var l=i.attributes[h].name;l in n.attributeByName||n.statics&&l in n.statics||i.removeAttribute(l);}}if(this.up.cssIds&&i.setAttribute("data-ractive-css",this.up.cssIds.map(function(t){return "{"+t+"}"}).join(" ")),this.attributes)for(var c=this.attributes.length,f=0;c>f;f++)n.attributes[f].render();if(this.binding&&this.binding.render(),!this.up.delegate&&this.listeners){var d=this.listeners;for(var p in d)d[p]&&d[p].length&&n.node.addEventListener(p,ys,!!d[p].refs);}r||t.appendChild(i),this.rendered=!0;},n.shuffled=function(){t.prototype.shuffled.call(this),this.decorators.forEach(it);},n.toString=function(){var t=this,e=this.template.e,n=this.attributes&&this.attributes.map(cs).join("")||"";this.statics&&Wa(this.statics).forEach(function(e){return "class"!==e&&"style"!==e&&(n=" "+e+'="'+ui(t.statics[e])+'"'+n)}),"option"===this.name&&this.isSelected()&&(n+=" selected"),"input"===this.name&&ls(this)&&(n+=" checked");var i=this.statics?this.statics.style:void 0,r=this.statics?this.statics["class"]:void 0;this.attributes&&this.attributes.forEach(function(t){"class"===t.name?r=(r||"")+(r?" ":"")+ui(t.getString()):"style"===t.name?(i=(i||"")+(i?" ":"")+ui(t.getString()),i&&!_d.test(i)&&(i+=";")):t.style?i=(i||"")+(i?" ":"")+t.style+": "+ui(t.getString())+";":t.inlineClass&&t.getValue()&&(r=(r||"")+(r?" ":"")+t.inlineClass);}),void 0!==i&&(n=" style"+(i?'="'+i+'"':"")+n),void 0!==r&&(n=" class"+(r?'="'+r+'"':"")+n),this.up.cssIds&&(n+=' data-ractive-css="'+this.up.cssIds.map(function(t){return "{"+t+"}"}).join(" ")+'"');var s="<"+e+n+">";return Zu[this.name.toLowerCase()]?s:("textarea"===this.name&&void 0!==this.getAttribute("value")?s+=wt(this.getAttribute("value")):void 0!==this.getAttribute("contenteditable")&&(s+=this.getAttribute("value")||""),this.fragment&&(s+=this.fragment.toString(!/^(?:script|style)$/i.test(this.template.e))),s+="</"+e+">")},n.unbind=function(t){var e=this.attributes;if(e){e.unbinding=!0;for(var n=e.length,i=0;n>i;i++)e[i].unbind(t);e.unbinding=!1;}this.binding&&this.binding.unbind(t),this.fragment&&this.fragment.unbind(t);},n.unrender=function(t){if(this.rendered){this.rendered=!1;var e=this.intro;e&&e.complete&&e.complete(),"option"===this.name?this.detach():t&&jl.detachWhenReady(this);var n=this.outro;n&&n.shouldFire("outro")&&(n.isIntro=!1,n.isOutro=!0,jl.registerTransition(n)),this.fragment&&this.fragment.unrender(),this.binding&&this.binding.unrender();}},n.update=function(){if(this.dirty){this.dirty=!1;var t=this.attributes;if(t)for(var e=t.length,n=0;e>n;n++)t[n].update();this.fragment&&this.fragment.update();}},e}(Nf),Sd=!1,Ad=!1,Cd=!1,Od=null!==Ja?Ja.UIEvent:null,Nd=function(t){function e(e){t.call(this,e),this.formBindings=[];}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.render=function(e,n){t.prototype.render.call(this,e,n),this.on("reset",bs);},n.unrender=function(e){this.off("reset",bs),t.prototype.unrender.call(this,e);},e}(Ed),jd=function(t,e){-1!==t.indexOf("*")&&m('Only component proxy-events may contain "*" wildcards, <'+e.name+" on-"+t+'="..."/> is not valid'),this.name=t,this.owner=e,this.handler=null;},Td=jd.prototype;Td.bind=function(){},Td.render=function(t){var e=this,n=this.name,i=function(){var i=e.owner.node;e.owner.on(n,e.handler=function(e){return t.fire({node:i,original:e,event:e,name:n})});};"load"!==n?jl.scheduleTask(i,!0):i();},Td.unbind=function(){},Td.unrender=function(){this.handler&&this.owner.off(this.name,this.handler);};var Vd=function(t,e,n,i){this.eventPlugin=t,this.owner=e,this.name=n,this.handler=null,this.args=i;},Pd=Vd.prototype;Pd.bind=function(){},Pd.render=function(t){var e=this;jl.scheduleTask(function(){var n=e.owner.node;cc.f=t.up,e.handler=e.eventPlugin.apply(e.owner.ractive,[n,function(i){return void 0===i&&(i={}),i.original?i.event=i.original:i.original=i.event,i.name=e.name,i.node=i.node||n,t.fire(i)}].concat(e.args||[])),cc.f=null;});},Pd.unbind=function(){},Pd.unrender=function(){var t=this;this.handler?this.handler.teardown():jl.scheduleTask(function(){return t.handler&&t.handler.teardown()});};var Md=function(t,e){this.component=t,this.name=e,this.handler=null;},Id=Md.prototype;Id.bind=function(t){var e=this.component.instance;this.handler=e.on(this.name,function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n[0]instanceof dc){var r=n.shift();r.component=e,t.fire(r,n);}else t.fire({},n);return !1});},Id.render=function(){},Id.unbind=function(){this.handler.cancel();},Id.unrender=function(){};var Rd=/^(event|arguments|@node|@event|@context)(\..+)?$/,Bd=/^\$(\d+)(\..+)?$/,Kd=function(t){this.owner=t.owner||t.up.owner||Un(t.up),this.element=this.owner.attributeByName?this.owner:Un(t.up,!0),this.template=t.template,this.up=t.up,this.ractive=t.up.ractive,this.events=[];},Ld=Kd.prototype;Ld.bind=function(){var t=this;if(this.events.length&&(this.events.forEach(function(t){return t.unrender()}),this.events=[]),this.element.type===su||this.element.type===nu)this.template.n.forEach(function(e){t.events.push(new Md(t.element,e));});else {var e;if(e=this.template.a){var n=e.r.map(function(e){var n=Je(t.up,e);return n?n.get():void 0});try{e=dt(e.s,n.length).apply(null,n);}catch(i){e=null,b("Failed to compute args for event on-"+this.template.n.join("- ")+": "+(i.message||i));}}this.template.n.forEach(function(n){var i=x("events",t.ractive,n);i?t.events.push(new Vd(i,t.element,n,e)):t.events.push(new jd(n,t.element));});}this.models=null,O(this.element.events||(this.element.events=[]),this),Yr(this,this.template),this.fn||(this.action=this.template.f),this.events.forEach(function(e){return e.bind(t)});},Ld.destroyed=function(){this.events.forEach(function(t){return t.unrender()});},Ld.fire=function(t,e){var n=this;void 0===e&&(e=[]);var i=t instanceof dc&&t.refire?t:this.element.getContext(t);if(this.fn){var r=[],s=Jr(this,this.template,this.up,{specialRef:function(t){var e=Rd.exec(t);if(e)return {special:e[1],keys:e[2]?A(e[2].substr(1)):[]};var n=Bd.exec(t);return n?{special:"arguments",keys:[n[1]-1].concat(n[2]?A(n[2].substr(1)):[])}:void 0}});s&&s.forEach(function(s){if(!s)return r.push(void 0);if(s.special){var a,o=s.special;"@node"===o?a=n.element.node:"@event"===o?a=t&&t.event:"event"===o?(w("The event reference available to event directives is deprecated and should be replaced with @context and @event"),a=i):a="@context"===o?i:e;for(var u=s.keys.slice();a&&u.length;)a=a[u.shift()];return r.push(a)}return s.wrapper?r.push(s.wrapperValue):void r.push(s.get())});var a=this.ractive,o=a.event;a.event=i;var u=this.fn.apply(a,r),h=u.pop();if(h===!1){var c=t?t.original:void 0;c?(c.preventDefault&&c.preventDefault(),c.stopPropagation&&c.stopPropagation()):w("handler '"+this.template.n.join(" ")+"' returned false, but there is no event available to cancel");}else !u.length&&Qa(h)&&l(h[0])&&(h=xn(this.ractive,h.shift(),i,h));return a.event=o,h}return xn(this.ractive,this.action,i,e)},Ld.handleChange=function(){},Ld.render=function(){var t=this;this.events.forEach(function(e){return e.render(t)});},Ld.toString=function(){return ""},Ld.unbind=function(t){P(this.element.events,this),this.events.forEach(function(e){return e.unbind(t)});},Ld.unrender=function(){this.events.forEach(function(t){return t.unrender()});};var Dd=Kd.prototype;Dd.firstNode=Dd.rebound=Dd.update=d;var Fd=function(t){function e(e,n){t.call(this,null,null,null,"@undefined"),this.root=e.ractive.viewmodel,this.template=n,this.rootLink=!0,this.template=n,this.fragment=e,this.rebound();}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getKeypath=function(){return this.model?this.model.getKeypath():"@undefined"},n.rebound=function(){var t,e=this,n=this.fragment,i=this.template,r=this.base=Es(n,i);this.proxy&&ks(this);var s=this.proxy={rebind:function(n,o){o===r?(n=lt(i,n,o),n!==r&&(e.base=r=n)):~(t=a.indexOf(o))&&(n=lt(i.m[t].n,n,o),n!==a[t]&&a.splice(t,1,n||Ko)),n!==o&&(o.unregister(s),n&&n.addShuffleTask(function(){return n.register(s)}));},handleChange:function(){o();}};r.register(s);var a=this.members=i.m.map(function(t){if(l(t))return {get:function(){return t}};var e;return t.t===bu?(e=Je(n,t.n),e.register(s),e):(e=new Xf(n,t),e.register(s),e)}),o=function(){var t=r&&r.joinAll(a.reduce(function(t,e){var n=e.get();return Qa(n)?t.concat(n):(t.push(E(String(n))),t)},[]));t!==e.model&&(e.model=t,e.relinking(t),z(),_s(e),e.fragment.shuffled());};o();},n.teardown=function(){ks(this),t.prototype.teardown.call(this);},n.unreference=function(){t.prototype.unreference.call(this),this.deps.length||this.refs||this.teardown();},n.unregister=function(e){t.prototype.unregister.call(this,e),this.deps.length||this.refs||this.teardown();},e}(Lo),zd=Xf.prototype,Ud=Fd.prototype;Ud.unreference=zd.unreference,Ud.unregister=zd.unregister,Ud.unregisterLink=zd.unregisterLink;var $d=function(t){function e(e){t.call(this,e),e.owner&&(this.parent=e.owner),this.isStatic=!!e.template.s,this.model=null,this.dirty=!1;}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(t){var e=this.template.y?this.template.y.containerFragment:this.containerFragment||this.up,n=t||Es(e,this.template);if(n){var i=n.get();if(this.isStatic)return this.model={get:function(){return i}},void n.unreference();n.register(this),this.model=n;}},n.handleChange=function(){this.bubble();},n.rebind=function(t,e,n){return this.isStatic?void 0:(t=lt(this.template,t,e,this.up),t===this.model?!1:(this.model&&this.model.unregister(this),t&&t.addShuffleRegister(this,"mark"),this.model=t,n||this.handleChange(),!0))},n.rebound=function(t){if(this.model){if(this.model.rebound)this.model.rebound(t);else {var e=this.template.y?this.template.y.containerFragment:this.containerFragment||this.up,n=Es(e,this.template);n!==this.model&&(this.model.unregister(this),this.bind(n));}t&&this.bubble();}this.fragment&&this.fragment.rebound(t);},n.unbind=function(){this.isStatic||(this.model&&this.model.unregister(this),this.model=void 0);},e}(Cf),qd=Ss.prototype=Object.create(Nf.prototype);$a(qd,$d.prototype,{constructor:Ss});var Hd=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bubble=function(){this.owner&&this.owner.bubble(),t.prototype.bubble.call(this);},n.detach=function(){return ai(this.node)},n.firstNode=function(){return this.node},n.getString=function(){return this.model?oi(this.model.get()):""},n.render=function(t,e){if(!Or()){var n=this.value=this.getString();this.rendered=!0,xs(this,t,e,n);}},n.toString=function(t){var e=this.getString();return t?wt(e):e},n.unrender=function(t){t&&this.detach(),this.rendered=!1;},n.update=function(){if(this.dirty&&(this.dirty=!1,this.rendered)){var t=this.getString();t!==this.value&&(this.node.data=this.value=t);}},n.valueOf=function(){return this.model?this.model.get():void 0},e}($d),Zd=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.render=function(e,n){t.prototype.render.call(this,e,n),this.node.defaultValue=this.node.value;},n.compare=function(t,e){var n=this.getAttribute("value-comparator");if(n){if(h(n))return n(t,e);if(t&&e)return t[n]==e[n]}return t==e},e}(Ed),Wd={"true":!0,"false":!1,"null":null,undefined:void 0},Gd=new RegExp("^(?:"+Wa(Wd).join("|")+")"),Qd=/^(?:[+-]?)(?:(?:(?:0|[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/,Yd=/\$\{([^\}]+)\}/g,Jd=/^\$\{([^\}]+)\}/,Xd=/^\s*$/,tp=$o.extend({init:function(t,e){this.values=e.values,this.sp();},postProcess:function(t){return 1===t.length&&Xd.test(this.leftover)?{value:t[0].v}:null},converters:[function(e){if(!e.values)return null;var n=e.matchPattern(Jd);return n&&t(e.values,n)?{v:e.values[n]}:void 0},function(t){var e=t.matchPattern(Gd);return e?{v:Wd[e]}:void 0},function(t){var e=t.matchPattern(Qd);return e?{v:+e}:void 0},function(t){var e=St(t),n=t.values;return e&&n?{v:e.v.replace(Yd,function(t,e){return e in n?n[e]:e})}:e},function(t){if(!t.matchString("{"))return null;var e={};if(t.sp(),t.matchString("}"))return {v:e};for(var n;n=As(t);){if(e[n.key]=n.value,t.sp(),t.matchString("}"))return {v:e};if(!t.matchString(","))return null}return null},function(t){if(!t.matchString("["))return null;var e=[];if(t.sp(),t.matchString("]"))return {v:e};for(var n;n=t.read();){if(e.push(n.v),t.sp(),t.matchString("]"))return {v:e};if(!t.matchString(","))return null;t.sp();}return null}]}),ep=function(t){function e(e){t.call(this,e),this.name=e.template.n,
	this.owner=e.owner||e.up.owner||e.element||Un(e.up),this.element=e.element||(this.owner.attributeByName?this.owner:Un(e.up)),this.up=this.element.up,this.ractive=this.up.ractive,this.element.attributeByName[this.name]=this,this.value=e.template.f;}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){var t=this.template.f,e=this.element.instance.viewmodel;if(0===t)e.joinKey(this.name).set(!0);else if(l(t)){var n=Cs(t);e.joinKey(this.name).set(n?n.value:t);}else Qa(t)&&Os(this);},n.rebound=function(t){if(this.boundFragment&&this.boundFragment.rebound(t),this.link){this.model=Es(this.up,this.template.f[0]);var e=this.element.instance.viewmodel.joinAll(A(this.name));e.link(this.model,this.name,{mapping:!0});}},n.render=function(){},n.unbind=function(t){this.model&&this.model.unregister(this),this.boundFragment&&this.boundFragment.unbind(t),this.element.bound&&this.link.target===this.model&&this.link.owner.unlink();},n.unrender=function(){},n.update=function(){this.dirty&&(this.dirty=!1,this.boundFragment&&this.boundFragment.update());},e}(Cf),np=function(t){function e(e){var n=e.template;n.a||(n.a={}),!f(n.a.value)||"disabled"in n.a||(n.a.value=n.f||""),t.call(this,e),this.select=Un(this.parent||this.up,!1,"select");}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){if(!this.select)return void t.prototype.bind.call(this);var e=this.attributeByName.selected;if(e&&void 0!==this.select.getAttribute("value")){var n=this.attributes.indexOf(e);this.attributes.splice(n,1),delete this.attributeByName.selected;}t.prototype.bind.call(this),this.select.options.push(this);},n.bubble=function(){var e=this.getAttribute("value");this.node&&this.node.value!==e&&(this.node._ractive.value=e),t.prototype.bubble.call(this);},n.getAttribute=function(t){var e=this.attributeByName[t];return e?e.getValue():"value"===t&&this.fragment?this.fragment.valueOf():void 0},n.isSelected=function(){var t=this,e=this.getAttribute("value");if(f(e)||!this.select)return !1;var n=this.select.getAttribute("value");if(this.select.compare(n,e))return !0;if(this.select.getAttribute("multiple")&&Qa(n))for(var i=n.length;i--;)if(t.select.compare(n[i],e))return !0},n.render=function(e,n){t.prototype.render.call(this,e,n),this.attributeByName.value||(this.node._ractive.value=this.getAttribute("value"));},n.unbind=function(e){t.prototype.unbind.call(this,e),this.select&&P(this.select.options,this);},e}(Ed),ip=Ms.prototype=qa(Ss.prototype);$a(ip,{constructor:Ms,bind:function(){var t=this.template;if(this.yielder){if(this.container=this.up.ractive,this.component=this.container.component,this.containerFragment=this.up,!this.component)return this.fragment=new Qp({owner:this,template:[]}),void this.fragment.bind();this.up=this.component.up,t.r||t.x||t.rx||(this.refName="content");}this.macro?this.fn=this.macro:(this.refName||(this.refName=t.r),this.refName&&Bs(this,this.refName),this.partial||this.fn||(Ss.prototype.bind.call(this),this.model&&Bs(this,this.model.get()))),this.partial||this.fn||w("Could not find template for partial '"+this.name+"'"),Is(this,this.partial||[]),this.fn&&Ds(this),this.fragment.bind();},bubble:function(){this.dirty||(this.dirty=!0,this.yielder?this.containerFragment.bubble():this.up.bubble());},findNextNode:function(){return (this.containerFragment||this.up).findNextNode(this)},handleChange:function(){this.dirtyTemplate=!0,this.externalChange=!0,this.bubble();},rebound:function(t){var e=this;this._attrs&&Wa(this._attrs).forEach(function(n){return e._attrs[n].rebound(t)}),Ss.prototype.rebound.call(this,t);},refreshAttrs:function(){var t=this;Wa(this._attrs).forEach(function(e){t.handle.attributes[e]=!t._attrs[e].items.length||t._attrs[e].valueOf();});},resetTemplate:function(){var t=this;if(this.fn&&this.proxy){if(this.last=0,!this.externalChange)return this.partial=this.fnTemplate,!0;h(this.proxy.teardown)&&this.proxy.teardown(),this.fn=this.proxy=null;}if(this.partial=null,this.refName&&(this.partial=Ns(this.ractive,this.refName,this.up)),!this.partial&&this.model&&Bs(this,this.model.get()),!this.fn){if(this.last&&this.partial===this.last)return !1;this.partial&&(this.last=this.partial,Rs(this));}return this.unbindAttrs(),this.fn?(Ds(this),h(this.proxy.render)&&jl.scheduleTask(function(){return t.proxy.render()})):this.partial||w("Could not find template for partial '"+this.name+"'"),!0},render:function(t,e){this.fn&&this.fn._cssDef&&!this.fn._cssDef.applied&&Ci(),this.fragment.render(t,e),this.proxy&&h(this.proxy.render)&&this.proxy.render();},unbind:function(t){this.fragment.unbind(t),this.unbindAttrs(t),Ss.prototype.unbind.call(this,t);},unbindAttrs:function(t){var e=this;this._attrs&&Wa(this._attrs).forEach(function(n){e._attrs[n].unbind(t);});},unrender:function(t){this.proxy&&h(this.proxy.teardown)&&this.proxy.teardown(),this.fragment.unrender(t);},update:function(){var t=this,e=this.proxy;this.updating=1,this.dirtyAttrs&&(this.dirtyAttrs=!1,Wa(this._attrs).forEach(function(e){return t._attrs[e].update()}),this.refreshAttrs(),h(e.update)&&e.update(this.handle.attributes)),this.dirtyTemplate&&(this.dirtyTemplate=!1,this.resetTemplate()&&this.fragment.resetTemplate(this.partial||[])),this.dirty&&(this.dirty=!1,e&&h(e.invalidate)&&e.invalidate(),this.fragment.update()),this.externalChange=!1,this.updating=0;}});var rp="extra-attributes",sp=function(t,e,n){this.value=this.key=t,this.context=e,this.isReadonly=this.isKey=!0,this.deps=[],this.links=[],this.children=[],this.instance=n;},ap=sp.prototype;ap.applyValue=function(t){t!==this.value&&(this.value=this.key=t,this.deps.forEach(Y),this.links.forEach(Y),this.children.forEach(function(t){t.applyValue(t.context.getKeypath(t.instance));}));},ap.destroyed=function(){this.upstream&&this.upstream.unregisterChild(this);},ap.get=function(t){return t&&Z(this),C(this.value)},ap.getKeypath=function(){return C(this.value)},ap.has=function(){return !1},ap.rebind=function(t,e){for(var n=this,i=this.deps.length;i--;)n.deps[i].rebind(t,e,!1);for(i=this.links.length;i--;)n.links[i].relinking(t,!1);},ap.register=function(t){this.deps.push(t);},ap.registerChild=function(t){O(this.children,t),t.upstream=this;},ap.registerLink=function(t){O(this.links,t);},ap.unregister=function(t){P(this.deps,t);},ap.unregisterChild=function(t){P(this.children,t);},ap.unregisterLink=function(t){P(this.links,t);},sp.prototype.reference=d,sp.prototype.unreference=d;var op=/^"(\\"|[^"])+"$/,up=function(t){this.parent=t.owner.up,this.up=this,this.owner=t.owner,this.ractive=this.parent.ractive,this.delegate=this.ractive.delegate!==!1&&(this.parent.delegate||zs(this.parent)),this.delegate&&this.delegate.delegate===!1&&(this.delegate=!1),this.delegate&&(this.delegate.delegate=this.delegate),this.cssIds="cssIds"in t?t.cssIds:this.parent?this.parent.cssIds:null,this.context=null,this.rendered=!1,this.iterations=[],this.template=t.template,this.indexRef=t.indexRef,this.keyRef=t.keyRef,this.pendingNewIndices=null,this.previousIterations=null,this.isArray=!1;},hp=up.prototype;hp.bind=function(t){var e=this;this.context=t,this.bound=!0;var n=t.get(),i=this.aliases=this.owner.template.z&&this.owner.template.z.slice(),r=i&&i.find(function(t){return "shuffle"===t.n});r&&r.x&&r.x.x&&("true"===r.x.x.s?this.shuffler=!0:op.test(r.x.x.s)&&(this.shuffler=A(r.x.x.s.slice(1,-1)))),this.shuffler&&(this.values=$s(this,this.shuffler)),this.source&&this.source.model.unbind(this.source);var a=t.isComputed&&i&&i.find(function(t){return "source"===t.n});if(a&&a.x&&a.x.r){var o=Es(this,a.x);this.source={handleChange:function(){},rebind:function(t){this.model.unregister(this),this.model=t,t.register(this);}},this.source.model=o,o.register(this.source);}if(this.isArray=Qa(n)){this.iterations=[];for(var u=this.length=n.length,h=0;u>h;h+=1)e.iterations[h]=e.createIteration(h,h);}else if(s(n)){if(this.isArray=!1,this.indexRef){var l=this.indexRef.split(",");this.keyRef=l[0],this.indexRef=l[1];}var c=Wa(n);this.length=c.length,this.iterations=c.map(function(t,n){return e.createIteration(t,n)});}return this},hp.bubble=function(t){this.bubbled||(this.bubbled=[]),this.bubbled.push(t),this.rebounding||this.owner.bubble();},hp.createIteration=function(t,e){var n=new Qp({owner:this,template:this.template});return n.isIteration=!0,n.delegate=this.delegate,this.aliases&&(n.aliases={}),Us(this,n,t,e),n.bind(n.context)},hp.destroyed=function(){for(var t=this,e=this.iterations.length,n=0;e>n;n++)t.iterations[n].destroyed();this.pathModel&&this.pathModel.destroyed(),this.rootModel&&this.rootModel.destroyed();},hp.detach=function(){var t=ri();return this.iterations.forEach(function(e){return t.appendChild(e.detach())}),t},hp.find=function(t,e){return R(this.iterations,function(n){return n.find(t,e)})},hp.findAll=function(t,e){return this.iterations.forEach(function(n){return n.findAll(t,e)})},hp.findAllComponents=function(t,e){return this.iterations.forEach(function(n){return n.findAllComponents(t,e)})},hp.findComponent=function(t,e){return R(this.iterations,function(n){return n.findComponent(t,e)})},hp.findContext=function(){return this.context},hp.findNextNode=function(t){var e=this;if(t.index<this.iterations.length-1)for(var n=t.index+1;n<this.iterations.length;n++){var i=e.iterations[n].firstNode(!0);if(i)return i}return this.owner.findNextNode()},hp.firstNode=function(t){return this.iterations[0]?this.iterations[0].firstNode(t):null},hp.getLast=function(){return this.lastModel||(this.lastModel=new sp(this.length-1))},hp.rebind=function(t){var e=this;this.context=t,this.source||t&&this.iterations.forEach(function(t){Us(e,t,t.key,t.index);});},hp.rebound=function(t){var e=this;this.context=this.owner.model,this.iterations.forEach(function(n,i){n.context=qs(e,n,i),n.rebound(t);});},hp.render=function(t,e){var n=this.iterations;if(n)for(var i=n.length,r=0;i>r;r++)n[r].render(t,e);this.rendered=!0;},hp.shuffle=function(t,e){var n=this;this.pendingNewIndices||(this.previousIterations=this.iterations.slice()),this.pendingNewIndices||(this.pendingNewIndices=[]),this.pendingNewIndices.push(t);var i=[];t.forEach(function(t,r){if(-1!==t){var s=n.iterations[r];i[t]=s,t!==r&&s&&(s.dirty=!0,e&&(s.shouldRebind=1));}}),this.iterations=i,e||this.bubble();},hp.shuffled=function(){this.iterations.forEach(it);},hp.toString=function(t){return this.iterations?this.iterations.map(t?ht:ut).join(""):""},hp.unbind=function(t){this.bound=!1,this.source&&this.source.model.unregister(this.source);for(var e=this.pendingNewIndices?this.previousIterations:this.iterations,n=e.length,i=0;n>i;i++)e[i].unbind(t);return this},hp.unrender=function(t){for(var e=this,n=this.iterations.length,i=0;n>i;i++)e.iterations[i].unrender(t);if(this.pendingNewIndices&&this.previousIterations){n=this.previousIterations.length;for(var r=0;n>r;r++)e.previousIterations[r].unrender(t);}this.rendered=!1;},hp.update=function(){var t=this;if(this.pendingNewIndices)return this.bubbled.length=0,void this.updatePostShuffle();if(!this.updating){if(this.updating=!0,this.shuffler){var e=$s(this,this.shuffler),n=B(this.values,e);n.same?this.iterations.forEach(ot):(this.shuffle(n,!0),this.updatePostShuffle());}else {for(var i=this.iterations.length,r=0;i>r;r++){var a=t.iterations[r];a&&a.idxModel&&a.idxModel.applyValue(r);}var o,u,h,l=this.context.get(),c=this.isArray,f=!0;if(this.isArray=Qa(l)){if(this.source){this.rebounding=1;var d=this.source.model.get();this.iterations.forEach(function(e,n){n<l.length&&e.lastValue!==l[n]&&~(h=d.indexOf(l[n]))&&(Us(t,e,n,n),e.rebound(!0));}),this.rebounding=0;}c&&(f=!1,this.iterations.length>l.length&&(o=this.iterations.splice(l.length)));}else if(s(l)&&!c)for(f=!1,o=[],u={},h=this.iterations.length;h--;){var p=t.iterations[h];p.key in l?u[p.key]=!0:(t.iterations.splice(h,1),o.push(p));}var m=Qa(l)?l.length:s(l)?Wa(l).length:0;if(this.length=m,this.updateLast(),f&&(o=this.iterations,this.iterations=[]),o){i=o.length;for(var v=0;i>v;v++)o[v].unbind().unrender(!0);}if(!f&&this.isArray&&this.bubbled&&this.bubbled.length){var g=this.bubbled;this.bubbled=[],i=g.length;for(var y=0;i>y;y++)t.iterations[g[y]]&&t.iterations[g[y]].update();}else {i=this.iterations.length;for(var b=0;i>b;b++)t.iterations[b].update();}var w,x;if(m>this.iterations.length){if(w=this.rendered?ri():null,h=this.iterations.length,Qa(l))for(;h<l.length;)x=t.createIteration(h,h),t.iterations.push(x),t.rendered&&x.render(w),h+=1;else if(s(l)){if(this.indexRef&&!this.keyRef){var k=this.indexRef.split(",");this.keyRef=k[0],this.indexRef=k[1];}Wa(l).forEach(function(e){u&&e in u||(x=t.createIteration(e,h),t.iterations.push(x),t.rendered&&x.render(w),h+=1);});}if(this.rendered){var _=this.parent.findParentNode(),E=this.parent.findNextNode(this.owner);_.insertBefore(w,E);}}}this.updating=!1;}},hp.updateLast=function(){this.lastModel&&this.lastModel.applyValue(this.length-1);},hp.updatePostShuffle=function(){var t=this,e=this.pendingNewIndices[0],n=this.rendered?this.parent.findParentNode():null,i=n&&this.owner.findNextNode(),r=n?ri():null;this.pendingNewIndices.slice(1).forEach(function(t){e.forEach(function(n,i){e[i]=t[n];});});var s,a,o,h,l,c,d=this.length=this.context.get().length,p=this.previousIterations,m=this.iterations,v=this.context.get(),g={},y=new Array(e.length);for(e.forEach(function(t,e){return y[t]=e}),this.updateLast(),s=o=0;d>s;)f(y[s])?(h=m[s]=t.createIteration(s,s),n&&(l=p[o],l=l&&n&&l.firstNode()||i,h.render(r),n.insertBefore(r,l)),s++):(a=e[o],-1===a?(p[o]&&p[o].unbind().unrender(!0),p[o++]=0):a>s?(g[a]=p[o],p[o++]=null):(m[s]=h=m[s]||g[s]||t.createIteration(s,s),(g[s]||o!==s)&&(c=t.source&&h.lastValue!==v[s],Us(t,h,s,s)),!n||!g[s]&&p[o]||(l=p[o+1],l=l&&n&&l.firstNode()||i,g[s]?n.insertBefore(h.detach(),l):(h.render(r),n.insertBefore(r,l))),p[o++]=0,s++),h&&u(h)&&((h.shouldRebind||c)&&(h.rebound(c),h.shouldRebind=0),h.update(),h.shuffled()));for(var b=p.length,w=0;b>w;w++)p[w]&&p[w].unbind().unrender(!0);this.shuffler&&(this.values=$s(this,this.shuffler)),this.pendingNewIndices=null,this.previousIterations=null;},up.prototype.getContext=sn,up.prototype.getKeypath=ha;var lp=function(t){function e(e){t.call(this,e),this.isAlias=e.template.t===hu,this.sectionType=e.template.n||this.isAlias&&ju||null,this.templateSectionType=this.sectionType,this.subordinate=1===e.template.l,this.fragment=null;}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){t.prototype.bind.call(this),this.subordinate&&(this.sibling=this.up.items[this.up.items.indexOf(this)-1],this.sibling.nextSibling=this),this.model||this.isAlias?(this.dirty=!0,this.update()):!this.sectionType||this.sectionType!==Ou||this.sibling&&this.sibling.isTruthy()||(this.fragment=new Qp({owner:this,template:this.template.f}).bind());},n.bubble=function(){!this.dirty&&this["yield"]?(this.dirty=!0,this.containerFragment.bubble()):t.prototype.bubble.call(this);},n.detach=function(){var e=this.fragment||this.detached;return e?e.detach():t.prototype.detach.call(this)},n.findNextNode=function(){return (this.containerFragment||this.up).findNextNode(this)},n.isTruthy=function(){if(this.subordinate&&this.sibling.isTruthy())return !0;var t=this.model?this.model.isRoot?this.model.value:this.model.get():void 0;return !(!t||this.templateSectionType!==Tu&&Hs(t))},n.rebind=function(e,n,i){t.prototype.rebind.call(this,e,n,i)&&this.fragment&&this.sectionType!==Cu&&this.sectionType!==Ou&&this.fragment.rebind(e);},n.rebound=function(e){this.model&&(this.model.rebound?this.model.rebound(e):(t.prototype.unbind.call(this),t.prototype.bind.call(this),(this.sectionType===ju||this.sectionType===Tu||this.sectionType===Nu)&&this.fragment&&this.fragment.rebind(this.model),e&&this.bubble())),this.fragment&&this.fragment.rebound(e);},n.render=function(t,e){this.rendered=!0,this.fragment&&this.fragment.render(t,e);},n.shuffle=function(t){this.fragment&&this.sectionType===Nu&&this.fragment.shuffle(t);},n.unbind=function(e){t.prototype.unbind.call(this,e),this.fragment&&this.fragment.unbind(e);},n.unrender=function(t){this.rendered&&this.fragment&&this.fragment.unrender(t),this.rendered=!1;},n.update=function(){var t=this;if(this.dirty&&(this.fragment&&this.sectionType!==Cu&&this.sectionType!==Ou&&(this.fragment.context=this.model),this.model||this.sectionType===Ou||this.isAlias)){this.dirty=!1;var e=this.model?this.model.isRoot?this.model.value:this.model.get():void 0,n=!this.subordinate||!this.sibling.isTruthy(),i=this.sectionType;this["yield"]&&this["yield"]!==e?(this.up=this.containerFragment,this.container=null,this["yield"]=null,this.rendered&&this.fragment.unbind().unrender(!0),this.fragment=null):this.rendered&&!this["yield"]&&e instanceof dc&&(this.rendered&&this.fragment&&this.fragment.unbind().unrender(!0),this.fragment=null),(null===this.sectionType||null===this.templateSectionType)&&(this.sectionType=Zs(e,this.template.i)),i&&i!==this.sectionType&&this.fragment&&(this.rendered&&this.fragment.unbind().unrender(!0),this.fragment=null);var r,s=this.sectionType===Nu||this.sectionType===ju||n&&(this.sectionType===Ou?!this.isTruthy():this.isTruthy())||this.isAlias;if(s)if(this.fragment||(this.fragment=this.detached),this.fragment)this.detached&&(Ws(this,this.fragment),this.detached=!1,this.rendered=!0),this.fragment.bound||this.fragment.bind(this.model),this.fragment.update();else if(this.sectionType===Nu)r=new up({owner:this,template:this.template.f,indexRef:this.template.i}).bind(this.model);else {var a=this.sectionType!==Cu&&this.sectionType!==Ou?this.model:null;e instanceof dc&&(this["yield"]=e,this.containerFragment=this.up,this.up=e.fragment,this.container=e.ractive,a=void 0),r=new Qp({owner:this,template:this.template.f}).bind(a);}else this.fragment&&this.rendered?ql!==!0?this.fragment.unbind().unrender(!0):(this.unrender(!1),this.detached=this.fragment,jl.promise().then(function(){t.detached&&t.detach();})):this.fragment&&this.fragment.unbind(),this.fragment=null;r&&(this.rendered&&Ws(this,r),this.fragment=r),this.nextSibling&&(this.nextSibling.dirty=!0,this.nextSibling.update());}},e}(Ss),cp=function(t){function e(e){t.call(this,e),this.options=[];}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.foundNode=function(t){if(this.binding){var e=ss(t);e.length>0&&(this.selectedOptions=e);}},n.render=function(e,n){t.prototype.render.call(this,e,n),this.sync();for(var i=this.node,r=i.options.length;r--;)i.options[r].defaultSelected=i.options[r].selected;this.rendered=!0;},n.sync=function(){var t=this,e=this.node;if(e){var n=I(e.options);if(this.selectedOptions)return n.forEach(function(e){t.selectedOptions.indexOf(e)>=0?e.selected=!0:e.selected=!1;}),this.binding.setFromNode(e),void delete this.selectedOptions;var i=this.getAttribute("value"),r=this.getAttribute("multiple"),s=r&&Qa(i);if(void 0!==i){var a;n.forEach(function(e){var n=e._ractive?e._ractive.value:e.value,o=r?s&&t.valueContains(i,n):t.compare(i,n);o&&(a=!0),e.selected=o;}),a||r||this.binding&&this.binding.forceUpdate();}else this.binding&&this.binding.forceUpdate&&this.binding.forceUpdate();}},n.valueContains=function(t,e){for(var n=this,i=t.length;i--;)if(n.compare(e,t[i]))return !0},n.compare=function(t,e){var n=this.getAttribute("value-comparator");if(n){if(h(n))return n(e,t);if(e&&t)return e[n]==t[n]}return e==t},n.update=function(){var e=this.dirty;t.prototype.update.call(this),e&&this.sync();},e}(Ed),fp=function(t){function e(e){var n=e.template;e.deferContent=!0,t.call(this,e),this.attributeByName.value||(n.f&&us({template:n})?(this.attributes||(this.attributes=[])).push(aa({owner:this,template:{t:iu,f:n.f,n:"value"},up:this.up})):this.fragment=new Qp({owner:this,cssIds:null,template:n.f}));}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bubble=function(){var t=this;this.dirty||(this.dirty=!0,this.rendered&&!this.binding&&this.fragment&&jl.scheduleTask(function(){t.dirty=!1,t.node.value=t.fragment.toString();}),this.up.bubble());},e}(Zd),dp=function(t){function e(e){t.call(this,e),this.type=Ho;}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.detach=function(){return ai(this.node)},n.firstNode=function(){return this.node},n.render=function(t,e){Or()||(this.rendered=!0,xs(this,t,e,this.template));},n.toString=function(t){return t?wt(this.template):this.template},n.unrender=function(t){this.rendered&&t&&this.detach(),this.rendered=!1;},n.valueOf=function(){return this.template},e}(Cf),pp=dp.prototype;pp.bind=pp.unbind=pp.update=d;var mp,vp="hidden";if(Xa){var gp;if(vp in Xa)gp="";else for(var yp=ro.length;yp--;){var bp=ro[yp];if(vp=bp+"Hidden",vp in Xa){gp=bp;break}}void 0!==gp?(Xa.addEventListener(gp+"visibilitychange",Gs),Gs()):("onfocusout"in Xa?(Xa.addEventListener("focusout",Qs),Xa.addEventListener("focusin",Ys)):(Ja.addEventListener("pagehide",Qs),Ja.addEventListener("blur",Qs),Ja.addEventListener("pageshow",Ys),Ja.addEventListener("focus",Ys)),mp=!0);}var wp;if(to){var xp={},kp=vc("div").style;wp=function(t){if(!xp[t]){var e=Ee(t);if(void 0!==kp[t])xp[t]=e;else for(var n=ro.length;n--;){var i="-"+ro[n]+"-"+e;if(void 0!==kp[i]){xp[t]=i;break}}}return xp[t]};}else wp=null;var _p,Ep=wp,Sp=new RegExp("^(?:"+ro.join("|")+")([A-Z])");if(to){var Ap,Cp,Op,Np,jp,Tp,Vp=vc("div").style,Pp=function(t){return t},Mp={},Ip={};void 0!==Vp.transition?(Ap="transition",Cp="transitionend",Op=!0):void 0!==Vp.webkitTransition?(Ap="webkitTransition",Cp="webkitTransitionEnd",Op=!0):Op=!1,Ap&&(Np=Ap+"Duration",jp=Ap+"Property",Tp=Ap+"TimingFunction"),_p=function(t,e,n,i,r){setTimeout(function(){function s(){clearTimeout(d);}function a(){c&&f&&(t.unregisterCompleteHandler(s),t.ractive.fire(t.name+":end",t.node,t.isIntro),r());}function o(e){if(e.target===t.node){var n=i.indexOf(e.propertyName);-1!==n&&i.splice(n,1),i.length||(clearTimeout(d),u());}}function u(){m[jp]=v.property,m[Tp]=v.duration,m[Np]=v.timing,t.node.removeEventListener(Cp,o,!1),f=!0,a();}var c,f,d,p=(t.node.namespaceURI||"")+t.node.tagName,m=t.node.style,v={property:m[jp],timing:m[Tp],duration:m[Np]};t.node.addEventListener(Cp,o,!1),d=setTimeout(function(){i=[],u();},n.duration+(n.delay||0)+50),t.registerCompleteHandler(s),m[jp]=i.join(",");var g=Js(n.easing||"linear");m[Tp]=g;var y=m[Tp]===g;m[Np]=n.duration/1e3+"s",setTimeout(function(){for(var r,s,u,d,v,g=i.length,x=null,k=[];g--;){if(u=i[g],r=p+u,y&&Op&&!Ip[r]){var E=m[u];m[u]=e[u],r in Mp||(x=t.getStyle(u),Mp[r]=t.getStyle(u)!=e[u],Ip[r]=!Mp[r],Ip[r]&&(m[u]=E));}y&&Op&&!Ip[r]||(null===x&&(x=t.getStyle(u)),s=i.indexOf(u),-1===s?b("Something very strange happened with transitions. Please raise an issue at https://github.com/ractivejs/ractive/issues - thanks!",{node:t.node}):i.splice(s,1),d=/[^\d]*$/.exec(x)[0],v=_(parseFloat(x),parseFloat(e[u])),v?k.push({name:u,interpolator:v,suffix:d}):m[u]=e[u],x=null);}if(k.length){var S;l(n.easing)?(S=t.ractive.easing[n.easing],S||(w(Eo(n.easing,"easing")),S=Pp)):S=h(n.easing)?n.easing:Pp,new Pl({duration:n.duration,easing:S,step:function(t){for(var e=k.length;e--;){var n=k[e];m[n.name]=n.interpolator(t)+n.suffix;}},complete:function(){c=!0,a();}});}else c=!0;i.length?m[jp]=i.join(","):(m[jp]="none",t.node.removeEventListener(Cp,o,!1),f=!0,a());},0);},n.delay||0);};}else _p=null;var Rp=_p,Bp=Ja&&Ja.getComputedStyle,Kp=Promise.resolve(),Lp={t0:"intro-outro",t1:"intro",t2:"outro"},Dp=function(t){this.owner=t.owner||t.up.owner||Un(t.up),this.element=this.owner.attributeByName?this.owner:Un(t.up),this.ractive=this.owner.ractive,this.template=t.template,this.up=t.up,this.options=t,this.onComplete=[];},Fp=Dp.prototype;Fp.animateStyle=function(t,e,n){var i=this;if(4===arguments.length)throw new Error("t.animateStyle() returns a promise - use .then() instead of passing a callback");if(!mp)return this.setStyle(t,e),Kp;var r;return l(t)?(r={},r[t]=e):(r=t,n=e),new Promise(function(t){if(!n.duration)return i.setStyle(r),void t();for(var e=Wa(r),s=[],a=Bp(i.node),o=e.length;o--;){var u=e[o],h=Ep(u),l=a[Ep(u)],c=i.node.style[h];h in i.originals||(i.originals[h]=i.node.style[h]),i.node.style[h]=r[u],i.targets[h]=i.node.style[h],i.node.style[h]=c,l!=r[u]&&(s.push(h),r[h]=r[u],i.node.style[h]=l);}return s.length?void Rp(i,r,n,s,t):void t()})},Fp.bind=function(){var t=this.options,e=t.template&&t.template.v;e&&(("t0"===e||"t1"===e)&&(this.element.intro=this),("t0"===e||"t2"===e)&&(this.element.outro=this),this.eventName=Lp[e]);var n=this.owner.ractive;this.name=t.name||t.template.n,t.params&&(this.params=t.params),h(this.name)?(this._fn=this.name,this.name=this._fn.name):this._fn=x("transitions",n,this.name),this._fn||w(Eo(this.name,"transition"),{ractive:n}),Yr(this,t.template);},Fp.getParams=function(){if(this.params)return this.params;if(this.fn){var t=Jr(this,this.template,this.up).map(function(t){return t?t.get():void 0});return this.fn.apply(this.ractive,t)}},Fp.getStyle=function(t){var e=Bp(this.node);if(l(t))return e[Ep(t)];if(!Qa(t))throw new Error("Transition$getStyle must be passed a string, or an array of strings representing CSS properties");for(var n={},i=t.length;i--;){var r=t[i],s=e[Ep(r)];"0px"===s&&(s=0),n[r]=s;}return n},Fp.processParams=function(t,e){return c(t)?t={duration:t}:l(t)?t="slow"===t?{duration:600}:"fast"===t?{duration:200}:{duration:400}:t||(t={}),$a({},e,t)},Fp.registerCompleteHandler=function(t){O(this.onComplete,t);},Fp.setStyle=function(e,n){var i=this;if(l(e)){var r=Ep(e);t(this.originals,r)||(this.originals[r]=this.node.style[r]),this.node.style[r]=n,this.targets[r]=this.node.style[r];}else {var s;for(s in e)t(e,s)&&i.setStyle(s,e[s]);}return this},Fp.shouldFire=function(t){if(!this.ractive.transitionsEnabled)return !1;if("intro"===t&&this.ractive.rendering&&Xs("noIntro",this.ractive,!0))return !1;if("outro"===t&&this.ractive.unrendering&&Xs("noOutro",this.ractive,!1))return !1;var e=this.getParams();if(!this.element.parent)return !0;if(e&&e[0]&&s(e[0])&&"nested"in e[0]){if(e[0].nested!==!1)return !0}else if(Xs("nestedTransitions",this.ractive)!==!1)return !0;for(var n=this.element.parent;n;){if(n[t]&&n[t].starting)return !1;n=n.parent;}return !0},Fp.start=function(){var t,e=this,n=this.node=this.element.node,i=this.originals={},r=this.targets={},s=this.getParams();if(this.complete=function(s){if(e.starting=!1,!t){if(e.onComplete.forEach(function(t){return t()}),!s&&e.isIntro)for(var a in r)n.style[a]===r[a]&&(n.style[a]=i[a]);e._manager.remove(e),t=!0;}},!this._fn)return void this.complete();var a=this._fn.apply(this.ractive,[this].concat(s));a&&a.then(this.complete);},Fp.toString=function(){return ""},Fp.unbind=function(){if(!this.element.attributes||!this.element.attributes.unbinding){var t=this.options&&this.options.template&&this.options.template.v;("t0"===t||"t1"===t)&&(this.element.intro=null),("t0"===t||"t2"===t)&&(this.element.outro=null);}},Fp.unregisterCompleteHandler=function(t){P(this.onComplete,t);};var zp=Dp.prototype;zp.destroyed=zp.firstNode=zp.rebound=zp.render=zp.unrender=zp.update=d;var Up,$p,qp={};try{vc("table").innerHTML="foo";}catch(Hp){Up=!0,$p={TABLE:['<table class="x">',"</table>"],THEAD:['<table><thead class="x">',"</thead></table>"],TBODY:['<table><tbody class="x">',"</tbody></table>"],TR:['<table><tr class="x">',"</tr></table>"],SELECT:['<select class="x">',"</select>"]};}var Zp=function(t){function e(e){t.call(this,e);}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.detach=function(){var t=ri();return this.nodes&&this.nodes.forEach(function(e){return t.appendChild(e)}),t},n.find=function(t){var e,n=this,i=this.nodes.length;for(e=0;i>e;e+=1){var r=n.nodes[e];if(1===r.nodeType){if(gc(r,t))return r;var s=r.querySelector(t);if(s)return s}}return null},n.findAll=function(t,e){var n,i=this,r=e.result,s=this.nodes.length;for(n=0;s>n;n+=1){var a=i.nodes[n];if(1===a.nodeType){gc(a,t)&&r.push(a);var o=a.querySelectorAll(t);o&&r.push.apply(r,o);}}},n.findComponent=function(){return null},n.firstNode=function(){return this.rendered&&this.nodes[0]},n.render=function(t,e,n){var i=this;if(!this.nodes){var r=this.model?this.model.get():"";this.nodes=ta(r,t);}var s=this.nodes;if(e){for(var a,o=-1;e.length&&(a=this.nodes[o+1]);)for(var u=void 0;u=e.shift();){var h=u.nodeType;if(h===a.nodeType&&(1===h&&u.outerHTML===a.outerHTML||(3===h||8===h)&&u.nodeValue===a.nodeValue)){i.nodes.splice(++o,1,u);break}t.removeChild(u);}o>=0&&(s=this.nodes.slice(o)),e.length&&(n=e[0]);}if(s.length){var l=ri();s.forEach(function(t){return l.appendChild(t)}),n?t.insertBefore(l,n):t.appendChild(l);}this.rendered=!0;},n.toString=function(){var t=this.model&&this.model.get();return t=null!=t?""+t:"",Vr()?bt(t):t},n.unrender=function(){this.nodes&&this.nodes.forEach(function(t){jl.detachWhenReady({node:t,detach:function(){ai(t);}});}),this.rendered=!1,this.nodes=null;},n.update=function(){this.rendered&&this.dirty?(this.dirty=!1,this.unrender(),this.render(this.up.findParentNode(),null,this.up.findNextNode(this))):this.dirty=!1;},e}($d),Wp={};Wp[hu]=lp,Wp[nu]=Zf,Wp[lu]=sa,Wp[uu]=sd,Wp[Zo]=Hd,Wp[Xo]=Ms,Wp[Go]=lp,Wp[Wo]=Zp,Wp[au]=Ms,Wp[iu]=Kf,Wp[Lu]=Lf,Wp[Bu]=id,Wp[Ru]=Kd,Wp[Ku]=Dp,Wp[tu]=Mr;var Gp={doctype:sd,form:Nd,input:Zd,option:np,select:cp,textarea:fp},Qp=function(t){this.owner=t.owner,this.isRoot=!t.owner.up,this.parent=this.isRoot?null:this.owner.up,this.ractive=t.ractive||(this.isRoot?t.owner:this.parent.ractive),this.componentParent=this.isRoot&&this.ractive.component?this.ractive.component.up:this.owner.containerFragment||null,!this.isRoot||this.ractive.delegate?this.delegate=this.owner.containerFragment?this.owner.containerFragment&&this.owner.containerFragment.delegate:this.componentParent&&this.componentParent.delegate||this.parent&&this.parent.delegate:this.delegate=!1,this.context=null,this.rendered=!1,"cssIds"in t?this.cssIds=t.cssIds&&t.cssIds.length&&t.cssIds:this.cssIds=this.parent?this.parent.cssIds:null,this.dirty=!1,this.dirtyValue=!0,this.template=t.template||[],this.createItems();},Yp=Qp.prototype;Yp.bind=function(t){var e=this;this.context=t,this.owner.template.z&&(this.aliases=ua(this.owner.template.z,this.owner.containerFragment||this.parent));for(var n=this.items.length,i=0;n>i;i++)e.items[i].bind();return this.bound=!0,this.dirty&&this.update(),this},Yp.bubble=function(){this.dirtyValue=!0,this.dirty||(this.dirty=!0,this.isRoot?this.ractive.component?this.ractive.component.bubble():this.bound&&jl.addFragment(this):this.owner.bubble(this.index));},Yp.createItems=function(){var t=this,e=this.template.length;this.items=[];for(var n=0;e>n;n++)t.items[n]=aa({up:t,template:t.template[n],index:n});},Yp.destroyed=function(){for(var t=this,e=this.items.length,n=0;e>n;n++)t.items[n].destroyed();this.pathModel&&this.pathModel.destroyed(),this.rootModel&&this.rootModel.destroyed();},Yp.detach=function(){for(var t=ri(),e=this.items,n=e.length,i=0;n>i;i++)t.appendChild(e[i].detach());return t},Yp.find=function(t,e){return R(this.items,function(n){return n.find(t,e)})},Yp.findAll=function(t,e){this.items&&this.items.forEach(function(n){return n.findAll&&n.findAll(t,e)});},Yp.findComponent=function(t,e){return R(this.items,function(n){return n.findComponent(t,e)})},Yp.findAllComponents=function(t,e){this.items&&this.items.forEach(function(n){return n.findAllComponents&&n.findAllComponents(t,e)});},Yp.findContext=function(){var t=an(this);return t&&t.context?t.context:this.ractive.viewmodel},Yp.findNextNode=function(t){var e=this;if(t)for(var n,i=t.index+1;i<this.items.length;i++)if(n=e.items[i],n&&n.firstNode){var r=n.firstNode(!0);if(r)return r}return this.isRoot?this.ractive.component?this.ractive.component.up.findNextNode(this.ractive.component):null:this.parent?this.owner.findNextNode(this):void 0},Yp.findParentNode=function(){var t=this;do{if(t.owner.type===Jo)return t.owner.node;if(t.isRoot&&!t.ractive.component)return t.ractive.el;t=t.owner.type===au?t.owner.containerFragment:t.componentParent||t.parent;}while(t);throw new Error("Could not find parent node")},Yp.firstNode=function(t){var e=R(this.items,function(t){return t.firstNode(!0)});return e?e:t?null:this.parent.findNextNode(this.owner);
	},Yp.getKey=function(){return this.keyModel||(this.keyModel=new sp(this.key))},Yp.getIndex=function(){return this.idxModel||(this.idxModel=new sp(this.index))},Yp.rebind=function(t){this.context=t,this.rootModel&&(this.rootModel.context=this.context),this.pathModel&&(this.pathModel.context=this.context);},Yp.rebound=function(t){if(this.owner.template.z){var e=this.aliases;for(var n in e)e[n].rebound?e[n].rebound(t):(e[n].unreference(),e[n]=0);ua(this.owner.template.z,this.owner.containerFragment||this.parent,e);}this.items.forEach(function(e){return e.rebound(t)}),t&&(this.rootModel&&this.rootModel.applyValue(this.context.getKeypath(this.ractive.root)),this.pathModel&&this.pathModel.applyValue(this.context.getKeypath()));},Yp.render=function(t,e){if(this.rendered)throw new Error("Fragment is already rendered!");this.rendered=!0;for(var n=this.items,i=n.length,r=0;i>r;r++)n[r].render(t,e);},Yp.resetTemplate=function(t){var e=this.bound,n=this.rendered;if(e&&(n&&this.unrender(!0),this.unbind()),this.template=t,this.createItems(),e&&(this.bind(this.context),n)){var i=this.findParentNode(),r=this.findNextNode();if(r){var s=ri();this.render(s),i.insertBefore(s,r);}else this.render(i);}},Yp.shuffled=function(){this.items.forEach(it),this.rootModel&&this.rootModel.applyValue(this.context.getKeypath(this.ractive.root)),this.pathModel&&this.pathModel.applyValue(this.context.getKeypath());},Yp.toString=function(t){return this.items.map(t?ht:ut).join("")},Yp.unbind=function(t){var e=this;if(this.owner.template.z&&!this.owner.yielder){for(var n in e.aliases)e.aliases[n].unreference();this.aliases={};}this.context=null;for(var i=this.items.length,r=0;i>r;r++)e.items[r].unbind(t);return this.bound=!1,this},Yp.unrender=function(t){for(var e=this,n=this.items.length,i=0;n>i;i++)e.items[i].unrender(t);this.rendered=!1;},Yp.update=function(){var t=this;if(this.dirty)if(this.updating)this.isRoot&&jl.addFragmentToRoot(this);else {this.dirty=!1,this.updating=!0;for(var e=this.items.length,n=0;e>n;n++)t.items[n].update();this.updating=!1;}},Yp.valueOf=function(){if(1===this.items.length)return this.items[0].valueOf();if(this.dirtyValue){var t={},e=oa(this.items,t,this.ractive._guid),n=Cs(e,t);this.value=n?n.value:this.toString(),this.dirtyValue=!1;}return this.value},Qp.prototype.getContext=sn,Qp.prototype.getKeypath=ha;var Jp=["template","partials","components","decorators","events"],Xp=Hn("reverse").path,tm=Hn("shift").path,em=Hn("sort").path,nm=Hn("splice").path,im=Hn("unshift").path,rm={add:dn,animate:gn,attachChild:jn,compute:Mn,detach:In,detachChild:Rn,find:Bn,findAll:Kn,findAllComponents:Ln,findComponent:Dn,findContainer:Fn,findParent:zn,fire:Jn,get:Xn,getLocalContext:ti,getContext:ni,insert:hi,link:ci,observe:yi,observeOnce:wi,off:xi,on:ki,once:_i,pop:$c,push:qc,readLink:Ei,render:da,reset:pa,resetPartial:va,resetTemplate:ga,reverse:Xp,set:ya,shift:tm,sort:em,splice:nm,subtract:ba,teardown:Ir,toggle:wa,toCSS:xa,toCss:xa,toHTML:ka,toHtml:ka,toText:_a,transition:Ea,unlink:Sa,unrender:Aa,unshift:im,update:Wn,updateModel:Ca,use:Oa},sm=[],am=/super\s*\(|\.call\s*\(\s*this/;if(Za(za,{sharedGet:{value:Ia},sharedSet:{value:Ma},styleGet:{configurable:!0,value:ja.bind(za)},styleSet:{configurable:!0,value:Li.bind(za)},addCSS:{configurable:!1,value:Ta.bind(za)},hasCSS:{configurable:!1,value:Pa.bind(za)}}),Ja&&!Ja.Ractive){var om="",um=document.currentScript||document.querySelector("script[data-ractive-options]");um&&(om=um.getAttribute("data-ractive-options")||""),~om.indexOf("ForceGlobal")&&(Ja.Ractive=za);}else Ja&&g("Ractive already appears to be loaded while loading 1.4.0.");return $a(za.prototype,rm,go),za.prototype.constructor=za,za.defaults=za.prototype,pl.defaults=za.defaults,pl.Ractive=za,Za(za,{DEBUG:{writable:!0,value:!0},DEBUG_PROMISES:{writable:!0,value:!0},extend:{value:Ba},extendWith:{value:Ka},escapeKey:{value:E},evalObjectString:{value:Cs},findPlugin:{value:Fa},getContext:{value:ei},getCSS:{value:Oi},isInstance:{value:Na},joinKeys:{value:pi},macro:{value:Da},normaliseKeypath:{value:S},parse:{value:Re},splitKeypath:{value:mi},unescapeKey:{value:C},use:{value:Ra},enhance:{writable:!0,value:!1},svg:{value:io},tick:{get:function(){return Nl&&Nl.promise}},VERSION:{value:"1.4.0"},adaptors:{writable:!0,value:{}},components:{writable:!0,value:{}},decorators:{writable:!0,value:{}},easing:{writable:!0,value:yo},events:{writable:!0,value:{}},extensions:{value:[]},helpers:{writable:!0,value:go.helpers},interpolators:{writable:!0,value:So},partials:{writable:!0,value:{}},transitions:{writable:!0,value:{}},cssData:{configurable:!0,value:{}},perComponentStyleElements:{get:Si,set:Si},sharedData:{value:Kl},Ractive:{value:za},Context:{value:zl.Context.prototype}}),Ha(za,"_cssModel",{configurable:!0,value:new lf(za)}),Ha(za.prototype,"rendered",{get:function(){return this.fragment&&this.fragment.rendered}}),za});

	!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).$={});}(window,(function(t){const e=Array.from,n=Reflect.apply,r=Object,o=r.keys,s=r.is,i=r.assign,c=r.getOwnPropertyDescriptor,a=r.defineProperty,l=r.getOwnPropertyNames,u=t=>o(t).length;function h(t){return void 0===t}function f(t){return null===t}function p(t){return !h(t)&&!f(t)}function d(t){return e=>!!p(e)&&e.constructor===t}const g=/\.|\+/,m=Array.isArray,y=d(String),b=d(Number),w=t=>!!p(t)&&"Object("===t.constructor.toString().trim().slice(9,16),A=t=>!!p(t)&&t instanceof Function,v=t=>Boolean(t.length),S=t=>e=>!!p(e)&&t.test(e),C=S(/\.css$/),j=S(/\.json$/),I=S(/\.js$/),O=S(/\.html$/),x=S(/\./),L=/\.([0-9a-z]+)/,E=t=>"Boolean"===t.constructor.name,F=t=>!!t&&t instanceof Promise,k=t=>!!t&&"AsyncFunction"===t.constructor?.name;const M=t=>m(t)&&t||p(t)&&[t]||[],R=t=>t.flat(1/0),T=t=>(t.length=0,t),N=Math,$=N.floor,B=N.random,D=(t,e=0)=>$(B()*(t-e))+e,U=(t,n=t.length)=>{if(t.length<=1)return e(t);const r=e(t);let o,s,i=0;for(;i<n;)o=D(r.length-1,0),s=r[i],r[i]=r[o],r[o]=s,i++;return r},P=Math.min;function z(t,e,n){const r=t.length;for(let o=0;o<r;o++)e(t[o],o,t,r,n);return t}function q(t,e,n){const r=t.length;for(let o=r-1;o>=0;o--)e(t[o],o,t,r,n);return t}function W(t,e,n){const r=t.length;for(let o=0;o<r;o++)if(!1===e(t[o],o,t,r,n))return !1;return !0}function H(t,e,n=[],r){return z(t,((t,o,s,i)=>{!0===e(t,o,n,s,i,r)&&n.push(t);})),n}function _(t,e,n=[],r){return z(t,((t,o,s,i)=>{n[o]=e(t,o,n,s,i,r);})),n}function K(t,e,n=[],r){return z(t,((t,o,s,i)=>{const c=e(t,o,n,s,i,r);p(c)&&n.push(c);})),n}const Z=(t,e,n=t.length)=>t.splice(e,n),J=(t,e)=>t.length===e.length&&W(t,((t,n)=>e[n]===t)),V=Math.max,G=async(t,e)=>{const n=t.length;for(let r=0;r<n;r++)await e(t[r],r,t,n);return t},Q=async(t,e)=>{const n=t.length;for(let r=n-1;r>=0;r--)await e(t[r],r,t,n);return t},X=async(t,e)=>{const n=[];return await G(t,(async(t,r,o)=>{n[r]=await e(t,r,o);})),n},Y=(t,e,n)=>n.indexOf(t)===e,tt=(t,e,n)=>t!==n[e-1],et=(t,e)=>e?t.filter(tt):t.filter(Y),nt=(t,e)=>t-e,rt=(t,e)=>e-t,ot=(t,e,n)=>{const r=n?t:0,o=n?e:t,s=n||e;for(let t=r;t<o;t++)s(t,r,o);},st=(t,e,n=!0)=>(n?t:[...t]).sort(((t,n)=>n[e]?t[e]?t[e]<n[e]?1:t[e]>n[e]?-1:0:1:-1)),it=(t,e="id",n=!0)=>(n?t:[...t]).sort(((t,n)=>n[e]?t[e]?t[e]<n[e]?-1:t[e]>n[e]?1:0:-1:1)),ct=(t,e)=>_(e,(e=>t[e])),at=(t,e,n,r,o)=>{if(t[o]===r)return !0},lt=(t,e)=>{z(o(t),((n,r,o,s)=>{e(t[n],n,t,s,o);}));},ut=(t,e)=>W(o(t),((n,r,o,s)=>e(t[n],n,t,s,o))),ht=(t,e,n={})=>(lt(t,((t,r,o,s,i)=>{!0===e(t,r,n,o,s,i)&&(n[r]=t);})),n),ft=(t,e,n={})=>(lt(t,((t,r,o,s,i)=>{n[r]=e(t,r,n,o,s,i);})),n),pt=(t,e,n={})=>(lt(t,((t,r,o,s,i)=>{const c=e(t,r,n,o,s,i);p(c)&&(n[r]=c);})),n),dt=(t,e)=>t.forEach(e),gt=(t,e)=>(n,r,o)=>{let s;if(p(n))return s=m(n)?t:w(n)||A(n)?e:n.forEach?dt:e,s(n,r,o)},mt=gt(W,ut),yt=gt(z,lt),bt=gt(H,ht),wt=gt(_,ft),At=gt(K,pt),vt=mt,St=(t,e)=>setTimeout(t,e),Ct=(t,e)=>setInterval(t,e),jt=(t,e)=>()=>{ot(0,t((()=>{}),0),(t=>{e(t);}));},It=jt(St,clearTimeout),Ot=jt(Ct,clearInterval),xt=(t,e)=>{const n=o(t);return W(e,(t=>n.includes(t)))},Lt=(t,e)=>{const n={};return z(t,((t,r)=>{n[t]=e[r];})),n},Et=async(t,e)=>{const n=o(t);return await G(n,((r,o,s,i)=>e(t[r],r,t,i,n))),t},Ft=/[-_]/g,kt=/ (.)/g,Mt=(t,e=1)=>t.substr(e),Rt=/%(?![\da-f]{2})/gi,Tt=/&/g,Nt=/</g,$t=/>/g,Bt=/"/g,Dt=t=>decodeURIComponent(t.replace(Rt,(()=>"%25"))),Ut=t=>t.replace(Tt,"&amp;").replace(Nt,"&lt;").replace($t,"&gt;").replace(Bt,"&quot;"),Pt=/\S+/g,zt=/\w+/g,qt=/ (.)/g,Wt=t=>t[0].toUpperCase(),Ht=t=>Wt(t)+Mt(t).toLowerCase(),_t=Reflect.construct;function Kt(t,e=[],n){return n?_t(t,e,n):_t(t,e)}const Zt=Object.create,Jt=(t,e,n=!1,r,s,i)=>{if(t){if(i){const o=i.pop();if(o){const r=e[o];t[o]=Jt(t[o],r,n);}else if(!s)return t;if(s){let o=r||0;if(o++,o<s)return Jt(t,e,n,o,s,i)}return Jt(t,e,n,null,null,i)}if(s){if(r<s){let o=r||0;const c=e[o];if(c){const r=t[o];if(n?t.push(Jt(r,c,n)):t[o]=Jt(r,c,n),o++,o<s)return Jt(t,e,n,o,s,i)}}}else {if(m(e))return 0===s?t:Jt(t,e,n,0,e.length);if(w(e)){const r=o(e);return Jt(t,e,n,null,null,r)}}}else {if(w(e))return i?Jt({},e,n,null,null,i):Jt({},e,n);if(m(e))return r<s?Jt([],e,n,r,s,i):Jt([],e,n)}return t||e},Vt=globalThis.structuredClone;t.clone=void 0,t.clone=Vt?t=>globalThis.structuredClone(t):t=>w(t)?Jt({},t):m(t)?Jt([],t):Zt(t);const Gt=Function.prototype;const Qt=(t,e)=>{if(t===e)return !0;if(t.toString()===e.toString())if(w(t)){const n=o(t);if(xt(e,n))return W(n,(n=>Qt(t[n],e[n])))}else if(m(t)&&t.length===e.length)return W(t,((t,n)=>Qt(t,e[n])));return !1},Xt=/\.|\[/,Yt=/]/g,te=t=>t.replace(Yt,"").split(Xt);let ee=0;const ne=[],re={};function oe(){let t=ne.shift(ne);return p(t)||(t=ee,re[t]=!0,ee++),t}oe.free=t=>{re[t]=null,ne.push(t);};const se=(t,e)=>{let n=e;return W(te(t),(t=>(n=n[t],p(n)))),n},ie=JSON,ce=ie.parse,ae=ie.stringify;class le{static models={};constructor(t,e){p(e)?(i(this,e),this.modelName=t,le.models.set(t,e)):i(this,t);}}const ue=t=>new Promise(t),he=t=>(...e)=>n=>{let r=n;return t(e,(t=>{r=t(r);})),r},fe=he(z),pe=he(q),de=t=>(...e)=>async n=>{let r=n;return await t(e,(async t=>{r=await t(r);})),r},ge=de(G),me=de(Q);class ye{constructor(t={}){this.items=t;}getItem(t){return this.items[t]}setItem(t,e){this.items[t]=e;}clear(){this.items={};}removeItem(t){this.items[t]=null;}}function be(){return new ye}const we=t=>t?we[t]:o(we),Ae=globalThis.navigator?.userAgentData;if(Ae)lt(Ae,((t,e)=>{E(t)&&t&&(we[e]=t);})),z(Ae.brands,(t=>{we[t.brand]=t.version;}));else if(navigator.userAgent){let t=navigator.userAgent.toLowerCase();t=t.replace(/_/g,"."),t=t.replace(/[#_,;()]/g,"");z(t.split(/ |\//),(t=>{we[t]=!0;}));}const ve=(t,...e)=>(t.addEventListener(...e),t),Se=document.createDocumentFragment.bind(document),Ce=(t,e)=>(t.appendChild(e),e),je=(t,e)=>m(e)?Lt(e,_(e,(e=>t.getAttribute(e)))):(lt(e,((e,n)=>{t.setAttribute(n,e);})),t),Ie=/^.[\w_-]+$/,Oe=/^[A-Za-z]+$/,xe=/\s/,Le=document.getElementsByClassName.bind(document),Ee=document.getElementsByTagName.bind(document),Fe=document.getElementById.bind(document),ke=document.querySelector.bind(document),Me=document.querySelectorAll.bind(document),Re=document.createElement.bind(document),Te=t=>{const e=x(t)&&t||`${t}.js`;return (t=>ue((e=>{ve(t,"load",e,!0),ve(t,"error",e,!0),Ce(ke("head"),t);})))(je(Re("script"),{async:"",src:e}))},Ne=t=>{const e=document.readyState;return "interactive"===e||"completed"===e||"complete"===e?!t||t():(t&&ve(document,"DOMContentLoaded",t),!1)};Ne((()=>{const t=Fe("AcidLib"),e=t&&t.getAttribute("data-index")||"/index";Te(e);}));const $e=location.protocol,Be="http:"===$e?"ws":"wss",De=location.hostname,Ue={hardware:{cores:navigator.hardwareConcurrency},host:{name:De,protocol:$e,protocolSocket:Be}},Pe=()=>{i(Ue,{bodyHeight:document.body.offsetHeight,bodyWidth:document.body.offsetWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth});},ze=()=>{Pe();};Ne(ze),ve(window,"load",ze,!0),ve(window,"resize",ze,!0),t.hasLocal=void 0,function(e){try{e().removeItem("TESTING"),t.hasLocal=!0;}catch(e){t.hasLocal=!1;}}((()=>localStorage));class qe{constructor(t){this.hasLocal&&(this.local=localStorage),this.storage=be();}hasLocal=t.hasLocal;setItem(t,e){return this.hasLocal&&this.local.setItem(t,y(e)?e:ae(e)),this.storage.setItem(t,e)}getItem(t){const e=this.storage.getItem(t);return p(e)?e:!p(e)&&this.hasLocal?this.local.getItem(t):void 0}clear(){this.hasLocal&&this.local.clear(),this.storage.clear();}removeItem(t){this.hasLocal&&this.local.removeItem(t),this.storage.removeItem(t);}}const We=(t,e)=>`color:${t};background:${e};`,He={alert:We("#fff","#f44336"),important:We("#fff","#E91E63"),notify:We("#fff","#651FFF"),warning:We("#000","#FFEA00")};t.Crate=qe,t.Model=le,t.VirtualStorage=ye,t.add=(t,e)=>t+e,t.after=(t,e)=>{let n,r=t;return (...t)=>(null!==r&&r--,r<=0&&(n=e(...t),r=null),n)},t.append=Ce,t.apply=n,t.arrayToObject=(t,e)=>{const n={};return z(t,((t,r)=>{n[e[r]]=t;})),n},t.ary=(t,e)=>(...n)=>t(...n.splice(0,e)),t.assign=i,t.assignDeep=Jt,t.asyncEach=async(t,e)=>{const n=t.length;for(let r=0;r<n;r++){const o=t[r];await o(e,r,t,n);}return t},t.before=(t,e)=>{let n,r=t;return (...t)=>(null!==r&&r--,r>=1?n=e(...t):r=null,n)},t.bindAll=(t,e)=>wt(t,(t=>A(t)?t.bind(e):t)),t.cacheNativeMethod=function(t){return Gt.call.bind(t)},t.camelCase=t=>t.toLowerCase().replace(kt,(t=>t.toUpperCase().replace(/ /g,""))),t.chain=t=>{const e=t=>(e.value=t,e.methods);return i(e,{add:t=>((t,e)=>(yt(e,((e,n)=>{t.methods[n]=(...n)=>(e(t.value,...n),t.methods);})),t))(e,t),done(){const t=e.value;return e.value=null,t},methods:{}}),e.add(t),e},t.chunk=(t,e=1)=>{const n=[];let r=0;return t.forEach(((t,o)=>{o%e||(n.push([]),o&&r++),n[r].push(t);})),n},t.chunkString=(t,e)=>t.match(new RegExp(`(.|[\r\n]){1,${e}}`,"g")),t.clear=T,t.clearIntervals=Ot,t.clearTimers=It,t.cloneArray=t=>t.slice(),t.cnsl=(t,e)=>{const n=y(t)?t:ae(t);if("alert"===e||"warning"===e)return console.trace(`%c${n}`,`${He[e]}font-size:13px;padding:2px 5px;border-radius:2px;`);console.log(`%c${n}`,`${He[e]}font-size:13px;padding:2px 5px;border-radius:2px;`);},t.cnslTheme=(t,e,n)=>{He[t]=We(e,n);},t.compact=t=>t.filter((t=>!(y(t)&&!t.length)&&t)),t.compactKeys=t=>{const e=[];return lt(t,((t,n)=>{t&&e.push(n);})),e},t.compactMap=At,t.compactMapArray=K,t.compactMapAsync=async(t,e)=>{const n=[];let r;return await G(t,(async(t,o,s)=>{r=await e(t,o,n,s),p(r)&&n.push(r);})),n},t.compactMapObject=pt,t.compactMapObjectAsync=async(t,e,n={})=>(await Et(t,(async(t,r,o,s,i)=>{const c=await e(t,r,n,s,i);p(c)&&(n[r]=c);})),n),t.construct=Kt,t.countBy=(t,e)=>{const n={};let r;return z(t,(t=>{r=e(t),n[r]||(n[r]=0),n[r]++;})),n},t.countKey=(t,e)=>{let n=0;return z(t,(t=>{t[e]&&n++;})),n},t.countWithoutKey=(t,e)=>{let n=0;return z(t,(t=>{t[e]||n++;})),n},t.crate=function(t){return new qe(t)},t.createFragment=Se,t.curry=(t,e=t.length)=>{const n=[],r=(...o)=>{if(n.push(...o),n.length===e){const e=t(...n);return T(n),e}return r};return r},t.curryRight=(t,e=t.length)=>{const n=[],r=(...o)=>{if(n.unshift(...o),n.length===e){const e=t(...n);return T(n),e}return r};return r},t.debounce=(t,e)=>{let n=!1;const r=(...r)=>{!1!==n&&clearTimeout(n),n=St((()=>{t(...r),n=!1;}),e);};return r.clear=()=>{n&&(clearTimeout(n),n=!1);},r},t.decimalCheck=g,t.deduct=t=>t-1,t.defineProperty=a,t.difference=(t,...e)=>{const n=R(e);return K(t,(t=>{if(!n.includes(t))return t}))},t.divide=(t,e)=>t/e,t.drop=Z,t.dropRight=(t,e,n=t.length)=>Z(t,0,n-e),t.each=yt,t.eachArray=z,t.eachArrayRight=q,t.eachAsync=G,t.eachAsyncRight=Q,t.eachObject=lt,t.eachObjectAsync=Et,t.eachWhile=mt,t.ensureArray=M,t.eventAdd=ve,t.eventRemove=(t,...e)=>(t.removeEventListener(...e),t),t.every=vt,t.filter=bt,t.filterArray=H,t.filterObject=ht,t.findIndex=(t,e,n="id")=>{const r=t.findIndex(((t,r)=>at(t,0,0,e,n)));return -1!==r&&r},t.findItem=(t,e,n="id")=>{const r=t.find(((t,r)=>at(t,0,0,e,n)));return -1!==r&&r},t.first=(t,e)=>e?t.slice(0,e):t[0],t.flatten=(t,e=1)=>{let n=t;for(let t=0;t<e;t++)n=n.reduce(((t,e)=>t.concat(M(e))),[]);return n},t.flattenDeep=R,t.flow=fe,t.flowAsync=ge,t.flowAsyncRight=me,t.flowRight=pe,t.get=se,t.getByClass=Le,t.getById=Fe,t.getByTag=Ee,t.getExtensionRegex=L,t.getFileExtension=t=>{const e=t.match(L);if(e)return e[1]},t.getNewest=(t,e)=>st(t,e,!1)[0],t.getOldest=(t,e="id")=>it(t,e)[0],t.getOwnPropertyDescriptor=c,t.getOwnPropertyNames=l,t.groupBy=(t,e)=>{const n={};return z(t,(t=>{const r=e(t);n[r]||(n[r]=[]),n[r].push(t);})),n},t.has=(t,...e)=>t.includes(...e),t.hasAnyKeys=(t,e)=>{const n=o(t);return Boolean(e.find((t=>n.includes(t))))},t.hasDot=x,t.hasKeys=xt,t.hasLength=v,t.hasValue=p,t.htmlEntities=Ut,t.ifInvoke=(t,...e)=>{if(A(t))return t(...e)},t.ifNotEqual=(t,e,n)=>(e&&!p(t[e])&&(t[e]=n),t),t.importjs=Te,t.inAsync=async(t,e)=>G(t,(async t=>{await t(e);})),t.inSync=(t,e)=>yt(t,(t=>{t(e);})),t.increment=t=>t+1,t.indexBy=(t,e="id")=>{const n={};return z(t,(t=>{n[t[e]]=t;})),n},t.info=Ue,t.initial=t=>t.slice(0,t.length-1),t.initialString=(t,e=1)=>t.slice(0,-1*e),t.insertInRange=(t,e,n)=>t.slice(0,e)+n+t.slice(e,t.length),t.intersect=(t,...e)=>K(t,(t=>{if(W(e,(e=>e.includes(t))))return t})),t.interval=Ct,t.invert=(t,e={})=>(lt(t,((t,n)=>{e[t]=n;})),e),t.invoke=(t,e,n)=>_(t,((t,r)=>t[e](n,r))),t.invokeAsync=(t,e,n)=>X(t,(async(t,r)=>t[e](n,r))),t.is=s,t.isAgent=we,t.isArguments=function(t){return !!p(t)&&"[object Arguments]"===t.toString()},t.isArray=m,t.isAsync=k,t.isBoolean=E,t.isBuffer=function(t){return !!p(t)&&"ArrayBuffer"===t.constructor?.name},t.isConstructor=d,t.isDate=t=>t instanceof Date,t.isDecimal=t=>g.test(t.toString()),t.isDocumentReady=Ne,t.isDom=t=>t&&9!==t.nodeType,t.isEmpty=t=>y(t)||m(t)?!v(t):w(t)?!u(t):!p(t),t.isEnter=t=>13===t.keyCode,t.isEqual=Qt,t.isFileCSS=C,t.isFileHTML=O,t.isFileJS=I,t.isFileJSON=j,t.isFloat32=function(t){return !!p(t)&&"Float32Array"===t.constructor?.name},t.isFloat64=function(t){return !!p(t)&&"Float64Array"===t.constructor?.name},t.isFunction=A,t.isHTMLCollection=function(t){return !!p(t)&&"[object HTMLCollection]"===t.toString()},t.isInt16=function(t){return !!p(t)&&"Int16Array"===t.constructor?.name},t.isInt32=function(t){return !!p(t)&&"Int32Array"===t.constructor?.name},t.isInt8=function(t){return !!p(t)&&"Int8Array"===t.constructor?.name},t.isKindAsync=t=>!!t&&(F(t)||k(t)),t.isMap=function(t){return !!p(t)&&"[object Map]"===t.toString()},t.isMatchArray=J,t.isMatchObject=(t,e)=>{const n=o(t);return !!J(n,o(e))&&W(n,(n=>t[n]===e[n]))},t.isNodeList=function(t){return !!p(t)&&"[object NodeList]"===t.toString()},t.isNull=f,t.isNumber=b,t.isNumberEqual=(t,e)=>t===e,t.isNumberInRange=(t,e,n)=>t>e&&t<n,t.isPlainObject=w,t.isPrimitive=t=>{const e=typeof t;return null==t||"object"!==e&&"function"!==e},t.isPromise=F,t.isRegExp=t=>t instanceof RegExp,t.isSet=function(t){return !!p(t)&&"[object Set]"===t.toString()},t.isString=y,t.isUint16=function(t){return !!p(t)&&"Uint16Array"===t.constructor?.name},t.isUint32=function(t){return !!p(t)&&"Uint32Array"===t.constructor?.name},t.isUint8=function(t){return !!p(t)&&"Uint8Array"===t.constructor?.name},t.isUint8Clamped=function(t){return !!p(t)&&"Uint8ClampedArray"===t.constructor?.name},t.isUndefined=h,t.isWeakMap=function(t){return !!p(t)&&"[object WeakMap]"===t.toString()},t.isZero=t=>0===t,t.jsonParse=ce,t.kebabCase=t=>t.replace(Ft," ").trim().toLowerCase().replace(kt,"-$1"),t.keys=o,t.largest=t=>V(...t),t.last=(t,e)=>{const n=t.length;return e?t.slice(n-e,n):t[n-1]},t.map=wt,t.mapArray=_,t.mapArrayRight=function(t,e,n=[],r){let o=0;const s=t.length;for(let i=s-1;i>=0;i--)n[o]=e(t[i],i,t,s,r),o++;return n},t.mapAsync=X,t.mapObject=ft,t.mapObjectAsync=async(t,e,n={})=>(await Et(t,(async(t,r,o,s,i)=>{n[r]=await e(t,r,n,o,s,i);})),n),t.mapWhile=function(t,e,n=[],r){const o=t.length;for(let s=0;s<o;s++){const i=t[s];if(!1===e(i,s,n,t,o,r))break;n[s]=i;}return n},t.minus=(t,e)=>t-e,t.model=function(t,e){return p(e)?Kt(le,[t,e]):se(t,le.models)},t.multiply=(t,e)=>t*e,t.negate=t=>(...e)=>!t(...e),t.nodeAttribute=je,t.noop=()=>{},t.nthArg=(t=0)=>(...e)=>e[t],t.numSort=t=>t.sort(nt),t.numericalCompare=nt,t.numericalCompareReverse=rt,t.objectCreate=Zt,t.objectSize=u,t.omit=(t,e)=>ht(t,((t,n)=>!e.includes(n))),t.once=t=>{let e;return (...n)=>(p(e)||(e=t(...n)),e)},t.over=t=>(...e)=>wt(t,(t=>t(...e))),t.overEvery=t=>(...e)=>mt(t,(t=>t(...e))),t.partition=(t,e)=>{const n=[];return [K(t,(t=>{if(e(t))return t;n.push(t);})),n]},t.pick=(t,e,n={})=>(z(e,(e=>{n[e]=t[e];})),n),t.pluck=(t,e)=>_(t,(t=>t[e])),t.pluckObject=ct,t.pluckValues=(t,e)=>_(t,(t=>ct(t,e))),t.promise=ue,t.propertyMatch=(t,e,n=o(t))=>W(n,(n=>Qt(t[n],e[n]))),t.querySelector=ke,t.querySelectorAll=Me,t.rNumSort=t=>t.sort(rt),t.randomArbitrary=(t,e=0)=>B()*(t-e)+e,t.randomInt=D,t.range=(t,e,n=1)=>t<e?((t,e,n)=>{const r=[];let o=t;for(;o<e;)r.push(o),o+=n;return r})(t,e,n):((t,e,n)=>{const r=n<0?-1*n:n,o=[];let s=t;for(;s>e;)o.push(s),s-=r;return o})(t,e,n),t.rawURLDecode=Dt,t.reArg=(t,e)=>(...n)=>t(...e.map((t=>n[t]))),t.regexGenerator=S,t.remainder=(t,e)=>t%e,t.remove=(t,e)=>{let n=t.length;for(let r=0;r<n;r++){const o=t[r];e.includes(o)&&(t.splice(r,1),r--,n--);}return t},t.removeBy=(t,e)=>{let n=t.length;for(let r=0;r<n;r++){e(t[r],r)&&(t.splice(r,1),r--,n--);}return t},t.replaceList=(t,e,n)=>t.replace(new RegExp(`\\b${e.join("|")}\\b`,"gi"),n),t.rest=t=>t.slice(1,t.length),t.restString=Mt,t.right=(t,e)=>t[t.length-1-e],t.rightString=(t,e=1)=>t[t.length-e],t.sample=(t,e=1)=>{if(!t)return !1;const n=t.length;if(n===e||e>n)return U(t);if(1===e)return [t[D(n-1,0)]];const r=[],o={};let s,i=0;for(;i<e;)s=D(t.length-1,0),o[s]||(r.push(t[s]),o[s]=!0,i++);return r},t.sanitize=t=>Ut(Dt(t)),t.saveDimensions=Pe,t.selector=t=>{switch(t[0]){case"#":if(!xe.test(t))return Fe(Mt(t));break;case".":if(Ie.test(t))return Le(Mt(t));break;default:if(Oe.test(t))return Ee(t)}return Me(t)},t.shuffle=U,t.smallest=t=>P(...t),t.snakeCase=t=>t.replace(Ft," ").trim().toLowerCase().replace(kt,"_$1"),t.sortAlphabetical=(t,e)=>t.sort(((t,n)=>{const r=t[e],o=n[e];return r<o?-1:r>o?1:0})),t.sortNewest=st,t.sortOldest=it,t.sortedIndex=(t,e)=>{let n=0;return W(t,((t,r)=>(n=r,e>t))),n},t.stringify=ae,t.stubArray=()=>[],t.stubFalse=()=>!1,t.stubObject=()=>({}),t.stubString=()=>"",t.stubTrue=()=>!0,t.sum=t=>t.reduce(((t,e)=>t+e),0),t.take=(t,e=1)=>t.slice(0,e),t.takeRight=(t,e=1)=>{const n=t.length;return t.slice(n-e,n)},t.themes=He,t.throttle=(t,e)=>{let n,r=!1;const o=(...o)=>{r?n=!0:(t(...o),r=St((()=>{n&&t(...o),r=!1;}),e));};return o.clear=()=>{clearTimeout(r),r=!1;},o},t.timer=St,t.times=ot,t.timesMap=(t,e,n,r=[])=>{const o=n?t:0,s=n?e:t,i=n||e;let c;return ot(o,s,(t=>{c=i(t,o,s,r),p(c)&&r.push(c);})),r},t.toArray=e,t.toPath=te,t.toggle=(t,e=!0,n=!1)=>Qt(e,t)?n:e,t.tokenize=t=>t.match(Pt)||[],t.truncate=(t,e)=>{const n=t.length;return n>e?((t,e,n)=>{const r=t.split(""),o=r.length;let s,i=n-e;for(;i<o&&i>=0&&(s=r[i]," "!==s);i--);return t.slice(0,i).trim()})(t,e,n):t},t.truncateRight=(t,e)=>{const n=t.length;return n>e?((t,e,n)=>{const r=t.split(""),o=r.length;let s,i=e;for(;i<o&&i>0&&(s=r[i]," "!==s);i++);return t.substr(i,n).trim()})(t,e,n):t},t.uid=oe,t.unZip=t=>t[0].map(((e,n)=>t.map((t=>t[n])))),t.unZipObject=t=>{const e=[],n=[];return lt(t,((t,r)=>{e.push(r),n.push(t);})),[e,n]},t.union=(...t)=>et(R(t)),t.unique=et,t.updateDimensions=ze,t.upperCase=t=>t.replace(Ft," ").trim().toUpperCase(),t.upperFirst=t=>Wt(t)+Mt(t),t.upperFirstAll=t=>t.replace(qt,(t=>t.toUpperCase())),t.upperFirstLetter=Wt,t.upperFirstOnly=Ht,t.upperFirstOnlyAll=t=>Ht(t.toLowerCase()).replace(qt,(t=>t.toUpperCase())),t.virtualStorage=be,t.whileArray=W,t.whileCompactMap=function(t,e,n=[],r){let o=0;for(;o<t.length;){const s=n.push(e(t[o],o,t,t.length,r));o++,p(s)&&n.push(s);}return t},t.whileEachArray=function(t,e,n){let r=0;for(;r<t.length;)e(t[r],r,t,t.length,n),r++;return t},t.whileMapArray=function(t,e,n=[],r){let o=0;for(;o<t.length;)n.push(e(t[o],o,t,t.length,r)),o++;return t},t.whileObject=ut,t.without=(t,e)=>t.filter((t=>!e.includes(t))),t.words=t=>t.match(zt)||[],t.wrap=(t,e)=>(...n)=>e(t,...n),t.xor=(...t)=>{const e=[];return z(t,(t=>{z(et(t),(t=>{e.includes(t)?e.splice(e.indexOf(t),1):e.push(t);}));})),e},t.zip=(...t)=>t[0].map(((e,n)=>t.map((t=>t[n])))),t.zipObject=Lt,Object.defineProperty(t,"__esModule",{value:!0});}));

	(function() {
		const {
			isPlainObject: isPlainObject$3, virtualStorage, crate: crate$4, hasValue: hasValue$6
		} = $;
		const app = {
			events: {},
			async start(data) {
				await Ractive.sharedSet('components', {
					dynamic: {},
					layout: {},
					main: {}
				});
				Ractive.sharedData.$ = $;
				return app.workerRequest('configure', data);
			},
			log: console.log,
			security: {
				clear() {
					app.log('Cleanup');
					app.crate.clear();
				}
			},
			get app() {
				return this;
			},
			componentStore(keyPath, keyValue) {
				if (hasValue$6(keyValue)) {
					return Ractive.sharedSet(keyPath, keyValue);
				} else if (isPlainObject$3(keyPath)) {
					return Ractive.sharedSet(keyPath);
				}
				return Ractive.sharedGet(keyPath);
			},
			store: virtualStorage(),
			crate: crate$4(),
			utility: $,
			modules: {}
		};
		app.imported = {
			get app() {
				return app;
			}
		};
		window.appGlobal = app;
		const isEventNodeMethod = (componentEvent) => {
			if (!componentEvent || !componentEvent.original || !componentEvent.original.target) {
				return false;
			}
			return componentEvent.node === componentEvent.original.target;
		};
		app.isEventNode = isEventNodeMethod;
		const {
			last: last$2, first
		} = app.utility;
		const isLang = new RegExp(/^language\//);
		const languagePath = (filePath) => {
			let filePathCompiled = filePath;
			if (!isLang.test(filePathCompiled)) {
				if (first(filePathCompiled) !== '/') {
					filePathCompiled = `/${filePathCompiled}`;
				}
				filePathCompiled = `language${filePathCompiled}`;
			}
			if (last$2(filePathCompiled) !== '/') {
				filePathCompiled = `${filePathCompiled}/`;
			}
			return `${filePathCompiled}${app.systemLanguage}.json`;
		};
		app.languagePath = languagePath;
		const {
			utility: {
				hasValue: hasValue$5, promise: promise$1, uid, isString: isString$7
			}
		} = app;
		const mainWorker = new Worker('/assets/worker.js');
		const workerRequest = async (task, dataArg) => {
			// console.log(task, dataArg);
			let compiledRequest;
			let callbackOptional;
			if (dataArg) {
				compiledRequest = {
					data: dataArg,
					task
				};
			} else {
				compiledRequest = task;
				callbackOptional = task.callback;
			}
			const requestObject = {
				data: compiledRequest.data,
				task: compiledRequest.task
			};
			if (requestObject.data.id) {
				return mainWorker.postMessage(requestObject);
			}
			const uniq = uid();
			console.log(uniq);
			requestObject.id = uniq;
			const results = await promise$1((accept) => {
				app.events[uniq] = async function(responseData) {
					console.log(responseData);
					if (callbackOptional) {
						await callbackOptional(responseData);
					}
					accept(responseData);
				};
				mainWorker.postMessage(requestObject);
			});
			// console.log('workerRequest', results);
			return results;
		};
		const workerMessage = (workerEvent) => {
			// console.log(workerEvent.data);
			const eventData = workerEvent.data;
			const {
				id, data
			} = eventData;
			let generatedId = id;
			if (!hasValue$5(generatedId)) {
				generatedId = '_';
			}
			if (!app.events[generatedId]) {
				console.log('Event Missing', generatedId);
			}
			// console.log(app.events[generatedId], data);
			app.events[generatedId](data);
			if (!eventData.keep && !isString$7(generatedId)) {
				// console.log('DONT KEEP', eventData, generatedId);
				app.events[generatedId] = null;
				uid.free(generatedId);
			}
		};
		mainWorker.onmessage = (workerEvent) => {
			return workerMessage(workerEvent);
		};
		app.workerRequest = workerRequest;
		const {
			imported: imported$1,
			crate: crate$3,
			utility: {
				assign: assign$7,
				querySelector: querySelector$2,
				map: map$2,
				hasValue: hasValue$4,
				isString: isString$6,
				jsonParse,
				isFileJS,
				isFileJSON,
				isFileCSS
			}
		} = app;
		const headNode$1 = querySelector$2('head');
		const styleNode = document.createElement('style');
		const iJson = (contents) => {
			if (contents) {
				return jsonParse(contents);
			}
			return {};
		};
		const isLibRegex = /(^js\/lib\/)|(\.min\.js)/;
		const checksumData$1 = (item) => {
			const checksumString = crate$3.getItem(`cs-${item}`);
			if (checksumString) {
				const checksum = jsonParse(checksumString);
				if (checksum) {
					return checksum;
				}
			}
		};
		app.checksumData = checksumData$1;
		const checksumReturn = (item) => {
			const checksumString = crate$3.getItem(`cs-${item}`);
			if (checksumString) {
				const checksum = jsonParse(checksumString);
				if (checksum?.cs) {
					return checksum.cs;
				}
			}
		};
		const constructStyleTagThenAppendToHead = (text, filePath) => {
			const node = styleNode.cloneNode(false);
			node.textContent = text;
			node.setAttribute('data-src', filePath);
			headNode$1.appendChild(node);
			return node;
		};
		/*
		When all the required items have been downloaded
		*/
		const getLoadedAssets = (item) => {
			return imported$1[item];
		};
		const getCompleted = async (config) => {
			const {
				callback, data
			} = config;
			const assetCollection = map$2(data, getLoadedAssets);
			callback(...assetCollection);
		};
		const checkIfCompleted = (config) => {
			if (!config.done && config.filesLoaded === config.fileCount) {
				config.done = true;
				getCompleted(config);
			}
		};
		async function hotloadJS$1(fileContents, filePath) {
			const lastSlash = filePath.lastIndexOf('/') + 1;
			const filename = filePath.substring(lastSlash, filePath.length);
			const dirname = filePath.substring(0, lastSlash);
			const emulateImport = `Object.assign(import.meta, {path:'${dirname}',filePath:'${filePath}', filename:'${filename}'});\n`;
			let scriptRaw = new File([emulateImport, fileContents], filePath, {
				type: 'text/javascript'
			});
			let fileBlob = URL.createObjectURL(scriptRaw);
			const moduleExports = assign$7({}, await import(fileBlob));
			URL.revokeObjectURL(fileBlob);
			imported$1[filePath] = moduleExports;
			fileBlob = null;
			scriptRaw = null;
			return moduleExports;
		}
		app.hotloadJS = hotloadJS$1;
		async function hotloadLocalJS(dirname) {
			const fileContents = crate$3.getItem(dirname);
			if (fileContents) {
				return hotloadJS$1(fileContents, dirname);
			}
		}
		app.hotloadLocalJS = hotloadLocalJS;
		const saveCompleted = async (json, config) => {
			const {
				file, cs, key
			} = json;
			const {
				appendCSS, data
			} = config;
			const filePath = data[key];
			const isJs = isFileJS(filePath);
			const isCss = isFileCSS(filePath);
			const isJson = isFileJSON(filePath);
			let fileContents = file;
			if (fileContents === true) {
				if (!imported$1[filePath]) {
					fileContents = crate$3.getItem(filePath);
				}
			} else if (fileContents !== false) {
				if (app.debug) {
					console.log('SAVE FILE TO LOCAL', filePath);
				}
				crate$3.setItem(`cs-${filePath}`, {
					cs,
					time: Date.now()
				});
				crate$3.setItem(filePath, fileContents);
			}
			if (!hasValue$4(imported$1[filePath]) || fileContents !== true) {
				if (!isJs) {
					if (fileContents === false) {
						imported$1[filePath] = {};
					} else {
						imported$1[filePath] = isJson ? iJson(fileContents) : fileContents;
					}
				} else if (fileContents) {
					if (isLibRegex.test(filePath)) {
						let scriptRaw = new File([fileContents], filePath, {
							type: 'text/javascript'
						});
						let fileBlob = URL.createObjectURL(scriptRaw);
						imported$1[filePath] = await import(fileBlob);
						URL.revokeObjectURL(fileBlob);
						fileBlob = null;
						scriptRaw = null;
					} else {
						if (imported$1[filePath]) {
							config.filesLoaded++;
							return checkIfCompleted(config);
						}
						const lastSlash = filePath.lastIndexOf('/') + 1;
						const filename = filePath.substring(lastSlash, filePath.length);
						const dirname = filePath.substring(0, lastSlash);
						const emulateImport = `Object.assign(import.meta, {path:'${dirname}',filePath:'${filePath}',filename:'${filename}'});\n`;
						let scriptRaw = new File([emulateImport, fileContents], filePath, {
							type: 'text/javascript'
						});
						let fileBlob = URL.createObjectURL(scriptRaw);
						const moduleExports = assign$7({}, await import(fileBlob));
						URL.revokeObjectURL(fileBlob);
						config.filesLoaded++;
						imported$1[filePath] = moduleExports;
						fileBlob = null;
						scriptRaw = null;
						return checkIfCompleted(config);
					}
				}
			}
			if (isCss && appendCSS && isString$6(imported$1[filePath])) {
				constructStyleTagThenAppendToHead(imported$1[filePath], filePath);
				imported$1[filePath] = true;
			}
			{
				config.filesLoaded++;
				return checkIfCompleted(config);
			}
		};
		const fetchFile = async (config) => {
			const configData = config.data;
			config.filesLoaded = 0;
			config.fileCount = config.data.length;
			await workerRequest({
				async callback(json) {
					if (hasValue$4(json.file)) {
						await saveCompleted(json, config);
					} else {
						return checkIfCompleted(config);
					}
				},
				data: {
					body: {
						cs: map$2(configData, checksumReturn),
						files: configData
					}
				},
				task: 'socket.get'
			});
		};
		assign$7(app, {
			fetchFile
		});
		const {
			utility: {
				assign: assign$6,
				hasDot,
				promise,
				last: last$1,
				map: map$1,
				isString: isString$5,
				isPlainObject: isPlainObject$2,
				each: each$6,
				cnsl: cnsl$3,
				isArray: isArray$2,
				isNumber,
				mapAsync: mapAsync$1,
				compact
			},
			imported,
			crate: crate$2,
			checksumData,
			hotloadJS
		} = app;
		const buildFilePath$1 = (itemArg) => {
			let item = itemArg;
			if (item[0] !== '/') {
				item = `/${item}`;
			}
			if (!hasDot(item)) {
				if (last$1(item) === '/') {
					item += 'index.js';
				}
			}
			return item;
		};
		const singleDemand = (items) => {
			return items[0];
		};
		const objectDemand = (items, arrayToObjectMap) => {
			return map$1(arrayToObjectMap, (item) => {
				if (isPlainObject$2(item)) {
					return item;
				}
				return items[item];
			});
		};
		const multiDemand = (items) => {
			return items;
		};
		const streamAssets = (data, options) => {
			return promise((accept) => {
				fetchFile(
					assign$6(
						{
							callback(...args) {
								accept(args);
							},
							data
						},
						options
					)
				);
			});
		};
		const demand$4 = async (files, options) => {
			const remoteImport = [];
			const localImport = [];
			const compiledImports = [];
			let results;
			let demandType;
			let arrayToObjectMap;
			if (isPlainObject$2(files)) {
				demandType = objectDemand;
				arrayToObjectMap = {};
				each$6(files, (item, key) => {
					if (isPlainObject$2(item)) {
						arrayToObjectMap[key] = item;
					} else {
						arrayToObjectMap[key] = remoteImport.push(buildFilePath$1(item)) - 1;
					}
				});
			} else if (isString$5(files)) {
				demandType = singleDemand;
				if (isPlainObject$2(files)) {
					localImport.push(files);
				} else {
					localImport.push(remoteImport.push(buildFilePath$1(files)) - 1);
				}
			} else if (isArray$2(files)) {
				demandType = multiDemand;
				each$6(files, (item) => {
					if (isPlainObject$2(item)) {
						localImport.push(item);
					} else {
						localImport.push(remoteImport.push(buildFilePath$1(item)) - 1);
					}
				});
			}
			if (remoteImport.length) {
				results = await streamAssets(remoteImport, options);
			}
			cnsl$3('importing', 'notify');
			if (!arrayToObjectMap) {
				each$6(localImport, (item, index) => {
					if (isNumber(item)) {
						compiledImports[index] = results[item];
					} else {
						compiledImports[index] = item;
					}
				});
			}
			// console.log(results, demandType, compiledImports, localImport, remoteImport);
			return demandType(compiledImports, arrayToObjectMap);
		};
		function buildFilePathType(item, type, options) {
			let filePath = item;
			if (filePath[0] !== '/') {
				filePath = `/${filePath}`;
			}
			console.log('BUILD PATH DEMAND', item, type, options);
			if (options) {
				const { path } = options;
				const pathArray = compact(path.split('/'));
				const pathArrayLength = pathArray.length - 1;
				const matches = filePath.match(/\.\.\//g);
				if (matches) {
					filePath = pathArray.slice(0, pathArrayLength - matches.length + 1).join('/') + filePath.replace(/\.\.\//g, '');
				}
				if (filePath.substring(0, 3) === '/./') {
					filePath = path + filePath.substring(3);
				}
			}
			if (!hasDot(filePath)) {
				if (last$1(filePath) === '/') {
					filePath += `index.${type}`;
				} else {
					filePath += `.${type}`;
				}
			}
			if (options) {
				console.log('BUILT PATH', filePath, options);
			}
			return filePath;
		}
		async function getCacheFromLocal(filePath, type) {
			if (imported[filePath]) {
				return imported[filePath];
			}
			if (type.match(/css|html/)) {
				const crateCache = imported[filePath];
				if (crateCache) {
					return crateCache;
				} else {
					const cacheTimeElapsed = checksumData(filePath);
					if (cacheTimeElapsed) {
						const timeElapsed = Date.now() - cacheTimeElapsed.time;
						// console.log(timeElapsed, app.cacheExpire);
						if (timeElapsed <= app.cacheExpire) {
							const localstoredCache = crate$2.getItem(filePath);
							if (localstoredCache) {
								imported[filePath] = localstoredCache;
								return localstoredCache;
							}
						}
					}
				}
			} else {
				const localstoredCache = crate$2.getItem(filePath);
				// console.log(filePath, localstoredCache);
				if (localstoredCache && isString$5(localstoredCache)) {
					const cacheTimeElapsed = checksumData(filePath);
					if (cacheTimeElapsed) {
						const timeElapsed = Date.now() - cacheTimeElapsed.time;
						if (timeElapsed <= app.cacheExpire) {
							try {
								const hotModule = await hotloadJS(localstoredCache, filePath);
								if (hotModule) {
									return hotModule;
								}
							} catch (err) {
								crate$2.removeItem(filePath);
							}
						}
					}
				}
			}
		}
		function demandTypeMethod(type, optionsFunction) {
			return async function(filesArg, options) {
				let files = filesArg;
				if (optionsFunction) {
					optionsFunction(options);
				}
				if (isString$5(files)) {
					if (imported[files]) {
						return imported[files];
					}
					files = buildFilePathType(files, type, options);
					const localstoredCache = await getCacheFromLocal(files, type);
					if (localstoredCache) {
						return localstoredCache;
					}
				} else {
					files = await mapAsync$1(files, async (item) => {
						if (imported[item]) {
							return imported[item];
						}
						const compiledFileName = buildFilePathType(item, type, options);
						const localstoredCache = await getCacheFromLocal(compiledFileName, type);
						if (localstoredCache) {
							return localstoredCache;
						}
						app.log('Demand Type', type, compiledFileName, options);
						return compiledFileName;
					});
				}
				return demand$4(files, options);
			};
		}
		const demandCss$1 = demandTypeMethod('css', (appendCSS) => {
			return {
				appendCSS
			};
		});
		const demandJs$2 = demandTypeMethod('js');
		const demandHtml$1 = demandTypeMethod('html');
		assign$6(app.events, {
			async ready(data) {
				cnsl$3('Worker is Ready', 'notify');
				app.systemLanguage = data.language;
				try {
					await demandJs$2('/app/index.js');
				} catch (error) {
					console.log(error);
					crate$2.clear();
					window.location.reload();
				}
			}
		});
		assign$6(app, {
			demand: demand$4,
			demandCss: demandCss$1,
			demandHtml: demandHtml$1,
			demandJs: demandJs$2
		});
		const { assign: assign$5 } = app.utility;
		const request = async (task, body) => {
			const requestPackage = body ?
				{
					body,
					task
				} :
				task;
			const workerPackage = {
				data: {
					data: requestPackage
				},
				task: 'socket.request'
			};
			if (requestPackage.id) {
				workerPackage.data.id = requestPackage.id;
			}
			const results = await workerRequest(workerPackage);
			console.log('request', results.body);
			if (results) {
				return results.body || results;
			}
		};
		assign$5(app, {
			request
		});
		const {
			utility: {
				assign: assign$4,
				cnsl: cnsl$2,
				eachAsync: eachAsync$2,
				isString: isString$4,
				hasValue: hasValue$3,
				isRegExp: isRegExp$1,
				drop: drop$1
			}
		} = app;
		cnsl$2('Initializing watchers module.', 'notify');
		class Watcher {
	    static containerRegex = [];
	    static containerPrimary = {};
	    static status = true;
	    static start() {
	    	Watcher.status = true;
	    }
	    static stop() {
	    	Watcher.status = false;
	    }
	    static async update(pushUpdate) {
	    	console.log(pushUpdate);
	    	const { body } = pushUpdate;
	    	if (!Watcher.status || !body) {
	    		return;
	    	}
	    	const {
	    		type, path
	    	} = body;
	    	const levelObject = Watcher.containerPrimary[type] || Watcher.containerPrimary[path];
	    	await eachAsync$2(Watcher.containerRegex, async (watcher) => {
	    		if (watcher.eventName.test(type) || watcher.eventName.test(path)) {
	    			return watcher.eventAction(body);
	    		}
	    	});
	    	if (levelObject) {
	    		await eachAsync$2(levelObject, async (watcher) => {
	    			return watcher.eventAction(body);
	    		});
	    	}
	    }
	    constructor(eventName, eventAction) {
	    	if (isString$4(eventName)) {
	    		if (!Watcher.containerPrimary[eventName]) {
	    			Watcher.containerPrimary[eventName] = [];
	    		}
	    		this.eventType = 'string';
	    	} else if (isRegExp$1(eventName)) {
	    		this.eventType = 'regex';
	    	}
	    	this.eventName = eventName;
	    	this.eventAction = eventAction.bind(this);
	    	this.start();
	    }
	    container() {
	    	if (this.eventType === 'string') {
	    		return Watcher.containerPrimary[this.eventName];
	    	} else if (this.eventType === 'regex') {
	    		return Watcher.containerRegex;
	    	}
	    }
	    isWatcher = true;
	    eventAction;
	    id;
	    active;
	    start() {
	    	if (!hasValue$3(this.id)) {
	    		this.id = this.container().push(this) - 1;
	    		this.active = true;
	    	}
	    }
	    stop() {
	    	if (hasValue$3(this.id)) {
	    		drop$1(this.container(), this.id);
	    		this.id = null;
	    		this.active = false;
	    	}
	    }
		}
		function watch$3(...args) {
			return new Watcher(...args);
		}
		const pushID = '_';
		const push = (task, body) => {
			return request({
				body,
				id: pushID,
				task
			});
		};
		assign$4(app.events, {
			_(pushUpdate) {
				return Watcher.update(pushUpdate);
			}
		});
		assign$4(app, {
			push,
			watch: watch$3,
			Watcher
		});
		const { utility: { drop } } = app;
		const notifications = [];
		const spawnNotification = (data) => {
			if (app.notificationStatus) {
				const notification = new Notification(
					data.title,
					{
						body: data.body,
						icon: data.icon
					},
					data.options
				);
				const number = notifications.push(notification) - 1;
				setTimeout(() => {
					notification.close();
					drop(notifications, number, 1);
				}, data.time || 4000);
				return notification;
			}
		};
		app.notify = async (data) => {
			if (Notification.permission === 'granted') {
				return spawnNotification(data);
			} else if (Notification.permission !== 'denied') {
				const permission = await Notification.requestPermission();
				if (permission === 'granted') {
					spawnNotification({
						body: 'enabled',
						title: 'Notifications'
					});
				}
			}
		};
		const {
			utility: {
				debounce, eventAdd: eventAdd$1, isAgent, compactKeys, pluckObject
			},
			componentStore
		} = app;
		async function updateResize() {
			app.utility.saveDimensions();
			const info = app.utility.info;
			await componentStore(info);
			const orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
			const width = info.windowWidth;
			const height = info.windowHeight;
			let widthLevel = 0;
			let screenSize;
			if (width < 640) {
				screenSize = 'miniScreen';
			} else if (width < 740) {
				screenSize = 'tinyScreen';
				widthLevel = 1;
			} else if (width < 1024) {
				screenSize = 'smallScreen';
				widthLevel = 2;
			} else if (width < 1920) {
				screenSize = 'mediumScreen';
				widthLevel = 3;
			} else if (width < 3000) {
				screenSize = 'hdScreen';
				widthLevel = 4;
			} else if (width > 3000) {
				screenSize = '4kScreen';
				widthLevel = 5;
			}
			console.log(screenSize);
			await componentStore('classList.screenSize', screenSize);
			await componentStore('widthLevel', widthLevel);
			if (orientation) {
				await componentStore('classList.orientation', orientation);
			}
			if (height > width) {
				await componentStore('classList.orientationBasic', 'portrait');
			} else if (width > height) {
				await componentStore('classList.orientationBasic', 'landscape');
			} else if (width === height) {
				await componentStore('classList.orientationBasic', 'perfectSquare');
			}
			app.view.fire('classTrigger');
		}
		const updateResizeAnimationFrame = () => {
			requestAnimationFrame(updateResize);
		};
		app.updateResizeAnimationFrame = updateResizeAnimationFrame;
		const updateResizeDebounce = debounce(app.updateResizeAnimationFrame, 250);
		app.updateResizeDebounce = updateResizeDebounce;
		app.updateResize = updateResize;
		const mobileCheck = () => {
			let check = false;
			const a = navigator.userAgent || navigator.vendor || window.opera;
			if (
				(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i).test(
					a
				) ||
	      (/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55\/|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12|d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i).test(
	      	a.substr(0, 4)
	      )
			) {
				check = true;
			}
			return check;
		};
		const tabletCheck = () => {
			return (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/).test(
				navigator.userAgent.toLowerCase()
			);
		};
		app.initializeScreen = async () => {
			const isMobile = mobileCheck();
			const isTablet = tabletCheck();
			if (isMobile) {
				await componentStore('classes.mobile', true);
				await componentStore('mobile', true);
			}
			if (isTablet) {
				await componentStore('classes.tablet', true);
				await componentStore('tablet', true);
			}
			if (!isMobile && !isTablet) {
				await componentStore('classes.desktop', true);
				await componentStore('desktop', true);
			}
			await componentStore('classes.chrome', isAgent.chrome);
			await componentStore('classes.android', isAgent.android);
			await componentStore('classes.linux', isAgent.linux);
			await componentStore('classes.mozilla', isAgent.mozilla);
			await componentStore('classes.applewebkit', isAgent.applewebkit);
			app.computeLayoutClasses();
			await app.updateResize();
			eventAdd$1(window, 'resize', updateResizeDebounce, true);
		};
		app.computeLayoutClasses = function() {
			console.log('INFO UPDATED');
			const classes = compactKeys(componentStore('classes'));
			const classList = componentStore('classList');
			classes.push(...pluckObject(classList, compactKeys(classList)));
			document.body.className = classes.join(' ');
		};
		const { utility: { assign: assign$3 } } = app;
		const methods = {
			get $() {
				return app.utility;
			},
			getComponent(partialName) {
				const componentName = partialName;
				const partial = `<${partialName} />`;
				console.log(componentName);
				const partialsCheck = Boolean(this.partials[partialName]);
				if (!partialsCheck) {
					this.partials[partialName] = partial;
				}
				return partialName;
			},
			makePartial(id, template) {
				const key = `partial-${id}`;
				const partialsCheck = Boolean(this.partials[id]);
				if (partialsCheck) {
					return key;
				}
				this.partials[key] = template;
				return key;
			}
		};
		assign$3(Ractive.prototype.data, methods);
		const {
			utility: {
				findIndex,
				hasValue: hasValue$2,
				findItem,
				assignDeep: assignDeep$1,
				ensureArray: ensureArray$1,
				assign: assign$2,
				isArray: isArray$1,
				sortNewest,
				sortOldest,
				clear,
				isPlainObject: isPlainObject$1,
				mapAsync,
				isFunction: isFunction$3,
				apply: apply$2
			}
		} = app;
		function assemblePath(keypath, options = {}) {
			const {
				pathPrefix = '', pathSuffix = ''
			} = options;
			return (pathPrefix && `${pathPrefix}.`) + keypath + (pathSuffix && `.${pathSuffix}`);
		}
		// function assembleAfterIndexPath(keypath, options) {
		// 	const {
		// 		afterIndex = '',
		// 		beforeIndex = ''
		// 	} = options;
		// 	return (beforeIndex && `${beforeIndex}.`) + keypath + (afterIndex && `.${afterIndex}`);
		// }
		function getPropertyName(propertyName, options = {}) {
			return propertyName || options.id || app.idProperty || 'id';
		}
		function getIndexValue(item, propertyName) {
			const indexValue = isPlainObject$1(item) ? item[propertyName] : item;
			return indexValue;
		}
		function getItem(context, keypath, indexValue, propertyName) {
			const item = findItem(context.get(keypath), indexValue, propertyName);
			return item;
		}
		function getIndex(context, keypath, indexValue, propertyName) {
			const index = findIndex(context.get(keypath), indexValue, propertyName);
			return index;
		}
		function getIndexPath(context, keypath, indexValue, propertyName) {
			const index = findIndex(context.get(keypath), indexValue, propertyName);
			return index ? `${keypath}.${index}` : false;
		}
		// drop dropRight removeBy right
		async function setByIndex(context, keypath, item, indexValue, propertyName, addBy = 1) {
			const index = findIndex(context.get(keypath), indexValue, propertyName);
			if (hasValue$2(index)) {
				return context.splice(`${keypath}.${index}`, index + addBy, 0, ...ensureArray$1(item));
			} else {
				return context.push(keypath, item);
			}
		}
		async function setAtIndex(context, keypath, item, indexValue, propertyName) {
			const indexPath = getIndexPath(context.get(keypath), indexValue, propertyName);
			if (hasValue$2(indexPath)) {
				return context.set(indexPath, item);
			}
		}
		async function syncItem(context, collection, item, addMethod = 'push', propertyName, mergeArrays, removeMethod) {
			const indexValue = getIndexValue(item, propertyName);
			const index = findIndex(collection, indexValue, propertyName);
			if (index) {
				if (addMethod === 'remove') {
					if (isFunction$3(removeMethod)) {
						return apply$2(removeMethod, context, [index, item]);
					}
					return collection.splice(index, 1);
				} else {
					assignDeep$1(collection[index], item, mergeArrays);
				}
			}
			return collection[addMethod](item);
		}
		const extendRactive = {
			async merge(keypath, source = {}, options) {
				const path = assemblePath(keypath, options);
				const target = this.get(path);
				if (hasValue$2(target)) {
					assignDeep$1(target, source);
					await this.update(path);
				}
				return target;
			},
			async setAtIndex(keypath, item, propertyNameArg, options) {
				const path = assemblePath(keypath, options);
				const propertyName = getPropertyName(propertyNameArg, options);
				const indexValue = getIndexValue(item, propertyName);
				return setAtIndex(this, path, item, indexValue, propertyName);
			},
			async setByIndex(keypath, item, propertyNameArg, positionMod, options) {
				const path = assemblePath(keypath, options);
				const propertyName = getPropertyName(propertyNameArg, options);
				const indexValue = getIndexValue(item, propertyName);
				return setByIndex(this, path, item, indexValue, propertyName, positionMod);
			},
			async removeByIndex(keypath, item, propertyNameArg, upto = 1, options) {
				const path = assemblePath(keypath, options);
				const propertyName = getPropertyName(propertyNameArg, options);
				const index = getIndex(this, keypath, item, propertyName);
				if (hasValue$2(index)) {
					return this.splice(path, index, upto);
				}
			},
			getIndexPath(keypath, item, propertyNameArg, options) {
				const path = assemblePath(keypath, options);
				const propertyName = getPropertyName(propertyNameArg, options);
				const indexValue = getIndexValue(item, propertyName);
				return getIndexPath(this, path, indexValue, propertyName);
			},
			async clearArray(keypath, options) {
				const path = assemblePath(keypath, options);
				const target = this.get(path);
				app.log(path, target);
				if (isArray$1(target)) {
					clear(target);
					await this.update(path);
				} else {
					app.log(`Attempted to clear none array at ${keypath}`);
				}
				return target;
			},
			getItem(keypath, indexMatch, propertyNameArg, options) {
				const path = assemblePath(keypath, options);
				const propertyName = getPropertyName(propertyNameArg, options);
				const indexValue = getIndexValue(indexMatch, propertyName);
				return getItem(this, path, indexValue, propertyName);
			},
			getIndex(keypath, indexMatch, propertyNameArg, options) {
				const path = assemblePath(keypath, options);
				const propertyName = getPropertyName(propertyNameArg, options);
				const indexValue = getIndexValue(indexMatch, propertyName);
				return getIndex(this, path, indexValue, propertyName);
			},
			async sortNewest(path, property) {
				const array = this.get(path);
				sortNewest(array, property, true);
				await this.update(path);
			},
			async sortOldest(path, property) {
				const array = this.get(path);
				sortOldest(array, property, true);
				await this.update(path);
			},
			async syncItem(keypath, item, options = {}) {
				const {
					addMethod, id, mergeArrays, removeMethod
				} = options;
				const path = assemblePath(keypath, options);
				const collection = this.get(path);
				const propertyName = getPropertyName(id, options);
				app.log(item, path, collection, propertyName);
				await syncItem(this, collection, item, addMethod, propertyName, mergeArrays, removeMethod);
				return this.update(path);
			},
			async syncCollection(keypath, items, options = {}) {
				const source = this;
				app.log(keypath, items, options);
				const {
					addMethod, id, mergeArrays, removeMethod
				} = options;
				const path = assemblePath(keypath, options);
				const propertyName = getPropertyName(id, options);
				const collection = this.get(path);
				let results;
				console.log(source, path, collection, items, addMethod, propertyName, mergeArrays, removeMethod);
				if (isArray$1(items)) {
					results = await mapAsync(items, async (item) => {
						return syncItem(source, collection, item, addMethod, propertyName, mergeArrays, removeMethod);
					});
				} else {
					results = await syncItem(source, collection, items, addMethod, propertyName, mergeArrays, removeMethod);
				}
				this.update(path);
				return results;
			},
			async toggleByIndex(keypath, item, propertyNameArg, options) {
				const path = assemblePath(keypath, options);
				const propertyName = getPropertyName(propertyNameArg, options);
				const indexValue = getIndexValue(item, propertyName);
				const indexPath = getIndexPath(this, path, indexValue, propertyName);
				if (hasValue$2(indexPath)) {
					await this.toggle(indexPath);
				}
			}
		};
		assign$2(Ractive.prototype, extendRactive);
		const {
			utility: {
				each: each$5, isString: isString$3, isArray, isFunction: isFunction$2
			}
		} = app;
		const multiEvent = (currentView, componentEvent, events, ...args) => {
			app.log(currentView, componentEvent, events);
			app.log(args);
			if (componentEvent && events.length) {
				const { original } = componentEvent;
				original.preventDefault();
				original.stopPropagation();
			}
			if (events) {
				if (isString$3(events)) {
					each$5(events.split(','), (subItem) => {
						if (subItem) {
							currentView.fire(subItem.trim(), componentEvent, ...args);
						}
					});
				} else if (isFunction$2(events)) {
					events(componentEvent, ...args);
				} else if (isArray(events)) {
					each$5(events, (item) => {
						if (item) {
							multiEvent(currentView, componentEvent, item, ...args);
						}
					});
				}
			}
		};
		const {
			utility: {
				each: each$4, assign: assign$1, querySelector: querySelector$1
			}
		} = app;
		const headNode = querySelector$1('head');
		const importedCssCount = {};
		const importedCss = {};
		const render = (code, filePath) => {
			if (importedCss[filePath]) {
				importedCssCount[filePath]++;
			} else {
				importedCssCount[filePath] = 0;
				const node = document.createElement('style');
				node.innerHTML = code;
				node.setAttribute('data-src', filePath);
				headNode.appendChild(node);
				importedCss[filePath] = node;
			}
		};
		const unrender = (code, filePath) => {
			if (importedCss[filePath]) {
				importedCssCount[filePath]--;
				if (importedCssCount[filePath] < 0) {
					importedCss[filePath].remove();
					importedCss[filePath] = null;
					importedCssCount[filePath] = null;
				}
			}
		};
		const cssRender = (css) => {
			if (css) {
				each$4(css, render);
			}
		};
		const cssUnrender = (css) => {
			if (css) {
				each$4(css, unrender);
			}
		};
		const componentsWithCss = {};
		const registerCssComponent = (css, componentConfig) => {
			if (!css) {
				return;
			}
			each$4(css, (item, key) => {
				if (!componentsWithCss[key]) {
					componentsWithCss[key] = [];
				}
				componentsWithCss[key].push(componentConfig);
			});
		};
		assign$1(app, {
			componentsWithCss,
			importedCss,
			importedCssCount
		});
		const {
			watch: watch$2,
			utility: {
				each: each$3, get, apply: apply$1
			}
		} = app;
		const createWatchers = (currentView, item, key) => {
			if (get('isWatcher', item._)) {
				currentView.watchers[key] = item;
				return;
			}
			item.options = item.options || {};
			item.methods = item.methods || {};
			let {
				prefix, suffix
			} = item.options;
			const { idProperty } = item.options;
			const { methods } = item;
			const createMethod = methods.create || 'push';
			const readMethod = methods.read || 'push';
			prefix = prefix ? `${prefix}.` : '';
			suffix = suffix ? `.${suffix}` : '';
			item.prefix = prefix;
			item.suffix = suffix;
			currentView.watchers[key] = watch$2(
				{
					async create(json) {
						await currentView.syncCollection(key, json.item, createMethod, idProperty);
						currentView.fire(`${prefix}create${suffix}`, json.item, json);
					},
					async delete(json) {
						await currentView.removeByIndex(key, json.item[idProperty], idProperty);
						currentView.fire(`${prefix}delete${suffix}`, json.item, json);
					},
					async read(json) {
						await currentView.syncCollection(key, json.items, readMethod, idProperty);
						currentView.fire(`${prefix}read${suffix}`, json.item, json);
					},
					async update(json) {
						await currentView.syncCollection(key, json.item, createMethod, idProperty);
						currentView.fire(`${prefix}update${suffix}`, json.item, json);
					}
				},
				item.options
			);
		};
		const removeInstance = function(currentView, styles) {
			cssUnrender(styles);
			each$3(currentView.watchers, (item, key) => {
				item.stop();
				item[key] = null;
			});
			currentView.styles = null;
			currentView.asset = null;
		};
		const onrenderInstance = function(currentView, styles) {
			cssRender(styles);
			if (currentView.watchers) {
				each$3(currentView.watchers, (item) => {
					item.start();
				});
			}
		};
		const buildComponentEvents = function(componentConfig) {
			const {
				styles, watchers
			} = componentConfig;
			const thisComponent = this;
			thisComponent.watchers = watchers ? watchers(thisComponent) : {};
			if (thisComponent.watchers) {
				each$3(thisComponent.watchers, (item, key) => {
					createWatchers(thisComponent, item, key);
				});
			}
			thisComponent.asset = componentConfig.asset;
			thisComponent.on({
				multi(cmpntEvent, ...args) {
					app.log(cmpntEvent, ...args);
					return multiEvent(this, cmpntEvent, ...args);
				},
				render() {
					return onrenderInstance(this, styles);
				},
				teardown() {
					return removeInstance(this, styles);
				}
			});
		};
		const onConstruct = function(componentConfig) {
			const sourceConstruct = componentConfig.onconstruct;
			componentConfig.onconstruct = function(...args) {
				apply$1(buildComponentEvents, this, [componentConfig, ...args]);
				if (sourceConstruct) {
					return apply$1(sourceConstruct, this, args);
				}
			};
			const sourceRender = componentConfig.onrender;
			componentConfig.onrender = function(...args) {
				if (sourceRender) {
					return apply$1(sourceRender, this, args);
				}
			};
		};
		const buildComponent = (componentConfig) => {
			const {
				name: componentName, asset, styles
			} = componentConfig;
			registerCssComponent(styles, componentConfig);
			onConstruct(componentConfig);
			const cmpntConfigClean = componentConfig;
			const Component = Ractive.extend(cmpntConfigClean);
			if (componentName) {
				Ractive.components[componentName] = Component;
			}
			Component.asset = asset;
			return Component;
		};
		const {
			demand: demand$3,
			demandCss,
			demandHtml,
			utility: {
				eachAsync: eachAsync$1, ensureArray, isString: isString$2, getFileExtension, hasValue: hasValue$1, eachObjectAsync, isKindAsync
			}
		} = app;
		function buildFilePath(template, extType = 'html') {
			const templateExt = template && getFileExtension(template);
			return (!templateExt && `${template}.${extType}`) || template;
		}
		const asyncComponent = async function(componentConfig) {
			const { data } = componentConfig;
			componentConfig.asset ||= {};
			let asset = componentConfig.asset || {};
			if (isString$2(asset)) {
				asset = {
					template: asset
				};
			}
			componentConfig.styles = componentConfig.styles || {};
			componentConfig.partials = componentConfig.partials || {};
			if (asset) {
				const {
					partials, template, styles
				} = asset;
				if (hasValue$1(template)) {
					asset.template = buildFilePath(template);
					// app.log('Async Template COMPILED URL', asset.template);
					componentConfig.template = await demandHtml(asset.template);
				}
				if (asset.demand) {
					componentConfig.demand = await demand$3(asset.demand);
				}
				if (partials) {
					await eachObjectAsync(partials, async (item, key) => {
						const compiledPartialPath = (partials[key] = buildFilePath(item));
						componentConfig.partials[key] = await demandHtml(compiledPartialPath);
					});
					console.log(asset);
				}
				if (styles) {
					await eachAsync$1(ensureArray(styles), async (item, key) => {
						const compiledCssPath = (styles[key] = buildFilePath(item, 'css'));
						// app.log('compiled css path', compiledCssPath);
						componentConfig.styles[compiledCssPath] = await demandCss(compiledCssPath);
					});
				}
			}
			if (data && isKindAsync(data)) {
				componentConfig.data = await data(componentConfig);
			}
			const componentPromise = await buildComponent(componentConfig);
			// app.log('Async Component Config', componentConfig);
			return componentPromise;
		};
		const { utility: { isString: isString$1 } } = app;
		const components = {};
		const generateComponent = (ComponentView, config) => {
			return new ComponentView(config);
		};
		const getComponent = (componentName, config) => {
			const componentObject = components[componentName];
			return config ? generateComponent(componentObject, config) : componentObject;
		};
		const component$1 = (componentName, componentConfigOption) => {
			let method;
			const componentConfig = componentConfigOption ? componentConfigOption : componentName;
			if (isString$1(componentName)) {
				componentConfig.name = componentName;
			}
			// app.log(componentConfig);
			if (componentConfig.asset) {
				method = asyncComponent;
			} else {
				method = buildComponent;
			}
			return method(componentConfig);
		};
		app.component = component$1;
		app.getComponent = getComponent;
		const {
			demand: demand$2,
			watch: watch$1,
			utility: {
				each: each$2, querySelector, isDom
			}
		} = app;
		const onCss = async (json) => {
			const filePath = json.name;
			const componentName = json.type;
			const componentsUsingCss = componentsWithCss[filePath];
			console.log('CSS UPDATE', filePath, componentsUsingCss);
			const node = importedCss[filePath] || importedCss[componentName] || querySelector(`[data-src="${filePath}"]`);
			if (node || componentsUsingCss) {
				const content = await demand$2(filePath);
				if (isDom(node)) {
					node.innerHTML = content;
				}
				if (componentsUsingCss) {
					each$2(componentsUsingCss, (item) => {
						console.log(item);
						item.styles[filePath] = content;
					});
				}
			}
		};
		watch$1(/\.css/, onCss);
		const {
			watch,
			demand: demand$1,
			utility: {
				eachObject, eachArray
			},
			crate: crate$1
		} = app;
		const onHtml = async (matchFilename, json, callback) => {
			if (callback) {
				return callback(matchFilename, json);
			}
			const filePath = json.name;
			app.log('WATCH HTML', matchFilename, json);
			const html = await demand$1(filePath);
			crate$1.setItem(filePath, html);
			app.log(filePath, html.length);
			eachObject(Ractive.components, (item, key) => {
				const asset = item.asset;
				if (asset.template === filePath) {
					item.defaults.template = Ractive.parse(html);
					const matchedComponents = app.view.findAllComponents(key);
					if (matchedComponents) {
						eachArray(matchedComponents, (matchedComponent) => {
							matchedComponent.resetTemplate(html);
						});
					}
				}
				if (asset.partials) {
					eachObject(asset.partials, (partialPath, partialName) => {
						if (partialPath === filePath) {
							item.partials[partialName] = Ractive.parse(html);
							const matchedComponents = app.view.findAllComponents(key);
							if (matchedComponents) {
								eachArray(matchedComponents, (matchedComponent) => {
									// app.log('reset partial', partialName);
									matchedComponent.resetPartial(partialName, html);
								});
							}
						}
					});
				}
			});
			window.UIkit.update(document.body, 'update');
		};
		const watchHtml = (matchFilename, callback) => {
			app.log('WATCH HTML', matchFilename);
			return watch(matchFilename, (json) => {
				app.log('HTML FILE CHANGED WATCH EVENT', matchFilename);
				onHtml(matchFilename, json, callback);
			});
		};
		watch.html = watchHtml;
		watchHtml(/\.html/);
		const {
			demand,
			demandJs: demandJs$1,
			utility: {
				assign, each: each$1, isFunction: isFunction$1, cnsl: cnsl$1
			}
		} = app;
		Ractive.sharedData.classes = {};
		Ractive.sharedData.classList = {};
		const view = new Ractive({
			template: `{{#@shared.components.main:key}}{{>getComponent(key)}}{{/}}`,
			async oninit() {
				cnsl$1('App Initialize Component', 'warning');
				const source = this;
				await app.initializeScreen();
				source.on('@shared.sizeTrigger', () => {
					app.computeLayoutClasses();
				});
				source.observe('@shared.classes', () => {
					app.computeLayoutClasses();
				});
				source.observe('@shared.classList', () => {
					app.computeLayoutClasses();
				});
			},
			async onrender() {
				app.computeLayoutClasses();
			}
		});
		view.on({
			async '*.loadComponent'(componentEvent) {
				const loadedComponent = await demand(componentEvent.get('demand'));
				const afterDemand = componentEvent.get('afterDemand');
				if (afterDemand) {
					const afterDemandEvents = afterDemand[componentEvent.original.type];
					each$1(afterDemandEvents, (item, key) => {
						if (isFunction$1(item)) {
							item(loadedComponent, item, key);
						} else {
							app.view.findComponent(key).fire(item);
						}
					});
				}
			},
			'*.preventDefault'(context) {
				const { original } = context;
				original.preventDefault();
				original.stopPropagation();
			}
		});
		app.importComponent = async (componentName, importURL, type = 'dynamic') => {
			if (importURL) {
				await demandJs$1(importURL);
			}
			await view.set(`@shared.components.${type}.${componentName}`, true);
			await view.update('@shared.components.${type}');
		};
		app.title = new Ractive({
			target: 'head',
			append: true,
			data() {
				return {};
			},
			template: `<title>{{@shared.pageTitle}}</title>`
		});
		assign(app, {
			async render() {
				await view.render('body');
			},
			view
		});
		const {
			demandJs,
			utility: {
				cnsl,
				assignDeep,
				mapArray,
				map,
				isString,
				rest,
				camelCase,
				eventAdd,
				isRegExp,
				mapWhile,
				hasValue,
				last,
				isFunction,
				apply,
				eachAsync,
				isPlainObject,
				each,
				restString
			},
			crate,
			component
		} = app;
		cnsl('ROUTER ONLINE', 'important');
		class Router {
			constructor() {
				return this;
			}
	    debug = false;
	    hostname = location.hostname;
	    pathname = location.pathname;
	    navHistory = [];
	    historyIndex = 0;
	    routes = [];
	    methods = {};
	    events = {
	    	beforeLoad: [],
	    	afterLoad: [],
	    	beforeInit: [],
	    	afterInit: [],
	    	afterRender: [],
	    	beforeRender: [],
	    	render: [],
	    	compile: []
	    };
	    on(eventNames, callback) {
	    	if (isPlainObject(eventNames) && !callback) {
	    		return each(eventNames, (eventCallback, eventName) => {
	    			this.on(eventName, eventCallback);
	    		});
	    	}
	    	return this.events[eventNames].push(callback);
	    }
	    async triggerEvents(eventName, optionalBind = this, args = []) {
	    	const bindThis = this;
	    	// console.log(bindThis, this.events[eventName], eventName, args);
	    	return eachAsync(bindThis.events[eventName], async (eventItem) => {
	    		await apply(eventItem, optionalBind, args);
	    	});
	    }
	    safePathAdd(baseArg) {
	    	let fullPath = baseArg;
	    	if (last(fullPath) !== '/') {
	    		fullPath = `${fullPath}/`;
	    	}
	    	if (fullPath[0] === '/') {
	    		fullPath = restString(fullPath);
	    	}
	    	return fullPath;
	    }
	    url(baseArg, addPath) {
	    	let fullPath = baseArg;
	    	if (last(fullPath) !== '/') {
	    		fullPath = `${fullPath}/`;
	    	}
	    	if (fullPath[0] !== '/') {
	    		fullPath = `/${fullPath}`;
	    	}
	    	return baseArg + this.safePathAdd(addPath);
	    }
	    defaults = {
	    	protected: false,
	    	role: false
	    };
	    state;
	    log(...args) {
	    	if (this.debug || app.debug) {
	    		console.log(...args);
	    	}
	    }
	    popstate(popstateEvent) {
	    	app.router.log('popstate', popstateEvent);
	    	popstateEvent.preventDefault();
	    	app.router.process();
	    }
	    pushState(url) {
	    	history.pushState({}, url, url);
	    	app.router.process();
	    }
	    installRoute(routeModel) {
	    	// app.router.log('Install Route', routeModel);
	    	const { match } = routeModel;
	    	if (match) {
	    		routeModel.regex = isRegExp(match) ? match : new RegExp(match);
	    	}
	    	return app.router.routes.push(routeModel);
	    }
	    add(item) {
	    	// this.log('add routes', item);
	    	return mapArray(item, this.installRoute);
	    }
	    async setup(options) {
	    	this.log('setup router');
	    	this.add(options.routes);
	    	this.log('assign options');
	    	assignDeep(this, options);
	    	this.log('eventAdd popstate');
	    	eventAdd(window, 'popstate', this.popstate, true);
	    }
	    async updateLocation() {
	    	map(location, (item, index) => {
	    		if (isString(item)) {
	    			this[index] = item;
	    		}
	    	});
	    	this.pathScored = this.pathname.replace(/\//g, '_');
	    	this.paths = rest(this.pathname.split('/'));
	    	this.pathCamel = camelCase(this.paths.join('_'));
	    	this.navHistory.push(this.pathname);
	    	this.historyIndex++;
	    }
	    async compilePath() {
	    	const {
	    		route, secured, role, path
	    	} = this.pathState;
	    	this.log(this.pathState);
	    	if (route) {
	    		this.pathState.path = route();
	    	} else if (!path) {
	    		this.pathState.path = this.pathname;
	    	}
	    	if (last(this.pathState.path) !== '/') {
	    		this.pathState.path = `${this.pathState.path}/`;
	    	}
	    	if (this.pathState.path[0] !== '/') {
	    		this.pathState.path = `/${this.pathState.path}`;
	    	}
	    	if (secured) {
	    		const securityCheck = Boolean(await this.methods.security(this.match));
	    		if (securityCheck) {
	    			const success = await this.methods.success();
	    			if (role) {
	    				this.pathState.path = `${this.pathState.path}${success}/`;
	    			}
	    		} else {
	    			this.pathState.path = `/${await this.methods.fail()}/`;
	    		}
	    	}
	    	this.pathState.path = `/${this.defaults.root}${this.pathState.path}index.js`;
	    	this.log('COMPILED PATH', this.pathState.path);
	    }
	    checkMatch(routeObject) {
	    	const check = routeObject.regex.test(app.router.pathname);
	    	if (check) {
	    		app.router.routeState = routeObject;
	    	}
	    	// app.router.log(check, app.router.pathname, routeObject.regex);
	    	return !check;
	    }
	    async close() {
	    	const currentComponent = this.component;
	    	if (currentComponent) {
	    		console.log('Close Component', this, currentComponent);
	    		await app.view.findComponent('navstate').teardown();
	    	}
	    }
	    async process() {
	    	const routerThis = this;
	    	app.view.fire('router.loading');
	    	this.log('Router Loading State', location.pathname);
	    	this.updateLocation();
	    	// this.log(this.routes);
	    	mapWhile(this.routes, this.checkMatch);
	    	const match = app.router.routeState;
	    	this.log('Match found', match);
	    	if (match) {
	    		await this.close();
	    		const {
	    			path, route
	    		} = match;
	    		const secured = hasValue(match.secured) ? match.secured : this.defaults.secured;
	    		const role = hasValue(match.role) ? match.role : this.defaults.role;
	    		const pathState = {
	    			match,
	    			secured,
	    			role,
	    			path,
	    			route
	    		};
	    		this.pathState = pathState;
	    		this.match = match;
	    		await this.compilePath();
	    		await Ractive.sharedSet('currentPath', this.pathname);
	    		await Ractive.sharedSet('navState', false);
	    		this.log('Checking if Model Loaded', match.model);
	    		if (match.assets) {
	    			if (match.assets.scripts) {
	    				await demandJs(match.assets.scripts);
	    			}
	    		}
	    		this.log('match model', pathState.path);
	    		let stateModel;
	    		try {
	    			stateModel = await demandJs(pathState.path);
	    		} catch (e) {
	    			app.log('Error Navigation File Failed to load', pathState.path);
	    			app.log(e);
	    			crate.removeItem(pathState.path);
	    		}
	    		if (!stateModel) {
	    			return app.log('ROUTER FAILED TO LOAD');
	    		}
	    		const stateComponent = assignDeep({}, stateModel.component);
	    		await this.triggerEvents('beforeLoad', stateComponent);
	    		const onrender = stateComponent.onrender;
	    		const oninit = stateComponent.oninit;
	    		stateComponent.onrender = function() {};
	    		const compiledRender = async function(...args) {
	    			cnsl('onrender', 'notify');
	    			onrender && (await apply(onrender, this, args));
	    			cnsl('onrender END', 'notify');
	    			await routerThis.triggerEvents('render', this, args);
	    		};
	    		stateComponent.oninit = async function(...args) {
	    			cnsl('oninit', 'notify');
	    			await routerThis.triggerEvents('beforeInit', this, args);
	    			oninit && (await apply(oninit, this, args));
	    			cnsl('oninit END', 'notify');
	    			if (this.rendered) {
	    				await apply(compiledRender, this, args);
	    			} else {
	    				this.on('onrender', compiledRender);
	    			}
	    		};
	    		await this.triggerEvents('compile', stateComponent);
	    		// this.log(stateModel);
	    		const initializeComponent = await component(stateComponent);
	    		// this.log('component made', initializeComponent);
	    		Ractive.components.navstate = initializeComponent;
	    		await routerThis.triggerEvents('afterLoad');
	    		await Ractive.sharedSet('navState', true);
	    	} else {
	    		return false;
	    	}
	    	this.log('Finished processing');
	    }
	    back() {
	    	this.log('Router back State');
	    	const navHistory = this.navHistory;
	    	if (navHistory.length) {
	    		app.router.historyIndex--;
	    		window.history.back();
	    	}
	    }
	    forward() {
	    	this.log('Router forward State');
	    	const navHistory = this.navHistory;
	    	if (navHistory.length > this.historyIndex) {
	    		app.router.historyIndex++;
	    		window.history.forward();
	    	}
	    }
		}
		app.router = new Router();
		app.view.on({
			'*.routerBack'() {
				app.router.back();
			},
			'*.routerForward'() {
				app.router.forward();
			},
			'*.route'(componentEvent) {
				const {
					original, node
				} = componentEvent;
				let url = componentEvent.get('href') || componentEvent.get('url') || node.getAttribute('href') || node.getAttribute('data-href');
				url = (isFunction(url) && url()) || url;
				original.preventDefault();
				app.router.log(componentEvent, url);
				app.router.pushState(url);
				return false;
			}
		});
	})();

})();

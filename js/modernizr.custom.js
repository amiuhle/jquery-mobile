/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-testprop-testallprops-domprefixes
 */
;window.Modernizr=function(a,b,c){function z(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+m.join(c+" ")+c).split(" ");return y(d,b)}function y(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function x(a,b){return!!~(""+a).indexOf(b)}function w(a,b){return typeof a===b}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function u(a){j.cssText=a}var d="2.0.6",e={},f=b.documentElement,g=b.head||b.getElementsByTagName("head")[0],h="modernizr",i=b.createElement(h),j=i.style,k,l=Object.prototype.toString,m="Webkit Moz O ms Khtml".split(" "),n={},o={},p={},q=[],r,s={}.hasOwnProperty,t;!w(s,c)&&!w(s.call,c)?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],c)};for(var A in n)t(n,A)&&(r=A.toLowerCase(),e[r]=n[A](),q.push((e[r]?"":"no-")+r));u(""),i=k=null,e._version=d,e._domPrefixes=m,e.testProp=function(a){return y([a])},e.testAllProps=z;return e}(this,this.document);
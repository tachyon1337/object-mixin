/*! (C) WebReflection Mit Style License */
define(function(){return function(e,t){"use strict";var n=e.defineProperty||function(e,t,n){e[t]=n.value},r=e.getOwnPropertyNames||function(t){var n=e.prototype.hasOwnProperty,r=[],i;for(i in t)n.call(t,i)&&r.push(i);return r},i=e.getOwnPropertyDescriptor||function(e,t){return{enumerable:!0,writable:!0,configurable:!0,value:e[t]}};if(e[t])return;n(e,t,{enumerable:!1,writable:!0,configurable:!0,value:function(t,s){var o=typeof s=="function"?s.prototype:s,u=r(o),a=u.length,f=0,l;while(f<a)n(t,l=u[f++],i(o,l));return!a&&typeof s=="function"&&s.apply(t,u.slice.call(arguments,2)),t}})}(Object,"mixin"),Object.mixin});
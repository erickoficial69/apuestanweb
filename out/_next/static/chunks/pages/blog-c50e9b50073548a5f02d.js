_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/0+H":function(e,t,i){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(n.default.useContext(o.AmpStateContext))};var a,n=(a=i("q1tI"))&&a.__esModule?a:{default:a},o=i("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,i=void 0!==t&&t,a=e.hybrid,n=void 0!==a&&a,o=e.hasQuery,u=void 0!==o&&o;return i||n&&u}},"7W2i":function(e,t,i){var a=i("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,i){"use strict";i("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=a?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(i,n,o):i[n]=e[n]}i.default=e,t&&t.set(e,i);return i}(i("q1tI")),o=(a=i("Xuae"))&&a.__esModule?a:{default:a},u=i("lwAK"),r=i("FYa8"),s=i("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[n.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===n.default.Fragment?e.concat(n.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var i=n.default.Children.toArray(t.props.children);return e.concat(i)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,i=new Set,a={};return function(n){var o=!0,u=!1;if(n.key&&"number"!==typeof n.key&&n.key.indexOf("$")>0){u=!0;var r=n.key.slice(n.key.indexOf("$")+1);e.has(r)?o=!1:e.add(r)}switch(n.type){case"title":case"base":t.has(n.type)?o=!1:t.add(n.type);break;case"meta":for(var s=0,c=m.length;s<c;s++){var d=m[s];if(n.props.hasOwnProperty(d))if("charSet"===d)i.has(d)?o=!1:i.add(d);else{var l=n.props[d],p=a[d]||new Set;"name"===d&&u||!p.has(l)?(p.add(l),a[d]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var i=e.key||t;return n.default.cloneElement(e,{key:i})}))}function f(e){var t=e.children,i=(0,n.useContext)(u.AmpStateContext),a=(0,n.useContext)(r.HeadManagerContext);return n.default.createElement(o.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,s.isInAmpMode)(i)},t)}f.rewind=function(){};var v=f;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,i){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var n=((a=i("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=n},"HaE+":function(e,t,i){"use strict";function a(e,t,i,a,n,o,u){try{var r=e[o](u),s=r.value}catch(c){return void i(c)}r.done?t(s):Promise.resolve(s).then(a,n)}function n(e){return function(){var t=this,i=arguments;return new Promise((function(n,o){var u=e.apply(t,i);function r(e){a(u,n,o,r,s,"next",e)}function s(e){a(u,n,o,r,s,"throw",e)}r(void 0)}))}}i.d(t,"a",(function(){return n}))},HfOp:function(e,t,i){"use strict";i.r(t),i.d(t,"__N_SSG",(function(){return m}));var a=i("nKUr"),n=i("o0o1"),o=i.n(n),u=i("HaE+"),r=i("MX0m"),s=i.n(r),c=i("g4pe"),d=i.n(c),l=i("q1tI"),m=!0;t.default=function(e){var t=e.taxonomies,i=Object(l.useState)([]),n=i[0],r=i[1];return Object(l.useEffect)((function(){t.map(function(){var e=Object(u.a)(o.a.mark((function e(t){var i,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:5000/wp-json","/wp/v2/").concat(t.rest_base));case 2:return i=e.sent,e.next=5,i.json();case 5:a=e.sent,r(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(d.a,{children:[Object(a.jsx)("title",{className:"jsx-3191888296",children:"Blog - Diaz web app"}),Object(a.jsx)("meta",{name:"keywords",content:"diaz web app, desarrollo web, desarrollo de e-commerce, desarrollo de tiendas online",className:"jsx-3191888296"}),Object(a.jsx)("meta",{name:"description",content:"Desarrollamos aplicaciones web para particulares y comercios. Optimizadas en rendimiento listas para aplicar estrategias de marketing.",className:"jsx-3191888296"})]}),Object(a.jsx)("aside",{className:"jsx-3191888296",children:Object(a.jsx)("ul",{className:"jsx-3191888296",children:n.map((function(e){return Object(a.jsx)("li",{className:"jsx-3191888296",children:e.name},e.id)}))})}),Object(a.jsx)("section",{itemScope:!0,itemType:"http://schema.org/Service",className:"jsx-3191888296 flex-wrap",children:Object(a.jsxs)("article",{className:"jsx-3191888296",children:[Object(a.jsx)("p",{className:"jsx-3191888296",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorum a eveniet beatae laudantium, fuga, omnis veniam earum sequi corporis sint aperiam dolores unde? Minima, autem culpa quibusdam ad dolorum impedit earum, inventore soluta atque dignissimos saepe ipsum error iure ex iusto! Fugiat consequuntur laudantium similique et labore ea culpa, quasi provident impedit at blanditiis magnam odit eligendi, atque tempore! Nulla recusandae perferendis suscipit totam ad fugit explicabo dolore fuga ullam modi, facere, blanditiis, soluta ea odit. Laudantium sapiente dignissimos sint error, culpa mollitia commodi quia eaque. Perspiciatis officiis facilis hic molestiae, voluptate quam placeat incidunt harum doloribus iure tenetur voluptas expedita. Quisquam aliquid harum, consectetur illo nam repudiandae, ipsam fuga id veniam, totam qui maiores voluptates aut amet deleniti vitae sed! Minus incidunt veritatis quidem odio sequi commodi quam, eos dicta excepturi, in maxime! Sed, autem. At iusto, hic incidunt eius ipsum sapiente dolorum facilis in. Natus, voluptatum quos."}),Object(a.jsx)("p",{className:"jsx-3191888296",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorum a eveniet beatae laudantium, fuga, omnis veniam earum sequi corporis sint aperiam dolores unde? Minima, autem culpa quibusdam ad dolorum impedit earum, inventore soluta atque dignissimos saepe ipsum error iure ex iusto! Fugiat consequuntur laudantium similique et labore ea culpa, quasi provident impedit at blanditiis magnam odit eligendi, atque tempore! Nulla recusandae perferendis suscipit totam ad fugit explicabo dolore fuga ullam modi, facere, blanditiis, soluta ea odit. Laudantium sapiente dignissimos sint error, culpa mollitia commodi quia eaque. Perspiciatis officiis facilis hic molestiae, voluptate quam placeat incidunt harum doloribus iure tenetur voluptas expedita. Quisquam aliquid harum, consectetur illo nam repudiandae, ipsam fuga id veniam, totam qui maiores voluptates aut amet deleniti vitae sed! Minus incidunt veritatis quidem odio sequi commodi quam, eos dicta excepturi, in maxime! Sed, autem. At iusto, hic incidunt eius ipsum sapiente dolorum facilis in. Natus, voluptatum quos."}),Object(a.jsx)("p",{className:"jsx-3191888296",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorum a eveniet beatae laudantium, fuga, omnis veniam earum sequi corporis sint aperiam dolores unde? Minima, autem culpa quibusdam ad dolorum impedit earum, inventore soluta atque dignissimos saepe ipsum error iure ex iusto! Fugiat consequuntur laudantium similique et labore ea culpa, quasi provident impedit at blanditiis magnam odit eligendi, atque tempore! Nulla recusandae perferendis suscipit totam ad fugit explicabo dolore fuga ullam modi, facere, blanditiis, soluta ea odit. Laudantium sapiente dignissimos sint error, culpa mollitia commodi quia eaque. Perspiciatis officiis facilis hic molestiae, voluptate quam placeat incidunt harum doloribus iure tenetur voluptas expedita. Quisquam aliquid harum, consectetur illo nam repudiandae, ipsam fuga id veniam, totam qui maiores voluptates aut amet deleniti vitae sed! Minus incidunt veritatis quidem odio sequi commodi quam, eos dicta excepturi, in maxime! Sed, autem. At iusto, hic incidunt eius ipsum sapiente dolorum facilis in. Natus, voluptatum quos."}),Object(a.jsx)("p",{className:"jsx-3191888296",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorum a eveniet beatae laudantium, fuga, omnis veniam earum sequi corporis sint aperiam dolores unde? Minima, autem culpa quibusdam ad dolorum impedit earum, inventore soluta atque dignissimos saepe ipsum error iure ex iusto! Fugiat consequuntur laudantium similique et labore ea culpa, quasi provident impedit at blanditiis magnam odit eligendi, atque tempore! Nulla recusandae perferendis suscipit totam ad fugit explicabo dolore fuga ullam modi, facere, blanditiis, soluta ea odit. Laudantium sapiente dignissimos sint error, culpa mollitia commodi quia eaque. Perspiciatis officiis facilis hic molestiae, voluptate quam placeat incidunt harum doloribus iure tenetur voluptas expedita. Quisquam aliquid harum, consectetur illo nam repudiandae, ipsam fuga id veniam, totam qui maiores voluptates aut amet deleniti vitae sed! Minus incidunt veritatis quidem odio sequi commodi quam, eos dicta excepturi, in maxime! Sed, autem. At iusto, hic incidunt eius ipsum sapiente dolorum facilis in. Natus, voluptatum quos."}),Object(a.jsx)("p",{className:"jsx-3191888296",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorum a eveniet beatae laudantium, fuga, omnis veniam earum sequi corporis sint aperiam dolores unde? Minima, autem culpa quibusdam ad dolorum impedit earum, inventore soluta atque dignissimos saepe ipsum error iure ex iusto! Fugiat consequuntur laudantium similique et labore ea culpa, quasi provident impedit at blanditiis magnam odit eligendi, atque tempore! Nulla recusandae perferendis suscipit totam ad fugit explicabo dolore fuga ullam modi, facere, blanditiis, soluta ea odit. Laudantium sapiente dignissimos sint error, culpa mollitia commodi quia eaque. Perspiciatis officiis facilis hic molestiae, voluptate quam placeat incidunt harum doloribus iure tenetur voluptas expedita. Quisquam aliquid harum, consectetur illo nam repudiandae, ipsam fuga id veniam, totam qui maiores voluptates aut amet deleniti vitae sed! Minus incidunt veritatis quidem odio sequi commodi quam, eos dicta excepturi, in maxime! Sed, autem. At iusto, hic incidunt eius ipsum sapiente dolorum facilis in. Natus, voluptatum quos."})]})}),Object(a.jsx)(s.a,{id:"3191888296",children:["main{position:relative;display:grid;grid-template-columns:1fr;gap:10px;}","@media(min-width:760px){main{grid-template-columns:200px 1fr;}main>section{grid-column:2 / span 1;padding:0 5px;}main>footer{grid-column:1/ span 2;}aside{position:fixed;}}"]})]})}},Ijbi:function(e,t,i){var a=i("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Nsbk:function(e,t){function i(t){return e.exports=i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(t)}e.exports=i},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,i){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},RIqP:function(e,t,i){var a=i("Ijbi"),n=i("EbDI"),o=i("ZhPi"),u=i("Bnag");e.exports=function(e){return a(e)||n(e)||o(e)||u()}},SksO:function(e,t){function i(t,a){return e.exports=i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(t,a)}e.exports=i},W8MJ:function(e,t){function i(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&i(e.prototype,t),a&&i(e,a),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}},Xuae:function(e,t,i){"use strict";var a=i("RIqP"),n=i("lwsE"),o=i("W8MJ"),u=(i("PJYZ"),i("7W2i")),r=i("a1gu"),s=i("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,a=s(e);if(t){var n=s(this).constructor;i=Reflect.construct(a,arguments,n)}else i=a.apply(this,arguments);return r(this,i)}}t.__esModule=!0,t.default=void 0;var d=i("q1tI"),l=function(e){u(i,e);var t=c(i);function i(e){var o;return n(this,i),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(i,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),i}(d.Component);t.default=l},ZhPi:function(e,t,i){var a=i("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(e,t):void 0}}},a1gu:function(e,t,i){var a=i("cDf5"),n=i("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?n(e):t}},cDf5:function(e,t){function i(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=i=function(e){return typeof e}:e.exports=i=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(t)}e.exports=i},g4pe:function(e,t,i){e.exports=i("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},lwAK:function(e,t,i){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var n=((a=i("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=n},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},uh6c:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return i("HfOp")}])}},[["uh6c",0,1,2,5]]]);
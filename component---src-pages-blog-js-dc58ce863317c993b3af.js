(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(166),c=a(164);t.default=function(){return r.a.createElement(i.a,{className:"article"},r.a.createElement(c.a,{title:"Guides"}),r.a.createElement("h1",null,"Blog"),r.a.createElement("h2",null,"A collection a words organized into sentences"),r.a.createElement("br",null),r.a.createElement("p",null,"More to come later"))}},160:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(161);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},161:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},162:function(e){e.exports={data:{site:{siteMetadata:{headerTitle:"Central Filing"}}}}},163:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},164:function(e,t,a){"use strict";var n=a(165),r=a(0),i=a.n(r),c=a(4),o=a.n(c),l=a(167),s=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,c=e.title,o=n.data.site,l=t||o.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(r)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=d},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Ozzie Kirkby - Central Filing",description:"Engineering Student",author:"Ozzie Kirkby"}}}}},166:function(e,t,a){"use strict";var n=a(162),r=a(0),i=a.n(r),c=a(4),o=a.n(c),l=a(160),s=function(e){var t=e.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",{id:"header-content"},i.a.createElement(l.a,{to:"/",id:"home-icon"},i.a.createElement("img",{src:"/home-icon.svg",alt:"Home Icon",id:"home-icon"})),i.a.createElement("div",{id:"header-title"},i.a.createElement("p",null,t))))};s.propTypes={children:o.a.node},s.defaultProps={siteTitle:""};var d=s,u=function(e){var t=e.children,a=e.className,r=e.showHeader;return i.a.createElement(l.b,{query:"3778772209",render:function(e){return i.a.createElement(i.a.Fragment,null,r&&i.a.createElement(d,{siteTitle:e.site.siteMetadata.headerTitle}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0},className:a},i.a.createElement("main",null,t)))},data:n})};u.propTypes={children:o.a.node.isRequired,className:o.a.string,showHeader:o.a.bool},u.defaultProps={children:i.a.createElement("div",null),className:"",showHeader:!0};t.a=u}}]);
//# sourceMappingURL=component---src-pages-blog-js-dc58ce863317c993b3af.js.map
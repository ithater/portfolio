(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c(0),n=c.n(s),a=c(11),o=c.n(a),j=(c(22),c(23),c(12)),i=c.n(j),l=c(15),p=c(14);var h=function(){var e=Object(s.useState)(null),t=Object(p.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)(null),a=Object(p.a)(n,2),o=a[0],j=a[1];return Object(s.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("./docs/db.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.next=9,new Promise((function(e){return setTimeout(e,1e3)}));case 9:r(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),j(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),{response:c,error:o}};var u=function(){return Object(r.jsx)("header",{className:"header",children:Object(r.jsx)("div",{className:"container header__container",children:Object(r.jsx)("a",{href:"https://github.com/ithater",className:"link header__link",target:"_blank",rel:"noreferrer",children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c GitHub"})})})},d=c(16),b=c(13),m=c(31),O=c(28),_=c(29),x=c(32),g=c(30);c(25);m.a.use([O.a,_.a]);var f=function(e){var t=e.projectData,c=t.title,s=t.previewPhotos,n=t.links,a=t.about,o=t.technologies;return Object(r.jsxs)("div",{className:"projects-project",children:[Object(r.jsx)("div",{className:"projects-project__images",children:s.length>1?Object(r.jsx)(x.a,{loop:!0,autoplay:{delay:3e3,disableOnInteraction:!0},spaceBetween:50,slidesPerView:1,className:"projects-project__image",children:s.map((function(e,t){return Object(r.jsx)(g.a,{children:Object(r.jsx)(b.LazyLoadImage,{alt:c,src:e,width:480,height:390,className:"projects-project__image"})},t.toString())}))}):Object(r.jsx)(b.LazyLoadImage,{alt:c,src:s[0],width:480,height:390,className:"projects-project__image"})}),Object(r.jsxs)("div",{className:"projects-project__info",children:[Object(r.jsxs)("div",{className:"projects-project__holder",children:[Object(r.jsx)("h2",{className:"projects-project__title",children:c}),Object(r.jsx)("ul",{className:"projects-project-links",children:Object(r.jsxs)("li",{className:"projects-project-links__toggle",children:[Object(r.jsx)("button",{className:"projects-project-links__button",onClick:function(e){e.target.closest(".projects-project-links").querySelector(".projects-project-links__wrapper").classList.toggle("projects-project-links__wrapper--active")},children:"\u0441\u0441\u044b\u043b\u043a\u0438"}),Object(r.jsx)("ul",{className:"projects-project-links__wrapper",children:n.map((function(e,t){return Object(r.jsx)("li",{className:"projects-project-links__item",children:Object(r.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"link projects-project-links__link",children:e.name})},t.toString())}))})]})})]}),Object(r.jsx)("p",{className:"projects-project__about",children:a}),Object(r.jsxs)("div",{className:"projects-project-technologies projects-project__technologies",children:[Object(r.jsx)("h3",{className:"technologies",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(r.jsx)("ul",{className:"projects-project-technologies__list",children:o.map((function(e,t){return Object(r.jsx)("li",{className:"projects-project-technologies__technology",children:e},t.toString())}))})]})]})]})};var v=function(e){var t=e.projectsDB,c=Object(d.a)(t).sort((function(e,t){return t.id-e.id}));return Object(r.jsx)("div",{className:"projects",children:Object(r.jsx)("div",{className:"container projects__container",children:c.map((function(e,t){return Object(r.jsx)(f,{projectData:e},t.toString())}))})})};var N=function(e){var t=e.Spiner,c=e.projectsDB;return Object(r.jsx)(r.Fragment,{children:c?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u,{}),Object(r.jsx)(v,{projectsDB:c})]}):Object(r.jsx)(t,{})})};var k=function(){return Object(r.jsx)("div",{className:"spiner-loader",children:Object(r.jsx)("div",{className:"lds-hourglass"})})};var w=function(){var e=h(),t=e.response,c=e.error;return Object(r.jsx)(r.Fragment,{children:c?Object(r.jsx)("h1",{children:"error"}):Object(r.jsx)(N,{projectsDB:t,Spiner:k})})};o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.da5afd56.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,a){},47:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(16),r=a.n(c),i=a(4),s=a(10),o=(a(45),a(0));var l=function(){return Object(o.jsx)(s.b,{to:"/home",children:Object(o.jsx)("button",{className:"button",children:"INGRESAR"})})},u=a.p+"static/media/wallpaper1.6e44791f.jpg",j=a.p+"static/media/wallpaper2.1a534748.jpg",d=a.p+"static/media/wallpaper3.7be2afb3.jpg",b=a.p+"static/media/wallpaper4.60239b30.jpg",p=a.p+"static/media/wallpaper5.87599ffb.jpg";a(47);var O=function(){return Object(o.jsxs)("div",{className:"images",children:[Object(o.jsx)("img",{className:"image1",src:u,alt:"Dark Souls 3"}),Object(o.jsx)("img",{className:"image2",src:j,alt:"GTA V"}),Object(o.jsx)("img",{className:"image3",src:d,alt:"The Last Of Us: Part 2"}),Object(o.jsx)("img",{className:"image4",src:b,alt:"Super Mario Odyssey"}),Object(o.jsx)("img",{className:"image5",src:p,alt:"The Binding of Isaac Rebirth"})]})};var g=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsx)(O,{})]})},h=a(7),m=a.n(h),x=a(12),v=a(11),f=a.n(v),y="SEARCH_REQUEST",S="SEARCH_SUCCESS",E="SEARCH_FAIL",k="SET_GAMES_ON_PAGE";function C(e,t){switch(e){case 1:return{type:k,payload:t.slice(0,15)};case 2:return{type:k,payload:t.slice(15,30)};case 3:return{type:k,payload:t.slice(30,45)};case 4:return{type:k,payload:t.slice(45,60)};case 5:return{type:k,payload:t.slice(60,75)};case 6:return{type:k,payload:t.slice(75,90)};default:return}}var A=a.p+"static/media/default-placeholder.6988980f.png";a(67);var L=function(e){var t,a=e.props;return Object(o.jsx)(s.b,{to:"/home/game/".concat(a.id),children:Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("h4",{children:a.name.replace(/-/g," ")}),Object(o.jsx)("img",{src:null!==(t=a.background_image)&&void 0!==t?t:A,alt:""}),Object(o.jsx)("p",{children:a.genres.map((function(e,t){return t===a.genres.length-1?e.name+".":e.name+", "}))})]})})};a(68);var N=function(){var e=Object(i.c)((function(e){return e.games})).games,t=Object(i.c)((function(e){return e.gamesOnPage})),a=t.gamesOnPage,c=t.isLoading,r=Object(i.b)();return n.useEffect((function(){r(C(1,e))}),[r,e]),c?Object(o.jsx)("div",{className:"loading"}):Object(o.jsx)("div",{className:"games-list",children:a.map((function(e){return Object(o.jsx)(L,{props:e},e.id)}))})};a(69),a(70);var P=function(){var e=Object(i.c)((function(e){return e.games})).games,t=Object(i.c)((function(e){return e.gamesOnPage})),a=t.gamesOnPage,n=t.isLoading,c=Object(i.c)((function(e){return e.filteredGames})).filteredGames,r=Object(i.b)();return n?Object(o.jsx)("div",{}):Object(o.jsx)("div",{className:15===a.length||c.length>15?"pagination":"nopagination",children:[1,2,3,4,5,6].map((function(t){return Object(o.jsx)("button",{onClick:function(){return function(t){c.length?r(C(t,c)):r(C(t,e))}(t)},children:t},t)}))})},w=a(5),G="RESET",_="SET_FILTERED_GAMES";function R(){return{type:G}}a(71);var D=function(){var e=n.useState(!1),t=Object(w.a)(e,2),a=t[0],c=t[1],r=n.useState(!1),s=Object(w.a)(r,2),l=s[0],u=s[1],j=n.useState("Seleccionar genero"),d=Object(w.a)(j,2),b=d[0],p=d[1],O=n.useState("Seleccionar orden alfab\xe9tico"),g=Object(w.a)(O,2),h=g[0],m=g[1],x=n.useState("Seleccionar orden rating"),v=Object(w.a)(x,2),f=v[0],y=v[1],S=Object(i.c)((function(e){return e.games})),E=S.games,k=S.isLoading,A=Object(i.c)((function(e){return e.filteredGames})).filteredGames,L=Object(i.b)();function N(e){var t=e.target.options.selectedIndex;"name"===e.target.name?(y("Seleccionar orden rating"),"ASC"===e.target.options[t].value?(m("ASC"),A.length?(A.sort((function(e,t){return e.name.localeCompare(t.name)})),L(C(1,A))):(E.sort((function(e,t){return e.name.localeCompare(t.name)})),L(C(1,E)))):"DESC"===e.target.options[t].value?(m("DESC"),A.length?(A.sort((function(e,t){return t.name.localeCompare(e.name)})),L(C(1,A))):(E.sort((function(e,t){return t.name.localeCompare(e.name)})),L(C(1,E)))):(m("Seleccionar orden alfab\xe9tico"),p("Seleccionar genero"),E.sort((function(e,t){var a=e.hasOwnProperty("added"),n=t.hasOwnProperty("added");return a&&n?t.added-e.added:a?1:n?-1:0})),L(R()),L(C(1,E)))):"rating"===e.target.name&&(m("Seleccionar orden alfab\xe9tico"),"ASC"===e.target.options[t].value?(y("ASC"),A.length?(A.sort((function(e,t){return e.rating-t.rating})),L(C(1,A))):(E.sort((function(e,t){return e.rating-t.rating})),L(C(1,E)))):"DESC"===e.target.options[t].value?(y("DESC"),A.length?(A.sort((function(e,t){return t.rating-e.rating})),L(C(1,A))):(E.sort((function(e,t){return t.rating-e.rating})),L(C(1,E)))):(y("Seleccionar orden rating"),p("Seleccionar genero"),E.sort((function(e,t){var a=e.hasOwnProperty("added"),n=t.hasOwnProperty("added");return a&&n?t.added-e.added:a?1:n?-1:0})),L(R()),L(C(1,E))))}return k?Object(o.jsx)("div",{}):Object(o.jsx)("nav",{className:"sidebar",children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("label",{htmlFor:"creados",children:"Filtrar creados"}),Object(o.jsx)("input",{type:"checkbox",name:"creados",id:"creados",checked:a,onChange:function(e){if(c(!a),e.target.checked){var t=E.filter((function(e){return"number"!==typeof e.id}));if(!t.length)return c(!1),alert("No tenes ning\xfan juego creado");L(C(1,t))}else L(C(1,E))}})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("label",{htmlFor:"creados",children:"Filtrar solo API"}),Object(o.jsx)("input",{type:"checkbox",name:"creados",id:"creados",checked:l,onChange:function(e){if(u(!l),e.target.checked){var t=E.filter((function(e){return"number"===typeof e.id}));L(C(1,t))}else L(C(1,E))}})]}),Object(o.jsxs)("li",{children:["Genero:",Object(o.jsxs)("select",{name:"genres",id:"genres-select",value:b,onChange:function(e){var t=e.target.options.selectedIndex;if(0===t)p("Seleccionar genero"),y("Seleccionar orden rating"),m("Seleccionar orden alfab\xe9tico"),c(!1),E.sort((function(e,t){var a=e.hasOwnProperty("added"),n=t.hasOwnProperty("added");return a&&n?t.added-e.added:a?1:n?-1:0})),L(R()),L(C(1,E));else{p(e.target.options[t].value);var a=E.filter((function(a){return a.genres.some((function(a){return a.name===e.target.options[t].value}))}));L(function(e){return{type:_,payload:e}}(a)),L(C(1,a))}},children:[Object(o.jsx)("option",{value:"",children:"Seleccionar genero"}),Object(o.jsx)("option",{value:"Action",children:"Action"}),Object(o.jsx)("option",{value:"Indie",children:"Indie"}),Object(o.jsx)("option",{value:"Adventure",children:"Adventure"}),Object(o.jsx)("option",{value:"RPG",children:"RPG"}),Object(o.jsx)("option",{value:"Strategy",children:"Strategy"}),Object(o.jsx)("option",{value:"Shooter",children:"Shooter"}),Object(o.jsx)("option",{value:"Casual",children:"Casual"}),Object(o.jsx)("option",{value:"Simulation",children:"Simulation"}),Object(o.jsx)("option",{value:"Puzzle",children:"Puzzle"}),Object(o.jsx)("option",{value:"Arcade",children:"Arcade"}),Object(o.jsx)("option",{value:"Platformer",children:"Platformer"}),Object(o.jsx)("option",{value:"Racing",children:"Racing"}),Object(o.jsx)("option",{value:"Massively Multiplayer",children:"Massively Multiplayer"}),Object(o.jsx)("option",{value:"Sports",children:"Sports"}),Object(o.jsx)("option",{value:"Fighting",children:"Fighting"}),Object(o.jsx)("option",{value:"Board Games",children:"Board Games"}),Object(o.jsx)("option",{value:"Family",children:"Family"}),Object(o.jsx)("option",{value:"Educational",children:"Educational"}),Object(o.jsx)("option",{value:"Card",children:"Card"})]})]}),Object(o.jsxs)("li",{children:["Nombre:",Object(o.jsxs)("select",{name:"name",id:"name-select",value:h,onChange:N,children:[Object(o.jsx)("option",{value:"",children:"Seleccionar orden alfab\xe9tico"}),Object(o.jsx)("option",{value:"ASC",children:"Ascendente"}),Object(o.jsx)("option",{value:"DESC",children:"Descendente"})]})]}),Object(o.jsxs)("li",{children:["Rating:",Object(o.jsxs)("select",{name:"rating",id:"rating-select",value:f,onChange:N,children:[Object(o.jsx)("option",{value:"",children:"Seleccionar orden rating"}),Object(o.jsx)("option",{value:"DESC",children:"Mejor votados"}),Object(o.jsx)("option",{value:"ASC",children:"Peor votados"})]})]})]})})};var F=function(){var e=Object(i.c)((function(e){return e.games})).isLoading;return Object(o.jsxs)("div",{children:[Object(o.jsx)(P,{}),Object(o.jsx)(D,{}),Object(o.jsx)("div",{className:"home",children:e?Object(o.jsx)("div",{className:"loading"}):Object(o.jsx)(N,{})})]})},M=a(3);a(72);var I=function(){var e=n.useState(""),t=Object(w.a)(e,2),a=t[0],c=t[1],r=Object(i.b)(),s=Object(M.f)();return Object(o.jsxs)("form",{className:"search-bar",onSubmit:function(e){var t;e.preventDefault(),r((t=a,function(){var e=Object(x.a)(m.a.mark((function e(a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:y}),e.prev=1,e.next=4,f.a.get("/videogames?name=".concat(t));case 4:n=e.sent,a({type:S,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a({type:E,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())),document.getElementsByClassName("pagination")[0]&&(document.getElementsByClassName("pagination")[0].className="nopagination"),s("/home"),c("")},children:[Object(o.jsx)("input",{type:"search",placeholder:"Buscar videojuegos...",name:"name",value:a,onChange:function(e){return c(e.target.value)},required:!0}),a&&Object(o.jsx)("button",{children:"Buscar"}),!a&&Object(o.jsx)("button",{disabled:!0,children:"Buscar"})]})};a(73),a(74);var T=function(){var e=Object(i.c)((function(e){return e.games})).games,t=Object(i.c)((function(e){return e.filteredGames})).filteredGames,a=Object(i.b)();return Object(o.jsxs)("ul",{className:"nav-buttons",children:[Object(o.jsx)(s.b,{to:"/home",onClick:function(){t.length?a(C(1,t)):a(C(1,e)),document.getElementsByClassName("nopagination")[0]&&(document.getElementsByClassName("nopagination")[0].className="pagination")},children:Object(o.jsx)("li",{id:"home",children:"Home"})}),Object(o.jsx)(s.b,{to:"/home/add",children:Object(o.jsx)("li",{id:"crear",children:"Crear"})})]})};var B=function(){return Object(o.jsxs)("nav",{className:"nav",children:[Object(o.jsx)(T,{}),Object(o.jsx)(I,{})]})},U="GAME_DETAIL_REQUEST",z="GAME_DETAIL_SUCCESS",H="GAME_DETAIL_FAIL",W="RESET";a(75);var Q=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.games})).games,a=Object(i.c)((function(e){return e.gameDetail})),c=a.gameDetail,r=a.isLoading,s=Object(M.g)().id,l=c.background_image,u=c.description,j=c.genres,d=c.name,b=c.platforms,p=c.rating,O=c.released;return p||(p=""),O||(O="A\xfan no hay fecha"),n.useEffect((function(){return e(function(e){return function(){var t=Object(x.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:U}),t.prev=1,t.next=4,f.a.get("/videogame/".concat(e));case 4:n=t.sent,a({type:z,payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:H,payload:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(s)),function(){e({type:W})}}),[e,s]),n.useEffect((function(){e(R()),t.sort((function(e,t){var a=e.hasOwnProperty("added"),n=t.hasOwnProperty("added");return a&&n?t.added-e.added:a?1:n?-1:0}))}),[e,t]),r?Object(o.jsx)("div",{className:"loading"}):Object(o.jsxs)("div",{className:"detail-container",children:[Object(o.jsx)("div",{className:"detail-title",children:Object(o.jsxs)("p",{children:[null===d||void 0===d?void 0:d.replace(/-/g," ")," (","".concat(p,"\u2b50"),")"]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("p",{children:["Fecha de lanzamiento: ",O]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("p",{children:["Genero(s):",null===j||void 0===j?void 0:j.map((function(e,t){return t===j.length-1?e.name:" "+e.name+", "}))]})}),Array.isArray(b)?Object(o.jsx)("div",{children:Object(o.jsxs)("p",{children:["Plataforma(s):",b.map((function(e,t){return t===b.length-1?e.platform.name:" "+e.platform.name+", "}))]})}):Object(o.jsx)("div",{children:Object(o.jsxs)("p",{children:["Plataforma(s): ",b]})}),Object(o.jsx)("div",{className:"detail-description",dangerouslySetInnerHTML:{__html:u}}),Object(o.jsx)("div",{className:"detail-image-container",children:l?Object(o.jsx)("img",{className:"detail-image",src:l,alt:""}):Object(o.jsx)("img",{className:"detail-image-default",src:A,alt:""})})]})},X="ALL_GAMES_REQUEST",q="ALL_GAMES_SUCCESS",J="ALL_GAMES_FAIL";function V(){return function(){var e=Object(x.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:X}),e.prev=1,e.next=4,f.a.get("/videogames");case 4:a=e.sent,t({type:q,payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:J,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}var K=a(17),Y=a(2),Z=a(22);a(76);var $=function(){var e=n.useState({name:"",description:"",released:"",rating:"",background_image:""}),t=Object(w.a)(e,2),a=t[0],c=t[1],r=n.useState([]),s=Object(w.a)(r,2),l=s[0],u=s[1],j=n.useState([]),d=Object(w.a)(j,2),b=d[0],p=d[1],O=n.useState(!1),g=Object(w.a)(O,2),h=g[0],v=g[1],y=Object(M.f)(),S=Object(i.b)();function E(){return(E=Object(x.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,l.length){e.next=4;break}throw new Error("Deb\xe9s seleccionar al menos una plataforma");case 4:return v(!0),e.next=7,f.a.post("/videogame",Object(Y.a)(Object(Y.a)({},a),{},{platforms:l,genres:b}));case 7:n=e.sent,v(!1),S(V()),alert(n.data),y(0),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),alert(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}function k(e){c(Object(Y.a)(Object(Y.a)({},a),{},Object(K.a)({},e.target.name,e.target.value)))}return Object(o.jsxs)("div",{className:"add-game",children:[Object(o.jsx)("h1",{children:"A\xf1adir un juego"}),Object(o.jsxs)("form",{onSubmit:function(e){return E.apply(this,arguments)},children:[Object(o.jsxs)("label",{children:["Nombre:",Object(o.jsx)("input",{type:"text",required:!0,name:"name",value:a.name,onChange:k,placeholder:"Mi primer juego"})]}),Object(o.jsxs)("label",{children:["Descripci\xf3n:",Object(o.jsx)("textarea",{required:!0,name:"description",value:a.description,onChange:k,placeholder:"Escrib\xed una descripci\xf3n sobre tu juego..."})]}),Object(o.jsxs)("label",{children:["Fecha de Lanzamiento:",Object(o.jsx)("input",{type:"date",name:"released",value:a.released,onChange:k})]}),Object(o.jsxs)("label",{children:["Rating:",Object(o.jsx)("input",{type:"number",name:"rating",value:a.rating,onChange:k,placeholder:"3.50",step:"0.01",min:"0",max:"5"})]}),Object(o.jsxs)("label",{children:["Imagen:",Object(o.jsx)("input",{type:"url",name:"background_image",value:a.background_image,onChange:k})]}),Object(o.jsxs)("fieldset",{onChange:function(e){l.includes(e.target.value)?u(l.filter((function(t){return t!==e.target.value}))):u([].concat(Object(Z.a)(l),[e.target.value]))},children:[Object(o.jsx)("legend",{children:"Plataformas"}),Object(o.jsx)("input",{type:"checkbox",value:"PC"}),"PC",Object(o.jsx)("input",{type:"checkbox",value:"Xbox 360"}),"Xbox 360",Object(o.jsx)("input",{type:"checkbox",value:"Xbox One"}),"Xbox One",Object(o.jsx)("input",{type:"checkbox",value:"PlayStation 1"}),"PS1",Object(o.jsx)("input",{type:"checkbox",value:"PlayStation 2"}),"PS2",Object(o.jsx)("input",{type:"checkbox",value:"PlayStation 3"}),"PS3",Object(o.jsx)("input",{type:"checkbox",value:"PlayStation 4"}),"PS4",Object(o.jsx)("input",{type:"checkbox",value:"PlayStation 5"}),"PS5",Object(o.jsx)("input",{type:"checkbox",value:"Nintendo Wii"}),"Nintendo Wii",Object(o.jsx)("input",{type:"checkbox",value:"Nintendo Wii U"}),"Nintendo Wii U",Object(o.jsx)("input",{type:"checkbox",value:"Nintendo Switch"}),"Nintendo Switch",Object(o.jsx)("input",{type:"checkbox",value:"Mobile"}),"Mobile"]}),Object(o.jsxs)("fieldset",{onChange:function(e){if(b.length>3&&e.target.checked)return alert("No pod\xe9s seleccionar mas de 4"),void(e.target.checked=!1);b.includes(e.target.value)?p(b.filter((function(t){return t!==e.target.value}))):p([].concat(Object(Z.a)(b),[e.target.value]))},children:[Object(o.jsx)("legend",{children:"Generos (m\xe1ximo 4)"}),Object(o.jsx)("input",{type:"checkbox",value:"1"}),"Action",Object(o.jsx)("input",{type:"checkbox",value:"2"}),"Indie",Object(o.jsx)("input",{type:"checkbox",value:"3"}),"Adventure",Object(o.jsx)("input",{type:"checkbox",value:"4"}),"RPG",Object(o.jsx)("input",{type:"checkbox",value:"5"}),"Strategy",Object(o.jsx)("input",{type:"checkbox",value:"6"}),"Shooter",Object(o.jsx)("input",{type:"checkbox",value:"7"}),"Casual",Object(o.jsx)("input",{type:"checkbox",value:"8"}),"Simulation",Object(o.jsx)("input",{type:"checkbox",value:"9"}),"Puzzle",Object(o.jsx)("input",{type:"checkbox",value:"10"}),"Arcade",Object(o.jsx)("input",{type:"checkbox",value:"11"}),"Platformer",Object(o.jsx)("input",{type:"checkbox",value:"12"}),"Racing",Object(o.jsx)("input",{type:"checkbox",value:"13"}),"Massively Multiplayer",Object(o.jsx)("input",{type:"checkbox",value:"14"}),"Sports",Object(o.jsx)("input",{type:"checkbox",value:"15"}),"Fighting",Object(o.jsx)("input",{type:"checkbox",value:"16"}),"Family",Object(o.jsx)("input",{type:"checkbox",value:"17"}),"Board Games",Object(o.jsx)("input",{type:"checkbox",value:"18"}),"Educational",Object(o.jsx)("input",{type:"checkbox",value:"19"}),"Card"]}),!h&&Object(o.jsx)("button",{children:"A\xf1adir Juego"}),h&&Object(o.jsx)("button",{disabled:!0,children:"Loading..."})]})]})},ee="ALL_GENRES_REQUEST",te="ALL_GENRES_SUCCESS",ae="ALL_GENRES_FAIL";var ne=function(){var e=Object(i.b)();return Object(n.useEffect)((function(){e(V()),e(function(){var e=Object(x.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:ee}),e.prev=1,e.next=4,f.a.get("/genres");case 4:a=e.sent,t({type:te,payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:ae,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(M.c,{children:[Object(o.jsx)(M.a,{path:"/",element:Object(o.jsx)(g,{})}),Object(o.jsx)(M.a,{path:"/home",element:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(B,{}),Object(o.jsx)(F,{})]})}),Object(o.jsx)(M.a,{path:"/home/add",element:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(B,{}),Object(o.jsx)($,{})]})}),Object(o.jsx)(M.a,{path:"/home/game/:id",element:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(B,{}),Object(o.jsx)(Q,{})]})})]})})},ce=(a(77),a(14)),re=a(32),ie={isLoading:!1,games:[],error:void 0};var se={isLoading:!1,genres:[],error:void 0};var oe={isLoading:!1,gameDetail:{},error:void 0};var le={isLoading:!1,gamesOnPage:[],error:void 0};var ue={filteredGames:[]};var je=Object(ce.combineReducers)({games:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!0});case q:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!1,games:t.payload});case J:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!1,error:t.payload});default:return e}},genres:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!0});case te:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!1,genres:t.payload});case ae:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!1,error:t.payload});default:return e}},gameDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!0});case z:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!1,gameDetail:Object(Y.a)(Object(Y.a)({},e.gameDetail),t.payload)});case H:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!1,error:t.payload});case W:return Object(Y.a)(Object(Y.a)({},e),{},{gameDetail:{}});default:return e}},gamesOnPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!0});case S:case k:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!1,gamesOnPage:t.payload});case E:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!1,error:t.payload});default:return e}},filteredGames:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(Y.a)(Object(Y.a)({},e),{},{filteredGames:t.payload});case G:return Object(Y.a)(Object(Y.a)({},e),{},{filteredGames:[]});default:return e}}}),de=a(33),be=Object(ce.createStore)(je,Object(re.composeWithDevTools)(Object(ce.applyMiddleware)(de.a))),pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,82)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},Oe=a(34);a.n(Oe).a.config(),f.a.defaults.baseURL="https://guarded-wildwood-51698.herokuapp.com/",r.a.render(Object(o.jsx)(n.StrictMode,{children:Object(o.jsx)(i.a,{store:be,children:Object(o.jsx)(s.a,{basename:"/SPA-Videojuegos",children:Object(o.jsx)(ne,{})})})}),document.getElementById("root")),pe()}},[[81,1,2]]]);
//# sourceMappingURL=main.13354b6b.chunk.js.map
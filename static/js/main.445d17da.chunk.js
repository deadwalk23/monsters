(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(3),o=n.n(c),a=(n(12),n(4)),i=n(5),l=n(7),h=n(6),u=(n(13),n(0)),d=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set3&size=180x180")}),Object(u.jsxs)("h2",{children:[" ",e.monster.name]}),Object(u.jsx)("p",{children:e.monster.email})]})},j=(n(15),function(e){return Object(u.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(u.jsx)(d,{monster:e},e.id)}))})}),m=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return Object(u.jsx)("div",{class:"cntr",children:Object(u.jsx)("div",{class:"cntr-innr",children:Object(u.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})})})}),b=(n(17),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={monsters:[],searchField:""},s}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,s=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Monsters-Rolo"}),Object(u.jsx)(m,{placeholder:"Search Monsters",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(u.jsx)(j,{monsters:r})]})}}]),n}(s.Component)),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.445d17da.chunk.js.map
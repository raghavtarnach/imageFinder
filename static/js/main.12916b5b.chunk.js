(this["webpackJsonppic-finder"]=this["webpackJsonppic-finder"]||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(17),i=a.n(s),c=a(8),u=a.n(c),o=a(18),l=a(3),m=a(4),h=a(6),p=a(5),j=a(0),b=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"ui segment",children:Object(j.jsx)("form",{className:"ui form",onSubmit:this.onFormSubmit,children:Object(j.jsx)("div",{className:"field",children:Object(j.jsx)("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})},placeholder:"Search image..."})})})})}}]),a}(r.a.Component),f=a(19),d=a.n(f).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID Ba9LukJ8q1mI-ZGFlpKwdIy0ZX1KOObbayLSaEXAL_g"}}),v=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setSpans=function(){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/20);n.setState({spans:t})},n.state={spans:0},n.imageRef=r.a.createRef(),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){return Object(j.jsx)("div",{style:{gridRowEnd:"span ".concat(this.state.spans)},children:Object(j.jsx)("img",{ref:this.imageRef,src:this.props.image.urls.regular,alt:"loading.."})})}}]),a}(n.Component),O=(a(44),function(e){var t=e.images.map((function(e){return Object(j.jsx)(v,{image:e},e.id)}));return Object(j.jsx)("div",{className:"imageList",children:t})}),g=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchSubmit=function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.get("https://api.unsplash.com/search/photos",{params:{query:a}});case 2:n=t.sent,e.setState({images:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"ui container",style:{marginTop:"50px"},children:[Object(j.jsx)("h1",{children:"Image Finder"}),Object(j.jsx)(b,{onSubmit:this.onSearchSubmit}),Object(j.jsx)(O,{images:this.state.images})]})}}]),a}(r.a.Component);i.a.render(Object(j.jsx)(g,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.12916b5b.chunk.js.map
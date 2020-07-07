(this["webpackJsonpadd-to-cart"]=this["webpackJsonpadd-to-cart"]||[]).push([[0],{59:function(t,e,a){t.exports=a(89)},64:function(t,e,a){},65:function(t,e,a){},89:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),o=(a(64),a(65),a(20)),i=a(5),u=a(15),s=(a(70),a(14)),m=a(50),d=a(51),p=a(6),E=a(35),f={list:[],cartProducts:[],totalAmount:0,totalPrice:0},h=Object(s.combineReducers)({products:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0,a=Object(E.a)(t.cartProducts);switch(e.type){case"GET_PRODUCTS":return Object(p.a)(Object(p.a)({},t),{},{list:e.payload});case"ADD_PRODUCT_TO_CART":return a&&a.length&&-1!==a.indexOf(e.payload)?a.forEach((function(t){t.title===e.payload.title&&(t.qty=t.qty+1,t.cost=t.qty*t.price)})):(e.payload.qty=1,e.payload.cost=+e.payload.price,a.push(e.payload),a=Object(E.a)(a)),Object(p.a)(Object(p.a)({},t),{},{cartProducts:a});case"UPDATE_CART_QTY":var n=t.cartProducts.length?t.cartProducts.map((function(t){return t.qty})).reduce((function(t,e){return t+e})):0;return Object(p.a)(Object(p.a)({},t),{},{totalAmount:n});case"UPDATE_TOTAL_PRICE":var c=t.cartProducts.length?t.cartProducts.map((function(t){return+t.cost})).reduce((function(t,e){return t+e})):0;return Object(p.a)(Object(p.a)({},t),{},{totalPrice:c});case"INCREASE_QUANTITY":return a&&a.length&&a.forEach((function(t){t.title===e.title&&(t.qty=t.qty+1,t.cost=t.qty*t.price)})),Object(p.a)(Object(p.a)({},t),{},{cartProducts:a});case"DECREASE_QUANTITY":return a&&a.length&&a.forEach((function(t){t.title===e.title&&(t.qty=t.qty-1,t.cost=t.qty*t.price)})),Object(p.a)(Object(p.a)({},t),{},{cartProducts:a});case"REMOVE_PRODUCT":return Object(p.a)(Object(p.a)({},t),{},{cartProducts:a.filter((function(t){return t.title!==e.title}))});default:return t}}}),A=[d.a],y=Object(s.createStore)(h,{},Object(m.composeWithDevTools)(s.applyMiddleware.apply(void 0,A))),b=a(18),g=a(19),O=a(22),v=a(21),P=a(94),T=a(95),C=a(58),j=a(96),R=a(91),D=a(52),w=a.n(D),N=function(t){t({type:"UPDATE_CART_QTY",payload:null}),t({type:"UPDATE_TOTAL_PRICE",payload:null})},k=function(t){Object(O.a)(a,t);var e=Object(v.a)(a);function a(){var t;Object(b.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).addToCart=function(e){t.props.addProductToCart(e)},t}return Object(g.a)(a,[{key:"componentDidMount",value:function(){this.props.getProducts()}},{key:"render",value:function(){var t=this,e=this.props.list;return c.a.createElement("div",{className:"card-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col d-flex align-content-start flex-wrap"},e.length?e.map((function(e,a){return c.a.createElement(P.a,{key:a,className:"card-width"},c.a.createElement(P.a.Img,{variant:"top",className:"prod-image",src:e.filename}),c.a.createElement(P.a.Body,null,c.a.createElement(P.a.Title,null,e.title),c.a.createElement(P.a.Text,null,e.description)),c.a.createElement(T.a,{className:"list-group-flush"},c.a.createElement(C.a,null,"Price : ",e.price),c.a.createElement(C.a,null,"Ratings : ",e.rating)),c.a.createElement(P.a.Body,null,c.a.createElement(P.a.Link,{className:"cp",onClick:function(){return t.addToCart(e)}},c.a.createElement(j.a,{variant:"outline-secondary"},c.a.createElement("img",{alt:"",src:"https://img.icons8.com/color/25/000000/shopping-cart.png"})," Add to cart"))))})):c.a.createElement(R.a,{animation:"border"}))))}}]),a}(n.Component),U={addProductToCart:function(t){return function(e){e({type:"ADD_PRODUCT_TO_CART",payload:t}),N(e)}},getProducts:function(){return function(t){w.a.get("".concat("https://api4286.s3.ap-south-1.amazonaws.com").concat("/products.json")).then((function(e){console.log("test",e),t({type:"GET_PRODUCTS",payload:e.data})})).catch((function(t){console.log(t)}))}}},Q=Object(u.b)((function(t){return Object(p.a)({},t.products)}),U)(k),_=a(93),S=function(t){Object(O.a)(a,t);var e=Object(v.a)(a);function a(){return Object(b.a)(this,a),e.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(_.a,{bg:"light",variant:"light",sticky:"top"},c.a.createElement(_.a.Brand,null,c.a.createElement("span",{className:"font-weight-bold"}," Shopping cart")),c.a.createElement(_.a.Toggle,null),c.a.createElement(_.a.Collapse,{className:"justify-content-end"},c.a.createElement(o.b,{to:"/cart"},c.a.createElement(_.a.Text,null,c.a.createElement("img",{alt:"",src:"https://img.icons8.com/color/40/000000/shopping-cart.png"}),c.a.createElement("span",{className:"font-weight-bold cart-qty"},this.props.totalAmount))))),c.a.createElement(Q,null))}}]),a}(n.Component),q=Object(u.b)((function(t){return Object(p.a)({},t.products)}),null)(S),B=a(92),I=function(t){Object(O.a)(a,t);var e=Object(v.a)(a);function a(){var t;Object(b.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).removeProduct=function(e){t.props.removeProductFromCart(e)},t.increaseQuantity=function(e){t.props.increaseQuantity(e)},t.decreaseQuantity=function(e){t.props.decreaseQuantity(e)},t}return Object(g.a)(a,[{key:"render",value:function(){var t=this,e=this.props,a=e.cartProducts,n=e.totalPrice;return c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:" mt-5 mb-4"},c.a.createElement("h4",null,c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{alt:"",className:"mr-3",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA7UlEQVRIieWVzW0CMRCFv1nRARe8FMMBOmEbCIqCED9KAgRxSFJADIWAV6IaONECwyFIOWXXNotQlHcef0/20zzDv1Zjs26VzSSx8Kazb0ly2hlnB0VztRh46uxS4QlAkHqlBmZrZ1zgKnwe2t3HonkJhYsw/IFnvbIz3hmY3E5D4eB5g9StXkHHoXAvg2vgpQapsy/AJBYOBRmk26/na+GFBlXp5k9035CrMPHeZJPbqSijUBPvkA/tbKzKHECUB5PbD59zQV0E4X0UbADfdc2lUUHe953fGzVqD/adrC+wAFD0GMPwks+X+fd1BmiqbBYJWPm8AAAAAElFTkSuQmCC"})),"Products in cart")),c.a.createElement(B.a,{responsive:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"Product"),c.a.createElement("th",null,"Unit Price"),c.a.createElement("th",null,"Quantity"),c.a.createElement("th",null,"Cost"),c.a.createElement("th",null,"\u2b06\u2b07"),c.a.createElement("th",null,"Action"))),c.a.createElement("tbody",null,a.length?a.map((function(e,a){return c.a.createElement("tr",{key:a},c.a.createElement("td",null,a+1),c.a.createElement("td",null,e.title),c.a.createElement("td",null,e.price),c.a.createElement("td",null,e.qty),c.a.createElement("td",null,e.cost.toFixed(2)),c.a.createElement("td",null,c.a.createElement(j.a,{variant:"outline-success mr-2",onClick:function(){return t.increaseQuantity(e.title)}},"+"),c.a.createElement(j.a,{disabled:0===e.qty,variant:"outline-danger",onClick:function(){return t.decreaseQuantity(e.title)}},"\u2013")),c.a.createElement("td",null,c.a.createElement(j.a,{variant:"outline-dark",onClick:function(){return t.removeProduct(e.title)}},"Remove")))})):c.a.createElement("tr",{colSpan:"6",className:"text-center"},c.a.createElement("td",null,"No products in cart.")),c.a.createElement("tr",null,c.a.createElement("td",{className:"text-right font-weight-bold",colSpan:"4"},"Total :"),c.a.createElement("td",{colSpan:"7"},n.toFixed(2))))))))}}]),a}(n.Component),x={removeProductFromCart:function(t){return function(e){e({type:"REMOVE_PRODUCT",title:t}),N(e)}},increaseQuantity:function(t){return function(e){e({type:"INCREASE_QUANTITY",title:t}),N(e)}},decreaseQuantity:function(t){return function(e){e({type:"DECREASE_QUANTITY",title:t}),N(e)}}},z=Object(u.b)((function(t){return Object(p.a)({},t.products)}),x)(I);var F=function(){return c.a.createElement(u.a,{store:y},c.a.createElement(o.a,null,c.a.createElement(i.a,{path:"/",exact:!0,component:q}),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/cart",component:z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.6b38cc8f.chunk.js.map
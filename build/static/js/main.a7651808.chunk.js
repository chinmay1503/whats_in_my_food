(this["webpackJsonpwhats-in-my-food-spa"]=this["webpackJsonpwhats-in-my-food-spa"]||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),r=a(33),i=a.n(r),n=(a(85),a(86),a(87),a(16)),o=a(17),l=a(21),d=a(19),h=a(18),j=a(11),u=a(8),b=a(1),m=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).setTerm=s.setTerm.bind(Object(l.a)(s)),s.onKeyDown=s.onKeyDown.bind(Object(l.a)(s)),s.onClick=s.onClick.bind(Object(l.a)(s)),s.state={searchTerm:"",placeholder:"Search for a Food Product...",navClass:"navLink"},s}return Object(o.a)(a,[{key:"setTerm",value:function(e){""!==e.target.value?this.setState({navClass:"navLinkActive"}):this.setState({navClass:"navLink"}),this.setState({searchTerm:e.target.value}),e.preventDefault()}},{key:"onKeyDown",value:function(e){"Enter"===e.key&&(""!==this.state.searchTerm?document.getElementById("submit").click():this.setState({placeholder:"Please enter a valid Food Product"}),e.stopPropagation(),e.preventDefault())}},{key:"onClick",value:function(e){""===this.state.searchTerm&&this.setState({placeholder:"Please enter a valid Food Product"})}},{key:"render",value:function(){return Object(b.jsx)(j.a,{children:Object(b.jsx)("div",{className:"homeContainer",children:Object(b.jsxs)("div",{className:"main_Quote_Container",children:[Object(b.jsx)("div",{className:"imageDiv",children:Object(b.jsx)("img",{className:"main_quote",alt:"Calorie_Weightage_Img",src:"/images/main_quote.png"})}),Object(b.jsxs)("div",{className:"mainContainer",children:[Object(b.jsx)("h1",{children:"Search For a Food product"}),Object(b.jsx)("div",{className:"containSearch",children:Object(b.jsxs)("div",{className:"searchContainer",children:[Object(b.jsx)("input",{onKeyDown:this.onKeyDown,className:"searchBox shadow",type:"text",onChange:this.setTerm,placeholder:this.state.placeholder}),Object(b.jsx)("button",{className:"searchButton",onClick:this.onClick,children:Object(b.jsx)(j.b,{id:"submit",className:this.state.navClass,to:"/product/".concat(this.state.searchTerm),children:Object(b.jsx)("img",{className:"searchIcon",alt:"SearchIcon",src:"/images/searchIcon.png"})})})]})})]})]})})})}}]),a}(s.Component),p=a(120),g=a(44),v=a(28),O=a.n(v),x=O.a.create({baseURL:"".concat("http://localhost:5000")}),N=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).reverseList=function(e){var t=s.state.items.data.products;"Sort A-Z"===s.state.filterMessage?s.setState({imageSource:"./images/sortIcon.jpg",filterMessage:"Sort Z-A"}):s.setState({imageSource:"./images/sortIconUp.png",filterMessage:"Sort A-Z"}),t.reverse(),s.setState({items:{data:{products:t}}}),e.preventDefault()},s.state={error:null,isLoaded:!1,items:[],spinAnim:new p.a.Value(0),filterMessage:"Sort Z-A",imageSource:"./images/sortIcon.jpg"},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.loop(p.a.timing(this.state.spinAnim,{toValue:100,duration:3e5,easing:g.a.linear,useNativeDriver:!0})).start(),x.get("/api/listAllProductNames/1").then((function(t){e.setState({isLoaded:!0,items:t.data})}),(function(t){console.log(t),e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e={transform:[{rotate:this.state.spinAnim.interpolate({inputRange:[0,1],outputRange:["0deg","360deg"]})}],position:"absolute",top:"5vw",left:"5vw",right:"5vw",bottom:"5vw",height:"10vw",width:"10vw"},t=this.state,a=t.error,s=t.isLoaded;t.items;return a?Object(b.jsxs)("div",{class:"text-center errorMessage",children:["Error: ",a.message]}):s?Object(b.jsx)(j.a,{children:Object(b.jsxs)("div",{className:"contentContainer",children:[Object(b.jsx)("div",{className:"browseWidgetContainer",children:Object(b.jsxs)("button",{className:"text-center flipList",onClick:this.reverseList,children:[Object(b.jsx)("img",{className:"sortImage",src:this.state.imageSource,alt:"sort"}),this.state.filterMessage]})}),Object(b.jsx)("div",{className:"product-List",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"browseHeaderText",children:" Browse All Food Products "}),Object(b.jsx)("div",{className:"mainSearchContainer",children:Object.entries(this.state.items.data.products).map((function(e){return Object(b.jsxs)(j.b,{to:"/product/".concat(e[1].food_name),className:"shadow productBox",children:[Object(b.jsx)("div",{className:"productImageHolder",children:Object(b.jsx)("img",{className:"productSearchImage",alt:"food_product",src:e[1].image_url})}),Object(b.jsx)("div",{className:"productSearchText",children:e[1].food_name})]})}))})]})})]})}):Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"loadingContainer",children:[Object(b.jsx)("img",{className:"plate",src:"../images/loadingIcon.png",alt:"background"}),Object(b.jsx)(p.a.Image,{style:e,source:"../images/ingredientIcon3.png",alt:"carrot"})]}),Object(b.jsx)("h1",{className:"text-center loadingText",children:"Gathering Nutrients....."})]})}}]),a}(s.Component);O.a.defaults.headers.common["X-Api-Key"]="3fCDCTufwyIP4tM32g59EA==DGcFmT8tkGt7yyyF";var f=O.a.create({baseURL:"".concat("https://api.calorieninjas.com/v1/")}),C=(a(37),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).getProductDetails=function(e){x.get("/api/searchProductByName/".concat(e)).then((function(e){if(e.data&&e.data.data&&e.data.data.products){var t=e.data.data.products[0];s.setState({productName:t.food_name,productImgUrl:t.image_url})}}),(function(e){s.setState({isLoaded:!0,error:e})}))},s.state={error:null,isLoaded:!1,items:[],productName:"",productImgUrl:"",spinAnim:new p.a.Value(0)},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.loop(p.a.timing(this.state.spinAnim,{toValue:100,duration:3e5,easing:g.a.linear,useNativeDriver:!0})).start();var t=this.props.match.params.productName;this.getProductDetails(t);var a="nutrition?query="+t;f.get(a).then((function(t){e.setState({isLoaded:!0,items:t.data})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e={transform:[{rotate:this.state.spinAnim.interpolate({inputRange:[0,1],outputRange:["0deg","360deg"]})}],position:"absolute",top:"5vw",left:"5vw",right:"5vw",bottom:"5vw",height:"10vw",width:"10vw"},t=this.state,a=t.error,s=t.isLoaded,c=t.items;if(a)return Object(b.jsxs)("div",{class:"text-center errorMessage",children:["Error: ",a.message]});if(!s)return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"loadingContainer",children:[Object(b.jsx)("img",{className:"plate",src:"../images/loadingIcon.png",alt:"background"}),Object(b.jsx)(p.a.Image,{style:e,source:"../images/ingredientIcon3.png",alt:"carrot"})]}),Object(b.jsx)("h1",{className:"text-center loadingText",children:"Gathering Nutrients....."})]});if(c){if(Array.isArray(c.items)&&c.items.length>0){var r=c.items[0],i=r.sugar_g,n=r.fiber_g,o=r.serving_size_g,l=r.sodium_mg,d=this.state.productName,h=r.fat_saturated_g,j=r.fat_total_g,u=r.calories,m=r.cholesterol_mg,g=r.protein_g,v=r.carbohydrates_total_g;return Object(b.jsx)("div",{className:"contentContainer",children:Object(b.jsxs)("div",{className:"productContainer",children:[Object(b.jsx)("h1",{className:"text-center",children:this.state.productName}),Object(b.jsx)("div",{className:"divider"}),Object(b.jsx)("div",{className:"photoHolder",children:Object(b.jsx)("img",{className:"productImage",alt:"productImage",src:"".concat(this.state.productImgUrl)})}),Object(b.jsxs)("div",{className:"statsContainer",children:[Object(b.jsx)("h2",{className:"productText",children:"Nutritional Statistics"}),Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{className:"table-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Name"}),Object(b.jsx)("th",{scope:"col",children:"Serving Size"}),Object(b.jsx)("th",{scope:"col",children:"Calories"}),Object(b.jsx)("th",{scope:"col",children:"Total Fat"}),Object(b.jsx)("th",{scope:"col",children:"Saturated Fat"}),Object(b.jsx)("th",{scope:"col",children:"Cholosterol"}),Object(b.jsx)("th",{scope:"col",children:"Sodium"}),Object(b.jsx)("th",{scope:"col",children:"Carbohydrates"}),Object(b.jsx)("th",{scope:"col",children:"Fiber"}),Object(b.jsx)("th",{scope:"col",children:"Sugar"}),Object(b.jsx)("th",{scope:"col",children:"Protein"})]})}),Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{className:"table-light",children:[Object(b.jsx)("td",{children:d}),Object(b.jsxs)("td",{children:[o,"g"]}),Object(b.jsx)("td",{children:u}),Object(b.jsxs)("td",{children:[j,"g"]}),Object(b.jsxs)("td",{children:[h,"g"]}),Object(b.jsxs)("td",{children:[m,"mg"]}),Object(b.jsxs)("td",{children:[l,"mg"]}),Object(b.jsxs)("td",{children:[v,"g"]}),Object(b.jsxs)("td",{children:[n,"g"]}),Object(b.jsxs)("td",{children:[i,"g"]}),Object(b.jsxs)("td",{children:[g,"g"]})]})})]})]})]})})}return Object(b.jsx)("div",{class:"text-center errorMessage",children:"Error: No Such Food Product Found"})}}}]),a}(s.Component)),_=a(79),y=(a(56),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={product1:"",product2:""},s.handleChange=s.handleChange.bind(Object(l.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(l.a)(s)),s}return Object(o.a)(a,[{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(_.a)({},t,e.target.value))}},{key:"handleSubmit",value:function(e){console.log("Product1 value",this.state.product1),console.log("Product2 value",this.state.product2)}},{key:"render",value:function(){return Object(b.jsxs)(j.a,{children:[Object(b.jsx)("h1",{className:"heading",style:{textAlign:"center"},children:"Compare Products"}),Object(b.jsxs)("div",{className:"compareContainer",children:[Object(b.jsx)("span",{className:"compareproductText",children:"Product 1:"})," ",Object(b.jsx)("input",{className:"productInput",type:"text",name:"product1",value:this.state.product1,onChange:this.handleChange}),Object(b.jsx)("h3",{className:"versus",children:"V/S"}),Object(b.jsx)("span",{className:"compareproductText",children:"Product 2:"})," ",Object(b.jsx)("input",{className:"productInput",type:"text",name:"product2",value:this.state.product2,onChange:this.handleChange}),Object(b.jsx)("button",{className:"btn btn-primary compareSubmit",value:"Compare",onClick:this.handleSubmit,children:Object(b.jsx)(j.b,{className:"compareLink",to:"/compareProducts/".concat(this.state.product1,"/").concat(this.state.product2),children:"Compare"})})]})]})}}]),a}(s.Component)),k=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).fetchProductStats=function(e,t){var a="nutrition?query="+e;f.get(a).then((function(e){var a=s.state.items,c=t,r=e.data.items[0],i={};i[c]=r,"product1"===t?a.unshift(i):a.push(i),s.setState({isLoaded:!0})}),(function(e){s.setState({isLoaded:!0,error:e})}))},s.getProduct2Details=function(e){x.get("/api/searchProductByName/".concat(e)).then((function(e){if(e.data&&e.data.data&&e.data.data.products){var t=e.data.data.products[0];s.setState({product2_Name:t.food_name,product2_ImgUrl:t.image_url})}}),(function(e){s.setState({isLoaded:!0,error:e})}))},s.getProduct1Details=function(e){x.get("/api/searchProductByName/".concat(e)).then((function(e){if(e.data&&e.data.data&&e.data.data.products){var t=e.data.data.products[0];s.setState({product1_Name:t.food_name,product1_ImgUrl:t.image_url})}}),(function(e){s.setState({isLoaded:!0,error:e})}))},s.state={error:null,isLoaded:!1,items:[],product1_Name:"",product1_ImgUrl:"",product2_Name:"",product2_ImgUrl:"",spinAnim:new p.a.Value(0)},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){p.a.loop(p.a.timing(this.state.spinAnim,{toValue:100,duration:3e5,easing:g.a.linear,useNativeDriver:!0})).start();var e=this.props.match.params.product1,t=this.props.match.params.product2;this.getProduct1Details(e),this.getProduct2Details(t),this.fetchProductStats(e,"product1"),this.fetchProductStats(t,"product2")}},{key:"render",value:function(){var e={transform:[{rotate:this.state.spinAnim.interpolate({inputRange:[0,1],outputRange:["0deg","360deg"]})}],position:"absolute",top:"5vw",left:"5vw",right:"5vw",bottom:"5vw",height:"10vw",width:"10vw"},t=this.state,a=t.error,s=t.isLoaded,c=t.items;if(a)return Object(b.jsxs)("div",{class:"text-center errorMessage",children:["Error: ",a.message]});if(!s)return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"loadingContainer",children:[Object(b.jsx)("img",{className:"plate",src:"../images/loadingIcon.png",alt:"background"}),Object(b.jsx)(p.a.Image,{style:e,source:"../images/ingredientIcon3.png",alt:"carrot"})]}),Object(b.jsx)("h1",{className:"text-center loadingText",children:"Gathering Nutrients....."})]});if(c){if(Array.isArray(c)&&2==c.length&&c[0].product1&&c[1].product2){var r=c[0].product1,i=c[1].product2;return Object(b.jsx)("div",{className:"contentContainer",children:Object(b.jsxs)("div",{className:"productContainer",children:[Object(b.jsxs)("div",{className:"photoContainer",children:[Object(b.jsxs)("div",{className:"product1Container",children:[Object(b.jsx)("h1",{className:"text-center",children:this.state.product1_Name}),Object(b.jsx)("div",{className:"divider"}),Object(b.jsx)("div",{className:"compare photoHolder",children:Object(b.jsx)("img",{className:"productImage",alt:"productImage",src:"".concat(this.state.product1_ImgUrl)})})]}),Object(b.jsx)("h3",{className:"versus compare",children:"V/S"}),Object(b.jsxs)("div",{className:"product2Container",children:[Object(b.jsx)("h1",{className:"text-center",children:this.state.product2_Name}),Object(b.jsx)("div",{className:"compare photoHolder",children:Object(b.jsx)("img",{className:"productImage",alt:"productImage",src:"".concat(this.state.product2_ImgUrl)})})]})]}),Object(b.jsxs)("div",{className:"statsContainer",children:[Object(b.jsx)("p",{className:"comparisonHeader",children:"Comparison Statistics"}),Object(b.jsx)("div",{id:"Comparison-card",children:Object(b.jsxs)("div",{id:"Comparison-statbars",className:"stat-bars",children:[Object(b.jsx)("div",{className:"stat-bars-label",children:Object(b.jsx)("p",{children:"Calories"})}),Object(b.jsxs)("div",{id:"hp-bars",className:"stat-bars",children:[Object(b.jsxs)("div",{className:"comparison-bar1",style:{"--bar-value":"".concat(r.calories,"%")},children:[" ",r.calories," "]}),Object(b.jsxs)("div",{className:"comparison-bar2",style:{"--bar-value":"".concat(i.calories,"%")},children:[" ",i.calories," "]})]}),Object(b.jsx)("div",{className:"stat-bars-label",children:Object(b.jsx)("p",{children:"Fat"})}),Object(b.jsxs)("div",{id:"hp-bars",className:"stat-bars",children:[Object(b.jsxs)("div",{className:"comparison-bar1",style:{"--bar-value":"".concat(r.fat_total_g,"%")},children:[" ",r.fat_total_g,"g "]}),Object(b.jsxs)("div",{className:"comparison-bar2",style:{"--bar-value":"".concat(i.fat_total_g,"%")},children:[" ",i.fat_total_g,"g "]})]}),Object(b.jsx)("div",{className:"stat-bars-label",children:Object(b.jsx)("p",{children:"Sugar"})}),Object(b.jsxs)("div",{id:"hp-bars",className:"stat-bars",children:[Object(b.jsxs)("div",{className:"comparison-bar1",style:{"--bar-value":"".concat(r.sugar_g,"%")},children:[" ",r.sugar_g,"g "]}),Object(b.jsxs)("div",{className:"comparison-bar2",style:{"--bar-value":"".concat(i.sugar_g,"%")},children:[" ",i.sugar_g,"g "]})]}),Object(b.jsx)("div",{className:"stat-bars-label",children:Object(b.jsx)("p",{children:"Protein"})}),Object(b.jsxs)("div",{id:"hp-bars",className:"stat-bars",children:[Object(b.jsxs)("div",{className:"comparison-bar1",style:{"--bar-value":"".concat(r.protein_g,"%")},children:[" ",r.protein_g,"g "]}),Object(b.jsxs)("div",{className:"comparison-bar2",style:{"--bar-value":"".concat(i.protein_g,"%")},children:[" ",i.protein_g,"g "]})]}),Object(b.jsx)("div",{className:"stat-bars-label",children:Object(b.jsx)("p",{children:"Carbohydrates"})}),Object(b.jsxs)("div",{id:"hp-bars",className:"stat-bars",children:[Object(b.jsxs)("div",{className:"comparison-bar1",style:{"--bar-value":"".concat(r.carbohydrates_total_g,"%")},children:[" ",r.carbohydrates_total_g,"g "]}),Object(b.jsxs)("div",{className:"comparison-bar2",style:{"--bar-value":"".concat(i.carbohydrates_total_g,"%")},children:[" ",i.carbohydrates_total_g,"g "]})]}),Object(b.jsx)("div",{className:"stat-bars-label",children:Object(b.jsx)("p",{children:"Fiber"})}),Object(b.jsxs)("div",{id:"hp-bars",className:"stat-bars",children:[Object(b.jsxs)("div",{className:"comparison-bar1",style:{"--bar-value":"".concat(r.fiber_g,"%")},children:[" ",r.fiber_g,"g "]}),Object(b.jsxs)("div",{className:"comparison-bar2",style:{"--bar-value":"".concat(i.fiber_g,"%")},children:[" ",i.fiber_g,"g "]})]}),Object(b.jsx)("div",{className:"stat-bars-label",children:Object(b.jsx)("p",{children:"Cholesterol"})}),Object(b.jsxs)("div",{id:"hp-bars",className:"stat-bars",children:[Object(b.jsxs)("div",{className:"comparison-bar1",style:{"--bar-value":"".concat(r.cholesterol_mg,"%")},children:[" ",r.cholesterol_mg,"mg "]}),Object(b.jsxs)("div",{className:"comparison-bar2",style:{"--bar-value":"".concat(i.cholesterol_mg,"%")},children:[" ",i.cholesterol_mg,"mg "]})]})]})})]})]})})}return Object(b.jsx)("div",{class:"text-center errorMessage",children:"Error: No Such Food Product Found"})}}}]),a}(s.Component),w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).handleNav=s.handleNav.bind(Object(l.a)(s)),s.handleNavClick=s.handleNavClick.bind(Object(l.a)(s)),s.state={backgroundClass:"background",worldClass:"worldButton",compareClass:"compareButton",browseClass:"browseButton",homeClass:"homeButton",burgerLine1:"line1",burgerLine2:"line2",burgerLine3:"line3"},s}return Object(o.a)(a,[{key:"handleNav",value:function(){"background"===this.state.backgroundClass?this.setState({backgroundClass:"backgroundActive",worldClass:"worldButtonActive",compareClass:"compareButtonActive",browseClass:"browseButtonActive",homeClass:"homeButtonActive",burgerLine1:"line1Active",burgerLine2:"line2Active",burgerLine3:"line3Active"}):this.setState({backgroundClass:"background",worldClass:"worldButton",compareClass:"compareButton",browseClass:"browseButton",homeClass:"homeButton",burgerLine1:"line1",burgerLine2:"line2",burgerLine3:"line3"})}},{key:"handleNavClick",value:function(){"backgroundActive"===this.state.backgroundClass&&this.setState({backgroundClass:"background",worldClass:"worldButton",compareClass:"compareButton",browseClass:"browseButton",homeClass:"homeButton",burgerLine1:"line1",burgerLine2:"line2",burgerLine3:"line3"})}},{key:"render",value:function(){return Object(b.jsxs)(j.a,{children:[Object(b.jsxs)("nav",{className:"nav",children:[Object(b.jsx)("div",{className:this.state.backgroundClass}),Object(b.jsx)(j.b,{exact:!0,to:"/",children:Object(b.jsx)("img",{className:"logo",src:"/images/logo.png",alt:"logoImg"})}),Object(b.jsx)("div",{className:"linkContainer",children:Object(b.jsxs)("ul",{className:"header",children:[Object(b.jsx)("li",{className:this.state.worldClass,children:Object(b.jsx)(j.b,{onClick:this.handleNavClick,to:"/calorie_world",children:"Calorie World"})}),Object(b.jsx)("li",{className:this.state.compareClass,children:Object(b.jsx)(j.b,{onClick:this.handleNavClick,to:"/compare",children:"Compare Products"})}),Object(b.jsx)("li",{className:this.state.browseClass,children:Object(b.jsx)(j.b,{onClick:this.handleNavClick,to:"/browse",children:"Browse Products"})}),Object(b.jsx)("li",{className:this.state.homeClass,children:Object(b.jsx)(j.b,{onClick:this.handleNavClick,exact:!0,to:"/",children:"Home"})})]})}),Object(b.jsxs)("button",{className:"burger",onClick:this.handleNav,children:[Object(b.jsx)("div",{className:this.state.burgerLine1}),Object(b.jsx)("div",{className:this.state.burgerLine2}),Object(b.jsx)("div",{className:this.state.burgerLine3})]})]}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)(u.a,{exact:!0,path:"/",component:m}),Object(b.jsx)(u.a,{exact:!0,path:"/browse",component:N}),Object(b.jsx)(u.a,{path:"/product/:productName",component:C}),Object(b.jsx)(u.a,{path:"/compare",component:y}),Object(b.jsx)(u.a,{path:"/compareProducts/:product1/:product2",component:k})]})]})}}]),a}(s.Component),S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,121)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),S()},37:function(e,t,a){},56:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}},[[118,1,2]]]);
//# sourceMappingURL=main.a7651808.chunk.js.map
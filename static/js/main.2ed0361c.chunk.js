(this["webpackJsonpworkout-builder-client"]=this["webpackJsonpworkout-builder-client"]||[]).push([[0],{68:function(e,t,a){e.exports=a(99)},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=a(5),s=a(65),u=a(13),i=a(18),m=a(29),p=a(21),E=Object(n.createContext)(),d=function(){var e=Object(n.useContext)(E).setUser;return r.a.createElement(m.a,{bg:"dark",variant:"dark"},r.a.createElement(p.LinkContainer,{to:"/homepage"},r.a.createElement(m.a.Brand,null,"Workout-Tracker")),r.a.createElement(i.a,{className:"mr-auto"},r.a.createElement(p.LinkContainer,{to:"/homepage"},r.a.createElement(i.a.Link,null,"Homepage")),r.a.createElement(p.LinkContainer,{to:"/workouts"},r.a.createElement(i.a.Link,null,"Workouts")),r.a.createElement(i.a.Link,{onClick:function(){return e({})}},"Logout")))},g=function(){return Object(n.useContext)(E).user.token?r.a.createElement(d,null):r.a.createElement(m.a,{bg:"dark",variant:"dark"},r.a.createElement(p.LinkContainer,{to:"/login"},r.a.createElement(m.a.Brand,null,"Workout-Tracker")),r.a.createElement(i.a,{className:"justify-content-end",style:{width:"100%"}},r.a.createElement(p.LinkContainer,{to:"/login"},r.a.createElement(i.a.Link,null,"Login")),r.a.createElement(p.LinkContainer,{to:"/register"},r.a.createElement(i.a.Link,null,"Register")),r.a.createElement(p.LinkContainer,{to:"/exerciseBuilder"},r.a.createElement(i.a.Link,null,"Build Workout"))))},h=a(7),f=a(9),b=a.n(f),x=a(17),v=a(15),k=a.n(v),j=a(6),y=a(41),O=a(33),w=a(40),C=a(25),N="https://mighty-wave-63765.herokuapp.com",S=("".concat(N,"/auth/register"),function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),i=s[0],m=s[1],p=Object(n.useState)(""),E=Object(o.a)(p,2),d=E[0],g=E[1],h=Object(n.useState)(""),f=Object(o.a)(h,2),v=f[0],S=f[1],L=Object(n.useState)(""),B=Object(o.a)(L,2),G=B[0],W=B[1],D=Object(n.useState)(""),I=Object(o.a)(D,2),T=I[0],z=I[1],H=function(){var e=Object(x.a)(b.a.mark((function e(t){var n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,k.a.post("".concat(N,"/auth/register"),{firstName:a,lastName:i,email:d,password:v});case 4:n=e.sent,r=n.data,c=r.message,r.success?z(c):W(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),W("Failed to create account. Please try again.");case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(w.a,{className:"mt-4"},r.a.createElement(C.a,{md:{span:6,offset:3}},r.a.createElement(j.a,{onSubmit:H},r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"First Name"),r.a.createElement(j.a.Control,{type:"text",placeholder:"Enter first name",onChange:function(e){c(e.target.value)},value:a})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Last Name"),r.a.createElement(j.a.Control,{type:"text",placeholder:"Enter last name",onChange:function(e){m(e.target.value)},value:i})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Email address"),r.a.createElement(j.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){g(e.target.value)},value:d})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Password"),r.a.createElement(j.a.Control,{type:"password",placeholder:"Password",onChange:function(e){S(e.target.value)},value:v})),r.a.createElement(y.a,{variant:"primary",type:"submit"},"Submit")),G?r.a.createElement(O.a,{className:"my-3",variant:"danger"},G):null,T?r.a.createElement(O.a,{className:"my-3 text-center",variant:"primary"},r.a.createElement("p",null,T),r.a.createElement(u.Link,{to:"/login"},"Go to login page")):null))}),L=function(){var e=Object(n.useContext)(E).setUser,t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),i=u[0],m=u[1],p=Object(n.useState)(""),d=Object(o.a)(p,2),g=d[0],f=d[1],v=Object(h.k)(),S=function(){var t=Object(x.a)(b.a.mark((function t(a){var n,r,l,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,k.a.post("".concat(N,"/auth/login"),{email:c,password:i});case 4:n=t.sent,r=n.data,e(r),l=r.token,o={email:c,token:l},localStorage.setItem("user",JSON.stringify(o)),v.push("./homepage"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),f("Failed to login. Please try again.");case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(w.a,{className:"mt-4"},r.a.createElement(C.a,{md:{span:6,offset:3}},r.a.createElement(j.a,{onSubmit:S},r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Email address"),r.a.createElement(j.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){l(e.target.value)},value:c})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Password"),r.a.createElement(j.a.Control,{type:"password",placeholder:"Password",onChange:function(e){m(e.target.value)},value:i})),r.a.createElement(y.a,{variant:"primary",type:"submit"},"Submit")),g?r.a.createElement(O.a,{className:"my-3",variant:"danger"},g):null))},B=a(102),G=a(101),W=function(e){e.title;var t=Object(n.useContext)(E).user,a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],i=c[1],m="".concat(N,"/user/workouts"),p=function(){var e=Object(x.a)(b.a.mark((function e(){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get(m,{headers:{Authorization:"Bearer ".concat(t.token)}});case 2:a=e.sent,n=a.data,i(n.allWorkouts);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){p()}),[]);var d=function(){var e=Object(x.a)(b.a.mark((function e(a){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.currentTarget.id,e.next=3,k.a.delete("".concat(m,"/").concat(n),{headers:{Authorization:"Bearer ".concat(t.token)}});case 3:r=e.sent,r.data.success&&p();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return 0!==l.length?r.a.createElement(w.a,null,l.map((function(e){return r.a.createElement(B.a,{key:e._id,className:"text-center",style:{width:"30%",padding:"15px",margin:"15px"}},r.a.createElement(B.a.Title,{className:"mt-auto"},e.name),e.exercises.map((function(e,t){return e.exercise?r.a.createElement(B.a.Text,{key:t},e.exercise.name):null})),r.a.createElement(w.a,null,r.a.createElement(C.a,null,r.a.createElement(y.a,{as:u.Link,variant:"dark",to:"/view-workouts/".concat(e._id),className:"mt-auto",style:{padding:"10px",marginLeft:"5px",marginRight:"5px"}},"View workout")),r.a.createElement(C.a,null,r.a.createElement(y.a,{id:e._id,variant:"danger",className:"mt-auto",style:{padding:"10px",marginLeft:"5px",marginRight:"5px"},onClick:d},"Delete Workout"))))}))):r.a.createElement(s.a,null,r.a.createElement("h1",null,"Loading Workouts"),r.a.createElement(G.a,{animation:"border",role:"status"}))},D=a(67),I=a(66),T=function(){var e=Object(n.useContext)(E).user.token,t=Object(n.useState)(!0),a=Object(o.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)([]),i=Object(o.a)(u,2),m=i[0],p=i[1],d=Object(n.useState)(""),g=Object(o.a)(d,2),h=g[0],f=g[1],v=Object(n.useState)(""),O=Object(o.a)(v,2),S=O[0],L=O[1],G=Object(n.useState)([]),W=Object(o.a)(G,2),T=W[0],z=W[1],H=S?m[S]:{},J={headers:{Authorization:"Bearer ".concat(e)}};Object(n.useEffect)((function(){(function(){var e=Object(x.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(N,"/api/muscleGroups"),J);case 2:t=e.sent,a=t.data,p(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var R=function(e,t,a){e.preventDefault();var n=T.map((function(e){return Object(D.a)({},e)}));n[t][a]=e.target.value,z(n)};return r.a.createElement(s.a,{className:"h-100"},c&&r.a.createElement(B.a,{className:"my-5  shadow"},r.a.createElement(B.a.Body,null,r.a.createElement(j.a,null,r.a.createElement(j.a.Group,{as:w.a,controlId:"formHorizontalEmail"},r.a.createElement(j.a.Label,{column:!0,sm:2},"Exercise name"),r.a.createElement(C.a,{sm:10},r.a.createElement(j.a.Control,{type:"text",value:h,placeholder:"2 weeks abs builder",onChange:function(e){return f(e.target.value)}}))),r.a.createElement(j.a.Group,{as:w.a,controlId:"formHorizontalEmail"},r.a.createElement(j.a.Label,{column:!0,sm:2},"Muscle groups"),r.a.createElement(C.a,{sm:10},r.a.createElement(j.a.Control,{as:"select",value:S,onChange:function(e){return L(e.target.value)},custom:!0},r.a.createElement("option",{value:"",disabled:!0,hidden:!0},"Choose muscle group"),m.map((function(e,t){return r.a.createElement("option",{key:t,value:t},e.name)}))))),T.map((function(e,t){return r.a.createElement(j.a.Group,{key:t,as:w.a},r.a.createElement(j.a.Label,{column:!0,sm:2}," ","Exercise plan ",t+1),r.a.createElement(C.a,{sm:10},r.a.createElement(j.a.Row,null,r.a.createElement(j.a.Group,{as:C.a,md:"8"},r.a.createElement(j.a.Control,{as:"select",value:e.exercise,onChange:function(e){return R(e,t,"exercise")},placeholder:"Choose exercise",custom:!0},r.a.createElement("option",{value:"",disabled:!0,hidden:!0},"Choose exercise"),H.exercises.map((function(e,t){return r.a.createElement("option",{key:t,value:t},e.name)})))),r.a.createElement(j.a.Group,{as:C.a,md:"2"},r.a.createElement(j.a.Control,{type:"number",value:e.sets,min:"0",onChange:function(e){return R(e,t,"sets")},placeholder:"Sets.."})),r.a.createElement(j.a.Group,{as:C.a,md:"2"},r.a.createElement(j.a.Control,{type:"number",value:e.reps,min:"0",onChange:function(e){return R(e,t,"reps")},placeholder:"Reps.."})))))})),r.a.createElement(j.a.Group,{as:w.a},r.a.createElement(C.a,{sm:{span:10,offset:2}},r.a.createElement(y.a,{variant:"dark",type:"submit",onClick:function(e){e.preventDefault(),z([].concat(Object(I.a)(T),[{exercise:"",sets:"",reps:""}]))},disabled:!S},"Add exercise"),r.a.createElement(y.a,{variant:"success",onClick:function(e){return l(!1)},className:"ml-5",type:"submit"},"Build")))))),!c&&r.a.createElement(B.a,{className:"shadow mt-5"},r.a.createElement(B.a.Body,null,r.a.createElement(B.a.Title,{className:"text-uppercase"},h||"Unnamed exercise"),r.a.createElement(B.a.Subtitle,{className:"text-uppercase mb-4"},H&&H.name),r.a.createElement(w.a,null,T.map((function(e,t){return r.a.createElement(C.a,{key:t,lg:"3"},r.a.createElement(B.a,{className:"mb-4"},r.a.createElement(B.a.Body,null,r.a.createElement(B.a.Title,{className:"text-capitalize"},H&&e.exercise?H.exercises[e.exercise].name:"Exercise ".concat(++t))),r.a.createElement(B.a.Footer,null,r.a.createElement(w.a,{className:"text-center"},r.a.createElement(C.a,{className:"h5 font-weight-light"},"0"|e.sets," sets"),r.a.createElement(C.a,{className:"h5 font-weight-light"},"0"|e.reps," reps")))))}))),r.a.createElement(y.a,{variant:"dark",onClick:function(e){e.preventDefault();var t={name:"Workout But Better",muscleGroup:H._id,exercises:T.map((function(e){var t=e.exercise,a=e.sets,n=e.reps;return{exerciseId:t?H.exercises[t]._id:H.exercises[0]._id,sets:+a,reps:+n}}))};console.log(t),k.a.post("".concat(N,"/user/workouts"),t,J).then(console.log)},className:"mr-2 mb-2"},"Save"),r.a.createElement(y.a,{variant:"dark",onClick:function(e){return l(!0)},className:"mr-2 mb-2"},"Edit"))))},z=function(e){var t=e.variant,a=e.title,n={height:"400px",backgroundSize:"cover"};return"Fitness"===a?n.backgroundImage='url("https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")':"Strength training"===a?n.backgroundImage='url("https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")':"Cardio"===a?n.backgroundImage='url("https://images.unsplash.com/photo-1516398810565-0cb4310bb8ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")':"Stretches"===a&&(n.backgroundImage='url("https://images.unsplash.com/photo-1539794830467-1f1755804d13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")'),r.a.createElement(B.a,{className:"shadow",bg:t,style:n},r.a.createElement(B.a.Body,{className:"text-center d-flex flex-column"},r.a.createElement(B.a.Title,{className:"mt-auto text-white"},a),r.a.createElement(y.a,{as:u.Link,variant:"dark",to:"/exercisebuilder",className:"mt-auto"},"Create workout")))},H=function(){return r.a.createElement(s.a,{style:{height:"100vh"}},r.a.createElement(w.a,{className:"align-items-center justify-content-center h-100"},[{title:"Fitness","bg-img":"",variant:"danger"},{title:"Strength training","bg-img":"",variant:"warning"},{title:"Cardio","bg-img":"",variant:"success"},{title:"Stretches","bg-img":"",variant:"info"}].map((function(e){return r.a.createElement(C.a,{xs:"6",sm:"3"},r.a.createElement(z,e))}))))},J="".concat(N,"/user/workouts"),R=function(){var e=Object(n.useContext)(E).user,t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],l=a[1],u=Object(h.m)().id;return Object(n.useEffect)((function(){(function(){var t=Object(x.a)(b.a.mark((function t(){var a,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("".concat(J,"/").concat(u),{headers:{Authorization:"Bearer ".concat(e.token)}});case 2:a=t.sent,n=a.data,l(n.workout);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[u]),c?r.a.createElement(s.a,{className:"align-items-center justify-content-center",style:{height:"100vh"}},r.a.createElement(B.a,{style:{marginTop:"50px",marginLeft:"15px",marginRight:"15px",boxShadow:"-1px 7px 13px -1px rgba(61,61,61,1)",padding:"40px"}},r.a.createElement("h1",null,c.name),r.a.createElement("h2",null,c.muscleGroup.name," - ",c.muscleGroup.description),r.a.createElement("h3",null,"Exercises:"),r.a.createElement("ol",null,c.exercises.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement(w.a,null,r.a.createElement(C.a,null,r.a.createElement("h4",null,e.exercise.name)),r.a.createElement(C.a,null,r.a.createElement("h4",null,"Sets: ",e.sets)),r.a.createElement(C.a,null,r.a.createElement("h4",null,"Reps:",e.reps))),r.a.createElement(w.a,{style:{paddingLeft:"15px"}},r.a.createElement("p",null,e.exercise.description)),r.a.createElement(w.a,{style:{paddingLeft:"15px"}},r.a.createElement("p",null,"Equipment required:"," ",e.exercise.equipments.join(","))))}))))):r.a.createElement(s.a,null,r.a.createElement("h1",null,"Loading Workout..."),r.a.createElement(G.a,{animation:"border",role:"status"}))},q=function(){var e=Object(n.useContext)(E).user;return r.a.createElement(h.g,null,r.a.createElement(h.d,{exact:!0,path:"/"},e.token?r.a.createElement(h.c,{to:"/homepage"}):r.a.createElement(L,null)),r.a.createElement(h.d,{exact:!0,path:"/login"},e.token?r.a.createElement(h.c,{to:"/homepage"}):r.a.createElement(L,null)),r.a.createElement(h.d,{exact:!0,path:"/register"},e.token?r.a.createElement(h.c,{to:"/login"}):r.a.createElement(S,null)),r.a.createElement(h.d,{exact:!0,path:"/exerciseBuilder"},e.token?r.a.createElement(T,null):r.a.createElement(h.c,{to:"/login"})),r.a.createElement(h.d,{exact:!0,path:"/workouts"},e.token?r.a.createElement(W,null):r.a.createElement(h.c,{to:"/login"})),r.a.createElement(h.d,{exact:!0,path:"/view-workouts/:id"},e.token?r.a.createElement(R,null):r.a.createElement(h.c,{to:"/login"})),r.a.createElement(h.d,{path:"/homepage",exact:!0},e.token?r.a.createElement(H,null):r.a.createElement(h.c,{to:"/login"})))},P=function(){var e=localStorage.getItem("user"),t=JSON.parse(e),a=Object(n.useState)(t||{}),c=Object(o.a)(a,2),l=c[0],i=c[1];return r.a.createElement(u.HashRouter,null,r.a.createElement(E.Provider,{value:{user:l,setUser:i}},r.a.createElement(s.a,{fluid:!0},r.a.createElement(g,null),r.a.createElement(q,null))))};a(98);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.2ed0361c.chunk.js.map
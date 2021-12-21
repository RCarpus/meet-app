(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{202:function(e,t,n){},203:function(e,t,n){},205:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),s=n.n(o),i=n(26),c=n.n(i),l=n(51),u=n(23),d=n(31),h=n(24),p=n(25),v=(n(202),n(203),n(2)),m=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this)).handleClickDetailsButton=function(e){var t=a.state.expanded;a.setState({expanded:!t,eventDetailsButtonText:t?"More details":"Hide details"})},a.state={expanded:!1,eventDetailsButtonText:"More details"},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.expanded,a=t.eventDetailsButtonText,r=this.props.event;return Object(v.jsxs)("div",{className:"event",children:[Object(v.jsx)("h2",{className:"event__name",children:r.summary}),Object(v.jsx)("p",{className:"event__start",children:r.start.dateTime}),Object(v.jsxs)("p",{className:"event__title-line-2",children:[Object(v.jsx)("span",{className:"event__title-line-2__at-sign",children:"@"}),Object(v.jsx)("span",{className:"event__title-line-2__title",children:r.summary}),Object(v.jsx)("span",{className:"event__title-line-2__pipe",children:" | "}),Object(v.jsx)("span",{className:"event__title-line-2__city",children:r.location})]}),n&&Object(v.jsxs)("div",{className:"event__more-details",children:[Object(v.jsx)("h3",{className:"event__more-details__about-label",children:"About event"}),Object(v.jsx)("p",{className:"event__more-details__link-line",children:Object(v.jsx)("a",{className:"event__more-details__link-line__link",href:r.htmlLink,children:r.htmlLink})}),Object(v.jsx)("p",{className:"event__more-details__description",children:r.description})]}),Object(v.jsx)("button",{className:"event__details-button",onClick:function(t){return e.handleClickDetailsButton(t)},children:a})]})}}]),n}(a.Component),f=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(v.jsxs)("ul",{className:"EventList",children:[0===e.length&&Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Loading..."}),Object(v.jsx)("p",{children:"(or you've set the number of events to 0. But you wouldn't want to do that, would you?)"})]}),e.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsx)(m,{event:e})},e.id)}))]})}}]),n}(a.Component),b=f,j=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"Alert",children:Object(v.jsx)("p",{style:this.getStyle(),className:"error-text",children:this.props.text})})}}]),n}(a.Component),g=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#7A7A00",a}return n}(j),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(j),w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="orange",a}return n}(j),x=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:null},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleSuggestionClicked=function(t,n){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t,n)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.numberOfEvents;return Object(v.jsxs)("div",{className:"citySearch",children:[Object(v.jsx)("div",{className:"citySearch__alert",children:Object(v.jsx)(g,{text:this.state.infoText})}),Object(v.jsxs)("div",{className:"citySearch__grid",children:[Object(v.jsx)("label",{htmlFor:this.state.query,children:"Search for a city:"}),Object(v.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})},placeholder:"Search.."}),Object(v.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(n){return Object(v.jsx)("li",{onClick:function(){return e.handleSuggestionClicked(n,t)},children:n},n)})),Object(v.jsx)("li",{onClick:function(){return e.handleSuggestionClicked("all",t)},children:Object(v.jsx)("b",{children:"See all cities"})},"all")]})]})]})}}]),n}(a.Component),y=x,_=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleInputChanged=function(e){var t=e.target.value,n=a.RemoveNonNumeric(t);t!==n?a.setState({number:n,displayErrorText:!0}):a.setState({number:n,displayErrorText:!1}),a.props.updateNumberOfEvents&&a.props.updateNumberOfEvents(n)},a.RemoveNonNumeric=function(e){return e.replace(/[^0-9]/g,"")},a.state={number:32,displayErrorText:null},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.currentNumberOfEvents,t=this.state,n=t.number,a=t.displayErrorText,r=e<n;return Object(v.jsxs)("div",{className:"number-of-events",children:[Object(v.jsxs)("div",{className:"number-of-events__error",children:[r&&Object(v.jsx)(w,{text:"There are not that many events available"}),a&&Object(v.jsx)(O,{text:"Number of Events must be a non-negative integer"})]}),Object(v.jsxs)("div",{className:"number-of-events__grid",children:[Object(v.jsx)("label",{id:"number-of-events__label",htmlFor:"number-of-events__input",children:"Number of Events:"}),Object(v.jsx)("input",{id:"number-of-events__input",value:this.state.number,onChange:this.handleInputChanged})]})]})}}]),n}(a.Component);n(205);var k=function(e){return e.showWelcomeScreen?Object(v.jsx)("div",{className:"WelcomeScreen",children:Object(v.jsxs)("div",{className:"WelcomeScreen__content",children:[Object(v.jsxs)("div",{className:"WelcomeScreen__content__heading",children:[Object(v.jsx)("h1",{children:"Welcome to the Meet app"}),Object(v.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"})]}),Object(v.jsx)("div",{className:"button_cont",align:"center",children:Object(v.jsxs)("div",{className:"google-btn",children:[Object(v.jsx)("div",{className:"google-icon-wrapper",children:Object(v.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(v.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:Object(v.jsx)("b",{children:"Sign in with google"})})]})}),Object(v.jsx)("a",{href:"https://rcarpus.github.io/meet-app/privacy.html",rel:"nofollow noopener",className:"WelcomeScreen__privacy-policy",children:"Privacy policy"}),Object(v.jsxs)("div",{className:"WelcomeScreen__app-info",children:[Object(v.jsx)("h2",{children:"What does this app do, and why do I need to sign in with my Google account?"}),Object(v.jsx)("p",{children:"Meet app is a Progressive Web App (PWA) built with React and coded using a test-driven development process. The app uses the Google Calendar API to fetch upcoming events from a a CareerFoundry events calendar."}),Object(v.jsx)("p",{children:'Once logged in, the app is a single page app with two inputs, one for a city name, and one for a number of events to show. Simply input your desired city and select it from the suggestions dropdown, then narrow down or increase the number of events shown with using the number input. Clicking on the "more details" button for an event will display a description and URL for the event. Clicking the event URL will redirect you to the Google Calendar event.'}),Object(v.jsx)("p",{children:"The Meet app is using https://www.googleapis.com/auth/calendar.events.readonly for educational purposes only. The calendar accessed isn\u2019t the user\u2019s but a calendar provided by CareerFoundry as part of their Full-Stack Immersion course. No user information is saved or used within the application, and personal calendars aren\u2019t accessed."}),Object(v.jsxs)("p",{children:["If you'd like to see more of my work, please visit ",Object(v.jsx)("a",{href:"http://rcarpus.github.io",target:"_blank",rel:"noreferrer",children:"my portfolio site at rcarpus.github.io"}),"."]})]})]})}):null},S=n(358),N=n(362),T=n(363),E=n(186),C=n(187),W=n(77),A=n(191),L=n(18),Z=n(365),I=n(181),D=n(94),M=function(e){var t=e.events,n=function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.includes(e)})).length;return{name:e,value:n}})).filter((function(e){return e.value>0}))};Object(a.useEffect)((function(){i((function(){return n()}))}),[t]);var r=Object(a.useState)([]),o=Object(L.a)(r,2),s=o[0],i=o[1],c=["red","orange","purple","green","blue"];return console.log(n()),Object(v.jsx)(S.a,{height:300,width:"99%",children:Object(v.jsx)(Z.a,{width:400,height:300,children:Object(v.jsx)(I.a,{data:s,cs:200,cy:150,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.value;return"".concat(t,": ").concat(n)},children:s.map((function(e,t){return Object(v.jsx)(D.a,{fill:c[t]},"cell-".concat(t))}))})})})},R=n(190),B=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),J=n(120),q=n.n(J),U=n(121),F=n.n(U),P=function(e){var t=e.map((function(e){return e.location}));return Object(R.a)(new Set(t))},G=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},H=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://hv2altwv0j.execute-api.us-east-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",B);case 2:if(navigator.onLine){e.next=6;break}return t=localStorage.getItem("lastEvents"),e.abrupt("return",t?JSON.parse(t).events:[]);case 6:return F.a.start(),e.next=9,K();case 9:if(!(n=e.sent)){e.next=19;break}return z(),a="https://hv2altwv0j.execute-api.us-east-1.amazonaws.com/dev/api/get-calendar-events/".concat(n),e.next=15,q.a.get(a);case 15:return(r=e.sent).data&&(o=P(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),F.a.done(),e.abrupt("return",r.data.events);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,G(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,q.a.get("https://hv2altwv0j.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&H(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:"32",location:"all",showWelcomeScreen:void 0},e.updateEvents=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.state.numberOfEvents;Y().then((function(a){var r="all"===t?a.slice(0,n):a.filter((function(e){return e.location===t})).slice(0,n);e.setState({events:r.slice(0,n),location:t})}))},e.updateNumberOfEvents=function(t){e.setState({numberOfEvents:t},e.updateEvents(e.state.location,t))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.mounted=!0,!(navigator.onLine&!window.location.href.startsWith("http://localhost"))){e.next=17;break}return t=localStorage.getItem("access_token"),e.next=5,G(t);case 5:if(!e.sent.error){e.next=9;break}e.t0=!1,e.next=10;break;case 9:e.t0=!0;case 10:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&Y().then((function(e){o.mounted&&o.setState({events:e.slice(0,o.state.numberOfEvents),locations:P(e)})})),e.next=18;break;case 17:Y().then((function(e){o.mounted&&o.setState({events:e.slice(0,o.state.numberOfEvents),locations:P(e)})}));case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this,t=this.state,n=t.events,a=t.locations,r=t.numberOfEvents,o=this.getData();return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)("div",{className:"App__inputs-wrapper",children:[Object(v.jsxs)("div",{className:"App__inputs-wrapper__header",children:[Object(v.jsx)("h2",{children:"Select a city near you"}),!navigator.onLine&&Object(v.jsx)(w,{text:"Offline. New events cannot be loaded until you have an internet connection."})]}),Object(v.jsx)(y,{locations:a,numberOfEvents:r,updateEvents:this.updateEvents}),Object(v.jsx)(_,{updateNumberOfEvents:function(t){e.updateNumberOfEvents(t)},currentNumberOfEvents:n.length})]}),Object(v.jsxs)("div",{className:"App__charts",children:[Object(v.jsx)("div",{className:"App__charts__pie",children:Object(v.jsx)(M,{events:n})}),Object(v.jsx)("div",{className:"App__charts__scatter",children:Object(v.jsx)(S.a,{height:300,width:"99%",children:Object(v.jsxs)(N.a,{margin:{top:20,right:20,bottom:10,left:10},children:[Object(v.jsx)(T.a,{strokeDasharray:"3 3",fill:"#ebebeb"}),Object(v.jsx)(E.a,{dataKey:"city",name:"City",type:"category"}),Object(v.jsx)(C.a,{dataKey:"number",name:"Number of Events",allowDecimals:!1}),Object(v.jsx)(W.a,{cursor:{strokeDasharray:"3 3"}}),Object(v.jsx)(A.a,{data:o,fill:"#000000"})]})})})]}),Object(v.jsx)(b,{events:n,numberOfEvents:r}),navigator.onLine&&Object(v.jsx)(k,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){K()}})]})}}]),n}(r.a.Component),X=V,Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,366)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))},te=n(188);navigator.onLine&&te.config("9d78ec172e60442196c0bde0ec64e257").install(),s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(X,{})}),document.getElementById("root")),navigator.onLine&&function(e){if("serviceWorker"in navigator){if(new URL("/meet-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet-app","/service-worker.js");Q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):$(t,e)}))}}(),ee()}},[[357,1,2]]]);
//# sourceMappingURL=main.f2d8e6e8.chunk.js.map
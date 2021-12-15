(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(22),o=n.n(s),i=n(3),c=n(4),u=n(6),l=n(5),d=(n(28),n(29),n(0)),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).handleClickDetailsButton=function(e){var t=a.state.expanded;a.setState({expanded:!t,eventDetailsButtonText:t?"More details":"Hide details"})},a.state={expanded:!1,eventDetailsButtonText:"More details"},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.expanded,a=t.eventDetailsButtonText,r=this.props.event;return Object(d.jsxs)("div",{className:"event",children:[Object(d.jsx)("h2",{className:"event__name",children:r.summary}),Object(d.jsx)("p",{className:"event__start",children:r.start.dateTime}),Object(d.jsxs)("p",{className:"event__title-line-2",children:[Object(d.jsx)("span",{className:"event__title-line-2__at-sign",children:"@"}),Object(d.jsx)("span",{className:"event__title-line-2__title",children:r.summary}),Object(d.jsx)("span",{className:"event__title-line-2__pipe",children:" | "}),Object(d.jsx)("span",{className:"event__title-line-2__city",children:r.location})]}),n&&Object(d.jsxs)("div",{className:"event__more-details",children:[Object(d.jsx)("h3",{className:"event__more-details__about-label",children:"About event"}),Object(d.jsx)("p",{className:"event__more-details__link-line",children:Object(d.jsx)("a",{className:"event__more-details__link-line__link",href:r.htmlLink,children:r.htmlLink})}),Object(d.jsx)("p",{className:"event__more-details__description",children:r.description})]}),Object(d.jsx)("button",{className:"event__details-button",onClick:function(t){return e.handleClickDetailsButton(t)},children:a})]})}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(h,{event:e})},e.id)}))})}}]),n}(a.Component),m=p,v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:t.target.value,suggestions:a})},e.handleSuggestionClicked=function(t,n){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t,n)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.numberOfEvents;return Object(d.jsxs)("div",{className:"citySearch",children:[Object(d.jsx)("label",{htmlFor:this.state.query,children:"Search for a city"}),Object(d.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(n){return Object(d.jsx)("li",{onClick:function(){return e.handleSuggestionClicked(n,t)},children:n},n)})),Object(d.jsx)("li",{onClick:function(){return e.handleSuggestionClicked("all",t)},children:Object(d.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),f=v,b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleInputChanged=function(e){var t=a.RemoveNonNumeric(e.target.value);a.setState({number:t}),a.props.updateNumberOfEvents&&a.props.updateNumberOfEvents(t)},a.RemoveNonNumeric=function(e){return e.replace(/[^0-9]/g,"")},a.state={number:32},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"number-of-events",children:[Object(d.jsx)("label",{id:"number-of-events__label",htmlFor:"number-of-events__input",children:"Number of Events:"}),Object(d.jsx)("input",{id:"number-of-events__input",value:this.state.number,onChange:this.handleInputChanged})]})}}]),n}(a.Component),j=n(7),g=n.n(j),w=n(8),O=n(23),x=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),y=n(13),k=n.n(y),_=n(11),S=n.n(_),N=function(e){var t=e.map((function(e){return e.location}));return Object(O.a)(new Set(t))},T=function(){var e=Object(w.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},E=function(){var e=Object(w.a)(g.a.mark((function e(t){var n,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://hv2altwv0j.execute-api.us-east-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(w.a)(g.a.mark((function e(){var t,n,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return S.a.done(),e.abrupt("return",x);case 4:return e.next=6,B();case 6:if(!(t=e.sent)){e.next=16;break}return C(),n="https://hv2altwv0j.execute-api.us-east-1.amazonaws.com/dev/api/get-calendar-events/".concat(t),e.next=12,k.a.get(n);case 12:return(a=e.sent).data&&(r=N(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),S.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(w.a)(g.a.mark((function e(){var t,n,a,r,s,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,T(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,k.a.get("https://hv2altwv0j.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",r&&E(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:"32",location:"all"},e.updateEvents=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.state.numberOfEvents;Z().then((function(a){var r="all"===t?a.slice(0,n):a.filter((function(e){return e.location===t})).slice(0,n);e.setState({events:r.slice(0,n),location:t})}))},e.updateNumberOfEvents=function(t){e.setState({numberOfEvents:t},e.updateEvents(e.state.location,t))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,Z().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:N(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this,t=this.state,n=t.events,a=t.locations,r=t.numberOfEvents;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{id:"App__header",children:[Object(d.jsx)("h1",{children:"Search for tech events"}),Object(d.jsx)("p",{children:"This app uses the Google Calendar API in conjunction with a CareerFoundry calendar to fetch and filter events based on the city and number of events desired. Give it a try!"})]}),Object(d.jsx)(f,{locations:a,numberOfEvents:r,updateEvents:this.updateEvents}),Object(d.jsx)(b,{updateNumberOfEvents:function(t){e.updateNumberOfEvents(t)}}),Object(d.jsx)(m,{events:n,numberOfEvents:r})]})}}]),n}(r.a.Component),M=I;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),q()}},[[50,1,2]]]);
//# sourceMappingURL=main.f8f9c658.chunk.js.map
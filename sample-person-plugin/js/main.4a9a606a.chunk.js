(window["webpackJsonpreactjs-ui"]=window["webpackJsonpreactjs-ui"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"persons":[{"firstLastName":"John Doe","position":"CEO","description":"CEO is a chief executive officer, the highest-rankig corporate officer (executive) or administrator in an organisation.","image":"profile-default-1.png","social":{"github":"https://github.com","linkedin":"https://www.linkedin.com","xing":"https://www.xing.com","facebook":"https://www.facebook.com"}},{"firstLastName":"Jane Foe","position":"Project Manager","description":"Project managers have the responsibility of the planning, procurement and execution of a project, in any undertaking that has a defined scope, defined start and a defined finish.","image":"profile-default-5.png","social":{"github":"https://github.com","linkedin":"https://www.linkedin.com","xing":"https://www.xing.com","facebook":"https://www.facebook.com"}},{"firstLastName":"Tom Yoe","position":"Developer","description":"A developer or computer programmer programs computers or designs the system to match the requirements of a systems analyst.","image":"profile-default-3.png","social":{"github":"https://github.com","linkedin":"https://www.linkedin.com","xing":"https://www.xing.com","facebook":"https://www.facebook.com"}},{"firstLastName":"Lisa Moe","position":"HR Manager","description":"Human resource management (HRM) is the strategic approach to the effective management of people in a company or organization such that they help their business gain a competitive advantage.","image":"profile-default-2.png","social":{"github":"https://github.com","linkedin":"https://www.linkedin.com","xing":"https://www.xing.com","facebook":"https://www.facebook.com"}}]}')},,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),o=t(2),s=t.n(o),r=t(3),l=t(4),c=t(7),m=t(5),p=t(8);t(14);var u=function(e){return n.a.createElement("div",{className:"sample-plugin-person-modal",style:{display:e.display},onClick:e.onClick},n.a.createElement("div",{className:"person-modal-frame"},n.a.createElement("div",{className:"person-modal-header"},n.a.createElement("h4",{className:"modal-header-headline"},e.position),n.a.createElement("span",{className:"modal-header-close",onClick:e.onClick},"\xd7")),n.a.createElement("div",{className:"modal-content"},n.a.createElement("p",null,e.description)),n.a.createElement("div",{className:"modal-social"},n.a.createElement("ul",{className:"modal-social-list"},n.a.createElement("li",null,n.a.createElement("a",{href:e.social?e.social.github:""},"Github")),n.a.createElement("li",null,n.a.createElement("a",{href:e.social?e.social.linkedin:""},"LinkedIn")),n.a.createElement("li",null,n.a.createElement("a",{href:e.social?e.social.xing:""},"Xing")),n.a.createElement("li",null,n.a.createElement("a",{href:e.social?e.social.facebook:""},"Facebook"))))))},d=(t(15),t(6).persons),h="";function f(e){var a="Picture of "+e.firstLastName;return n.a.createElement("div",{className:"sample-plugin-person-pic"},n.a.createElement("img",{src:e.image,alt:a,height:"400",width:"400"}))}function g(e){return n.a.createElement("div",{className:"sample-plugin-person-fname"},null==e.firstLastName?"Name not recognized!":e.firstLastName)}function w(e){return n.a.createElement("div",{className:"sample-plugin-person-pos"},e.position)}var k=function(e){function a(e){var t;Object(r.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={modalDisplay:"none"};var i=!0,n=!1,o=void 0;try{for(var s,l=d[Symbol.iterator]();!(i=(s=l.next()).done);i=!0){var p=s.value;if(p.firstLastName.toLowerCase()===t.props.person_name.toLowerCase()){h=p;break}}}catch(u){n=!0,o=u}finally{try{i||null==l.return||l.return()}finally{if(n)throw o}}return t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"handleClick",value:function(){"none"===this.state.modalDisplay?this.setState({modalDisplay:"block"}):this.setState({modalDisplay:"none"})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"sample-plugin-person"},n.a.createElement("div",{className:"sample-plugin-person-card",onClick:function(){return e.handleClick()}},n.a.createElement(f,{image:this.props.image_url+h.image,firstLastName:h.firstLastName}),n.a.createElement("div",{className:"sample-plugin-person-detail"},n.a.createElement(g,{firstLastName:h.firstLastName}),n.a.createElement(w,{position:h.position}))),n.a.createElement(u,{display:this.state.modalDisplay,onClick:function(){return e.handleClick()},position:h.position,description:h.description,social:h.social}))}}]),a}(n.a.Component),b=(t(16),document.getElementById("wpsp-person-root"));s.a.render(n.a.createElement(k,{person_name:b.getAttribute("person_name"),image_url:b.getAttribute("image_url")}),b)}],[[9,1,2]]]);
//# sourceMappingURL=main.4a9a606a.chunk.js.map
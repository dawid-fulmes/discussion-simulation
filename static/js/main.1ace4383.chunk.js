(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACgCAIAAACOgmk7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAK5SURBVHhe7dFZTgNBEARR7n9pg0QIWSDMaJilKzPeJ4vdkfUmSZIkSZIkSZIkSZIkSZIkSZIkSVrcYwP+VEvhOHvxKboeFzgUH62zsffJ+DIdjoEvxBfrKOx6Ob5e/8Sct+Ip2oEJl8GztB3LLYbHaQs2WxJP1GustTbeqp9YaAgerWdsMwpP1ydWGYgAfWCSmWgoxxhjkdGMJYYjphMbRCCpDfVBCKtCehDCetAdh7wSRMchrwHFoYjMRms0UoMRGo3UVFQWIDgSiQUIjkRiAYLz0FeD7DDE1SA7DHE1yA5DXBPKY5BVhvgYZJUhPgZZZYiPQVYZ4jPQVIkJAhBUiQkCEFSJCQIQVIkJAhBUiQkCEFSJCQIQVIkJAhBUiQkCEFSJCQIQVIkJAhBUiQkCEFSJCTLQVIb4GGSVIT4GWWWIj0FWGeJjkFWG+CSU1SA7DHE1yA5DXA2y89BXgOBIJBYgOBKJBQhORWU0UoMRGo3UbLSGIrIBxYkobEBxHPJ60B2EsCqkByGsDfURSOrEBsMR04wlxiKjHGOMRYbYYyAC9IlVRuHpesY2Q/Bo/cRCy+O5eoGplsQTtQWbLYbHaTuWWwbP0g5MeCueon9izjvwAh2CUS/EF+twDHwyvkxnY+9D8dE6AxvfgRdoO5ZbHs8VewxHTBvq45CXjdYyxA9FhJ4wzQg8WS8x1mp4nXZhxFvwBB2BTa/EN+to7HsqvkqnYehT8VU6H4sfjo/XJRj9QHyw7sANduNjtABOsgMfoAVwku34Py2G8/yJP9fCONVv+CsNwdm+4ZcagrN9wy81Csf7wo81Csf7wo81Csf7wA80k1dM4BVDeMIEXjGBV0zgFRN4xQReMYFXTOAVE3jFBF4xgVdM4BUTeMUEXjGBV0zgFRN4xQReMYFXTOAVE3jFBF5xvsfjHVXFairXS3NoAAAAAElFTkSuQmCC"},,function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),s=(n(17),n(10)),m=n(1),c=n(2),u=n(4),l=n(3),d=n(5),h=(n(18),n(19),function(){return o.a.createElement("article",{className:"Article"},o.a.createElement("header",null,o.a.createElement("div",null,"Very controversial article!!!")),o.a.createElement("section",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero qui repellat in inventore natus eius fugiat, a unde deserunt recusandae incidunt vel neque dolorem magni? Vitae dicta quod, expedita consequatur odio quo nobis odit repudiandae velit, quidem laudantium quibusdam fugit delectus in molestiae doloremque quos voluptatum commodi quis error nisi dignissimos dolor aspernatur nesciunt! Hic voluptatem officiis ipsa deserunt cumque expedita quibusdam ipsum commodi temporibus illo facilis error sint modi natus molestiae tempore, non velit perferendis quam cupiditate, ex sed laborum blanditiis at. Quo ut hic, tempora omnis ipsam harum blanditiis vero ad distinctio sint esse aliquid, sapiente quae facilis."))}),p=n(8),A=(n(20),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={nickname:"",comment:"",errors:{nicknameErrorVisile:!1,commentErrorVisile:!1}},n.handleChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(p.a)({},a,o))},n.checkForm=function(){var e=n.state,t=e.nickname,a=e.comment,o={isOK:!0,errors:n.state.errors};return t<3&&(o.errors.nicknameErrorVisile=!0,o.isOK=!1),a<1&&(o.errors.commentErrorVisile=!0,o.isOK=!1),o},n.handleSubmit=function(e){e.preventDefault();var t=n.checkForm();if(t.isOK){var a=n.state,o=a.nickname,r=a.comment;n.props.pushCommentToLog(o,r),n.setState({comment:"",errors:{nicknameErrorVisile:!1,commentErrorVisile:!1}})}else n.setState({errors:t.errors})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=this,t=this.state.errors,n=t.nicknameErrorVisile,a=t.commentErrorVisile;(n||a)&&setTimeout(function(){e.setState({errors:{nicknameErrorVisile:!1,commentErrorVisile:!1}})},3e3)}},{key:"render",value:function(){var e=this.handleChange,t=this.handleSubmit,n=this.state,a=n.comment,r=n.nickname,i=this.state.errors,s=i.commentErrorVisile,m=i.nicknameErrorVisile;return o.a.createElement("form",{onSubmit:t,className:"Form"},o.a.createElement("label",null,"Your nickname: ",o.a.createElement("input",{name:"nickname",value:r,onChange:e,type:"text"})),m&&o.a.createElement("div",{className:"error"},"Nickname cat't be shorter than 3 letters!"),o.a.createElement("textarea",{name:"comment",value:a,onChange:e,placeholder:"your comment..."}),s&&o.a.createElement("div",{className:"error"},"Comment heve to be at least one letter!"),o.a.createElement("button",null,"Add comment"))}}]),t}(a.Component)),g=(n(21),function(e){var t=e.comment;return o.a.createElement("div",{className:"comment"},o.a.createElement("div",{className:"photo"},o.a.createElement("img",{src:t.photo,alt:"avatar of ".concat(t.nickname)})),o.a.createElement("div",{className:"nickname"},t.nickname),o.a.createElement("div",{className:"date"},o.a.createElement("div",null,t.date[0]),o.a.createElement("div",null,t.date[1]<10?"0".concat(t.date[1]):t.date[1],":",t.date[2]<10?"0".concat(t.date[2]):t.date[2],":",t.date[3]<10?"0".concat(t.date[3]):t.date[3])),o.a.createElement("div",{className:"content"},t.content))}),v=(n(22),function(e){var t=e.commentLog,n=e.pushCommentToLog,a=e.sortFromNewest,r=e.changeSortOrder,i=t.sort(function(e,t){return e.date[4]<t.date[4]?a?1:-1:a?-1:1}).map(function(e){return o.a.createElement(g,{key:e.id,comment:e})});return o.a.createElement("section",{className:"Discussion"},o.a.createElement("header",null,o.a.createElement("h1",null,"Comments:"),o.a.createElement("button",{onClick:r},a?"From Newest":"From Oldest")),o.a.createElement("section",null,i),o.a.createElement(A,{pushCommentToLog:n}))}),E=n(9),f=n.n(E),C=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={commentLog:[],sortFromNewest:!0},n.pushCommentToLog=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.a,o=new Date,r={id:n.state.commentLog.length,photo:a,nickname:e,content:t,date:[o.toUTCString().slice(0,-13),o.getHours(),o.getMinutes(),o.getSeconds(),o.getTime()]},i=[].concat(Object(s.a)(n.state.commentLog),[r]);n.setState({commentLog:i})},n.getRandomComment=function(){var e="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quae quasi cumque aliquid libero porro totam, blanditiis dolor dolorem sit inventore at laudantium, voluptas animi voluptatum praesentium architecto quo iusto corporis minus vel recusandae esse qui! Ipsa reiciendis reprehenderit maiores quod molestiae numquam quisquam doloremque esse velit dolores. Excepturi fugit saepe molestias doloribus quam iure a repellendus. Fugiat repellat nulla delectus vitae omnis vel sequi esse architecto assumenda quo illum recusandae dolores molestias iusto amet minima error illo, dolorum velit veniam. Atque, voluptas expedita soluta accusamus sed saepe voluptatum et, nobis mollitia nostrum maxime distinctio assumenda repellendus recusandae numquam iure?",t=Math.floor(Math.random()*e.length/2),n=Math.floor(Math.random()*(e.length-1-(t+10)+1))+t+10,a=e.slice(t,n);return a.charAt(0).toUpperCase()+a.slice(1)},n.otherUserAddNewComment=function(){fetch("https://randomuser.me/api/?results=1").then(function(e){if(200===e.status)return e.json();throw new Error}).then(function(e){var t=e.results[0],a=t.login.username,o=t.picture.thumbnail;n.pushCommentToLog(a,n.getRandomComment(),o);var r=Math.floor(2e4*Math.random()+5e3);setTimeout(n.otherUserAddNewComment,r)}).catch(function(e){return console.log("Something went wrong! ".concat(e))})},n.changeSortOrder=function(){n.setState({sortFromNewest:!n.state.sortFromNewest})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.otherUserAddNewComment()}},{key:"render",value:function(){var e=this.state.commentLog;return o.a.createElement("div",{className:"App"},o.a.createElement("main",null,o.a.createElement(h,null),o.a.createElement(v,{commentLog:e,pushCommentToLog:this.pushCommentToLog,sortFromNewest:this.state.sortFromNewest,changeSortOrder:this.changeSortOrder})))}}]),t}(a.Component);i.a.render(o.a.createElement(C,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.1ace4383.chunk.js.map
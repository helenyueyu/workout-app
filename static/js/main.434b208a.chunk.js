(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(2),i=a.n(r),l=(a(15),a(3)),o=a(4),c=a(7),u=a(5),m=a(8),p=a(6),h=(a(17),function(){return s.a.createElement("h1",null,"Daily Workout")}),v=(a(19),function(e){return s.a.createElement("div",null,s.a.createElement("span",{className:"difficulty"},"Difficulty: "),s.a.createElement("span",{className:"difficulty-level"},e.difficulty),s.a.createElement("br",null),e.exercise)}),d=function(){return s.a.createElement("h1",null,"Past Workouts")},f=(a(21),function(e){return s.a.createElement("h1",{className:"prevworkout"},e.workout,s.a.createElement("span",{className:"prevtime"},e.time))}),E=["10 pushups","10 situps","5 jumping jacks","5 lunges","5 squats","30 second plank","1 mile run"],k=["25 pushups","25 situps","15 jumping jacks","10 lunges","10 squats","1 min plank","2 mile run"],b=["50 pushups","50 situps","30 jumping jacks","20 lunges","15 squats","2 min plank","5 mile run"],y=["100 pushups","100 situps","60 jumping jacks","40 lunges","30 squats","5 min plank","10 mile run"];function g(e){return Math.round(((new Date).getTime()-e)/1e3)}function w(e){return Math.round(((new Date).getTime()-e)/1e3)-60*Math.floor(.0166667*g(e))}function N(e){return e[Math.floor(Math.random()*e.length)]}function x(e,t){return[t].concat(Object(p.a)(e))}var W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={button:"start",clock:"0:00:00",difficulty:"easy",exercise:E[Math.floor(Math.random()*E.length)],previousWorkouts:["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],previousTimes:["0","0","0","0","0","0","0","0"]},a.handleEasy=function(e){e.preventDefault(),a.setState({difficulty:"easy",exercise:N(E)})},a.handleMedium=function(e){e.preventDefault(),a.setState({difficulty:"medium",exercise:N(k)})},a.handleHard=function(e){e.preventDefault(),a.setState({difficulty:"hard",exercise:N(b)})},a.handleExpert=function(e){e.preventDefault(),a.setState({difficulty:"expert",exercise:N(y)})},a.handleClick=function(e){e.preventDefault();var t=(new Date).getTime();"start"===a.state.button?a.interval=setInterval(function(){return a.setState({button:"stop",clock:g(t)<10?"0:00:0"+g(t):g(t)<60?"0:00:"+g(t):g(t)<600?"0:0"+Math.floor(.0166667*g(t))+":"+(w(t)<10?"0"+w(t):w(t)):"Overtime"})},1e3):(clearInterval(a.interval),a.setState({button:"start"}))},a.handleSubmit=function(e){e.preventDefault(),a.setState({previousWorkouts:x(a.state.previousWorkouts.slice(0,-1),a.state.exercise),previousTimes:x(a.state.previousTimes.slice(0,-1),a.state.clock)})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s6 card-panel teal lighten-4"},s.a.createElement("div",{className:"title"},s.a.createElement(h,null)),s.a.createElement("div",{className:"timer"},s.a.createElement("button",{className:"teal btn startbutton",onClick:this.handleClick},this.state.button),s.a.createElement("h1",null,this.state.clock)),s.a.createElement("div",{className:"exercise"},s.a.createElement(v,{difficulty:this.state.difficulty,exercise:this.state.exercise}),s.a.createElement("br",null),s.a.createElement("button",{className:"btn btn-floating btn-large",onClick:this.handleEasy},"Easy"),s.a.createElement("button",{className:"btn btn-floating btn-large",onClick:this.handleMedium},"Medium"),s.a.createElement("button",{className:"btn btn-floating btn-large",onClick:this.handleHard},"Hard"),s.a.createElement("button",{className:"btn btn-floating btn-large",onClick:this.handleExpert},"Expert")),s.a.createElement("div",{className:"submitbutton"},s.a.createElement("button",{className:"btn black submit",onClick:this.handleSubmit},"Finished!"))),s.a.createElement("div",{className:"col s6 card-panel teal lighten-4"},s.a.createElement("div",{className:"prevtitle"},s.a.createElement(d,null)),s.a.createElement("div",{className:"previous-workout"},s.a.createElement("div",{className:"breaker"},s.a.createElement(f,{workout:this.state.previousWorkouts[0],time:this.state.previousTimes[0]})),s.a.createElement("div",{className:"breaker"},s.a.createElement(f,{workout:this.state.previousWorkouts[1],time:this.state.previousTimes[1]})),s.a.createElement("div",{className:"breaker"},s.a.createElement(f,{workout:this.state.previousWorkouts[2],time:this.state.previousTimes[2]})),s.a.createElement("div",{className:"breaker"},s.a.createElement(f,{workout:this.state.previousWorkouts[3],time:this.state.previousTimes[3]})),s.a.createElement("div",{className:"breaker"},s.a.createElement(f,{workout:this.state.previousWorkouts[4],time:this.state.previousTimes[4]})),s.a.createElement("div",{className:"breaker"},s.a.createElement(f,{workout:this.state.previousWorkouts[5],time:this.state.previousTimes[5]})),s.a.createElement("div",{className:"breaker"},s.a.createElement(f,{workout:this.state.previousWorkouts[6],time:this.state.previousTimes[6]})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(23)}},[[9,2,1]]]);
//# sourceMappingURL=main.434b208a.chunk.js.map
(this.webpackJsonpvitaliyswebsite=this.webpackJsonpvitaliyswebsite||[]).push([[4],{64:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(65),i=a(9),s=a(10),l=a(12),d=a(11),c=a(44),m=a.n(c),p=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onMouseEnterHandler=function(){n.setState({displayed:!0})},n.onMouseLeaveHandler=function(){n.setState({displayed:!1})},n.state={displayed:!1},n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("img",{onMouseEnter:this.onMouseEnterHandler,onMouseLeave:this.onMouseLeaveHandler,src:"/images/map.png",alt:"arrow",style:{position:"relative",width:"20px",top:-20,left:-10}}),o.a.createElement("div",{className:this.state.displayed?"card":"card hidden",style:{width:"18rem",backgroundColor:"white",borderRadius:"5px"}},o.a.createElement("div",{className:"card-body"},o.a.createElement("img",{style:{width:"100%"},src:this.props.pic}),o.a.createElement("h5",{className:"card-title"},this.props.name),o.a.createElement("p",{className:"card-text",style:{paddingBottom:"15px"}},this.props.text))))}}]),a}(o.a.Component),h=[{name:"Ust-Kamenogorsk, KZ",position:{lat:49.976515,lng:82.571675},title:"I was born here!",pic:"https://www.justgorussia.co.uk/userfiles/images/russia/russian_regions/altay.jpg"},{name:"Bryansk, RU",position:{lat:53.304458,lng:34.31214},title:"I lived here for 5 years, and studied computer science",pic:"https://imgp.golos.io/0x0/http://i.imgsafe.org/fc06379e78.jpg"},{name:"Portland, OR",position:{lat:45.570655,lng:-122.7993},title:"I lived here for 2 years",pic:"http://greatruns.com/wp-content/uploads/2016/11/Mt-Hood-and-Portland-waterfront-Agape-Voyage-700x447.jpeg"},{name:"Charlotte, NC",position:{lat:35.221194,lng:-80.840227},title:"Now, I live here, and I'm studying computer science again (Web-development)",pic:"https://www.northeastern.edu/graduate/blog/wp-content/uploads/2019/04/charlotte.jpg"}],u={width:"100%",height:"450px",marging:"20px",position:"relative"},g=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e,t=[],a=Object(r.a)(h);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.push(o.a.createElement(p,{key:n.name,name:n.name,lat:n.position.lat,lng:n.position.lng,pic:n.pic,text:n.title}))}}catch(i){a.e(i)}finally{a.f()}return o.a.createElement(m.a,{style:u,defaultCenter:this.props.center,defaultZoom:this.props.zoom,bootstrapURLKeys:{key:"AIzaSyDyePBmEMRe0sGjQBRvDq8TYEcXkDfp_0I"}},t)}}]),a}(o.a.Component);g.defaultProps={zoom:.5,center:{lat:40,lng:-45}};var y=g;a(64),t.default=function(){var e=window.innerWidth<=500;return o.a.createElement("div",{className:"row text-left animated"},o.a.createElement("div",{style:e?{padding:"0px 15px 0px 15px"}:{padding:"0px"}},o.a.createElement("h1",{className:"bottom"},"About me"),o.a.createElement("hr",null),o.a.createElement("p",null,"My name is Vitaliy Vorobyev (I think, you already knew it ",o.a.createElement("img",{className:"emoji",src:"http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/grinning-cat-face-with-smiling-eyes.png",alt:""})," ), and I'm very interested in computers, and computer science. I was born in  ",o.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Kazakhstan",alt:"Republic of Kazakhstan",target:"_blank"},"Republic of Kazakhstan"),", lived for a while in Russian Federation, and now I live in The United States."),o.a.createElement("h3",null,"Origin"),o.a.createElement("p",null,"When i was 8 years old, my mother has bought me my first computer, and I've started to learn digital world, I was attending computer science class at my first school, and there I learned foundations of CS (like information, types of information, variables, numeral systems, algorithms, and etc), wrote my first computer programm (I used program language called ",o.a.createElement("a",{href:"https://en.wikipedia.org/wiki/BASIC",target:"_blank"},"BASIC"),"). Also, (Thank you StarCraft and your direct dial-up network feature) I learned basics of computer hardware, and networking."),o.a.createElement("h3",null,"Middle school"),o.a.createElement("p",null,"Unfortunatly, when I went to middle school, my family moved to another place, and at new school I had very low level CS-class, so I had to educate myself, it was hard and inconvenient, because this period of time in my home town (",o.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Oskemen",target:"_blank"},"Ust'-Kamenogorks"),") Internet connection was a rear thing, and I had only 3 options: books, magazines, and prepaid internet cards for low-speed dial-up connection (rare, and not popular option for me). So, mostly, I liked to read magazines, because they also included CD or DVD disks with software, and OS's (linux or FreeBSD - this is how I've got into linux-world) on it. In 2009 ",o.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Asymmetric_digital_subscriber_line",target:"_blank"},"ADSL"),"-internet-provider has came to my city, and I've got my first unlimited internet connection - and it speeded up my progress a lot! I've learned basics of HTML, CSS, and PHP, I was playing with open-source web and database servers, but in 2011 my family had to move far away."),o.a.createElement("h3",null,"High school and University"),o.a.createElement("p",null,"At my graduate class I had to prepare for certain exams on my own, because I wanted to enroll to the highest ranked ",o.a.createElement("a",{href:"http://www.tu-bryansk.ru/content/obs/hist",target:"_blank"},"university")," in my region, and I had to get good grades on the final exams, and my school could not give me neccesary level of preparation for my future university. Part of this exams is computer science exam, which has programing part, and in order to prepare for this exam I used to programing in school at history, and social theory classes, I had no laptop, so I installed ",o.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Pascal_(programming_language)",target:"_blank"},"Pascal")," compiler on my small android-smartphone, and was taping for 2 years at school :D, (also I showed this compiler, and how to start coding to friend of mine, and he succesfully passed and enrolled to my university too, but this credits goes to him, because he spent so much time coding on his smartphone). So, a smartphone is a great thing! :D"),o.a.createElement("p",null,"After school graduation, I passed necessary exams, and enrolled to BSTU (Bryansk State Technical University) Information Technologies Department, and have studied Computer Science and Software for 1 year, where I got a lot of friends, and it was fun! Then, my family got greencard and I had to drop my education, and move to The Unites States"),o.a.createElement("h3",null,"Portland, Oregon"),o.a.createElement("p",null,"When I've got to Portland, I had strange feeling."),o.a.createElement("p",null,"Friends of my family were helping us at that moment, they wanted to take us to a beach in the our first day in the US, and while we were driving through the city, we stopped at one computer shop, and friends introduced me to the owner of this shop (Shops - if To be more precise), and I've got my first job on my first day (and hours) in the US :D"),o.a.createElement("em",null,'"to be continued"'),o.a.createElement("h3",{className:""},"My journey! ",o.a.createElement("span",{style:{fontSize:"14px"}},"(hint: ",e?"hold your finger couple seconds over any marker":"hover the cursor over any marker",")"))),o.a.createElement(y,null),o.a.createElement("span",null,o.a.createElement("em",null,"1999: In my childhood I had a lot of toys, and electric devices (like cassette player), one day I've found a screwdriver ",o.a.createElement("img",{className:"emoji",src:"https://cdn.emojidex.com/emoji/seal/%28flat_head%29screw_driver.png",alt:""}),", and after couple hours my parents found me on the floor surrounded by numbers of details")),o.a.createElement("br",null),o.a.createElement("br",null))}}}]);
//# sourceMappingURL=4.3782307e.chunk.js.map
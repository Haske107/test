webpackJsonp([1],{0:function(n,t,l){n.exports=l("cDNt")},cDNt:function(n,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=l("/oeL"),o=function(){return function(){}}(),i=function(){function n(){this.state="block",this.Left="0%",this.bottom="100px",this.opacity=0,this.blurr=100,this.scale=0,this.show=!0,this.borderCircle="#363636",this.borderSquare="#363636",this.borderTriangle="#363636",this.ContactLeft="-500px",this.MottoLeft="0",this.infoOpacity="0",this.comingOpacity="0"}return n.prototype.toggleVideo=function(n){this.videoplayer.nativeElement.paused?this.videoplayer.nativeElement.play():this.videoplayer.nativeElement.muted?this.videoplayer.nativeElement.muted=!1:this.videoplayer.nativeElement.pause()},n.prototype.ngOnInit=function(){},n.prototype.toggleHider=function(){this.toggleSquare(),"block"===this.state?(this.state="none",this.Left="-110%",this.videoplayer.nativeElement.muted=!0,this.videoplayer.nativeElement.pause(),this.scale=100,this.opacity=1,this.blurr=0):(this.videoplayer.nativeElement.muted=!1,this.videoplayer.nativeElement.play(),this.state="block",this.Left="0%",this.scale=0,this.opacity=0,this.blurr=100)},n.prototype.ngAfterViewInit=function(){this.videoplayer.nativeElement.muted=!0,this.videoplayer.nativeElement.play()},n.prototype.toggleCircle=function(){"#363636"===this.borderCircle?(this.ContactLeft="10%",this.MottoLeft="0%",this.borderCircle="whitesmoke"):(this.borderCircle="#363636",this.ContactLeft="-500px",this.MottoLeft="0")},n.prototype.toggleTriangle=function(){!0===this.show?(this.show=!1,this.bottom="-100%",this.comingOpacity="0",this.videoplayer.nativeElement.muted=!0,this.videoplayer.nativeElement.pause()):(this.show=!0,this.bottom="100px",this.comingOpacity="1",this.videoplayer.nativeElement.muted=!1,this.videoplayer.nativeElement.play())},n.prototype.toggleSquare=function(){"#363636"===this.borderSquare?(this.comingOpacity="0",this.infoOpacity="1",this.borderSquare="whitesmoke"):(this.borderSquare="#363636",this.comingOpacity="0",this.infoOpacity="0")},n}(),u=l("qbdv"),r=[["@media only screen and (min-width:800px){\n\n  .background[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;top:0;left:0;overflow:hidden;z-index:0;background-color:#111}.logo[_ngcontent-%COMP%]{width:200px;height:50px;top:24px;left:24px;cursor:pointer;background-color:transparent;background-image:url(TrikonLogo.c350945fcf219744dae0.jpg);background-size:contain;border:none;outline:none}.location[_ngcontent-%COMP%], .logo[_ngcontent-%COMP%]{position:absolute}.location[_ngcontent-%COMP%]{bottom:30px;left:calc(50% - 98px);font-size:14px;color:#e5e5e5}.contact[_ngcontent-%COMP%]{height:50px;position:absolute;top:44px;left:220px;font-family:Rajdhani,sans-serif;font-size:20px;font-style:normal;font-variant:normal;font-weight:200;line-height:20px;padding:0;cursor:default;color:#fff;-webkit-transition:.3s ease;transition:.3s ease;opacity:0;z-index:1}.info-button-red[_ngcontent-%COMP%]:active ~ .contact[_ngcontent-%COMP%], .logo[_ngcontent-%COMP%]:active ~ .contact[_ngcontent-%COMP%]{opacity:1;-webkit-transition:.3s ease;transition:.3s ease;left:35%}.logo[_ngcontent-%COMP%]:active ~ .contact[_ngcontent-%COMP%]{outline:none}.video[_ngcontent-%COMP%]{width:100%;min-height:100%;position:absolute;top:0;left:0e!important;border:none}.info-button-red[_ngcontent-%COMP%]{border-radius:20px;right:24px;background-image:url(Button1.219f84a5a040dec0afef.jpg)}.info-button-green[_ngcontent-%COMP%], .info-button-red[_ngcontent-%COMP%]{height:40px;width:40px;position:absolute;top:29px;color:#fff;outline:none;z-index:3;background-size:200%;cursor:pointer;border:1px solid #363636}.info-button-green[_ngcontent-%COMP%]{right:80px;background-image:url(Button2.c9169713634c4219c593.jpg)}.motto[_ngcontent-%COMP%]{height:50px;position:absolute;bottom:14px;left:24px;font-family:Rajdhani,sans-serif;font-size:25px;font-style:italic;font-variant:normal;font-weight:100;line-height:20px;padding:0;cursor:default;color:#fff;-webkit-transition:.3s ease;transition:.3s ease;z-index:1}}"],["@media only screen and (max-width:1440px){\n  .background[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;top:0;left:0;overflow:hidden;z-index:0;background-color:#111}.logo[_ngcontent-%COMP%]{width:220px;height:55px;top:16px;left:calc(50% - 110px);cursor:pointer;background-color:transparent;background-image:url(TrikonLogo.c350945fcf219744dae0.jpg);background-size:contain;border:none;outline:none}.location[_ngcontent-%COMP%], .logo[_ngcontent-%COMP%]{position:absolute}.location[_ngcontent-%COMP%]{bottom:30px;left:calc(50% - 98px);font-size:14px;color:#e5e5e5}.contact[_ngcontent-%COMP%]{background-image:url(Contact.28805ad7adfdd032043f.jpg);background-size:cover;height:40px;width:80%;position:absolute;padding:0;cursor:default;-webkit-transition:.3s ease;transition:.3s ease;z-index:10;top:75px}.info[_ngcontent-%COMP%]{z-index:9;top:22vh;height:300px;background-image:url(About.2a7566194c4d373fee0b.jpg)}.coming[_ngcontent-%COMP%], .info[_ngcontent-%COMP%]{width:90%;left:5%;position:absolute;background-size:cover;-webkit-transition:.5s ease;transition:.5s ease}.coming[_ngcontent-%COMP%]{z-index:8;top:40vh;height:80px;background-image:url(Coming.537a141a8ee631a5ee16.jpg)}.video[_ngcontent-%COMP%]{width:100%;height:auto;position:absolute;border:none;opacity:1;-webkit-transition:.5s ease;transition:.5s ease;z-index:10}.info-button-red[_ngcontent-%COMP%]{border-radius:20px;right:25%;background-image:url(Button2.c9169713634c4219c593.jpg);border:1px solid #363636}.info-button-green[_ngcontent-%COMP%], .info-button-red[_ngcontent-%COMP%]{height:40px;width:40px;position:absolute;bottom:24px;color:#fff;outline:none;z-index:12;background-size:200%;cursor:pointer}.info-button-green[_ngcontent-%COMP%]{border-radius:0;right:calc(50% - 20px);background-image:url(Button3.f8dd94a8696e12232758.jpg);border:1px solid #363636}.info-button-green[_ngcontent-%COMP%]:focus{border:1px solid #fff}.info-button-triangle[_ngcontent-%COMP%]{bottom:24px;left:25%;outline:none;z-index:12;cursor:pointer}.info-button-triangle[_ngcontent-%COMP%], .motto[_ngcontent-%COMP%]{position:absolute;margin:0;padding:0}.motto[_ngcontent-%COMP%]{display:none;height:50px;top:80px;width:100%;text-align:center;font-family:Rajdhani,sans-serif;font-size:25px;font-style:italic;font-variant:normal;font-weight:100;line-height:25px;cursor:default;color:#fff;-webkit-transition:.3s ease;transition:.3s ease;z-index:1}}"]],a=e._7({encapsulation:0,styles:r,data:{}});function c(n){return e._25(0,[(n()(),e._10(0,0,null,null,12,":svg:svg",[["class","info-button-triangle"],["height","40"],["width","40"]],null,[[null,"click"]],function(n,t,l){var e=!0,o=n.component;"click"===t&&(e=!1!==o.toggleTriangle()&&e);return e},null,null)),(n()(),e._24(-1,null,["\n    "])),(n()(),e._24(-1,null,["\n    "])),(n()(),e._10(3,0,null,null,6,":svg:defs",[],null,null,null,null,null)),(n()(),e._24(-1,null,["\n      "])),(n()(),e._10(5,0,null,null,3,":svg:pattern",[["height","100"],["id","img1"],["patternUnits","userSpaceOnUse"],["width","100"]],null,null,null,null,null)),(n()(),e._24(-1,null,["\n        "])),(n()(),e._10(7,0,null,null,0,":svg:image",[[":xlink:href","../assets/Button1.jpg"],["height","100"],["width","100"],["x","0"],["y","-40"]],null,null,null,null,null)),(n()(),e._24(-1,null,["\n      "])),(n()(),e._24(-1,null,["\n    "])),(n()(),e._24(-1,null,["\n    "])),(n()(),e._10(11,0,[["shape",1]],null,0,":svg:polygon",[["fill","url(#img1)"],["points","0,40  20,0 40,40"],["stroke","#363636"],["stroke-width","1px"]],null,null,null,null,null)),(n()(),e._24(-1,null,["\n  "]))],null,null)}function s(n){return e._25(0,[(n()(),e._10(0,0,null,null,12,":svg:svg",[["class","info-button-triangle"],["height","40"],["width","40"]],null,[[null,"click"]],function(n,t,l){var e=!0,o=n.component;"click"===t&&(e=!1!==o.toggleTriangle()&&e);return e},null,null)),(n()(),e._24(-1,null,["\n    "])),(n()(),e._24(-1,null,["\n    "])),(n()(),e._10(3,0,null,null,6,":svg:defs",[],null,null,null,null,null)),(n()(),e._24(-1,null,["\n      "])),(n()(),e._10(5,0,null,null,3,":svg:pattern",[["height","100"],["id","img1"],["patternUnits","userSpaceOnUse"],["width","100"]],null,null,null,null,null)),(n()(),e._24(-1,null,["\n        "])),(n()(),e._10(7,0,null,null,0,":svg:image",[[":xlink:href","../assets/Button1.jpg"],["height","100"],["width","100"],["x","0"],["y","-40"]],null,null,null,null,null)),(n()(),e._24(-1,null,["\n      "])),(n()(),e._24(-1,null,["\n    "])),(n()(),e._24(-1,null,["\n    "])),(n()(),e._10(11,0,[["shape",1]],null,0,":svg:polygon",[["fill","url(#img1)"],["points","0,40  20,0 40,40"],["stroke","whitesmoke"],["stroke-width","1px"]],null,null,null,null,null)),(n()(),e._24(-1,null,["\n  "]))],null,null)}function g(n){return e._25(0,[e._22(402653184,1,{videoplayer:0}),(n()(),e._24(-1,null,["\n\n"])),(n()(),e._24(-1,null,["\n"])),(n()(),e._10(3,0,null,null,46,"div",[["class","background"]],null,null,null,null,null)),(n()(),e._24(-1,null,["\n  "])),(n()(),e._24(-1,null,["\n  "])),(n()(),e._10(6,0,null,null,0,"button",[["class","logo"]],null,null,null,null,null)),(n()(),e._24(-1,null,["\n    "])),(n()(),e._24(-1,null,["\n    "])),(n()(),e._10(9,0,[[1,0],["videoPlayer",1]],null,5,"video",[["autoplay",""],["class","video"],["loop",""]],null,[[null,"click"]],function(n,t,l){var e=!0,o=n.component;"click"===t&&(e=!1!==o.toggleVideo(l)&&e);return e},null,null)),e._8(10,278528,null,0,u.f,[e.w,e.m,e.H],{ngStyle:[0,"ngStyle"]},null),e._21(11,{left:0,bottom:1}),(n()(),e._24(-1,null,["\n      "])),(n()(),e._10(13,0,null,null,0,"source",[["class","source"],["src","https://drive.google.com/uc?export=download&id=1b7W8Kajw3OqxBWgK5sYPMRWkRfgugzlc"],["type","video/mp4"]],null,null,null,null,null)),(n()(),e._24(-1,null,["\n      Browser not supported\n    "])),(n()(),e._24(-1,null,["\n\n  "])),(n()(),e._24(-1,null,["\n  "])),(n()(),e._10(17,0,null,null,2,"div",[["class","info"]],null,null,null,null,null)),e._8(18,278528,null,0,u.f,[e.w,e.m,e.H],{ngStyle:[0,"ngStyle"]},null),e._21(19,{opacity:0}),(n()(),e._24(-1,null,["\n  "])),(n()(),e._10(21,0,null,null,2,"div",[["class","coming"]],null,null,null,null,null)),e._8(22,278528,null,0,u.f,[e.w,e.m,e.H],{ngStyle:[0,"ngStyle"]},null),e._21(23,{opacity:0}),(n()(),e._24(-1,null,["\n\n  "])),(n()(),e._24(-1,null,["\n  "])),(n()(),e._10(26,0,null,null,2,"button",[["class","info-button-red"]],null,[[null,"click"]],function(n,t,l){var e=!0,o=n.component;"click"===t&&(e=!1!==o.toggleCircle()&&e);return e},null,null)),e._8(27,278528,null,0,u.f,[e.w,e.m,e.H],{ngStyle:[0,"ngStyle"]},null),e._21(28,{border:0}),(n()(),e._24(-1,null,["\n  "])),(n()(),e._10(30,0,null,null,2,"button",[["class","info-button-green"]],null,[[null,"click"]],function(n,t,l){var e=!0,o=n.component;"click"===t&&(e=!1!==o.toggleHider()&&e);return e},null,null)),e._8(31,278528,null,0,u.f,[e.w,e.m,e.H],{ngStyle:[0,"ngStyle"]},null),e._21(32,{border:0}),(n()(),e._24(-1,null,["\n  "])),(n()(),e._4(16777216,null,null,1,null,c)),e._8(35,16384,null,0,u.c,[e.S,e.P],{ngIf:[0,"ngIf"]},null),(n()(),e._24(-1,null,["\n  "])),(n()(),e._4(16777216,null,null,1,null,s)),e._8(38,16384,null,0,u.c,[e.S,e.P],{ngIf:[0,"ngIf"]},null),(n()(),e._24(-1,null,["\n\n\n  "])),(n()(),e._24(-1,null,["\n  "])),(n()(),e._10(41,0,null,null,2,"h3",[["class","contact"]],null,null,null,null,null)),e._8(42,278528,null,0,u.f,[e.w,e.m,e.H],{ngStyle:[0,"ngStyle"]},null),e._21(43,{left:0}),(n()(),e._24(-1,null,["\n  "])),(n()(),e._10(45,0,null,null,3,"h3",[["class","motto"]],null,null,null,null,null)),e._8(46,278528,null,0,u.f,[e.w,e.m,e.H],{ngStyle:[0,"ngStyle"]},null),e._21(47,{left:0}),(n()(),e._24(-1,null,["Of the Future "])),(n()(),e._24(-1,null,["\n    "])),(n()(),e._24(-1,null,["\n"]))],function(n,t){var l=t.component;n(t,10,0,n(t,11,0,l.Left,l.bottom)),n(t,18,0,n(t,19,0,l.infoOpacity)),n(t,22,0,n(t,23,0,"1")),n(t,27,0,n(t,28,0,"1px solid "+l.borderCircle)),n(t,31,0,n(t,32,0,"1px solid "+l.borderSquare)),n(t,35,0,l.show),n(t,38,0,!l.show),n(t,42,0,n(t,43,0,l.ContactLeft)),n(t,46,0,n(t,47,0,l.MottoLeft))},null)}var p=e._5("app-root",i,function(n){return e._25(0,[(n()(),e._10(0,0,null,null,1,"app-root",[],null,null,null,g,a)),e._8(1,4308992,null,0,i,[],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),d=l("fc+i"),_=l("f9zQ"),f=l("fL27"),h=l("EyWH"),b=l("l6RC"),m=l("V8+5"),x=l("8Xfy"),y=l("j5BN"),v=l("ghl+"),k=e._6(o,[i],function(n){return e._19([e._20(512,e.k,e._2,[[8,[p]],[3,e.k],e.z]),e._20(5120,e.x,e._18,[[3,e.x]]),e._20(4608,u.e,u.d,[e.x]),e._20(4608,e.i,e.i,[]),e._20(5120,e.a,e._11,[]),e._20(5120,e.v,e._16,[]),e._20(5120,e.w,e._17,[]),e._20(4608,d.c,d.t,[u.b]),e._20(6144,e.L,null,[d.c]),e._20(4608,d.f,d.g,[]),e._20(5120,d.d,function(n,t,l,e){return[new d.l(n),new d.p(t),new d.o(l,e)]},[u.b,u.b,u.b,d.f]),e._20(4608,d.e,d.e,[d.d,e.B]),e._20(135680,d.n,d.n,[u.b]),e._20(4608,d.m,d.m,[d.e,d.n]),e._20(5120,_.a,f.d,[]),e._20(5120,_.c,f.e,[]),e._20(4608,_.b,f.c,[_.a,_.c]),e._20(5120,e.J,f.f,[d.m,_.b,e.B]),e._20(6144,d.q,null,[d.n]),e._20(4608,e.Q,e.Q,[e.B]),e._20(4608,d.h,d.h,[u.b]),e._20(4608,d.j,d.j,[u.b]),e._20(4608,h.b,f.b,[e.J,d.b]),e._20(6144,b.b,null,[d.b]),e._20(4608,b.c,b.c,[[2,b.b]]),e._20(4608,m.a,m.a,[]),e._20(4608,x.g,x.g,[m.a]),e._20(4608,x.f,x.f,[x.g,m.a,e.B]),e._20(136192,x.c,x.b,[[3,x.c],m.a]),e._20(5120,x.j,x.i,[[3,x.j],[2,x.h],m.a]),e._20(5120,x.e,x.d,[[3,x.e],e.B,m.a]),e._20(512,u.a,u.a,[]),e._20(1024,e.n,d.r,[]),e._20(1024,e.b,function(n,t){return[d.s(n,t)]},[[2,d.i],[2,e.A]]),e._20(512,e.c,e.c,[[2,e.b]]),e._20(131584,e._9,e._9,[e.B,e._3,e.t,e.n,e.k,e.c]),e._20(2048,e.e,null,[e._9]),e._20(512,e.d,e.d,[e.e]),e._20(512,d.a,d.a,[[3,d.a]]),e._20(512,f.a,f.a,[]),e._20(512,y.a,y.a,[]),e._20(512,b.a,b.a,[]),e._20(256,y.b,!0,[]),e._20(512,y.c,y.c,[[2,y.b]]),e._20(512,m.b,m.b,[]),e._20(512,y.d,y.d,[]),e._20(512,x.a,x.a,[]),e._20(512,v.a,v.a,[]),e._20(512,o,o,[])])});Object(e.W)(),Object(d.k)().bootstrapModuleFactory(k).catch(function(n){return console.log(n)})},gFIY:function(n,t){function l(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}l.keys=function(){return[]},l.resolve=l,n.exports=l,l.id="gFIY"}},[0]);
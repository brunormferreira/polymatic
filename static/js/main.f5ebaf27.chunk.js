(this.webpackJsonpPolymatic=this.webpackJsonpPolymatic||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/agogo1.b8f6e210.wav"},34:function(e,t,a){e.exports=a.p+"static/media/agogo2.5844966c.wav"},35:function(e,t,a){e.exports=a.p+"static/media/bass.b2419d4f.wav"},36:function(e,t,a){e.exports=a.p+"static/media/block.3753c44b.wav"},37:function(e,t,a){e.exports=a.p+"static/media/bum.4c11d5fa.wav"},38:function(e,t,a){e.exports=a.p+"static/media/claves.400c9ef3.wav"},39:function(e,t,a){e.exports=a.p+"static/media/conga1.41b2f57f.wav"},40:function(e,t,a){e.exports=a.p+"static/media/conga2.887c0c16.wav"},41:function(e,t,a){e.exports=a.p+"static/media/cymbal.950d832b.wav"},42:function(e,t,a){e.exports=a.p+"static/media/djembe1.f3e648cb.wav"},43:function(e,t,a){e.exports=a.p+"static/media/djembe3.acef368f.wav"},44:function(e,t,a){e.exports=a.p+"static/media/djembe2.d38ab3d2.wav"},45:function(e,t,a){e.exports=a.p+"static/media/hit.a315148b.wav"},46:function(e,t,a){e.exports=a.p+"static/media/hithat.950d832b.wav"},47:function(e,t,a){e.exports=a.p+"static/media/kick1.e63d68a9.wav"},48:function(e,t,a){e.exports=a.p+"static/media/kick2.18445a5e.wav"},49:function(e,t,a){e.exports=a.p+"static/media/kicklow.c09eab14.wav"},50:function(e,t,a){e.exports=a.p+"static/media/snare.96dbe59f.wav"},51:function(e,t,a){e.exports=a.p+"static/media/tamborim.a6cbfb58.wav"},65:function(e,t,a){e.exports=a(93)},70:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t),t.default=function(e){var t=25,a=null;e.onmessage=function(e){"interval"===e.data&&(t=e.data.interval),"start"===e.data&&(a=setInterval((function(){postMessage("tick")}),t)),"stop"===e.data&&(clearInterval(a),a=null)}}},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),s=a.n(r),o=(a(70),a(64)),c=a(8),u=a(12),l=a(13),h=a(9),m=a.n(h),p=a(30),f=a.n(p),v=a(31),d=a.n(v).a.watch;function y(e,t){var a=this;return a._createSequence(e,t),d(this,["pulses","steps"],(function(){a.update(this.pulses,this.steps)})),this}y.prototype.update=function(e,t){return this._createSequence(e,t),this},y.prototype.shift=function(e){var t=e>this.seq.length?e-=this.seq.length:e;if(t===this.seq.length)return this;for(var a=this.seq.splice(this.seq.length-t,t),n=0;n<a.length;n++)this.seq.unshift(a[n]);return this},y.prototype._createSequence=function(e,t){var a=typeof e;return"number"===a?(this.pulses=e,this.steps=t||e,this.seq=f()(this.pulses,this.steps).split("")):"string"===a&&(this.steps=e.length,this.seq=e.split("")),this};var b=y,g=a(32),k=a.n(g);function w(e,t){var a=this;if(!e)throw new Error("Context is mandatory");if(!t)throw new Error("Callback is mandatory");this.context=e,this.steps=16,this.tempo=120,this.callback=t,this.look_ahead=1,this._step=1,this._scheduler_interval=20,this._next_event_time=0,this._first=!0,this._is_running=!1,this._worker=k()(81),this._worker.onmessage=function(e){"tick"===e.data&&a._is_running&&a._scheduler()},this._worker.postMessage({interval:a._scheduler_interval})}w.prototype.start=function(e){this._is_running?console.log("already started"):(this._is_running=!0,this._worker.postMessage("start"))},w.prototype.pause=function(){this._is_running=!1,this._worker.postMessage("stop")},w.prototype.stop=function(){this._first=!0,this._step=1,this._is_running=!1,this._worker.postMessage("stop")},w.prototype._scheduler=function(){for(1===this._step&&this._first&&(this._next_event_time=this.context.currentTime);this._next_event_time<this.context.currentTime+this.look_ahead;){var e=this._next_event_time-this.context.currentTime;this.callback(this._next_event_time,this._step,e),this._next()}},w.prototype._next=function(){this._step++,this._first&&(this._next_event_time=this.context.currentTime,this._first=!1),this._step>this.steps&&(this._step=1),this._next_event_time+=60/this.tempo*4/this.steps};var x=w,_=function(){function e(t,a,n,i,r,s,o){var c=this;Object(u.a)(this,e),o||(o=function(){}),this.id=t,this.on=s,this.off=o,this.tempo=n,this.clavis=i,this.context=a,this.sequence=r,this.metro=new x(a,(function(e,t,a){c.metro.steps!==c.sequence.seq.length&&(c.metro.steps=c.sequence.seq.length),"1"===r.seq[t-1]?(c.on(e,t,a),setTimeout((function(){i.setCurrentStep(t)}),1e3)):(c.off(e,t,a),setTimeout((function(){i.setCurrentStep(t)}),1e3))})),this.metro.steps=r.seq.length,this.metro.tempo=this.tempo}return Object(l.a)(e,[{key:"start",value:function(){this.metro.start()}},{key:"pause",value:function(){this.metro.pause()}},{key:"stop",value:function(){this.metro.stop()}},{key:"watch",value:function(e){this.metro.tempo=e}}]),e}(),E=function(){function e(t){var a=t.context,n=t.tempo;Object(u.a)(this,e),this.context=a,this.tempo=n||120,this.layers=[]}return Object(l.a)(e,[{key:"layer",value:function(e,t,a,n){return new _(m.a.generate(),this.context,this.tempo,t,e,a,n)}},{key:"pattern",value:function(e,t){return new b(e,t)}},{key:"add",value:function(e){this.layers.push(e)}},{key:"remove",value:function(e){e.metro.stop(),this.layers=this.layers.filter((function(t){return t.id!==e.id}))}},{key:"start",value:function(){this.layers.forEach((function(e){e.start()}))}},{key:"pause",value:function(){this.layers.forEach((function(e){e.pause()}))}},{key:"load",value:function(e,t,a,n){var i=new XMLHttpRequest;i.open("GET",t,!0),i.responseType="arraybuffer",i.onload=function(){e.decodeAudioData(i.response,a,n)},i.onerror=n,i.send()}},{key:"envelope",value:function(e,t,a){a||(a={});var n=a.peak||e.defaultValue;0===a.start&&(a.start=1e-6);var i=a.start||e.value,r=a.attack||.1,s=a.decay||0,o=a.sustain||n,c=a.release||.5;e.setValueAtTime(i,t),e.linearRampToValueAtTime(n,t+r),e.linearRampToValueAtTime(o,t+r+s),e.linearRampToValueAtTime(0,t+r+s+c)}},{key:"changeTempo",value:function(e){var t=!0,a=!1,n=void 0;try{for(var i,r=this.layers[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){i.value.metro.tempo=e}}catch(s){a=!0,n=s}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}}}]),e}(),j=function(){function e(){Object(u.a)(this,e),this.canvas=null,this.context=null,this.pattern=null,this.tempo=0,this.animate=!1,this.lastRender=Date.now(),this.draw=this.draw.bind(this),this.currentStep=1,this.patternPos={}}return Object(l.a)(e,[{key:"configure",value:function(e,t,a){this.canvas=e,this.context=e.getContext("2d"),this.pattern=t,this.tempo=a}},{key:"setCurrentStep",value:function(e){this.currentStep=e}},{key:"play",value:function(){this.animate=!0,window.requestAnimationFrame(this.draw)}},{key:"pause",value:function(){this.animate=!1}},{key:"draw",value:function(){var e=this.canvas,t=this.context,a=this.pattern,n="20px",i=2,r="#ccc",s="#000",o=4,u="#000",l="#000",h=2,m="#ccc",p="#ccc",f=5,v="#fc0",d="#fc0",y=[200,200],b=y[0],g=y[1],k=80,w=2*Math.PI/a.length,x=-.5*Math.PI;function _(e,a,n){var i=n.radius,r=n.stroke,s=n.fill;t.strokeStyle=r,t.fillStyle=s,t.beginPath(),t.arc(e,a,i,0,2*Math.PI),t.fill(),t.stroke()}function E(e,t){_(e,t,{radius:o,stroke:u,fill:l})}function j(e,t){_(e,t,{radius:h,stroke:m,fill:p})}e.style.padding=n,e.width=b,e.height=g,t.clearRect(0,0,b,g),t.lineWidth=i,t.strokeStyle=r,t.beginPath(),t.arc(b/2,g/2,k,0,2*Math.PI),t.stroke();var O=[];function S(e,t){return[Math.cos(e)*t+b/2,Math.sin(e)*t+g/2]}for(var q=0;q<a.length;q++){var P=S(x+w*q,k),C=Object(c.a)(P,2),T=C[0],A=C[1];"1"===a[q]?(E(T,A),O.push([T,A])):j(T,A),this.patternPos[q]={x:T,y:A}}!function(e){t.strokeStyle=s,t.beginPath(),t.moveTo(e[0][0],e[0][1]);for(var a=1;a<e.length;a++)t.lineTo(e[a][0],e[a][1]);t.closePath(),t.stroke()}(O),function(e,t){_(e,t,{radius:f,stroke:v,fill:d})}(this.patternPos[this.currentStep-1].x,this.patternPos[this.currentStep-1].y),this.animate&&window.requestAnimationFrame(this.draw)}}]),e}(),O=function(){function e(){var t=this;Object(u.a)(this,e),this.callbackOn=function(e,a){var n=t.context.createGain();n.gain.value=t.volume,n.connect(t.context.destination);var i=t.context.createBufferSource();t.beet.load(t.beet.context,t.instrument,(function(t){i.buffer=t,i.connect(n),i.start(e)}))},this.volume=1,this.context=null,this.beet=null,this.instrument=null}return Object(l.a)(e,[{key:"configure",value:function(e,t,a){this.context=e,this.beet=t,this.instrument=a}},{key:"setVolume",value:function(e){this.volume=e}},{key:"getVolume",value:function(){return this.volume}}]),e}(),S=a(33),q=a.n(S),P=a(34),C=a.n(P),T=a(35),A=a.n(T),M=a(36),N=a.n(M),I=a(37),R=a.n(I),V=a(38),B=a.n(V),L=a(39),W=a.n(L),D=a(40),F=a.n(D),G=a(41),J=a.n(G),U=a(42),z=a.n(U),H=a(43),X=a.n(H),$=a(44),K=a.n($),Q=a(45),Y=a.n(Q),Z=a(46),ee=a.n(Z),te=a(47),ae=a.n(te),ne=a(48),ie=a.n(ne),re=a(49),se=a.n(re),oe=a(50),ce=a.n(oe),ue=a(51),le=a.n(ue),he={agogo1:q.a,agogo2:C.a,bass:A.a,block:N.a,bum:R.a,claves:B.a,conga1:W.a,conga2:F.a,cymbal:J.a,djembe1:z.a,djembe2:X.a,djembe3:K.a,hit:Y.a,hithat:ee.a,kick1:ae.a,kick2:ie.a,kicklow:se.a,snare:ce.a,tamborim:le.a},me=a(52),pe=a.n(me),fe=(a(84),a(14)),ve=a(15);function de(e){var t=e.guia,a=e.removeLayer,r=e.preview,s=Object(n.useRef)(),o=Object(n.useState)(100),u=Object(c.a)(o,2),l=u[0],h=u[1],p=t.sequence,f=t.tempo,v=t.layer,d=t.clavis,y=t.channel;Object(n.useEffect)((function(){d.configure(s.current,p,f),d.play()}));return i.a.createElement("div",{className:"layer"},i.a.createElement("canvas",{id:m.a.generate(),ref:s,width:640,height:425}),r&&i.a.createElement("p",{className:"Preview"},"Pr\xe9-visualiza\xe7\xe3o"),a&&i.a.createElement("div",{className:"controls"},i.a.createElement("button",{onClick:function(){return v.start(),void d.play()}},i.a.createElement(fe.a,{icon:ve.a})),i.a.createElement("button",{onClick:function(){return v.stop(),void d.pause()}},i.a.createElement(fe.a,{icon:ve.b})),i.a.createElement("button",{onClick:function(){return a(t)}},i.a.createElement(fe.a,{icon:ve.c}))),!r&&i.a.createElement("div",{className:"mt-2"},i.a.createElement(pe.a,{value:l,min:0,max:100,tooltipLabel:function(e){return"".concat(e,"%")},onChange:function(e){return function(e){var t=function(e,t,a,n,i){return n+(i-n)*(e-t)/(a-t)}(e,0,100,0,.1);h(e),y.setVolume(t)}(Number(e.target.value))}})))}var ye,be=a(28),ge=(ye={},Object(be.a)(ye,m.a.generate(),{name:"Rumba",instruments:[{pattern:"1001000100101000",tempo:120,sample:"conga1"}]}),Object(be.a)(ye,m.a.generate(),{name:"Centro de gravidade",instruments:[{pattern:"10101",tempo:120,sample:"bum"},{pattern:"10110101",tempo:120,sample:"bass"}]}),ye),ke=a(95),we=a(54),xe=a(96),_e=a(55),Ee=a(98),je=a(97);var Oe=function(e){var t=e.layers,a=e.setPreview,r=e.pattern,s=e.setPattern,o=(e.beet,e.handleStoreUpdate),u=Object(n.useState)("agogo1"),l=Object(c.a)(u,2),h=l[0],p=l[1],f=Object(n.useState)(120),v=Object(c.a)(f,2),d=v[0],y=v[1];return i.a.createElement("div",{className:"header"},i.a.createElement("div",null,i.a.createElement("h1",{className:"header-logo"},"Polymatic ",i.a.createElement("small",null,"v3.0.4"))),i.a.createElement("div",{className:"header-controls"},i.a.createElement(ke.a,{"aria-label":"Basic example"},i.a.createElement(we.a,{variant:"secondary",onClick:function(){return function(){var e=!0,a=!1,n=void 0;try{for(var i,r=t[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var s=i.value;s.layer.start(),s.clavis.play()}}catch(o){a=!0,n=o}finally{try{e||null==r.return||r.return()}finally{if(a)throw n}}}()}},i.a.createElement(fe.a,{icon:ve.a})),i.a.createElement(we.a,{variant:"secondary",onClick:function(){return function(){var e=!0,a=!1,n=void 0;try{for(var i,r=t[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var s=i.value;s.layer.stop(),s.clavis.pause()}}catch(o){a=!0,n=o}finally{try{e||null==r.return||r.return()}finally{if(a)throw n}}}()}},i.a.createElement(fe.a,{icon:ve.b})))),i.a.createElement("div",{className:"header-form"},i.a.createElement(xe.a,null,i.a.createElement(xe.a.Prepend,null,i.a.createElement(xe.a.Text,{id:"basic-addon3"},"Padr\xe3o")),i.a.createElement(_e.a,{placeholder:"padr\xe3o",value:r,onChange:function(e){return t=e.target.value,a(!0),void s(t);var t}})),i.a.createElement(xe.a,null,i.a.createElement(xe.a.Prepend,null,i.a.createElement(xe.a.Text,{id:"basic-addon3"},"Tempo")),i.a.createElement(_e.a,{placeholder:"tempo",value:d,onChange:function(e){return y(e.target.value)}})),i.a.createElement(Ee.a.Control,{as:"select",onChange:function(e){return p(e.target.value)}},Object.keys(he).map((function(e,t){return i.a.createElement("option",{key:t,value:e},e)}))),i.a.createElement(we.a,{className:"ml-2",onClick:function(){return function(){var e={name:m.a.generate(),instruments:[{pattern:r,tempo:d,sample:h}]};o(e)}()}},"Adicionar"),i.a.createElement(je.a,{className:"ml-2"},i.a.createElement(je.a.Toggle,{variant:"info",id:"dropdown-basic"},"presets"),i.a.createElement(je.a.Menu,null,Object.keys(ge).map((function(e,t){return i.a.createElement(je.a.Item,{key:t,onClick:function(){o(ge[e])}},ge[e].name)}))))))};a(91),a(92);var Se=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!0),u=Object(c.a)(s,2),l=u[0],h=u[1],p=Object(n.useState)("1000101000101000"),f=Object(c.a)(p,2),v=f[0],d=f[1],y=Object(n.useState)([]),b=Object(c.a)(y,2),g=b[0],k=b[1];window.AudioContext=window.AudioContext||window.webkitAudioContext;var w=new AudioContext,x=new E({context:w,tempo:120}),_=function(e,t,a,n,i){r((function(r){return r.concat({id:m.a.generate(),sequence:e,tempo:t,layer:a,clavis:n,channel:i})}))},S=function(e){x.remove(e.layer),e.clavis.pause(),r(a.filter((function(t){return t.id!==e.id})))},q={layers:a,beet:x,pattern:v,setPattern:d,setPreview:h,handleStoreUpdate:function(e){e.instruments.map((function(e){var t=e.pattern,a=e.tempo,n=e.sample;k([].concat(Object(o.a)(g),[{pattern:t,tempo:a,sample:n}])),function(e,t,a){h(!1);var n=x.pattern(e),i=new j,r=new O;r.configure(w,x,he[a]);var s={layer:x.layer(n,i,r.callbackOn)};s.layer.tempo=t,x.add(s.layer),_(e,t,s.layer,i,r)}(t,a,n)})),x.start()}};return i.a.createElement("div",{className:"App"},i.a.createElement(Oe,q),i.a.createElement("div",{className:"wrapper"},a.map((function(e){return i.a.createElement(de,{key:e.id,guia:e,removeLayer:S})})),l&&v.length>1&&i.a.createElement(de,{guia:{sequence:v,clavis:new j,tempo:120},preview:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.f5ebaf27.chunk.js.map
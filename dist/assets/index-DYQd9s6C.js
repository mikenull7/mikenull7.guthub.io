(function(){const S=document.createElement("link").relList;if(S&&S.supports&&S.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))e(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const k of p.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&e(k)}).observe(document,{childList:!0,subtree:!0});function T(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function e(u){if(u.ep)return;u.ep=!0;const p=T(u);fetch(u.href,p)}})();const x=new WebSocket("ws://localhost:49122");x.onopen=()=>{console.log("Connected to SOS. you dumb son of a bitch")};x.addEventListener("message",o=>{const S=o.data;console.log(S)});x.onmessage=o=>{console.log(o.data)};const F={boost:34},ee=o=>{const S=document.querySelector("#target-boost-track-fill"),T=S.r.baseVal.value*2*Math.PI;S.style.strokeDasharray=`${T*.75} ${T}`,S.style.strokeDashoffset=(100-o)/100*T*.75},te=o=>{F.boost=o,console.log("Target player boost set:",F.boost),ee(F.boost),document.querySelector("#target-boost-value").innerHTML=`${o}`},oe=(o={blue:0,orange:0})=>{document.querySelector(".team#blue #score").innerHTML=o.blue,document.querySelector(".team#orange #score").innerHTML=o.orange},ae=(o,S)=>{const T=Math.max(Math.floor(o/60),0),e=o%60;return`${S?"+":""}${T}:${e.toString().padStart(2,"0")}`},ne=(o,S)=>{document.querySelector(".clock").innerHTML=ae(o,S)},I={name:"name",shots:34,assists:10,saves:3,goals:20,score:200},re=o=>{I.name=o,document.querySelector("#target-statcard-playername").innerHTML=`${I.name}`},W=o=>{I.shots=o,document.querySelector("#target-statcard-shots").innerHTML=`${I.shots}`},se=o=>{I.assists=o,document.querySelector("#target-statcard-assists").innerHTML=`${I.assists}`},le=o=>{I.saves=o,document.querySelector("#target-statcard-saves").innerHTML=`${I.saves}`},ce=o=>{I.goals=o,document.querySelector("#target-statcard-goals").innerHTML=`${I.goals}`},me=o=>{I.score=o,document.querySelector("#target-statcard-score").innerHTML=`${I.score}`},de=(o={blue:"",orange:""})=>{document.querySelector("#bluenumbers").innerHTML=o.blue.split(",").join("<br/>"),document.querySelector("#orangenumbers").innerHTML=o.orange.split(",").join("<br/>")},ie=(o={blue:"",orange:""})=>{document.querySelector("#bluenames").innerHTML=o.blue.split(",").join("<br/>"),document.querySelector("#orangenames").innerHTML=o.orange.split(",").join("<br/>")},ue=o=>{const S=Math.floor(o/60),e=(o%60).toString().padStart(2,"0");return`${(S%60).toString().padStart(2,"0")}:${e}`};console.log("Starting...");let M,y,B,R=null,U=0,J=0,K=1,z=[];const ge=2e3;function Q(){const o=document.getElementById("Series-Text");o.innerHTML=`GAME ${K} BEST OF 7`}function ye(){for(let o=1;o<=4;o++){const S=document.getElementById(`blue-win-${o}`),T=document.getElementById(`orange-win-${o}`);S.style.backgroundColor="transparent",T.style.display="transparent"}for(let o=1;o<=U;o++)document.getElementById(`blue-win-${o}`).style.backgroundColor=`#${y}`;for(let o=1;o<=J;o++)document.getElementById(`orange-win-${o}`).style.backgroundColor=`#${B}`}Q();x.addEventListener("message",o=>{const S=o.data;x.onmessage=T=>{console.log(T.data);const e=JSON.parse(S);console.log(e.event);const u=document.getElementById("game-start-flyover"),p=document.getElementById("game-end-hypechamber"),k=document.getElementById("PostGame-bg"),Y=document.querySelector(".PostGameData");if(e.event==="game:update_state"&&(M=e.data),e.event==="game:update_state"){let a=function(n,_){_.length>11?n.style.fontSize="25px":n.style.fontSize="33px"},s=function(n){const _=document.getElementById("blue").querySelector("#name"),D=document.getElementById("orange").querySelector("#name");_.innerHTML=n.blue,D.innerHTML=n.orange,a(_,n.blue),a(D,n.orange)};var Be=a,X=s;if(e.data.game.hasTarget){const n=e.data.players[e.data.game.target];te(n.boost),console.log("boost meter on"),document.getElementById("target-player").style.opacity=100}else e.data.game.hasTarget==!1&&(document.getElementById("target-player").style.opacity=0);if(e.data.game.hasTarget){const n=e.data.players[e.data.game.target];re(n.name),console.log(n.name)}if(e.data.game.hasTarget){const n=e.data.players[e.data.game.target];W(n.shots)}if(e.data.game.hasTarget){const n=e.data.players[e.data.game.target];se(n.assists)}if(e.data.game.hasTarget){const n=e.data.players[e.data.game.target];le(n.saves)}if(e.data.game.hasTarget){const n=e.data.players[e.data.game.target];ce(n.goals)}if(e.data.game.hasTarget){const n=e.data.players[e.data.game.target];me(n.score)}if(e.data.game.hasTarget){const n=e.data.players[e.data.game.target];W(n.shots)}e.data.game.hasTarget?document.getElementById("statcard").style.opacity=100:e.data.game.hasTarget==!1&&(document.getElementById("statcard").style.opacity=0);const m=0,c=1,f=Object.values(e.data.players).filter(n=>n.team===m),g=[f.map(function(n){return n.name})].join("<br/>"),d=Object.values(e.data.players).filter(n=>n.team===c),b=[d.map(function(n){return n.name})].join(`
`);ie({blue:g,orange:b}),s({blue:e.data.game.teams[0].name,orange:e.data.game.teams[1].name}),oe({blue:e.data.game.teams[0].score,orange:e.data.game.teams[1].score}),ne(e.data.game.time_seconds,e.data.game.isOT);const E=[f.map(function(n){return n.boost})].join("<br/>"),t=[d.map(function(n){return n.boost})].join("<br/>");de({blue:E,orange:t});const l=E.split(",")[0],r=E.split(",")[1],i=E.split(",")[2],h=t.split(",")[0],$=t.split(",")[1],O=t.split(",")[2];document.getElementById("teamLeft-boost-track-fill-1").style.width=l/100*345,document.getElementById("teamLeft-boost-track-fill-2").style.width=r/100*345,document.getElementById("teamLeft-boost-track-fill-3").style.width=i/100*345,document.getElementById("teamRight-boost-track-fill-1").style.width=h/100*345,document.getElementById("teamRight-boost-track-fill-2").style.width=$/100*345,document.getElementById("teamRight-boost-track-fill-3").style.width=O/100*345;const v=e.data.game.teams.map(function(n){return n.color_primary}),q=v[0],L=v[1],P=e.data.players[e.data.game.target],H=(P==null?void 0:P.team)==0?q:L,Z=document.querySelector("#target-boost-track-fill");Z.style.stroke=`${"#"+H}`;const V=document.querySelector("#target-statcard-bg");V.style.borderColor=`${"#"+H}`;const G=document.getElementById("ScoreCard-Container");e.data.game.isReplay?G.style.opacity=1:G.style.opacity=0;const A=document.getElementById("overtime-logo");e.data.game.isOT?A.style.opacity=1:A.style.opacity=0}if(e.event==="game:update_state"){const m=e.data.game.teams,c=m[0],f=m[1];y=c.color_primary,B=f.color_primary,document.getElementById("blue-win-1").style.borderColor=`#${y}`,document.getElementById("blue-win-2").style.borderColor=`#${y}`,document.getElementById("blue-win-3").style.borderColor=`#${y}`,document.getElementById("blue-win-4").style.borderColor=`#${y}`,document.getElementById("orange-win-1").style.borderColor=`#${B}`,document.getElementById("orange-win-2").style.borderColor=`#${B}`,document.getElementById("orange-win-3").style.borderColor=`#${B}`,document.getElementById("orange-win-4").style.borderColor=`#${B}`}if(e.event==="game:goal_scored"){console.log(e.data);const m=document.getElementById("replay-text");m.innerHTML="REPLAY";const c=e.data.scorer.teamnum;console.log(c);const f=e.data.scorer.name;console.log(f);const g=document.getElementById("Scorer");g.innerHTML=`${f}`;const d=e.data.assister.name,b=document.getElementById("Assister");b.innerHTML=`${d}`;const a=Math.trunc(e.data.goalspeed/1.609),s=document.getElementById("BallSpeed");s.innerHTML=`${a}     MPH`;const E=e.data.goaltime,t=document.getElementById("GoalTime"),l=`${E}`;t.innerHTML=ue(l);const r=document.getElementById("scorecard-bg");c===0?(r.style.backgroundColor=`#${y}`,r.style.boxShadow=`0px 25px 100px 100px #${y}`):(r.style.backgroundColor=`#${B}`,r.style.boxShadow=`0px 25px 100px 100px #${B}`),d===""?document.getElementById("AssisterImage").style.opacity=0:document.getElementById("AssisterImage").style.opacity=1}const N=document.getElementById("replay-swipe");if(e.event==="game:replay_start"&&(console.log("Replay started"),N.style.opacity=1,N.style.transition="opacity 0s",setTimeout(()=>{N.style.opacity=0,N.style.transition="opacity 1s"},1e3)),e.event==="game:pre_countdown_begin"&&(u.style.opacity=0),e.event==="game:round_started_go"&&(u.currentTime=0),e.event==="game:match_ended"){const m=e.data.winner_team_num;m===0?U++:m===1&&J++,K++,ye(),Q()}if(e.event==="game:statfeed_event"){console.log(e.data),e.data.type;const m=e.data.main_target,c=e.data.secondary_target,f=m?m.name:"Unknown",g=c?c.name:"Unknown",d=m?m.team_num:-1,b=c?c.team_num:-1,a=document.createElement("div");a.className="statfeed-event";const s=document.createElement("div");s.className="statfeed-icon-container";const E=document.createElement("img");E.className="statfeed-icon",E.src="./Goal.png",s.appendChild(E);const t=document.createElement("div");t.className="statfeed-text-container";const l=document.createElement("div");l.className="statfeed-primary-name",l.textContent=f;const r=document.createElement("div");r.className="statfeed-secondary-name-container";const i=document.createElement("div");if(i.className="statfeed-secondary-name",i.textContent=g,r.appendChild(i),t.appendChild(l),t.appendChild(r),a.appendChild(E),a.appendChild(t),document.getElementById("statfeed-container").appendChild(a),d===0?a.style.backgroundColor=`#${y}`:d===1&&(a.style.backgroundColor=`#${B}`),b===0?i.style.backgroundColor=`#${y}`:b===1&&(i.style.backgroundColor=`#${B}`),setTimeout(()=>{a.style.animation="fadeIn 0.5s forwards"},0),setTimeout(()=>{a.style.animation="fadeOut 0.5s forwards",setTimeout(()=>{a.style.display="none",document.getElementById("statfeed-container").removeChild(a)},500)},ge),z.push(a),z.length>3){const h=z.shift();h.style.display="none",document.getElementById("statfeed-container").removeChild(h)}}if(e.event==="game:update_state"){const m={BlueBoost1:document.querySelector("#teamLeft-boost-track-fill-1"),BlueBoost2:document.querySelector("#teamLeft-boost-track-fill-2"),BlueBoost3:document.querySelector("#teamLeft-boost-track-fill-3")},c={BlueBorder1:document.querySelector("#teamLeft-boost-bg-1"),BlueBorder2:document.querySelector("#teamLeft-boost-bg-2"),BlueBorder3:document.querySelector("#teamLeft-boost-bg-3")},f={OrangeBoost1:document.querySelector("#teamRight-boost-track-fill-1"),OrangeBoost2:document.querySelector("#teamRight-boost-track-fill-2"),OrangeBoost3:document.querySelector("#teamRight-boost-track-fill-3")},g={OrangeBorder1:document.querySelector("#teamRight-boost-bg-1"),OrangeBorder2:document.querySelector("#teamRight-boost-bg-2"),OrangeBorder3:document.querySelector("#teamRight-boost-bg-3")};document.querySelector(".team#blue #score-bg").style.background=`#${y}`,document.querySelector(".team#orange #score-bg").style.background=`#${B}`,document.querySelector(".team#blue").style.borderColor=`#${y}`,document.querySelector(".team#orange").style.borderColor=`#${B}`,document.querySelector("#Blue-Score-bg").style.backgroundColor=`#${y}`,document.querySelector("#Orange-Score-bg").style.backgroundColor=`#${B}`,document.querySelector("#BlueTeamName").style.borderColor=`#${y}`,document.querySelector("#OrangeTeamName").style.borderColor=`#${B}`,document.querySelector(".BluePlayers").style.borderColor=`#${y}`,document.querySelector(".OrangePlayers").style.borderColor=`#${B}`,document.querySelector(".BluePlayerStats").style.borderColor=`#${y}`,document.querySelector(".OrangePlayerStats").style.borderColor=`#${B}`;const d={BlueGoalsBar:document.querySelector("#BlueGoalsBar"),BlueAssistsBar:document.querySelector("#BlueAssistsBar"),BlueSavesBar:document.querySelector("#BlueSavesBar"),BlueShotsBar:document.querySelector("#BlueShotsBar"),BlueDemosBar:document.querySelector("#BlueDemosBar")},b={OrangeGoalsBar:document.querySelector("#OrangeGoalsBar"),OrangeAssistsBar:document.querySelector("#OrangeAssistsBar"),OrangeSavesBar:document.querySelector("#OrangeSavesBar"),OrangeShotsBar:document.querySelector("#OrangeShotsBar"),OrangeDemosBar:document.querySelector("#OrangeDemosBar")};for(let a in d)d[a]&&(d[a].style.backgroundColor=`#${y}`);for(let a in b)b[a]&&(b[a].style.backgroundColor=`#${B}`);for(let a in m)m[a]&&(m[a].style.fill=`#${y}`);for(let a in c)c[a]&&(c[a].style.borderColor=`#${y}`);for(let a in f)f[a]&&(f[a].style.fill=`#${B}`);for(let a in g)g[a]&&(g[a].style.borderColor=`#${B}`)}if(e.event==="game:match_created"){let c=function(f){Object.values(m).forEach(g=>{g&&(g.style.opacity=f)})};var j=c;console.log("Match created"),u.style.opacity=1,u.play(),p.style.opacity=0;const m={scorebug:document.querySelector(".scorebug"),teamLeftMeters:document.querySelector(".TeamLeftBoostMeters"),teamRightMeters:document.querySelector(".TeamRightBoostMeters"),blueTeamName:document.querySelector("#blue-team-name"),orangeTeamName:document.querySelector("#orange-team-name"),overtimeLogo:document.querySelector("#overtime-logo"),SeriesText:document.getElementById("Series-Container-bg"),SeriesBlue1:document.getElementById("blue-win-1"),SeriesBlue2:document.getElementById("blue-win-2"),SeriesBlue3:document.getElementById("blue-win-3"),SeriesBlue4:document.getElementById("blue-win-4"),SeriesOrange1:document.getElementById("orange-wins-1"),SeriesOrange2:document.getElementById("orange-wins-2"),SeriesOrange3:document.getElementById("orange-wins-3"),SeriesOrange4:document.getElementById("orange-wins-4")};c(0)}if(e.event==="game:pre_countdown_begin"){let c=function(g){Object.values(m).forEach(d=>{d&&(d.style.opacity=g)})};var j=c;const m={scorebug:document.querySelector(".scorebug"),teamLeftMeters:document.querySelector(".TeamLeftBoostMeters"),teamRightMeters:document.querySelector(".TeamRightBoostMeters"),blueTeamName:document.querySelector("#blue-team-name"),orangeTeamName:document.querySelector("#orange-team-name"),overtimeLogo:document.querySelector("#overtime-logo"),SeriesText:document.getElementById("Series-Container-bg"),SeriesBlue1:document.getElementById("blue-win-1"),SeriesBlue2:document.getElementById("blue-win-2"),SeriesBlue3:document.getElementById("blue-win-3"),SeriesBlue4:document.getElementById("blue-win-4"),SeriesOrange1:document.getElementById("orange-wins-1"),SeriesOrange2:document.getElementById("orange-wins-2"),SeriesOrange3:document.getElementById("orange-wins-3"),SeriesOrange4:document.getElementById("orange-wins-4")};c(1)}e.event==="game:round_started_go"&&(u.currentTime=0,p.currentTime=0);const w="373d4a";if(e.event==="game:update_state"){const g=[Object.values(e.data.players).filter(s=>s.team===0).map(function(s){return s.name})].join("<br/>"),b=[Object.values(e.data.players).filter(s=>s.team===1).map(function(s){return s.name})].join(`
`),a=e.data.players[e.data.game.target];if(e.data.game.hasTarget,a){const s=a.name,E=g.split(",")[0],t=g.split(",")[1],l=g.split(",")[2],r=b.split(",")[0],i=b.split(",")[1],h=b.split(",")[2],$=document.getElementById("teamLeft-boost-bg-1"),O=document.getElementById("teamLeft-boost-bg-2"),C=document.getElementById("teamLeft-boost-bg-3"),v=document.getElementById("teamRight-boost-bg-1"),q=document.getElementById("teamRight-boost-bg-2"),L=document.getElementById("teamRight-boost-bg-3"),P=[E,t,l].includes(s),H=[r,i,h].includes(s);R&&R.team!==a.team&&($.style.backgroundColor="#373d4a",O.style.backgroundColor="#373d4a",C.style.backgroundColor="#373d4a",v.style.backgroundColor="#373d4a",q.style.backgroundColor="#373d4a",L.style.backgroundColor="#373d4a"),P?(console.log(`Spectated player is on the Blue team: ${s}`),s===E?$.style.backgroundColor=`#${y}`:$.style.backgroundColor="#373d4a",s===t?O.style.backgroundColor=`#${y}`:O.style.backgroundColor="#373d4a",s===l?C.style.backgroundColor=`#${y}`:C.style.backgroundColor="#373d4a"):H&&(console.log(`Spectated player is on the Orange team: ${s}`),s===r?v.style.backgroundColor=`#${B}`:v.style.backgroundColor="#373d4a",s===i?q.style.backgroundColor=`#${B}`:q.style.backgroundColor="#373d4a",s===h?L.style.backgroundColor=`#${B}`:L.style.backgroundColor="#373d4a"),R=a}if(e.data.game.target===""){const s=document.getElementById("teamLeft-boost-bg-1"),E=document.getElementById("teamLeft-boost-bg-2"),t=document.getElementById("teamLeft-boost-bg-3"),l=document.getElementById("teamRight-boost-bg-1"),r=document.getElementById("teamRight-boost-bg-2"),i=document.getElementById("teamRight-boost-bg-3");s.style.backgroundColor=`#${w}`,E.style.backgroundColor=`#${w}`,t.style.backgroundColor=`#${w}`,l.style.backgroundColor=`#${w}`,r.style.backgroundColor=`#${w}`,i.style.backgroundColor=`#${w}`,R=null;return}}if(e.event==="game:podium_start"){let c=function(t,l){l.length>11?t.style.fontSize="68px":t.style.fontSize="80px"},f=function(t,l){l.length>9?t.style.fontSize="40px":t.style.fontSize="50px"},g=function(t){const l=document.getElementById("BlueTeamName"),r=document.getElementById("OrangeTeamName");l.innerHTML=t[0].name,r.innerHTML=t[1].name,c(l,t[0].name),c(r,t[1].name);const i=document.getElementById("BlueScore"),h=document.getElementById("OrangeScore");i.innerHTML=t[0].score,h.innerHTML=t[1].score},a=function(){function t(h,$){return h.reduce((O,C)=>O+(C[$]||0),0)}const l={goals:t(d,"goals"),assists:t(d,"assists"),saves:t(d,"saves"),shots:t(d,"shots"),demos:t(d,"demos")},r={goals:t(b,"goals"),assists:t(b,"assists"),saves:t(b,"saves"),shots:t(b,"shots"),demos:t(b,"demos")};function i(h,$,O){const C=$+O,v=C>0?$/C*100:0,q=C>0?O/C*100:0,L=document.getElementById(`Blue${h}Bar`),P=document.getElementById(`Orange${h}Bar`);L.style.width=`${v}%`,P.style.width=`${q}%`}i("Goals",l.goals,r.goals),i("Assists",l.assists,r.assists),i("Saves",l.saves,r.saves),i("Shots",l.shots,r.shots),i("Demos",l.demos,r.demos)},s=function(){d.forEach((t,l)=>{const r=document.getElementById(`BluePlayer${l+1}`);r.innerHTML=t.name,f(r,t.name);const i=document.getElementById(`BluePlayer${l+1}-stats`);i.innerHTML=`
          ${t.goals}<br>
          ${t.assists}<br>
          ${t.saves}<br>
          ${t.shots}<br>
          ${t.demos}
        `}),b.forEach((t,l)=>{const r=document.getElementById(`OrangePlayer${l+1}`);r.innerHTML=t.name,f(r,t.name);const i=document.getElementById(`OrangePlayer${l+1}-stats`);i.innerHTML=`
          ${t.goals}<br>
          ${t.assists}<br>
          ${t.saves}<br>
          ${t.shots}<br>
          ${t.demos}
        `}),a()};var be=c,fe=f,X=g,Se=a,pe=s;console.log("Podium Started"),console.log(M);const m=document.querySelector(".PostGameData");m.style.opacity=1,k.style.opacity=1,k.play(),g(M.game.teams);const d=Object.values(M.players).filter(t=>t.team===0),b=Object.values(M.players).filter(t=>t.team===1);s()}if(e.event==="game:match_destroyed"&&(p.style.opacity=1,p.play(),k.style.opacity=0,Y.style.opacity=0),e.event==="game:initialized"){let c=function(g){Object.values(m).forEach(d=>{d&&(d.style.opacity=g)})};var j=c;console.log("Match initialized"),u.style.opacity=1,u.play(),p.style.opacity=0;const m={scorebug:document.querySelector(".scorebug"),teamLeftMeters:document.querySelector(".TeamLeftBoostMeters"),teamRightMeters:document.querySelector(".TeamRightBoostMeters"),blueTeamName:document.querySelector("#blue-team-name"),orangeTeamName:document.querySelector("#orange-team-name"),overtimeLogo:document.querySelector("#overtime-logo"),SeriesText:document.getElementById("Series-Container-bg"),SeriesBlue1:document.getElementById("blue-win-1"),SeriesBlue2:document.getElementById("blue-win-2"),SeriesBlue3:document.getElementById("blue-win-3"),SeriesBlue4:document.getElementById("blue-win-4"),SeriesOrange1:document.getElementById("orange-wins-1"),SeriesOrange2:document.getElementById("orange-wins-2"),SeriesOrange3:document.getElementById("orange-wins-3"),SeriesOrange4:document.getElementById("orange-wins-4")};c(0)}}});
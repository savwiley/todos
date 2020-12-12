(()=>{"use strict";let e=[];const t=document.querySelector("#content"),n=document.createElement("div");n.setAttribute("class","sidebar"),t.appendChild(n);const r=document.createElement("div");r.setAttribute("class","overlay");const a=document.createElement("div");a.setAttribute("id","overlay");const i=document.createElement("form");i.setAttribute("id","newForm");const o=document.createElement("label");o.setAttribute("for","formTitle"),o.innerHTML="Title: ",i.appendChild(o);const u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("name","title"),u.setAttribute("id","formTitle"),u.placeholder="Title and Date are required",u.required=!0,i.appendChild(u);const c=document.createElement("label");c.setAttribute("for","formDesc"),c.setAttribute("id","descLabel"),c.innerHTML="Description: ",i.appendChild(c);const s=document.createElement("textarea");s.setAttribute("type","text"),s.setAttribute("name","desc"),s.setAttribute("id","formDesc"),s.required=!1,i.appendChild(s);const d=document.createElement("label");d.setAttribute("for","formDueDate"),d.innerHTML="Due Date: ",i.appendChild(d);const l=document.createElement("input");l.setAttribute("type","date"),l.setAttribute("name","dueDate"),l.setAttribute("id","formDueDate"),l.required=!0,i.appendChild(l);const m=document.createElement("label");m.setAttribute("for","formPriority"),m.innerHTML="Priority: ",i.appendChild(m);const h=document.createElement("select");h.setAttribute("name","priority"),h.setAttribute("id","priority"),h.required=!0,i.appendChild(h);const f=document.createElement("option");f.value="low",f.innerHTML="Low",h.appendChild(f);const g=document.createElement("option");g.value="medium",g.innerHTML="Medium",h.appendChild(g);const p=document.createElement("option");p.value="high",p.innerHTML="High",h.appendChild(p);const v=document.createElement("label");v.setAttribute("for","formProject"),v.innerHTML="Project: ",i.appendChild(v);const b=document.createElement("select");b.setAttribute("name","project"),b.setAttribute("id","project"),b.required=!1,i.appendChild(b);const w=document.createElement("input");function y(){document.getElementById("formTitle").value="",document.getElementById("formDesc").value="",document.getElementById("formDueDate").value="",document.getElementById("priority").value="",document.getElementById("project").value="",document.querySelector(".overlay").style.display="block",document.getElementById("subBtn")&&document.getElementById("subBtn").remove();const e=document.getElementById("newForm"),t=document.createElement("input");t.setAttribute("type","button"),t.value="Submit",t.setAttribute("id","subBtn"),t.addEventListener("click",C),e.appendChild(t)}function C(){u.value&&l.value||alert("Please fill in Title and Due Date fields."),new Oe(u.value,s.value,l.value,h.value,b.value),Ie(u.value,s.value,l.value,h.value,b.value)}function T(){for(let t=0;t<e.length;t++)localStorage.setItem(`proj${t}`,e[t])}w.setAttribute("type","button"),w.value="Cancel",w.setAttribute("id","cancelBtn"),w.addEventListener("click",(()=>{document.querySelector(".overlay").style.display="none"})),i.appendChild(w),a.appendChild(i),r.appendChild(a),t.appendChild(r);function D(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function E(e){D(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function M(e){D(1,arguments);var t=E(e);return!isNaN(t)}var x={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function A(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var S,P={date:A({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:A({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:A({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},k={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function U(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,c=a.width?String(a.width):e.defaultWidth;r=e.values[c]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function N(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var c,s=u[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(s))return n}(d):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(s))return n}(d),c=e.valueCallback?e.valueCallback(c):c,{value:c=a.valueCallback?a.valueCallback(c):c,rest:r.slice(s.length)}}}const q={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof x[e]?x[e]:1===t?x[e].one:x[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:P,formatRelative:function(e,t,n,r){return k[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:U({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:U({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:U({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:U({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:U({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(S={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(S.matchPattern);if(!a)return null;var i=a[0],o=n.match(S.parsePattern);if(!o)return null;var u=S.valueCallback?S.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:N({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:N({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:N({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:N({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:N({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function j(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function W(e,t){D(2,arguments);var n=E(e).getTime(),r=j(t);return new Date(n+r)}function L(e,t){D(2,arguments);var n=j(t);return W(e,-n)}function Y(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const B=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return Y("yy"===t?r%100:r,t.length)},O=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):Y(n+1,2)},I=function(e,t){return Y(e.getUTCDate(),t.length)},H=function(e,t){return Y(e.getUTCHours()%12||12,t.length)},F=function(e,t){return Y(e.getUTCHours(),t.length)},z=function(e,t){return Y(e.getUTCMinutes(),t.length)},X=function(e,t){return Y(e.getUTCSeconds(),t.length)},$=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return Y(Math.floor(r*Math.pow(10,n-3)),t.length)};var Q=864e5;function G(e){D(1,arguments);var t=1,n=E(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function R(e){D(1,arguments);var t=E(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=G(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=G(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function J(e){D(1,arguments);var t=R(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=G(n);return r}var Z=6048e5;function _(e,t){D(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:j(a),o=null==n.weekStartsOn?i:j(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=E(e),c=u.getUTCDay(),s=(c<o?7:0)+c-o;return u.setUTCDate(u.getUTCDate()-s),u.setUTCHours(0,0,0,0),u}function V(e,t){D(1,arguments);var n=E(e,t),r=n.getUTCFullYear(),a=t||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,u=null==o?1:j(o),c=null==a.firstWeekContainsDate?u:j(a.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var s=new Date(0);s.setUTCFullYear(r+1,0,c),s.setUTCHours(0,0,0,0);var d=_(s,t),l=new Date(0);l.setUTCFullYear(r,0,c),l.setUTCHours(0,0,0,0);var m=_(l,t);return n.getTime()>=d.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}function K(e,t){D(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:j(a),o=null==n.firstWeekContainsDate?i:j(n.firstWeekContainsDate),u=V(e,t),c=new Date(0);c.setUTCFullYear(u,0,o),c.setUTCHours(0,0,0,0);var s=_(c,t);return s}var ee=6048e5;function te(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+Y(i,2)}function ne(e,t){return e%60==0?(e>0?"-":"+")+Y(Math.abs(e)/60,2):re(e,t)}function re(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+Y(Math.floor(a/60),2)+n+Y(a%60,2)}const ae={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return B(e,t)},Y:function(e,t,n,r){var a=V(e,r),i=a>0?a:1-a;return"YY"===t?Y(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):Y(i,t.length)},R:function(e,t){return Y(R(e),t.length)},u:function(e,t){return Y(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return Y(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return Y(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return O(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return Y(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){D(1,arguments);var n=E(e),r=_(n,t).getTime()-K(n,t).getTime();return Math.round(r/ee)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):Y(a,t.length)},I:function(e,t,n){var r=function(e){D(1,arguments);var t=E(e),n=G(t).getTime()-J(t).getTime();return Math.round(n/Z)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):Y(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):I(e,t)},D:function(e,t,n){var r=function(e){D(1,arguments);var t=E(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/Q)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):Y(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return Y(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return Y(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return Y(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return H(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):F(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):Y(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):Y(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):z(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):X(e,t)},S:function(e,t){return $(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return ne(a);case"XXXX":case"XX":return re(a);case"XXXXX":case"XXX":default:return re(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return ne(a);case"xxxx":case"xx":return re(a);case"xxxxx":case"xxx":default:return re(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+te(a,":");case"OOOO":default:return"GMT"+re(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+te(a,":");case"zzzz":default:return"GMT"+re(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return Y(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return Y((r._originalDate||e).getTime(),t.length)}};function ie(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function oe(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}const ue={p:oe,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return ie(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",ie(a,t)).replace("{{time}}",oe(i,t))}};var ce=6e4;function se(e){return e.getTime()%ce}function de(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var r=n>0?(ce+se(t))%ce:se(t);return n*ce+r}var le=["D","DD"],me=["YY","YYYY"];function he(e){return-1!==le.indexOf(e)}function fe(e){return-1!==me.indexOf(e)}function ge(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var pe=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ve=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,be=/^'([^]*?)'?$/,we=/''/g,ye=/[a-zA-Z]/;function Ce(e){return e.match(be)[1].replace(we,"'")}var Te=36e5,De={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Ee=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,Me=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,xe=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Ae(e){var t,n={},r=e.split(De.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],De.timeZoneDelimiter.test(n.date)&&(n.date=e.split(De.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=De.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function Se(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?a:100*i,restDateString:e.slice((r[1]||r[2]).length)}}function Pe(e,t){if(null===t)return null;var n=e.match(Ee);if(!n)return null;var r=!!n[4],a=ke(n[1]),i=ke(n[2])-1,o=ke(n[3]),u=ke(n[4]),c=ke(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,c)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=7*(t-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(t,u,c):new Date(NaN);var s=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(je[t]||(We(e)?29:28))}(t,i,o)&&function(e,t){return t>=1&&t<=(We(e)?366:365)}(t,a)?(s.setUTCFullYear(t,i,Math.max(a,o)),s):new Date(NaN)}function ke(e){return e?parseInt(e):1}function Ue(e){var t=e.match(Me);if(!t)return null;var n=Ne(t[1]),r=Ne(t[2]),a=Ne(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?n*Te+6e4*r+1e3*a:NaN}function Ne(e){return e&&parseFloat(e.replace(",","."))||0}function qe(e){if("Z"===e)return 0;var t=e.match(xe);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(r*Te+6e4*a):NaN}var je=[31,null,31,30,31,30,31,31,30,31,30,31];function We(e){return e%400==0||e%4==0&&e%100}let Le=[];const Ye=document.querySelector("#content"),Be=document.createElement("div");function Oe(e,t,n,r,a){this.title=e,this.desc=t,this.dueDate=n,this.priorty=r,Le.push({title:e,desc:t,dueDate:n,priority:r,project:a});const i=function(e,t,n){D(2,arguments);var r=String(t),a=n||{},i=a.locale||q,o=i.options&&i.options.firstWeekContainsDate,u=null==o?1:j(o),c=null==a.firstWeekContainsDate?u:j(a.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var s=i.options&&i.options.weekStartsOn,d=null==s?0:j(s),l=null==a.weekStartsOn?d:j(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var m=E(e);if(!M(m))throw new RangeError("Invalid time value");var h=de(m),f=L(m,h),g={firstWeekContainsDate:c,weekStartsOn:l,locale:i,_originalDate:m};return r.match(ve).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,ue[t])(e,i.formatLong,g):e})).join("").match(pe).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return Ce(n);var o=ae[r];if(o)return!a.useAdditionalWeekYearTokens&&fe(n)&&ge(n,t,e),!a.useAdditionalDayOfYearTokens&&he(n)&&ge(n,t,e),o(f,n,i.localize,g);if(r.match(ye))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(new Date(function(e,t){D(1,arguments);var n=t||{},r=null==n.additionalDigits?2:j(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var a,i=Ae(e);if(i.date){var o=Se(i.date,r);a=Pe(o.restDateString,o.year)}if(isNaN(a)||!a)return new Date(NaN);var u,c=a.getTime(),s=0;if(i.time&&(s=Ue(i.time),isNaN(s)||null===s))return new Date(NaN);if(!i.timezone){var d=new Date(c+s),l=new Date(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate(),d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds());return l.setFullYear(d.getUTCFullYear()),l}return u=qe(i.timezone),isNaN(u)?new Date(NaN):new Date(c+s+u)}(`${n}T00:00:00`)),"P"),o=document.querySelector(".cardside"),u=document.createElement("div");u.setAttribute("class","card"),u.setAttribute("data-proj",a),u.setAttribute("id",Le.length);const c=document.createElement("div");c.setAttribute("id","Title"),c.setAttribute("class",`titleIndex${Le.length}`),c.textContent=e,u.appendChild(c);const s=document.createElement("div");s.setAttribute("id","DueDate"),s.setAttribute("class",`dateIndex${Le.length}`),s.textContent=`Due on ${i}`,u.appendChild(s);const d=document.createElement("input");d.setAttribute("id","complete"),d.setAttribute("type","checkbox"),d.addEventListener("change",(()=>{d.checked?(u.removeAttribute("class"),u.setAttribute("class","cardDone"),d.innerHTML='<i class="fas fa-check"></i>'):(u.removeAttribute("class"),u.setAttribute("class","card"),d.innerHTML="")})),u.appendChild(d);const l=document.createElement("div");l.setAttribute("id","Desc"),l.setAttribute("class",`descIndex${Le.length}`),l.textContent=t,u.appendChild(l);const m=document.createElement("div");m.setAttribute("id","Priority"),m.setAttribute("class",`priIndex${Le.length}`),u.style.borderColor="low"==r?"green":"medium"==r?"yellow":"red",u.appendChild(m);const h=document.createElement("input");h.setAttribute("id","delete"),h.setAttribute("type","button"),h.setAttribute("value","X"),h.addEventListener("click",(()=>{u.remove(),localStorage.removeItem("item"+(Le.length-1))})),u.appendChild(h);const f=document.createElement("button");f.setAttribute("id","edit"),f.setAttribute("type","submit"),f.innerHTML='<i class="fas fa-pen"></i>',f.addEventListener("click",(()=>{const e=u.getAttribute("id");!function(e,t){y();const n=document.querySelector(`.titleIndex${t}`),r=document.querySelector(`.descIndex${t}`),a=document.querySelector(`.dateIndex${t}`),i=document.getElementById("formTitle");i.value=n.textContent;const o=document.getElementById("formDesc");o.value=r.textContent;const u=document.getElementById("formDueDate");u.value=Le[t-1].dueDate;const c=document.getElementById("priority");c.value=Le[t-1].priority;const s=document.getElementById("project");s.value=Le[t-1].project,document.getElementById("edBtn")&&document.getElementById("edBtn").remove();const d=document.querySelector("#subBtn");d.value="Edit",d.removeEventListener("click",C),d.addEventListener("click",(()=>{Le[t-1].title=i.value,n.textContent=i.value,Le[t-1].desc=o.value,r.textContent=o.value,Le[t-1].dueDate=u.value,a.textContent=`Due on ${u.value}`,Le[t-1].priority=c.value,"low"==c.value?e.style.borderColor="green":"medium"==c.value?e.style.borderColor="yellow":e.style.borderColor="red",Le[t-1].project=s.value,e.setAttribute("data-proj",s.value),Ie()})),document.getElementById("newForm").appendChild(d)}(u,e)})),u.appendChild(f),o.appendChild(u)}function Ie(){for(let e=0;e<Le.length;e++)localStorage.setItem(`item${e}`,JSON.stringify(Le[e]))}Be.setAttribute("class","cardside"),Ye.appendChild(Be),localStorage?function(){for(let e=0;e<localStorage.length;e++)if(localStorage.getItem(`item${e}`)){const t=localStorage.getItem(`item${e}`),n=JSON.parse(t);new Oe(n.title,n.desc,n.dueDate,n.priority,n.project)}else Ie()}():Ie(),function(){const e=document.createElement("input");e.setAttribute("id","newCard"),e.setAttribute("type","button"),e.value="New To-Do",e.addEventListener("click",y),n.appendChild(e)}(),function(){const t=document.createElement("input");t.setAttribute("id","newProjForm"),t.setAttribute("type","text"),t.placeholder="Project Name",n.appendChild(t);const r=document.createElement("input");r.setAttribute("id","newProjBtn"),r.setAttribute("type","button"),r.value="+",r.addEventListener("click",(()=>{if(t.value){const r=document.createElement("input");r.setAttribute("class","projBtn"),r.setAttribute("id",e.length),r.setAttribute("type","button"),r.value=t.value,n.appendChild(r),e.push(t.value),T();const a=document.createElement("option");a.value=e.length-1,a.innerHTML=t.value,b.appendChild(a),t.value="",t.placeholder="Project Name",r.addEventListener("click",(()=>{document.querySelectorAll(".card").forEach((e=>{const t=e.getAttribute("data-proj"),n=r.getAttribute("id");e.style.display=t!==n?"none":"block"}))}))}else t.placeholder="MUST ENTER PROJECT NAME"})),n.appendChild(r)}(),function(){const e=document.createElement("input");e.setAttribute("class","projBtn"),e.setAttribute("id","defaultProj"),e.setAttribute("type","button"),e.value="See All",e.addEventListener("click",(()=>{document.querySelectorAll(".card").forEach((e=>{e.style.display="block"}))})),n.appendChild(e)}(),localStorage?function(){for(let t=0;t<localStorage.length;t++)if(localStorage.getItem(`proj${t}`)){const r=localStorage.getItem(`proj${t}`),a=document.createElement("input");a.setAttribute("class","projBtn"),a.setAttribute("id",e.length),a.setAttribute("type","button"),a.value=r,e.push(r);const i=document.createElement("option");i.value=e.length-1,i.innerHTML=r,b.appendChild(i),a.addEventListener("click",(()=>{document.querySelectorAll(".card").forEach((e=>{const t=e.getAttribute("data-proj"),n=a.getAttribute("id");e.style.display=t!==n?"none":"block"}))})),n.appendChild(a)}else T()}():T()})();
// ===== EDITABLE CONTENT: replace placeholders with the real menu =====
var MENU={
"Hot Coffee":["Hot Coffee Item 1","Hot Coffee Item 2","Hot Coffee Item 3","Hot Coffee Item 4"],
"Iced Coffee":["Iced Coffee Item 1","Iced Coffee Item 2","Iced Coffee Item 3","Iced Coffee Item 4"],
"Fresh Drinks":["Fresh Drink Item 1","Fresh Drink Item 2","Fresh Drink Item 3","Fresh Drink Item 4"],
"Desserts":["Dessert Item 1","Dessert Item 2","Dessert Item 3","Dessert Item 4"],
"Food & Snacks":["Food Item 1","Food Item 2","Food Item 3","Food Item 4"]};
var PRICE="EGP —", DESC="Description coming soon.";
var WHY=[["Perfect for Studying","Focus-friendly seating and a calm setting."],["Quiet & Comfortable","A peaceful environment to settle in."],["Great for Reading & Working","Take your time, bring your laptop or a book."],["Suitable for Interviews","A professional, relaxed spot to meet."],["Friendly Atmosphere","Respectful staff and a welcoming space."],["Delicious Coffee & Food","Quality drinks and food to enjoy."]];
var GAL=[["Coffee cups & latte art","#8a5230","#3b2113"],["Cafe interior","#c89b6d","#6b3f24"],["Comfortable seating","#6b3f24","#2b1a12"],["Food & desserts","#a8774a","#4a2a18"],["Coffee preparation","#7a4528","#c89b6d"]];
// ======================================================================
var $=function(s){return document.querySelector(s)};
var cup='<svg viewBox="0 0 120 120" style="color:#fbf6ee"><use href="#cup"/></svg>';
var tabs=$("#tabs"),grid=$("#menugrid");
function show(cat){
  Array.prototype.forEach.call(tabs.children,function(b){b.setAttribute("aria-selected",b.textContent===cat)});
  grid.innerHTML=MENU[cat].map(function(n){return '<article class="card"><div class="img">'+cup+'</div><div class="body"><h3>'+n+'</h3><p>'+DESC+'</p><span class="price">'+PRICE+'</span></div></article>'}).join("");
}
Object.keys(MENU).forEach(function(c){var b=document.createElement("button");b.className="tab";b.setAttribute("role","tab");b.textContent=c;b.onclick=function(){show(c)};tabs.appendChild(b)});
show("Hot Coffee");
var icons=['<path d="M4 19V6l8-3 8 3v13M9 19v-5h6v5"/>','<circle cx="12" cy="12" r="9"/><path d="M8 12h8"/>','<path d="M4 5h7a3 3 0 0 1 3 3v11a3 3 0 0 0-3-3H4zM20 5h-6"/>','<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3"/>','<circle cx="12" cy="12" r="9"/><path d="M8 14a5 5 0 0 0 8 0M9 9h.01M15 9h.01"/>','<path d="M5 8h12v4a6 6 0 0 1-12 0zM17 9h2a2 2 0 0 1 0 4h-2"/>'];
$("#whygrid").innerHTML=WHY.map(function(w,i){return '<div class="card rv" style="padding:30px"><div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+icons[i]+'</svg></div><h3>'+w[0]+'</h3><p style="margin:0;color:var(--muted)">'+w[1]+'</p></div>'}).join("");
$("#gal").innerHTML=GAL.map(function(g){return '<div class="tile rv" style="--c1:'+g[1]+';--c2:'+g[2]+'" role="img" aria-label="'+g[0]+' (photo placeholder)"><svg viewBox="0 0 120 120"><use href="#cup"/></svg>'+g[0]+'</div>'}).join("");
var hdr=$("#hdr");function sc(){hdr.classList.toggle("solid",window.scrollY>40)}sc();addEventListener("scroll",sc,{passive:true});
var bg=$("#burger"),ln=$("#links");
bg.onclick=function(){var o=ln.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
ln.addEventListener("click",function(e){if(e.target.tagName==="A"){ln.classList.remove("open");bg.setAttribute("aria-expanded","false")}});
$("#yr").textContent=new Date().getFullYear();
var els=document.querySelectorAll(".rv");
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});els.forEach(function(e){io.observe(e)})}else{els.forEach(function(e){e.classList.add("in")})}

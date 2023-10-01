let cursor = document.querySelector("#mini-cursor");



var timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  
});




window.addEventListener("scroll",function(){
  let navWrapper=document.querySelector("#nav-wrapper");
  let navMain=document.querySelector("#nav");

  if(window.pageYOffset >=651){
    navMain.classList.add("sticky");
}
else{
  navMain.classList.remove("sticky");



}


})




function revealTop(){
    document.querySelectorAll(".reveal").forEach(function(elem){
    let parent=document.createElement("span");
    let child=document.createElement("span");

  parent.classList.add("parent");
  child.classList.add("child");

  child.innerHTML=elem.innerHTML;
  parent.appendChild(child)

  elem.innerHTML= "";
  elem.appendChild(parent);


    })

  };

  
revealTop();

var tl=gsap.timeline();


tl.to("#main",{

height:"0vh",



})

tl.from("#main",{
height:"100vh",
delay:2.5,
ease:Circ.easeInOut,


})

tl.from(".child span",{
x:100,
delay:0.2,
stagger:0.2,
duration:1.1,
ease:Power3.EaseInOut,

})

// tl.from("#main",{
// display:"block",
// duration:3.1,
// ease:Circ.easeInOut,


// })

 tl.to(".reveal .parent .child",{

  y:"-100%",
  duration:0.7,
  delay:0.1,
  ease:Circ.easeInOut,

})

tl.from("#loader",{
height:"100vh",

})


tl.to("#loader #ring",{
opacity:0,
visibility:"hidden",
duration:0.5,
height:"0rem",
width:"0rem",

})

tl.to("#loader",{
height:"0vh",
duration:1.2,
ease:Circ.easeInOut,
})



let talkButton=document.querySelector(".textabout a");
talkButton.addEventListener("mouseenter",function(){
cursor.style.mixBlendMode="difference";



})




talkButton.addEventListener("mouseleave",function(){
cursor.style.mixBlendMode="normal";

})








let topHeading = document.querySelector("#heading h1");
topHeading.addEventListener("mouseenter", function () {
  cursor.style.mixBlendMode="difference";
});

topHeading.addEventListener("mouseleave", function () {
  cursor.style.mixBlendMode = "normal";

});

let topHeading2 = document.querySelector(".blocktext #heading-left");
topHeading2.addEventListener("mouseenter", function () {
    cursor.style.mixBlendMode="difference";
});

topHeading2.addEventListener("mouseleave", function () {
  cursor.style.mixBlendMode = "normal";
});

let topHeading3 = document.querySelector(".blocktext h5");
topHeading3.addEventListener("mouseenter", function () {
    cursor.style.mixBlendMode="difference";
});

topHeading3.addEventListener("mouseleave", function () {
  cursor.style.mixBlendMode = "normal";
});


let navAnchor=document.querySelector("#nav a");


navAnchor.addEventListener("mousemove", function () {
  gsap.to(cursor,{
   mixBlendMode:"difference",

  })
});

navAnchor.addEventListener("mouseleave",function(){
gsap.to(cursor,{
mixBlendMode:"normal",


})

});


let menuNav=document.querySelector("#nav h2");

menuNav.addEventListener("mouseenter",function(){
cursor.style.mixBlendMode="difference";


})
menuNav.addEventListener("mouseleave",function(){
  cursor.style.mixBlendMode="normal";
  
  })
  

// menuNav.addEventListener("mouseenter",function(){

// cursor.style.mixBlendMode="difference";

// })

// menuNav.addEventListener("mouseleave",function(){
// cursor.style.mixBlendMode="normal";

// })



let footerAnchor=document.querySelectorAll("#footer-right a");


footerAnchor.forEach(function(a){
a.addEventListener("mouseenter",function(){
cursor.style.mixBlendMode="difference";

})

a.addEventListener("mouseleave",function(){
cursor.style.mixBlendMode="normal";

})

})

// Subsribe heading differene
let subHeading=document.querySelector("#subscribe #subscribe-heading");
subHeading.addEventListener("mouseenter",function(){
cursor.style.mixBlendMode="difference";

})
subHeading.addEventListener("mouseleave",function(){
  cursor.style.mixBlendMode="normal";
  
  })

  // #hero-footer anchor
  let hFooterAnchor=document.querySelectorAll("#hero-footer a");
  hFooterAnchor.forEach(function(e){
   e. addEventListener("mouseenter",function(){
  cursor.style.mixBlendMode="difference";
  
  })
  e.addEventListener("mouseleave",function(){
    cursor.style.mixBlendMode="normal";
    
    })
  });




  let dTime=document.querySelector("#date-time");

  setInterval(()=>{

    let r=new Date();

    dTime.innerHTML=r.toLocaleTimeString();


  },1000)
  


// let cursorBox=document.querySelector("#boxMove")


// cursorBox.addEventListener("mousemove",function(dets){

// gsap.to(cursorBox,{
// opacity:1,
// // left:dets.clientX,
// // top:dets.clientY,

// })
// })

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var diffRotate=0;

elem.addEventListener("mousemove",function(dets){
var diffTop= dets.clientY- elem.getBoundingClientRect().top;
diffRotate=dets.clientX-rotate;
rotate=dets.clientX;


    gsap.to(elem.querySelector("img"),{
opacity:1,
ease:Power3,
top:diffTop,
left:dets.clientX,
rotate:gsap.utils.clamp(-20,20,diffRotate*0.5)

    })

 
  
})

elem.addEventListener("mouseleave",function(){

    gsap.to(elem.querySelector("img"),{
opacity:0,
ease:Power3,
duration:0.5

    })
});


});


// Functions Build and Calling
document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var diffRotate=0;

elem.addEventListener("mousemove",function(dets){
var diffTop= dets.clientY- elem.getBoundingClientRect().top;
diffRotate=dets.clientX-rotate;
rotate=dets.clientX;


    gsap.to(elem.querySelector("img"),{
opacity:1,
ease:Power3,
top:diffTop,
left:dets.clientX,
rotate:gsap.utils.clamp(-20,20,diffRotate*0.38)

    })

 
  
})

elem.addEventListener("mouseleave",function(){

    gsap.to(elem.querySelector("img"),{
opacity:0,
ease:Power3,
duration:0.5

    })
});


});


// Functions Build and Calling
function mini_cursor_follower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {

    cursor.style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    
  });
}


function firstPageAnimation() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    delay:8,
    duration: 1.5,
    ease: Expo.easeInOut,
  });

  tl.to(".bounding-elem", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 3.5,
    delay:1.5,
    stagger: 0.2,
    delay: -2,
  });

  tl.from("#hero-footer", {
    y: "-10",
    ease: Expo.easeInoOut,
    delay: -1,
    opacity: 0,
    duration: 1.5,
  });
}

function circleSqueeze() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);
    var xdiff = dets.clientX - xprev;
    var ydiff = dets.clientY - yprev;

    xscale = gsap.utils.clamp(0.7, 1.3, xdiff);
    yscale = gsap.utils.clamp(0.8, 1.3, ydiff);

    xprev = dets.clientX;
    yprev = dets.clientY;

    mini_cursor_follower(xscale, yscale);

    timeout=setTimeout(function(){
     document.querySelector("#mini-cursor").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
    },100)
  });
}

circleSqueeze();
mini_cursor_follower();
firstPageAnimation();


let panneaux = document.getElementsByClassName('panneau');
let slider = document.querySelector('.slider');



//Curseur custom
const cursorA = document.querySelector(".cursorA");
if (window.matchMedia("(max-width: 600px)").matches) {
  /* La largeur maximum de l'affichage est 600 px inclus */
} else {
  // Le curseur suit la souris
  document.addEventListener("mousemove", (e) => {
    cursorA.style.left = e.pageX + 'px';
    cursorA.style.top = e.pageY + 'px';
  });

  // ajout differentes classes aux evenements
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("mouseover", () => {cursorA.classList.add('link');});
    link.addEventListener("mouseout", () => {cursorA.classList.remove('link');});
  });

  window.addEventListener("pointerdown", () => {cursorA.classList.add('click'); });
  window.addEventListener("pointerup", () => {cursorA.classList.remove('click'); });
}

// Pointeur qui disparaît au survol
let linkscontainer = document.querySelector('.linkscontainer');
let contactbtn = document.querySelector('.contactbtn');
let contactlinks = document.querySelectorAll('.contact > a');

function mouseHovering (element) {
if (element){
element.addEventListener("mouseover", () => { cursorA.style = "display:none;"; });
element.addEventListener("mouseleave", () => { cursorA.style = "display:block;"; });
}}

slider.addEventListener('mousemove', () => {
mouseHovering(linkscontainer);
mouseHovering(contactbtn);
Array.from(contactlinks).forEach(contactlinks => mouseHovering(contactlinks));

});

// linkscontainer.addEventListener("mouseover", function () { document.querySelector('.cursorA').style = "display:none;"; });
// linkscontainer.addEventListener("mouseleave", function () { document.querySelector('.cursorA').style = "display:block;"; });

// contactbtn.addEventListener("mouseover", function () { document.querySelector('.cursorA').style = "display:none;"; });
// contactbtn.addEventListener("mouseleave", function () { document.querySelector('.cursorA').style = "display:block;"; });





// Slider dragging

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  cancelMomentumTracking();
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
  beginMomentumTracking();
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX); //scroll-fast
  var prevScrollLeft = slider.scrollLeft;
  slider.scrollLeft = scrollLeft - walk;
  velX = slider.scrollLeft - prevScrollLeft;
});

// Momentum au clic
var velX = 0;
var momentumID;

slider.addEventListener('wheel', (e) => {cancelMomentumTracking();});

function beginMomentumTracking() {
  cancelMomentumTracking();
  momentumID = requestAnimationFrame(momentumLoop);
}

function cancelMomentumTracking() {
  cancelAnimationFrame(momentumID);
}

function momentumLoop() {
  slider.scrollLeft += velX * 2;
  velX *= 0.95;
  if (Math.abs(velX) > 0.5) {momentumID = requestAnimationFrame(momentumLoop);}
}


//Détection trackpad VS molette
function detectTrackPad(e) {
  var isTrackpad = false;
  if (e.wheelDeltaY) {
    if (e.wheelDeltaY === (e.deltaY * -3)) {
      isTrackpad = true;
    }
  }
  else if (e.deltaMode === 0) {
    isTrackpad = true;
  }
  return isTrackpad ?  true :  false;
  // console.log(isTrackpad ? "Trackpad detected" : "Mousewheel detected");
}
document.addEventListener("wheel", detectTrackPad, false);


//Détection de scroll gauche et droite + preventDefault
const scrollContainer = document.querySelector(".slider");
scrollContainer.addEventListener("wheel", (evt) => {
  if (detectTrackPad(evt) === false){
  evt.preventDefault();
  if (evt.deltaY > 0) {smoothwheel(evt.deltaY);} // droite
  else {smoothwheel(evt.deltaY);                 // gauche
  }}
});


//Ancienne fonction de scrollsmooth, à améliorer ou supprimer
///////////////////////////////////////////////////////////
// function scrollsmooth(amount){
//   let timer = 0;
//   let intervalId = null;
//   clearInterval(intervalId);
//     function smooth() {  
//       timer = timer + 0.01;  
//       if (timer >= 1) clearInterval(intervalId);
//         else {
//             let easeInOutSine = -(Math.cos(Math.PI * timer) - 1) / 2 *10;
//             if (Math.sign(amount) == 1){
//               scrollContainer.scrollLeft += easeInOutSine;
//             } else {
//               scrollContainer.scrollLeft -= easeInOutSine;
//             }
//             console.log(timer);
//         }
//     }  
//   intervalId = setInterval(smooth, 1);
// }
/////////////////////////////////////////////////////////////

//fonction qui parle d'elle même, à garder pour plus tard (et rajouter l'axe X)
function isInViewport(elem) {
  let bounding = elem.getBoundingClientRect();
  return (
    bounding.left >= 0 &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};


function smoothwheel(amount) {
  let deltaY = amount;
  let panneau = '';
  //décalage pour qu'il n'y ait qu'un panneau dans le viewport
  if (Math.sign(amount) == 1) {
    scrollContainer.scrollLeft += 1;
  } else {
    scrollContainer.scrollLeft -= 1;
  }

  for (i = 0; i < panneaux.length; i++) { if (isInViewport(panneaux[i])) {panneau = panneaux[i];} }
    if (panneau){
      if (Math.sign(deltaY) == 1 && panneau.nextElementSibling) {
        panneau.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
      } else {
        panneau.previousElementSibling.scrollIntoView({ behavior: 'smooth' });
      }
  }else{
    if (Math.sign(deltaY) == 1 && panneau.nextElementSibling) {
        scrollContainer.scrollLeft -= deltaY;
     } else {
      scrollContainer.scrollLeft += deltaY;   
      }
    }
}


//Navigation menu
let li = [];
li = document.querySelectorAll("#menufix > ul > li");
li[0].addEventListener("click", function () { panneaux[0].scrollIntoView({ behavior: 'smooth', inline: 'start' }); });
li[1].addEventListener("click", function () { panneaux[2].scrollIntoView({ behavior: 'smooth', inline: 'start' }); });
li[2].addEventListener("click", function () { panneaux[4].scrollIntoView({ behavior: 'smooth', inline: 'start' }); });
li[3].addEventListener("click", function () { panneaux[6].scrollIntoView({ behavior: 'smooth', inline: 'start' }); });
li[4].addEventListener("click", function () { panneaux[8].scrollIntoView({ behavior: 'smooth', inline: 'start' }); });

//Suivi du menu
slider.addEventListener("scroll", () => {
  Array.from(li).forEach(li => li.classList.remove("active"));
  for (i = 0; i < panneaux.length; i++) {
    if (isInViewport(panneaux[0]) || isInViewport(panneaux[1])) { li[0].classList.add('active'); }
    if (isInViewport(panneaux[2]) || isInViewport(panneaux[3])) { li[1].classList.add('active'); }
    if (isInViewport(panneaux[4]) || isInViewport(panneaux[5])) { li[2].classList.add('active'); }
    if (isInViewport(panneaux[6]) || isInViewport(panneaux[7])) { li[3].classList.add('active'); }
    if (isInViewport(panneaux[8]) || isInViewport(panneaux[9])) { li[4].classList.add('active'); }
  }
});





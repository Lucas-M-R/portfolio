

//Curseur custom
const cursor = document.querySelector(".cursor")
// move cursor as mouse move
document.addEventListener("mousemove", (e) => {
   cursor.style.left = e.pageX + 'px'
   cursor.style.top = e.pageY + 'px'
})

// add different classes on events
const links = document.querySelectorAll("a")
links.forEach((link) => {
   link.addEventListener("mouseover", () => {
      cursor.classList.add('link');
   })
   link.addEventListener("mouseout", () => {
      cursor.classList.remove('link');
   })
})






//Navigation menu
const scrollContainer = document.querySelector("main");
let li = []
li = document.querySelectorAll("li");


console.log(li)


li[0].addEventListener("click", function(){
document
  .getElementById('accueil')
  .scrollIntoView({ behavior: 'smooth' });
})
li[1].addEventListener("click", function(){
document
  .getElementById('work')
  .scrollIntoView({ behavior: 'smooth' });
})
li[2].addEventListener("click", function(){
document
  .getElementById('portfolio')
  .scrollIntoView({ behavior: 'smooth' });
})
li[3].addEventListener("click", function(){
document
  .getElementById('logtech')
  .scrollIntoView({ behavior: 'smooth' });
})
li[4].addEventListener("click", function(){
document
  .getElementById('contact')
  .scrollIntoView({ behavior: 'smooth' });
})


//Scroll horizontal
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    console.log(document.getElementsByTagName('scrollContainer').offsetX, document.getElementsByTagName('scrollContainer').pageYOffset)
});




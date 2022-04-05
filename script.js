       
       //Curseur custom
const cursorA = document.querySelector(".cursorA");
if (window.matchMedia("(max-width: 600px)").matches) {
  /* La largeur maximum de l'affichage est 600 px inclus */
} else {
// move cursor as mouse move
document.addEventListener("mousemove", (e) => {
   cursorA.style.left = e.pageX + 'px'
   cursorA.style.top = e.pageY + 'px'
})

// add different classes on events
const links = document.querySelectorAll("a")
links.forEach((link) => {
   link.addEventListener("mouseover", () => {
      cursorA.classList.add('link');
   })
   link.addEventListener("mouseout", () => {
      cursorA.classList.remove('link');
   })
})

window.addEventListener("pointerdown", () => {
  cursorA.classList.add('click');
})
window.addEventListener("pointerup", () => {
  cursorA.classList.remove('click');
})

}

       
       
       
       
       
       // Slider dragging

        const slider = document.querySelector('.slider');
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
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX); //scroll-fast
            var prevScrollLeft = slider.scrollLeft;
            slider.scrollLeft = scrollLeft - walk;
            velX = slider.scrollLeft - prevScrollLeft;
        });
        
        // Momentum 
        
        var velX = 0;
        var momentumID;
        
        slider.addEventListener('wheel', (e) => {
            cancelMomentumTracking();
        });  
        
        function beginMomentumTracking(){
            cancelMomentumTracking();
            momentumID = requestAnimationFrame(momentumLoop);
        }
        
        function cancelMomentumTracking(){
            cancelAnimationFrame(momentumID);
        }
        
        function momentumLoop(){
            slider.scrollLeft += velX * 2;
            velX *= 0.95; 
            if (Math.abs(velX) > 0.5){
                momentumID = requestAnimationFrame(momentumLoop);
            }
        }
        
        //Scroll
        
        const scrollContainer = document.querySelector(".slider");
        
        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        });
        
        
        
        
        
        
        
        
        
        
        //Navigation menu
        let li = []
        li = document.querySelectorAll("li");


        // li[0].addEventListener("click", function(){ anchor(0)})
        // function anchor (i){
        //   let ancre = "slide-"+i+1;
        //   document.getElementById(ancre).scrollIntoView({ behavior: 'smooth'});
        // }
        
        // console.log(li)
        
        
        li[0].addEventListener("click", function(){
        document
          .getElementById('slide-1')
          .scrollIntoView({ behavior: 'smooth' });
        })
        li[1].addEventListener("click", function(){
        document
          .getElementById('slide-5')
          .scrollIntoView({ behavior: 'smooth' });
        })
        li[2].addEventListener("click", function(){
        document
          .getElementById('slide-6')
          .scrollIntoView({ behavior: 'smooth' });
        })
        li[3].addEventListener("click", function(){
        document
          .getElementById('slide-11')
          .scrollIntoView({ behavior: 'smooth' });
        })
        li[4].addEventListener("click", function(){
        document
          .getElementById('slide-12')
          .scrollIntoView({ behavior: 'smooth' });
        })
        li[5].addEventListener("click", function(){
        document
          .getElementById('slide-6')
          .scrollIntoView({ behavior: 'smooth' });
        })
        li[6].addEventListener("click", function(){
        document
          .getElementById('slide-7')
          .scrollIntoView({ behavior: 'smooth' });
        })
        li[7].addEventListener("click", function(){
        document
          .getElementById('slide-8')
          .scrollIntoView({ behavior: 'smooth' });
        })
        li[8].addEventListener("click", function(){
        document
          .getElementById('slide-9')
          .scrollIntoView({ behavior: 'smooth' });
        })
        li[9].addEventListener("click", function(){
        document
          .getElementById('slide-10')
          .scrollIntoView({ behavior: 'smooth' });
        })
        li[10].addEventListener("click", function(){
        document
          .getElementById('slide-11')
          .scrollIntoView({ behavior: 'smooth' });
        })
        li[11].addEventListener("click", function(){
        document
          .getElementById('slide-12')
          .scrollIntoView({ behavior: 'smooth' });
        })

        document.querySelector('.linkscontainer').addEventListener("mouseover", function(){
          document.querySelector('.cursorA').style="display:none;"
        })

        document.querySelector('.linkscontainer').addEventListener("mouseleave", function(){
          document.querySelector('.cursorA').style="display:block;"
        })

        document.querySelector('.contactbtn').addEventListener("mouseover", function(){
          document.querySelector('.cursorA').style="display:none;"
        })

        document.querySelector('.contactbtn').addEventListener("mouseleave", function(){
          document.querySelector('.cursorA').style="display:block;"
        })

       


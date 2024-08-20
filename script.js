// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// }); //removed because scroll trigger wont work
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  locomotiveAnimation();
  
  function locomotiveAnimation2() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#page6"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#page6", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#page6").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  locomotiveAnimation2();
  

  function navbarAnimation() {
    gsap.to("#navlogo svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top top",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to("#nav-part2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
        
      },
    });
  }
  navbarAnimation()

  function videoAnime() {
    var video = document.querySelector("#video_container");
    var playbtn = document.querySelector("#play");

    // Mouse enter animation
    video.addEventListener("mouseenter", function() {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1,
            duration: 0.3
        });
    });

    // Mouse leave animation
    video.addEventListener("mouseleave", function() {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0,
            duration: 0.3
        });
    });

    // Move the play button with the cursor
    video.addEventListener("mousemove", function(dets) {
        var rect = video.getBoundingClientRect();
        var playbtnWidth = playbtn.offsetWidth / 2; // Half of the button width
        var playbtnHeight = playbtn.offsetHeight / 2; // Half of the button height
        
        gsap.to(playbtn, {
            left: dets.clientX - rect.left - playbtnWidth,
            top: dets.clientY - rect.top - playbtnHeight,
            duration: 0.3,
        });
    });

   
  


}

videoAnime();

function TextAnime(){
  gsap.to("#page1 h1", {
      y: 0,                // Move to its natural position
      opacity: 1,          // Fade in as it moves
      delay: 0.5,
      duration: 1.2,
      ease: "power4.out",  // Smooth easing effect
      stagger: 0.2         // Optional: stagger for multi-line text
  });
}

TextAnime();


// function TextAnime(){
//     gsap.from("#page1 h1",{
//         y:50,
//         opacity:0,
//         delay:0.5,
//         duration:1.2,
//         ease:"power4.out",
//         stagger:0.2
//     })
//     gsap.from("#page1 #video_container",{
//             scale:0.95,
//             opacity:0,
//             delay:1.5,
//             duration:0.8,
//             ease:"power4.out"
//     })
// }
// TextAnime()

// document.addEventListener("mousemove", function(dets){
//     gsap.to(".usercursor",{
//         left:dets.x,
//         top:dets.y,

//     })

// })

// document.querySelector("#child1").addEventListener("mouseenter",function(){
//     gsap.to(".usercursor",{
//         transform: 'translate(-50%,-50%) scale(1)'

//     })
// })


// document.querySelector("#child1").addEventListener("mouseleave",function(){
//     gsap.to(".usercursor",{
//         transform: 'translate(-50%,-50%) scale(0)'

//     })
// })
function cursorAnime(){
    document.addEventListener("mousemove", function(dets){
        gsap.to(".usercursor",{
            left:dets.x,
            top:dets.y
    
        })
    
    })
    document.querySelectorAll(".child").forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
          gsap.to(".usercursor",{
          transform: 'translate(-50%,-50%) scale(1)'
    
        })
    
     })
     elem.addEventListener("mouseleave",function(){
        gsap.to(".usercursor",{
        transform: 'translate(-50%,-50%) scale(0)'
    
      })
    
    })
        
    })

}
cursorAnime()

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function() {
      document.querySelectorAll('.nav-item').forEach(nav => {
          nav.classList.remove('active');
      });
      this.classList.add('active');

      const target = this.getAttribute('data-target');
      document.querySelectorAll('.testimonial').forEach(testimonial => {
          testimonial.classList.remove('active');
      });
      document.getElementById(target).classList.add('active');
  });
});

// function animateTestimonials() {
//   gsap.fromTo(".testimonial.active", 
//   {
//       y: 50,                // Start below the natural position
//       opacity: 0,           // Start invisible
//   }, 
//   {
//       y: 0,                 // Move to its natural position
//       opacity: 1,           // Fade in as it moves
//       duration: 1.5,        // Duration of the animation
//       ease: "power4.out",   // Smooth easing effect
//   });
// }

// // Trigger the animation
// animateTestimonials();
// Register ScrollTrigger plugin



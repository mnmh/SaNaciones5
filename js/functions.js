gsap.registerPlugin(ScrollTrigger);

let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

gsap.utils.toArray("body").forEach((body, i) => {
    body.bg = body.querySelector(".background-terrain"); 

    gsap.fromTo(body.bg, {
        y: () => i ? `${window.innerHeight * getRatio(body)}px` : "0px"
      }, {
        y: () => `${-window.innerHeight * (1 - getRatio(body))}px`,
        ease: "none",
        scrollTrigger: {
          trigger: body,
          start: () => i ? "top bottom" : "top top", 
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true // to make it responsive
        }
      });
    
    });

const container = document.querySelector("body");


gsap.timeline({
    defaults: { duration: 2},
    scrollTrigger: {
      markers:true,
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  })
.from(".mask", {maskSize: '0%'})
.to(".mask", {maskSize: '200%'});

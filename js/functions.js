gsap.registerPlugin(ScrollTrigger);


let getRatio = (el) =>
  window.innerHeight / (window.innerHeight + el.offsetHeight);

gsap.utils.toArray("body").forEach((body, i) => {
  body.bg = body.querySelector(".background-terrain");

  gsap.fromTo(
    body.bg,
    {
      y: () => (i ? `${window.innerHeight * getRatio(body)}px` : "0px"),
    },
    {
      y: () => `${-window.innerHeight * (1 - getRatio(body))}px`,
      ease: "none",
      scrollTrigger: {
        trigger: body,
        start: () => (i ? "top bottom" : "top top"),
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true, // to make it responsive
      },
    }
  );
});

const container = document.querySelector("body");

gsap
  .timeline({
    defaults: { duration: 2 },
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  })
  .from(".mask", { maskSize: "0%" })
  .to(".mask", { maskSize: "200%" });

var rotate = gsap.to(".trama", {
  rotation: -360 * 2,
  duration: 1,
  ease: "none",
});

const timeline = gsap.timeline({ delay: 0.2 });
timeline.fromTo(
  ".trama",
  { opacity: 2, scale: 1, rotation: 0, delay: 1000 },
  { duration: 4, opacity: 1, scale: 1, rotation: -360, yoyo: true }
);

let wrapper = document.querySelector(".wrapper")
let menu = document.querySelector("#menuBox")
let logo = document.querySelector(".logo-inside")
let toggle = document.querySelector("#menuToggle")
let showMenu = document.querySelector(".showMenu")
let closeMenu = document.querySelector(".closeMenu")
let itemMenu = menu.querySelectorAll("li");
let dialogo = document.getElementById("dialogo")
let territorios = document.getElementById("territorios")
let resistencias = document.getElementById("resistencias")
let fuerza = document.getElementById("fuerza")
let naciones = document.getElementById("naciones")

const fondos = [
  {
  Element:dialogo,
  class:"dialogobg"
  },
  {
    Element:territorios,
    class:"territoriosbg"
  },
  {
    Element:resistencias,
    class:"resistenciasbg"
  },
  {
    Element:fuerza,
    class:"fuerzabg"
  },
  {
    Element:naciones,
    class:"nacionesbg"
  }
]

fondos.forEach(fondo => {
  fondo.Element.addEventListener("mouseenter", ()=>{menu.classList.add(fondo.class)})
  fondo.Element.addEventListener("mouseleave", ()=>{menu.classList.remove(fondo.class)})
})

window.addEventListener('load', (event) => {
  menu.setAttribute("hidden", true);
});

let openMenu = function(){
  if (toggle.classList.contains('showMenu')) {
      menu.classList.add('openMenu')
      menu.removeAttribute("hidden");
      wrapper.classList.add('hide')
      toggle.classList.add('closeMenu')
      toggle.classList.remove('showMenu')
      container.classList.add('lock-scroll')
      logo.classList.remove('logo-scroll')
  } else if(toggle.classList.contains('closeMenu')){
      menu.classList.remove('openMenu')
      wrapper.classList.remove('hide')
      toggle.classList.remove('closeMenu')
      toggle.classList.add('showMenu')
      container.classList.remove('lock-scroll')
      if(scroll >= 200) {
        logo.classList.add('logo-scroll')
      }
      setTimeout(function () {
        menu.setAttribute("hidden", true);
      }, 1000);
  }
}

toggle.addEventListener('click', openMenu);
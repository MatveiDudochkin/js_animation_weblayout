let menuTl = gsap.timeline({ paused: true });
let openBtn = document.querySelector('.burger');
let closeMenu = document.querySelector('.close');

menuTl.fromTo(".menu", { display: "none" }, { display: "block" })
    .fromTo(".menu", { opacity: 0, }, { opacity: 1, duration: 1 },)
    .fromTo('.menu__top', 0.5, { transform: "translateY(-20px)" }, { transform: "translateY(0px)", duration: 0.5, }, "-=1")
    .fromTo('.menu__left', 0.5, { transform: "translateY(50px)" }, { transform: "translateY(0px)", duration: 0.5, }, "-=1")
    .fromTo('.menu__right', 0.5, { transform: "translateY(100px)", opacity: 0 }, { transform: "translateY(0px)", opacity: 1, duration: 0.5, }, "-=0.2")
    .fromTo('.social', 0.5, { transform: "translateY(100px)", opacity: 0 }, { transform: "translateY(0px)", opacity: 1, duration: 0.5, }, "-=0.2")

openBtn.addEventListener("click", () => menuTl.play())
closeMenu.addEventListener("click", () => menuTl.reverse())
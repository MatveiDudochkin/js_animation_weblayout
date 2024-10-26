const tl = gsap.timeline();

tl.from('.hero__title, .hero__btn', { opacity: 0, y: 50, duration: 0.5 })
    .from('.hero__descr', { opacity: 0, duration: 1 })
    .from('.animation-img1', { opacity: 0, scale: 1, duration: 1 }, "-=1")
    .from('.animation-img2', { opacity: 0, scale: 1, duration: 1 }, "-=0.6")
    .from('.animation-img3', { opacity: 0, duration: 1 }, "-=0.7")
const tl = gsap.timeline();

tl.from("h2", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5
});

tl.from("h4", {
    y: -30,
    opacity: 0,
    duration: 1,
    stagger: 1
});

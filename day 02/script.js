
gsap.registerPlugin(ScrollTrigger);

gsap.to("#page2 h1", {
  x: "-150%", // Moves the h1 out to the left
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true,
    markers: true
  }
});

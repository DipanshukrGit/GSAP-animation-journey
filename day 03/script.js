const line = document.querySelector('.line');
const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
  const centerY = window.innerHeight / 2;
  const deltaY = e.clientY - centerY;

  // Map vertical movement to horizontal line translation
  const moveX = deltaY * 0.5; // Adjust multiplier for sensitivity

  gsap.to(line, {
    x: moveX,
    duration: 0.3,
    ease: 'power2.out'
  });
});

container.addEventListener('mouseleave', () => {
  gsap.to(line, {
    x: 0,
    duration: 0.5,
    ease: 'power2.out'
  });
});

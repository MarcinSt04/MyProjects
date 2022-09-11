const moveBackgroundEffect = () => {
  const element = document.querySelector('header') as HTMLElement;
  const a = document.querySelector('.hero-img') as HTMLElement;
  element.addEventListener('mousemove', e => {
    let moveX = (e.x * -1) / 120;
    let moveY = (e.y * -1) / 120;
    a.style.backgroundPosition = `${moveX}px ${moveY}px`;
  });
};

export default moveBackgroundEffect;

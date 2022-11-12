import React from 'react';

function setKeyframes() {
  let styleSheet = document.styleSheets[0];
  let animationName = `ripple`;
  let keyframes = `@keyframes ${animationName} 
    {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }`;
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

export function createRipple(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  setKeyframes();
  const button = event.currentTarget;

  const oldRipple = button.getElementsByClassName('ripple')[0];
  if (oldRipple) {
    oldRipple.remove();
  }

  const ripple = document.createElement('span');
  ripple.classList.add('ripple');

  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;

  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.transform = 'scale(0)';
  ripple.style.animation = 'ripple 600ms linear';
  ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';

  button.appendChild(ripple);
}



const swipeIn = (classname, xPos, delay, duration) => {
  document.querySelector(classname).style.transform = xPos;
  document.querySelector(classname).style.transitionDelay = delay;
  document.querySelector(classname).style.transitionDuration = duration;
}

const fadeIn = (classname, opacity, delay, duration, transformProp) => {
  document.querySelector(classname).style.opacity = opacity;
  document.querySelector(classname).style.transitionDelay = delay;
  document.querySelector(classname).style.transitionDuration = duration;
  if (transformProp) {
    document.querySelector(classname).style.transform = transformProp;
  }
}

const growSideways = (classname, width, delay, duration) => {
  document.querySelector(classname).style.width = width;
  document.querySelector(classname).style.transitionDelay = delay;
  document.querySelector(classname).style.transitionDuration = duration;
}

const animate = (classname, name, delay, duration, isForwards) => {
  document.querySelector(classname).style.animationName = name;
  document.querySelector(classname).style.animationDelay = delay;
  document.querySelector(classname).style.animationDuration = duration;
  document.querySelector(classname).style.animationTimingFunction = "ease-out";
  if (isForwards) {
    document.querySelector(classname).style.animationFillMode = "forwards";
  } else if (!isForwards){
    document.querySelector(classname).style.animationIterationCount = "infinite";
    document.querySelector(classname).style.animationTimingFunction = "linear";
  }
}

const removeAnimation = (classname) => {
  document.querySelector(classname).style.removeProperty('animation-name');
}

const $navHeight = document.getElementsByTagName('nav')[0].clientHeight;
const $clientWidth = document.body.clientWidth;

const aboutTitle = document.querySelector(".about-title");
const motion = document.querySelector('.hand-motion');

const marginWindowHeight = (className, increaseLength, decreaseLength) => {
  let windowHeight = window.innerHeight;
  let marginLength = (((windowHeight / 2) - $navHeight) + increaseLength) - decreaseLength;
  document.querySelector(className).style.marginBlock = `${marginLength}px`;

  window.addEventListener('resize', () => {
    if (windowHeight !== window.innerHeight) {
      windowHeight = window.innerHeight;
      document.querySelector(className).style.marginBlock = `${marginLength}px`;
      location.reload();
    }
  })
}

const appendHandAttrs = () => {
  if (!motion.hasAttribute('dur')) {
    motion.setAttribute('dur', "0.8s");
    motion.setAttribute('keyPoints', "1;0");
    motion.setAttribute('keyTimes', "0;1");
    motion.setAttribute('calcMode', "linear");
    motion.setAttribute('path', "M 0 0 L 10 10");
    motion.beginElement();
  }
}

const removeHandAttrs = () => {
  motion.removeAttribute('dur');
  motion.removeAttribute('keyPoints');
  motion.removeAttribute('keyTimes');
  motion.removeAttribute('calcMode');
  motion.removeAttribute('path');
}

const triggerClickAnimation = () => {
  const device = document.querySelector('.frontEnd-content__tablet-svg');
  const scrollLimit = 357;

  if (device) {
    const absDevice = device.getBoundingClientRect().top - $navHeight;
    if (absDevice < scrollLimit) {
      appendHandAttrs();
      animate('.video-click-hand', "handClick", "0.8s", "1.5s", true);
      animate('.play-button', "buttonClick", "1s", "1s", true);

      fadeIn('.frontEnd-content__first-topic', '1', '2s', '1s', 'translateY(0)');
      animate('.l-tetris-block', 'LBlockDown', '3s', '2s', false);

      fadeIn('.frontEnd-content__second-topic', '1', '2.5s', '1s', 'translateY(0)');

      animate('.grid-svg', 'swapLayout', '4s', '3s', true);
      document.querySelector('.grid-svg').addEventListener('animationstart', () => {
        removeAnimation('.flex-svg');
      });

      document.querySelector('.grid-svg').addEventListener('animationend', () => {
        animate('.flex-svg', 'swapLayout', '0s', '3s', true);
        removeAnimation('.grid-svg');
      });

      document.querySelector('.flex-svg').addEventListener('animationstart', () => {
        removeAnimation('.grid-svg');
      });

      document.querySelector('.flex-svg').addEventListener('animationend', () => {
        animate('.grid-svg', 'swapLayout', '0s', '3s', true);
        removeAnimation('.flex-svg');
      });

      fadeIn('.frontEnd-content__third-topic', '1', '3s', '1s', 'translateY(0)');
      animate('.sass-svg', "beat", "4.5s", "1s", false);

      fadeIn('.frontEnd-content__fourth-topic', '1', '3.5s', '1s', 'translateY(0)');
      animate('.orbit-earth', "rotate", "0s", "40s", false);
      animate('.orbit-sun', "rotate", "0s", "10s", false);
      animate('.orbit-moon', "rotate", "0s", "40s", false);
      animate('.orbit-svg', 'orbitZoomIn', '5s', '10s', false);
      animate('.orbit-sun circle', 'toWhite', '5s', '10s', false);
      animate('.flower-svg', 'flowerScale', '5s', '10s', false);
      
    } else if (absDevice > scrollLimit) {
      removeHandAttrs();
      removeAnimation('.video-click-hand');
      removeAnimation('.play-button');
      removeAnimation('.l-tetris-block');
      removeAnimation('.grid-svg');
      removeAnimation('.flex-svg');
      removeAnimation('.sass-svg');
      removeAnimation('.orbit-svg');
      removeAnimation('.orbit-earth');
      removeAnimation('.orbit-sun');
      removeAnimation('.orbit-moon');
      removeAnimation('.orbit-sun circle');
      removeAnimation('.flower-svg');
      fadeIn('.frontEnd-content__first-topic', '0', '0s', '0s', 'translateY(2rem)');
      fadeIn('.frontEnd-content__second-topic', '0', '0s', '0s', 'translateY(2rem)');
      fadeIn('.frontEnd-content__third-topic', '0', '0s', '0s', 'translateY(2rem)');
      fadeIn('.frontEnd-content__fourth-topic', '0', '0s', '0s', 'translateY(2rem)');
    }
  }
}

const dotTheoryTitleAnimationTrigger = (clientWidth) => {
  
  if (clientWidth > 1024) {
    fadeIn(".dotTheory-banner__first-dot-text", "1", "1.5s", "1s", "translateX(-12.1rem)");
    fadeIn(".dotTheory-banner__theory-text", "1", "1.5s", "1s", `translateX(5.75rem)`);
  } else if (clientWidth <= 1024 && clientWidth > 640) {
    fadeIn(".dotTheory-banner__first-dot-text", "1", "1.5s", "1s", "translateX(-9rem)");
    fadeIn(".dotTheory-banner__theory-text", "1", "1.5s", "1s", `translateX(4.5rem)`);
  } else if (clientWidth <= 640 && clientWidth > 376) {
    fadeIn(".dotTheory-banner__first-dot-text", "1", "1.5s", "1s", "translateX(-5.5rem)");
    fadeIn(".dotTheory-banner__theory-text", "1", "1.5s", "1s", `translateX(3.5rem)`);
  } else if (clientWidth <= 376) {
    fadeIn(".dotTheory-banner__first-dot-text", "1", "1.5s", "1s", "translateX(-4.5rem)");
    fadeIn(".dotTheory-banner__theory-text", "1", "1.5s", "1s", `translateX(2.5rem)`);
  }
}

const dotTheoryTitleAnimationReset = (clientWidth) => {

  if (clientWidth > 1024) {
    fadeIn(".dotTheory-banner__first-dot-text", "0", "0s", "0s", "translateX(-0.9rem)");
    fadeIn(".dotTheory-banner__second-dot-text", "1", "0s", "0s", "translateX(-0.9rem)");
    fadeIn(".dotTheory-banner__theory-text", "0", "0s", "0s", "translateX(0)");
  } else if (clientWidth <= 1024 && clientWidth > 640) {
    fadeIn(".dotTheory-banner__first-dot-text", "0", "0s", "0s", "translateX(-0.7rem)");
    fadeIn(".dotTheory-banner__second-dot-text", "1", "0s", "0s", "translateX(-0.7rem)");
    fadeIn(".dotTheory-banner__theory-text", "0", "0s", "0s", "translateX(0)");
  } else if (clientWidth <= 640 && clientWidth > 376) {
    fadeIn(".dotTheory-banner__first-dot-text", "0", "0s", "0s", "translateX(-0.5rem)");
    fadeIn(".dotTheory-banner__second-dot-text", "1", "0s", "0s", "translateX(-0.5rem)");
    fadeIn(".dotTheory-banner__theory-text", "0", "0s", "0s", "translateX(0)");
  } else if (clientWidth <= 376) {
    fadeIn(".dotTheory-banner__first-dot-text", "0", "0s", "0s", "translateX(-0.35rem)");
    fadeIn(".dotTheory-banner__second-dot-text", "1", "0s", "0s", "translateX(-0.35rem)");
    fadeIn(".dotTheory-banner__theory-text", "0", "0s", "0s", "translateX(0)");
  }
}

const dotTheorySectionAnimations = () => {
  let scrollLimit;

  if ($clientWidth > 1024) {
    scrollLimit = 0;
  } else if ($clientWidth <= 1024 && $clientWidth >= 640) {
    scrollLimit = 128;
  } else if ($clientWidth < 640) {
    scrollLimit = 112;
  }

  if (aboutTitle.getBoundingClientRect().bottom < scrollLimit) {
      
    animate(".dotTheory-banner__circle", "dot-circle-grow", "0s", "1.5s");
          
    fadeIn(".dotTheory-banner__second-dot-text", "0", "0.75s", "0s", "translateX(-0.9rem)");
    
    growSideways(".dotTheory-banner__rectangle", "100%", "1s", "0.5s");

    dotTheoryTitleAnimationTrigger($clientWidth);   

    fadeIn(".dotTheory-banner__subtext", "1", "1.5s", "1s", "translateY(6rem)");

    fadeIn(".dotTheory-content", "1", "1.5s", "1s", "translateY(0rem)");
  } else if (aboutTitle.getBoundingClientRect().bottom > scrollLimit) {
    
    animate(".dotTheory-banner__circle", "dot-circle-shrink", "0s", "0s");
    growSideways(".dotTheory-banner__rectangle", "0", "0s", "0s");

    dotTheoryTitleAnimationReset($clientWidth);

    fadeIn(".dotTheory-banner__subtext", "1", "0s", "0s", "translateY(9rem)");
    
    fadeIn(".dotTheory-content", "0", "0s", "0s", "translateY(2rem)");
  }
}

const frontEndSectionAnimations = () => {
  let scrollLimit;

  if ($clientWidth > 1024) {
    scrollLimit = -557;
  } else if ($clientWidth <= 1024 && $clientWidth >= 640) {
    scrollLimit = -643;
  } else if ($clientWidth < 640) {
    scrollLimit = -557;
  }

  if (aboutTitle.getBoundingClientRect().top < scrollLimit) {

    fadeIn(".frontEnd-banner", "1", "0s", "0.5s", "translateY(-1rem)");

    fadeIn(".frontEnd-banner__title", "1", "0.5s", "1s", "scale(1)");

    if ($clientWidth > 640) {
      swipeIn(".frontEnd-banner__training-subtext", "translateX(-2.7rem)", "0.5s", "1s");
      swipeIn(".frontEnd-banner__track-subtext", "translateX(3.8rem)", "0.5s", "1s");
    } else if ($clientWidth < 640) {
      swipeIn(".frontEnd-banner__training-subtext", "translateX(-2.7rem)", "0.5s", "1s");
      swipeIn(".frontEnd-banner__track-subtext", "translateX(2.3rem)", "0.5s", "1s");
    }

    fadeIn(".frontEnd-content", "1", "0.5s", "1s", "translateY(0)");
  } else if (aboutTitle.getBoundingClientRect().top > scrollLimit) {

    fadeIn(".frontEnd-banner", "0", "0s", "0s", "translateY(0)");

    fadeIn(".frontEnd-banner__title", "0", "0s", "0s", "scale(1.2)");

    swipeIn(".frontEnd-banner__training-subtext", "translateX(-70rem)", "0s", "0s");
    swipeIn(".frontEnd-banner__track-subtext", "translateX(70rem)", "0s", "0s");

    fadeIn(".frontEnd-content", "0", "0s", "0s", "translateY(2rem)");
  }
}

const changeMargin = () => {
  
  if ($clientWidth > 1024) {
    marginWindowHeight(".about-title", 0, 0);
    marginWindowHeight(".dotTheory-banner", 0, 0);
    marginWindowHeight(".frontEnd-banner", 0, 0);
  } else if ($clientWidth <= 1024) {
    marginWindowHeight(".about-title", 0, 100);
    marginWindowHeight(".dotTheory-banner", 0, 100);
    marginWindowHeight(".frontEnd-banner", 0, 100);
  }
}

(function() {
  changeMargin();

  window.addEventListener('scroll', () => {
    triggerClickAnimation();
    dotTheorySectionAnimations();
    frontEndSectionAnimations();
  }, false);
})();

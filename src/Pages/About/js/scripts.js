

const marginWindowHeight = (className, increaseLength, decreaseLength ) => {
  const navHeight = document.getElementsByTagName('nav')[0].clientHeight;
  let windowHeight = window.innerHeight;
  let marginLength = (((windowHeight / 2) - navHeight) + increaseLength) - decreaseLength;
  document.querySelector(className).style.marginBlock = `${marginLength}px`;

  window.addEventListener('resize', () => {
    if (windowHeight !== window.innerHeight) {
      windowHeight = window.innerHeight;
      document.querySelector(className).style.marginBlock = `${marginLength}px`;
      location.reload();
    }
  })
}

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

const motion = document.querySelector('.hand-motion');

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

const removeAnimation = (classname) => {
  document.querySelector(classname).style.removeProperty('animation-name');
}

const triggerClickAnimation = () => {
  const device = document.querySelector('.video-click-svg');
  const navHeight = document.getElementsByTagName('nav')[0].clientHeight;
  const scrollLimit = 357;

  window.addEventListener('scroll', () => {
    if (device) {
      const absDevice = device.getBoundingClientRect().top - navHeight;
      if (absDevice < scrollLimit) {
        appendHandAttrs();
        animate('.video-click-hand', "handClick", "0.8s", "1.5s", true);
        animate('.play-button', "buttonClick", "1s", "1s", true);

        fadeIn('.frontEnd-p1-container', '1', '2s', '1s', 'translateY(0)');
        animate('.l-tetris-block', 'LBlockDown', '3s', '2s', false);

        fadeIn('.frontEnd-p2-container', '1', '2.5s', '1s', 'translateY(0)');

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

        fadeIn('.frontEnd-p3-container', '1', '3s', '1s', 'translateY(0)');
        animate('.sass-svg', "beat", "4.5s", "1s", false);

        fadeIn('.frontEnd-p4-container', '1', '3.5s', '1s', 'translateY(0)'); /* 5.1 */
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
        fadeIn('.frontEnd-p1-container', '0', '0s', '0s', 'translateY(2rem)');
        fadeIn('.frontEnd-p2-container', '0', '0s', '0s', 'translateY(2rem)');
        fadeIn('.frontEnd-p3-container', '0', '0s', '0s', 'translateY(2rem)');
        fadeIn('.frontEnd-p4-container', '0', '0s', '0s', 'translateY(2rem)');
      }
    }
    
  });
}

const dotTheorySectionAnimations = () => {
  const dotTheorySection = document.querySelector(".dotTheory-section");
  const scrollLimit = 579;

  window.addEventListener("scroll", () => {
    if (dotTheorySection) {
      if (dotTheorySection.getBoundingClientRect().top < scrollLimit) {
        marginWindowHeight(".dotTheory-section", 0, 100);
  
        animate(".dot-circle", "dot-circle-grow", "0s", "1.5s");
        growSideways(".dot-rectangle", "100%", "1s", "0.5s");
  
        fadeIn(".dot-text", "1", "1.5s", "1s", "translateX(-12.1rem)");
        fadeIn(".theory-text", "1", "1.5s", "1s", "translateX(5.75rem)");
        fadeIn(".dotTheory-desc", "1", "1.5s", "1s", "translateY(6rem)");
        fadeIn(".dotTheory-content", "1", "1.5s", "1s", "translateY(0rem)");
      } else if (dotTheorySection.getBoundingClientRect().top > scrollLimit) {
        marginWindowHeight(".dotTheory-section", 100, 0);
  
        animate(".dot-circle", "dot-circle-shrink", "0s", "0s");
        growSideways(".dot-rectangle", "0", "0s", "0s");
  
        fadeIn(".dot-text", "1", "0s", "0s", "translateX(-0.9rem)");
        fadeIn(".theory-text", "0", "0s", "0s", "translateX(0)")
        fadeIn(".dotTheory-desc", "1", "0s", "0s", "translateY(9rem)");
        fadeIn(".dotTheory-content", "0", "0s", "0s", "translateY(2rem)");
      }
    }
    
  }, false);
}

const frontEndSectionAnimations = () => {
  const frontEndSection = document.querySelector(".frontEnd-section");
  const scrollLimit = 632;

  window.addEventListener("scroll", () => {
    if (frontEndSection) {
      if (frontEndSection.getBoundingClientRect().top < scrollLimit) {
        marginWindowHeight(".frontEnd-section", 0, 100);
  
        fadeIn(".frontEnd-section", "1", "0s", "0.5s", "translateY(-1rem)");
  
        fadeIn(".frontEnd-text", "1", "0.5s", "1s", "scale(1)");
  
        swipeIn(".training-desc-text", "translateX(-2.7rem)", "0.5s", "1s");
        swipeIn(".track-desc-text", "translateX(3.8rem)", "0.5s", "1s");

        fadeIn(".frontEnd-content", "1", "0.5s", "1s", "translateY(0)");
      } else if (frontEndSection.getBoundingClientRect().top > scrollLimit) {
        marginWindowHeight(".frontEnd-section", 100, 0);

        fadeIn(".frontEnd-section", "0", "0s", "0s", "translateY(0)");

        fadeIn(".frontEnd-text", "0", "0s", "0s", "scale(1.2)");

        swipeIn(".training-desc-text", "translateX(-70rem)", "0s", "0s");
        swipeIn(".track-desc-text", "translateX(70rem)", "0s", "0s");

        fadeIn(".frontEnd-content", "0", "0s", "0s", "translateY(2rem)");
      }
    }
    
  }, false);
}

(function () {
  marginWindowHeight(".about-title", 0, 0);
  triggerClickAnimation();
  dotTheorySectionAnimations();
  frontEndSectionAnimations();
})();

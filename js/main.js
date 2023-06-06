const tl = new gsap.timeline();

const imgFunc = document.querySelectorAll('.img-func');
const func = document.querySelector('.functions');
const headerCaption = document.querySelector('.text-big');
const smallText = document.querySelector('.text-small');
const btn = document.querySelector('.act');
const logo = document.querySelector('.logggo');
const textThree = document.querySelector('.three-block');
const motto = document.querySelector('.motto');
const testimon = document.querySelector('.testimonials');
const commPeople = document.querySelectorAll('.comm-peop');

gsap.registerPlugin(ScrollTrigger);

tl.fromTo(headerCaption,
  {
    x: -250,
    opacity: 0
  },
  {
    x: 0,
    opacity: 1,
    duration: 2,
  }, 1).fromTo(smallText,
    {
      x: 500,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 2,
    }, 2).fromTo(btn,
      {
        y: -250,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      }
    ).fromTo(logo,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      }, 1
    );

gsap.from(imgFunc, {
  scrollTrigger: {
    trigger: func,
    start: '-30% center',
    end: '+=300px',
    opacity: 0,

  },
  scale: 0,
  opacity: 1,
  transformOrigin: 'left center',
  ease: 'none',
  stagger: 1,
})


gsap.from(textThree, {
  scrollTrigger: {
    trigger: motto,
    start: '-15% center',
    end: '+=300px',
    opacity: 0,

  },
  scale: 0,
  opacity: 1,
  transformOrigin: 'left center',
  ease: 'none',
  stagger: 2,
  duration: 2,
})

gsap.from(commPeople, {
  scrollTrigger: {
    trigger: testimon,
    start: '-30% center',
    end: '+=300px',
    opacity: 0,

  },
  scale: 0,
  opacity: 1,
  transformOrigin: 'left center',
  ease: 'none',
  stagger: 2,
  duration: 2,
})
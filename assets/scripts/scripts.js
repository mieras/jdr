

$('.js-anchor-link').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
});

$('.owl-carousel').owlCarousel({
  items:1,
  nav:true,
  merge:true,
  loop:true,
  video:true,
  margin:0,
  lazyLoad:true,
  center:false,
  dots:false,
  animateOut: 'fadeOut',
  
})


var logoZoom = {
  distance: '10%',
  origin: 'bottom',
  opacity: 0,
  delay: 500,
  scale: 1.25,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',

};

var slideUp = {
  distance: '10%',
  origin: 'bottom',
  opacity: 0,
  delay: 300,
  reset: true
};

var navDown = {
  distance: '80%',
  origin: 'top',
  opacity: 0,
  delay: 800,
  reset: false
};


ScrollReveal().reveal('.logo', { delay: 300 });
ScrollReveal().reveal('.animation', logoZoom);

ScrollReveal().reveal('.intro', slideUp);
ScrollReveal().reveal('.project', slideUp);

ScrollReveal().reveal('.nav', navDown);

// Google Analytics
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-2966635-71', { 'anonymize_ip': true });
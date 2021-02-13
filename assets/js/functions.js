/*===============================================
*
* Template name : Arty
* Version       : 2.2.2
* Author        : FlaTheme
* Author URL    : http://themeforest.net/user/flatheme
*
* Table of Contents :
* 1.  Page Preloaders
* 2.  Scroll Animations
* 3.  SmoothScroll
* 4.  Scroll to Top
* 5.  Header Menu
* 6.  Fullscreen Menu
* 7.  Sidebar Menu
* 8.  Sidebar Toggle Menu
* 9.  Parallax
* 10. Background Image
* 11. Slider
* 12. Portfolio Masonry
* 13. Portfolio Metro
* 14. Portfolio Grid
* 15. Justified Gallery
* 16. Masonry
* 17. Lightbox
* 18. Accordion
* 19. Counter
* 20. Countdown
* 21. Google Maps
* 22. Contact Form
* 23. Shop
*
===============================================*/
"use strict";

var htmlBody = $("html,body");
var body = $("body");
var windowWidth = $(window).width();

/*===============================================
  1. Page Preloaders
===============================================*/
$(window).on("load", function () {
  body.addClass("loaded");
});

if (body.attr("data-preloader") === "1") {
  body.append($("<div class='preloader preloader-1'><div><svg class='loader-circular' viewBox='25 25 50 50'><circle class='loader-path' cx='50' cy='50' r='20'/></svg></div></div>"));
}
else if (body.attr("data-preloader") === "2") {
  body.append($("<div class='preloader preloader-2'><div><span></span></div></div>"));
}
else if (body.attr("data-preloader") === "3") {
  body.append($("<div class='preloader preloader-3'><div><span></span></div></div>"));
}
else if (body.attr("data-preloader") === "4") {
  body.append($("<div class='preloader preloader-4'><div><span></span></div></div>"));
}


/*===============================================
  2. Scroll Animations
===============================================*/
sal({
  duration: 500
});


/*===============================================
  3. SmoothScroll
===============================================*/
$('a[href*="#"]').not('[href="#"]').not('[data-toggle="tab"]').on("click", function(e) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      htmlBody.animate({scrollTop: target.offset().top}, 450, "easeInOutQuart");
      e.preventDefault();
    }
  }
});


/*===============================================
  4. Scroll to Top
===============================================*/
var scrollTopBtn = $(".scrolltotop");

if (scrollTopBtn.length) {
  //
  // Show/Hide button //
  //
  $(window).on("scroll", function(){
    if ($(this).scrollTop() > 700) { // 700px from top
      scrollTopBtn.addClass("scrolltotop-show");
    }
    else {
      scrollTopBtn.removeClass("scrolltotop-show");
    }
  });

  //
  // Animate button //
  //
  scrollTopBtn.on("click", function(e) {
    htmlBody.animate({scrollTop : 0}, 450, "easeInOutQuart");
    e.preventDefault();
  });
}


/*===============================================
  5. Header Menu
===============================================*/
//
// Fixed //
//
var c, currentScrollTop = 0, header = $(".header.fixed");

$(window).on("scroll", function () {
  var a = $(window).scrollTop();
  currentScrollTop = a;

  if (c < currentScrollTop && a > 210) {
    header.addClass("hide");
  } else if (c > currentScrollTop && !(a <= 210)) {
    header.removeClass("hide");
  }

  c = currentScrollTop;
});

//
// Sticky //
//
if ($(".header.sticky").length) {
  $("<div class='header-placeholder'></div>").insertBefore(".header.sticky");
}

//
// Absolute //
//
if ($(".absolute-light").length) {
  $(window).on("scroll", function() {
    var headerFixed = $(".header.fixed");
    if ($(window).scrollTop() > 10) {
      headerFixed.removeClass("absolute-light");
    }
    else {
      headerFixed.addClass("absolute-light");
    }
  });
}
if ($(".absolute-dark").length) {
  $(window).on("scroll", function() {
    var headerFixed = $(".header.fixed");
    if ($(window).scrollTop() > 10) {
      headerFixed.removeClass("absolute-dark");
    }
    else {
      headerFixed.addClass("absolute-dark");
    }
  });
}

//
// Open/Close Header Menu //
//
var wrapper = $(".wrapper");
var headerMenu = $(".header-menu-wrapper");
var mToggle = $(".m-toggle");
var closeBtn = $(".close-button");

mToggle.on("click", function() {
  if (headerMenu.hasClass("show")) {
    headerMenu.removeClass("show");
    wrapper.removeClass("overlay");
  }
  else {
    headerMenu.addClass("show");
    wrapper.addClass("overlay");
  }
});

closeBtn.on("click", function() {
  if (headerMenu.hasClass("show")) {
    headerMenu.removeClass("show");
    wrapper.removeClass("overlay");
  }
});
$(document).on("click", function(e) {
  if ( $(e.target).closest(".header-menu-wrapper, .m-toggle").length === 0 ) {
    if (headerMenu.hasClass("show")) {
      headerMenu.removeClass("show");
      wrapper.removeClass("overlay");
    }
  }
});

//
// Move Header Menu on mobile //
//
checkSize();
$(window).resize(checkSize);
function checkSize(){
  if (headerMenu.css("position") == "fixed" ) {
    headerMenu.prependTo("body");
  }
  else {
    $(".header>.container, .header>.container-fluid").append(headerMenu);
  }
}

//
// Dropdown Menu //
//
$(".m-link").each(function() {
  var $this = $(this);
  if ($this.parent(".m-item").children(".m-dropdown").length) {
    $this.addClass("m-dropdown-toggle");
    var dropdownMenu = $this.parent(".m-item").children(".m-dropdown");

    $this.on("click", function(e) {
      if ($this.hasClass("active")) {
        $this.removeClass("active");
        dropdownMenu.removeClass("show");
      }
      else {
        $this.addClass("active");
        dropdownMenu.addClass("show");
      }
      e.preventDefault();
    });
  }
});

//
// Sub Dropdown Menu //
//
$(".m-dropdown-link").each(function() {
  var $this = $(this);

  if ($this.parent(".m-dropdown-item").children(".m-subdropdown").length) {
    $this.addClass("m-subdropdown-toggle");
    var subDropdownMenu = $this.parent(".m-dropdown-item").children(".m-subdropdown");

    $this.on("click", function(e) {
      if ($this.hasClass("active")) {
        $this.removeClass("active");
        subDropdownMenu.removeClass("show");
      }
      else {
        $this.addClass("active");
        subDropdownMenu.addClass("show");
      }
      e.preventDefault();
    });
  }
});

//
// Mega Menu //
//
var $megamenu = $(".megamenu");

if ($megamenu.length) {
  $megamenu.each(function() {
    var $this = $(this);
    var megamenu = $this.parent(".m-item").children(".megamenu");
    var megamenuLink = $this.parent(".m-item").children(".m-link");

    $this.parent(".m-item").addClass("m-megamenu");
    $this.parent(".m-item").children(".m-link").addClass("m-dropdown-toggle");

    megamenuLink.on("click", function(e) {
      if (megamenuLink.hasClass("active")) {
        megamenuLink.removeClass("active");
        megamenu.removeClass("show");
      }
      else {
        megamenuLink.addClass("active");
        megamenu.addClass("show");
      }
      e.preventDefault();
    });
  });
}


/*===============================================
  6. Fullscreen Menu
===============================================*/
var fmToggle = $(".fm-toggle");
var fmClose = $(".fm-close");
var fmWrapper = $(".fm-wrapper");

fmToggle.on("click", function() {
  fmWrapper.addClass("fm-show");
});

fmClose.on("click", function() {
  fmWrapper.removeClass("fm-show");
});


/*===============================================
  7. Sidebar Menu
===============================================*/
var smToggle = $(".sm-toggle");
var smClose = $(".sm-close");
var smWrapper = $(".sm-wrapper");
var smMobile = $(".sm-mobile");

if ($(".sm-wrapper.sm-left").length) {
  body.addClass("sm-spacer-left");
}
if ($(".sm-wrapper.sm-right").length) {
  body.addClass("sm-spacer-right");
}

if ($(".sm-wrapper.dark").length) {
  smMobile.addClass("dark");
}
if ($(".sm-wrapper.black").length) {
  smMobile.addClass("black");
}

smToggle.on("click", function() {
  smWrapper.addClass("sm-show");
  wrapper.addClass("overlay");
  smMobile.addClass("overlay");
});

smClose.on("click", function() {
  smWrapper.removeClass("sm-show");
  wrapper.removeClass("overlay");
  smMobile.removeClass("overlay");
});

//
// Dropdown Menu //
//
$(".sm-link").each(function() {
  var $this = $(this);
  if ($this.parent(".sm-item").children(".sm-dropdown").length) {
    $this.addClass("sm-dropdown-toggle");
    var dropdownMenu = $this.parent(".sm-item").children(".sm-dropdown");

    $this.on("click", function(e) {
      if ($this.hasClass("active")) {
        $this.removeClass("active");
        dropdownMenu.removeClass("show");
      }
      else {
        $this.addClass("active");
        dropdownMenu.addClass("show");
      }
      e.preventDefault();
    });
  }
});

//
// Sub Dropdown Menu //
//
$(".sm-dropdown-link").each(function() {
  var $this = $(this);

  if ($this.parent(".sm-dropdown-item").children(".sm-subdropdown").length) {
    $this.addClass("sm-subdropdown-toggle");
    var subDropdownMenu = $this.parent(".sm-dropdown-item").children(".sm-subdropdown");

    $this.on("click", function(e) {
      if ($this.hasClass("active")) {
        $this.removeClass("active");
        subDropdownMenu.removeClass("show");
      }
      else {
        $this.addClass("active");
        subDropdownMenu.addClass("show");
      }
      e.preventDefault();
    });
  }
});


/*===============================================
  8. Sidebar Toggle Menu
===============================================*/
var stmToggle = $(".stm-toggle");
var stmToggleWrapper = $(".stm-toggle-wrapper");
var stmClose = $(".stm-close");
var stmWrapper = $(".stm-wrapper");
var stmLeft = $(".stm-left");
var stmRight = $(".stm-right");

if (stmLeft.length) {
  body.addClass("stm-spacer-left");
  stmToggleWrapper.addClass("stm-toggle-left");
}
if (stmRight.length) {
  body.addClass("stm-spacer-right");
  stmToggleWrapper.addClass("stm-toggle-right");
}

if ($(".stm-toggle-wrapper.dark").length) {
  stmWrapper.addClass("dark");
}
if ($(".stm-toggle-wrapper.black").length) {
  stmWrapper.addClass("black");
}

stmToggle.on("click", function() {
  if (stmWrapper.hasClass("stm-show")) {
    stmWrapper.removeClass("stm-show");
    wrapper.removeClass("overlay");
    stmToggle.removeClass("stm-toggle-active");
    stmToggleWrapper.removeClass("overlay");
  }
  else {
    stmWrapper.addClass("stm-show");
    wrapper.addClass("overlay");
    stmToggle.addClass("stm-toggle-active");
    stmToggleWrapper.addClass("overlay");
  }
});

stmClose.on("click", function() {
  stmWrapper.removeClass("stm-show");
  wrapper.removeClass("overlay");
  stmToggle.removeClass("stm-toggle-active");
  stmToggleWrapper.removeClass("overlay");
});

//
// Dropdown Menu //
//
$(".stm-link").each(function() {
  var $this = $(this);
  if ($this.parent(".stm-item").children(".stm-dropdown").length) {
    $this.addClass("stm-dropdown-toggle");
    var dropdownMenu = $this.parent(".stm-item").children(".stm-dropdown");

    $this.on("click", function(e) {
      if ($this.hasClass("active")) {
        $this.removeClass("active");
        dropdownMenu.removeClass("show");
      }
      else {
        $this.addClass("active");
        dropdownMenu.addClass("show");
      }
      e.preventDefault();
    });
  }
});

//
// Sub Dropdown Menu //
//
$(".stm-dropdown-link").each(function() {
  var $this = $(this);

  if ($this.parent(".stm-dropdown-item").children(".stm-subdropdown").length) {
    $this.addClass("stm-subdropdown-toggle");
    var subDropdownMenu = $this.parent(".stm-dropdown-item").children(".stm-subdropdown");

    $this.on("click", function(e) {
      if ($this.hasClass("active")) {
        $this.removeClass("active");
        subDropdownMenu.removeClass("show");
      }
      else {
        $this.addClass("active");
        subDropdownMenu.addClass("show");
      }
      e.preventDefault();
    });
  }
});


/*===============================================
  9. Parallax Background
===============================================*/
if (windowWidth > 1200) {
  var parallaxBg = $(".parallax-bg");

  if (parallaxBg.length) {
    parallaxBg.each(function() {
      $(this).parallaxie({
        speed: 0.2
      });
    });
  }
}


/*===============================================
  10. Background Image
===============================================*/
$(".bg-image").each(function() {
  var bgData = $(this).attr("data-bg-src");
  $(this).css('background-image', 'url("' + bgData + '")');
});


/*===============================================
  11. Slider
===============================================*/
$(".owl-carousel").each(function() {
  var $carousel = $(this);

  var $defaults = {
    rewind: true,
    navText: ["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
    autoHeight: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 400,
    autoplayHoverPause: true,
    navSpeed: 350,
    dotsSpeed: 350,
    dragEndSpeed: 350
  }
  var $options = {
    items: $carousel.data("owl-items"),
    margin: $carousel.data("owl-margin"),
    loop: $carousel.data("owl-loop"),
    center: $carousel.data("owl-center"),
    nav: $carousel.data("owl-nav"),
    rewind: $carousel.data("owl-rewind"),
    dots: $carousel.data("owl-dots"),
    autoplay: $carousel.data("owl-autoplay")
  }
  var $responsive = {
    responsive: {
      0 : {
        items: $carousel.data("owl-xs")
      },
      576 : {
        items: $carousel.data("owl-sm")
      },
      768 : {
        items: $carousel.data("owl-md")
      },
      992 : {
        items: $carousel.data("owl-lg")
      },
      1200 : {
        items: $carousel.data("owl-xl")
      }
    }
  }

  if ($carousel.hasClass("portfolio-carousel")) {
    var $portfolioCarousel = {
      items: 2,
      center: true
    }
  }

  if ($carousel.hasClass("product-carousel")) {
    var $productCarousel = {
      items:1,
      animateOut: 'fadeOut',
      URLhashListener:true,
      startPosition: 'URLHash'
    }
  }

  $carousel.owlCarousel( $.extend( $defaults, $options, $responsive, $portfolioCarousel, $productCarousel) );

  var customPrev = $("#customPrev");
  var customNext = $("#customNext");

  customNext.on("click", function(){
    $carousel.trigger("next.owl.carousel", [400]);
  });
  customPrev.on("click", function(){
    $carousel.trigger("prev.owl.carousel", [400]);
  });

});


/*===============================================
  12. Portfolio Masonry
===============================================*/
var portfolioMasonry = $(".portfolio-masonry");

if (portfolioMasonry.length) {
  portfolioMasonry.imagesLoaded(function() {
    var $portfolioWrapper = $(".portfolio-masonry").isotope({
      itemSelector: ".portfolio-item",
      transitionDuration: 300 // 0.3 second
    });

    var filter = $(".portfolio-filter li, .portfolio-side-filter li");

    // Portfolio Filter //
    filter.on("click", function() {
      var filterValue = $(this).attr("data-filter");
      $portfolioWrapper.isotope({ filter: filterValue });

      filter.removeClass("active");
      $(this).addClass("active");
    });
  });
}


/*===============================================
  13. Portfolio Metro
===============================================*/
var portfolioMetro = $(".portfolio-metro");

if (portfolioMetro.length) {
  portfolioMetro.imagesLoaded(function() {
    portfolioMetro.packery({
      itemSelector: '.portfolio-item'
    });
  });
}


/*===============================================
  14. Portfolio Grid
===============================================*/
var portfolioGrid = $(".portfolio-grid");

if (portfolioGrid.length) {
  var mixer = mixitup('.portfolio-grid', {
    selectors: {
        target: '.portfolio-item'
    },
    animation: {
        duration: 300
    }
  });
}


/*===============================================
  15. Justified Gallery
===============================================*/
var justifiedGallery = $(".justified-gallery");

if (justifiedGallery.length) {
  justifiedGallery.justifiedGallery({
    rowHeight: 340,
    margins: 10
  });
  justifiedGallery.each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      removalDelay: '200',
      type: 'image',
      fixedContentPos: false,
      gallery: {
          enabled: true
      },
      image: {
        titleSrc: 'data-gallery-title'
      }
    });
  });
}


/*===============================================
  16. Masonry
===============================================*/
var $masonryGrid = $(".masonry").imagesLoaded( function() {
  $masonryGrid.masonry({
    itemSelector: '.masonry-item',
    columnWidth: '.masonry-item',
    gutter: 0
  });
});


/*===============================================
  17. Lightbox
===============================================*/
//
// Lightbox - Image //
//
$(".lightbox-image-link, .lightbox-image-box").each(function () {
  $(this).magnificPopup({
    type: 'image',
    fixedContentPos: false,
    removalDelay: 200,
    closeOnContentClick: true,
    image: {
      titleSrc: 'data-image-title'
    }
  });
});

//
// Lightbox - Media //
//
$(".lightbox-media-link, .lightbox-media-box").each(function() {
  var lightboxMedia = $(this);

  lightboxMedia.magnificPopup({
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0'
        },
          vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
      },
      srcAction: "iframe_src"
    }
  });
});

//
// Lightbox - Gallery //
//
var $gallery = $(".gallery");

if ($gallery.length) {
  $gallery.each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      removalDelay: '200',
      type: 'image',
      fixedContentPos: false,
      gallery: {
          enabled: true
      },
      image: {
        titleSrc: 'data-gallery-title'
      }
    });
  });
}


/*===============================================
  18. Accordion
===============================================*/
$(".accordion-title").each(function() {

  var $this = $(this);

  $this.on("click", function() {
    var accordionList = $this.parent("li");
    var accordionContent = this.nextElementSibling;

    if (accordionList.hasClass("active")) {
      accordionList.removeClass("active");
      accordionContent.style.maxHeight = null;
    }
    else {
      accordionList.addClass("active");
      if ($this.closest(".accordion").hasClass("single-open")) {
        $this.closest(".accordion").children("li").removeClass("active");
        accordionList.addClass("active");
        $this.parents(".single-open").find(".accordion-content").css("max-height", "0");
      }
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });

  //
  // Give max-height to Accordion's active content //
  //
  if ($this.parents(".accordion").find("li").hasClass("active")) {
    var accordionActiveContent = $this.parents(".accordion").find("li.active").children(".accordion-content");
    var accordionHeight = accordionActiveContent.prop("scrollHeight");

    accordionActiveContent.css({'max-height': accordionHeight + "px"});
  }

});


/*===============================================
  19. Counter
===============================================*/
var counter = $(".counter");

if (counter.length) {
  counter.appear(function() {
    $(this).each(function () {
      $(this).prop("Counter",0).animate({
          Counter: $(this).text()
      }, {
          duration: 3000,
          easing: "swing",
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });

  },{accX: 0, accY: -10});
}


/*===============================================
  20. Countdown
===============================================*/
var countdown = $(".countdown");

if (countdown.length) {
  countdown.each(function() {
    var finalDate = $(this).attr('data-countdown');

    $(this).countdown(finalDate, function(event) {
      $(this).html(event.strftime('%D days %H:%M:%S'));
    });
  });
}


/*===============================================
  21. Google Maps
===============================================*/
var mapCanvas = $(".gmap");
var m,divId,initLatitude, initLongitude, map;

if (mapCanvas.length) {
  for (var i = 0; i < mapCanvas.length; i++) {
    m = mapCanvas[i];

    initLatitude = m.dataset["latitude"];
    initLongitude = m.dataset["longitude"];
    divId = "#"+ m["id"];

    map = new GMaps({
      el: divId,
      lat: initLatitude,
      lng: initLongitude,
      zoom: 16,
      scrollwheel: false,
      styles: [
          /* style your map at https://snazzymaps.com/editor and paste JSON here */
      ]
    });

    map.addMarker({
      lat : initLatitude,
      lng : initLongitude
    });
  }
}


/*===============================================
  22. Contact Form
===============================================*/
$("#contactform").on("submit", function(e) {
  var name = $("#name").val();
  var email = $("#email").val();
  var subject = $("#subject").val();
  var message = $("#message").val();

  if (name === "") {
    $("#name").addClass("error-color");
  }
  if (email === "") {
    $("#email").addClass("error-color");
  }
  if (subject === "") {
    $("#subject").addClass("error-color");
  }
  if (message === "") {
    $("#message").addClass("error-color");
  }

  else {
    $.ajax({
      url:"../../assets/php/contact-form.php",
      data:$(this).serialize(),
      type:"POST",
      success:function(data){
        $("#success").addClass("show-result"); // Show Success Message
        $("#contactform").each(function(){
          this.reset();
        });
      },
      error:function(data){
        $("#error").addClass("show-result"); // Show Error Message
      }
    });
    var forms = $("#contactform input, #contactform textarea");
    forms.removeClass("error-color");
  }

  e.preventDefault();
});


/*===============================================
  23. Shop
===============================================*/
$(".product-quantity .qnt").append('<a class="dec qnt-button" href="#">-</a><a class="inc qnt-button" href="#">+</a>');

$(".qnt-button").on("click", function(e) {

  var $button = $(this);
  var oldValue = $button.parent().find("input").val();

  if ($button.text() == "+") {
    var newVal = parseFloat(oldValue) + 1;
  } else {
   // Don't allow decrementing below zero
    if (oldValue > 1) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 1;
    }
  }

  $button.parent().find("input").val(newVal);

  e.preventDefault();

});

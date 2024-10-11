$(".submenu").hide();
$(".menu>li").mouseover(function(){
  $(this).children(".submenu").stop().show();
  $(".header").addClass("hover");
})
$(".menu>li").mouseout(function(){
  $(this).children(".submenu").stop().hide();
  $(".header").removeClass("hover");
})


$(".m_submenu").hide();
$(".m_menu>li").click(function(){
  $(this).children(".m_submenu").slideToggle(200);
  $(this).siblings().children(".m_submenu").slideUp(100);
  $(this).toggleClass("m_active");
  $(this).siblings().removeClass("m_active");
})


$(".m_nav").hide();
$(".m_btn").click(function(){
  $(".m_nav").fadeIn();
  $(".m_nav_wrap").addClass("m_nav_active");
})
$(".m_close").click(function(){
  $(".m_nav").fadeOut();
  $(".m_nav_wrap").removeClass("m_nav_active");
})


// con1box2 슬라이드
const slider1 = new Swiper(".con1box2 .swiper", {
  loop: true,
  pagination: {
    el: ".con1box2 .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".next_btn",
    prevEl: ".prev_btn",
  },
})


// site 슬라이드
const slider2 = new Swiper(".site .swiper", {
  loop: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".site_next",
    prevEl: ".site_prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})

$(".site_play").hide();
$(".site_pause").click(function(){
  $(this).hide();
  $(this).siblings().show();
  /* 위에서 선언한 slider2  사용 */
  slider2.autoplay.stop();
})
$(".site_play").click(function(){
  $(this).hide();
  $(this).siblings().show();
  slider2.autoplay.start();
})
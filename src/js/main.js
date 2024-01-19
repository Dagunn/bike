

$(document).ready(function () {

  let isPlaying = false;


  $('#playPauseButton').click(function () {
    let video = $('#myVideo')[0];

    if (isPlaying) {

      video.pause();
    } else {

      video.play();
    }


    isPlaying = !isPlaying;
  });

  $(window).scroll(function () {
    let scrollPosition = $(window).scrollTop();
    let header = $('.header__top-menu');
    let logo = $('.logo-img');
    let menuLink = $('.menu__link');
    let burgerIcon = $('.burger-menu__icon');

    if (scrollPosition > 2050) {
      header.addClass('header-fixed');
      logo.attr('src', 'img/icons/logo.svg');
      menuLink.addClass('red-bg');
      burgerIcon.attr('src', 'img/icons/burger.svg')
    } else if (scrollPosition > 450) {
      header.addClass('header-fixed');
      logo.attr('src', 'img/icons/logo-light.svg');
      menuLink.removeClass('red-bg').addClass('menu-white');
      burgerIcon.attr('src', 'img/icons/burger-white.svg')
    } else {
      header.removeClass('header-fixed');
      logo.attr('src', 'img/icons/logo.svg');
      menuLink.removeClass('menu-white');
      burgerIcon.attr('src', 'img/icons/burger.svg')
    }
  });

  $('#registrationForm').submit(function (e) {
    let nameValue = $('#name').val();
    let phoneValue = $('#phone').val();
    let policyChecked = $('#policy').is(':checked');

    $('.register__error').hide();

    if (nameValue === "") {
      $('#nameError').show();
      $('#name').addClass('invalid-input').removeClass('valid-input');
    } else {
      $('#name').addClass('valid-input').removeClass('invalid-input');
    }


    if (phoneValue === "") {
      $('#phoneError').show();
      $('#phone').addClass('invalid-input').removeClass('valid-input');
    } else {
      $('#phone').addClass('valid-input').removeClass('invalid-input');
    }

    if (!policyChecked) {
      $('#policyError').show();
      e.preventDefault();
    }

    if (nameValue !== "" && phoneValue !== "" && policyChecked) {
      $('#success-message').show();
      e.preventDefault();
    }
  });

  $("#phone").mask("+7 999 999-99-99");

  $(".menu__link").on("click", function (event) {
    event.preventDefault();

    let target = $(this).attr("href");
    let offset = $(target).offset().top;

    $("html, body").animate({
      scrollTop: offset
    }, 800);
  });



  $(window).scroll(function () {
    let scrollPosition = $(window).scrollTop();
    if (scrollPosition > 850) {

      $('.video__img').css('transform', 'translateY(-100%)');
    } else {

      $('.video__img').css('transform', 'translateY(0)');
    }
  });

  $(window).scroll(function () {

    let scrollPosition = $(window).scrollTop();


    if (scrollPosition > 1550) {

      $('.bike__img').css('transform', 'translateY(-100%)');
    } else {

      $('.bike__img').css('transform', 'translateY(0)');
    }
  });



});









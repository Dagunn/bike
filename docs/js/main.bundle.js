$(document).ready((function(){let e=!1;$("#playPauseButton").click((function(){let s=$("#myVideo")[0];e?s.pause():s.play(),e=!e})),$(window).scroll((function(){let e=$(window).scrollTop(),s=$(".header__top-menu"),o=$(".logo-img"),i=$(".menu__link"),a=$(".icon-burger");e>2098?(s.addClass("header-fixed"),o.attr("src","img/icons/logo.svg"),i.addClass("red-bg"),a.removeClass("icon-burger--white")):e>450?(s.addClass("header-fixed"),o.attr("src","img/icons/logo-light.svg"),i.removeClass("red-bg").addClass("menu-white"),a.addClass("icon-burger--white")):(s.removeClass("header-fixed"),o.attr("src","img/icons/logo.svg"),i.removeClass("menu-white"),a.removeClass("icon-burger--white"))})),$("#registrationForm").submit((function(e){let s=$("#name").val(),o=$("#phone").val(),i=$("#policy").is(":checked");$(".register__error").hide(),""===s?($("#nameError").show(),$("#name").addClass("invalid-input").removeClass("valid-input")):$("#name").addClass("valid-input").removeClass("invalid-input"),""===o?($("#phoneError").show(),$("#phone").addClass("invalid-input").removeClass("valid-input")):$("#phone").addClass("valid-input").removeClass("invalid-input"),i||($("#policyError").show(),e.preventDefault()),""!==s&&""!==o&&i&&($("#success-message").show(),e.preventDefault())})),$("#phone").mask("+7 999 999-99-99"),$(".menu__link").on("click",(function(e){e.preventDefault();let s=$(this).attr("href"),o=$(s).offset().top;$("html, body").animate({scrollTop:o},800)})),$(window).scroll((function(){$(window).scrollTop()>850?$(".video__img").css("transform","translateY(-100%)"):$(".video__img").css("transform","translateY(0)")})),$(window).scroll((function(){$(window).scrollTop()>1550?$(".bike__img").css("transform","translateY(-100%)"):$(".bike__img").css("transform","translateY(0)")}))}));
/*
$(document).ready(function(){
    var nav = $('.spb nav');
    var welcome = $('.spb .spb-welcome');

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > nav.height()) {
                nav.fadeIn();
            } else {
                nav.fadeOut();
            }
        });
    });

});
*/

$('.spb-welcome button').click(function () {
  $([document.documentElement, document.body]).animate({
     scrollTop: $(".spb-mail").offset().top
 }, 1000);
});

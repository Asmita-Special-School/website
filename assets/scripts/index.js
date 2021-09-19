$(".navbar").hide();
$(window).scroll(function () {
    var scroll_amount = $(window).scrollTop();
    if (scroll_amount > 50) {
        $(".navbar").fadeIn();
    }
    if (scroll_amount < 50) {
        $(".navbar").fadeOut();
    }
});

$('.navbar-nav>li.nodropdown>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$('.dropdown-item').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});
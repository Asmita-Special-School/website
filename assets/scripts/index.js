$(".navbar").hide();
$("#go_to_top").hide();
$(window).scroll(function () {
    var scroll_amount = $(window).scrollTop();
    if (scroll_amount > 50) {
        $(".navbar").fadeIn();
        $("#go_to_top").fadeIn();
    }
    if (scroll_amount < 50) {
        $(".navbar").fadeOut();
        $("#go_to_top").fadeOut();
    }
});

$('.navbar-nav>li.nodropdown>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$('.dropdown-item').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});
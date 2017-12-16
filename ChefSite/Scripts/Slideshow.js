$(function () {
    $('.slides .slide:gt(0)').hide();
    setInterval(function () {
        $('.slides :first-child')
            .fadeOut(1000)
            .next('.slide')
            .fadeIn(1000)
            .end()
            .appendTo('.slides');
    }, 5000);
});
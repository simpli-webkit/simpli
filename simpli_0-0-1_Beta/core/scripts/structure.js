$(window).resize(function() {
    //var windW = $(window).width();
    var windH = $(window).height();
    var coverH = windH - 80;

    $('.cover').css({height: coverH});
});

function formatter() {
    var windW = $(window).width();
    var windH = $(window).height();
    var coverH = windH - 80;

    $('.cover').css({height: coverH});
}

formatter();
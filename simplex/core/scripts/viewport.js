/*
AUTHOR: ALEX COLLYER (alex.collyer@getsimpli.co.uk)

(if you thought that the navbar file was a mess... don't even bothing looking at this one at this stage)
*/

$(document).ready(function () {

    function runner() {
        var curWidth = $(window).width();
        if (curWidth < 721) {
            var wH = $(window).height() - 85;
            var wW = $(window).width();

            $('.container-sidebar').css({height: wH});
            $('.container-sidebar').css({width: wW});
            $('.container').css({height: wH});
            $('.container').css({width: wW});
            $('.navbar-mobile').css({width: wW});
            $('.navbar-mobile-light').css({width: wW});
            $('.navbar-mobile-dark').css({width: wW});
            $('.fixed-sidebar').css("margin-left", "0px");
            
        } else {
            var wH = $(window).height() - 85;
            var wW = $(window).width();

            $('.container').css({height: wH});
            $('.container').css({width: wW});

            var wH = $(window).height() - 85;
            var wW = $(window).width() - 300;

            $('.container-sidebar').css({height: wH});
            $('.container-sidebar').css({width: wW});
            $('.fixed-sidebar').css("margin-left", "300px");
        }
    }

    $(window).resize(function runner() {
        var curWidth = $(window).width();
        if (curWidth < 721) {
            var wH = $(window).height() - 85;
            var wW = $(window).width();

            $('.container-sidebar').css({height: wH});
            $('.container-sidebar').css({width: wW});
            $('.navbar-mobile').css({width: wW});
            $('.navbar-mobile-light').css({width: wW});
            $('.navbar-mobile-dark').css({width: wW});
            $('.container').css({width: wW});

            $('.navbar-side-fixed').css("padding-top", "120px");
            $('.fixed-sidebar').css("padding-top", "0px");
            $('.fixed-sidebar').css("margin-left", "0px");

        } else {
            var wH = $(window).height() - 85;
            var wW = $(window).width();

            $('.container').css({height: wH});
            $('.container').css({width: wW});

            var wH = $(window).height() - 85;
            var wW = $(window).width() - 300;

            $('.container-sidebar').css({height: wH});
            $('.container-sidebar').css({width: wW});
            $('.fixed-sidebar').css("margin-left", "300px");

        }
    });
    runner();
});

function runner2() {
    var curWidth = $(window).width();
    if (curWidth < 721) {
        function windowContainer_mobile() {
            var wH = $(window).height() - 85;
            var wW = $(window).width();

            $('.container').css({height: wH});
            $('.container').css({width: wW});
            $('.navbar-mobile').css({width: wW});
            $('.navbar-mobile-light').css({width: wW});
            $('.navbar-mobile-dark').css({width: wW});
            $('.fixed-sidebar').css("margin-left", "0px");

        }

        $(window).resize(function windowContainer_mobile() {
            var wH = $(window).height() - 85;
            var wW = $(window).width();

            $('.container').css({height: wH});
            $('.container').css({width: wW});
            $('.navbar-mobile').css({width: wW});
            $('.navbar-mobile-light').css({width: wW});
            $('.navbar-mobile-dark').css({width: wW});
            $('.fixed-sidebar').css("margin-left", "0px");
        });

        windowContainer_mobile();
    } else {
        function windowH_container() {
            var wH = $(window).height() - 85;
            var wW = $(window).width();

            $('.container').css({height: wH});
            $('.container').css({width: wW});
            
        }

        $(window).resize(function windowH_container() {
            var wH = $(window).height() - 85;
            var wW = $(window).width();

            $('.container').css({height: wH});
            $('.container').css({width: wW});

        });

        function windowH_sidebar() {
            var wH = $(window).height() - 85;
            var wW = $(window).width() - 300;

            $('.container-sidebar').css({height: wH});
            $('.container-sidebar').css({width: wW});

        }

        $(window).resize(function windowH_sidebar() {
            var wH = $(window).height() - 85;
            var wW = $(window).width() - 300;

            $('.container-sidebar').css({height: wH});
            $('.container-sidebar').css({width: wW});
        });

        windowH_sidebar();
        windowH_container();
    }
};

runner2();
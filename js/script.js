

$(document).ready(function () {
    var owl = $("#owl-demo");
    owl.owlCarousel({
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        slideSpeed: 500,
        paginationSpeed: 800,
        itemsDesktop: true,
        autoHeight: false,
        items: 1,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        itemsDesktop: [1000, 1],
        transitionStyle: "fade"
    });

    $(".next").click(function () {
        owl.trigger('owl.next');
    })
    $(".prev").click(function () {
        owl.trigger('owl.prev');
    })

});




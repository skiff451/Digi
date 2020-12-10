

$(document).ready(function () {
    var owl = $("#owl-demo");
    owl.owlCarousel({

        // navigation: false, // Show next and prev buttons
        // slideSpeed: 300,
        // paginationSpeed: 400,
        // // singleItem: true,
        // responsive:	true,
        // items : 1, 
        // itemsDesktop : true,

        items: 1,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,


    });

    $(".next").click(function () {
        owl.trigger('owl.next');
    })
    $(".prev").click(function () {
        owl.trigger('owl.prev');
    })

});




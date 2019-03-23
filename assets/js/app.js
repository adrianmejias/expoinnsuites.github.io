$(function() {
    //for spinner buttons  
    $('#handleCounter1').handleCounter({
        minimum: 1,
        maximize: 100,
    });
    $('#handleCounter2').handleCounter({
        minimum: 1,
        maximize: 100,
    });

    //for datepicker
    pickmeup('.range', {
        mode: 'range',
        separator: '    to   ',
        position: 'bottom',
        // hide_on_select : true,
        format: 'd b-y',

    });
    //pickmeup('.range').show();

    // image slider main
    $('.single').slick({
        autoplay: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
        draggable: false
    });

    $('.left').on('click', function(e) {
        $('.single').slick('slickPrev');
    })

    $('.right').on('click', function(e) {
        $('.single').slick('slickNext');
    })

    $('.room').slick({
        autoplay: false,
        slidesToShow: 3,
        pauseOnFocus: true,
        arrows: false,
        draggable: true,
        swipeToSlide: true
    });

    $('.review').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnFocus: true,
        pauseOnHover: false,
        arrows: false,
        draggable: true
    });

    //scrolltotop
    // $.scrollUp({
    //     scrollName: 'scrollUp', // Element ID
    //     topDistance: '600', // Distance from top before showing element (px)
    //     topSpeed: 300, // Speed back to top (ms)
    //     animation: 'fade', // Fade, slide, none
    //     animationInSpeed: 500, // Animation in speed (ms)
    //     animationOutSpeed: 500, // Animation out speed (ms)
    //     scrollText: '^',
    //     activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    // });
});

// map
function initMap() {
    var uluru = { lat: 31.031372, lng: -97.4781389 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
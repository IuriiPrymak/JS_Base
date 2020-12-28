$('document').ready(function(){
    var $modal = $('.modal-container');
    var $toTopBtn = $('.btn__go-top');

    var $modal_1 = $('.modal-container-1');
    var $modal_2 = $('.modal-container-2');
    var $modal_3 = $('.modal-container-3');
    var $modal_4 = $('.modal-container-4');
    var $modal_5 = $('.modal-container-5');
    var $modal_6 = $('.modal-container-6');

    // modal Consult Button

    $('.header__consult-btn').on('click', function() {
        $modal.fadeIn('slow');
    });

    $('.close_modal').on('click', function() {
        $modal.fadeOut('fast');
    });

    // modal Our services

    $('.service__item_1').on('click', function() {
        $modal_1.fadeIn('slow');
    });

    $('.close_modal').on('click', function() {
        $modal_1.fadeOut('fast');
    });

    $('.service__item_2').on('click', function() {
        $modal_2.fadeIn('slow');
    });

    $('.close_modal').on('click', function() {
        $modal_2.fadeOut('fast');
    });

    $('.service__item_3').on('click', function() {
        $modal_3.fadeIn('slow');
    });

    $('.close_modal').on('click', function() {
        $modal_3.fadeOut('fast');
    });

    $('.service__item_4').on('click', function() {
        $modal_4.fadeIn('slow');
    });

    $('.close_modal').on('click', function() {
        $modal_4.fadeOut('fast');
    });

    $('.service__item_5').on('click', function() {
        $modal_5.fadeIn('slow');
    });

    $('.close_modal').on('click', function() {
        $modal_5.fadeOut('fast');
    });

    $('.service__item_6').on('click', function() {
        $modal_6.fadeIn('slow');
    });

    $('.close_modal').on('click', function() {
        $modal_6.fadeOut('fast');
    });

    // goTopButton

    $(window).scroll(function() {        
        if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
            $toTopBtn.fadeIn('slow');
        } else {
            $toTopBtn.fadeOut('slow');
    }});

    $toTopBtn.on('click', function() {
        console.log('asdasd')
        $("html, body").animate({ 
            scrollTop: 0 
        }, "slow");
    })

   // slick slider
   $('.feedback__slider').slick({
       dots: true,
       infinite: true,
       speed: 500,
       fade: true,
       cssEase: 'linear'
   });

});

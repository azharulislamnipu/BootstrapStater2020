(function($, window, document,) {
    "use strict";
    var $win = $(window);
    var $doc = $(document);
    var $body = $('body');

    /*--
    Menu Stick
    -----------------------------------*/
    $('select').select2();
    $('b[role="presentation"]').hide();
    $('.select2-selection__arrow').append('<i class="icofont-simple-down"></i>');
    
    
    
})(jQuery);
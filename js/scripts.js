(function($) {
    "use strict";

    $(".nn").each(function(index) {
        var addr = $(this).text().replace(/\n/g,"").replace(/ /g,"");
        $(this).html('Ism'+addr+'indola');
    });


})(jQuery);
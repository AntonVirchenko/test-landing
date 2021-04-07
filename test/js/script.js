var count = 0;

$('.fa').click(function() {
    count++;
    if (count % 2 == 0) {
        $(this).removeClass("fa-chevron-up");
        $(this).addClass("fa-chevron-down");

    } else {
        $(this).removeClass("fa-chevron-down");
        $(this).addClass("fa-chevron-up");
    }

});

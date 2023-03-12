let is_clicked = false;


$('.article').hover(function () {

    $(this).css('transform', 'scale(1.05)');

    }, function () {

    $(this).css('transform', 'scale(1)');
    }
);

$('.article').click(function (e) {
    e.preventDefault();

    let clickedSource=e.currentTarget.children[0].children[0].getAttribute('src');


    $('.pop-image').attr('src', clickedSource);

    $('.modal-image').css('display', 'block');

    //scroll to the top of the page

    $(window).scrollTop(0);
    $('body').css('overflow', 'hidden');
    is_clicked = true;
});

$('.close-btn').click(function (e) {
    // e.preventDefault();
    if(is_clicked)
        $('.modal-image').css('display', 'none');
    $('body').css('overflow', 'auto');
    is_clciked = false;

});
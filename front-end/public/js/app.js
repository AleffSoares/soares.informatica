var $target = $('.card'),
    animationClass = 'card-start';
    offset = $(window).height() * 3 / 4;
    

function animeScroll() {
    var documentTop = $(document).scrollTop();
    
    $target.each(function (){
        var itemTop = $(this).offset().top;
        if(documentTop > itemTop -offset) {
            $(this).addClass(animationClass)
        }else{
            $(this).removeClass(animationClass);
        }
    })
    
}

animeScroll();

$("body").scroll(function (){

    animeScroll();
})

$(function(){
    
    $('#main-slide').bxSlider({
        auto: true,
        stopAutoOnClick: true,
        pager: true,
        responsive:true,
        controls: false
    });
    
    $(window).scroll( function(){
        if( $(window).scrollTop() > 50 ){
            $('.mouse-wrapper').css({'display':'none'})
        }else{
            $('.mouse-wrapper').css({'display':'block'})
        }
       
    })

});
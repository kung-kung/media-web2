$(function(){
    $(".ham_btn").click(function(){
        $(".gnb").stop().slideToggle()
    })
    $(".ssbox span, .sm").hover(function(){
        $(".sm").stop().slideDown("fast")
    },function(){
        $(".sm").stop().slideUp("fast")
    })
})
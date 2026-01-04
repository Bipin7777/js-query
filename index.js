$(document).ready(function(){
    $("title").text('jQuery');

    isToggled = false;
    $("#btn-1").click(function(){
        if(isToggled){
            $('#title-tag').text('Hello Guest');
            
    $("#title-tag").css({
        color:"green",
        fontSize:'50px'
        })
        }else{
             $('#title-tag').text('Hello World');
        }
        isToggled=!isToggled;
    });
    $("body").append('<h2> This is Hala Hala Vinaju.</h2>')
    $("#title-tag").slideToggle(3000);
    $("#title-tag").fadeOut(3000);
});
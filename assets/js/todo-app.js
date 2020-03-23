$(".delete-button").text("");
$(".delete-button").css("width","0px");

var last_item;

$( ".to-do-list" ).on( "mouseover",".to-do-item", function(){
    console.log("mouse entered")
    $(this).children(".delete-button").css("width","40px");
    $(this).children(".delete-button").text("🗑");
});

$( ".to-do-list" ).on( "mouseout",".to-do-item", function(){
    $(this).children(".delete-button").css("width","0px");
    $(this).children(".delete-button").text("");
});

$( ".to-do-list" ).on( "click",".to-do-item", function(){
    console.log("marked as completed");
    $(this).children(".to-do-text").toggleClass("completed");
});
$( ".to-do-list" ).on( "click",".to-do-item .delete-button", function(){
    console.log("deleted");
    last_item = $(this).closest(".to-do-item").detach();
});

$("document").on("keydown",function(e){
    if( e.which === 90 && e.ctrlKey && e.shiftKey ){
        console.log('control + shift + z'); 
    }
    else if( e.which === 90 && e.ctrlKey ){
        console.log('control + z'); 
    } 
});

$('input[type="text"]').on("keypress",function(event){
    if(event.which===13){
       
        var txt = '<li class = "to-do-item"><span class="delete-button">X</span><span class="to-do-text">'+$(this).val()+'</span></li>'
        $(".to-do-list").append(txt)
        
        $(".delete-button").text("");
        $(".delete-button").css("width","0px");
        $(this).val("");
    }
});
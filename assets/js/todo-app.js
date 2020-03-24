$(".delete-button").text("");
$(".delete-button").css("width","0px");

var last_item;
var numLists = 1;

$( ".row" ).on( "mouseover",".to-do-item", function(){
    console.log("mouse entered")
    $(this).children(".delete-button").css("width","40px");
    $(this).children(".delete-button").text("🗑");
});

$( ".row" ).on( "mouseout",".to-do-item", function(){
    $(this).children(".delete-button").css("width","0px");
    $(this).children(".delete-button").text("");
});

$( ".row" ).on( "click",".to-do-item", function(){
    console.log("marked as completed");
    $(this).children(".to-do-text").toggleClass("completed");
});
$( ".row" ).on( "click",".delete-button", function(){
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

$('.row').on("keypress",".to-do-input",function(event){
    if(event.which===13){
        var txt = '<li class = "to-do-item"><span class="delete-button"></span><span class="to-do-text">'+$(this).val()+'</span></li>'
        var listnum = $(this).attr("id").substr($(this).attr("id").indexOf('-')+1,$(this).attr("id").length);
        console.log(listnum);
        $("#list-"+listnum).append(txt);
        $(".delete-button").text("");
        $(".delete-button").css("width","0px");
        $(this).val("");
    }
});


function addList(){
    numLists++;
    console.log("num lists: "+numLists);
    var lstHTML = getListHTML();
    $(".row").append(lstHTML);
}

function getListHTML(){
    var lstHTML = '<div class="col-12 col-md-6 col-lg-4 full-list-card">';
    lstHTML+='<div class="list-wrapper">';
    lstHTML+='<div class="heading-wrapper"><span class="delete-list-button"></span><input type="text" placeholder="List '+numLists+'" class="to-do-heading"></input></div>';
    lstHTML+='<div class="input-wrapper"><input class = "to-do-input" type="text" placeholder="add a todo" id="input-'+numLists+'"></input></div>';
    lstHTML+='<ul class = "to-do-list" id="list-'+numLists+'"></ul></div></div>';
    return lstHTML;
}





$( ".row" ).on( "mouseover",".heading-wrapper", function(){
    console.log("mouse entered")
    $(this).children(".delete-list-button").css("width","30px");
    $(this).children(".delete-list-button").text("🗑");
});

$( ".row" ).on( "mouseout",".heading-wrapper", function(){
    $(this).children(".delete-list-button").css("width","0px");
    $(this).children(".delete-list-button").text("");
});

$( ".row" ).on( "click",".delete-list-button", function(){
    console.log($(this).closest(".full-list-card"));

    last_item = $(this).closest(".full-list-card").detach();
});
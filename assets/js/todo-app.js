
$( ".to-do-item" ).on( "click", function(){
    console.log("mouse entered")
    $(this).children(".delete-button").animate({
        width:'toggle'
    },350);
});

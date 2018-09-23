$(document).ready(function() {
    var winWidth = $(window).width();
    var divWidth = $("#home").width();
    var hOffset = ((winWidth - divWidth) / 2) + "px";
    $("#home").on("mouseover", function() {
        $("#learnmore, .fas").animate({left: hOffset});
    });
});
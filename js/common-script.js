$(function() {

    // Short-cuts
    jQuery(document).bind('keydown', 'Ctrl+y', function() {
        console.log("Inside ShotCuts");
        window.location = $("#link-inicio").attr("href");
    });

    jQuery(document).bind('keydown', 'Ctrl+b', function() {
        console.log("Inside ShotCuts");
        window.location = $("#link-blog").attr("href");
    });


    jQuery(document).bind('keydown', 'Ctrl+q', function() {
        console.log("Inside ShotCuts");
        window.location = $("#link-perfil").attr("href");
    });

    // Help Dialog
    $( "#dialog" ).dialog({
        autoOpen: false,
        show: "blind",
        resizable: false
    });

    $("#keys").on("click", function(e) {
        $("#dialog").dialog("open");
    });
});
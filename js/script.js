init = () => {
    // initializing VanillaTilt
    VanillaTilt.init(document.querySelectorAll(".glass, .glass-card"), {
        glare: true,
        max: 35,
        speed: 0,
        scale: 1.1,
        reverse: true,
        "max-glare": 0.5,
    });
    // initializing AOS
    AOS.init();
}

$(document).ready(function () {
    // initialize
    init();

    // change color with data attributes
    $(".btn").click(function () {
        var color = $("#color").val();
        var id = $(this).attr("data-btn");
        $("div").find(`[data-box ='${id}']`).css("background", color);
        console.log(color);
    });

    // change parent border on color input focus
    $("#color").focus(function () {
        $(".opt-container").addClass("opt-container-input-focused");
    });
    $("#color").focusout(function () {
        $(".opt-container").removeClass("opt-container-input-focused");
    });
});
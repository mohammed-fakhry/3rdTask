
//Fakhry
$("#navSearch i").click(function () {
    $("#navSearch input").show(200, function () {
        $("#navSearch i:first").hide();
        $("#navSearch i").next().show();
    });
});

$("#navSearch i").next().click(function () {
    $("#navSearch input").hide(200, function () {
        $("#navSearch i").show();
        $("#navSearch i:first").next().hide();
    })
});

// welcome Texy
var t = 0;
var Headertxt = 'Add Your brilliant web site Here.';
function welcomeLoad() {
    if (t < Headertxt.length) {
        document.getElementById("headerTxt").innerHTML += Headertxt.charAt(t);
        t++;
        setTimeout(welcomeLoad, 50);
        $('#welcomeTxt button').delay(1800).fadeIn(900)
    }
}
window.onload = function () {
    welcomeLoad();
};
// image effects
$("#welcomeImg img").hover(function () {
    $(this).toggleClass("shadow")
})
// Image SlideShow
$("#welcomeImg > .slides:gt(0)").hide();
setInterval(function() {
    $('#welcomeImg > .slides:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#welcomeImg');
  }, 3000);

//--------------------------------------------------
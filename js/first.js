
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

// welcome Text
var t = 0;
var Headertxt = 'Add Your brilliant web site Here.';
function welcomeLoad() {
    if (t < Headertxt.length) {
        document.getElementById("headerTxt").innerHTML += Headertxt.charAt(t);
        t++;
        setTimeout(welcomeLoad, 50);
        $('#welcomeTxt button').delay(2000).fadeIn().animate({marginTop: '25px', padding: '10px', fontSize: '1.5em'},500)
    }
}
window.onload = function () {
    welcomeLoad();
};
// image effects
$("#welcomeImg").mouseenter(function () {
    $('#welcomeImg img').animate({top: '-20'})
})
$("#welcomeImg").mouseleave(function () {
    $('#welcomeImg img').animate({top: '0'})
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
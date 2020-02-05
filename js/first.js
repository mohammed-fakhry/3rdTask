
//--------------------------------------------------Fakhry
//scroll
$(window).scroll(function () {

    var scrolling = $(this).scrollTop();
    if (scrolling >= 50) {
        $('nav').removeClass('navbar-light bg-light')
        $('nav').addClass('navbar-dark bg-dark')
    } else if (scrolling <= 50) {
        $('nav').addClass('navbar-light bg-light')
        $('nav').removeClass('navbar-dark bg-dark')
    }

})

// search icon effect
$("#navSearch i").click(function () { //Open
    $("#navSearch input").show(200, function () {
        $("#navSearch i:first").hide();
        $("#navSearch i").next().show();
    });
});

$("#navSearch i").next().click(function () { //Close
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
        $('#welcomeTxt button').delay(2000).fadeIn(500)
        $('#headerDescr').delay(2500).fadeIn(600)
    }
}
window.onload = function () {
    welcomeLoad();
    $('#welcomeImg img').animate({ top: '20', left: '0' }, 2100); // header Image's Welcome Animation
};
// image effects
$("#welcomeImg").mouseenter(function () {
    $('#welcomeImg img').animate({ top: '-20', left: '-10' })
    $('#headerDescr h2').animate({ fontSize: '2.5em' })
})
$("#welcomeImg").mouseleave(function () {
    $('#welcomeImg img').animate({ top: '20', left: '0' })
    $('#headerDescr h2').animate({ fontSize: '2em' })
})

//SlideShow
$("#welcomeImg .slides:gt(0)").hide();
setInterval(function () {
    let headImgSrc = $("#welcomeImg .slides").attr("src")
    console.log(headImgSrc)
    //text SlideShow
    if (headImgSrc == "Source/header3.jpg") {
        $("#headerDescr").addClass("bg-light")
        $("#headerDescr").removeClass("bg-dark text-light")
        $('#welcomeTxt h2').html("Mikiya")
        $('#welcomeTxt p').html("is a Product Designer with a minimalistic portfolio that showcases his work through strong photography and subtle animations. His full site was originally created in Japanese and then translated into English, helping demonstrate the international scalability of his design.")
    } else if (headImgSrc == "Source/header.jpg") {
        $("#headerDescr").addClass("bg-dark text-light")
        $("#headerDescr").removeClass("bg-light")
        $('#welcomeTxt h2').html("Revols")
        $('#welcomeTxt p').html("Revols takes a bold approach on its website by enlarging its small, sophisticated headphones using macro photography and video. The photography and video make the site incredibly product-focused, so its users slowly become more and more immersed in the experience these headphones can give you.")
    } else if (headImgSrc == "Source/header2.jpg") {
        $("#headerDescr").addClass("backColor")
        $("#headerDescr").removeClass("bg-dark text-light")
        $('#welcomeTxt h2').html("uBear")
        $('#welcomeTxt p').html("uBear designs, develops and produces mobile accessories and related products for urban-minded peoples driven by energy of big cities.")
    }
    //image SlideShow
    $('#welcomeImg .slides:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#welcomeImg');
}, 5000);
//--------------------------------------------------FakhryEnd

//--------------------------------------------------Mostafa
//--------------------------------------------------MostafaEnd

//--------------------------------------------------Yasser
//--------------------------------------------------YasserEnd

//--------------------------------------------------Anas
//--------------------------------------------------AnasEnd

//--------------------------------------------------Shireen
//--------------------------------------------------ShireenEnd
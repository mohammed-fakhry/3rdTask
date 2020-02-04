
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
//--------------------------------------------------
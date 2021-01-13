$(document).ready(function () {
    $(".btn").click(function () {
        hiddenText();
    });
});

function hiddenText() {
    $("#text").css("display", "block");
};

// il faut bien distinguer la définition de la fonction de son exécution
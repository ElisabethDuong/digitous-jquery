$(document).ready(function () {
    $(".btn").click(function () {
        $("#square").animate({
            right: "0px",
            bottom: "0px",
        });
    });
});

// les propriétés CSS top, bottom, left, right nous donnent l'écart par rapport au bord désigné du container
// ça permet d'avoir des animations plus dynamiques
// right -> écart par rapport à la droite du cadre
// bottom -> écart par rapport au bas du cadre
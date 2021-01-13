$(document).ready(function(){
    $(".btn").click(function(){
        $("#bg").animate({
            marginLeft: "+=100px",
        });
    });
});

// marginLeft: "+=100px" va déplacer le carré de 100px à chaque fois qu'on va cliquer sur le bouton
// marginLeft: "100px" va déplacer UNE SEULE FOIS le carré de 100px vers la droite
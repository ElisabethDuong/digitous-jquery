$(document).ready(function () {
    $("#text").css("font-size", "50px");
});


// $(document).ready(function(){
//     $("#square").css({
//         width: "500px",
//         height: "500px",
//         backgroundColor: red,
//     });
// });

// dans le cas où on voudrait changer plusieurs propriétés CSS en même temps, ça ne marche pas pour celles qui s'écrivent avec des tirets, PAS DE TIRETS EN JAVASCRIPT
// on change le kebab case (syntaxe avec tirets) en camel case, background-color -> backgroundColor
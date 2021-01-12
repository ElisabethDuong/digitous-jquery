$(document).ready(function(){
    $("#text").css("font-size", "50px");
});


// $(document).ready(function(){
//     $("#square").css({
//         width: "500px",
//         height: "500px",
//         backgroundColor: red,
//     });
// });

// dans le cas où on voudrait changer plusieurs propriétés CSS en même temps, il se peut que ça ne marche pas pour certaines comme background-color car ça peut correspondre à une fonctionnalité en jQuery
// on peut donc changer le kebab case (syntaxe avec tirets) en camel case, background-color -> backgroundColor
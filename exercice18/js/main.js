$(document).ready(function () {
    $(".btn").click(function () {
        $("#text").hide();
    });
});

// Méthode hide correspond à la règle CSS display: none

// Autre méthode 

// $(document).ready(function(){
//     $(".btn").click(function(){
//         $("#text").css({
//             display: "none",
//         });
//     });
// });
$(document).ready(function(){
    $(".btn").click(function(){
        $("#square").animate({
            marginLeft: "+=50px",
            marginTop: "+=10px",
        });
    });
});

// Autre Méthode

// $(document).ready(function(){
//     $(".btn").click(function(){
//         $("#square").animate({
//             left: "+=50px",
//             top: "+=10px",
//         });
//     });
// });
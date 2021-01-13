$(document).ready(function () {
    $(".btn").click(function () {

        var password = $("input").val();
        console.log(password.length);

        if (password.length > 5) {
            $("input").addClass("is-valid");
        } else {
            $("input").addClass("is-invalid");
        }
    });
});


// Autre méthode 

// $(document).ready(function () {
//     $(".btn").click(function () {
//         if ($("input").val().length > 5) {
//             $("input").addClass("is-valid");
//         } else {
//             $("input").addClass("is-invalid");
//         }
//     });
// });
$(document).ready(function () {
    $(".btn").click(function () {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/france",
            success: function (data, status, response) {
                // console.log(response.statusCode);
                console.log(data[0].name);
                console.log(data[0].capital);
            }
        })
    })
});


// $(document).ready(function () {
//     $(".btn").click(function () {
//         $.ajax({
//             url: "https://restcountries.eu/rest/v2/name/all",
//             success: function (data, status, response) {
//                 console.log(response.statusCode);
//                 $("#countries").text(data.map(function (country) {
//                     return country.name;
//                 }).join(" - "));
//             },
//             method: "get",
//             error: function(data, status, response){
//                 $("#countries").text("Erreur")
//             },
//             dataType: "json",
//         })
//     })
// });
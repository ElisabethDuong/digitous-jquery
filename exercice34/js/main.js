// $(document).ready(function () {
//     $(".btn").click(function () {

//         // var countryInput = "https://restcountries.eu/rest/v2/name/" + $("input").val();
//         var countryInput = `https://restcountries.eu/rest/v2/name/" ${($("input").val())}`;

//         $.ajax({
//             url: countryInput,
//             success: function (data, status, response) {
//                 $("#country").html(`<b>${data[0].name}</b>`);
//                 $("#capital").html(`<i>${data[0].capital}</i>`);
//             }
//         })

//     })
// });


// Autre méthode en stockant dans des variables 

// $(document).ready(function () {
//     $(".btn").click(function () {

//         var countries = "https://restcountries.eu/rest/v2/name/";
//         var countryInput = $("input").val();
//         var countryResult = countries + countryInput;

//         $.ajax({
//             url: countryResult,
//             success: function (data, status, response) {
//                 $("#country").html(data[0].name);
//                 $("#capital").html(data[0].capital);
//             }
//         })

//     })
// });


// A REPRENDRE AVEC LE HTML

// $(document).ready(function () {
//     $(".btn").click(function () {
//         $.ajax({
//             url: `https://pokeapi.co/api/v2/pokemon/" ${($("input").val())}`,
//             success: function (data, status, response) {
//                 $("#pokemon").text(data.name);
//                 $("#type").html(data.types[0].);
//                 $("#type").html(data.types[0].);
//             }
//         })
//     })
// });
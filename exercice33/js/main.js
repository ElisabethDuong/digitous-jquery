$(document).ready(function () {
    $(".btn").click(function () {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/france",
            success: function (data, status, response) {
                $("#country").html(data[0].name);
                $("#capital").html(data[0].capital);
            }
        })
    })
});

// on peut appliquer le code HTML que l'on veut sur les datas Ajax

// $(document).ready(function () {
//     $(".btn").click(function () {
//         $.ajax({
//             url: "https://restcountries.eu/rest/v2/name/france",
//             success: function (data, status, response) {
//                 $("#country").html(`<b>${data[0].name}</b>`);
//                 $("#capital").html(`<i>${data[0].capital}</i>`);
//             }
//         })
//     })
// });
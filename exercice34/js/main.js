$(document).ready(function () {
    $(".btn").click(function () {
        var countries = "https://restcountries.eu/rest/v2/name/";
        var countryInput = $("input").val();
        var countryResult = countries + countryInput;

        $.ajax({
            url: countryResult,
            success: function (data, status, response) {
                $("#country").html(data[0].name);
                $("#capital").html(data[0].capital);
            }
        })
    })
});
$(document).ready(function(){
    $("input").keyup(function(){

        var password = $("input").val();
        console.log(password.length);

        if (password.length < 5) {
            $("input").addClass("is-invalid");
        } else {
            $("input").addClass("is-valid");
            $("input").removeClass("is-invalid");
        }
    });
});
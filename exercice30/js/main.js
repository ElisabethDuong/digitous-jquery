$(document).ready(function () {
    $("input").keyup(function () {

        var password = $("input").val();
        console.log(password.length);

        if (password.length < 5) {
            $("input").addClass("is-invalid");
        } else {
            $("input").removeClass("is-invalid");
            $("input").addClass("is-valid");
        }
    });
});

// il faut bien mettre la ligne $("input").removeClass("is-invalid") dans les conditions pour que la classe change quand on dépasse 5 caractères, sinon on sera obligé d'actualiser la page pour ressaisir le mot de passe
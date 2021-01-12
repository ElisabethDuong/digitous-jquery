$(document).ready(function(){
    $(".btn").click(function(){
        $(`input[disabled="disabled"]`).removeAttr("disabled");
    });
});
$(document).ready(function() {

    let argent = 100;
    $('#argent').text(argent);

    $("#btnProposition").click(function() {
        $("#proposition").empty();

        for (var i = 0; i < 6; i++) {
            var manga = new Manga();
            $("#proposition").append("<p>" + manga.nom + ", par " + manga.author + " (Potentiel : " + manga.potentiel + ")</p>");
        }

    });


});
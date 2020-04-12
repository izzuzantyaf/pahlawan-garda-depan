$(function () {

    let text = "#PahlawanGardaDepann";

    let i = 0;
    setInterval(() => {
        $("#hashtag").append(text[i]);
        i++;
        if (i === 20) {
            $("#hashtag").html("");
            i = 0;
        }
    }, 200);

});
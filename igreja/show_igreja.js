
function listaIgrejas() {


    $.ajax({
        method: "GET",
        url: "igreja/lista_igrejas.php"
    }).done((retorno) => {

        retorno = JSON.parse(retorno);

        console.log(retorno);

    });
}
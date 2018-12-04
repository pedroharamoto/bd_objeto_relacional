function addIgreja(){
    $("#plot").empty();

    var igreja_nome = $("#igreja_nome").val();
    var igreja_rua = $("#igreja_rua").val();
    var igreja_numero = $("#igreja_numero").val();
    var igreja_complemento = $("#igreja_complemento").val();
    var igreja_cep = $("#igreja_cep").val();
    var igreja_bairro = $("#igreja_bairro").val();
    var igreja_cidade = $("#igreja_cidade").val();
    var igreja_uf = $("#igreja_uf").val();

    var dados = {
            "igreja_nome" : igreja_nome,
            "igreja_rua" : igreja_rua,
            "igreja_numero" : igreja_numero,
            "igreja_complemento" : igreja_complemento,
            "igreja_cep" : igreja_cep,
            "igreja_bairro" : igreja_bairro,
            "igreja_cidade" : igreja_cidade,
            "igreja_uf" : igreja_uf
    };
    //
    //parametros = JSON.stringify(dados);

    $.ajax({
        method: "POST",
        url: "ins_igreja.php",
        data: dados
    }).done((data) => alert(data));

    // var texto_retorno = "";
    // //
    // var xmlhttp = new XMLHttpRequest();
    // //
    // //aqui estará o retorno
    // //
    // xmlhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         retorno = this.responseText;
    //         //
    //         retorno = JSON.parse(retorno);
    //         //
    //         if(retorno.msg === false){
    //             texto_retorno = "ERRO!<br>"+igreja_nome+" já existe!";
    //         }
    //         else{
    //             texto_retorno = "Igreja " + igreja_nome + " cadastrada!";
    //         }
    //         //
    //         $("#plot").append(texto_retorno);
    //     }
    // };
    //
    //
    //
    // xmlhttp.open("POST", "query.php", true); //abro o arquivo PHP
    // xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // xmlhttp.send("data=" + parametros); //passo os dados(json) para o arquivo
}

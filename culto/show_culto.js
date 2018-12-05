function show_cultos(retorno){
    //
    //função para mostrar as igrejas cadastradas
    //
    $("#mostra_cultos").empty();//limpo a div q irá mostrar
    var igreja_nome = $("#igreja_nome").val();
    //
    var texto_retorno = ""; //corpo da div
    //
    //recebo todos o resultado da query realizada, em formato JSON
    //
    if(retorno.length == 0){
        //não encontrou nenhum resultado
        texto_retorno += "<p>Não há igrejas cadastradas!";
    }
    else{
        //
        //encontrou
        //irei criar a tabela para mostrar o resultado da query
        //
        texto_retorno += '<table class="table table-striped"><thead><tr><th style="width:25%;">Igreja</th><th style="width:25%;">Preletor</th><th style="width:10%;">Data</th><th style="width:10%;">Horário</th><th style="width:5%;">Oferta</th><th style="width:5%;">Dízimo</th><th style="width:5%;">Presentes</th></tr></thead>';
        texto_retorno += '<tbody>';
        //
        for (i in retorno) {
            texto_retorno += '<tr>';

            texto_retorno += '<td>' + retorno[i].igreja_nome + '</td>';
            texto_retorno += '<td>' + retorno[i].culto_preletor + '</td>';
            texto_retorno += '<td>' + retorno[i].culto_data +'</td>';
            texto_retorno += '<td>' + retorno[i].culto_horario +'</td>';
            texto_retorno += '<td>' + retorno[i].culto_oferta+'</td>';
            texto_retorno += '<td>' + retorno[i].culto_dizimo+'</td>';
            texto_retorno += '<td>' + retorno[i].culto_presentes+'</td>';

            texto_retorno += '</tr>';

        }
        texto_retorno += '</tbody></table>';
    }
    $("#mostra_cultos").append(texto_retorno);
}


function procuraCultos() {
    //essa função vai procurar cultos de igrejas por preletores e/ou igreja
    //tipo igreja do vit...
    //usar o like do postgresql
    var igreja_nome = $("#membro_igreja_nome").val();
    var culto_preletor = $("#culto_preletor").val();
    //
    $.ajax({
        method: "GET",
        url: "culto/lista_cultos.php",
        data: {"igreja_nome" : igreja_nome, "culto_preletor" : culto_preletor}
    }).done((retorno) => {

        retorno = JSON.parse(retorno);
        show_cultos(retorno);

    });
}


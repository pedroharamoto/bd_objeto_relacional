function show_igrejas(retorno){
    //
    //função para mostrar as igrejas cadastradas
    //
    $("#mostra_igrejas").empty();//limpo a div q irá mostrar
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
        texto_retorno += '<table class="table table-striped"><thead><tr><th style="width:5%;">#</th><th style="width:40%;">Nome</th><th style="width:20%;">Cidade</th><th style="width:30%;">Pastor</th><th style="width:5%;">Tel. Pastor</th></tr></thead>';
        texto_retorno += '<tbody>';
        //
        for (i in retorno) {

            var n = parseInt(parseInt(i)+1);

            texto_retorno += '<tr>';
            texto_retorno += '<td>'+ n +'</td>';

            texto_retorno += '<td>'            
            texto_retorno += '<a role="button" data-toggle="collapse" href="#collapse'+n+'" aria-expanded="false" aria-controls="collapse'+n+'">';
            texto_retorno += '' + retorno[i].igreja_nome+ '';
            texto_retorno += '</a>';

            texto_retorno += '<div class="collapse" id="collapse'+n+'">';
            texto_retorno +=    '<div class="well">';
            texto_retorno +=        '<p class="recuo">';
            texto_retorno +=            '<b>Endereço:</b> ' + retorno[i].rua + ', ' + retorno[i].numero;
            texto_retorno +=            ', ' + retorno[i].bairro + ', ' + retorno[i].cep;
            texto_retorno +=        '</p>';
            texto_retorno +=    '</div>';            
            texto_retorno += '</td>';

            texto_retorno +='<td>'+retorno[i].cidade+ '-' + retorno[i].uf +'</td>';
            texto_retorno += '<td>'+retorno[i].membro_nome+'</td>';
            texto_retorno += '<td>'+retorno[i].membro_tel+'</td>';
            texto_retorno += '</tr>';

        }
        texto_retorno += '</tbody></table>';
    }
    $("#mostra_igrejas").append(texto_retorno);
}


function procuraIgrejas() {
    //essa função vai procurar igrejas com restrições
    //tipo igreja do vit...
    //usar o like do postgresql
    var igreja_nome = $("#igreja_nome").val();
    //
    $.ajax({
        method: "GET",
        url: "igreja/lista_igrejas_rest.php",
        data: {"igreja_nome" : igreja_nome}
    }).done((retorno) => {

        retorno = JSON.parse(retorno);

        show_igrejas(retorno);

    });
}


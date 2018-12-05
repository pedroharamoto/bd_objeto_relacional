function mudaTitulo(){
    var titulo = $("#titulo");

    if(titulo.val() == '1'){
        $("#title").empty();
        $("#title").append('<h1>Diagrama</h1>');
        titulo.val('2');
    }
    else{
        $("#title").empty();
        $("#title").append('<h1>Minimundo</h1>');
        titulo.val('1');
    }
}
//
function carregar(pagina){

  var corpo = $('#corpo');

  corpo.empty();

  corpo.load(pagina)
};

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

    $.ajax({
        method: "POST",
        url: "igreja/add_igreja.php",
        data: dados
    }).done((data) => alert(data));
}

function listaIgrejas(callback = null) {


    $.ajax({
        method: "GET",
        url: "igreja/lista_igrejas.php"
    }).done((retorno) => {

        retorno = JSON.parse(retorno);

        var texto_retorno = '<select class="form-control" name="membro_igreja_nome" id="membro_igreja_nome">';
        if(retorno.length == 0){
            texto_retorno += "<option value=0>Não há igrejas cadastradas!</option>";
        }
        else{
            texto_retorno += '<option value=0>Selecione a igreja</option>';
            for (i in retorno) {
                texto_retorno += '<option value="'+retorno[i].igreja_nome+'">'+retorno[i].igreja_nome+', '+retorno[i].cidade+ '</option>';
            }
        }
        texto_retorno += '</select>';
        $("#lista_igrejas").append(texto_retorno);

        if(callback != null)
            callback();
    });
}

function addMembroIgreja() {
    $("#plot").empty();

    var membro_igreja_nome  = $("#membro_igreja_nome").val();
    var membro_nome         = $("#membro_nome").val();
    var membro_cpf          = $("#membro_cpf").val();
    var membro_nasc         = $("#membro_nasc").val();
    var membro_sexo         = $("#membro_sexo").val();
    var membro_email        = $("#membro_email").val();
    var membro_telefone     = $("#membro_telefone").val();
    var membro_rua          = $("#membro_rua").val();
    var membro_numero       = $("#membro_numero").val();
    var membro_complemento  = $("#membro_complemento").val();
    var membro_cep          = $("#membro_cep").val();
    var membro_bairro       = $("#membro_bairro").val();
    var membro_cidade       = $("#membro_cidade").val();
    var membro_uf           = $("#membro_uf").val();

    var dados = {
            "membro_igreja_nome" : membro_igreja_nome,
            "membro_nome" : membro_nome,
            "membro_cpf" : membro_cpf,
            "membro_nasc" : membro_nasc,
            "membro_sexo" : membro_sexo,
            "membro_email" : membro_email,
            "membro_telefone" : membro_telefone,
            "membro_rua" : membro_rua,
            "membro_numero" : membro_numero,
            "membro_complemento" : membro_complemento,
            "membro_cep" : membro_cep,
            "membro_bairro" : membro_bairro,
            "membro_cidade" : membro_cidade,
            "membro_uf" : membro_uf
    };


    $.ajax({
        method: "POST",
        url: "membro/add_membro.php",
        data: dados
    }).done((data) => alert("Membro Cadastrado!"));
}

function addCulto() {
    var igreja_nome     = $("#membro_igreja_nome").val();
    var culto_data      = $("#culto_data").val();
    var culto_hora      = $("#culto_horario").val();
    var culto_preletor  = $("#culto_preletor").val();
    var culto_presentes = $("#culto_presentes").val();
    var culto_oferta    = $("#culto_oferta").val();
    var culto_dizimo    = $("#culto_dizimo").val();

    var dados = {
        "igreja_nome" : igreja_nome,
        "culto_data" : culto_data,
        "culto_hora" : culto_hora,
        "culto_preletor" : culto_preletor,
        "culto_presentes" : culto_presentes,
        "culto_oferta" : culto_oferta,
        "culto_dizimo" : culto_dizimo
    };

    $.ajax({
        method: "POST",
        url: "culto/add_culto.php",
        data: dados
    }).done((data) => alert("OK"));
}

function atualizaListaNaoPastores() {

    $("#mostra_membros_igrejas").empty();

    var igreja_nome = $("#membro_igreja_nome").val();
    var membro_nome = $("#proc_membro_nome").val();
    //
    if (!membro_nome){
        membro_nome = "";
    }

    var dados = {
        "igreja_nome" : igreja_nome,
        "membro_nome" : membro_nome
    }

    $.ajax({
        method: "GET",
        url: "pastor/lista_nao_pastores.php",
        data: dados
    }).done((retorno) => {

        retorno = JSON.parse(retorno);

        var texto_retorno = ""; //corpo da div

        texto_retorno += '<table class="table table-striped" style="width:100%;"><thead><tr><th style="width:5%;">#</th><th style="width:95%;">Nome</th></tr></thead>';
        texto_retorno += '<tbody>';
        //
        for (i in retorno) {

            var n = parseInt(parseInt(i)+1);

            texto_retorno += '<tr>';
            texto_retorno += '<td>'+ n +'</td>';
            texto_retorno +='<td>';

            texto_retorno += '<a role="button" data-toggle="collapse" href="#collapse'+n+'" aria-expanded="false" aria-controls="collapse'+n+'">';
            texto_retorno += '' + retorno[i].membro_nome+ '';
            texto_retorno += '</a>';

            texto_retorno += '<div class="collapse" id="collapse'+n+'">';
            texto_retorno +=    '<div class="well">';
            texto_retorno +=        '<p class="recuo">';
            texto_retorno +=            'CPF: '+ retorno[i].membro_cpf + '<br>';
            texto_retorno +=        '</p>';

            texto_retorno +=        '<p class="recuo">';
            texto_retorno +=            'Endereço: ' + retorno[i].rua + ', ' + retorno[i].numero;
            texto_retorno +=            ', ' + retorno[i].bairro + ', ' + retorno[i].cep;
            texto_retorno +=        '</p>';
            texto_retorno +=    '</div>';

            texto_retorno +=    '<div class="row">';
            texto_retorno +=        '<div class="col-md-10">';
            texto_retorno +=            '<div class="alinhamento">';
            texto_retorno +=                '<input class="btn btn-primary" id="btn_promover" onclick="promoveParaPastor('+retorno[i].membro_cpf + ',\'' + igreja_nome + '\')" type="button" value="Promover"></input>';
            texto_retorno +=            '</div>';
            texto_retorno +=        '</div>';

            texto_retorno +=    '</div>';

            texto_retorno += '</div>';
            texto_retorno += '</td>';

            texto_retorno += '</tr>';

        }
        texto_retorno += '</tbody></table>';

        $("#mostra_membros_igrejas").append(texto_retorno);
    });
}


function promoveParaPastor(cpf_membro, igreja_nome) {

    var dados = {
        "cpf_membro" : cpf_membro,
        "igreja_nome" : igreja_nome
    };

    $.ajax({
        method: "POST",
        url: "pastor/add_pastor.php",
        data: dados
    }).done((retorno) => {
        alert(retorno);
    })
}

function listaMembrosIgreja() {

    var igreja_nome = $("#membro_igreja_nome").val();
    var membro_nome = $("#proc_membro_nome").val();

    var dados = {
            "nome_igreja" : igreja_nome,
            "nome_membro" : membro_nome
    };

    $("#mostra_membros_igreja").empty();


    $.ajax({
        method: "GET",
        url: "membro/lista_membros_igreja.php",
        data:   dados
    }).done((retorno) => {

        retorno = JSON.parse(retorno);

        var texto_retorno = '<table class="table table-striped" style="width:100%;"><thead><tr><th style="width:5%;">#</th><th style="width:95%;">Nome</th></tr></thead>';
        texto_retorno += '<tbody>';
        //
        for (i in retorno) {

            var n = parseInt(parseInt(i)+1);

            texto_retorno += '<tr>';
            texto_retorno += '<td>'+ n +'</td>';
            texto_retorno +='<td>';

            texto_retorno += '<a role="button" data-toggle="collapse" href="#collapse'+n+'" aria-expanded="false" aria-controls="collapse'+n+'">';
            texto_retorno += '' + retorno[i].membro_nome+ '';
            texto_retorno += '</a>';

            texto_retorno += '<div class="collapse" id="collapse'+n+'">';
            texto_retorno +=    '<div class="well">';
            texto_retorno +=        '<p class="recuo">';
            texto_retorno +=            'CPF: '+ retorno[i].membro_cpf + '<br>';
            texto_retorno +=        '</p>';

            texto_retorno +=        '<p class="recuo">';
            texto_retorno +=            'Endereço: ' + retorno[i].rua + ', ' + retorno[i].numero;
            texto_retorno +=            ', ' + retorno[i].bairro + ', ' + retorno[i].cep;
            texto_retorno +=        '</p>';
            texto_retorno +=    '</div>';

            texto_retorno += '</div>';
            texto_retorno += '</td>';

            texto_retorno += '</tr>';

        }
        texto_retorno += '</tbody></table>';

        $("#mostra_membros_igreja").append(texto_retorno);
    });
}

function listaPastores() {

    var igreja_nome = $("#membro_igreja_nome").val();
    var pastor_nome = $("#proc_pastor_nome").val();

    var dados = {
            "igreja_nome" : igreja_nome,
            "pastor_nome" : pastor_nome
    };

    $("#mostra_pastores").empty();

    $.ajax({
        method: "GET",
        url: "pastor/lista_pastores.php",
        data:   dados
    }).done((retorno) => {

        console.log(retorno);
        

        retorno = JSON.parse(retorno);

        var texto_retorno = '<table class="table table-striped" style="width:100%;"><thead><tr><th style="width:5%;">#</th><th style="width:95%;">Nome</th></tr></thead>';
        texto_retorno += '<tbody>';
        //
        for (i in retorno) {

            var n = parseInt(parseInt(i)+1);

            texto_retorno += '<tr>';
            texto_retorno += '<td>'+ n +'</td>';
            texto_retorno +='<td>';

            texto_retorno += '<a role="button" data-toggle="collapse" href="#collapse'+n+'" aria-expanded="false" aria-controls="collapse'+n+'">';
            texto_retorno += '' + retorno[i].membro_nome+ '';
            texto_retorno += '</a>';

            texto_retorno += '<div class="collapse" id="collapse'+n+'">';
            texto_retorno +=    '<div class="well">';
            texto_retorno +=        '<p class="recuo">';
            texto_retorno +=            'CPF: '+ retorno[i].membro_cpf + '<br>';
            texto_retorno +=        '</p>';

            texto_retorno +=        '<p class="recuo">';
            texto_retorno +=            'Endereço: ' + retorno[i].rua + ', ' + retorno[i].numero;
            texto_retorno +=            ', ' + retorno[i].bairro + ', ' + retorno[i].cep;
            texto_retorno +=        '</p>';
            texto_retorno +=    '</div>';

            texto_retorno += '</div>';
            texto_retorno += '</td>';

            texto_retorno += '</tr>';

        }
        texto_retorno += '</tbody></table>';

        $("#mostra_pastores").append(texto_retorno);
    });
}
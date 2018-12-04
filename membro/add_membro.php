<?php
    include "../conecta.php";

    $query = "UPDATE igrejas SET igreja_membros = array_append(igreja_membros,";
    $query .= "ROW('" . $_POST["membro_cpf"] .          "',";
    $query .= "'" . $_POST["membro_nome"] .             "',";
    $query .= "'" . $_POST["membro_email"] .            "',";
    $query .= "'" . $_POST["membro_sexo"] .             "',";
    $query .= "'" . $_POST["membro_nasc"] .             "',";
    $query .= "'" . $_POST["membro_telefone"] .         "',";
    $query .= "ROW('" . $_POST["membro_cep"] .          "',";
    $query .= "'" . $_POST["membro_rua"] .              "',";
    $query .= "'" . $_POST["membro_numero"] .             "',";
    $query .= "'" . $_POST["membro_complemento"] .             "',";
    $query .= "'" . $_POST["membro_bairro"] .             "',";
    $query .= "'" . $_POST["membro_cidade"] .             "',";
    $query .= "'" . $_POST["membro_uf"] .             "'))::membro_ty)";
    $query .= "WHERE igreja_nome = '" . $_POST["membro_igreja_nome"] . "';";


    $conn->query($query);

?>

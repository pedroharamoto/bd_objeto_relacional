<?php

include '../conecta.php';

$igreja_nome = $_GET["nome_igreja"];
$condicao = "";

if($igreja_nome){
    $condicao .= " WHERE igreja_nome = '" . $igreja_nome . "'";
}

$sql = "select membro_cpf, membro_nome, (membro_end).*, igreja_nome,membro_tel,membro_email,membro_sexo,membro_nasc from (select igreja_nome, (unnest(igreja_membros)).* from igrejas " . $condicao . ") p where membro_nome like '%". $_GET["nome_membro"] ."%';";


$query = $conn->prepare($sql);

$query->execute();

$result = $query->fetchAll();

print json_encode($result);

?>
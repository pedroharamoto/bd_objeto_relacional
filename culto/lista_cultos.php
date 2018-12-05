<?php
include "../conecta.php";

$igreja_nome = $_GET["igreja_nome"];
$culto_preletor = $_GET["culto_preletor"];
$condicao = "";

if($igreja_nome){
    $condicao .= "WHERE igreja_nome = '" . $igreja_nome . "'";
}

$sql = "SELECT * from (SELECT igreja_nome,(unnest(igreja_cultos)).* FROM igrejas " . $condicao . ") p where culto_preletor like '%". $culto_preletor . "%';";

$query = $conn->prepare($sql);
$query->execute();

$result = $query->fetchAll();

print json_encode($result);

?>

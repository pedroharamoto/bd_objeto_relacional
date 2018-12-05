<?php
include "../conecta.php";

$sql = "SELECT igreja_nome, (igreja_end).cidade, (igreja_pastor).membro_nome, (igreja_pastor).membro_end.*, (igreja_pastor).membro_tel FROM igrejas where igreja_nome like '%" . $_GET["igreja_nome"] . "%';";

//echo $sql;
$query = $conn->prepare($sql);
$query->execute();

$result = $query->fetchAll();

print json_encode($result);

?>

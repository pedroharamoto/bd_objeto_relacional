<?php
include "../conecta.php";

$sql = "SELECT igreja_nome, (igreja_end).cidade FROM igrejas where igreja_nome like '%%';";

$query = $conn->prepare($sql);
$query->execute();

$result = $query->fetchAll();

print json_encode($result);

?>

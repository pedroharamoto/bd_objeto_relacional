<?php
include "../conecta.php";

$query = "INSERT INTO igrejas (igreja_nome, igreja_end) VALUES ";
$query .= "('" . $_POST["igreja_nome"] .    "',";
$query .= "ROW('" . $_POST["igreja_cep"] .   "',";
$query .= "'" . $_POST["igreja_rua"] .            "',";
$query .= "'" . $_POST["igreja_numero"] .         "',";
$query .= "'" . $_POST["igreja_complemento"] .    "',";
$query .= "'" . $_POST["igreja_bairro"] .         "',";
$query .= "'" . $_POST["igreja_cidade"] .         "',";
$query .= "'" . $_POST["igreja_uf"] .             "'));";


$conn->query($query);

print "OK";






?>

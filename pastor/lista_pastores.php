<?php
include "../conecta.php";


    $igreja_nome = $_GET["igreja_nome"];
    $condicao = "";

    if($igreja_nome) {
        $condicao = " AND igreja_nome = '". $igreja_nome ."'";
    }

    $sql = "select (igreja_pastor).* from igrejas where (igreja_pastor).membro_nome like '%". $_GET["pastor_nome"] ."%'". $condicao. ";";

    
    $query = $conn->prepare($sql);
    $query->execute();

    $result = $query->fetchAll();

    print json_encode($result);

?>

<?php

    include '../conecta.php';

    $sql = "select membro_cpf, membro_nome, (membro_end).* from (select (unnest(igreja_membros)).* from igrejas where igreja_nome = '". $_GET["nome_igreja"] ."') p where membro_nome like '". $_GET["nome_membro"] ."%';";

    $query = $conn->prepare($sql);

    $query->execute();

    $result = $query->fetchAll();

    print json_encode($result);

?>
<?php
include "../conecta.php";

    $sql = "select membro_cpf, membro_nome, (membro_end).* from (select (unnest(array_remove(igreja_membros, pastor))).* from igrejas where igreja_nome = '". $_GET["igreja_nome"] ."') p where membro_nome like '". $_GET["membro_nome"] ."%';";

    $query = $conn->prepare($sql);
    $query->execute();

    $result = $query->fetchAll();

    print json_encode($result);

?>

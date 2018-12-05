<?php
    include "../conecta.php";

    $query = "UPDATE igrejas SET igreja_pastor = (SELECT x::membro_ty FROM (SELECT (unnest(igreja_membros)).* FROM igrejas) x WHERE membro_cpf = '".$_POST["cpf_membro"]."') where igreja_nome = '".$_POST["igreja_nome"]."'";

    $conn->query($query);

    print "Membro promovido com sucesso!";
?>

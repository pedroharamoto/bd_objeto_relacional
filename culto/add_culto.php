<?php
    include "../conecta.php";

    $query = "UPDATE igrejas SET igreja_cultos = array_append(igreja_cultos,";
    $query .= "ROW('" . $_POST["culto_preletor"] .          "',";
    $query .= "'" . $_POST["culto_data"] .             "',";
    $query .= "'" . $_POST["culto_hora"] .            "',";
    $query .= "'" . $_POST["culto_oferta"] .             "',";
    $query .= "'" . $_POST["culto_dizimo"] .             "',";
    $query .= "'" . $_POST["culto_presentes"] .             "')::culto_ty)";
    $query .= "WHERE igreja_nome = '" . $_POST["igreja_nome"] . "';";


    $conn->query($query);
?>

<?php

$pdo = new PDO("pgsql:host=192.168.1.105;dbname=postgres", "postgres", "pipoco");


$sql = 'SELECT pastor FROM igrejas';


foreach ($pdo->query($sql) as $row) {
    foreach(array_keys($row) as $paramName)
        echo $paramName . "<br>";
}


?>

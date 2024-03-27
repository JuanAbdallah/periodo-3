<?php

require_once "Database.php";

$db = new Database();

$con = $db->getConnection();

require_once "formulario.php";

$con = $db->closeConnection();

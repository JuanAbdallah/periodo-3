<?php

    class Database{

        static $db = null;

        public function __construct() {
            
            if(self::$db == null){
                self::$db = new mysqli('mariadb', 'root', 'root', 'tads');

                if(self::$db->connect_error > 0){
                    die("Ocorreu um erro {$db->connect_error}");
                }
            } 
        }

        function getConnection(){
            return self::$db;
        }

        function closeConnection(){
            self::$db->close();
        }
    }


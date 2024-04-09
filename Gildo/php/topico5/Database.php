<?php
    
    class Database{
        static $db = null;

        public function __construct(){
            
            if(self::$db == null){
                self::$db = new PDO("mysql:host=mariadb;dbname=tads","root","root");
            }
        }

        function getConnection() {
            return self::$db;
        }

        function closeConnection(){
            self::$db->close();
        }
    }
    

    
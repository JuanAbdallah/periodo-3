<?php
    
    class DataBase{
        static $db = null;

        public function __construct(){
            if(self::$db == null){
                self::$db = new mysqli('mariadb','root','root','tads');
    
                if(self::$db->connect_errno > 0){
                    die("Ocorreu um erro{self::$db->connect_error}");
                }
            }
        }

        function getConnection() {
            return self::$db;
        }

        function closeConnection(){
            self::$db->close();
        }
    }
    

    // $query = 'SELECT * FROM tads.alunos;';
    // $result = $db->query($query);
    // while ($linha = $result->fetch_assoc()) {
    //     echo"<p> {$linha["id"]} {$linha["nome"]} {$linha["matricula"]}</p>";
    // }

    // $db->close();
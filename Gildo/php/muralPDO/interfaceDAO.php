<?php

interface interfaceDAO {
    public static function criar($dados);
    public static function deletar($id);
    public static function buscar($id);
    public static function buscarTodos();
    public static function atualizar($id,$dados);

}
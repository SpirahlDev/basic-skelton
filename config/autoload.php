<?php

function default_loader($class){
    $class=str_replace("\\","/" , $class);

    $class=preg_replace("/^App/","app" , $class);

    $file=dirname(__DIR__)."/".$class.".php";
    
    if(file_exists($file)){
        require_once($file);
    }
}

spl_autoload_register("default_loader");

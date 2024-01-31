<?php
require_once(dirname(__DIR__)."/config/autoload.php");

$url=$_REQUEST["controller"];

if(empty($url)){
    header("HTTP/1.0 404 Not Found");
    echo "Ressource non spécifié";
    exit;
}

$request_segments=explode("/",$url);

$controller=ucfirst(array_shift($request_segments));


$className="App\Controllers\\".$controller."Controller";

if(!class_exists($className)){
    echo "route inconnu";
    exit;
}


$clientInfo=new $className();
$clientInfo->handle($request_segments);









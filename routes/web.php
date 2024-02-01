<?php
require_once(dirname(__DIR__)."/config/autoload.php");

$url=$_REQUEST['uri'];

$url=(empty($url) ?"home": $url);

$request_segments=explode("/",$url);

$controller=ucfirst(array_shift($request_segments));


$className="App\Controllers\Web\\".$controller."Controller";

if(!class_exists($className)){
    echo "404 error";
    exit;
}

$controller=new $className();
$controller->handle($request_segments);
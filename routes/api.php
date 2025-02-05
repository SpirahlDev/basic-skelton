<?php
use App\Core\Application;
use App\Controllers\ExempleController;

require_once(dirname(__DIR__)."/config/autoload.php");

$url=$_REQUEST["route"];

if(empty($url)){
    header("HTTP/1.0 404 Not Found");
    echo "Ressource non spécifié";
    exit;
}




$app=new Application($url);


$app->post('task',ExempleController::class);
$app->get('task',ExempleController::class);

$app->watch();




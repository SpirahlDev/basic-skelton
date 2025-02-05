<?php
namespace App\Controllers;
use App\Core\Controller\ApiController;
require_once(dirname(__DIR__)."/../../config/autoload.php");

class ExempleController extends ApiController{

    public function __construct(){
        parent::__construct();
        echo "Hello exemple";
    }

    public function getExemple(){
        echo "exemple";
    }
}

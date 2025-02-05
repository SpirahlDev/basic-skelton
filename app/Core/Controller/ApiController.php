<?php

namespace App\Core\Controller;
use App\Core\Controller\Controller;

require_once(dirname(__DIR__).'/../../vendor/autoload.php');

class ApiController extends Controller{

    public function __construct(){
        parent::__construct();
        $this->initRequestBody();
    }

    public function initRequestBody(){
        $this->request_body=$this->getJsonPayload();
    }

   
}
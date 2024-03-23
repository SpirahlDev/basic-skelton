<?php
namespace App\Controllers;
use App\Controllers\Api\ApiBaseController;


class ClientController extends ApiBaseController{


    public function __construct(){
        parent::__construct();
    }
    
    public function getclient(){
        $data = ["Marco","Anni","Salamanca"];
        print_r($data);
    }

    public function createClient(){
        $method=$_SERVER['REQUEST_METHOD'];

        if($method==='POST'){

            print_r($this->request_body);
            return;
        }

        if($method==='PUT'){
            return;

        }


        echo "cette route ne supporte $.... ".$method;
    }
}

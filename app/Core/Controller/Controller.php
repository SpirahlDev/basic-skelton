<?php
namespace App\Core\Controller;
require_once(dirname(__DIR__).'/../../vendor/autoload.php');

require_once(dirname(__DIR__)."/../../config/autoload.php");

use Firebase\JWT\JWT;

abstract class Controller{
    protected string $index;
    protected array|null $request_body;

    protected array $request_pathes=[];

    public function __construct(){
        // TODO initialiser aussi les autre paramètre basic, comme les headers
    }

    public function handle(string $url){

        // if(!empty($pathes) && is_array($pathes)){
        //     $method=array_shift($pathes);

        //     if(method_exists($this, $method)){
        //         $this->$method();
        //     }else{
        //         echo "action introuvable";
        //     }
        // }else{//if the previous condition is not respected, it's for sure a web page request
        //     //so we can redirect the client to the index associated to the controller
            
        //     if(method_exists($this, "index")){
        //         $this->index();
        //     }else{
        //         echo "action introuvable";
        //     }
        // }

    }

    public function index(){}


    public function getSecretKey():string{
        $keysFile=require_once(dirname(__DIR__).'/../config/secretKey.php');
        $secretKey=$keysFile['secretKey'];
        return $secretKey;
    }

    protected static function getJsonPayload():array|null{
        $json_data = file_get_contents('php://input');
        $data=json_decode($json_data,true);

        return $data;
    }


    protected function getToken(array $data):string{
        $secretKey = $this->getSecretKey();
        $token = JWT::encode($data, $secretKey, 'HS256');
        return $token;
    }

    public abstract function initRequestBody();

}
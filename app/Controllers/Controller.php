<?php
namespace App\Controllers;
require_once(dirname(__DIR__).'/../vendor/autoload.php');
use Firebase\JWT\JWT;

abstract class Controller{
    protected string $index;
    protected array|null $request_body;

    protected array $request_pathes=[];

    public function __construct(){
        $request_body=$this->getJsonBody();
        // TODO initialiser aussi les autre paramètre basic, comme les headers
    }

    public function handle($pathes){

        if(!empty($pathes) && is_array($pathes)){
            $method=array_shift($pathes);

            if(method_exists($this, $method)){
                $this->$method();
            }else{
                echo "action introuvable";
            }
        }else{//if the previous condition is not respected, it's for sure a web page request
            //so we can redirect the client to the index associated to the controller
            
            if(method_exists($this, "index")){
                $this->index();
            }else{
                echo "action introuvable";
            }
        }

        $this->request_pathes = $pathes;
    }

    public static function getJsonBody():array|null{
        $json_data = file_get_contents('php://input');
        $data=json_decode($json_data,true);

        return $data;
    }

    public function index(){}

    public function generateView(string $view_name,string $page_title){
        $page=dirname(__DIR__).'/../ressources/view/index.php';
        
        if(file_exists($page)){
            ob_start();
                $page_title=(empty($page_title)) ?'': $page_title;
                $_token=$this->pageToken($view_name);

                include_once($page);
            $view=ob_get_clean();

            echo $view;
        }else{
            throw new \Exception("La vue ".$view_name." est introuvable");
        }
    }

    protected function pageToken($view_name):string{

        $token_data=[
            "role"=>"aync-page-data",
            "main-component"=>$view_name
        ];

        $secretKey=$this->getSecretKey();

        $token = JWT::encode($token_data, $secretKey, 'HS256');
        return $token;
    }

    public function getSecretKey():string{
        $keysFile=require_once(dirname(__DIR__).'/../config/secretKey.php');
        $secretKey=$keysFile['secretKey'];
        return $secretKey;
    }
}
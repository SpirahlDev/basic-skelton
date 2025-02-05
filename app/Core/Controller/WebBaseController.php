<?php
namespace App\Controllers\Web;
require_once(dirname(__DIR__).'/../../vendor/autoload.php');

use Firebase\JWT\JWT;
use App\Core\Controller\Controller;


abstract class WebBaseController extends Controller{
    protected const VIEW_NAME="";
    protected const TITLE="";

    public function index(){
        try {
            $this->generateView(static::VIEW_NAME,static::TITLE);
        } catch (\Exception $th) {
            echo "introuvable";
        }
    }

    public function generateView(string $view_name,string $page_title=""){
        $page=dirname(__DIR__).'/../../ressources/view/index.php';
        
        if(file_exists($page)){
            ob_start();
                $page_title;
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

    protected abstract function getComponentsList():array;

    public function handle(string $url){
        
        
    }
    
}
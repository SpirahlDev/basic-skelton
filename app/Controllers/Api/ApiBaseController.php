<?php
namespace App\Controllers\Api;
use App\Controllers\BaseController;
require_once(dirname(__DIR__).'/../../vendor/autoload.php');

use Firebase\JWT\JWT;

abstract class ApiBaseController extends BaseController{
    protected string $index;
    protected array|null $request_body;

    protected array $request_pathes=[];

    public function __construct(){
        $request_body=$this->getJsonBody();
        // TODO initialiser aussi les autre paramètre basic, comme les headers
    }

    public function handle(array $pathes){

        if(!empty($pathes) && is_array($pathes)){
            $method=array_shift($pathes);

            if(method_exists($this, $method)){
                $this->$method();
            }else{
                echo "action introuvable";
            }
        }else{
            echo "action introuvable";
        }

        $this->request_pathes = $pathes;
    }

    protected static function getJsonBody():array|null{
        $json_data = file_get_contents('php://input');
        $data=json_decode($json_data,true);

        return $data;
    }


    public function generateToken():string{
        $secretKey=""; //TODO use JWT to generate token
        return $secretKey;
    }
}
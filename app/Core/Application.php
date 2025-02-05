<?php
namespace App\Core;
// require_once(dirname(__DIR__).'/../vendor/autoload.php');
require_once(dirname(__DIR__)."/../config/autoload.php");

class Application{

    private array $requestStack=[];
    private string $method;
    private string $request_url;

    public function __construct(string $request_url){
        $this->request_url=$request_url;
        $this->init();
    }

    public function init(){
        $this->method=$_SERVER['REQUEST_METHOD'];

        
    }

    private function tryHandling(string $route){
        // foreach($this->requestStack as $route=>$method){
        //     if($route==$this->request_url){
        //         $method['controller']->handle($this->request_url);
        //     }
        // }
        
        if(isset($this->requestStack[$route]) && isset($this->requestStack[$route][$this->method])){
            $ressource=$this->requestStack[$route];
            $controller=new $ressource[$this->method]['controller']();

            $controller->handle($this->request_url);
            exit;
        }
    }

    public function post(string $route,$controller){
        $this->requestStack[$route]= ['POST'=>['controller'=>$controller]];
        $this->tryHandling($route);
    }

    public function get(string $route,$controller){
        $this->requestStack[$route]= ['GET'=>['controller'=>$controller]];
        $this->tryHandling($route);
    }

    public function put(string $route, $controller) {
        $this->requestStack[$route] = ['PUT'=>['controller'=>$controller]];
        
        // echo print_r($this->requestStack);
    }

    public function delete(string $route, $controller) {
        $this->requestStack[$route] = ['DELETE'=>['controller'=>$controller]];
        
        echo print_r($this->requestStack); 
    }

    public function patch(string $route, $controller) {
        $this->requestStack[$route] = ['PATCH'=>['controller'=>$controller]];
        
        echo print_r($this->requestStack);
    }

    public function debug(){
        echo print_r($this->requestStack);
    }

    public function watch() {
        echo "404 Not found";
    }
}

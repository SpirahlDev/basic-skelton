<?php

namespace App\Controllers;

class HomeController extends Controller{
    const INDEX="home";
    const TITLE="Accueil";

    public function index(){
        try {
            $this->generateView(self::INDEX,self::TITLE);
        } catch (\Exception $th) {
            echo "introuvable";
        }
    }
    
}
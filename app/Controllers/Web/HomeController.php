<?php

namespace App\Controllers\Web;

/**
 * this class is call for : 
 * @index "home"
 */
class HomeController extends WebBaseController{
    protected const VIEW_NAME="home";
    protected const TITLE="Accueil";


    protected function getComponentsList(): array{
        $components = [];
        return $components;
    }

}
<?php
namespace App\Controllers\Web;

/**
 * this class is call for : 
 * @index "game"
 */
class GameController extends WebBaseController{
    const TITLE="Morpion";
    const VIEW_NAME="tic-tac-toe";


    protected function getComponentsList(): array{
        $components = [];
        return $components;
    }
}
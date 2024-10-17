<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::view('/about','about');

Route::get('/user/{name}',function(){
    return view('user');
});

Route::get('userid/{id}',function(int $id){
    return '<h1>User Id: ' . $id .'</h1>';
});

Route::get('/name/{username}', function  ($username){
    return '<h1>Username is: '. $username  .'</h1>';
})->whereAlpha('username');
<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/open-letter', function () {
    return view('pages.open-letter');
});

Route::post('/pages/process-card', 'CardController@process')->name('process.card');
Route::get('/open-letter', 'SomeController@showOpenLetter')->name('open.letter');
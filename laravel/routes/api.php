<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

use App\Http\Controllers\produitController;
   
   Route::get('/produits', [ProduitController::class, 'index']);
   Route::post('/produit', [ProduitController::class, 'store']);
   Route::get('/produit/{id}', [ProduitController::class, 'show']);
   Route::put('/produit/{id}', [ProduitController::class, 'update']);
   Route::delete('/produit/{id}', [ProduitController::class, 'destroy']);
   
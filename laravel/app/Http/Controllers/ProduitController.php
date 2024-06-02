<?php
namespace App\Http\Controllers;
use App\Models\produit;
 use Illuminate\Http\Request;
   class ProduitController extends Controller
   {
       public function index()
       {
           return produit::all();
       }

       public function store(Request $request)
       {
           return produit::create($request->all());
           
       }

       public function show($id)
       {
           return produit::find($id);
       }
       public function update(Request $request, $id)
       {
           $produit = produit::find($id);
           $produit->update($request->all());
           return $produit;
       }

       public function destroy($id)
       {
           return produit::destroy($id);
       }
   }

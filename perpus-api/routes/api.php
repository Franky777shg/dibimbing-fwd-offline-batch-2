<?php

use App\Http\Controllers\BukuController;
use App\Models\Buku;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Get All Books
Route::get('/buku', [BukuController::class, 'index'])->name('get-all-books');

// Create Books
Route::post('/buku', [BukuController::class, 'store'])->name('create-book');

// Update Books
Route::patch('/buku/{buku}', [BukuController::class, 'update'])->name('update-books');

// Delete books
Route::delete('/buku/{buku}', [BukuController::class, 'destroy'])->name('delete-books');
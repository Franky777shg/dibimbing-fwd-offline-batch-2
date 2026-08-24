<?php

namespace App\Http\Controllers;

use App\Models\Buku;
use App\Models\Penulis;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BukuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $buku = Buku::orderBy('buku_id')->get();

        return response()->json($buku, Response::HTTP_CREATED);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi data dari body
        $validate = $request->validate([
            'judul' => ['required', 'min:1', 'string'],
            'penulis' => ['required', 'string']
        ]);

        // Ambil data dari body di field penulis
        $nama = $request->input('penulis');

        // Get data dari table penulis dengan filter berdasarkan nama dari body
        $penulis = Penulis::where('nama', '=', $nama)->first(); // { penulis_id: 17, nama: "Ahmad Fuadi" }

        // Create ke dalam table buku berdasarkan:
        // judul nya diambil dari body yang sudah validated
        // penulis_id nya diambil dari data hasil get ke table penulis dengan filter nama
        $buku = Buku::create([
            'judul' => $validate['judul'],
            'penulis_id' => $penulis->penulis_id
        ]);

        return response()->json($buku, Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Buku $buku)
    {
        // Validasi dari body untuk judul
        $validate = $request->validate([
            'judul' => ['required', 'string', 'min:1']
        ]);

        // Proses update ke table buku
        $buku->update($validate);

        // Response dari controller update judul buku
        return response()->json($buku, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Buku $buku)
    {
        $buku->delete();

        return response()->json($buku, Response::HTTP_OK);
    }
}

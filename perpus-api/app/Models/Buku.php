<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Buku extends Model
{
    protected $table = 'buku';
    
    protected $primaryKey = 'buku_id';

    public $timestamps = false;

    protected $fillable = [
        'judul',
        'penulis_id'
    ];

    protected function casts():array
    {
        return [
            'judul' => 'string',
            'penulis_id' => 'integer'
        ];
    }
}

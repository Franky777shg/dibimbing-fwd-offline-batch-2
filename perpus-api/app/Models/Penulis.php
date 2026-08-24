<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Penulis extends Model
{
    protected $table = 'penulis';

    protected $primaryKey = 'penulis_id';

    public $timestamps = false;

    protected $fillable = [
        'nama'
    ];

    protected function casts():array
    {
        return [
            'nama' => 'string'
        ];
    }
}

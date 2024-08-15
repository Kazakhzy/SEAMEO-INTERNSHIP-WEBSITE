<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Languages extends Model
{
    use HasFactory;

    protected $table = 'languages';

    protected $fillable = [
        'id_user',
        'language_1',
        'speak_language_1',
        'read_language_1',
        'write_language_1',
        'understand_language_1',
        'language_2',
        'speak_language_2',
        'read_language_2',
        'write_language_2',
        'understand_language_2',
        'language_3',
        'speak_language_3',
        'read_language_3',
        'write_language_3',
        'understand_language_3',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EducationDropdowns extends Model
{
    use HasFactory;

    protected $table = 'education_dropdowns';

    protected $fillable = [
        'education',
    ];
}

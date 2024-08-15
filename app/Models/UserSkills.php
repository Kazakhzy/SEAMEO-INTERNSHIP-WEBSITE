<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSkills extends Model
{
    use HasFactory;

    protected $table = 'user_skills';

    protected $fillable = [
        'id_user',
        'computer_skills',
        'name_academic',
        'preferred_date',
        'reason_interest',
        'topic_interested',
        'preferred_nature',
        'specific_skills',
        'expected_output',
        'current_source',
    ];
}

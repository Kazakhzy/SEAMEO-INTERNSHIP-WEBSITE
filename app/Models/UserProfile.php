<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    use HasFactory;

    protected $table = 'user_profiles';

    protected $fillable = [
        'id_user',
        'profil',
        'place_birth',
        'date_birth',
        'gender',
        'nik_passport',
        'school_university',
        'nim_student',
        'education',
        'religion',
        'address_id',
        'phone',
        'reset_form',
    ];
}

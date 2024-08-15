<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;


    protected $table = 'documents';

    protected $fillable = [
        'id_user',
        'cv',
        'portfolio_certificate',
        'incomplete_studies',
        'letter_commitment',
        'letter_non_participant',
        'passport',
        'health_insurance',
        'letter_recommendation',

        // 'language_1',
        // 'speak_language_1',
        // 'read_language_1',
        // 'write_language_1',
        // 'understand_language_1',
        // 'language_2',
        // 'speak_language_2',
        // 'read_language_2',
        // 'write_language_2',
        // 'understand_language_2',
        // 'language_3',
        // 'speak_language_3',
        // 'read_language_3',
        // 'write_language_3',
        // 'understand_language_3',

        // 'computer_skills',
        // 'name_academic',
        // 'preferred_date',
        // 'reason_interest',
        // 'topic_interested',
        // 'preferred_nature',
        // 'spesific_skills',
        // 'expected_output',
        // 'current_source',
    ];
}

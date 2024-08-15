<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->id();
            $table->integer('id_user');
            $table->string('profil');
            $table->string('place_birth');
            $table->date('date_birth');
            $table->enum('gender', ['male', 'female']);
            $table->string('nik_passport');
            $table->string('school_university');
            $table->string('nim_student');
            $table->string('education');
            $table->enum('religion', ['Islam', 'Christian', 'Protestant', 'Confucius', 'Hindu', 'Buddha', 'Others']);
            $table->string('address_id');
            $table->string('phone');
            $table->enum('reset_form', ['no', 'yes'])->default('no');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_profiles');
    }
};

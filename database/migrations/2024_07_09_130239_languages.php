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
        Schema::create('languages', function (Blueprint $table) {
            $table->id();
            $table->string('id_user');
            $table->string('language_1');
            $table->string('speak_language_1')->nullable();
            $table->string('read_language_1')->nullable();
            $table->string('write_language_1')->nullable();
            $table->string('understand_language_1')->nullable();
            $table->string('language_2')->nullable();
            $table->string('speak_language_2')->nullable();
            $table->string('read_language_2')->nullable();
            $table->string('write_language_2')->nullable();
            $table->string('understand_language_2')->nullable();
            $table->string('language_3')->nullable();
            $table->string('speak_language_3')->nullable();
            $table->string('read_language_3')->nullable();
            $table->string('write_language_3')->nullable();
            $table->string('understand_language_3')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};

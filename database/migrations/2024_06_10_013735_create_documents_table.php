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
        Schema::create('documents', function (Blueprint $table) {
            $table->id();

            $table->integer('id_user');
            $table->string('cv');
            $table->string('portfolio_certificate')->nullable();
            $table->string('incomplete_studies');
            $table->string('letter_commitment');
            $table->string('letter_non_participant');
            $table->string('passport')->nullable();
            $table->string('health_insurance')->nullable();
            $table->string('letter_recommendation');

            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('documents');
    }
};

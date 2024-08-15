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
        Schema::create('user_skills', function (Blueprint $table) {
            $table->id();
            $table->string('id_user');
            $table->string('computer_skills');
            $table->string('name_academic');
            $table->string('preferred_date');
            $table->string('reason_interest');
            $table->string('topic_interested');
            $table->string('preferred_nature');
            $table->string('specific_skills');
            $table->string('expected_output');
            $table->string('current_source');
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

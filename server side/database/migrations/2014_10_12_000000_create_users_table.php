<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('username')->unique()->nullable();
            $table->string('slug')->unique()->nullable();;
            $table->string('url')->nullable();
            $table->string('email')->unique();
            $table->string('avatar')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->boolean('is_admin')->default(false);
            $table->boolean('is_handyman')->default(false);
            $table->boolean('is_client')->default(true);
            $table->boolean('is_moderator')->default(false);
            $table->boolean('is_available_to_hire')->default(false);
            $table->boolean('is_online')->default(false);
            $table->string('password')->nullable();
            $table->longText('bio')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('address')->nullable();
            $table->string('country')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('website')->nullable();
            $table->json('education')->nullable();
            $table->json('certifications')->nullable();
            $table->json('experience')->nullable();
            $table->string('facebook_social_link')->nullable();
            $table->string('linkedin_social_link')->nullable();

            $table->string('twitter_social_link')->nullable();
            $table->string('gender')->nullable();
            $table->string('work_time_length')->nullable();
            $table->string('work_hours')->nullable();
            $table->string('work_place')->nullable();
            $table->float('salary')->default(0)->nullable();


            $table->json('skills')->nullable();



            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};

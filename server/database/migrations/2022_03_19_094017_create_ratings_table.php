<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


/*
user_id: where we will store the User who posted the reviews/rating
product_id: where we will store the Product that the reviews/rating belongs to
rating: an integer value where we will store the rating from 1 to 5
comment: will store the content of the comment of the reviews
*/
return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ratings', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('gig_id')->nullable();
            $table->unsignedBigInteger('client_request_id')->nullable();
            $table->unsignedBigInteger('client_id');
            $table->unsignedBigInteger('handyman_id');
            $table->integer('rating');
            $table->text('comment');
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
        Schema::dropIfExists('ratings');
    }
};

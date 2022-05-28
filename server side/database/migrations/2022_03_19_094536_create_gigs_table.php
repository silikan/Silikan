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
        Schema::create('gigs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->nullable();
            $table->text('description');
            $table->json('premium');
            $table->json('standard');
            $table->json('basic');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger("cart_item_id")->nullable();
            $table->unsignedBigInteger("task_item_id")->nullable();
            $table->integer('total_views')->default(0);
            $table->json('paymentMethod')->nullable();
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
        Schema::dropIfExists('gigs');
    }
};

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
        Schema::create('task_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('task_id');
            $table->json('plan');
            $table->boolean('is_pending')->default(true);
            $table->boolean('is_accepted')->default(false);
            $table->boolean('is_completed')->default(false);
            $table->boolean('is_cancelled')->default(false);
            $table->boolean('is_in_progress')->default(false);
            $table->boolean('is_on_checkout')->default(false);
            $table->boolean('is_declined')->default(false);
            $table->boolean('is_paid')->default(false);
            $table->boolean('is_confirmed')->default(false);
            $table->string('status')->default('pending');
            $table->string('type');
            $table->string('client_id');
            $table->string('handyman_id');

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
        Schema::dropIfExists('task_items');
    }
};

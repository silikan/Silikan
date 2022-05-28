<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory(1)->create(
            [
                'name' => 'Luke Skywalker',
                'email' => 'luke@jedi.com',
                'email_verified_at' => null,
            ]
        );
        \App\Models\User::factory(500)->create();

        $categories = [
            'Cleaning',
            'Cooking',
            'Plumbing',
            'Electrical',
            'Painting',
            'Moving',
            'Carpentry',
            'Building',
            'Massage',
            'Tutoring',
            'Woodwork',
            'Other',
        ];
        //seed the database using this data
        foreach ($categories as $category) {
            \App\Models\Category::create([

                'title' => $category,
            ]);
        }



    }
}

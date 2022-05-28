<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
class Gig extends Model
{
    use HasFactory , Searchable;
    public function cartItems()
    {
        return $this->belongsToMany(CartItem::class , 'cart_item_gig' );
    }
    public function taskItems()
    {
        return $this->belongsToMany(TaskItem::class , 'gig_task_item');
    }

    public function ratings()
    {
        return $this->hasMany(Rating::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }



    //belongs to many categories
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_gig');
    }

    //gig hasmany images
    public function images()
    {
        return $this->hasMany(GigImages::class);
    }

    public function toSearchableArray()
    {

        // Customize array...

        return [
            'id' => $this->id,
            'title' => $this->title,

        ];
    }
}

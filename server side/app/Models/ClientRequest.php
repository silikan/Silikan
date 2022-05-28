<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class ClientRequest extends Model
{
    use HasFactory , Searchable;
    public function cartItems()
    {
        return $this->belongsToMany(CartItem::class , 'cart_item_client_request' );
    }

    public function taskItems()
    {
        return $this->belongsToMany(TaskItem::class , 'client_request_task_item' , 'client_request_id' , 'task_item_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_client_request');
    }

    public function images()
    {
        return $this->hasMany(RequestImages::class);
    }

    public function ratings()
    {
        return $this->hasMany(Rating::class);
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

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Category extends Model
{
    use HasFactory , Searchable;

    public function gigs()
    {
        return $this->belongsToMany(Gig::class, 'category_gig');
    }

    public function clientRequests()
    {
        return $this->belongsToMany(ClientRequest::class);
    }

    public function posts()
    {
        return $this->belongsToMany(Post::class, 'category_post');
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

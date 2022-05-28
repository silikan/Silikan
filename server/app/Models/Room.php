<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;


    public function chats()
    {
        return $this->hasMany(Chat::class);
    }
    public function users()
    {
        return $this->belongsToMany(User::class, 'room_user');
    }
}

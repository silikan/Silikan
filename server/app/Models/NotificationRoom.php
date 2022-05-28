<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NotificationRoom extends Model
{
    use HasFactory;
    public function notifications ()
    {
        return $this->hasMany(Notification::class);
    }
    public function User ()
    {
        return $this->belongsTo(User::class);
    }
}

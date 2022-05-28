<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;
    protected $casts = [
        'read' => 'boolean',
    ];
    public function NotificationRoom()
    {
        return $this->belongsTo(NotificationRoom::class);
    }
    public function User()
    {
        return $this->belongsTo(User::class);
    }
}

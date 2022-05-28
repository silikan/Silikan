<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskItem extends Model
{
    use HasFactory;
    protected $casts = [
        'is_completed' => 'boolean',
        'is_pending' => 'boolean',
        'is_accepted' => 'boolean',
        'is_cancelled' => 'boolean',
        'is_in_progress' => 'boolean',
        'is_declined' => 'boolean',
        'is_paid' => 'boolean',
        'is_on_checkout' => 'boolean',
        'is_confirmed' => 'boolean',

    ];
    public function gigs()
    {
        return $this->belongsToMany(Gig::class);
    }
    public function clientRequests()
    {
        return $this->belongsToMany(ClientRequest::class);
    }

    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    public function cartItems()
    {
        return $this->belongsToMany(CartItem::class );
    }
    public function transaction()
    {
        return $this->hasOne(Transaction::class);
    }
}





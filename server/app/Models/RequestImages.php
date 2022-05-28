<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestImages extends Model
{
    use HasFactory;
    //belongs to one request
    public function request()
    {
        return $this->belongsTo(ClientRequest::class);
    }
}

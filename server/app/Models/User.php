<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use App\Http\Resources\UserResource;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, Searchable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    public $asYouType = true;

    protected $fillable = [
        'name',
        'email',
        'password',
        'username',
        'bio',
        'date_of_birth',
        'phone_number',
        'address',
        'avatar',
        'country',
        'city',
        'state',
        'zip_code',
        'website',
        'education',
        'certifications',
        'experience',
        'facebook_social_link',
        'linkedin_social_link',
        'twitter_social_link',
        'skills',
        'gender',
        'is_client',
        'is_handyman',
        'is_admin',

        'is_moderator',
        'is_available_to_hire',
        'is_online',

        'work_time_length',
        'work_hours',
        'work_place',
        'salary'


    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_admin' => 'boolean',
        'is_handyman' => 'boolean',
        'is_client' => 'boolean',
        'is_moderator' => 'boolean',
        'is_available_to_hire' => 'boolean',
        'is_online' => 'boolean',

    ];

    public function reactions()
    {
        return $this->hasMany(User::class);
    }
    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function like(Likeable $likeable): self
    {
        if ($this->hasLiked($likeable)) {
            return $this;
        }

        (new Like())
            ->user()->associate($this)
            ->likeable()->associate($likeable)
            ->save();

        return $this;
    }

    public function unlike(Likeable $likeable): self
    {
        if (! $this->hasLiked($likeable)) {
            return $this;
        }

        $likeable->likes()
            ->whereHas('user', fn($q) => $q->whereId($this->id))
            ->delete();

        return $this;
    }

    public function hasLiked(Likeable $likeable): bool
    {
        if (! $likeable->exists) {
            return false;
        }

        return $likeable->likes()
            ->whereHas('user', fn($q) =>  $q->whereId($this->id))
            ->exists();
    }

        public function Posts () {
            return $this->hasMany(Post::class);
        }
        public function Comments () {
            return $this->hasMany(Comment::class);
        }
    public function NotificationRoom()
    {
        return $this->hasOne(NotificationRoom::class);
    }
    public function cart()
    {
        return $this->hasOne(Cart::class);
    }
    public function task()
    {
        return $this->hasOne(Task::class);
    }

    //user has many gigs
    public function gigs()
    {
        return $this->hasMany(Gig::class);
    }
    //user has many requests
    public function requests()
    {
        return $this->hasMany(ClientRequest::class);
    }

    //user has many

    public function rooms()
    {
        return $this->belongsToMany(Room::class, 'room_user');
    }
    public function chats()
    {
        return $this->hasMany(Chat::class);
    }
    public function isAdmin(): bool
    {
        return $this->is_admin;
    }
    public function isHandyman(): bool
    {
        return $this->is_handyman;
    }
    public function isClient(): bool
    {
        return $this->is_client;
    }
    public function isModerator(): bool
    {
        return $this->is_moderator;
    }
    public function isOnline(): bool
    {
        return $this->is_online;
    }
    public function isavailableToHire(): bool
    {
        return $this->is_available_to_hire;
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
            'name' => $this->name,
            'email' => $this->email,
        ];
    }
}

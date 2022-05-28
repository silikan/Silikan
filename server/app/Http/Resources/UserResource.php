<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\NotificationRoomResource;
use App\Models\NotificationRoom;
class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
      $password_is_null = false ;

      if(  is_null($this->password) ){

        $password_is_null = true ;
      }else{
        $password_is_null = false ;
      }

        return [
          'id' => $this->id,
          'name' => $this->name,
          'email' => $this->email,
          'avatar' => $this->avatar,
          'isAdmin' => $this->isAdmin(),
          'isHandyman' => $this->isHandyman(),
          'isClient' => $this->isClient(),
          'isModerator' => $this->isModerator(),
          'emailVerified' => $this->email_verified_at,
          'username' => $this->username,
          'slug' => $this->slug,
          'url' => $this->url,
          'username' => $this->username,
          'is_available_to_hire' => $this->isavailableToHire(),
          'is_online' => $this->isOnline(),
          'bio' => $this->bio,
          'date_of_birth' => $this->date_of_birth,
          'phone_number' => $this->phone_number,
          'address' => $this->address,
          'country' => $this->country,
          'city' => $this->city,
          'state' => $this->state,
          'zip_code' => $this->zip_code,
          'website' => $this->website,
          'education' => $this->education,
          'certifications' => $this->certifications,
          'facebook_social_link'=> $this->facebook_social_link,
                'linkedin_social_link'=> $this->linkedin_social_link,
                'twitter_social_link'=> $this->twitter_social_link,
          'experience' => $this->experience,
          'social_links' => $this->social_links,
          'skills' => $this->skills,
          'timestamps' => $this->timestamps,
          'password_is_null'=>$password_is_null,
          'gender' => $this->gender,


   'work_time_length'  => $this->work_time_length,
   'work_hours'  => $this->work_hours,
   'work_place'  => $this->work_place,
   'salary'  =>   $this->salary,

   'NotificationRoom' => new NotificationRoomResource(NotificationRoom::where('user_id', $this->id)->first()),

        ];
    }
}


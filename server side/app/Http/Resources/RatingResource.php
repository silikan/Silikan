<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\GigResource;
use App\Http\Resources\ClientRequestResource;
use App\Models\User;
use App\Models\Gig;
use App\Models\ClientRequest;



class RatingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [

      /*       $table->string('type');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('gig_id')->nullable();
            $table->unsignedBigInteger('client_request_id')->nullable();
            $table->unsignedBigInteger('client_id');
            $table->unsignedBigInteger('handyman_id');
            $table->integer('rating');
            $table->text('comment'); */
            'id' => $this->id,
            'type' => $this->type,
            'client_id' => $this->client_id,
            'handyman_id' => $this->handyman_id,
            'client_request_id' => $this->client_request_id,
            'gig_id' => $this->gig_id,
            'rating' => $this->rating,
            'comment' => $this->comment,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'handyman' => new UserResource(User::find($this->handyman_id)),
            'client' => new UserResource(User::find($this->client_id)),
            'gig' => new GigResource(Gig::find($this->gig_id)),
            'client_request' => new ClientRequestResource(ClientRequest::find($this->client_request_id)),
        ];
    }
}

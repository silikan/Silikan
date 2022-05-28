<?php

namespace App\Http\Resources;
use App\Http\Resources\UserResource;
use App\Http\Resources\ReplyResource;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
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
            'id' => $this->id,
            'comment' => $this->comment,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'user' => new UserResource($this->user),
            'replies' => ReplyResource::collection($this->replies),
            'parent_id' => $this->parent_id,
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\User;
use App\Models\NotificationRoom;
use App\Http\Resources\NotificationResource;
use App\Http\Resources\UserResource;

class NotificationResource extends JsonResource
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
            'type' => $this->type,
            'data' => $this->data,
            'from' => $this->from,
            'to' => $this->to,
            'chat_room_id' => $this->chat_room_id,
            'notification_room_id' => $this->notification_room_id,
            'read' => $this->read,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'fromData' => new UserResource(User::find($this->from)),
            'toData' => new UserResource(User::find($this->to)),
            'notificationRoom' => new NotificationRoomResource(NotificationRoom::find($this->notification_room_id)),
        ];
    }
}

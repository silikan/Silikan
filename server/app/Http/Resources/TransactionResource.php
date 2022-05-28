<?php

namespace App\Http\Resources;
use App\Models\User;
use App\Http\Resources\UserResource;
use App\Models\CartItem;
use App\Models\TaskItem;

use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
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
            'cart_item_id' => $this->cart_item_id,
            'task_item_id' => $this->task_item_id,
            'client_id' => $this->client_id,
            'handyman_id' => $this->handyman_id,

            'is_paid' => $this->is_paid,
            'is_confirmed' => $this->is_confirmed,
            'is_completed' => $this->is_completed,
            'handyman' => new UserResource(User::find($this->handyman_id)),
            'client' => new UserResource(User::find($this->client_id)),
            'cart_item' => new CartItemResource(CartItem::find($this->cart_item_id)),
            'task_item' => new TaskItemResource(TaskItem::find($this->task_item_id)),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,


        ];

    }
}

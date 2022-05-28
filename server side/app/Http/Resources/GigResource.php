<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GigResource extends JsonResource
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
            'title' => $this->title,
            'description' => $this->description,
             'premium' => $this->premium,
                'standard' => $this->standard,
                'basic' => $this->basic,
            'user_id' => $this->user_id,
            'cart_item_id' => $this->cart_item_id,
            'task_item_id' => $this->task_item_id,
            'paymentMethod' => $this->paymentMethod,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
             'category' => $this->categories,
             'images' => $this->images,
                'user' => $this->user,
                'category' => $this->categories,

    ];

    }
}

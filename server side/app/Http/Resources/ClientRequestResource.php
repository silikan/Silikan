<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClientRequestResource extends JsonResource
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
                'price' => $this->price,
                'duration' => $this->duration,
                'priceDescription' => $this->priceDescription,
                'payment_method' => $this->payment_method,
                'user' => $this->user,
                'category' => $this->categories,
        ];
    }
}

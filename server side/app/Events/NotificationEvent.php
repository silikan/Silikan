<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class NotificationEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;


    public $notification;

    public function __construct($notification)
    {
        // decode notification

        $this->notification = json_decode($notification);
    }


    public function broadcastOn()
    {
        //combine the word room with room id
        //get room id from notification

        return new Channel('notification-room-' . $this->notification->notification_room_id);
    }
}

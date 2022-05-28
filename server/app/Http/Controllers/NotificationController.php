<?php
namespace App\Http\Controllers;
use App\Events\NotificationEvent;

use App\Models\Notification;
use Illuminate\Http\Request;


class NotificationController extends Controller
{
    public function store(Request $request)
    {
        $notification = new Notification();
        $notification->type = $request->type;
        $notification->data = $request->data;
        $notification->from = $request->from;
        $notification->to = $request->to;
        if($request->type == 'chat'){
            $notification->chat_room_id = $request->chat_room_id;
        }
        $notification->NotificationRoom()->associate($request->notification_room_id);
        $notification->user()->associate($request->to);
//use App\Events\NotificationEvent;


        $notification->save();

        return $notification;
    }
}

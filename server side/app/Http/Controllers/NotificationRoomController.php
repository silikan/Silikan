<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use App\Models\NotificationRoom;
use App\Models\User;
use App\Models\Notification;

use App\Http\Resources\NotificationResource;

use Illuminate\Http\Request;

class NotificationRoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        //if room exist return room
        //else create room and return room
        $user = Auth::user();
        $notificationRoom = NotificationRoom::where('user_id', $user->id)->first();
        if ($notificationRoom) {
            return $notificationRoom;
        }
        else {
            $notificationRoom = new NotificationRoom();
            $notificationRoom->user()->associate($user);

            $notificationRoom->save();
            return $notificationRoom;
        }

    }


    public function getAthUserRoomNotifications()
    {
        //get user room notifications
        $user = Auth::user();
        $notificationRoom = NotificationRoom::where('user_id', $user->id)->first();
        if ($notificationRoom) {
            return NotificationResource::collection(Notification::where('notification_room_id', $notificationRoom->id)->orderBy('created_at','desc')->paginate(5));
        }
        else {
            return null;
        }

    }

    public function getUserNotificationRoom($id)
    {
        $user = User::find($id);
        $notificationRoom = $user->NotificationRoom;

        return $notificationRoom;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\NotificationRoom  $notificationRoom
     * @return \Illuminate\Http\Response
     */
    public function show(NotificationRoom $notificationRoom)
    {
    //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\NotificationRoom  $notificationRoom
     * @return \Illuminate\Http\Response
     */
    public function edit(NotificationRoom $notificationRoom)
    {
    //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\NotificationRoom  $notificationRoom
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, NotificationRoom $notificationRoom)
    {
    //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\NotificationRoom  $notificationRoom
     * @return \Illuminate\Http\Response
     */
    public function destroy(NotificationRoom $notificationRoom)
    {
    //
    }
}

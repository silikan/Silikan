<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;
use App\Events\MessageSent;
use App\Events\NotificationEvent;
use App\Http\Resources\ChatResource;

class ChatController extends Controller
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $message    = $request->data;

        $encodeMessage = json_encode($message);
        $decodeMessageEncode = json_decode($encodeMessage);
        $chat = new Chat();
        $chat->message = $decodeMessageEncode->message;
        $chat->to = $decodeMessageEncode->to;
        $chat->from = $decodeMessageEncode->from;
        $chat->room_id = $decodeMessageEncode->room_id;
        //associate chat with room and user
        $chat->save();
        $chat->room()->associate($decodeMessageEncode->room_id);
        $chat->user()->associate($decodeMessageEncode->from);

        return  $chat;


    }

    public function getChat($room_id)
    {
       //infinite scrolling
        $chats = ChatResource::collection(Chat::where('room_id', $room_id) ->orderBy('created_at','desc')
        ->paginate(15));
        return $chats;
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Chat  $chat
     * @return \Illuminate\Http\Response
     */
    public function show(Chat $chat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Chat  $chat
     * @return \Illuminate\Http\Response
     */
    public function edit(Chat $chat)
    {
        //
    }

    public function sendMessage(Request $request)
    {
        //fire the messagesent event and get sent data and store it


        /* $message    = $request->message; */

        $message = json_encode($request->data);




        event(new MessageSent($message));

        return $message;
    }

    public function sendNotification(Request $request)
    {
        //fire the messagesent event and get sent data and store it


        /* $message    = $request->message; */

        $notification = json_encode($request->all());




        event(new NotificationEvent($notification));

        return $notification;
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Chat  $chat
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Chat $chat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Chat  $chat
     * @return \Illuminate\Http\Response
     */
    public function destroy(Chat $chat)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\User;

use Illuminate\Http\Request;

class RoomController extends Controller
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

    public function createRoom(Request $request)
    {

        $room = Room::whereHas('users', function ($query)  use ($request) {
            $query->where('user_id', $request->to);
        })->WhereHas('users', function ($query) use ($request) {
            $query->where('user_id', $request->from);
        })->get();

        if ($room->count() == 0) {
            $room = new Room();
            $room->save();
            $room->users()->attach($request->to);
            $room->users()->attach($request->from);
            return $room;
        } else {
            return $room[0];
        }
    }
    public function getRoomByUsersId(Request $request)
    {
        $rooms = Room::whereHas('users', function ($query)  use ($request) {
            $query->where('user_id', $request->to);
        })->WhereHas('users', function ($query)  use ($request) {
            $query->where('user_id', $request->from);
        })->get();

        return $rooms;
    }

    public function getRoomByIdAndGetUsersData(Request $request)
    {
        $room = Room::find($request->room_id);
        $users = $room->users;
        return $users;
    }
    public function getRoomById(Request $request)
    {
        $room = Room::find($request->room_id);
        return response()->json($room);
    }


    public function getRoomUsers(Request $request)
    {
        $room = Room::find($request->room_id);
        $users = $room->users;
        return response()->json($users);
    }


    //get user rooms

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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function show(Room $room)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function edit(Room $room)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Room $room)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function destroy(Room $room)
    {
        //
    }
}

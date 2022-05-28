<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use App\Contracts\Likeable;
use App\Models\Like;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserResource::collection(User::paginate(9));

        // return  response()->json(["message" => "Forbidden"], 403);
    }

    public function handymen()
    {
        return UserResource::collection(User::where('is_handyman', true)->paginate(9));
    }

    public function getUserRooms(Request $request)
    {
        $user = User::find($request->user_id);
        $rooms = $user->rooms;
        return response()->json($rooms);
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UserResource($user);

        // return  response()->json(["message" => "Forbidden"], 403);
    }
    public function searchHandymen(Request $request)
    {
        $users = User::search($request->get('search'))->where('is_handyman', true)->take(10)->get();

        return $users;

    }
    public function searchHandymenPaginate(Request $request)
    {
        $users = User::search($request->get('search'))->where('is_handyman', true)->paginate(5);

        return $users;

        // return  response()->json(["message" => "Forbidden"], 403);
    }


    public function getUser($id)
    {
        return new UserResource(User::find($id));



        // return  response()->json(["message" => "Forbidden"], 403);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);

        $user->delete($user);
    }
}

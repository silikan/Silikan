<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use App\Models\Reaction;
use App\Models\Post;

use Illuminate\Http\Request;

class ReactionController extends Controller
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


public function PostReaction (Request $request , $post_id) {
    // if reaction exist then update it
    $reaction = Reaction::where('user_id', Auth::user()->id)->where('post_id', $post_id)->first();
    if ($reaction) {
        $reaction->reaction = $request->reaction;
        $reaction->name = $request->name;
        $reaction->value = $request->value;
        $reaction->icon = $request->icon;
        $reaction->iconColor = $request->iconColor;
        $reaction->bgColor = $request->bgColor;

        $reaction->save();
    } else {
        $reaction = new Reaction;
       $reaction->reaction = $request->reaction;
        $reaction->name = $request->name;
        $reaction->value = $request->value;
        $reaction->icon = $request->icon;
        $reaction->iconColor = $request->iconColor;
        $reaction->bgColor = $request->bgColor;        $reaction->user()->associate(Auth::user());
        $reaction->post()->associate(Post::find($post_id));
        $reaction->save();
}




}


public function getPostReactions ($post_id) {
    $reactions = Reaction::where('post_id', $request->post_id)->get();
    return $reactions;
}

public function getUserPostReaction ($user_id , $post_id) {
    $reaction = Reaction::where('user_id', $user_id)->where('post_id', $post_id)->first();
    return $reaction;
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reaction  $reaction
     * @return \Illuminate\Http\Response
     */
    public function show(Reaction $reaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Reaction  $reaction
     * @return \Illuminate\Http\Response
     */
    public function edit(Reaction $reaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Reaction  $reaction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reaction $reaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reaction  $reaction
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reaction $reaction)
    {
        //
    }
}

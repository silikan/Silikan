<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Resources\CommentResource;
use App\Http\Resources\ReplyResource;


use App\Models\User;
use App\Models\Post;

class CommentController extends Controller
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
        $comment = new Comment;

        $comment->comment = $request->comment;
        $user =    Auth::user();
        $comment->user()->associate($user);

        $post = Post::find($request->post_id);

        $post->comments()->save($comment);

        return $comment;
    }

    public function replyStore(Request $request)
    {
        $reply = new Comment();

        $reply->comment = $request->comment;
 $user =    Auth::user();
        $reply->user()->associate($user);

        $reply->parent_id = $request->comment_id;

        $post = Post::find($request->post_id);

        $post->comments()->save($reply);

        return $post;

    }

    public function getPostCommentsPaginate($post_id)
    {
        $post = Post::find($post_id);

        $comments = CommentResource::collection($post->comments()->orderBy('created_at', 'desc')->paginate(5)) ;

        return $comments;
    }

public function getPostCommentRepliesPaginate($post_id , $comment_id)
    {

        $post = Comment::find($comment_id);

        $replies = ReplyResource::collection($post->replies()->paginate(5)) ;

        return $replies;
    }
    public function getCommentById($id)
    {
        $comment = new CommentResource(Comment::find($id));

        return $comment;
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        //
    }
}

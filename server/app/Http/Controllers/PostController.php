<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\PostResource;

class PostController extends Controller
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
        //create a post
        $post = new Post();
        $post->title = $request->title;
        $post->content = $request->content;

        $user =  Auth::user();
        $post->user()->associate($user);

/*         $post->user_id = $user->id;
 */        $post->save();

        $category = Category::where('title', $request->category)->first();

         $post->categories()->attach($category);


return $post;
    }
    public function getPostById ($id) {

        return new PostResource(Post::findOrFail($id));;
    }

    public function getUserPosts($id) {
        $posts = Post::where('user_id', $id)->get();
        return $posts;

    }


public function getPostsByCategory($id) {
    $posts = Post::whereHas('categories', function ($query) use ($id) {
        $query->where('id', $id);
    })->get();
    return $posts;
}
public function PaginatePosts () {
    $posts =  PostResource::collection(Post::orderBy('created_at', 'desc')->paginate(5));
    return $posts;
}
    public function PaginateTrendingPosts () {
      //post with the most likes
        $posts =  PostResource::collection(Post::orderBy('total_views', 'desc')->paginate(5));
        return $posts;
    }

public function views($id){
    Post::find($id)->increment('total_views');
    return response()->json(['success'=>'Views incremented.']);
}
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */

     public function getPostByCategoryPaginate($title) {
            $category = Category::where('title', $title)->first();
            $posts = PostResource::collection($category->posts()->paginate(5));
            return $posts;
        }
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }
}

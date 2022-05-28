<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\User;
use Image;

class PostImageController extends Controller
{
    public function upload_post_image (Request $request , $post_id) {
        if ($request->file('post_image')) {
            // check if user has an existing post_image

            // processing the uploaded image

            $post_image_name =    time() . '.' . $request->file('post_image')->getClientOriginalExtension();
            $image = $request->file('post_image');
            $img = Image::make($image->path());


            $img->resize(250, 250, function ($constraint) {
              $constraint->aspectRatio();
            });

            $img->save('storage/post-image/' . $post_image_name);
            $post_image_path =  $path = $img->basePath();
            error_log($post_image_path);

            // Update user's post_image column on 'users' table
            $post =  Post::find($post_id);
            $post->image = $post_image_path;

            if ($post->save()) {
              return response()->json([
                'status'    =>  'success',
                'message'   =>  'post Photo Updated!',
                'post_image_url' =>  url('storage/post-image/' . $post_image_path)
              ]);
            } else {
              return response()->json([
                'status'    => 'failure',
                'message'   => 'failed to update profile photo!',
                'post_image_url' => NULL
              ]);
            }
          }

          return response()->json([
            'status'    => 'failure',
            'message'   => 'No image file uploaded!',
            'post_image_url' => NULL
          ]);
        }
    }


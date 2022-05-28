<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\User;
use Image;

class AvatarController extends Controller
{
  public function upload_user_photo(Request $request)
  {
    // check if image has been received from form
    if ($request->file('avatar')) {
      // check if user has an existing avatar
      $user =  Auth::user();

      if ($user->avatar != NULL) {
        // delete existing image file
        Storage::disk('user_avatars')->delete($user->avatar);
      }
      // processing the uploaded image

      $avatar_name =    time() . '.' . $request->file('avatar')->getClientOriginalExtension();
      $image = $request->file('avatar');
      $img = Image::make($image->path());


      $img->resize(250, 250, function ($constraint) {
        $constraint->aspectRatio();
      });

      $img->save('storage/user-avatar/' . $avatar_name);
      $avatar_path =  $path = $img->basePath();
      error_log($avatar_path);

      // Update user's avatar column on 'users' table
      $profile =  Auth::user();
      $profile->avatar = $avatar_path;

      if ($profile->save()) {
        return response()->json([
          'status'    =>  'success',
          'message'   =>  'Profile Photo Updated!',
          'avatar_url' =>  url('storage/user-avatar/' . $avatar_path)
        ]);
      } else {
        return response()->json([
          'status'    => 'failure',
          'message'   => 'failed to update profile photo!',
          'avatar_url' => NULL
        ]);
      }
    }

    return response()->json([
      'status'    => 'failure',
      'message'   => 'No image file uploaded!',
      'avatar_url' => NULL
    ]);
  }
}

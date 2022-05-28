<?php

namespace App\Http\Controllers;

use App\Models\RequestImages;
use Illuminate\Http\Request;

class RequestImagesController extends Controller
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

        $reqId = $request->reqId;
        $images=$request->images;
        $images=array();
        if($files=$request->file('reqimages')){
            foreach($files as $file){



                  // processing the uploaded image

          $image_name =    time() . '.' . $file->getClientOriginalExtension();
          $image = $file;
          $img = Image::make($image->path());


          $img->resize(250, 250, function ($constraint) {
            $constraint->aspectRatio();
          });


          $img->save('storage/req-image/' . $image_name);

          //find a gid with the gidid
          $req = req::find($reqId);
          $req->images()->associate( $img);



            }





          // Update user's avatar column on 'users' table
    /*       $profile =  Auth::user();
          $profile->avatar = $avatar_path; */



        }

        return response()->json([
          'status'    => 'failure',
          'message'   => 'No image file uploaded!',

        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RequestImages  $requestImages
     * @return \Illuminate\Http\Response
     */
    public function show(RequestImages $requestImages)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RequestImages  $requestImages
     * @return \Illuminate\Http\Response
     */
    public function edit(RequestImages $requestImages)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\RequestImages  $requestImages
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RequestImages $requestImages)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RequestImages  $requestImages
     * @return \Illuminate\Http\Response
     */
    public function destroy(RequestImages $requestImages)
    {
        //
    }
}

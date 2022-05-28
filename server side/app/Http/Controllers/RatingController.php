<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use App\Models\User;
use App\Models\Gig;
use App\Models\ClientRequest;
use Illuminate\Http\Request;
use App\Http\Resources\RatingResource;

class RatingController extends Controller
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

        $type = $request->type;
        if($type == 'gig'){

        $rating = new Rating();



        $rating->type = $request->type;
        $user = User::find($request->handyman_id);
        $gig = Gig::find($request->gig_id);

        $rating->client_id = $request->client_id;
        $rating->handyman_id = $request->handyman_id;

        $rating->rating = $request->rating;
        $rating->comment = $request->comment;

        $rating->user()->associate($user);
        $rating->gig()->associate($gig);

        $rating->save();
        return response()->json(['success' => true, 'message' => 'Rating added successfully']);

        }elseif($type == 'request'){


            $rating = new Rating();
            $rating->type = $request->type;


            $user = User::find($request->handyman_id);
            $clientRequest = ClientRequest::find($request->request_id);

            $rating->client_id = $request->client_id;
            $rating->handyman_id = $request->handyman_id;

            $rating->rating = $request->rating;
            $rating->comment = $request->comment;

            $rating->user()->associate($user);
            $rating->clientRequest()->associate($clientRequest);

            $rating->save();
            return response()->json(['success' => true, 'message' => 'Rating added successfully']);

        }
    }



    public function getGigRatings($id)
    {
        $ratings = Gig::find($id)->ratings;
        return  $ratings;
    }

    public function getClientRequestRatings($id)
    {
        $ratings = ClientRequest::find($id)->ratings;
        return  $ratings;
    }



    public function getUserRatings($id)
    {
        $ratings = RatingResource::collection(User::find($id)->ratings) ;
        return  $ratings;
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Rating  $rating
     * @return \Illuminate\Http\Response
     */
    public function show(Rating $rating)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Rating  $rating
     * @return \Illuminate\Http\Response
     */
    public function edit(Rating $rating)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Rating  $rating
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Rating $rating)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Rating  $rating
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rating $rating)
    {
        //
    }
}

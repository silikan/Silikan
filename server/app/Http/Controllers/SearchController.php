<?php

namespace App\Http\Controllers;
use App\Models\Gig;
use App\Models\Category;
use App\Models\User;
use App\Models\ClientRequest;
use App\Http\Resources\ClientRequestResource;
use App\Http\Resources\GigResource;
use App\Http\Resources\UserResource;


use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $users = User::search($request->get('search'))->where('is_handyman', true)->take(10)->get();

        return $users;

    }


    public function searchFunction (Request $request)
    {
        $gigs = Gig::search($request->get('search'))->take(1)->get();
        $clientRequests = ClientRequest::search($request->get('search'))->take(1)->get();
        $users = User::search($request->get('search'))->where('is_handyman', true)->take(1)->get();
        $categories = Category::search($request->get('search'))->take(1)->get();
        $searchResult = array();
        $searchResult["requests"] = $clientRequests;
        $searchResult["handymen"] = $users;
        $searchResult["categories"] = $categories;

        $gigsData = array();


        foreach ($gigs as $gig) {
           $img =  $gig->images;
            //put the data in an object
               array_push(    $gigsData ,  array(

                   'data' => $gig,
                   'images' => $img ,

                )
              );

        }

        $searchResult["gigs"] = $gigsData;
        return $searchResult;


    }

    public function  searchGigs (Request $request)
    {
        $gigs =  Gig::search($request->get('query'))->get();

        return $gigs;

        // return  response()->json(["message" => "Forbidden"], 403);
    }
    public function    searchGigsPaginate (Request $request)
    {
        $gigs = GigResource::collection(Gig::search($request->get('query'))->paginate(5));

        return $gigs;

    }


    public function searchHandymenPaginate(Request $request)
    {
        $users =  UserResource::collection( User::search($request->get('query'))->where('is_handyman', true)->paginate(5));

        return $users;

        // return  response()->json(["message" => "Forbidden"], 403);
    }


    public function searchHandymen(Request $request)
    {
        $users = UserResource::collection( User::search($request->get('search'))->where('is_handyman', true)->get());

        return $users;

        // return  response()->json(["message" => "Forbidden"], 403);
    }


     public function searchClientRequest (Request $request)
    {
        $clientRequests = ClientRequest::search($request->get('query'))->get();

        return $clientRequests;

        // return  response()->json(["message" => "Forbidden"], 403);

    }
    public function searchClientRequestPaginate (Request $request)
    {
        $clientRequests = ClientRequestResource::collection(ClientRequest::search($request->get('query'))->paginate(5));

        return $clientRequests;

        // return  response()->json(["message" => "Forbidden"], 403);

    }

}

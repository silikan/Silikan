<?php

namespace App\Http\Controllers;

use App\Models\ClientRequest;
use App\Models\Category;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Resources\ClientRequestResource;

class ClientRequestController extends Controller
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

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
               //create a request
               $clientRequest = new ClientRequest();
               $clientRequest->title = $request->title;
               $clientRequest->description = $request->description;
               $clientRequest->price = $request->price;
               $clientRequest->priceDescription = $request->priceDescription;
               $clientRequest->payment_method = $request->paymentMethod;
                $clientRequest->duration = $request->duration;
        $user =  Auth::user();
        $clientRequest->user()->associate($user);

/*         $clientRequest->user_id = $user->id;
 */        $clientRequest->save();


 $category = Category::where('title', $request->category)->first();

         $clientRequest->categories()->attach($category);
               //associate to a category
       /*         $request->categories()->attach($request->category);
        */

        return  $clientRequest;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ClientRequest  $clientRequest
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $clientRequest = ClientRequest::find($id);
        return $clientRequest;
    }

    public function getRequestUser($id)
    {
        $clientRequest = ClientRequest::find($id);
        $user = $clientRequest->user;
        return $user;
    }

public function getUserRequests($id)
    {
        $user = User::find($id);
        $clientRequests = $user->requests;
        $requestData = array();
        foreach ($clientRequests as $request) {
            //put the data in an object
              array_push($requestData,array(
                'request' => array(
                   'data' => $request,
                   "user"=>$user
                ), )
              );

        }


        return $requestData;
    }
public function getClientRequestsPaginate(){
    $clientRequest = ClientRequestResource::collection(ClientRequest::paginate(5));
    return $clientRequest;
}
//views count
public function views($id){
    ClientRequest::find($id)->increment('total_views');
    return response()->json(['success'=>'Views incremented.']);
}
public function getMostViewed(){
    $clientRequest = ClientRequest::orderBy('total_views', 'desc')->take(9)->get();
    return $clientRequest;
}

public function getClientRequestCategory ($id){
    $clientRequest = ClientRequest::find($id);
    $categories = $clientRequest->categories;
    return $categories;
}

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ClientRequest  $clientRequest
     * @return \Illuminate\Http\Response
     */
    public function edit(ClientRequest $clientRequest)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ClientRequest  $clientRequest
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ClientRequest $clientRequest)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ClientRequest  $clientRequest
     * @return \Illuminate\Http\Response
     */
    public function destroy(ClientRequest $clientRequest)
    {
        //
    }
}

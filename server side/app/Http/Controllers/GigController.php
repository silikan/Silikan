<?php

namespace App\Http\Controllers;

use App\Models\Gig;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Resources\GigResource;

class GigController extends Controller
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

        //create a gig
        $gig = new Gig();
        $gig->title = $request->title;
        $gig->description = $request->description;
        $basic = json_encode($request->basic);
        $standard = json_encode($request->standard);
        $premium = json_encode($request->premium);
        $paymentMethod = json_encode($request->paymentMethod);
        $gig->basic = $basic;
        $gig->standard = $standard;
        $gig->premium = $premium;
        $gig->paymentMethod = $paymentMethod;


        $user =  Auth::user();
        $gig->user()->associate($user);

/*         $gig->user_id = $user->id;
 */        $gig->save();

        //find category with request category by title
        $category = Category::where('title', $request->category)->first();

         $gig->categories()->attach($category);


return $gig;
      }



    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Gig  $gig
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //get gig by id
        $gig = Gig::find($id);
        return $gig;


    }

    public function getGigUser ($id){
        $gig = Gig::find($id);
       /*  $user = $gig->user; */
        return $gig->user;
    }

    public function getUserGigs ($id){
        $user = User::find($id);
        $userGigs = $user->gigs;
        //get images from the gigs
        $gigsData = array();
        foreach ($userGigs as $gig) {
           $img =  $gig->images;
            //put the data in an object
              array_push($gigsData,array(
                'gig' => array(
                   'data' => $gig,
                   'images' => $img ,
                   "user"=>$user
                ), )
              );

        }


        return $gigsData;
    }

    public function getGigsPaginate (){
        $gigs =  GigResource::collection(Gig::paginate(5));

        $gigsData = array();


        foreach ($gigs as $gig) {
           $img =  $gig->images;
           $user = $gig->user;
            //put the data in an object
               array_push(    $gigsData ,  array(

                   'data' => $gig,
                   'images' => $img ,
                     "user"=>$user

                )
              );

        }
        return $gigs;
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Gig  $gig
     * @return \Illuminate\Http\Response
     */
    public function edit(Gig $gig)
    {
        //
    }

    public function views($id){
        Gig::find($id)->increment('total_views');
        return response()->json(['success'=>'Views incremented.']);

    }

    public function getMostViewed(){
        $gigs = Gig::orderBy('total_views', 'desc')->take(9)->get();
        return $gigs;
    }
    public function getGigCategory ($id){
        $gig = Gig::find($id);
        $category = $gig->categories;
        return $category;
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Gig  $gig
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Gig $gig)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Gig  $gig
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gig $gig)
    {
        //
    }
}

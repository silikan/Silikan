<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Resources\ClientRequestResource;
use App\Http\Resources\GigResource;
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get all categories
        $categories = Category::all();
        return $categories;
    }

//caregory and gigs has a many to many relationship
//get gigs from category title
    public function getGigsByCategoryPaginate($title)
    {
        $category = Category::where('title', $title)->first();
        $gigs = GigResource::collection(  $category->gigs()->paginate(5));
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

        return $gigs;
    }
//do the same with client request and category
    public function getclientRequestsByCategoryPaginate($title)
    {
        $category = Category::where('title', $title)->first();
        $clientRequests = ClientRequestResource::collection( $category->clientRequests()->paginate(5));
        return $clientRequests;
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
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        //
    }
}

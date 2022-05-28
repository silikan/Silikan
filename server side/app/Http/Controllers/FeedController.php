<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Gig;
use App\Models\ClientRequest;
use App\Http\Resources\GigResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\ClientRequestResource;

use Illuminate\Http\Request;

class FeedController extends Controller
{
   public function  getThreeRandomUsers  (){
       $users = UserResource::collection( User::inRandomOrder()->take(6)->get());
         return $users;
   }
   public function  getThreeRandomGigs  (){
       $gigs = GigResource::collection(Gig::inRandomOrder()->take(6)->get());
            return $gigs;
   }

public function getThreeRandomClientRequests  (){
       $clientRequests = ClientRequestResource::collection(ClientRequest::inRandomOrder()->take(6)->get());
            return $clientRequests;
   }

   public function getThreeRandomHandymen  (){
       $handymen = UserResource::collection(User::inRandomOrder()->where('is_handyman', true)->take(6)->get());
            return $handymen;
   }
public function getThreeRandomClients  (){
       $clients = UserResource::collection(User::inRandomOrder()->take(6)->get());
            return $clients;
   }
}

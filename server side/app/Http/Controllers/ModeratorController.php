<?php

namespace App\Http\Controllers;
namespace App\Http\Controllers;
use App\Models\Gig;
use App\Models\User;
use App\Models\ClientRequest;
use App\Http\Resources\GigResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\ClientRequestResource;
use Illuminate\Http\Request;

class ModeratorController extends Controller
{
    public function  deleteUser ($id){
        $user = User::find($id);
        $user->delete();
        return $user;
    }
    public function  deleteGig ($id){
        $gig = Gig::find($id);
        $gig->delete();
        return $gig;
    }
    public function  deleteClientRequest ($id){
        $clientRequest = ClientRequest::find($id);
        $clientRequest->delete();
        return $clientRequest;
    }

    public function  makeUserHandyman ($id){
        $user = User::find($id);
        $user->is_handyman = true;
        $user->save();
        return $user;
    }

public function getAllUsersPaginate (){
    $users = User::paginate(5);
    return $users;

}
public function getAllGigsPaginate (){
    $gigs = GigResource::collection(Gig::paginate(5));
    return $gigs;

}
public function getAllClientRequestsPaginate (){
    $clientRequests = ClientRequestResource::collection(ClientRequest::paginate(5));
    return $clientRequests;
}

    public function        getAllClientHandymenPaginate (){
        $handymen = UserResource::collection(User::where('is_handyman', true)->paginate(5));
        return $handymen;
    }
    public function        getAllClientClientsPaginate (){
        $clients = UserResource::collection(User::where('is_client', true)->paginate(5));
        return $clients;
    }
    public function        getAllClientModeratorsPaginate (){
        $moderators = UserResource::collection(User::where('is_moderator', true)->paginate(5));
        return $moderators;
    }

}

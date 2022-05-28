<?php

namespace App\Http\Controllers;
use App\Models\Gig;
use App\Models\User;
use App\Models\ClientRequest;
use App\Http\Resources\GigResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\ClientRequestResource;
use App\Models\Transaction;

use App\Http\Resources\TransactionResource;
use App\Models\Category;

use App\Models\Feedback;

use App\Http\Resources\FeedbackResource;

use Illuminate\Http\Request;

class AdminController extends Controller
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

    public function deleteAllUsers   (){
        $users = User::all();
        foreach ($users as $user){
            $user->delete();
        }
        return $users;
    }
    public function deleteAllGigs (){
        $gigs = Gig::all();
        foreach ($gigs as $gig){
            $gig->delete();
        }
        return $gigs;
    }
    public function deleteAllClientRequests (){
        $clientRequests = ClientRequest::all();
        foreach ($clientRequests as $clientRequest){
            $clientRequest->delete();
        }
        return $clientRequests;
    }

    public function  deleteAll (){
        $this->deleteAllUsers();
        $this->deleteAllGigs();
        $this->deleteAllClientRequests();
        return "All deleted";
    }

    public function getAllUsers (){
        $users = User::all();
        return $users;
    }
    public function getAllGigs (){
        $gigs = Gig::all();
        return $gigs;
    }
    public function getAllClientRequests (){
        $clientRequests = ClientRequest::all();
        return $clientRequests;
    }

    public function getAllHandymen (){
        $handymen = User::where('is_handyman', true)->get();
        return $handymen;
    }

    public function getAllClients (){
        $clients = User::where('is_client', true)->get();
        return $clients;
    }

    public function getAllModerators (){
        $moderators = User::where('is_moderator', true)->get();
        return $moderators;
    }
    public function  getAllAdmins (){
        $admins = User::where('is_admin', true)->get();
        return $admins;
    }

    public function  makeUserAdmin ($id){
        $user = User::find($id);
        $user->is_admin = true;
        $user->save();
        return $user;
    }
    public function  makeUserModerator ($id){
        $user = User::find($id);
        $user->is_moderator = true;
        $user->save();
        return $user;
    }
    public function  makeUserHandyman ($id){
        $user = User::find($id);
        $user->is_handyman = true;
        $user->save();
        return $user;
    }

public function getAllUsersPaginate (){
    $users = UserResource::collection(User::paginate(5));
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
    public function        getAllClientAdminsPaginate (){
        $admins = UserResource::collection(Transaction::where('is_admin', true)->paginate(5));
        return $admins;
    }


public function getAllTransactions (){
    $transactions = TransactionResource::collection(Transaction::paginate(5));

    return $transactions;
}


public function stats (){
    $stats = [
        'users' => User::count(),
        'gigs' => Gig::count(),
        'clientRequests' => ClientRequest::count(),
        'transactions' => Transaction::count(),
        'handymen' => User::where('is_handyman', true)->count(),
        'clients' => User::where('is_client', true)->count(),
        'moderators' => User::where('is_moderator', true)->count(),
        'admins' => User::where('is_admin', true)->count(),
        'categories' => Category::count(),
    ];
    return $stats;
}


public function getAllFeedBackPaginate (){
    $feedbacks = FeedbackResource::collection(Feedback::orderBy('created_at', 'desc')->paginate(5));
    return $feedbacks;
}

}

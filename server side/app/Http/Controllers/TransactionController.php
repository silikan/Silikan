<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\User;

use Illuminate\Http\Request;
use App\Models\CartItem;
class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $transactions = Transaction::all();
        return $transactions;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

        //id taskitem has one transaction
        $cartItem =  CartItem::find($request->cart_item_id);

        if( $cartItem->transaction == []    ) {
            $transaction = new Transaction();
            $transaction->client_id = $request->client_id;
            $transaction->handyman_id = $request->handyman_id;

            $cartItem =  CartItem::find($request->cart_item_id);
                $taskItems = $cartItem->taskItems() ;
                $taskItem = $taskItems->first();
                $transaction->taskItem()->associate($taskItem);
                $transaction->cartItem()->associate($taskItem);
            $transaction->save();
            return $transaction;
        }else {
            $transaction = $cartItem->transaction;
              return $transaction;
        }


    }

public function setTransactionToPaid(Request $request){
    $transaction = Transaction::find($request->transaction_id);
    $transaction->is_paid = true;
    $transaction->save();
}
public function setTransactionToConfirmed(Request $request){
    $transaction = Transaction::find($request->transaction_id);
    $transaction->is_confirmed = true;
    $transaction->save();
}

public function setTransactionToCompleted(Request $request){
    $transaction = Transaction::find($request->transaction_id);
    $transaction->is_completed = true;
    $transaction->save();
}




public function getTransactionById($id){
    $transaction = Transaction::find($id);

    $transactionsData = array();
    $handyman = User::find($transaction->handyman_id);
    $client = User::find($transaction->client_id);
    $taskItem = $transaction->taskItem;
    $cartItem = $transaction->cartItem;
    $transactionsData["transaction"] = $transaction;
    $transactionsData["handyman"] = $handyman;
    $transactionsData["client"] = $client;
    $transactionsData["taskItem"] = $taskItem;
    $transactionsData["cartItem"] = $cartItem;

    if($cartItem->type == "gig"){
        $transactionsData["gig"] = $cartItem->gigs;

    }else if($cartItem->type == "request"){
        $transactionsData["request"] = $cartItem->clientRequests;
    }

    return $transactionsData;
}




public function getTaskItemTransactions($id){
    $taskItem = TaskItem::find($id);
    $transactions = $taskItem->transactions()->get();
    return $transactions;
}
 public function getCartItemTransactions($id){
    $cartItem = CartItem::find($id);
    $transactions = $cartItem->transactions()->get();



    return $transactions;
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
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function show(Transaction $transaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function edit(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transaction $transaction)
    {
        //
    }
}

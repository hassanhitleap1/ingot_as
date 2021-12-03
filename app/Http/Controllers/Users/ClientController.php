<?php


namespace App\Http\Controllers\Users;


use App\Http\Controllers\Controller;
use App\Http\Requests\User\ClientRequest;
use App\Http\Resources\Users\ClientResource;
use App\Model\Users\Client;
use App\User;

class ClientController extends  Controller
{
    public function __construct()
    {
      //  $this->middleware('jwt.verify')->only(['index','store','update','show','destroy']);
    }
    public function index(){
        return ClientResource::collection(Client::paginate(10));
    }

    public function store(ClientRequest $request){
        $client= Client::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>bcrypt($request->password),
            'type'=>User::CLIENT,
      
        ]);
        return new ClientResource($customer);
    }


    public function show($id){
        $customer=Client::find($id);
        return new ClientResource($client);
    }


    public function update($id,ClientRequest $request){
        $client=Client::find($id);
        $client= tap($client)->update([
            'name'=>$request->name,
            'email'=>$request->email,
         
        ]);
        return new ClientResource($client);
    }


    public function destroy($id){
        $client=Client::find($id);
        $client->delete();
        return Response('',201);
    }
}

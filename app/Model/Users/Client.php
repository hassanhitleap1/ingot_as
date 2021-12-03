<?php


namespace App\Model\Users;


use App\Scopes\Users\ClientScope;

use App\User;

class Client extends  User
{
  

    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope(new CustomerScope);
   
    }


}

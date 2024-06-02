<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Laravel CORS Options
    |--------------------------------------------------------------------------
    */

    'paths' => ['api/*', 'produit'],

    'allowed_methods' => ['*'],

    'allowed_origins' => ['*'], // You can restrict this to specific origins if needed

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => false,

    'max_age' => false,

    'supports_credentials' => false,

];


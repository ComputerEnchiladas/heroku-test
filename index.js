process.env.NODE_ENV="development";
require('mahrio').runServer( process.env, __dirname) 
  .then( function(server){ 
    server.route({ 
      path: '/', 
      method: 'GET', 
      handler: function(req, rep){ 
        rep('Hello World! It is ' + (new Date())); 
      } 
    }); 
  });

  // Server runs http://127.0.0.1:6085

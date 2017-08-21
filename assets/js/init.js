function getConnection {
  // Set the configuration for your app
  
  var config = {
    apiKey: "AIzaSyCxxS5-50vzHJMcHJTmf6mgu2xZTYywuE0",
    authDomain: "github-pages-b413e.firebaseapp.com",
    databaseURL: "https://github-pages-b413e.firebaseio.com/"    
  };

  var app = firebase.initializeApp(config);

  console.log(app.name);

  // Get a reference to the database service
  var database = firebase.database();

  return database;
}
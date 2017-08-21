var obj = {
  createConnection() {    
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCxxS5-50vzHJMcHJTmf6mgu2xZTYywuE0",
      authDomain: "github-pages-b413e.firebaseapp.com",
      databaseURL: "https://github-pages-b413e.firebaseio.com",
      projectId: "github-pages-b413e",
      storageBucket: "github-pages-b413e.appspot.com",
      messagingSenderId: "121658623412"
    };
    var app = firebase.initializeApp(config);    
  }
};
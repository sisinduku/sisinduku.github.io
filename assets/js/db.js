init();

function savePolling(email, poll) {
	firebase.database().ref('polling/').set({
    'email': email,
    'choice': poll    
  }, function() {
  	if(err){
        alert("Your polling was not entered, please contact admin");
  	} else {
    	alert ("Your activity is submitted");        
        $('#email-field').val('');
        $('#polling-field').val('');
  	}
  });
}

$("#polling").submit(function(event) {	
	var email = $("#email-field").val();
	var poll = $("#polling-field").val();

	savePolling(email, poll);
});
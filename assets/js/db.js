init();

function savePolling(email, poll) {
	firebase.database().ref('polling/').set({
    'email': email,
    'choice': poll    
  }, function(err) {
  	if(err){
        alert("Your polling was not entered, please contact admin");
  	} else {
    	alert ("Your activity is submitted");        
        $('#email-field').val('');
        $('#polling-field').val('');
  	}
  });
}

$(document).ready(function($) {
	$("#polling").submit(function() {	
		var email = $("#email-field").val();
		var poll = $('input[name="polling-field"]:checked').val();

		savePolling(email, poll);

		return false;
	});
});
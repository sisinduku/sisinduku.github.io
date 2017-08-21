init();

function savePolling(data) {
	firebase.database().ref('polling/').push().set({
    'email': data[0],
    'choice': data[1]    
  }, function(err) {
  	if(err){
        alert("Your polling was not entered, please contact admin");
  	} else {
    	alert ("Your polliong is submitted. Thank you for your participation");        
        $('#email-field').val('');
        $('#polling-field').val('');
  	}
  });
}

$(document).ready(function($) {
	$("#polling").submit(function() {	
    var data = [];

		var email = $("#email-field").val();
		var poll = $('input[name="polling-field"]:checked').val();

    data.push(email, poll);
		savePolling(data);

		return false;
	});

  $("#readdata").click(function(event) {
    firebase.database().ref('polling/').on('value', function(snapshot){    
      for (x in snapshot.val()) {
        var choice = x['choice'];
        console.log(choice);
      }
    });  
    
    return false;
  });
});


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

function readPolling() {
  firebase.database().ref('polling/').on('value', function(snapshot){
    console.log(snapshot.val());
    return snapshot.val();
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
    var pollingResult = readPolling();
    for (var i = pollingResult.length - 1; i >= 0; i--) {
      $('#result').append("<li>" + pollingResult[i].choice + "</li>")
    }
    return false;
  });
});


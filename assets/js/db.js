/* Nama: Saptanto Sindu K.U
 * Program Objectives: Polling for next update in polling.html
*/

obj.createConnection();

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
    firebase.database().ref('polling/').once('value', function(snapshot){    
      $('#result').empty();
      for (x in snapshot.val()) {        
        firebase.database().ref('polling/' + x + '/').once('value', function(xsnapshot){ 
          var data = xsnapshot.val();          
          $('#result').append('<li>' + data.choice + '</li>');
        }); 
      }
    });  
    
    return false;
  });
});


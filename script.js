$(document).ready(function() {             
  $('#loginModal').modal('show');
});

$('#login').click(function() {
  $('#failMsg').show();
  setTimeout(function() { $('#failMsg').hide(); }, 3000);
});
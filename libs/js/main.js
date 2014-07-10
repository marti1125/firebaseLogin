var url = new Firebase('https://hippy.firebaseio.com');
var auth = new FirebaseSimpleLogin(url, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log(error);
  } else if (user) {
    // user authenticated with Firebase
    console.log('User ID: ' + user.uid);
  } else {
    // user is logged out
  }
});
$('form').on('submit', function(e) {
  e.preventDefault();
  auth.login('password', {
    email: $('#email').val(),
    password: $('#pass').val()
  })
});
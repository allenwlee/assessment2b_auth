$(document).ready(function () {

  // send an HTTP DELETE request for the sign-out link
  $('#sign-out').on("click", function (e) {
    e.preventDefault();
    console.log("hey");
    var request = $.ajax({ url: $(this).attr('href'), type: 'delete' });
    request.done(function () { window.location = "/"; });
  });

});

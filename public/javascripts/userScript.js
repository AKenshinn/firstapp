$(function() {
  $('.update').on('click', function() {
    $('#update-id').val( $(this).data('id') );
    $('#update-username').val( $(this).data('username') );
    $('#update-password').val( $(this).data('password') );
  })
});


$( document ).ready(function() {
  $( "#clock-display" ).click(function( event ) {
      // $( this ).hide( "slow" );
      // alert( "Where did I go?" );
      $( this ).text(new Date())
  });


});

$( document ).ready(function() {
  thermostat = new Thermostat;

    $( "a" ).click(function( event ) {

        alert( "Thanks for visiting!" );
    });

    $( "#temperature-up" ).click( function() {
      thermostat._up()
      $( "#temperature-display" ).html(thermostat.temperature)
    });
});

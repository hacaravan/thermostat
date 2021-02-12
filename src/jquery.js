$( document ).ready(function() {
  thermostat = new Thermostat;

  const _updateTempDisplay = () => { $( "#temperature-display" ).html(thermostat.temperature) };
  _updateTempDisplay();

  const _updatePowerModeDisplay = () => {
    if()
  };

    $( "a" ).click(function( event ) {

        alert( "Thanks for visiting!" );
    });

    $( "#temperature-up" ).click( function() {
      thermostat._up();
      _updateTempDisplay();
    });

    $( "#temperature-down" ).click( function() {
      thermostat._down();
      _updateTempDisplay();
    });

    $( "#temperature-reset" ).click( function() {
      thermostat._reset();
      _updateTempDisplay();
    });

    $( "#powersavingmode" ).click( function() {
      if(thermostat.powerSavingMode) {
        thermostat._changePowerSavingMode();
        $( "#powersavingmode-text" ).text("Power Save OFF");
        _updateTempDisplay();
      } else {
        thermostat._changePowerSavingMode();
        $( "#powersavingmode-text" ).text("Power Save");
        _updateTempDisplay();
      };
    });
});

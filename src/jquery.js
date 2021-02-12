$( document ).ready(function() {
  thermostat = new Thermostat;

  const _updateMaxStatement = () => {
    let maxStatement = thermostat.isMaxTemp() ? "Max" : "";
    $( "#max-statement" ).html(maxStatement);
  };

  const _updateTempDisplay = () => {
    $( "#temperature-display" ).html(thermostat.temperature)
    $( "#energyusage" ).html(thermostat._currentEnergyUsage())
    _updateMaxStatement();
  };

  _updateTempDisplay();

  const _updatePowerModeDisplay = () => {
    if(thermostat.powerSavingMode) {
      $( "#powersavingmode-text" ).text("Power Save");
    } else {
      $( "#powersavingmode-text" ).text("Power Save OFF");
    };
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
      thermostat._changePowerSavingMode();
      _updatePowerModeDisplay();
      _updateTempDisplay();
    });


});

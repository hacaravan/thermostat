
$( document ).ready(function() {

  const addLeadingZero = (num) => {
    return num >= 10 ? num : '0' + num;
  }

  $( "#clock-display" ).click(function( event ) {
      // $( this ).hide( "slow" );
      // alert( "Where did I go?" );
      let hours = addLeadingZero(new Date().getHours());
      let minutes = addLeadingZero(new Date().getMinutes());
      let seconds = addLeadingZero(new Date().getSeconds());
      $( this ).text(`${hours}:${minutes}:${seconds}`)
  });

});

var myVar = setInterval(myTimer, 500);

function myTimer() {
  var d = new Date();
  document.getElementById("clock-display").innerHTML = d.toLocaleTimeString();
}

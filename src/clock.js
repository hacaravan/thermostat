const refreshVariable = setInterval(myTimer, 500);

function myTimer() {
 const t = new Date();
 document.getElementById("clock-display").innerHTML = t.toLocaleTimeString();
 document.getElementById("date-display").innerHTML = t.toLocaleDateString();
};

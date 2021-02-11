const myVar = setInterval(myTimer, 500);

function myTimer() {
 const t = new Date();
 document.getElementById("clock-display").innerHTML = t.toLocaleTimeString();
};

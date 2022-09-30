
// function to update screen every 1 second
setInterval(displayDiv, 1000);
function displayDiv(){
  // time now variable
  var d= new Date();
  const d_hour= d.getHours();
  const d_min=d.getMinutes();
  const d_sec=d.getSeconds();
 document.getElementById('hour').innerHTML =d_hour;
 document.getElementById('min').innerHTML =d_min;
 document.getElementById('sec').innerHTML =d_sec;

}

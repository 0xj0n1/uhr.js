(function time () {
  document.getElementById("time").innerHTML = new Date().toString("hh:mm:ss tt");
  var timeout = setTimeout(time, 1000); // recalls the function after 1000 ms
})();

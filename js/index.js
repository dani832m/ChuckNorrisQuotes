var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("citat").innerHTML = myObj.value;
  }
};

xmlhttp.open("GET", "https://api.chucknorris.io/jokes/random", true);
xmlhttp.send();

function refresh() {
  location.reload(true);
}
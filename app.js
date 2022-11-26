function getData(city, element) {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&APPID=b69f44fc1c775945b18a67465501e0e9', function(data) {
        var icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
        var desc = data.weather[0].main;
        var temp = data.main.temp;
        $(element + ' .desc').append(desc)
        $(element + ' .icons').attr('src', icon)
        $(element + ' .temp').append(temp + '&#176;' + 'F')
    });
}

getData('New York', '.one')
getData('Los Angeles', '.two')
getData('Chicago', '.three')
getData('Houston', '.four')
getData('Phoenix', '.five')
getData('Philadelphia', '.six')
getData('San Antonio', '.seven')
getData('San Diego', '.eight')
getData('Dallas', '.nine')

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
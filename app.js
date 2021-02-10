$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&APPID=b69f44fc1c775945b18a67465501e0e9', function(data) {
    var icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
    var desc = data.weather[0].main;
    var temp = data.main.temp;
    $('.desc').append(desc)
    $('.icons').attr('src', icon)
    $('.temp').append(temp + '&#176;' + 'F')
});
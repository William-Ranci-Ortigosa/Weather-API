$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&APPID=b69f44fc1c775945b18a67465501e0e9', function(data) {
    var icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
    var desc = data.weather[0].main;
    var temp = data.main.temp;
    $('.one .desc').append(desc)
    $('.one .icons').attr('src', icon)
    $('.one .temp').append(temp + '&#176;' + 'F')
});

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles&units=imperial&APPID=b69f44fc1c775945b18a67465501e0e9', function(data) {
    var icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
    var desc = data.weather[0].main;
    var temp = data.main.temp;
    $('.two .desc').append(desc)
    $('.two .icons').attr('src', icon)
    $('.two .temp').append(temp + '&#176;' + 'F')
});

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&APPID=b69f44fc1c775945b18a67465501e0e9', function(data) {
    var icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
    var desc = data.weather[0].main;
    var temp = data.main.temp;
    $('.three .desc').append(desc)
    $('.three .icons').attr('src', icon)
    $('.three .temp').append(temp + '&#176;' + 'F')
});

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Houston&units=imperial&APPID=b69f44fc1c775945b18a67465501e0e9', function(data) {
    var icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
    var desc = data.weather[0].main;
    var temp = data.main.temp;
    $('.four .desc').append(desc)
    $('.four .icons').attr('src', icon)
    $('.four .temp').append(temp + '&#176;' + 'F')
});

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Phoenix&units=imperial&APPID=b69f44fc1c775945b18a67465501e0e9', function(data) {
    var icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
    var desc = data.weather[0].main;
    var temp = data.main.temp;
    $('.five .desc').append(desc)
    $('.five .icons').attr('src', icon)
    $('.five .temp').append(temp + '&#176;' + 'F')
});

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Philadelphia&units=imperial&APPID=b69f44fc1c775945b18a67465501e0e9', function(data) {
    var icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
    var desc = data.weather[0].main;
    var temp = data.main.temp;
    $('.six .desc').append(desc)
    $('.six .icons').attr('src', icon)
    $('.six .temp').append(temp + '&#176;' + 'F')
});

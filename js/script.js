
var height = String(window.innerHeight)
var width = String(window.innerWidth)

function setBackground(tag, tag2){

    tag = tag.replace(' ', '+')
    tag = tag.toLowerCase()

    bgUrl = 'https://source.unsplash.com/1600x900/?' + tag + ',' + tag2;
    document.querySelector('.background').style.backgroundImage = "url(" + bgUrl + ")"
    console.log(bgUrl)
    bgUrl = 'https://source.unsplash.com/1600x900/?' + tag + ',' + tag2;

}


let main = {
    "apiKey":"7af0645f81d36888c9fca585b6611eb4",
    fetchWeather: function (city){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=7af0645f81d36888c9fca585b6611eb4'
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
     
    displayWeather :function (data){
        const { name } = data;
        const { icon, description} = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.getElementById('temperature').innerText = temp;
        document.getElementById('status').innerText = description;
        document.getElementById('icon').src = "http://openweathermap.org/img/wn/" + icon + ".png"
        document.getElementById('cityText').innerText = name;
        setBackground(name, 'city')

    },


};

window.onkeypress = function(event) {
    if (event.keyCode == 13) {
       main.fetchWeather(document.getElementById('locationInput').value)
    }

 }

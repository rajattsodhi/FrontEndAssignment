//function to get json data from the wheather api by callback function
function processJSON (json) {
    console.log(json["base"]);
};

// Create a new script element
var script_element = document.createElement('script');

// Set its source to the JSONP API
script_element.src = 'http://api.openweathermap.org/data/2.5/weather?lat=52.638599&lon=-1.13169&callback=processJSON&APPID=0def49e863318873e0c926d3af2b07ce';

// Stick the script element in the page <head>
document.getElementsByTagName('head')[0].appendChild(script_element);

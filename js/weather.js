//function to get json data from the wheather api by callback function
function processJSON (json) {
    let demoJSON = document.getElementById("descr");
    let icon = document.getElementById("icon");
    let theData= json["name"];
    let temp = Math.round(json["main"]["temp"]);
    let iconRetrieved = json["weather"][0]["icon"];
    console.log(iconRetrieved);
    theData+= ' '+ temp +String.fromCharCode(176) +'C';
    console.log(theData);
    demoJSON.innerHTML = theData;
    
    //icon.style.backgroundImage = 'url(''images/'+iconRetrieved+'.png'')';
    icon.style.backgroundImage = 'url(images/'+iconRetrieved+'.png)';
    //icon.style.backgroundImage = 'url(images/50d.png)';
    console.log(icon.style.backgroundImage);
    //icon.style.backgroundSize = 'contain';
	

};

// Create a new script element
var script_element = document.createElement('script');

// Set its source to the JSONP API
script_element.src = 'http://api.openweathermap.org/data/2.5/weather?lat=52.638599&lon=-1.13169&callback=processJSON&units=metric&APPID=0def49e863318873e0c926d3af2b07ce';

// Stick the script element in the page <head>
document.getElementsByTagName('head')[0].appendChild(script_element);

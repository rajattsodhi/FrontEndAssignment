/*javascript used to retrieve json data from external API, in this case the API is OpenWeather API
* data is retrieved in JSON format, appropriate data is retreived and the description and icon are 
* update accrodingly to the data retrieved
*/

/*NB if page is displayed on GitHub then an error of mixed content will be displayed in the console
* this is due to the fact the page is displayed over https and the call to the api is made on http.
* In oder to solve the problem the call should be made using https but in order to use this 
* functionality a separate licence needs to be purchased
*/
//function to get json data from the wheather api by callback function
function processJSON (json) {
    console.log(json);
  let demoJSON = document.getElementById("descr");
  let icon = document.getElementById("icon");
  let theData= json["name"];
  let temp = Math.round(json["main"]["temp"]);
  let iconRetrieved = json["weather"][0]["icon"];
  theData+= ' '+ temp +String.fromCharCode(176) +'C';
  demoJSON.innerHTML = theData;
  icon.style.backgroundImage = 'url(images/'+iconRetrieved+'.png)';
  
};

// Create a new script element
let script_element = document.createElement('script');

Set the source of the script tot the call to the API by providing the cordinates of Leicester and the callback function
* (processJSON) so data can be retrived
*/
/*script_element.src = 'https://api.apixu.com/v1/current.json?key=0e227a1f5beb452d9bf210027172702&processJSON&q=Leicester';

// put the script in the head so the call can be made to the API when page loads
document.getElementsByTagName('head')[0].appendChild(script_element);
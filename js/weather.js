/*javascript used to retrieve json data from external API, in this case the API is APIXU API
* data is retrieved in JSON format, appropriate data is retreived and the description and icon are 
* update accrodingly to the data retrieved
*/


/*NEW VERSION THAT USES HTTPS AVOIDING MIXED CONTENT ERROR*/
(function(){

  let xmlhttp = new XMLHttpRequest();//object use to send a https request
  let url = "https://api.apixu.com/v1/current.json?key=0e227a1f5beb452d9bf210027172702&q=Leicester";

  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let json = JSON.parse(this.response);//get the response of the request
      extractData(json);//call to a function that extracts data from json and updates the weather widget    
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  function extractData(json){
    let descr = document.getElementById("descr");
    let icon = document.getElementById("icon");
    let theData= json["location"]["name"];
    let temp = Math.round(json["current"]["temp_c"]);//display the temperature as integer so round function is used
    let iconRetrieved = json["current"]["condition"]["icon"];
    theData+= ' '+ temp +String.fromCharCode(176) +'C';//create the string for the description
    descr.innerHTML = theData;
    icon.style.backgroundImage = 'url(https:'+iconRetrieved+')';
  }    
 

}());


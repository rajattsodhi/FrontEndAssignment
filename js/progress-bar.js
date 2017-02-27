/* javascript that allows the user to click on the icons in the about section and dispays a 
* progress bar and animates it by increasing the width of the bar to show the knowledge on that 
* particular language
*/


/* function that takes e as paramete (e is event), this is necessary tho know wich element has fired
* the corresponding event and also this particular approach of passing e as parameter to the function is
* required for Firefox browser.
*/

function move(e) {
   
  var mainDiv = getClosest(e.target, "div");//get the outer div (ie the div with class of col-)
  var h = mainDiv.querySelector('h3');//get the title 
  var myProgress = mainDiv.querySelector('.myProgress');//get the div containing the progress bar
  if (myProgress.currentStyle) {//get the display property of myProgress
    var displayStyle = myProgress.currentStyle.display;
  } else if (window.getComputedStyle) {
           var displayStyle = window.getComputedStyle(myProgress, null).getPropertyValue("display");
         }
  if(displayStyle == 'none'){//if myProgress is hidden, display it and start filling the progress bar
    myProgress.style.display="block";
    var myBar = myProgress.querySelector('.myBar');//get the bar filler 
    var label = myProgress.querySelector('.label');//get the label
    var value = label.getAttribute("data-value");//get the value to wich the scrollbar should be filled
    var width = 10;
    function frame() {//function that allows to achieve animated progression of the bar filling
      if (width >= value) {
        //bar is completed so stop the animation 
        clearInterval(id);
      } else {
          width++; 
          myBar.style.width = width + '%'; 
          label.innerHTML = width  + '%';
        }
    }
        var id = setInterval(frame, 10);//interval at wich the frame function is called (10).
        
    }
  else {//the progress bar is already displayed so hide it
    myProgress.style.display="none";
  }
  
}

//get each icon
var languages = document.getElementsByClassName('pr');
//Add listeners to each icon
for (var i = 0; i < languages.length; i++) {
  var item = languages[i];
  item.addEventListener("click", function(event,frame) {
    event.preventDefault();//prevent the bubbling effect in the DOM
    move(event);//event is necessary as require by Firefox browser
  });
}


//function developed by Vinzenz Aubry  (se touch.js file for licence and copyright)
/**
 * Get closest DOM element up the tree that contains a class, ID, or data attribute
 * @param  {Node} elem The base element
 * @param  {String} selector The class, id, data attribute, or tag to look for
 * @return {Node} Null if no match
 */
var getClosest = function (elem, selector) {

    var firstChar = selector.charAt(0);

    // Get closest match
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        // If selector is a class
        if ( firstChar === '.' ) {
            if ( elem.classList.contains( selector.substr(1) ) ) {
                return elem;
            }
        }

        // If selector is an ID
        if ( firstChar === '#' ) {
            if ( elem.id === selector.substr(1) ) {
                return elem;
            }
        } 

        // If selector is a data attribute
        if ( firstChar === '[' ) {
            if ( elem.hasAttribute( selector.substr(1, selector.length - 2) ) ) {
                return elem;
            }
        }

        // If selector is a tag
        if ( elem.tagName.toLowerCase() === selector ) {
            return elem;
        }

    }

    return false;

};




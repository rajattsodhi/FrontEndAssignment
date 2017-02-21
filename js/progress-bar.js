function move(e) {
   
    var mainDiv = getClosest(e.target, "div");
    var h = mainDiv.querySelector('h3');
    var myProgress = mainDiv.querySelector('.myProgress');
    if (myProgress.currentStyle) {
        var displayStyle = myProgress.currentStyle.display;
        } else if (window.getComputedStyle) {
        var displayStyle = window.getComputedStyle(myProgress, null).getPropertyValue("display");
        }
    if(displayStyle == 'none'){
        myProgress.style.display="block";
        var myBar = myProgress.querySelector('.myBar'); 
        var label = myProgress.querySelector('.label');
        var value = label.getAttribute("data-value");
        var width = 10;
        function frame() {
            if (width >= value) {
            clearInterval(id);
            } else {
            width++; 
            myBar.style.width = width + '%'; 
            label.innerHTML = width * 1  + '%';
            }
        }
        var id = setInterval(frame, 10);
        
    }
    else {
        myProgress.style.display="none";
    
    }
  
}

var languages = document.getElementsByClassName('language');
//Add listeners
for (var i = 0; i < languages.length; i++) {
    var item = languages[i];
    item.addEventListener("click", function(event,frame) {
    event.preventDefault();
    move(event);
    });
}


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




/*The MIT License (MIT)

Copyright (c) 2016 by Vinzenz Aubry 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/

/*Javascript used to add touch support allowinf the element to be interacted with as hover is 
* not supported on touch devices. Hammer.js is used to overcome this problem.
*/



// ================Hammer JS Tap Longpress================

//get the views
var views = document.getElementsByClassName('view');
//Add Hammer Listener to every view
for (var i = 0; i < views.length; ++i) {
  var item = views[i];
  var mc = new Hammer.Manager(item);
  mc.add( new Hammer.Tap({
    time: 250,
  }) );
    

  //Function triggered on tap 
  mc.on('press tap', function(event) {
    event.preventDefault();//prevent bubbling effect on the DOM
    var view = getClosest(event.target, ".view");//get main node
    var img = view.querySelector('img');//get image
    var innerdiv = view.querySelector('.mask');//get inner div(mask)
    var h =  innerdiv.querySelector('h2');//get h
    var p = innerdiv.querySelector('p');//get p
  
    if (event.type == "tap") {//if the event is a tap
      if(p.style.transform == "scale(1)")//if the description is scaled (meaning that the user has already clicked on the view)
      {
        img.style.transform = "scale(1)";
        img.style.opacity = 100;
        h.style.transform= "scale(0)";
        p.style.transform= "scale(0)";
      }
      else//the user has not yet clicked so display the description and title and scale the image to obtain the zooming effect
      {
        img.style.transform = "scale(10)";
        img.style.opacity = 0;//make the image transparent(100%) so description can be read
        h.style.transform= "scale(1)";
        p.style.transform= "scale(1)";
      }
    }   
        
  });
    
}




                                     

                                        // ===== Helper Functions ===== //




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





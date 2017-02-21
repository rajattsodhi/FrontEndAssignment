/*The MIT License (MIT)

Copyright (c) 2016 by Vinzenz Aubry Modified by Rajatt Sodhi

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



// ================Hammer JS Tap Longpress================
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
        event.preventDefault();
        var view = getClosest(event.target, ".view");//get main node
        var img = view.querySelector('img');
        var innerdiv = view.querySelector('.mask');//get inner div(mask)
        var h =  innerdiv.querySelector('h2');
        var p = innerdiv.querySelector('p');
        
        
        if (event.type == "tap") {
            if(p.style.transform == "scale(1)")
            {
                img.style.transform = "scale(1)";
                img.style.opacity = 100;
                h.style.transform= "scale(0)";
                p.style.transform= "scale(0)";
            }
            else
            {
        
                img.style.transform = "scale(10)";
                img.style.opacity = 0;
                h.style.transform= "scale(1)";
                p.style.transform= "scale(1)";
            }
            
        }   
        
    });
    
}




                                        // ===== Devics Stuff ==== //

/*//Block the "Tapohold" Context Menu on Android
window.oncontextmenu = function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
};*/


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





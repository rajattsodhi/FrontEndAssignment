var list = document.getElementsByClassName("view")[0];
var img = list.getElementsByTagName("IMG")[0];
var h = list.getElementsByTagName("H2")[0];
var p = list.getElementsByTagName("P")[0];
// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(list);

// listen to events...
mc.on("view tap press", function(ev) {
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
    
});


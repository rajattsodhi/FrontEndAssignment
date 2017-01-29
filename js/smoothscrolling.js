
function scrollTo(from, to, duration) {
    if (duration <= 0)
        return;
    var difference = to - from.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        from.scrollTop = from.scrollTop + perTick;
        if (from.scrollTop === to) return;
        scrollTo(from, to, duration - 10);
    }, 10);
}


document.getElementById("portfolio-link").onclick = function() {
   var elmnt = document.getElementById("portfolio");   
    console.log(window.pageYOffset);
scrollTo(document.body, elmnt.offsetTop-50, 1600);
}
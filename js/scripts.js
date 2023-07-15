function menuToggle(params) {
    var x = document.getElementById ('myNavtoggle')
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle'
    }
}
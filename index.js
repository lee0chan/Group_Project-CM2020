document.addEventListener('DOMContentLoaded', function() {
    console.log("ready");    
    console.log(window.location.href)
    var navLink = document.querySelectorAll("a[href='index.html']");
    if (navLink) {
        navLink[0].classList.add("active");
    }
})
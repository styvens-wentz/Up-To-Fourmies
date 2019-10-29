function hamburgerMenu() {
    var hM = document.getElementById("myTopnav");
    if (hM.className === "topnav") {
        hM.className += " responsive";
    } else {
        hM.className = "topnav";
    }
}
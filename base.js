function hamburgerMenu() {
    var hM = document.getElementById("myTopnav");
    if (hM.className === "topnav") {
        hM.className += " responsive";
    } else {
        hM.className = "topnav";
    }
}

jQuery(document).ready(function() {
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 200) {
            jQuery('.cRetour').fadeIn(duration);
        } else {
            jQuery('.cRetour').fadeOut(duration);
        }
    });

    jQuery('.cRetour').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});
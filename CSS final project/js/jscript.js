// jQuery code to load header and footer
$(document).ready(function() {
    // Load global header
    $("#header").load("header.html");

    // Load global footer
    $("#footer").load("footer.html");

    addHoverEffect();
 });
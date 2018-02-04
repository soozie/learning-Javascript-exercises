// HTML
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

Importing the library jQuery gives to the developer the option to CALL the jQuery class.
The class name exported is:
- $
- jQuery
// ===

$(document).ready(function() {
  console.log("The DOM is ready!");
});

$ = jQuery class.
$() = call jQuery function.
$(document) = call jQuery class passing document HTML element as argument.
$(document).ready(); call ready() function on the jQuery element* document.
var button = document.getElementById("saveButton");
$(button).addClass('class1')






*every time you pass an HTML element to $() call, the HTML element passed through it becomes a jQuery element.
cre

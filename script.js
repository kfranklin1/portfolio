function contactSubmit() { 
    var X = document.forms["contactSubmit"]["email"].value;
    if (X == "") {
        alert("Email must be filled out");
        return false;
 } else { 
    alert(" Thank You For Contacting Katron");
}
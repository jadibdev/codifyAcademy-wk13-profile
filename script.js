var title = document.getElementById('title');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var male = document.getElementById('male');
var female = document.getElementById('female');
var radios = document.getElementsByName("genders");
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var color = document.getElementById("selection");
var phone = document.getElementById("phone");
var africa = document.getElementById('africa');
var america = document.getElementById('america');
var australia = document.getElementById('australia');
var europe = document.getElementById('europe');
var asia = document.getElementById('asia');


function userInfo() {
   document.write("<h1>User Profile</h1>" + "<br>" + "<br>");
   document.write(firstName.value + " ");
   document.write(lastName.value + "<br>" + "<br>");
   if (male.checked) {
       document.write("Gender: " + male.value + "<br>" + "<br>");
   }
   if (female.checked) {
    document.write("Gender: " + female.value + "<br>" + "<br>");
}
    document.write("Email: " + email.value + "<br>" + "<br>");
    document.write("Phone: " + phone.value + "<br>" + "<br>");
    document.write("Color: " + color.value + "<br>" + "<br>");
    if (africa.checked) {
        document.write("Continent: " + africa.value);
    }
    if (america.checked) {
        document.write("Continent: " + america.value);
    }
    if (australia.checked) {
        document.write("Continent: " + australia.value);
    }
    if (europe.checked) {
        document.write("Continent: " + europe.value);
    }
    if (asia.checked) {
        document.write("Continent: " + asia.value);
    }
}s
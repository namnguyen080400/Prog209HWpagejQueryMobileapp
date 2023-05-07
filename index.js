let contactArray = [];

let ContactObject = function (pName, pEmail, pPhoneNumber) {
    this.name = pName;
    this.email = pEmail;
    this.phoneNumber = pPhoneNumber;
}

contactArray.push ( new ContactObject("Eat Lunch", "Home", 1)  );
contactArray.push ( new ContactObject("Do 209 HW", "School", 2)  );
contactArray.push ( new ContactObject("Watch Dune", "Home", 3)  );

let selectedType = "";

// code runs immediately
//================================================================

// runs  when dom is loaded
document.addEventListener("DOMContentLoaded", function (event) {

    createList();

    document.getElementById("submitContact").addEventListener("click", function () {
        contactArray.push ( new ContactObject(document.getElementById("name").value, selectedType,
        document.getElementById("email").value, document.getElementById("phone").value) );
        
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";

        createList();
    });

});


//======================================
// function defintions
function createList() {
    // clear prior data
    var myul = document.getElementById("myul");
    myul.innerHTML = "";

    contactArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
          // added data-role="listview" to the ul in the html
        li.innerHTML = element.priority + ":  " + element.type + "   " + element.data;
        myul.appendChild(li);
    });
};
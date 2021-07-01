jQuery.validator.addMethod("emailcheck",
    function(value, element){
        var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return this.optional(element) || regex.test(value);
    },
    "Email must be a valid email.");

jQuery.validator.addMethod("postalcode",
    function(value, element){
        var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        return this.optional(element) || regex.test(value);
    },
    "Email must be a valid email.");

jQuery.validator.addMethod("validphone",
    function(value, element){
        var regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        return this.optional(element) || regex.test(value);
    },
    "Email must be a valid email.");

function doValidate() {
    var form = $("#infoForm");
    form.validate({
       rules: {
           "days": {
               required: true,
               minlength: 1
           },
           fName: {
               required: true
           },
           lName: {
               required: true
           },
           city: {
               required: true
           },
           province: {
               required: true
           },
           code: {
               required: true,
               postalcode: true
           },
           phone: {
               required: true,
               validphone: true
           },
           email: {
               required: true,
               emailcheck: true
           },
           people: {
               required: true
           }
       },
       messages: {
           "days": {
               required: "Atleast one day is required."
           },
           fName: {
               required: "First name is required."
           },
           lName: {
               required: "Last name is required."
           },
           city: {
               required: "City is required."
           },
           province: {
               required: "Province is required."
           },
           code: {
               required: "Postal Code is required.",
               postalcode: "Postal Code must be valid."
           },
           phone: {
               required: "Phone number is required.",
               validphone: "Phone number must be valid"
           },
           email: {
               required: "Email is required.",
               emailcheck: "Email must be valid"
           },
           people: {
               required: "Number of participants is required."
           }
       }
    });
    return form.valid();
}

function submit() {
    if (doValidate()){
        // Check days
        // Both Checked
        if (document.getElementById("dayOne").checked == true && document.getElementById("dayTwo").checked == true){
            localStorage.setItem("days", 3);
            //Day One is checked
        } else if (document.getElementById("dayOne").checked == true){
            localStorage.setItem("days", 1);
            //Day Two is checked
        } else {
            localStorage.setItem("days", 2);
        }
        // Store all data in localstorage
        localStorage.setItem("fname", $("#fName").val());
        localStorage.setItem("lname", $("#lName").val());
        localStorage.setItem("city", $("#city").val());
        localStorage.setItem("province", $("#province").val());
        localStorage.setItem("code", $("#code").val());
        localStorage.setItem("phone", $("#phone").val());
        localStorage.setItem("email", $("#email").val());
        localStorage.setItem("people", $("#people").val());

        location.href = "success.html";

    } else {

    }
}



function init() {
    $("#submit").on("click", submit);
}

$(document).ready(function () {
    init();
});

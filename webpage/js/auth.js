/*
 * PROG 2070
 *
 * Joshua Arnott 
 * April 6th, 2020
 * 
 */

jQuery.validator.addMethod("postcode",
    function(value, element){
        var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        return this.optional(element) || regex.test(value);
    },
    "Please enter a valid postal code.");

jQuery.validator.addMethod("emailcheck",
    function(value, element){
        var regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
        return this.optional(element) || regex.test(value);
    },
    "Please enter a valid email.");

jQuery.validator.addMethod("phonecheck",
    function(value, element){
        var regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        return this.optional(element) || regex.test(value);
    },
    "Please enter a valid phone number.");

function doValidate(){
    console.info("validating");
    var form = $("#infoForm");
    form.validate({
        rules: {
            sellerName:{
                required: true,
                minlength: 4,
                maxlength: 20
            },
            address:{
                required: true
            },
            city:{
                required: true
            },
            province:{
                required: true,
                maxlength: 2,
                minlength: 2
            },
            postCode:{
                required: true,
                postcode: true
            },
            phoneNum:{
                required: true,
                phonecheck: true
            },
            email:{
                required: true,
                emailcheck: true
            },
            year:{
                required: true
            },
            make:{
                required: true
            },
            model:{
                required: true
            }
        },
        messages: {
            sellerName:{
                required: "Seller Name is required.",
                minlength: "Must be atleast 4 characters.",
                maxlength: "Must be 20 characters or less."
            },
            address:{
                required: "Address is required."
            },
            city:{
                required: "City is required."
            },
            province:{
                required: "Province is required.",
                maxlength: "Please enter a 2 character code.",
                minlength: "Please enter a 2 character code."
            },
            postCode:{
                required: "Postal Code is required.",
                postcode: "Please enter a valid postal code."
            },
            phoneNum:{
                required: "Phone number is required.",
                phonecheck: "Please enter a valid phone number."
            },
            email:{
                required: "Email is required.",
                emailcheck: "Please enter a valid email."
            },
            year:{
                required: "Year is required."
            },
            make:{
                required: "Make is required."
            },
            model:{
                required: "Model is required."
            }
        },
        //errorPlacement: function(error, element){
        //    $("#errorText").text(error.text());
        //}
    });
    return form.valid();
}
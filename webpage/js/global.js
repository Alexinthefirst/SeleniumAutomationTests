// This web app runs on HTML and jQuery!

/*
 * PROG 2070
 *
 * Joshua Arnott 
 * April 6th, 2021
 * 
 */

// Stores if forms are shown
var isEnterShown = false;
var isSearchShown = false;

// Displays all searches stored in DB
function showAllSearches() {
    var options = [];

    function callback(tx, results) {
        var htmlCode = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            htmlCode += "<fieldset id='result'><li>" +
                "<h2>Year: " + row['year'] +
                "<h2>Make: " + row['make'] +
                "<h2>Model: " + row['model'] + "</h1>" +
                "<h2>Seller Name: " + row['sellerName'] + "</h1>" +
                "<h3>City: " + row['city'] + "</h3>" +
                "<h3>Province: " + row['province'] + "</h3>" +
                "<h3>Postal Code: " + row['postCode'] + "</h3>" +
                "<h3>Phone Number: " + row['phoneNum'] + "</h3>" +
                "<h3>Email: " + row['email'] + "</h3>" +
                "<a href='"+ row["url"] +"'>" + row["year"] + " " + row["make"] + " " + row["model"] + "</a>" +
                "</a></li></fieldset>";
        }
        var lv = $("#searchList");
        lv = lv.html(htmlCode);
        //lv.listview("refresh"); // very important
    }

    Search.selectAll(options, callback);
}

// Hides and shows the entry form
function showEnterForm(){
    if (isEnterShown){
        $("#enter").hide();
        isEnterShown = false;
    } else {
        $("#enter").show();
        isEnterShown = true;
    }
    if (isSearchShown){
        $("#search").hide();
        isSearchShown = false;
    }
}

// Hides and shows the search form
function showSearchForm(){
    if (isSearchShown){
        $("#search").hide();
        isSearchShown = false;
    } else {
        $("#search").show();
        isSearchShown = true;
        showAllSearches();
    }
    if (isEnterShown){
        $("#enter").hide();
        isEnterShown = false;
    }
}
 
// Validates and submits the entry form
function submitEntryForm(){
    doValidate();
    if (doValidate()){

        var sellerName = $("#sellerName").val();
        var city = $("#city").val();
        var province = $("#province").val();
        var postCode = $("#postCode").val();
        var phoneNum = $("#phoneNum").val();
        var email = $("#email").val();
        var year = $("#year").val();
        var make = $("#make").val();
        var model = $("#model").val();

        var string = year + " " + make + " " + model;
        var url = "http://www.jdpower.com/cars/" + make + "/" + model + "/" + year + "";

        var options = [sellerName, city, province, postCode, phoneNum, email, year, make, model, url];

        console.info(options);

        $("#carURL").text(string);
        $("#carURL").attr("href", url);

        Search.insert(options);
    }
}

// Clears the database
function clearDB(){
    DB.dropTables();
    DB.createTables();
}

// Initialize the Database
function initDB(){
    try{
        console.log("Creating DB...");
        DB.createDatabase();
        if (db) {
            console.info("Creating tables...");
            DB.createTables();
            console.info("Table created.")
        } else {
            console.error("Cannot create tables: DB does not exist.");
        }
    } catch(e){
        console.error("Fatal Error in initDB().");
    }
}

// Initialize the events and DB
function init(){
    initDB();
    console.info("Up and loaded.");
    $("#enter").hide();
    $("#search").hide();

    $("#enterFormButton").on("click", showEnterForm);
    $("#submitEntry").on("click", submitEntryForm);

    $("#searchHistoryButton").on("click", showSearchForm);
    $("#clear").on("click", clearDB);

}

// Start Initialization once document is loaded
$(document).ready(function (){
    init();
});
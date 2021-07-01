function total(){

    console.log("OKAY!");

    var total = 0;
    var days = localStorage.getItem("days");
    var people = localStorage.getItem("people");

    // calculate price
    if (days == 1){
        $("#numDays").text("Number of days: 1");
        total += 350;
    } else if (days == 2){
        $("#numDays").text("Number of days: 1");
        total += 450;
    } else {
        // discount
        $("#numDays").text("Number of days: 2");
        total += 750;
    }

    if (people <= 5){
        total = total * people;
    } else {
        total = (total * people) * 0.9;
    }


    $("#total").text("Total: $" + total);

}

$(document).ready(function () {
    total();
});

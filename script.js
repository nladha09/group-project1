$("#add-weight-btn").on("click", function(event) {
    event.preventDefault() // prevents page from refreshing when hitting submit button
    var date = $("#date-input").val().trim(); // setting vars for user date input from form
    var currentWeight = $("#weight-input").val().trim(); 
    var goalWeight = $("#goal-weight-input").val().trim();

    $("#date-input").val(""); // clears the textbox when done
    $("#weight-input").val("");
    $("#goal-weight-input").val("");

    console.log("clicked"); // console.log
    console.log(date);
    console.log(currentWeight);
    console.log(goalWeight);

    // do we need to add in "display" ids for tabular data?? to have data stick (even when page refreshes?)
    // $("#date-display").append(date);
    // $("#weight-display").append(currentWeight);
    // $("#goal-weight-display").append(goalWeight);

    // Store all content into localStorage
    localStorage.setItem("Date", date);
    localStorage.setItem("Current Weight", currentWeight);
    localStorage.setItem("Goal Weight", goalWeight);

    $("#data-table").append("<tr><td>" + date + "<td>" + currentWeight + "<td>" + goalWeight); // appending data to table on right

});

$("#reset-data-btn").on("click", function() {
    localStorage.clear(); // to clear everything in local storage
});

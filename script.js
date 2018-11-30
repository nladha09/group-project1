var genArray = [];
//localStorage.clear()
displaData();

function displaData() {
    var len;

    console.log("1st", localStorage.Data);
    if (localStorage.Data) {

        genArray = JSON.parse(localStorage.getItem("Data"));
        len = genArray.length;
    }
    else {
        len = 0
    };

    $("#data-table").html("");

    for (var i = 0; i < len; i++) {

        $("#data-table").append(
            "<tr><td>" + genArray[i].date +
            "</td><td>" + genArray[i].currentWeight +
            "</td><td>" + genArray[i].goalWeight + "</td>"); // appending data to table on right
    };
}

$("#add-weight-btn").on("click", function (event) {
    event.preventDefault() // prevents page from refreshing when hitting submit button
    var date = $("#date-input").val().trim(); // setting vars for user date input from form
    var currentWeight = $("#weight-input").val().trim();
    var goalWeight = $("#goal-weight-input").val().trim();

    if ($.trim($("#date-input").val()) === "" || $.trim($("#weight-input").val()) === "" || $.trim($("#goal-weight-input").val()) === "") {
        $("#error-message").text("please fill out all fields")
        return false;
    }

    $("#date-input").val(""); // clears the textbox when done
    $("#weight-input").val("");
    $("#goal-weight-input").val("");
    // console.log("clicked"); // console.log
    // console.log(date);
    // console.log(currentWeight);
    // console.log(goalWeight);


    // do we need to add in "display" ids for tabular data?? to have data stick (even when page refreshes?)
    // $("#date-display").append(date);
    // $("#weight-display").append(currentWeight);
    // $("#goal-weight-display").append(goalWeight);

    genArray.push({
        date: date,
        currentWeight: currentWeight,
        goalWeight: goalWeight
    });

    console.log("Array", genArray);
    // Store all content into localStorage
    localStorage.setItem("Data", JSON.stringify(genArray));
    console.log("2nd", localStorage.Data);
    console.log("Array", genArray);
    displaData();
});


// $("#data-table").append("<tr><td>" + localStorage.getItem("Date") + "<td>" + localStorage.getItem("Current Weight") + "<td>" + localStorage.getItem("Goal Weight")); // appending data to table on right


$("#reset-data-btn").on("click", function () {
    localStorage.clear(); // to clear everything in local storage
    window.location.reload(); // page refresh to clear out table data
});


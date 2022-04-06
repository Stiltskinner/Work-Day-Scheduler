// Selector variables
var currentDay = document.getElementById("currentDay");
// jquery selector variables
var eventTable = $("#event-table");
var scheduler = $("#scheduler");

var nineAM = $("#9AM");
var tenAM = $("#10AM");
var elevenAM = $("#11AM");
var twelvePM = $("#12PM");
var onePM = $("#1PM");
var twoPM = $("#2PM");
var threePM = $("#3PM");
var fourPM = $("#4PM");
var fivePM = $("#5PM");

// Global variables
var check9AM = moment("9:00am", "h:mm:ss a");
var check10AM = moment("10:00am", "h:mm:ss a");
var check11AM = moment("11:00am", "h:mm:ss a");
var check12PM = moment("12:00pm", "h:mm:ss a");
var check1PM = moment("1:00pm", "h:mm:ss a");
var check2PM = moment("2:00pm", "h:mm:ss a");
var check3PM = moment("3:00pm", "h:mm:ss a");
var check4PM = moment("4:00pm", "h:mm:ss a");
var check5PM = moment("5:00pm", "h:mm:ss a");
var check6PM = moment("6:00pm", "h:mm:ss a");
var check11PM = moment("11:00pm", "h:mm:ss a");

// Current day display function
function displayDay() {
    var now = moment();
    currentDay.textContent = now.format("MMMM Do");
}

// Interval to check for current time every second and updates the display date if it changes. It also fires the upDate colors function every second so it can check for the current time and update in real time
function timeUpdate() { 
   setInterval(displayDay, 1000);
   setInterval(updateColors, 1000);
}

// This function changes the background color of the Event column of the table depending on the time. If it is the current hour, it sets it to red, if it's after the current hour, sets it to gray, and it sets them all to green if it's before 9 AM, basically meaning they all reset to green after midnight
function updateColors() {
    if (moment().isBefore(check9AM)) {
        eventTable.children().children().children("td").children().removeClass("bg-success bg-secondary bg-alert").addClass("bg-success");
        eventTable.children().children().children("td").removeClass("bg-success bg-secondary bg-alert").addClass("bg-success");
    }
    if (moment().isBetween(check9AM, check10AM)) {
        nineAM.addClass("bg-danger").removeClass("bg-success bg-secondary");
        nineAM.children().addClass("bg-danger").removeClass("bg-success bg-secondary");
    }
    if (moment().isBetween(check10AM, check11AM)) {
        tenAM.addClass("bg-danger").removeClass("bg-success bg-secondary");
        tenAM.children().addClass("bg-danger").removeClass("bg-success bg-secondary");
    }
    if (moment().isBetween(check11AM, check12PM)) {
        elevenAM.addClass("bg-danger").removeClass("bg-success bg-secondary");
        elevenAM.children().addClass("bg-danger").removeClass("bg-success bg-secondary");
    }
    if (moment().isBetween(check12PM, check1PM)) {
        twelvePM.addClass("bg-danger").removeClass("bg-success bg-secondary");
        twelvePM.children().addClass("bg-danger").removeClass("bg-success bg-secondary");
    }
    if (moment().isBetween(check1PM, check2PM)) {
        onePM.addClass("bg-danger").removeClass("bg-success bg-secondary");
        onePM.children().addClass("bg-danger").removeClass("bg-success bg-secondary");
    }
    if (moment().isBetween(check2PM, check3PM)) {
        twoPM.addClass("bg-danger").removeClass("bg-success bg-secondary");
        twoPM.children().addClass("bg-danger").removeClass("bg-success bg-secondary");
    }
    if (moment().isBetween(check3PM, check4PM)) {
        threePM.addClass("bg-danger").removeClass("bg-success bg-secondary");
        threePM.children().addClass("bg-danger").removeClass("bg-success bg-secondary");
    }
    if (moment().isBetween(check4PM, check5PM)) {
        fourPM.addClass("bg-danger").removeClass("bg-success bg-secondary");
        fourPM.children().addClass("bg-danger").removeClass("bg-success bg-secondary");
    }
    if (moment().isBetween(check5PM, check6PM)) {
        fivePM.addClass("bg-danger").removeClass("bg-success bg-secondary");
        fivePM.children().addClass("bg-danger").removeClass("bg-success bg-secondary");
    }
    if (moment().isAfter(check10AM)) {
        nineAM.addClass("bg-secondary").removeClass("bg-success bg-alert");
        nineAM.children().addClass("bg-secondary").removeClass("bg-success bg-alert");
    }
    if (moment().isAfter(check11AM)) {
        tenAM.addClass("bg-secondary").removeClass("bg-success bg-alert");
        tenAM.children().addClass("bg-secondary").removeClass("bg-success bg-alert");
    }
    if (moment().isAfter(check12PM)) {
        elevenAM.addClass("bg-secondary").removeClass("bg-success bg-alert");
        elevenAM.children().addClass("bg-secondary").removeClass("bg-success bg-alert");
    }
    if (moment().isAfter(check1PM)) {
        twelvePM.addClass("bg-secondary").removeClass("bg-success bg-alert");
        twelvePM.children().addClass("bg-secondary").removeClass("bg-success bg-alert");
    }
    if (moment().isAfter(check2PM)) {
        onePM.addClass("bg-secondary").removeClass("bg-success bg-alert");
        onePM.children().addClass("bg-secondary").removeClass("bg-success bg-alert");
    }
    if (moment().isAfter(check3PM)) {
        twoPM.addClass("bg-secondary").removeClass("bg-success bg-alert");
        twoPM.children().addClass("bg-secondary").removeClass("bg-success bg-alert");
    }
    if (moment().isAfter(check4PM)) {
        threePM.addClass("bg-secondary").removeClass("bg-success bg-alert");
        threePM.children().addClass("bg-secondary").removeClass("bg-success bg-alert");
    }
    if (moment().isAfter(check5PM)) {
        fourPM.addClass("bg-secondary").removeClass("bg-success bg-alert");
        fourPM.children().addClass("bg-secondary").removeClass("bg-success bg-alert");
    }
    if (moment().isAfter(check6PM)) {
        fivePM.addClass("bg-secondary").removeClass("bg-success bg-alert");
        fivePM.children().addClass("bg-secondary").removeClass("bg-success bg-alert");
    }
}

// This does not work. I want to use it to check if the user clicked a button, and if they did, go to the input value of the cousin element and save it to local storage. Right now I'm just console logging it to test it.
function saveText(event) {
    event.preventDefault();
    var element = event.target;
    
    if (element.matches("button")) {
       $("savedText") = element.parent().parent().children(1).children().val();
       console.log(savedText);
    }

}
// Event Listeners
eventTable.on("click", saveText);

// Calls displayDay so there isn't a 1 second lag between opening page and the day displaying the first time. then calls timeUpdate to continually check the time and update the display day when it rolls over. timeUpdate also continually checks for the time and updates background colors of cells in the table as appropriate
displayDay();
timeUpdate();
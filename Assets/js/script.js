// Selector variables
var currentDay = document.getElementById("currentDay");
// jquery selector variables
var eventTable = $("event-table");

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
var check9AM = moment("9:00am", "h:mm:ss");
var check10AM = moment("10:00am", "h:mm:ss");
var check11AM = moment("11:00am", "h:mm:ss");
var check12PM = moment("12:00pm", "h:mm:ss");
var check1PM = moment("1:00pm", "h:mm:ss");
var check2PM = moment("2:00pm", "h:mm:ss");
var check3PM = moment("3:00pm", "h:mm:ss");
var check4PM = moment("4:00pm", "h:mm:ss");
var check5PM = moment("5:00pm", "h:mm:ss");
var check6PM = moment("6:00pm", "h:mm:ss");

// Current day display function
function displayDay() {
    var now = moment();
    currentDay.textContent = now.format("MMMM Do");
}

// Interval to check for current time every second and updates the display date if it changes
function timeUpdate() { 
   setInterval(displayDay, 1000);
}

function updateColors() {
    if (moment().isBefore(check9AM)) {
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
}


// Calls displayDay so there isn't a 1 second lag between opening page and the day displaying the first time. then calls timeUpdate to continually check the time and update the display day when it rolls over.
displayDay();
timeUpdate();
updateColors();
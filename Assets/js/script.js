// Selector variables
var currentDay = document.getElementById("currentDay");
// jquery selector variables
var eventTable = $("#event-table");
var nineAM = $("#9AM");
var tenAM = $("#10AM");
var elevenAM = $("#11AM");
var twelvePM = $("#12PM");
var onePM = $("#1PM");
var twoPM = $("#2PM");
var threePM = $("#3PM");
var fourPM = $("#4PM");
var fivePM = $("#5PM");
var buttons = $("button")
var inputs = $("input");

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
var checkTimes = [check9AM, check10AM, check11AM, check12PM, check1PM, check2PM, check3PM, check4PM, check5PM, check6PM];

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
        eventTable.children().children().children("td").children().removeClass("future past present").addClass("future");
        eventTable.children().children().children("td").removeClass("future past present").addClass("future");
        buttons.parent().removeClass("future past present");
    }
    if (moment().isBetween(check9AM, check10AM)) {
        nineAM.addClass("present").removeClass("future past");
        nineAM.children().addClass("present").removeClass("future past");
    }
    if (moment().isBetween(check10AM, check11AM)) {
        tenAM.addClass("present").removeClass("future past");
        tenAM.children().addClass("present").removeClass("future past");
    }
    if (moment().isBetween(check11AM, check12PM)) {
        elevenAM.addClass("present").removeClass("future past");
        elevenAM.children().addClass("present").removeClass("future past");
    }
    if (moment().isBetween(check12PM, check1PM)) {
        twelvePM.addClass("present").removeClass("future past");
        twelvePM.children().addClass("present").removeClass("future past");
    }
    if (moment().isBetween(check1PM, check2PM)) {
        onePM.addClass("present").removeClass("future past");
        onePM.children().addClass("present").removeClass("future past");
    }
    if (moment().isBetween(check2PM, check3PM)) {
        twoPM.addClass("present").removeClass("future past");
        twoPM.children().addClass("present").removeClass("future past");
    }
    if (moment().isBetween(check3PM, check4PM)) {
        threePM.addClass("present").removeClass("future past");
        threePM.children().addClass("present").removeClass("future past");
    }
    if (moment().isBetween(check4PM, check5PM)) {
        fourPM.addClass("present").removeClass("future past");
        fourPM.children().addClass("present").removeClass("future past");
    }
    if (moment().isBetween(check5PM, check6PM)) {
        fivePM.addClass("present").removeClass("future past");
        fivePM.children().addClass("present").removeClass("future past");
    }
    if (moment().isAfter(check10AM)) {
        nineAM.addClass("past").removeClass("future present");
        nineAM.children().addClass("past").removeClass("future present");
    }
    if (moment().isAfter(check11AM)) {
        tenAM.addClass("past").removeClass("future present");
        tenAM.children().addClass("past").removeClass("future present");
    }
    if (moment().isAfter(check12PM)) {
        elevenAM.addClass("past").removeClass("future present");
        elevenAM.children().addClass("past").removeClass("future present");
    }
    if (moment().isAfter(check1PM)) {
        twelvePM.addClass("past").removeClass("future present");
        twelvePM.children().addClass("past").removeClass("future present");
    }
    if (moment().isAfter(check2PM)) {
        onePM.addClass("past").removeClass("future present");
        onePM.children().addClass("past").removeClass("future present");
    }
    if (moment().isAfter(check3PM)) {
        twoPM.addClass("past").removeClass("future present");
        twoPM.children().addClass("past").removeClass("future present");
    }
    if (moment().isAfter(check4PM)) {
        threePM.addClass("past").removeClass("future present");
        threePM.children().addClass("past").removeClass("future present");
    }
    if (moment().isAfter(check5PM)) {
        fourPM.addClass("past").removeClass("future present");
        fourPM.children().addClass("past").removeClass("future present");
    }
    if (moment().isAfter(check6PM)) {
        fivePM.addClass("past").removeClass("future present");
        fivePM.children().addClass("past").removeClass("future present");
    }
}

// Event Listeners to save text to localstorage
$("#9button").click( function() {
    var input9am = document.getElementById("9input").value;
    localStorage.setItem("9am" , JSON.stringify(input9am));
});

$("#10button").click( function() {
    var input10am = document.getElementById("10input").value;
    localStorage.setItem("10am" , JSON.stringify(input10am));
});

$("#11button").click( function() {
    var input11am = document.getElementById("11input").value;
    localStorage.setItem("11am" , JSON.stringify(input11am));
});

$("#12button").click( function() {
    var input12pm = document.getElementById("12input").value;
    localStorage.setItem("12pm" , JSON.stringify(input12pm));
});

$("#1button").click( function() {
    var input1pm = document.getElementById("1input").value;
    localStorage.setItem("1pm" , JSON.stringify(input1pm));
});

$("#2button").click( function() {
    var input2pm = document.getElementById("2input").value;
    localStorage.setItem("2pm" , JSON.stringify(input2pm));
});

$("#3button").click( function() {
    var input3pm = document.getElementById("3input").value;
    localStorage.setItem("3pm" , JSON.stringify(input3pm));
});

$("#4button").click( function() {
    var input4pm = document.getElementById("4input").value;
    localStorage.setItem("4pm" , JSON.stringify(input4pm));
});

$("#5button").click( function() {
    var input5pm = document.getElementById("5input").value;
    localStorage.setItem("5pm" , JSON.stringify(input5pm));
});

// retrieving from local storage
var output9am = JSON.parse(localStorage.getItem("9am"));
document.getElementById("9input").value = output9am;

var output10am = JSON.parse(localStorage.getItem("10am"));
document.getElementById("10input").value = output10am;

var output11am = JSON.parse(localStorage.getItem("11am"));
document.getElementById("11input").value = output11am;

var output12pm = JSON.parse(localStorage.getItem("12pm"));
document.getElementById("12input").value = output12pm;

var output1pm = JSON.parse(localStorage.getItem("1pm"));
document.getElementById("1input").value = output1pm;

var output2pm = JSON.parse(localStorage.getItem("2pm"));
document.getElementById("2input").value = output2pm;

var output3pm = JSON.parse(localStorage.getItem("3pm"));
document.getElementById("3input").value = output3pm;

var output4pm = JSON.parse(localStorage.getItem("4pm"));
document.getElementById("4input").value = output4pm;

var output5pm = JSON.parse(localStorage.getItem("5pm"));
document.getElementById("5input").value = output5pm;
// Calls displayDay and updatecolors so there isn't a 1 second lag between opening page and the day displaying the first time. then calls timeUpdate to continually check the time and update the display day when it rolls over. timeUpdate also continually checks for the time and updates background colors of cells in the table as appropriate
displayDay();
timeUpdate();
updateColors();
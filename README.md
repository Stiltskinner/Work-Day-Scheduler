# Work-Day-Scheduler
An app to schedule tasks and events for a day

## Functionality
The current date displays below the header and updates itself when the day rolls over
<br>
Before an hour-block is reached, the space to save that event has a green background color. During that hour-block, it has a red background color, and after that hour-block has passed, it has a gray background color. This checks for updates every second
<br>
The user can type text into each hour-block row to save their events and todos under the Event column. By pressing the lock button icon on the right in the Save Event column, the user can save that text to local storage. When the page is refreshed, the text is retrieved from local storage and placed into the Event row it came from.

## Design Process
The HTML includes a table created with bootstrap, so the design is responsive. This bootstrap-template table has a row for each hour block from 9 am to 5 pm. The input area and buttons each have unique IDs for event listeners to call on, and for local storage to populate when appropriate.
<br>
The script.js file populates the currentDay element with today's date. Various other functions have detailed comments, but essentially there are functions that get called using setInterval every second to update the date and update the colors of the Event row.
<br>
the UpdateColors function uses moment.js to reset all the boxes to green if it's before 9 am, reset boxes to red when they are between the relevant hours, and reset boxes to gray when they are after hours. It does this by adding and removing classes using jquery dom traversal.
<br>
There are unique event listeners for each button. I attempted to create a more elegant solution that would require only one event listener and use a function to check for the location of the click, then  traverse the dom to a cousin element (the input box) and retrieve its value to put into local storage. I ran into some roadblocks doing this, and with some advice from my tutor, decided my time would be better spent doing the solution I knew and then completing other tasks (the algorithm optional assignments)
<br>
Finally, the displayDay and updateColors functions are called right away so there is not a delay between the page loading and setInterval firing them. timeUpdate fires to get the setIntervals going and continue to fire those functionse every second.
<br>
Repository Link: https://github.com/Stiltskinner/Work-Day-Scheduler
<br>
Deployed webpage: https://stiltskinner.github.io/Work-Day-Scheduler/
<br>
The screenshot of the webpage below was taken after 5 pm, so all the boxes are gray. However, they do change colors at the appropriate times.
<br>

![Screenshot of webpage](./Assets/Workday%20Scheduler%20Screenshot.png)
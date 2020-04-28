// 1. When I open the planner, then the current day is displayed at the top of the calendar
    //Create global Scope variables
    // Load and render planner using jQuery / event delegation 
    // When page is loaded, retrive/display currentDate at the top using using moment().format(); and calling moment.js api
    // Create function to retrieve stored events from the local storage using localStorage.getItem();
    // Similarly to jQuery, moment.js uses overloaded getters and setters. Calling these methods without parameters acts as a getter. Calling them with a parameter acts as a setter.

// 2. When I scroll down, then I am presented with timeblocks for standard business hours
   // Create timeblocks between 9AM - 5PM. Build these by row for 9 sets of hour timeblocks.
   // Use jQuery input event to create input section of the row 
   // $("#myInput").on("input", function(){ $("#result").text($(this).val());});

// 3. When I view the timeblocks for that day, then each timeblock is color coded to indicate whether it is in the past, present, or future
    // Set the timebock row colours based on time and create a function with if else statement based on equal/greater than/less than 24 hours

// 4. When I click into a timeblock, then I can enter an event
    // Use onclick function to listen for user clicks on a timeblock event using $(document).on('click','i', function(event) { event.preventDefault();  
    // Use event delegation to call function for new input event 

// 5. When I click the save button for that timeblock, then text for that event is saved in local storage
    // Use on click event based on user input to execute save event text to local storage function via localStorage.setItem(); 

// 6. When I refresh the page, then the saved events persist
    // Call the function for retrieving stored events at the end 
    // When page refreshes, repopulate the local storage stored events



// START JS SCRIPT FOR jQUERY // 

// Page is ready to run after html is loaded
    $(document).ready(function () {
        // When page is loaded, display currentDate at the top. Call moment.js api to display current date.
        var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a"));
        $("#currentDate").text(currentDate);
        // Create retrieve local storage function using localStorage.getItem();

        
//   var storedEvents = JSON.parse(localStorage.getItem("storedEvents"));
//   var storedEvents = JSON.stringify(localStorage.getItem("storedEvents"));
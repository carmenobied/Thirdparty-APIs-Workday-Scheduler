// START JS SCRIPT// 

// Page is ready to run after html is loaded
  $(document).ready(function () {
    // When page is loaded, display currentDate at the top. Call moment.js api to display current date.
    var currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");
    console.log(currentDay)
    $("#currentDay").text(currentDay);

    // Set military time
    var presentTime = moment().format("H");
    console.log(presentTime);

    // JSON.parse(localStorage.getItem()

    // call colour change funtion
    timeblockColour();

    // change timeblock colour based on past, presebt, future
    function timeblockColour() {
        if ($(".timeblockRow").attr("value") === presentTime) {
            // timeblock colour for past = grey
            $(".eventDescription").addClass("present");
            } else if ($(".timeblockRow").attr("value") > presentTime) {
                // timeblock colour for past = green
                $(".eventDescription").addClass("past");
            } else if ($(".timeblockRow").attr("value") < presentTime) {
            // timeblock colour for past = red
            $(".eventDescription").addClass("future");
            }
            console.log($(".timeblockRow").attr("value"));
       }

        // Save Button event listenr
       $(".saveBtn").on("click", function () {
        //setting items in the local storage
        localStorage.setItem("9AM", ($("#event1").val()))
        localStorage.setItem("10AM", ($("#event2").val()))
        localStorage.setItem("11AM", ($("#event3").val()))
        localStorage.setItem("12AM", ($("#event4").val()))
        localStorage.setItem("13PM", ($("#event5").val()))
        localStorage.setItem("14PM", ($("#event6").val()))
        localStorage.setItem("15PM", ($("#event7").val()))
        localStorage.setItem("16PM", ($("#event8").val()))
        localStorage.setItem("17PM", ($("#event9").val()))
    })

        //get stored items in the local storage and append. When refreshed, stored items display in the planner
        $("#event1").append(localStorage.getItem("9AM"));
        $("#event2").append(localStorage.getItem("10AM"));
        $("#event3").append(localStorage.getItem("11AM"));
        $("#event4").append(localStorage.getItem("12AM"));
        $("#event5").append(localStorage.getItem("13PM"));
        $("#event6").append(localStorage.getItem("14PM"));
        $("#event7").append(localStorage.getItem("15PM"));
        $("#event8").append(localStorage.getItem("16PM"));
        $("#event9").append(localStorage.getItem("17PM"));
    })


//1. WHEN I open the planner
// THEN the current day is displayed at the top of the calendar***

//2. WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours***

//3. WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

//4. WHEN I click into a timeblock
// THEN I can enter an event***

//5. WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

//6. WHEN I refresh the page
// THEN the saved events persist

//Start with date display
var today = moment().format('MMMM Do, YYYY');
$("#currentDay").text(today);

//Lets set the time Classes for the table row displays
// var past = className("table-secondary");
// var present = className("table-success");
// var future = ("table-danger");

//Organize our time variables Start
//Set moment to var and format for only the hour
var moment = moment().format('k');
console.log(moment);
console.log(today);

//Convert the moment to a number using parseInt
console.log(parseInt(moment));

//set the parsed moment number to a var
var hourNow = parseInt(moment);
console.log(hourNow);

//set variables for pur data attribute to be compared with our moment
var rowTime = document.querySelector(".tRow").dataset.time;
console.log(rowTime);
//Parse rowTime to evaluate
var rowTimeNum = parseInt(rowTime);
console.log(rowTimeNum);

//We will compare hourNow vs rowTimeNum in our conditional

//How to approach the time/class change task
// 1. We need to get the value of moment(now)format hour
// 2.We need to parseInt to convert string to number so that we can compare it against the container value.
// 3.We can set a custom data Attribute to our container to evaluate against our parsed int from moment().
// 4. We can write a conditional if val>=num && <=val2 then className = something to change the color based on className (table-success, table-danger etc) based on the future/past/present.
//5.We need to compare for future and past. Is hourNow greater than rowTime-0.01?=past, else is future.
//6.Make a function to run the comparisons and setInterval to run every second, return and call function again.

console.log(typeof rowTime);
console.log(hourNow);
console.log(rowTimeNum);
console.log(++rowTimeNum);

// function checkTime() {

//     if (hourNow >= rowTimeNum && hourNow <= ++rowTimeNum) {
//         document.querySelector(".tRow").style.backgroundColor = "#77dd77";
//         } else if (hourNow > --rowTimeNum) {
//             document.querySelector(".tRow").style.backgroundColor = "#5a5a5a";
//         } else if (hourNow < ++rowTimeNum) {
//             document.querySelector(".tRow").style.backgroundColor = "#a11e1e";
//         }
// };
var r9 = document.getElementById("r9");
var r10 = document.getElementById("r10");
var r11 = document.getElementById("r11");
var r12 = document.getElementById("r12");
var r13 = document.getElementById("r13");
var r14 = document.getElementById("r14");
var r15 = document.getElementById("r15");
var r16 = document.getElementById("r16");
var r17 = document.getElementById("r17");

console.log(typeof hourNow);

if (hourNow > 9) {
    r9.className = "past";
} else if (hourNow === 9) {
    r9.className = "present";
} else if (hourNow < 9) {
    r9.className = "future";
}

if (hourNow > 10) {
    r10.className = "past";
} else if (hourNow === 10) {
    r10.className = "present";
} else if (hourNow < 10) {
    r10.className = "future";
}

if (hourNow > 11) {
    r11.className = "past";
} else if (hourNow === 11) {
    r11.className = "present";
} else if (hourNow < 11) {
    r11.className = "future";
}

if (hourNow > 12) {
    r12.className = "past";
} else if (hourNow === 12) {
    r12.className = "present";
} else if (hourNow < 12) {
    r12.className = "future";
}

if (hourNow > 13) {
    r13.className = "past";
} else if (hourNow === 13) {
    r13.className = "present";
} else if (hourNow < 13) {
    r13.className = "future";
}

if (hourNow > 14) {
    r14.className = "past";
} else if (hourNow === 14) {
    r14.className = "present";
} else if (hourNow < 14) {
    r14.className = "future";
}

if (hourNow > 15) {
    r15.className = "past";
} else if (hourNow === 15) {
    r15.className = "present";
} else if (hourNow < 15) {
    r15.className = "future";
}

if (hourNow > 16) {
    r16.className = "past";
} else if (hourNow === 16) {
    r16.className = "present";
} else if (hourNow < 16) {
    r16.className = "future";
}

if (hourNow > 17) {
    r17.className = "past";
} else if (hourNow === 17) {
    
    r17.className = "present";
} else if (hourNow < 1) {
    r17.className = "future";
}






var noteHour = document.querySelector("#noteHour");
var noteRow = document.querySelector("#noteRow");
//Next we need a moment() to check the hour, and 

//if(condition) {
//change display class past/present
//};

//We can set a variable for the moment() function.

//var moment = moment();

//Lets psuedo this..if moment()>=17:00 && <=9:00 then return, else if moment()>=9:00 && <=10:00 then d.gEBI(#p9 set class to table-success)else if moment()


//First get the id for the text input
var note = document.querySelector("#note");
//Next get the button
var noteSave = document.querySelector(".save-btn");

//Now we need to save the note to local Storage. Listen for click and function.
noteSave.addEventListener("click", function (event) {
    event.preventDefault();

    var hour = document.querySelector("#noteRow").value;
    var noteMessage = document.querySelector("#note").value;

    // displayMessage("success", "Noted!");

    localStorage.setItem("noteHour", hour);
    localStorage.setItem("note", noteMessage);
    console.log(noteSave);
})

function renderLastSaved() {
    var hour = localStorage.getItem("noteHour");
    var noteMessage = localStorage.getItem("note");

    // if (!email || !password) {
    //   return;
    // }

    note.textContent = noteMessage;
    noteRow.textContent = hour;
}



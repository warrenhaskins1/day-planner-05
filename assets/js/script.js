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

//Lets psuedo this..if moment()>=17:00 && <=9:00 then return, else if moment()>=9:00 && <=10:00 then d.gEBI(#p9 set class to table-success)else if moment()


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

function checkTime() {
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
};
checkTime();


// var noteHour = document.querySelector("#noteHour");
// var noteRow = document.querySelector("#noteRow");

//First get the id for the text input
// var note = document.querySelector("#note");
//Next get the button
// var noteSave = document.querySelector(".save-btn");

//Now we need to save the note to local Storage. Listen for click and function.
// noteSave.addEventListener("click", function (event) {
//     event.preventDefault();

// var hour = document.querySelector("#noteRow").value;
// var noteMessage = document.querySelector("#note").value;

// displayMessage("success", "Noted!");

//     localStorage.setItem("noteHour", hour);
//     localStorage.setItem("note", noteMessage);
//     console.log(noteSave);
// })

// function renderLastSaved() {
//     var hour = localStorage.getItem("noteHour");
//     var noteMessage = localStorage.getItem("note");

//     note.textContent = noteMessage;
//     noteRow.textContent = hour;
// }

//Try jQuery for localStorage

//Target btn with eventListener onclick
// $(".save-btn").on("click", function() {

//get the text values from the text-area
// console.log(this);
//key value pair, one for the text and one for the blocks id
// var note = $(this).siblings(".form-control").val();
// var timeBlock = $(this).parent().attr("id");

//Save the note to localStorage
// localStorage.setItem(timeBlock, note);

//Test in devtools application tab --undefined!!!!

// })
var text9 = document.querySelector(".note9")
var save9 = document.querySelector(".save-btn9");

var text10 = document.querySelector(".note10")
var save10 = document.querySelector(".save-btn10");

var text11 = document.querySelector(".note11")
var save11 = document.querySelector(".save-btn11");

var text12 = document.querySelector(".note12")
var save12 = document.querySelector(".save-btn12");

var text13 = document.querySelector(".note13")
var save13 = document.querySelector(".save-btn13");

var text14 = document.querySelector(".note14")
var save14 = document.querySelector(".save-btn14");

var text15 = document.querySelector(".note15")
var save15 = document.querySelector(".save-btn15");

var text16 = document.querySelector(".note16")
var save16 = document.querySelector(".save-btn16");

var text17 = document.querySelector(".note17")
var save17 = document.querySelector(".save-btn17");

renderLastMsg();

function renderLastMsg() {
    var msg9 = localStorage.getItem("msg9");
    text9.textContent = msg9;

    var msg10 = localStorage.getItem("msg10");
    text10.textContent = msg10;

    var msg11 = localStorage.getItem("msg11");
    text11.textContent = msg11;

    var msg12 = localStorage.getItem("msg12");
    text12.textContent = msg12;

    var msg13 = localStorage.getItem("msg13");
    text13.textContent = msg13;

    var msg14 = localStorage.getItem("msg14");
    text14.textContent = msg14;

    var msg15 = localStorage.getItem("msg15");
    text15.textContent = msg15;

    var msg16 = localStorage.getItem("msg16");
    text16.textContent = msg16;

    var msg17 = localStorage.getItem("msg17");
    text17.textContent = msg17;
}

save9.addEventListener("click", function (event) {
    event.preventDefault();
    var noteMsg9 = document.querySelector(".note9").value;
    localStorage.setItem("msg9", noteMsg9);
    renderLastMsg();
});
save10.addEventListener("click", function (event) {
    event.preventDefault();
    var noteMsg10 = document.querySelector(".note10").value;
    localStorage.setItem("msg10", noteMsg10);
    renderLastMsg();
});
save11.addEventListener("click", function (event) {
    event.preventDefault();
    var noteMsg11 = document.querySelector(".note11").value;
    localStorage.setItem("msg11", noteMsg11);
    renderLastMsg();
});
save12.addEventListener("click", function (event) {
    event.preventDefault();
    var noteMsg12 = document.querySelector(".note12").value;
    localStorage.setItem("msg12", noteMsg12);
    renderLastMsg();
});
save13.addEventListener("click", function (event) {
    event.preventDefault();
    var noteMsg13 = document.querySelector(".note13").value;
    localStorage.setItem("msg13", noteMsg13);
    renderLastMsg();
});
save14.addEventListener("click", function (event) {
    event.preventDefault();
    var noteMsg14 = document.querySelector(".note14").value;
    localStorage.setItem("msg14", noteMsg14);
    renderLastMsg();
});
save15.addEventListener("click", function (event) {
    event.preventDefault();
    var noteMsg15 = document.querySelector(".note15").value;
    localStorage.setItem("msg15", noteMsg15);
    renderLastMsg();
});
save16.addEventListener("click", function (event) {
    event.preventDefault();
    var noteMsg16 = document.querySelector(".note16").value;
    localStorage.setItem("msg16", noteMsg16);
    renderLastMsg();
});
save17.addEventListener("click", function (event) {
    event.preventDefault();
    var noteMsg17 = document.querySelector(".note17").value;
    localStorage.setItem("msg17", noteMsg17);
    renderLastMsg();
});


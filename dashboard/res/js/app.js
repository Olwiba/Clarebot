// People
var people = ['Ollie', 'Jonny', 'Matt', 'Anna', 'Jelmer', 'Conor', 'Sean'];
var previousAssignedPeople_daily = new Array;
var previousAssignedPeople_weekly = new Array;
var tickIntervalID, tick = 0, dDrawTime = 1440, wDrawTime = 10080;

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a
}

//Assign Daily Jobs
function dailyJobs() {

  var dailyPeople = shuffle(people);


  previousAssignedPeople_daily = dailyPeople;

  var p1 = dailyPeople[0];
  var p2 = dailyPeople[1];
  var p3 = dailyPeople[2];
  var p4 = dailyPeople[3];
  var p5 = dailyPeople[4];

  $('#bathroom-up--daily-person').html(p1);
  $('#kitchen--daily-person').html(p2);
  $('#bathroom-down--daily-person').html(p3);
  $('#downstairs--daily-person').html(p4);
  $('#outside--daily-person').html(p5);
}

//Assign Weekly Jobs
function weeklyJobs() {

  var weeklyPeople = shuffle(people);

  weeklyPeople.map(function(v, i) {
    if(weeklyPeople[i] == previousAssignedPeople_weekly[i]) {
      weeklyJobs();
    }
  })

  previousAssignedPeople_weekly = weeklyPeople;

  var p1 = weeklyPeople[0];
  var p2 = weeklyPeople[1];
  var p3 = weeklyPeople[2];
  var p4 = weeklyPeople[3];
  var p5 = weeklyPeople[4];
  var p6 = weeklyPeople[5];
  var p7 = weeklyPeople[6];


  $('#kitchen--weekly-person').html(p1);
  $('#bathroom-down--weekly-person').html(p2);
  $('#downstairs--weekly-person').html(p3);
  $('bathroom-up--weekly-person').html(p4);
  $('#hallway--weekly-person').html(p5);
  $('#lounge--weekly-person').html(p6);
  $('#outside--weekly-person').html(p7);
}

// Timing Calls
function checkTime() {

  var currentSeconds = new Date().getSeconds();
  var currentMinutes = new Date().getMinutes();
  var currentHour = new Date().getHours();
  var currentDay = new Date().getDay();

  var daysLeft = 7 - currentDay;
  var minsLeft = 60 - currentMinutes;
  var hrsLeft = 24 - currentHour;
  var secsLeft = 60 - currentSeconds;

  $('#bathroom-up--daily-timer').html(hrsLeft + " h " + minsLeft + " m " + secsLeft + " s");
  $('#kitchen--daily-timer').html(hrsLeft + " h " + minsLeft + " m " + secsLeft + " s");
  $('#bathroom-down--daily-timer').html(hrsLeft + " h " + minsLeft + " m " + secsLeft + " s");
  $('#downstairs--daily-timer').html(hrsLeft + " h " + minsLeft + " m " + secsLeft + " s");
  $('#outside--daily-timer').html(hrsLeft + " h " + minsLeft + " m " + secsLeft + " s");

  $('#kitchen--weekly-timer').html(daysLeft + " d " + hrsLeft + " h " + minsLeft + " m " + secsLeft + " s");
  $('#bathroom-down--weekly-timer').html(daysLeft + " d " + hrsLeft + " h " + minsLeft + " m " + secsLeft + " s");
  $('#downstairs--weekly-timer').html(daysLeft + " d " + hrsLeft + " h " + minsLeft + " m " + secsLeft + " s");
  $('#bathroom-up--weekly-timer').html(daysLeft + " d " + hrsLeft + " h " + minsLeft + " m " + secsLeft + " s");
  $('#hallway--weekly-timer').html(daysLeft + " d " + hrsLeft + " h " + minsLeft + " m " + secsLeft + " s");
  $('#lounge--weekly-timer').html(daysLeft + " d " + hrsLeft + " h " + minsLeft + " m " + secsLeft + " s");
  $('#outside--weekly-timer').html(daysLeft + " d " + hrsLeft + " h " + minsLeft + " m " + secsLeft + " s");

  if (currentHour == 0 && currentMinutes == 0 && currentSeconds == 0) {
    dailyJobs();
  }

  if (currentDay == 0 && currentHour == 0 && currentMinutes == 0 && currentSeconds == 0) {
    weeklyJobs();
  }

  setTimeout(checkTime, 1000);
}


// Start
function start() {
  dailyJobs();
  checkTime();
  setTimeout(checkTime, 1000);
}

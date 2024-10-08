buildMonth();

/* Create calendar functions */
function buildMonth() {
  const date = new Date();
  const actualYear = date.getFullYear();
  const actualMonth = date.getMonth();
  const actualDay = date.getDate();
  
  let firstLast = [
    new Date(actualYear, actualMonth, 1),
    new Date(actualYear, actualMonth + 1, 0),
  ];

  firstLast = firstLast.map((date) => ({
    weekDay: getDayPosition(date.toDateString().split(" ")[0]),
    absoluteDay: date.toDateString().split(" ")[2],
  }));

  const calendar = document.querySelector(".calendari");
  const days = Array.from(calendar.children);
  calendar.children = days.map((day, count) => {
    if (
      getDayCalendarPosition(day) < firstLast[0].weekDay ||
      count - firstLast[0].weekDay >= firstLast[1].absoluteDay
    ) {
      day.classList.add("hiddenDaySeven");
    } else {
      let tournamentsHtml = retrieveTournaments(day, actualMonth, actualYear);
      if (count - firstLast[0].weekDay < actualDay - 1) {
        day.classList.add("pastDay");
      }
      day.innerHTML = `<div class="dayInfo">
            <span class="dayLetter">${getDayLetter(count % 7)}</span>
            <span class="dayNumber">${count - firstLast[0].weekDay + 1}</span>
          </div>`;
    }
  });
}

function getDayPosition(day) {
  return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(day);
}

function getDayLetter(day) {
  return ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"][day];
}

function getDayCalendarPosition(calendarDay) {
  return calendarDay.id.split("day")[1];
}

function retrieveTournaments(day, actualMonth, actualYear) {
  if (day.id === "day17") console.log(day);
}

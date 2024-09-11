buildMonth();

/* Create calendar functions */
function buildMonth() {
  const date = new Date();
  const actualYear = date.getFullYear();
  const actualMonth = date.getMonth();
  let firstLast = [
    new Date(actualYear, actualMonth, 1),
    new Date(actualYear, actualMonth + 1, 0),
  ];
  firstLast = firstLast.map((date) =>
    getDayPosition(date.toDateString().split(" ")[0])
  );

  const calendar = document.querySelector(".calendari");
  const days = Array.from(calendar.children);
  calendar.children = days.map((day) => {
    if (getDayCalendarPosition(day) < firstLast[0]) {
      day.style.display = "none";
    }
  });
}

function getDayPosition(day) {
  return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(day);
}

function getDayCalendarPosition(calendarDay) {
    return calendarDay.id.split("day")[1];
}

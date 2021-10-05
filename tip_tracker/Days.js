const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// Select the calendar grid header element
const daysOfWeekElement = document.getElementById("days-of-week");

// Loop through the array of weekdays
WEEKDAYS.forEach(weekday => {
  // For each item in the array, make a list item element
  const weekDayElement = document.createElement("li");
  // Append a child element inside the list item...
  daysOfWeekElement.appendChild(weekDayElement);
  /// ...that contains the value in the array
  weekDayElement.innerText = weekday;
})

const isWeekend = day => {
    return day % 7 === 0 || day % 7 === 6

}



const calendarDays = document.getElementById('calendar-days')

for (let day=1; day <= 31; day++){
    const weekend = isWeekend(day)
    calendarDays.insertAdjacentHTML("beforeend", `<li class="day ${weekend ? "weekend" : ""}">${day}</li>`)
}
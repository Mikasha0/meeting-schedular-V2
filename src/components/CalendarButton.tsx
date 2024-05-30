import { startOfToday, isToday, isEqual, isSameMonth, format } from "date-fns";
import { CalendarButtonTypes } from "../types/calendar-button.types";
export default function CalendarButton({
  day,
  selectedDay,
  setSelectedDay,
  firstDayCurrentMonth,
  isSaturday,
  isSunday,
  classNames,
}: CalendarButtonTypes) {
  const currentDate = startOfToday();

  return (
    <button
      type="button"
      onClick={() => {
        setSelectedDay(day);
      }}
      className={classNames(
        isEqual(day, selectedDay) && "text-white",
        !isEqual(day, selectedDay) && isToday(day) && "text-blue-700",

        !isEqual(day, selectedDay) &&
          !isToday(day) &&
          isSameMonth(day, firstDayCurrentMonth) &&
          "text-black",

        !isEqual(day, selectedDay) &&
          !isToday(day) &&
          !isSameMonth(day, firstDayCurrentMonth) &&
          "text-gray-900",
        isEqual(day, selectedDay) && isToday(day) && " bg-black text-red-600",
        isEqual(day, selectedDay) && !isToday(day) && "bg-black text-white",
        !isEqual(day, selectedDay) &&
          "bg-[#e5e7eb] hover:ring-2 ring-black focus:ring-2 focus:ring-black dark:focus:ring-black dark:focus:bg-black ",
        (isEqual(day, selectedDay) || isToday(day)) && "font-semibold",
        "mx-auto flex button-size items-center justify-center rounded-lg",
        (isSaturday || isSunday) &&
          "pointer-events-none button-background-disabled",
        day <= currentDate && "pointer-events-none button-background-disabled"
      )}
    >
      <time dateTime={format(day, "yyyy-MM-dd")}>{format(day, "d")}</time>
    </button>
  );
}

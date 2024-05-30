import { format, startOfToday } from "date-fns";
import { MeetingTimesTypes } from "../types/meeting-times.types";
import "../styles/meeting.css"
export default function MeetingTimes({
  selectedDay,
  timeValues,
  data,
  navigate,
  setVisible,
  visible,
}: MeetingTimesTypes) {
  
  const handleMeetingNavigation = (time: React.Key | null) => {
    const currentDate = startOfToday();
    let selectedDate = new Date(selectedDay);
    const year = selectedDay.getFullYear().toString();
    const month = (selectedDay.getMonth() + 1).toString();
    const day1 = selectedDay.getDate();
    const date = year + "/" + month + "/" + day1;
    if (data.id) {
      navigate(`/meeting/?reschedule=${data.id}/&time=${time}&date=${date}`);
      setVisible(!visible);
    } else if (selectedDate <= currentDate) {
      console.log("Error: Selected date is in the past");
      navigate("/error");
      return;
    } else {
      navigate(`/meeting/?time=${time}&date=${date}`);
      setVisible(!visible);
    }
  };

  return (
    <section className="mt-12 md:mt-0 md:pl-8 md:pr-12 pt-5 pb-5 scrollable">
      <div className="date-time flex justify-between">
        <h2 className="font-semibold text-black">
          <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
            {format(selectedDay, "EEEE, dd MMMM")}
          </time>
        </h2>
      </div>

      {timeValues.map((time) => (
        <button
          key={time}
          type="button"
          className="meeting-time-button text-black flex justify-center hover:text-white border border-gray-300 hover:bg-gray-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-0 mt-3"
          onClick={() => {
            handleMeetingNavigation(time);
          }}
        >
          {time}
        </button>
      ))}
    </section>
  );
}

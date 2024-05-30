import { useState } from "react";
import MeetingDetails from "../components/MeetingDetails";
import Calendar from "../components/Calendar";
import { useCurrentMonth } from "../utils/CalendarUtils";
import { ACCEPTED_TIME, Weekday, colStartClasses } from "../types/z.schema";
import { getDay } from "date-fns";
import { getNextBusinessDay } from "../utils/nextBusinessDay";
import "../styles/meeting.css";
import MeetingTimes from "../components/MeetingTimes";
import { useNavigate } from "react-router-dom";
import MeetingForm from "../components/MeetingForm";

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}
export default function meeting() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const tomorrow = getNextBusinessDay();
  const [selectedDay, setSelectedDay] = useState(tomorrow);
  const timeValues = Object.values(ACCEPTED_TIME);
  const data = new Date();
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const {
    firstDayCurrentMonth,
    days,
    previousMonth,
    nextMonth,
    handleRadioChange,
    selectedLocation,
  } = useCurrentMonth();

  return (
    <div className="min-h-screen bg-[#f3f4f6] pt-8 pb-4">
      <div
        className={`max-w-md  mx-auto  md:max-w-4xl  rounded-lg ${
          visible === true ? "default-width" : "toggled-width"
        }`}
      >
        <div className="flex flex-col md:flex-row sm:divide-x">
          <MeetingDetails data={data} visible={visible} />
          {!visible && (
            <Calendar
              firstDayCurrentMonth={firstDayCurrentMonth}
              previousMonth={previousMonth}
              nextMonth={nextMonth}
              Weekday={Weekday}
              days={days}
              getDay={getDay}
              classNames={classNames}
              colStartClasses={colStartClasses}
              setSelectedDay={setSelectedDay}
              selectedDay={selectedDay}
            />
          )}
          {!visible && (
            <MeetingTimes
              selectedDay={selectedDay}
              timeValues={timeValues}
              data={data}
              navigate={navigate}
              setVisible={setVisible}
              visible={visible}
            />
          )}
          {visible && (
            <MeetingForm
              toggleVisibility={toggleVisibility}
              handleRadioChange={handleRadioChange}
              selectedLocation={selectedLocation}
            />
          )}
        </div>
      </div>
    </div>
  );
}

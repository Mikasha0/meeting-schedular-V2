import { ChangeEventHandler } from "react";
import { MeetingLocations } from "../types/z.schema";

interface RadioButtonsTypes{
    labelName:string,
    value:MeetingLocations,
    onChange?:ChangeEventHandler<HTMLInputElement>
}
export default function RadioButtons({labelName, value,...inputProps}:RadioButtonsTypes) {
  return (
    <div className="flex items-center mb-2">
      <input
        type="radio"
        id="Video_Call"
        name="location"
        value={value}
        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
       {...inputProps}
      />
      <label htmlFor="Video_Call" className="block ml-2 text-sm text-gray-600 ">
        {/* Video Call (Yarsa Meet) */}
        {labelName}
      </label>
    </div>
  );
}

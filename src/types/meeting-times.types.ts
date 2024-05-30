import { NavigateFunction } from "react-router-dom";
// import { CreateMeetingDto } from "./z.schema";
import { Key } from "react";

export interface MeetingTimesTypes{
    selectedDay:Date,
    timeValues:Array<Key | null>,
    data:any,
    navigate:NavigateFunction,
    setVisible:(arg:boolean)=>void,
    visible:boolean

}
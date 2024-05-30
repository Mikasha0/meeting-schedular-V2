export interface CalendarButtonTypes{
    day:Date,
    selectedDay:number | Date,
    setSelectedDay:(arg:Date)=>void,
    firstDayCurrentMonth:Date,
    isSaturday:boolean,
    isSunday:boolean,
    classNames:any
}
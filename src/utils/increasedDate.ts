import { addMinutes, format } from 'date-fns';

export const getIncreasedTime = (time:any) => {
  if (time !== null && time !== undefined) {
    const [hours, minutes] = time.split(':');
    const increasedTime = addMinutes(new Date(0, 0, 0, parseInt(hours), parseInt(minutes)), 30);
    return format(increasedTime, 'HH:mm');
  }
  return '';
};


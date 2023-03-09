export default function ConvertTime(time) {
  const timeString = "" + time;
  const [hours, minutes] = timeString.split(":").map(Number);
  const timeInMinutes = hours * 60 + minutes;
  return timeInMinutes;
}

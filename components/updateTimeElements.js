// CURRENT TIME
export default function updateTimeElements() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let checkAMPM = hours >= 12 ? "PM" : "AM";
  const greetingText =
    checkAMPM === "AM" && hours >= 1 && hours <= 12
      ? "Good morning, "
      : checkAMPM === "PM" && hours >= 12 && hours <= 18
      ? "Good afternoon, "
      : "Good evening, ";

  const set12hoursTime = hours > 12 ? (hours -= 12) : hours;

  const formattedTime = `${String(set12hoursTime).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")} ${checkAMPM}`;

  return {
    greetingText,
    formattedTime,
  };
}

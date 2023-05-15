export function getCorrectDateFormat(dateValue) {
  let dateTime;
  if (arguments.length == 0) {
    dateTime = new Date().toLocaleString("en-EN", "Europe/berlin");
  } else {
    dateTime = new Date(Date.parse(dateValue)).toLocaleString(
      "en-EN",
      "Europe/berlin"
    );
  }
  console.log(dateTime);
  let dateToday = new Date(new Date(dateTime));
  let year = dateToday.getFullYear().toString();
  let month =
    dateToday.getMonth() < 10
      ? "0" + dateToday.getMonth().toString()
      : dateToday.getMonth().toString();
  let day =
    dateToday.getDate() < 10
      ? "0" + dateToday.getDate().toString()
      : dateToday.getDate().toString();
  let hour =
    dateToday.getHours() < 10
      ? "0" + dateToday.getHours().toString()
      : dateToday.getHours().toString();
  let minute =
    dateToday.getMinutes() < 10
      ? "0" + dateToday.getMinutes().toString()
      : dateToday.getMinutes().toString();

  return (dateToday =
    year + "-" + month + "-" + day + "T" + hour + ":" + minute);
}

let header = document.getElementsByTagName("h1")[0];
let button = document.getElementsByClassName("button")[0];
let dateSelected = document.getElementsByClassName("dateSelected")[0];
let content = document.getElementsByClassName("content")[0];

let checkMessage = () => {
  let dateArr = [];
  let fullDate = new Date();
  let year = fullDate.getFullYear();
  let date = fullDate.getDate();

  date =
    String(fullDate.getDate()).length == 1
      ? "0" + fullDate.getDate()
      : fullDate.getDate();

  let month =
    String(fullDate.getMonth()).length == 1
      ? "0" + (fullDate.getMonth() + 1)
      : fullDate.getMonth() + 1;

  return [month == dateSelected.value[1], date == dateSelected.value[2]]
    ? "Today is your birthday? Party Time!"
    : "Sad :( ! No parties today";
};

let months = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec"
};

let generateMessage = e => {
  e.preventDefault();
  header.textContent = checkMessage();
  let dateArr = String(dateSelected.value).split("-");
  let noOfDaysOld =
    (new Date().getFullYear() - Number(dateArr[0])) * 365 +
    (new Date().getMonth() - Number(dateArr[1]) + 1) * 30 +
    (new Date().getDate() - Number(dateArr[2]));

  content.innerHTML = `<p>Your birthday is ${months[dateArr[1]]} ${
    dateArr[2]
  }</p> 
  <p> You're ${new Date().getFullYear() - dateArr[0]} years old </p>
  <p> You're ${noOfDaysOld} days old </p>
  <p> You're ${noOfDaysOld * 24 * 60} minutes old </p>
  `;
};

button.addEventListener("click", e => generateMessage(e));

// function tijd() {
//     const element = document.getElementById("zaman")
//     element.new Date().toLocaleTimeString()
// }

function showDateTime() {
    var myDiv = document.getElementById("myDiv");
  
    var date = new Date();
    var dayList = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Zat"];
    var monthNames = [
      "Januari",
      "Februari",
      "Maart",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Augustus",
      "September",
      "October",
      "November",
      "December"
    ];
    var dayName = dayList[date.getDay()];
    var monthName = monthNames[date.getMonth()];
    var today = `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()}`;
  
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
  
    var time = hour + ":" + min;
    myDiv.innerText = `${today}.${time}`;
  }
  setInterval(showDateTime, 1000);
  
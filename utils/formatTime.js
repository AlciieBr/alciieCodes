module.exports = formatTime

function formatTime(seconds) {
     let minutes = Math.floor(seconds / 60);
     seconds -= minutes * 60;
     let hours = Math.floor(minutes / 60);
     minutes -= hours * 60;
     let days = Math.floor(hours / 24)
     hours -= days * 24
     let years = Math.floor(days / 365);
     days -= years * 365;
     let timeUnits = [];
     
     if (years) {
       timeUnits.push(years === 1 ? `${years} year` : `${years} years`);
       }
     if (days) {
       timeUnits.push(days === 1 ? `${days} day` : `${days} days`);
     }
     if (hours) {
       timeUnits.push(hours === 1 ? `${hours} hour` : `${hours} hours`);
     }
     if (minutes) {
       timeUnits.push(minutes === 1 ? `${minutes} minute` : `${minutes} minutes`);
     }
     if (seconds) {
       timeUnits.push(seconds === 1 ? `${seconds} second` : `${seconds} seconds`);
     }
   
     if (timeUnits.length === 0) {
       return "now";
     } else if (timeUnits.length === 1) {
       return timeUnits[0];
     } else if (timeUnits.length === 2) {
       return timeUnits.join(" and ");
     } else {
       let lastUnit = timeUnits.pop();
       let formattedUnits = timeUnits.join(", ");
       return `${formattedUnits} and ${lastUnit}`;
     }
   }
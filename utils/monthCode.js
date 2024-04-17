module.exports = monthCode;

function monthCode(month) {
  if (typeof month === "string") {
    const monthCodes = {
      Jan: "01",      Feb: "02",
      Mar: "03",      Apr: "04",
      May: "05",      Jun: "06",
      Jul: "07",      Aug: "08",
      Sep: "09",      Oct: "10",
      Nov: "11",      Dec: "12",
    };
    return monthCodes[month.slice(0, 3)];
  }

  if (typeof month === "number") {
     month = parseInt(month.toString().padStart("2", 0))
     month = month.length === 2 ? month : month.toString().slice(0, 2)
    if (month > 12 || month < 1) return (console.error("Invalid month, please check your input"))
    const monthCodes = {
      01: "Jan",      02: "Feb",
      03: "Mar",      04: "Apr",
      05: "May",      06: "Jun",
      07: "Jul",      08: "Aug",
      09: "Sep",      10: "Oct",
      11: "Nov",      12: "Dec",
    };
    return monthCodes[month];
  }
}

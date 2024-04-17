module.exports = monthCode;

function monthCode(month) {
  if (typeof month === "string") {
    const monthCodes = {
      jan: "01",      feb: "02",
      mar: "03",      apr: "04",
      may: "05",      jun: "06",
      jul: "07",      aug: "08",
      sep: "09",      oct: "10",
      nov: "11",      dec: "12",
    };
    return monthCodes[month.slice(0, 3).toLowerCase()];
  }

  if (typeof month === "number") {
     month = parseInt(month.toString().padStart("2", 0))
     month = month.length === 2 ? month : month.toString().slice(0, 2)
    if (month > 12 || month < 1) return (console.error("Invalid month, please check your input"))
    const monthCodes = {
      1: "Jan",      2: "Feb",
      3: "Mar",      4: "Apr",
      5: "May",      6: "Jun",
      7: "Jul",      8: "Aug",
      9: "Sep",      10: "Oct",
      11: "Nov",      12: "Dec",
    };
    return monthCodes[month];
  }
}

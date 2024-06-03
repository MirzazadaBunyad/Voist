export const formattedTargetDate = (targetDateStr) => {
  const date = new Date(targetDateStr);

  // Define an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extract the components of the date
  const year = date.getUTCFullYear();
  const month = monthNames[date.getUTCMonth()]; // Months are zero-based in JavaScript
  const day = date.getUTCDate();
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  // Format the date as "Month Day, Year, HH:MM"
  return `${month} ${day}, ${year}, ${hours}:${minutes}`;
};

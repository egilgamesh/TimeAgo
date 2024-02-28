# TimeAgo
A simple Time Ago function that support a different localization


#  How to use

const timestampWithOffset = "2024-02-28T12:00:00+03:00";
console.log(timeAgo(timestampWithOffset, "default", "en-US")); // Output using US date format
console.log(timeAgo(timestampWithOffset, "default", "de-DE")); // Output using German time format


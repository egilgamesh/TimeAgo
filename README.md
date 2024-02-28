### TimeAgo
A simple Time Ago function that supports a different localization


if the time is greater than 7 days then present the actual date, otherwise will break it into time slots






## How to use
  ```javascript
const timestampWithOffset = "2024-02-28T12:00:00+03:00";
console.log(timeAgo(timestampWithOffset, "default", "en-US")); // Output using US date format
console.log(timeAgo(timestampWithOffset, "default", "de-DE")); // Output using German time format

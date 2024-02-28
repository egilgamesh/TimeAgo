some tweak for timeago function to support timestamp offset with datetime format

it is support US- Europ GB- Europe Germany



if the time is greater than 7 days then present the actual date, otherwise will break it to time slot



function timeAgo(timestampWithOffset, format = "default", locale = "en-US") {
    const currentDate = new Date();
    const inputDate = new Date(timestampWithOffset);



    const timeDifference = currentDate - inputDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);



    if (days > 7) {
        return inputDate.toLocaleString(locale, { dateStyle: "medium", timeStyle: "short" });
    } else if (format === "default") {
        if (days > 0) {
            return days === 1 ? "1 day ago" : days + " days ago";
        } else if (hours > 0) {
            return hours === 1 ? "1 hour ago" : hours + " hours ago";
        } else if (minutes > 0) {
            return minutes === 1 ? "1 minute ago" : minutes + " minutes ago";
        } else {
            return seconds === 1 ? "1 second ago" : seconds + " seconds ago";
        }
    } else if (format === "short") {
        if (days > 0) {
            return days === 1 ? "1d" : days + "d";
        } else if (hours > 0) {
            return hours === 1 ? "1h" : hours + "h";
        } else if (minutes > 0) {
            return minutes === 1 ? "1m" : minutes + "m";
        } else {
            return seconds === 1 ? "1s" : seconds + "s";
        }
    } else {
        return "Unsupported format";
    }
}



// Examples usage with timestamp offset
const timestampWithOffset = "2024-02-28T12:00:00+03:00";
console.log(timeAgo(timestampWithOffset, "default", "en-US")); // Output using US date format
console.log(timeAgo(timestampWithOffset, "default", "de-DE")); // Output using German time format

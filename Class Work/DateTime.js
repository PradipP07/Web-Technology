// Date and Time in JavaScript 
// why we use Date and Time?
// 1. To display current date and time on website
// 2. To record timestamps for user activities (like login, logout, purchases)
// 3. To schedule events or reminders
// 4. To calculate time differences (like age calculation, event countdowns)

let myDate=new Date()
console.log(myDate.toString()); // it gives the complete date with time and timezone
console.log(myDate.toISOString()); // it gives the date in ISO format
console.log(myDate.toLocaleString()); // it gives date and time in local format
console.log(myDate.toLocaleDateString()); // it gives only date in local format
console.log(myDate.toLocaleTimeString()); // it gives only time in local format
console.log(typeof(myDate)); // it gives object as datatype
console.log(myDate.getDate()); // it gives the date of month
console.log(myDate.getMonth()+1); // it gives the month from 0 to 11 so we add +1 to get actual month
console.log(myDate.getFullYear()); // it gives the year in 4 digits
console.log(myDate.getHours()); // it gives the hours in 24 hours format
console.log(myDate.getMinutes());   // it gives the minutes
console.log(myDate.getSeconds());  // it gives the seconds
console.log(myDate.getMilliseconds());  // it gives the milliseconds

let myCreatedDate=new Date(2026,1,1); // year, month(0-11), date
console.log(myCreatedDate); // it gives the date in standard format
console.log(myCreatedDate.toLocaleString()); // it gives date and time in local format


let myCreatedDate1=new Date("01-01-2026"); // month-date-year
console.log(myCreatedDate1); // it gives the date in standard format
console.log(myCreatedDate1.toLocaleString()); // it gives date and time in local format


let myTimeStamp=Date.now(); // it gives the timestamp in milliseconds from 1st Jan 1970 to current date
console.log(myTimeStamp); // it gives the timestamp in milliseconds
console.log(Date.now()/1000); // it gives the timestamp in seconds
console.log(myCreatedDate1.getTime()); // it gives the timestamp of that particular date in milliseconds
console.log(Math.floor(Date.now()/1000)); // it gives the timestamp in seconds by removing decimal values

let newDate=new Date() // current date
console.log(newDate.getDate()); // current date of month
console.log(newDate.getFullYear()); // current year
console.log(newDate.getDay()); // current day of week 0 to 6 (0-Sunday,1-Monday,2-Tuesday,3-Wednesday,4-Thursday,5-Friday,6-Saturday)
console.log(newDate.getMonth()); // current month 0 to 11 (0-January,1-February,2-March,3-April,4-May,5-June,6-July,7-August,8-September,9-October,10-November,11-December)
console.log(newDate.getHours()); // current hours
console.log(newDate.getMinutes()); // current minutes


console.log(newDate.toLocaleString('default',{weekday:"long"})); // it gives the full name of the current day
console.log(newDate.toLocaleString('default',{weekday:"short"})); // it gives the short name of the current day
















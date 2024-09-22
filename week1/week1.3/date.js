let curr_date = new Date();
// const week_days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
// console.log("current Date:", curr_date);
// console.log(curr_date.getFullYear());
// console.log(week_days[curr_date.getDay()-1]);
// console.log(months[curr_date.getMonth()]);
const time_sec=curr_date.getTime()/1000;
console.log(time_sec);
const hour=time_sec/3600;
console.log(hour);
const day=hour/24
console.log(day);
const year=(abs(day/365));
console.log(year+1970);


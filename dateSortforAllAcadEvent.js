// getTotalMinutes(time) {
//   let newTime = time.split(':');
//   let hours = parseInt(newTime[0]);
//   let minutes = parseInt(newTime[1]);

//   return (hours * 60 + minutes)
// }

//this is basically what needs to happen 
//sort((a, b) => { return Number(a.date + a.time) - Number(b.date + b.time) })}


let eventList = [{
  id: 1,
  group_id: null,
  notes: `hello`,
  date: "2022-06-10T04:00:00.000Z",
  time: "13:00:00"
},
{
  id: 2,
  group_id: '42-2',
  notes: `hello***Fri Jul 01 2022 10:58:21 GMT-0400 (Eastern Daylight Time)***`,
  date: "2022-06-10T04:00:00.000Z",
  time: "14:00:00"
},
{
  id: 3,
  group_id: '42-2',
  notes: `hello***Fri Jul 01 2022 10:58:21 GMT-0400 (Eastern Daylight Time)***`,
  date: "2022-07-19T04:00:00.000Z",
  time: "14:00:00"
},
{
  id: 4,
  group_id: '42-2',
  notes: `hello***Fri Jul 01 2022 10:58:21 GMT-0400 (Eastern Daylight Time)***`,
  date: "2022-06-10T04:00:00.000Z",
  time: "12:00:00"
}]

//original 2 argument version
// let dateSort = (eventDate, eventTime) => {
//   //get date in seconds
//   let dateSeconds = new Date(eventDate).getTime() / 1000
//   //split time into hours and minutes
//   let newTime = eventTime.split(':');
//   //convert hour to seconds 
//   let hours = (parseInt(newTime[0]) * 60) * 60;
//   //convert minutes to seconds 
//   let minutes = parseInt(newTime[1]) * 60;

//   //return `dateSeconds ${dateSeconds}, newTime ${newTime}, hours ${hours}, minutes ${minutes}`
//   return dateSeconds + hours + minutes
// }

//1 arg version compatible with sort
let dateSort = (event) => {
  //get date in seconds
  let dateSeconds = new Date(event.date).getTime() / 1000
  //split time into hours and minutes
  let newTime = event.time.split(':');
  //convert hour to seconds 
  let hours = (parseInt(newTime[0]) * 60) * 60;
  //convert minutes to seconds 
  let minutes = parseInt(newTime[1]) * 60;

  //return `dateSeconds ${dateSeconds}, newTime ${newTime}, hours ${hours}, minutes ${minutes}`
  return dateSeconds + hours + minutes
}

//console.log(dateSort(eventList[0].date, eventList[0].time))
//console.log(compareTime(dateSort('2021-05-18', '9:20'), dateSort('2021-05-19', '9:19')))
//console.log(compareTime(dateSort(eventList[0].date, eventList[0].time), dateSort(eventList[1].date, eventList[1].time)))

let sortedList = eventList.sort((a, b) => {
  return dateSort(a) - dateSort(b)
});

console.log(sortedList)

//console.log(dateSort(eventList[0]))

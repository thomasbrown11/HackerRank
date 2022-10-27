let eventList = [{
  id: 1,
  location: 'gym',
  group_id: null,
  notes: `hello`,
  date: "2022-06-10T04:00:00.000Z",
  time: "13:00:00",
  added_time: "Tue Jun 07 2022 08:55:41 GMT - 0400(Eastern Daylight Time)",
  edited_time: null
},
{
  id: 2,
  location: 'library',
  group_id: '42-1',
  notes: ``,
  date: "2022-06-10T04:00:00.000Z",
  time: "14:00:00",
  added_time: 'Tue Jun 05 2022 09:55:41 GMT-0400 (Eastern Daylight Time)',
  edited_time: 'Tue Jul 07 2022 14:22:43 GMT-0400 (Eastern Daylight Time)',
},
{
  id: 4,
  location: 'room 204',
  group_id: '42-3',
  notes: ``,
  date: "2022-06-10T04:00:00.000Z",
  time: "12:00:00",
  added_time: 'Tue Jul 07 2022 16:22:43 GMT-0400 (Eastern Daylight Time)',
  editted_time: null
},
{
  id: 3,
  location: 'room 104',
  group_id: '42-2',
  notes: ``,
  date: "2022-07-19T04:00:00.000Z",
  time: "14:00:00",
  added_time: 'Tue Jul 07 2022 14:22:43 GMT-0400 (Eastern Daylight Time)',
  edited_time: 'Tue Jul 07 2022 16:22:43 GMT-0400 (Eastern Daylight Time)'
},
]

let state = {
  location: 'room 104',
  date: '2022-07-19T04:00:00.000Z',
  time: '14:00:00'
};


let editTimeSort = eventItm => {
  //literally just sort by added time since they all have one 
  let tsArray = eventItm.added_time.split(' ')
  //return secondsArray
  let dateSeconds = new Date(`${tsArray[1]} ${tsArray[2]} ${tsArray[3]}`).getTime() / 1000;
  //get consituents of timestamp time
  let timeArray = tsArray[4].split(':');
  //convert hours to seconds 
  let hours = (parseInt(timeArray[0]) * 60) * 60;
  //convert minutes to seconds 
  let minutes = parseInt(timeArray[1]) * 60;
  //return date time since 1970 in seconds + hours in seconds + minutes in seconds 
  return dateSeconds + hours + minutes;
}

//console.log(editTimeSort(eventList[0]));
//console.log(Date())
//console.log(new Date('Jul 07 2022').getTime())

console.log(editTimeSort(eventList[1]))
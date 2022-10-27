let array = [];
let date = Date();

let eventList = [{
  id: 1,
  group_id: null,
  notes: `hello`
},
{
  id: 2,
  group_id: '42-2',
  notes: `hello***Fri Jul 01 2022 10:58:21 GMT-0400 (Eastern Daylight Time)***`
}]

let newStamp = (event) => {
  let array = event.notes.split('***');


  if (!event.group_id) {
    return 'hello' + `***${Date()}***`
  } else {
    return array[0] + `***${Date()}***`
  }
}

console.log(newStamp(eventList[0]))
console.log(newStamp(eventList[1]))
// console.log(eventList[1].notes)
// console.log(eventList[1].notes.split('***'))
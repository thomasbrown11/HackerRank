let array = [];

let event = { id: 6, group_id: '42 - 7' }

let eventList = [{
  id: 1,
  group_id: '42-1'
},
{
  id: 2,
  group_id: '42-2'
},
{
  id: 3,
  group_id: '42-3'
},
{ id: 4, group_id: '43-6' },
{ id: 5, group_id: null }]

//console.log(eventList[0])

let revealAllEdits = () => {

  //make group_id value a string (failsafe)
  let string = event.group_id.toString();
  //split group_id into two values 
  let groupArray = string.split('-');
  //store only first half of current group_id to test Academic events group_id value
  let firstHalf = groupArray[0].trim();
  console.log(firstHalf);
  let newMap = eventList.map((i) => {
    let newsplit;
    if (!i.group_id) {
      newsplit = 'null'
    } else {
      newsplit = i.group_id.split('-')
    }

    if (newsplit.includes(firstHalf)) {
      return i.group_id;
    } else {
      return null
    }

  })

  return newMap
}

console.log(revealAllEdits())
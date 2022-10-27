let eventList = [
  // {
  //   //equal 
  //   id: 1,
  //   location: 'room 104',
  //   group_id: null,
  //   notes: `hello`,
  //   date: "2022-06-10T04:00:00.000Z",
  //   time: "14:30:00",
  //   end_time: "16:30:00",
  //   added_time: "Tue Jun 07 2022 08:55:41 GMT - 0400(Eastern Daylight Time)",
  //   edited_time: null
  // },
  // {
  //   //starts before ends before
  //   id: 2,
  //   location: 'room 104',
  //   group_id: '42-1',
  //   notes: ``,
  //   date: "2022-06-10T04:00:00.000Z",
  //   time: "15:00:00",
  //   end_time: "17:00:00",
  //   added_time: 'Tue Jun 05 2022 09:55:41 GMT-0400 (Eastern Daylight Time)',
  //   edited_time: 'Tue Jul 07 2022 14:22:43 GMT-0400 (Eastern Daylight Time)',
  // },
  // {
  //   //starts same time ends before  
  //   id: 4,
  //   location: 'room 104',
  //   group_id: '42-3',
  //   notes: ``,
  //   date: "2022-06-10T04:00:00.000Z",
  //   time: "14:30:00",
  //   end_time: "17:00:00",
  //   added_time: 'Tue Jul 07 2022 16:22:43 GMT-0400 (Eastern Daylight Time)',
  //   editted_time: null
  // },
  // {
  //   //starts after ends after 
  //   id: 5,
  //   location: 'room 104',
  //   group_id: '42-3',
  //   notes: ``,
  //   date: "2022-06-10T04:00:00.000Z",
  //   time: "14:00:00",
  //   end_time: "16:00:00",
  //   added_time: 'Tue Jul 07 2022 16:22:43 GMT-0400 (Eastern Daylight Time)',
  //   editted_time: null
  // },
  // {
  //   //starts after ends same time 
  //   id: 6,
  //   location: 'room 104',
  //   group_id: '42-3',
  //   notes: ``,
  //   date: "2022-06-10T04:00:00.000Z",
  //   time: "14:00:00",
  //   end_time: "16:30:00",
  //   added_time: 'Tue Jul 07 2022 16:22:43 GMT-0400 (Eastern Daylight Time)',
  //   editted_time: null
  // },
  // {
  //   //starts before ends after 
  //   id: 7,
  //   location: 'room 104',
  //   group_id: '42-3',
  //   notes: ``,
  //   date: "2022-06-10T04:00:00.000Z",
  //   time: "15:00:00",
  //   end_time: "16:15:00",
  //   added_time: 'Tue Jul 07 2022 16:22:43 GMT-0400 (Eastern Daylight Time)',
  //   editted_time: null
  // },
  // {
  //   //starts after ends before 
  //   id: 7,
  //   location: 'room 104',
  //   group_id: '42-3',
  //   notes: ``,
  //   date: "2022-06-10T04:00:00.000Z",
  //   time: "14:00:00",
  //   end_time: "16:45:00",
  //   added_time: 'Tue Jul 07 2022 16:22:43 GMT-0400 (Eastern Daylight Time)',
  //   editted_time: null
  // },
  // {
  //   id: 3,
  //   location: 'room 104',
  //   group_id: '42-2',
  //   notes: ``,
  //   date: "2022-07-19T04:00:00.000Z",
  //   time: "14:00:00",
  //   end_time: '15:00:00',
  //   added_time: 'Tue Jul 07 2022 14:22:43 GMT-0400 (Eastern Daylight Time)',
  //   edited_time: 'Tue Jul 07 2022 16:22:43 GMT-0400 (Eastern Daylight Time)'
  // }
  {
    id: 3,
    location: 'room 104',
    group_id: '42-2',
    notes: ``,
    date: "2022-07-10T04:00:00.000Z",
    time: "14:00:00",
    end_time: '15:00:00',
    added_time: 'Tue Jul 07 2022 14:22:43 GMT-0400 (Eastern Daylight Time)',
    edited_time: 'Tue Jul 07 2022 16:22:43 GMT-0400 (Eastern Daylight Time)'
  },
  {
    id: 3,
    location: 'room 104',
    group_id: '42-2',
    notes: ``,
    date: "2022-07-10T04:00:00.000Z",
    time: "14:00:00",
    end_time: '15:00:00',
    added_time: 'Tue Jul 07 2022 14:22:43 GMT-0400 (Eastern Daylight Time)',
    edited_time: 'Tue Jul 07 2022 16:22:43 GMT-0400 (Eastern Daylight Time)'
  }
]

let state = {
  location: 'room 104',
  date: '2022-06-10',
  time: '14:30',
  endTime: '16:30'
};



let renderTimeConflict = () => {
  //convert times to minutes in number type
  let timeConvert = (time) => {
    let timeArray = time.split(':');
    let hours = parseInt(timeArray[0]) * 60;
    let minutes = parseInt(timeArray[1])
    return hours + minutes;
  }
  //convert long date to short date
  let dateConvert = (date) => {
    let dateArray = date.split('T');
    return dateArray[0]
  }

  //test all eventList objects and measure for conflicts. If any conflicts with current state values 
  //return the conflicting time values and set dbConflict to true for Academic warning render/submit break
  for (let i = 0; i < this.state.eventList.length; i++) {
    let eventStart = timeConvert(this.state.time);
    let eventEnd = timeConvert(this.state.endTime);
    let testStart = timeConvert(this.state.eventList[i].time);
    let testEnd = timeConvert(this.state.eventList[i].end_time);

    if (this.state.location === this.state.eventList[i].location && dateConvert(this.state.date) === dateConvert(this.state.eventList[i].date)) {
      if (eventStart <= testStart && eventEnd >= testStart) {
        return this.setState({ dbTime: testStart, dbEndTime: testEnd, dbConflict: true })
      }
      else if (eventStart < testEnd && eventEnd >= testEnd) {
        return this.setState({ dbTime: testStart, dbEndTime: testEnd, dbConflict: true })
      }
      else if (eventStart > testStart && eventEnd < testEnd) {
        return this.setState({ dbTime: testStart, dbEndTime: testEnd, dbConflict: true })
      }
    }
  }
}

console.log(renderTimeConflict())
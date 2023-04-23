import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

function CalendarView() {
  const localizer = momentLocalizer(moment)
  let [events, setEvent] = useState()
  
  let eventData = ()=>{
   try {
    if(localStorage.getItem("appointments") !== null){
      let events1 = [...JSON.parse(localStorage.getItem('appointments'))]

      let eventArray = []
      for(let i=0; i<events1.length; i++){
        let index = i
        let date = events1[i].date
        let title = events1[i].client
        let startTime = events1[i].startTime
        let endTime = events1[i].endTime

        let eventObject = {
          id : index,
          title : title,
          start : moment(`${date} ${startTime}`).toDate(),
          end : moment(`${date} ${endTime}`).toDate()
        }
        eventArray.push(eventObject)
        setEvent(eventArray)
      }
    }
   } catch (error) {
    console.log(error);
   }
  }

  useEffect(()=>{
    if(localStorage.getItem("appointments") !== null) eventData()
  },[])

  return <div>
    <NavBar/>
    <div className='wrapper'>
      <SideBar/>
      <div className='w-full'>
        <h1 className="pl-5 pt-3 text-2xl text-blue-900 font-semibold">Calendar View</h1>
        <div className = 'px-5 pt-3 text-xl text-blue-900 font-semibold '>
        <Calendar 
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height:'85vh'}}
        />
        </div>
      </div>
    </div>
  </div>
}

export default CalendarView

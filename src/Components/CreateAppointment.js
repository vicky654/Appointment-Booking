import React, {useState, useEffect} from 'react'
import TimePicker from 'react-time-picker';
import { useNavigate } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'

function CreateAppointment() {

    let navigate = useNavigate()
    let [timeRecommed, setTimeRecommed] = useState(false)
    let [date,setDate] = useState()
    let [startTime,setStartTime] = useState('00:00')
    let [endTime,setEndTime] = useState('23:59')
    let [client,setClient] = useState()
    let [teamMembers,setTeamMembers] = useState()
    let [topicsToCover,setTopics] = useState()
    let [remarks,setRemarks] = useState()
    let [recommeded, setRecommeded] = useState('')

    let handleSubmit = ()=>{
     

        if (!date || !startTime || !endTime || !client || !teamMembers || !topicsToCover || !remarks) {
          alert('Please fill out all fields before submitting.');
        
        }else{
          localStorage.setItem(`appointments`, JSON.stringify([...JSON.parse(localStorage.getItem(`appointments`)||`[]`),
          {'date':`${date}`,
          'startTime':`${startTime}`,
          'endTime':`${endTime}`,
          'client':`${client}`,
          'teamMembers' : `${teamMembers}`,
          'topicsToCover' : `${topicsToCover}`,
          'remarks' : `${remarks}`
          }]))
      navigate('/listview')
        }
    }

    let getDatas = ()=>{
        try {
            if(localStorage.getItem("appointments") !== null){
                let data = [...JSON.parse(localStorage.getItem('appointments'))]
                let data1 = data.filter((e) => e.date === `${date}`)
    
                if (data1.length !== 0){
                    let data2 = data1[0].date
                    if (data2 === `${date}`) setTimeRecommed(!timeRecommed)
    
                    let timeArray = []
                    for(let i=0; i<data1.length; i++){
                        timeArray.push(data1[i].startTime, " - " ,data1[i].endTime, ", ")
                        setRecommeded(timeArray)
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        if(localStorage.getItem("appointments") !== null) getDatas()
    },[date,startTime])
       
  return <div >
  <NavBar/>
  <div className='wrapper '>
    <SideBar/>
    <div className='w-full'>
      <h1 className="px-5 pt-3 text-2xl text-blue-900 font-semibold">Create Appointment</h1>
      <div className='xl:w-full lg:w-[36] sm:w-[32]'>
      <form className="w-fill px-5 pt-3 pb-8 mb-4">
        <div className="flex flex-wrap mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date"> Date </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="date" type="date" placeholder="Select Date" onChange={(e)=>setDate(e.target.value)} required />
        </div>

        <div className="flex">
        <div className="flex flex-col mb-4 pr-10">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startTime"> Start Time </label>
                <TimePicker className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={setStartTime} value={startTime} locale="sv-sv"/>
            </div>

            <div className="flex flex-col mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endTime"> End Time </label>
                <TimePicker className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={setEndTime} value={endTime} locale="sv-sv"/>
            </div>
        </div>

        <div> 
            { timeRecommed ? 
                (<div className='text-red-500 visible mb-3  font-semibold'>
                    * Consider your existing session times, before selecting the time : <span className='bg-yellow-300 rounded-full px-3 py-1'>{recommeded}</span>
                </div>) : null
            }
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="client"> Client </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="client" type="text" placeholder="Client Details" onChange={(e)=>setClient(e.target.value)} required />
        </div>

        <div className="w-full mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="team"> Team Members </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="team" type="text" placeholder="Team Members" onChange={(e)=>setTeamMembers(e.target.value)} required />
        </div>

        <div className="w-full mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topics"> Topics to cover </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="topics" type="text" placeholder="Topics To Cover" onChange={(e)=>setTopics(e.target.value)} required />
        </div>

        <div className="w-full mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remarks"> Remarks </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="remarks" type="text" placeholder="Remarks" onChange={(e)=>setRemarks(e.target.value)} required />
        </div>

        <button onClick={()=>handleSubmit()} className="rounded-full bg-blue-900 px-5 py-1.5 font-semibold text-blue-50">Submit</button>
      </form>
      </div>
    </div>
  </div>
</div>
}

export default CreateAppointment
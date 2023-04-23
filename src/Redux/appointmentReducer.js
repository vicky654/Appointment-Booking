import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'appointments',
  initialState: {
    appointments: [
        {
            date : "22/2023",
            time : "8.00 A.M - 9.00 A.M",
            client : "Vicky verma",
            teamMembers : "vicky",
            topicsToCover : "Status about assessment",
            remarks : "Need to complete asap"
        },
    ],
  },
  reducers: {
    createAppointment: (state,action) => {
      state.appointments.push(action.payload)
   
    },
    editAppointment: (state,action) => {
      state.appointments.splice(action.payload.index,1,action.payload.data)
    },
    deleteAppointment: (state,action) => {
      state.appointments.splice(action.payload.index,1)
    },
  },
})

export const { createAppointment, editAppointment, deleteAppointment} = counterSlice.actions

export default counterSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import appointmentReducer from './appointmentReducer'

export default configureStore({
    reducer : {
        appointment : appointmentReducer,
    }
})
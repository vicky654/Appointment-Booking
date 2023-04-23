import React from 'react'

function DeleteAppointment(props) {
  return (
    <button
      className="text-red-600 hover:text-red-800"
      onClick={props.onDelete}
    >
      <i className="fa-solid fa-trash"></i>
    </button>
  )
}

export default DeleteAppointment

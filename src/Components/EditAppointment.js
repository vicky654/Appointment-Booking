import React, { useState } from 'react';

function EditAppointment(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    date: props.appointment.date,
    startTime: props.appointment.startTime,
    endTime: props.appointment.endTime,
    client: props.appointment.client,
    teamMembers: props.appointment.teamMembers,
    topicsToCover: props.appointment.topicsToCover,
    remarks: props.appointment.remarks,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onEdit(formData);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit}>
        <td className='border px-4 py-2 text-center'>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
        </td>
        <td className='border px-4 py-2 text-center'>
          <button onClick={() => setIsEditing(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
        </td>
        <td className='border px-4 py-2 text-center'>
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
        </td>
        <td className='border px-2 py-2 text-center'>
          <input type="time" name="startTime" value={formData.startTime} onChange={handleInputChange} />
        </td>
        <td className='border px-2 py-2 text-center'>
          <input type="time" name="endTime" value={formData.endTime} onChange={handleInputChange} />
        </td>
        <td className='border px-4 py-2 text-left'>
          <input type="text" name="client" value={formData.client} onChange={handleInputChange} />
        </td>
        <td className='border px-4 py-2 text-left'>
          <input type="text" name="teamMembers" value={formData.teamMembers} onChange={handleInputChange} />
        </td>
        <td className='border px-4 py-2 text-left'>
          <input type="text" name="topicsToCover" value={formData.topicsToCover} onChange={handleInputChange} />
        </td>
        <td className='border px-4 py-2 text-left'>
          <input type="text" name="remarks" value={formData.remarks} onChange={handleInputChange} />
        </td>
      </form>
    );
  }

  return (
    <td className='border px-4 py-2 text-center'>
      <button onClick={() => setIsEditing(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
    </td>
  );
}

export default EditAppointment;

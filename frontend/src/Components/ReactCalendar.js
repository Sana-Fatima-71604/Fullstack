import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import './ReactCalendar.css'

function ReactCalendar() {
    const [date, setDate] = useState(new Date());

    return (
        <div className='calendar'>
            <Calendar onChange = {setDate} value = {date} />
            
            <p style={{marginBottom: "10px", marginTop: "10px"}}><hr className='lh-10' style={{color: "black"}}/> <br/>Selected Date: {date.toDateString()}</p>
        </div>
    )
}

export default ReactCalendar;
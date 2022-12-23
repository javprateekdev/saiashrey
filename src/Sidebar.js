import React from 'react'
import Date from './Date'
import {CalendarMonthIcon} from '@mui/icons-material';
const Sidebar = () => {
  return (
    <>
    <div style={{height:"500px"}}>
  <div style={{marginTop:"10px"}}>
    <div style={{marginTop:"50px"}}>
    <h2 >For Booking Tickets</h2>
    </div>
  <Date />
  </div>
      
    </div>
    </>
  )
}

export default Sidebar;
import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker"
import DatePicker from "react-multi-date-picker"



const Date = () => {
    const [value, setValue] = useState()
   
  return (
    <>

    
    <DatePicker
  mapDays={({ date,today }) => {
    
    let isWeekend = [1,2,3,4,5].includes(date.weekDay.index) 
    
     
    if (isWeekend) return {
      disabled: true,
      style: { color: "red" },
      onClick: () => alert("Bookings are only available for Saturday and Sunday")
    }
    if (today>date) return {
        disabled: true,
        style: { color: "red" },
        onClick: () => alert("Bookings are only available for Saturday and Sunday")
      }

    if (date.day==24) return {
        disabled: true,
        style: { background: "orange" },
        onClick: () => alert("Date is Booked for Bhajan")
      }
   
   
  }}
  value={value}
  onChange={setValue}
  placeholder="Select Booking Date"
  style={{textAlign: "center"}}
/>
</>
  );
};
 export default Date;


 
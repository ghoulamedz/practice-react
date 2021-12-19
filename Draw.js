import React from "react";
import { useState } from "react";

const Draw = () => {
  const [rows, setRows] = useState();
  const [columns,setColumns] = useState();
  
  return (
  <>
    <input 
      type='text'
      placeholder='please submit columns'
      onChange= { e => setColumns(e.currentTarget.value)}
      value={columns}
    />
    <input
      type='text'
      placeholder='please submit rowss'
      onChange= { e => setRows(e.currentTarget.value)}
      value={rows}
    />
      {
        
         <div>*</div>
      }
  </>
  )
}
export default Draw;

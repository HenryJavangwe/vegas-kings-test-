import React from 'react'

function DropdownComponent() {

  const data = [
    {Team: 1, name: " Team 1"}, 
    {Team: 2, name: " Team 2"}, 
    {Team: 3, name: " Team 3"}, 
    {Team: 4, name: " Team 4"}
  ];
  
  return (
    <div>
      <select >
        {data.map((item, idx)=> <option key={item.idx} value={item.Team}>{item.name}</option>)}
      </select>
    </div>
  )
}

export default DropdownComponent

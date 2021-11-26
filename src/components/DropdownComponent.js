import React, { useState }  from 'react';

function DropdownComponent(props) {
  
  const [selectedValue, setSelectedValue ] =  useState("");

  return (
    <div>
      <select value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
        {props.options.map((item, idx)=> <option key={idx} value={item.attributes.event_title}>{item.attributes.event_title}</option>)}
      </select>
      <br/>
      <p>
        {selectedValue}
      </p>
    </div>
  )
}

export default DropdownComponent

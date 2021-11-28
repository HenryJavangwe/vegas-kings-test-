import React, { useState }  from 'react';
import DisplayData from './DisplayData';

function DropdownComponent(props) {
  const [selectedValue, setSelectedValue ] =  useState([]);
  // const [elementID, setElementID ] =  useState("");
  // console.log(selectedValue);
  function handler (e){
    setSelectedValue(e.target.value);
    // setElementID(e.target.id);
   }

  return (
    <div>
      <select value={selectedValue} onChange={ handler }>
        <option key={0}>Select...</option>
        {props.options.map((item, idx)=> <option key={idx+1} value={JSON.stringify(item.attributes)}> {item.attributes.event_title}</option>)}
      </select>
      <br/>
      <DisplayData details= {selectedValue}/>
    </div>
  )
}

export default DropdownComponent

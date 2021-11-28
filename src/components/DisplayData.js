import React from 'react'

function DisplayData(props) {
    const Clicked = val => {

        const data = [...props.attributes];
    
        const Info = data.filter(i => i.track.id === val);
    
        console.log(Info)
        // setTrackDetail(trackInfo[0].track);
    

    }
    return (
        <div>
            {props.details}
        </div>
    )
}

export default DisplayData

import React from "react";

const ResistenceDisplay = () =>{
    return(
        <div className="resistence-D-wrapper">
             {/* heade resistence designer */}
             <span className="resistence-D-spacer" style={{backgroundColor: '#fff', width: '5vmax', height:'9px', borderRadius: '50px'}}></span>

            <span className="resistence-D-spacer" style={{backgroundColor: 'red'}}></span>

            <span className="resistence-D-spacer" style={{backgroundColor: 'yellow'}}></span>

            <span className="resistence-D-spacer" style={{backgroundColor: 'blue'}}></span>

            <span className="resistence-D-spacer" style={{backgroundColor: 'green'}}></span>

             {/* foot resistence designer */}
            <span className="resistence-D-spacer" style={{backgroundColor: '#fff', width: '5vmax', height:'9px', borderRadius: '50px'}}></span>
        </div>
    )
}

export default ResistenceDisplay;
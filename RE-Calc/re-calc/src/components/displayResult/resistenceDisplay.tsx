import React, { useContext} from "react";
import KeyColorValueContext from '../../context/keyColorValueContext'

// interface ResistenceDisplayInterface{
//     color: object,
// }


const ResistenceDisplay = () =>{

    const {colorOne, colorTwo, colorTree, colorFor, step} = useContext(KeyColorValueContext);
    
    const selectedColorOne = `resistence-D-spacer ${colorOne.color}`;

    const selectedColorTwo = `resistence-D-spacer ${colorTwo.color}`;

    const selectedColorTree = `resistence-D-spacer ${colorTree.color}`;

    const selectedColorFor = `resistence-D-spacer ${colorFor.color}`;

    console.log(step)
    
    let corInSelection = `resistence-D-spacer inSelection white`;
    

    return(
        <div className="resistence-D-wrapper">
             {/* header resistence designer */}
             <span className="resistence-D-spacer" style={{backgroundColor: '#fff', width: '5vmax', height:'9px', borderRadius: '50px'}}></span>

            <span className={step === 0 ?corInSelection : selectedColorOne}></span>

            <span className={step === 1 ?corInSelection : selectedColorTwo}></span>

            <span className={step === 2 ?corInSelection : selectedColorTree}></span>

            <span className={step === 3 ? corInSelection : selectedColorFor}></span>

             {/* footer resistence designer */}
            <span className="resistence-D-spacer" style={{backgroundColor: '#fff', width: '5vmax', height:'9px', borderRadius: '50px'}}></span>
        </div>
    )
}

export default ResistenceDisplay;
import React, { useContext} from "react";
import KeyColorValueContext from '../../context/keyColorValueContext'
import './selectedColors.css';

//this component is similar to resisnceDisplay component  
const SelectedColors = () => {

    // context with color data
    const {colorOne, colorTwo, colorTree, colorFor} = useContext(KeyColorValueContext);

    const selectedColorOne = `selectedColor-item ${colorOne.color !== undefined ? colorOne.color : 'white'}`;

    const selectedColorTwo = `selectedColor-item ${colorTwo.color !== undefined ? colorTwo.color : 'white'}`;

    const selectedColorTree = `selectedColor-item ${colorTree.color !== undefined ? colorTree.color : 'white'}`;

    const selectedColorFor = `selectedColor-item ${colorFor.color !== undefined ? colorFor.color : 'white'}`;

    return(
        <>
            <div className="selectedColors-section">
                <ul className="selectedColor-wrapper">
                    <li style={
                            {
                                boxShadow: `0 1px 23px 3px ${colorOne.color}`,
                                opacity : `${colorOne.color !== undefined ? 1 : 0.3}`
                            }
                        } 
                        className={selectedColorOne}>

                    </li>
                    
                    <li style={
                            {
                                boxShadow: `0 1px 23px 3px ${colorTwo.color}`,
                                opacity : `${colorTwo.color !== undefined ? 1 : 0.3}`
                                
                            }
                        } 
                        className={selectedColorTwo}>

                    </li>

                    <li style={
                            {
                                boxShadow: `0 1px 23px 3px ${colorTree.color}`,
                                opacity : `${colorTree.color !== undefined ? 1 : 0.3}`
                            }
                        } 
                        className={selectedColorTree}>

                    </li>
                    
                    <li style={
                            {
                                boxShadow: `0 1px 23px 3px ${colorFor.color}`,
                                opacity : `${colorFor.color !== undefined ? 1 : 0.3}`
                            }
                        } 
                        className={selectedColorFor}>

                    </li>
                </ul>
            </div>
        </>
    )
}

export default SelectedColors
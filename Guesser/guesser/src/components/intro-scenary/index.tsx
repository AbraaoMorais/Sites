import React, { useEffect, useState } from "react";
import tecnologies from '../../assets/images/tecnologies.png'

// const oneSecond = 1000;
// const twoSecond = 2000;
// const treeSecond = 3000

//set framerate base based in animation css seconds
const framerateBase = 13 - 1;

// defaul setings
const frame0 = 9;
const frame1 = frame0 + framerateBase;
const frame2 = 33;
const frame3 = frame2 + framerateBase;
const frame4 = 106;

// test setings
// const frame0 = 0;
// const frame1 = frame0 + 0;
// const frame2 = 1;
// const frame3 = frame2 + framerateBase;
// const frame4 = 106;

const Intro = () =>{

    // const [fadeEffect, setFadeEffect] = useState(" ");
    const [countTimer, setCountTimer] = useState(0);

    const [isComponentCredites, setComponentCredites] = useState(false);
    const [isComponentTecnologies, setComponentTecnologies] = useState(false);
    const [isComponentGuesserLogo, setComponentGuesserLogo]= useState(false); 
    

    
    // track to animation intro scene
    const frameTrack=()=>{    
        
        useEffect(()=>{

            const timer = setTimeout(()=>{
                setCountTimer(countTimer+1)
            },1000);

            if (countTimer >= frame0){
                setComponentCredites(true)  
            }
            if(countTimer >= frame1){
                setComponentCredites(false);   
            }
            if(countTimer >= frame2){
                setComponentTecnologies(true)  
            }
            if(countTimer >= frame3){
                setComponentTecnologies(false)
            }
            if(countTimer >= frame4){
                setComponentGuesserLogo(true)
                clearTimeout(timer);
                // setComponentGuesserLogo(false)
            }         

            console.log(countTimer);
        },[countTimer]) 
        
       
    }
    frameTrack();


        //scene components
        const componentCredites = () =>{
            return(
                <>
                    <div id="firstFrame" className="fadeInIntro">
                           
                        <span className="intro-text-rotulo">
                            Developed by:
                        </span>
                        <h2 className="intro-header-title">
                            Abraão Morais
                        </h2>
                    </div>
                </>
            )
        }
        const componentTecnologies = ()=>{
            return(
                <>
                    <div id="firstFrame" className="fadeInIntro">
                           
                        <div className="intro-text-rotulo">
                            Project Technologys:
                       </div>
                       <img src={tecnologies}className="intro-header-title" />

                   </div>
                </>
            )
        }

        const componentGuesserLogo = () =>{
            return(
                <>
                    <div id="firstFrame" className="fadeInIntroFixed">
                           
                        <span className="intro-text-rotulo">
                               Developed by:
                       </span>
                       <h2 className="intro-header-title">
                           component 3
                       </h2>
                   </div>
                </>
            )
        }
    
    return(
        <>
            <section className="scenary-intro-bg">
                <div className="intro-overlay">
                    {   
                        isComponentCredites === true ? 
                        componentCredites() : null
                    }
                    {
                        isComponentTecnologies === true ?    componentTecnologies() : null
                    }
                    {
                        isComponentGuesserLogo === true ?     componentGuesserLogo() : null
                    }
                    <span className="intro-btn-skip">
                        Press any button to skip
                        </span>
                    </div>
                
            </section>
            
        </>
    )
}


export default Intro
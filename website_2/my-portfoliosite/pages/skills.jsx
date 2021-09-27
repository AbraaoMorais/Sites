import React, {Fragment, useRef, useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../scss/pages.module.scss'
import PSstyle from '../scss/page_skill.module.scss'
import TitleSubtitle from '../components/TitleSubtitle'
import Popup_details from '../components/Popup_details'

// import SwithPage from '../components/SwithPage.js'

const skills = () => {
    
    //estados
    const [popup, setPopup] = useState(false);   
    const [cardId,setCardId] = useState(null) 

    //seta id do componente para chamar popup correto
    const activePopup = (e) =>{
        setPopup(true);
        setCardId(e.currentTarget.id)
    }
  

    return(
        <Fragment>
            <Head>
                <title>
                    WebPortfolio: Abraão Morais
                </title>
                <meta name='keywords' content='web developer, programmer, react, nextjs, javascript'/>
                
            </Head>
            <main  className = {styles.body}>     
                
                <div id="skills" className = {styles.side_right_container}>
                
                
                {/* -----------SOFT SKILLS AREA ---------------*/}
                    <section className={PSstyle.softSkills_Section}>
                    
                        {/* -----------Component title e subtitle ---------------*/}
                        <TitleSubtitle title="Soft Skills" subtitle= "My pesonality and behavior"/>
                        
                        
                    {/* --- Card Skill 1 --- */}  
                        {popup && cardId == "ss-resilience" ? ( 
                                <Popup_details 
                                title="what is resilience?"
                                description = "Resilience is a concept originating in physics and means the ability of some materials to return to their original state without deformation after being subjected to pressure. In human science, it is defined as the individuals ability to overcome adversities without being negatively and permanently affected by them."
                                imagePostUrl="/src/Resilient-post.jpg"
                                >
                                    
                                </Popup_details> 
                            ) : null }
    
                        <article id ="ss-resilience" onMouseOver={activePopup} onMouseLeave={()=>setPopup(false)} className ={PSstyle.skill_Wrapp}>
                       
                            <header>
                                <h3>
                                   Resilience
                                </h3>
                            </header>
                            <div className = {PSstyle.skill_Container}>
                                <figure>
                                    <img src="/src/svg/skill-resilience.svg" alt="resilience icon" />
                                </figure>
                            </div>
                        </article>
                        
                    {/* --- Card Skill 2 --- */}
                        {popup && cardId == "ss-self-taught" ? ( 
                                <Popup_details 
                                title="what is self-taught?"
                                description = "Self-taught people are marked by their willpower and persistence in learning something, be it a new programming language, a musical instrument, among other things. Without the help of a teacher who can instruct the first steps. The self-taught learning process includes intense research on the subject you want to master, in addition to continuous exercise, based on the &quot; hit and miss &quot; technique."
                                imagePostUrl="/src/Self-taught.jpg"
                                >        
                                </Popup_details> 
                            ) : null }

                        <article id = "ss-self-taught" onMouseOver={activePopup} onMouseLeave={()=>setPopup(false)} className ={PSstyle.skill_Wrapp}>
                            <header>
                                <h3>
                                    self-taught
                                </h3>
                            </header>
                            <div className = {PSstyle.skill_Container}>
                                <figure>
                                    <img src="/src/svg/skill-resilience.svg" alt="resilience icon" />
                                </figure>
                            </div>
                        </article>

                    {/* --- Card Skill 3--- */}

                        {popup && cardId == "ss-organization" ? ( 
                                <Popup_details 
                                title="what is organization?"
                                description = "Resilience is a concept originating in physics and means the ability of some materials to return to their original state without deformation after being subjected to pressure. In human science, it is defined as the individuals ability to overcome adversities without being negatively and permanently affected by them."
                                imagePostUrl="/src/Organization.jpg"
                                >
                                    
                                </Popup_details> 
                            ) : null }

                        <article id = "ss-organization" onMouseOver={activePopup} onMouseLeave={()=>setPopup(false)}  className ={PSstyle.skill_Wrapp}>
                            <header>
                                <h3>
                                   Organization
                                </h3>
                            </header>
                            <div className = {PSstyle.skill_Container}>
                                <figure>
                                    <img src="/src/svg/skill-resilience.svg" alt="resilience icon" />
                                </figure>
                            </div>
                        </article>

                    {/* --- Card Skill 4--- */}

                        {popup && cardId == "ss-team-work" ? ( 
                                <Popup_details 
                                title="what is team work?"
                                description = "Resilience is a concept originating in physics and means the ability of some materials to return to their original state without deformation after being subjected to pressure. In human science, it is defined as the individuals ability to overcome adversities without being negatively and permanently affected by them."
                                imagePostUrl="/src/Team-work.jpg"
                                >
                                    
                                </Popup_details> 
                            ) : null }

                        <article id = "ss-team-work" onMouseOver={activePopup} onMouseLeave={()=>setPopup(false)} className ={PSstyle.skill_Wrapp}>
                            <header>
                                <h3>
                                   Team Work
                                </h3>
                            </header>
                            <div className = {PSstyle.skill_Container}>
                                <figure>
                                    <img src="/src/svg/skill-resilience.svg" alt="resilience icon" />
                                </figure>
                            </div>
                        </article>

                    {/* --- Card Skill 5--- */}

                        {popup && cardId == "ss-criativity" ? ( 
                                <Popup_details 
                                title="what is criativity?"
                                description = "Resilience is a concept originating in physics and means the ability of some materials to return to their original state without deformation after being subjected to pressure. In human science, it is defined as the individuals ability to overcome adversities without being negatively and permanently affected by them."
                                imagePostUrl="/src/Criativity.jpg"
                                >
                                    
                                </Popup_details> 
                            ) : null }   

                        <article id = "ss-criativity" onMouseOver={activePopup} onMouseLeave={()=>setPopup(false)} className ={PSstyle.skill_Wrapp}>
                            <header>
                                <h3>
                                   Criativity
                                </h3>
                            </header>
                            <div className = {PSstyle.skill_Container}>
                                <figure>
                                    <img src="/src/svg/skill-resilience.svg" alt="resilience icon" />
                                </figure>
                            </div>
                        </article>
                    </section>
                    
                    {/* -----------HARD SKILLS AREA ---------------*/}
                    <section className={PSstyle.hardSkills_Section}>
                    
                        {/* -----------Component title e subtitle ---------------*/}
                        <TitleSubtitle title="Hard Skills" subtitle= "My main techinical skill set"/>
                    
                        {/* --- Card Skill 1--- */}
                        <article className ={PSstyle.skill_Wrapp}>
                            <header>
                                <h3>
                                   Front-End
                                </h3>
                            </header>
                            <div className = {PSstyle.skill_Container}>
                                <figure>
                                    <img src="/src/svg/skill-resilience.svg" alt="resilience icon" />
                                </figure>
                                <figure>
                                    <img src="/src/svg/skill-resilience.svg" alt="resilience icon" />
                                </figure>
                                <figure>
                                    <img src="/src/svg/skill-resilience.svg" alt="resilience icon" />
                                </figure>
                                
                            </div>
                        </article>

                        {/* --- Card Skill 2--- */}
                        <article className ={PSstyle.skill_Wrapp}>
                            <header>
                                <h3>
                                   Back-End
                                </h3>
                            </header>
                            <div className = {PSstyle.skill_Container}>
                                <figure>
                                    <img src="/src/svg/skill-resilience.svg" alt="resilience icon" />
                                </figure>
                            </div>
                        </article>

                        {/* --- Card Skill 3--- */}
                        <article className ={PSstyle.skill_Wrapp}>
                            <header>
                                <h3>
                                   Code Control
                                </h3>
                            </header>
                            <div className = {PSstyle.skill_Container}>
                                <figure>
                                    <img src="/src/svg/skill-resilience.svg" alt="resilience icon" />
                                </figure>
                            </div>
                        </article>

                        {/* --- Card Skill 4--- */}
                        <article className ={PSstyle.skill_Wrapp}>
                            <header>
                                <h3>
                                   Design
                                </h3>
                            </header>
                            <div className = {PSstyle.skill_Container}>
                                <figure>
                                    <img src="/src/svg/skill-resilience.svg" alt="resilience icon" />
                                </figure>
                            </div>
                        </article>
                    </section>
                </div>
                    
            </main>
        </Fragment>      
    );
}

// export async function getServerSideProps() {
//     await new Promise((resolve)=>{
//         setTimeout(resolve, 2000)
//     })
//     return { props:{}}
// }

export default skills
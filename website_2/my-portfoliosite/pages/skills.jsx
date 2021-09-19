import React, {Fragment} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../sass/pages.module.scss'
import PSstyle from '../sass/page_skill.module.scss'
import TitleSubtitle from '../components/TitleSubtitle'


// import SwithPage from '../components/SwithPage.js'



const skills = () => {
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
                        <article className ={PSstyle.skill_Wrapp}>
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
                        <article className ={PSstyle.skill_Wrapp}>
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

                        {/* --- Card Skill 3--- */}
                        <article className ={PSstyle.skill_Wrapp}>
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

                        {/* --- Card Skill 4--- */}
                        <article className ={PSstyle.skill_Wrapp}>
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

                        {/* --- Card Skill 5--- */}
                        <article className ={PSstyle.skill_Wrapp}>
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
                    </section>

                    {/* -----------Component title e subtitle ---------------*/}
                    <TitleSubtitle title="Hard Skills" subtitle= "My main techinical skill set"/>
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
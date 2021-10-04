import react, { Fragment } from 'react'
import styles from '../scss/pages.module.scss'
import TitleSubtitle from '../components/TitleSubtitle'
import EducationComponent from '../communs_components/Education-component'
import CoursesComponent from '../communs_components/Courses-component'
//import Link from 'next/link'

const formation = () => {
    return(
    <Fragment>
        <main  className = {styles.body}>

            <section id="formation" className = {styles.side_right_container}>
                
                
                    {/* -----------TITULO E SUBTILO ---------------*/}
                    <TitleSubtitle title="Education" subtitle= "My academic education"/>
                
                    {/* -----------CONTENT EDUCATION ---------------*/}                   
                    <EducationComponent/>

                
                
                    {/* -----------TITULO E SUBTILO ---------------*/}
                    <TitleSubtitle title="Courses" subtitle= "Main courses taken so far"/>
                    {/* -----------CONTENT COURSES ---------------*/}
                    <CoursesComponent/>

            </section>    
        </main>

    </Fragment>    
    
    )
}
export default formation
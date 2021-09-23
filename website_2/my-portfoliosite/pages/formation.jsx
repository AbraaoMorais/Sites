import react, { Fragment } from 'react'
import styles from '../sass/pages.module.scss'
import TitleSubtitle from '../components/TitleSubtitle'
//import Link from 'next/link'

const formation = () => {
    return(
    <Fragment>
        <main  className = {styles.body}>

            <section id="formation" className = {styles.side_right_container}>
                
                {/* -----------TITULO E SUBTILO ---------------*/}
                <TitleSubtitle title="Education" subtitle= "My academic education"/>
            
                {/* -----------CONTENT AREA ---------------*/}
            </section>    
        </main>

    </Fragment>    
    
    )
}
export default formation
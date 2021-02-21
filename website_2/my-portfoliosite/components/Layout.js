//import { Children } from 'react'
import styles from '../styles/layout.module.css'
import Nav from './nav'
//import Link from 'next/link'
//import Contact from '../pages/contact.jsx'


const Layout = ({children}) => {
    return(
        <div className = {styles.main}>
            <main className = {styles.container}>
                {children}
                <header>
                    <Nav/>
                    <content><h1>-----</h1></content> 
                </header>
             

               <h1>REACT IS on</h1>
         
               {/* <Contact/> importa pagina como componete pra dentro dessa area */}
       
            
               
            </main>
            
           
            <footer className = {styles.footer}>
            
            <section>--------------------------------------------</section>
            </footer>
           
        </div>
    )
}

export default Layout
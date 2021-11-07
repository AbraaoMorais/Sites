import React from 'react'
import styles from '../scss/pages.module.scss'
import PPstyles from '../scss/page_projects.module.scss'
import TitleSubtitle from '../components/TitleSubtitle'
import Link from 'next/link'

const portfolio = () => {
    return (
        <main  className = {styles.body}>

        <section id="contact" className = {styles.side_right_container}>
            
            {/* -----------TITULO E SUBTILO ---------------*/}
            <TitleSubtitle title="Projects" subtitle= "some of my projects developed today"/>
        
            {/* -----------CONTENT AREA ---------------*/}
            <div className={PPstyles.projects_wrapp}>
                <ul>
                    <li>
                        
                        <Link href="portfolio/web" replace>

                                <a>
                                    <figure>
                                        <img src="/icons/png/web-icon.webp" alt="web icon" />
                                    </figure>
                                    <h3>Web</h3>
                                </a>
                         
                        </Link>
                    </li>

                    <li className={PPstyles.projects_item}>
                        
                        <Link href="portfolio/games" replace>

                                <a>
                                    <figure>
                                        <img src="/icons/png/joystick.webp" alt="Games projects icon" />
                                    </figure>
                                    <h3>Games</h3>
                                </a>
                         
                        </Link>
                    </li>

                    <li className={PPstyles.projects_item}>
                        
                        <Link href="projects/web" replace>

                                <a>
                                    <figure>
                                        <img src="/icons/png/smartphone.png" alt="Mobile projects icon" />
                                    </figure>
                                    <h3>Mobile</h3>
                                </a>
                         
                        </Link>
                    </li>

                    <li className={PPstyles.projects_item}>
                        
                        <Link href="projects/web" replace>

                                <a>
                                    <figure>
                                        <img src="/icons/png/desktop.png" alt="Desktop projects icon" />
                                    </figure>
                                    <h3>Desktop</h3>
                                </a>
                         
                        </Link>
                    </li>
                    
                    <li className={PPstyles.projects_item}>
                        
                        <Link href="projects/web" replace>

                                <a>
                                    <figure>
                                        <img src="/icons/png/illustration.png" alt="Design projects icon" />
                                    </figure>
                                    <h3>Design´s</h3>
                                </a>
                         
                        </Link>
                    </li>

                    <li className={PPstyles.item_disabled} >
                        
                        <Link href="javascript:void(0)" replace >

                                <a>
                                    <figure>
                                        <img src="/src/bloquear.png" alt="web icon" />
                                    </figure>
                                    <p>Coming soon...
                                    </p>
                                </a>
                         
                        </Link>
                    </li>
                </ul>
            </div>
            <footer className={PPstyles.footer}>
                <p>
                    For more projects access my <a href="https://github.com/AbraaoMorais">
                        <strong>Github</strong>
                        </a> and my  
                        <a href="https://www.behance.net/abraaomorais">
                            &nbsp;<strong>Behance</strong>
                        </a> account
                </p>

            </footer>
        </section>    
    </main>
    );
}
export default portfolio
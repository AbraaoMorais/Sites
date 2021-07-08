import Link from 'next/link'
import styles from '../styles/nav.module.css'
import Image from 'next/image'
import React, { useState } from 'react';
import { Component } from 'react';


const btnPageActive = () => {
    const [pagina, setPagina] = React.useState(true);
    const [cor, setCor] = React.useState('linear-gradient(to left,rgb(13, 82, 151), rgb(22, 29, 97))')
        
        React.useEffect(()=>{
            setCor((state)=> pagina ? 'linear-gradient(to left,rgb(33, 71, 197), rgb(96, 30, 145))' : 'linear-gradient(to left,rgb(13, 82, 151), rgb(22, 29, 97))')
        },[pagina])
    }

const Nav = () => {
    
    return (
        
        <div className={styles.main}>
            <ul className={styles.ul}>
                <li>
                    <Link href="/" replace>
                        <a rel="noreferrer noopener">
                            <svg className={styles.icons_position} xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 22 17">
                                <g id="person-lines-fill">
                                    <path id="Caminho_16" data-name="Caminho 16" d="M1.375,21.5A1.36,1.36,0,0,1,0,20.083c0-1.417,1.375-5.667,8.25-5.667s8.25,4.25,8.25,5.667A1.36,1.36,0,0,1,15.125,21.5ZM8.25,13a4.189,4.189,0,0,0,4.125-4.25A4.189,4.189,0,0,0,8.25,4.5,4.189,4.189,0,0,0,4.125,8.75,4.189,4.189,0,0,0,8.25,13Zm9.625,2.125a.7.7,0,0,1,.688-.708h2.75a.709.709,0,0,1,0,1.417h-2.75A.7.7,0,0,1,17.875,15.125Zm-2.75-4.25a.7.7,0,0,1,.688-.708h5.5a.709.709,0,0,1,0,1.417h-5.5A.7.7,0,0,1,15.125,10.875Zm0-4.25a.7.7,0,0,1,.688-.708h5.5a.709.709,0,0,1,0,1.417h-5.5A.7.7,0,0,1,15.125,6.625Zm2.75,12.75a.7.7,0,0,1,.688-.708h2.75a.709.709,0,0,1,0,1.417h-2.75A.7.7,0,0,1,17.875,19.375Z" transform="translate(1 -2.5)" fill="#a5c8fb" fill-rule="evenodd" />
                                </g>
                            </svg>
                            About Me
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/skills" replace>
                        <a rel="noreferrer noopener">

                            <div className={styles.icons_position}>
                                <Image
                                    src="/icons/iconSkills.svg"
                                    alt="icone menu skill"
                                    width={22}
                                    height={20}
                                />
                            </div>
                            Skills
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/formation" replace>
                        <a rel="noreferrer noopener">
                            <svg id="academy-cap" className={styles.icons_position} xmlns="http://www.w3.org/2000/svg" width="22" height="20.158" viewBox="0 0 22 20.158">
                                <path id="Caminho_17" data-name="Caminho 17" d="M31.3,21.57a1.472,1.472,0,0,0,.377-1.08,1.392,1.392,0,0,0-.462-1.023l0-7.475-.982.861v6.612a1.393,1.393,0,0,0-.458,1.015,1.48,1.48,0,0,0,.368,1.076l-.372.644a3.839,3.839,0,0,0-.521,1.923v1.569h.8a.944.944,0,0,0,.838-.852l.325-1.716v2.568H32.2V24.138a3.847,3.847,0,0,0-.525-1.932Z" transform="translate(-10.196 -5.535)" fill="#a5c8fb" />
                                <path id="Caminho_18" data-name="Caminho 18" d="M11,0,0,5.136l11,6.42,11-6.42Z" fill="#a5c8fb" />
                                <path id="Caminho_19" data-name="Caminho 19" d="M14.8,19.283,6.75,15.008v2.2c0,1.167,4.735,4.647,8.053,4.647s8.053-3.48,8.053-4.648v-2.2Z" transform="translate(-3.803 -6.685)" fill="#a5c8fb" />
                            </svg>
                            Formation
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/portfolio" replace>
                        <a rel="noreferrer noopener">
                            <svg className={styles.icons_position} xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 14.909">
                                <g id="Portfolio" transform="translate(-37 -547.965)">
                                    <path id="Icon_ionic-ios-laptop" data-name="Icon ionic-ios-laptop" d="M20.914,21.1V8.76a.849.849,0,0,0-.788-.885H4.11a.845.845,0,0,0-.788.885V21.1h-2.2a1.473,1.473,0,0,0,.866,1.175,5.484,5.484,0,0,0,2.254.507H20a5.461,5.461,0,0,0,2.213-.456,1.529,1.529,0,0,0,.907-1.227h-2.2Zm-8.8-12.813a.209.209,0,1,1-.183.207A.2.2,0,0,1,12.118,8.289Zm-7.972.839H20.09a.1.1,0,0,1,.092.1V20.17a.1.1,0,0,1-.092.1H4.146a.1.1,0,0,1-.092-.1V9.231A.1.1,0,0,1,4.146,9.128Zm9.91,12.388H10.18a.567.567,0,0,1-.444-.388H14.5A.476.476,0,0,1,14.056,21.516Z" transform="translate(35.882 540.09)" fill="#a5c8fb" />
                                    <g id="code" transform="translate(40.627 543.002)">
                                        <path id="Caminho_25" data-name="Caminho 25" d="M6.22,9.1a.341.341,0,0,1,0,.474L4.163,11.678l2.058,2.107a.341.341,0,0,1,0,.474.322.322,0,0,1-.463,0L3.47,11.915a.341.341,0,0,1,0-.474L5.758,9.1a.321.321,0,0,1,.463,0Zm2.806,0a.341.341,0,0,0,0,.474l2.058,2.107L9.026,13.785a.341.341,0,0,0,0,.474.322.322,0,0,0,.463,0l2.288-2.344a.341.341,0,0,0,0-.474L9.489,9.1a.321.321,0,0,0-.463,0Z" fill="#a5c8fb" fill-rule="evenodd" />
                                    </g>
                                </g>
                            </svg>
                            Portfolio
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact" replace>
                        <a rel="noreferrer noopener">
                            <svg className={styles.icons_position} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 17">
                                <path id="emailforwarders" d="M21.872,12.183l-7.519-5.8L21.872.565a.959.959,0,0,1,.15.5V11.7A.877.877,0,0,1,21.872,12.183ZM1.376,0H20.668L11.022,7.463ZM.172,12.183a.877.877,0,0,1-.15-.482V1.064a.958.958,0,0,1,.15-.5L7.692,6.382ZM10.184,8.31a.878.878,0,0,0,.333.15,1.526,1.526,0,0,0,.355.05h.15a1.294,1.294,0,0,0,.838-.2l1.526-1.18,7.283,5.634h-.021V12.8l.011.066-.011.1-.054.124-.1.141-.172.166L15.1,16.853a1.293,1.293,0,0,1-.612.141,3.84,3.84,0,0,1-.9-.058,2.366,2.366,0,0,1-.827-.308.64.64,0,0,1-.365-.54v-1.2H8.272a1.533,1.533,0,0,1-.966-.316.926.926,0,0,1-.408-.748V12.764H1.377L8.66,7.13Zm-.537,5.518h4.125v1.346q.558.415.924.133l3.2-2.144a.478.478,0,0,0,0-.8l-3.2-2.144q-.365-.283-.924.133V11.7H9.647a1.549,1.549,0,0,0-.977.308.918.918,0,0,0-.4.748.934.934,0,0,0,.408.756,1.529,1.529,0,0,0,.966.316Z" transform="translate(-0.022)" fill="#a5c8fb" />
                            </svg>
                            Contact
                        </a>
                    </Link>
                </li>
                
                <li onClick={e => useState(state => !state)}>
                    <Link href="/blog" replace>
                        <a rel="noreferrer noopener">
                            <svg className={styles.icons_position} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z">
                                </path>
                            </svg>
                            Blog
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
        
    );    
    }
    // btnAtivo(){
    //     var btn = document.querySelector('ul').children[4];
    //     btn.style.backgroundImage = "linear-gradient(to left,rgb(33, 71, 197), rgb(96, 30, 145))"
    //     btn.classList.add('btnActive');
        
    //    }




/////////// FUNÇÃO PARA ADCIONAR E REMOVER CLASSE///////////////
//  add isso aqui no botao ---> onClick = {pageTrade}
//   function pageTrade(){
//     const Trade = document.getElementById("skills");
//     // e.preventDefault();
//     element.addEventListener('click', trocar = () => {
//         Trade.classList.add('pageTrade')
//     })

// }




export default Nav
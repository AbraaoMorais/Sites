import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/index.module.css'
import SideLeft from '../components/SideLeft'
import Footer from '../components/Footer'



export default function Home ({data}) {
    return(
        <body className = {styles.body}>  
            <Head>
                <title>
                    WebPortfolio: Abraão Morais
                </title>
                <meta name='keywords' content='web developer, programmer, react, nextjs, javascript'/>
            </Head>
            
            <main className = {styles.main}>

    {/*----------this is area of main menu--------------- */}

                <section className = {styles.sectionLeft}>          
                    <SideLeft/>
                </section>     

    {/*----------this is area of content--------------- */}
    
                <section className= {styles.side_right_container}>
                    <div className={styles.container_about}>
                       
                        <h1>Abraão Morais Santos</h1>
                        <h2>front-end developer  ||  Ux/Ui designer </h2>
                        
                        <p>
                            Vestibulum blandit viverra convallis. Pellentesque ligula urna, 
                            fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, 
                            consequat eget justo in, semper gravity enim. Donec ultrices 
                            varius ligula. Ut non pretium augue. Etiam non rutrum metus. In 
                            varius sit amet lorem tempus sagittis. Cras sed maximus enim, 
                            vel ultricies tortor. Pellentesque consectetur tellus ornare felis 
                            porta dapibus. Etiam eget viverra ipsum, ac posuere massa. 
                            Nam vitae tempor metus. Donec rhoncus, 
                        </p>
        
                    </div>
                    <div className= {styles.container_description}>
                        <h1>What i do</h1>
                        <p>
                        Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. 
                        Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. 
                        Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. 
                        Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. 
                        Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim. 
                        Integer at faucibus urna. 
                        </p>
                    </div>
                    <div className={styles.container_tech}>
                        <h2>Technologies that i use</h2>
                        <div className = {styles.container_tech_itens}>
                            <div className = {styles.tech_iten}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="60" viewBox="0 0 55 60">
                                    <path id="html5" d="M44.141,17.588l.625-6.563H10.234L12.069,31.05H35.976l-.859,8.55-7.7,1.987L19.764,39.6l-.507-5.25H12.422l.859,10.425,14.141,3.75h.156v-.037L41.6,44.775l1.953-20.4H18.4l-.585-6.787H44.142ZM0,0H55L50,53.925,27.422,60,5,53.925Z" fill="#f64e19"/>
                                </svg>
                                <p>html5</p>
                            </div>
                            <div className = {styles.tech_iten}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="60" viewBox="0 0 55 60">
                                    <path id="css3" d="M2.25,0h55l-5,53.907L29.689,60,7.256,53.9ZM47.01,11.033,12.49,11.025l.559,6.555,26.519,0-.669,6.79H21.509l.629,6.432H38.328l-.959,8.808-7.621,2.01L22.006,39.6l-.492-5.275H14.678l.76,9.637L29.75,48.22,43.821,44.4l3.188-33.36Z" transform="translate(-2.25)" fill="#3b6cde"/>
                                </svg>
                                <p>css3</p>
                            </div>
                            <div className = {styles.tech_iten}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="60" viewBox="0 0 55 60">
                                    <path id="language-javascript" d="M0,0H55V60H0ZM14.467,50.157A7.746,7.746,0,0,0,22.2,55.313a7.575,7.575,0,0,0,5.657-2.11q2.076-2.11,2.076-6.328V27.5H24.779V46.718q0,3.593-2.721,3.593-1.862,0-3.437-2.968Zm18.19-.625q2.721,5.782,9.454,5.782a9,9,0,0,0,6.23-2.11A7.262,7.262,0,0,0,50.7,47.5a7.8,7.8,0,0,0-1.647-5.313,16.357,16.357,0,0,0-5.228-3.593l-1.289-.625A8.781,8.781,0,0,1,40.1,36.483a2.612,2.612,0,0,1-.717-1.953,2.347,2.347,0,0,1,.645-1.64,2.31,2.31,0,0,1,1.791-.7,3.862,3.862,0,0,1,3.438,2.343l3.867-2.813a7.651,7.651,0,0,0-7.3-4.532,7.183,7.183,0,0,0-7.592,7.5,7.762,7.762,0,0,0,1.575,5.157,12.974,12.974,0,0,0,4.727,3.282l1.289.625q1.433.782,2.076,1.093a3.073,3.073,0,0,1,1.146,1.015,2.747,2.747,0,0,1,.5,1.64,2.528,2.528,0,0,1-.93,2.032,3.773,3.773,0,0,1-2.507.782q-3.294,0-5.156-3.438Z" fill="#fd0"/>
                                </svg>
                                <p>JavaScript</p>
                            </div>
                            <div className = {styles.tech_iten}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="63" viewBox="0 0 65.527 66.36">
                                    <path id="Icon_simple-next-dot-js" data-name="Icon simple-next-dot-js" d="M48.636,62.219c-.243.13-.229.182.014.058a.622.622,0,0,0,.191-.13c0-.044-.005-.039-.2.072Zm.486-.26c-.115.091-.115.1.025.025a.393.393,0,0,0,.142-.1C49.288,61.835,49.256,61.849,49.122,61.959Zm.319-.2c-.115.091-.115.1.025.025a.393.393,0,0,0,.142-.1C49.608,61.638,49.575,61.652,49.441,61.763Zm.319-.194c-.115.091-.115.1.025.025a.393.393,0,0,0,.142-.1C49.927,61.445,49.894,61.459,49.761,61.569Zm.442-.29c-.224.144-.295.241-.1.13.142-.083.371-.26.333-.265a1.267,1.267,0,0,0-.238.135ZM30.618.014c-.142.014-.59.058-.994.091A33.1,33.1,0,0,0,.3,28.354,25.76,25.76,0,0,0,0,33.187,25.776,25.776,0,0,0,.3,38.021,33.2,33.2,0,0,0,22.708,64.829a34.24,34.24,0,0,0,6.916,1.452,59.414,59.414,0,0,0,6.277,0,32.766,32.766,0,0,0,11.8-3.5c.562-.293.672-.371.6-.434q-2.693-3.6-5.335-7.245l-5.24-7.167L31.161,38.1q-3.274-4.938-6.61-9.833c-.025-.006-.052,4.366-.063,9.7-.019,9.346-.025,9.722-.142,9.944a1.166,1.166,0,0,1-.562.589c-.2.105-.385.124-1.352.124H21.323l-.295-.188a1.217,1.217,0,0,1-.429-.473l-.134-.293.014-13,.019-13.01.2-.252a1.744,1.744,0,0,1,.475-.4c.262-.13.366-.144,1.474-.144,1.308,0,1.524.053,1.865.429q3.986,6.007,7.9,12.059c4.254,6.531,10.067,15.449,12.926,19.829l5.188,7.958.262-.174a33.828,33.828,0,0,0,6.73-5.981,33.207,33.207,0,0,0,7.711-16.962,25.759,25.759,0,0,0,.295-4.834,25.777,25.777,0,0,0-.295-4.834A33.2,33.2,0,0,0,42.823,1.551,33.9,33.9,0,0,0,36,.1c-.614-.064-4.849-.135-5.379-.083Zm13.412,20.07a1.3,1.3,0,0,1,.647.766c.052.169.063,3.774.052,11.9l-.019,11.664-2.031-3.152-2.037-3.152V29.631c0-5.481.025-8.561.063-8.71a1.336,1.336,0,0,1,.633-.818c.262-.135.358-.149,1.365-.149C43.65,19.953,43.817,19.967,44.029,20.083Z" transform="translate(-0.001 -0.004)" fill="#6161f5"/>
                                </svg>
                                <p>NextJs</p>
                            </div>
                            <div className = {styles.tech_iten}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="52.987" height="60.32" viewBox="0 0 52.987 60.32">
                                    <g id="logo-nodejs" transform="translate(-4.5 -2.25)">
                                        <path id="Caminho_22" data-name="Caminho 22" d="M54.971,15.455,33.523,2.9a5.217,5.217,0,0,0-5.057,0L7.016,15.453A5.116,5.116,0,0,0,4.5,19.864V44.929a5.124,5.124,0,0,0,2.516,4.415l5.624,3.278.031.017c2.84,1.417,3.927,1.417,5.187,1.417,4.435,0,7.19-2.8,7.19-7.309v-24.3a1.159,1.159,0,0,0-1.162-1.155H20.8a1.159,1.159,0,0,0-1.162,1.155v24.3a2.007,2.007,0,0,1-.946,1.76,3.515,3.515,0,0,1-3.33-.289L9.971,45.053a.146.146,0,0,1-.067-.124V20.219a.177.177,0,0,1,.08-.144L30.936,7.554a.116.116,0,0,1,.1,0L52,20.075a.179.179,0,0,1,.077.147V44.929a.171.171,0,0,1-.063.134l-20.983,12.2a.173.173,0,0,1-.11,0l-5.358-3.1a1.1,1.1,0,0,0-1.081-.056l-.047.027A15.243,15.243,0,0,1,21.189,55.7c-.224.079-.75.27-.795.777s.453.869.9,1.12l7.161,4.291a5.015,5.015,0,0,0,2.526.682h.08a5.042,5.042,0,0,0,2.461-.682L54.969,49.35a5.139,5.139,0,0,0,2.518-4.421V19.864A5.118,5.118,0,0,0,54.971,15.455Z" fill="#10c54c"/>
                                        <path id="Caminho_23" data-name="Caminho 23" d="M27.325,32.679c-5.146,0-6.243-1.438-6.568-3.758a1.164,1.164,0,0,0-1.134-1.011H16.89a1.164,1.164,0,0,0-1.14,1.183c0,2.012.706,8.578,11.581,8.578A13.174,13.174,0,0,0,35.42,35.4a7.6,7.6,0,0,0,2.959-6.237c0-5.181-3.381-6.6-10.038-7.528-6.769-.942-6.769-1.421-6.769-2.469,0-.756,0-2.522,4.892-2.522,3.481,0,5.346.44,5.942,2.759a1.152,1.152,0,0,0,1.113.92h2.742a1.136,1.136,0,0,0,.85-.394,1.228,1.228,0,0,0,.292-.889c-.355-4.906-3.941-7.393-10.935-7.393-6.356,0-10.148,2.863-10.148,7.658,0,5.257,3.931,6.743,9.838,7.359,6.9.714,6.9,1.754,6.9,2.673,0,1.433-.591,3.344-5.732,3.344Z" transform="translate(10.828 8.269)" fill="#10c54c"/>
                                    </g>
                                </svg>
                                <p>NodeJs</p>
                            </div>
                            <div className = {styles.tech_iten}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="60" viewBox="0 0 55 60">
                                    <g id="Grupo_2" data-name="Grupo 2" transform="translate(-689.062 -623.68)">
                                        <path id="mongodb" d="M27.416,15.48C25.325,6.437,20.392,3.466,19.862,2.329A14.516,14.516,0,0,1,18.649,0l-.008.08V.1h0q0,.031-.007.063V.188h0l0,.042V.272H18.62c0,.013,0,.029-.006.041V.348h0a.12.12,0,0,1,0,.035V.415h0l0,.052v0l-.014.081V.565h0l-.006.02V.613h-.006V.648h-.008V.678h-.008V.712H18.55v.03h-.007V.771h-.01V.794h-.007V.823h-.007V.846h-.008V.866h-.006V.89H18.5L18.5.9V.913h-.006l0,.01v.01h0a.07.07,0,0,0,0,.016l-.017.035v0A.049.049,0,0,0,18.46,1v.013h-.007v.013h-.008v.013H18.44v.016h-.01v.023h-.007v.007h-.007V1.1H18.41v.018H18.4v.013h-.01v.018h-.007v.013h-.008v.013h-.006v.016h-.008V1.2h-.007v.01h-.007v.013h-.01v.012h-.007v.01h-.008v.013h-.007v.018h-.008v.007h-.006V1.3H18.3V1.3h-.007V1.32h-.007v.007h-.007v.013h-.008v.01h-.006l0,.007v.007h0l0,.007v0h0a.026.026,0,0,1-.007.012v.005h0l-.019.027v0s-.012.01-.014.016v0h0l-.006.005v.005h0l-.006.005v0h0l-.006.007v.007h-.006l0,0v0h0s0,0,0,.005v.005h-.007l0,.005V1.5h-.006V1.5H18.15v.01h-.007v.013h-.008V1.513h-.008v.007h-.007v.01h-.008v.013h-.008v.007H18.1v.01h-.007v.007h-.007v.013h-.01v.007h-.007v.01h-.008V1.6h-.007v.008h-.008v.016h0v.007h-.01v.008h-.007v0H18.02v.007h-.008v.016h-.007v.007H18v.007h-.007v.01h-.008v.007h-.008V1.7H17.97v.007h-.007v.016h-.007v.008h-.01v.007H17.94v.007h-.008v.01h-.007V1.76h-.008v.012h-.007v.007H17.9v.011h0V1.8h-.007V1.8h-.008v.007h-.007v.01h-.008v.007h-.006l0,0v0h0l-.007.007-.007.005v.01h-.007v.008h-.007v.007h-.007v.007H17.82l-.006.005v.005h0l0,0v.005h0a.164.164,0,0,1-.023.026.6.6,0,0,0-.084.068l-.036.028v0h0l-.082.063v0l-.123.1v0h0c-.095.077-.194.163-.308.258v0h0c-.28.241-.613.55-.985.924l-.024.024-.007.007A22.2,22.2,0,0,0,9.949,18.158a16.563,16.563,0,0,0,.01,1.861v.014a17.5,17.5,0,0,0,2.364,7.735v0a20.163,20.163,0,0,0,1.533,2.285v0a20.969,20.969,0,0,0,4.163,4.108,13.375,13.375,0,0,1,.662,4.519l1.066.35a19.1,19.1,0,0,1,.088-4.1,2.527,2.527,0,0,1,.577-1.077,13.831,13.831,0,0,0,1.32-1.05c.03-.03.046-.059.073-.088a18.4,18.4,0,0,0,5.61-17.239Z" transform="translate(697.709 634)" fill="#045a12"/>
                                        <g id="shield" transform="translate(689.062 623.68)">
                                            <path id="Caminho_24" data-name="Caminho 24" d="M19.914,7.089Q14.3,8.564,8.769,10.3A1.83,1.83,0,0,0,7.48,11.761c-2.18,15.588,2.85,26.964,8.851,34.455a41.309,41.309,0,0,0,8.985,8.372,24.692,24.692,0,0,0,3.5,2,8.987,8.987,0,0,0,1.152.439,3.042,3.042,0,0,0,.4.1,2.393,2.393,0,0,0,.4-.092,9.748,9.748,0,0,0,1.152-.444,24.593,24.593,0,0,0,3.5-2,41.326,41.326,0,0,0,8.985-8.372c6-7.492,11.034-18.868,8.853-34.455A1.83,1.83,0,0,0,51.975,10.3c-2.561-.8-6.879-2.1-11.145-3.207-4.359-1.124-8.371-1.964-10.458-1.964S24.277,5.964,19.914,7.089ZM18.867,3.226c4.266-1.106,8.793-2.1,11.5-2.1s7.239,1,11.5,2.1q5.707,1.5,11.338,3.26a5.857,5.857,0,0,1,4.1,4.736c2.343,16.788-3.092,29.228-9.682,37.46a45.357,45.357,0,0,1-9.891,9.2,28.555,28.555,0,0,1-4.119,2.345,8.644,8.644,0,0,1-3.256.9,8.644,8.644,0,0,1-3.256-.9A28.413,28.413,0,0,1,23,57.881a45.36,45.36,0,0,1-9.885-9.2c-6.6-8.231-12.027-20.672-9.683-37.46a5.855,5.855,0,0,1,4.1-4.736q5.629-1.761,11.338-3.26Z" transform="translate(-2.872 -1.125)" fill="#045a12" fill-rule="evenodd"/>
                                        </g>
                                    </g>
                                </svg>
                                <p>MongoDb</p>
                            </div>
                            <div className = {styles.tech_iten}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="61.768" height="60" viewBox="0 0 61.768 60">
                                    <path id="git" d="M60.6,27.324,33.631,1.13A4.073,4.073,0,0,0,28,1.13L22.412,6.566l7.1,6.9a4.83,4.83,0,0,1,4.873,1.113,4.5,4.5,0,0,1,1.115,4.74l6.841,6.65a4.8,4.8,0,0,1,5.566,1.9,4.5,4.5,0,0,1-.676,5.694,4.828,4.828,0,0,1-6.692,0,4.519,4.519,0,0,1-1.04-4.99L33.1,22.387V38.7a4.721,4.721,0,0,1,1.256.87,4.526,4.526,0,0,1,0,6.5,4.846,4.846,0,0,1-6.714,0,4.493,4.493,0,0,1,0-6.495A4.875,4.875,0,0,1,29.2,38.56V22.087a4.655,4.655,0,0,1-2.576-2.493,4.464,4.464,0,0,1,.013-3.532L19.653,9.25,1.158,27.2a3.812,3.812,0,0,0,0,5.473L28.13,58.867a4.059,4.059,0,0,0,5.626,0L60.6,32.793a3.782,3.782,0,0,0,0-5.466" transform="translate(0 0)" fill="#ec3636"/>
                                </svg>
                                <p>Git</p>
                            </div>
                            <div className = {styles.tech_iten}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="59.14" height="59.64" viewBox="0 0 59.14 59.64">
                                    <path id="github" d="M29.57,0A28.207,28.207,0,0,1,44.412,4.1,29.949,29.949,0,0,1,55.174,15.224,30.681,30.681,0,0,1,59.14,30.567,30.385,30.385,0,0,1,53.5,48.536,29.051,29.051,0,0,1,38.925,59.581a1.682,1.682,0,0,1-1.541-.278,1.58,1.58,0,0,1-.5-1.194q0-.119.02-3.045t.02-5.353q0-3.86-2-5.651a25.656,25.656,0,0,0,3.946-.717,15.436,15.436,0,0,0,3.619-1.552A10.831,10.831,0,0,0,45.6,39.144a12.506,12.506,0,0,0,2.04-4.179,20.706,20.706,0,0,0,.792-5.989,12.014,12.014,0,0,0-3.042-8.2,10.926,10.926,0,0,0-.309-8.119,4.89,4.89,0,0,0-3.118.438,20.512,20.512,0,0,0-3.542,1.751l-1.464.956a26.939,26.939,0,0,0-14.785,0q-.616-.438-1.636-1.075a22.818,22.818,0,0,0-3.213-1.533,5.142,5.142,0,0,0-3.272-.538,10.926,10.926,0,0,0-.309,8.119,12.014,12.014,0,0,0-3.042,8.2,20.519,20.519,0,0,0,.789,5.971,12.918,12.918,0,0,0,2.024,4.179,10.524,10.524,0,0,0,3.1,2.666,15.358,15.358,0,0,0,3.619,1.552,25.755,25.755,0,0,0,3.946.717,6.812,6.812,0,0,0-1.886,4.1,7.521,7.521,0,0,1-1.733.6,10.423,10.423,0,0,1-2.195.2,4.453,4.453,0,0,1-2.522-.856,6.924,6.924,0,0,1-2.137-2.488,6.336,6.336,0,0,0-1.868-2.07,5.559,5.559,0,0,0-1.906-.956l-.77-.119a2.44,2.44,0,0,0-1.117.178.339.339,0,0,0-.192.458,2.2,2.2,0,0,0,.347.557,2.871,2.871,0,0,0,.5.477l.269.2a4.685,4.685,0,0,1,1.676,1.513,10.044,10.044,0,0,1,1.212,2.029l.384.915a5.041,5.041,0,0,0,1.694,2.447,5.91,5.91,0,0,0,2.579,1.194,15.771,15.771,0,0,0,2.676.278,11.1,11.1,0,0,0,2.137-.139l.885-.16q0,1.513.02,3.522t.02,2.169a1.58,1.58,0,0,1-.5,1.194,1.682,1.682,0,0,1-1.541.278A29.042,29.042,0,0,1,5.64,48.531,30.383,30.383,0,0,1,0,30.567,30.681,30.681,0,0,1,3.966,15.224,29.949,29.949,0,0,1,14.727,4.1,28.207,28.207,0,0,1,29.57,0ZM11.2,43.9q.115-.278-.269-.477-.384-.119-.5.08-.115.278.269.477Q11.049,44.22,11.2,43.9ZM12.4,45.254q.269-.2-.077-.637-.384-.358-.616-.119-.269.2.077.637Q12.166,45.532,12.4,45.254Zm1.155,1.792q.347-.279,0-.756-.309-.518-.654-.239-.347.2,0,.717T13.553,47.045Zm1.616,1.671q.309-.319-.154-.756-.462-.477-.77-.119-.347.319.154.756Q14.861,49.075,15.169,48.716Zm2.195,1q.115-.438-.5-.637-.578-.16-.731.278t.5.6q.578.239.731-.239Zm2.426.2q0-.518-.654-.438-.616,0-.616.438,0,.518.654.438Q19.79,50.348,19.79,49.91Zm2.233-.4q-.077-.438-.693-.358-.616.119-.539.6t.693.319q.616-.16.539-.557Z" fill="#6423ff"/>
                                </svg>
                                <p>GitHub</p>
                            </div>
                            <div className = {styles.tech_iten}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="59.64" viewBox="0 0 55 59.64">
                                    <path id="adobephotoshop" d="M13.521,15.385c0-.153.046-.28.229-.28,1.444-.076,3.506-.127,5.729-.127,6.188,0,8.892,3.772,8.892,8.615,0,6.321-4.171,9.022-9.212,9.022-.848,0-1.146-.051-1.742-.051v9.685c0,.2-.069.28-.252.28H13.773c-.183,0-.252-.076-.252-.28Zm3.9,13.2a17.215,17.215,0,0,0,1.81.051c2.612,0,5.11-1.019,5.11-4.97,0-3.16-1.788-4.766-4.79-4.766-.894,0-1.742.051-2.131.076ZM37.4,25.631c-1.765,0-2.36.994-2.36,1.81,0,.892.413,1.529,2.773,2.88,3.506,1.886,4.606,3.7,4.606,6.372,0,3.976-2.727,6.117-6.417,6.117a9.3,9.3,0,0,1-4.652-1.07c-.138-.076-.183-.2-.183-.408v-3.67c0-.255.115-.331.252-.2A7.973,7.973,0,0,0,36,38.935c1.765,0,2.5-.816,2.5-1.937,0-.892-.5-1.682-2.773-3.007-3.185-1.682-4.492-3.415-4.492-6.27,0-3.211,2.246-5.862,6.165-5.862a10.058,10.058,0,0,1,4.079.688.572.572,0,0,1,.229.484v3.415c0,.2-.115.331-.321.255a7.673,7.673,0,0,0-3.988-1.07ZM9.74.45C4.354.45,0,5.293,0,11.282V49.258C0,55.247,4.354,60.09,9.74,60.09H45.26c5.385,0,9.74-4.843,9.74-10.832V11.282C55,5.293,50.646.45,45.26.45ZM10.61,3H44.367c4.594,0,8.319,4.142,8.319,9.252V48.264a9.794,9.794,0,0,1-2.416,6.554,7.908,7.908,0,0,1-5.88,2.723H10.61c-4.583,0-8.319-4.154-8.319-9.252V12.25C2.292,7.153,6.027,3,10.61,3Z" transform="translate(0 -0.45)" fill="#0d76ff"/>
                                </svg>
                                <p>Photoshop</p>
                            </div>
                            <div className = {styles.tech_iten}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="55.896" height="59.96" viewBox="0 0 55.896 59.96">
                                    <path id="Icon_simple-adobexd" data-name="Icon simple-adobexd" d="M46,.45H9.9C4.425.45,0,5.319,0,11.34V49.52c0,6.022,4.425,10.89,9.9,10.89H46c5.473,0,9.9-4.869,9.9-10.89V11.34C55.9,5.319,51.471.45,46,.45Zm7.546,48.07a9.782,9.782,0,0,1-2.455,6.59,8.071,8.071,0,0,1-5.976,2.737H10.783c-4.658,0-8.454-4.177-8.454-9.3V12.314c0-5.125,3.8-9.3,8.454-9.3H45.09c4.669,0,8.454,4.164,8.454,9.3ZM22.1,28.508l6.521,13.786c.116.2.047.41-.14.41H24.431a.456.456,0,0,1-.489-.333c-1.491-3.382-3-6.765-4.565-10.4h-.047C17.933,35.4,16.4,39.014,14.906,42.4a.444.444,0,0,1-.419.282H10.644c-.233,0-.256-.2-.14-.359l6.382-13.376L10.713,15.414c-.14-.2,0-.359.14-.359h4.006a.366.366,0,0,1,.419.282c1.467,3.382,2.958,6.867,4.355,10.275h.047c1.351-3.382,2.841-6.893,4.285-10.25.116-.2.186-.333.419-.333h3.75c.186,0,.256.154.14.359Zm7.662,4.177c0-5.97,3.61-10.634,9.339-10.634a9.394,9.394,0,0,1,1.211.051v-6.79a.245.245,0,0,1,.233-.256h3.68c.186,0,.233.077.233.2V38.783a20.064,20.064,0,0,0,.116,2.511c0,.154-.047.2-.186.282a12.83,12.83,0,0,1-5.962,1.486C33.375,43.088,29.765,39.654,29.765,32.685Zm10.55-6.56a3.239,3.239,0,0,0-1.351-.256c-2.935,0-4.984,2.486-4.984,6.611,0,4.715,2.1,6.611,4.728,6.611a4.033,4.033,0,0,0,1.607-.282V26.125Z" transform="translate(0 -0.45)" fill="#aa3fe6"/>
                                </svg>
                                <p>Adobe xd</p>
                            </div>
                        </div>
                    </div>
                    <img className = {styles.imgBg}
                        src ="/src/imgBg.png"
                        alt = "minha imagem de fundo"
                    />
                    <Footer></Footer>
                    {/* TEM UM ERRO DE RESPONSIVIDADE AQUI NO FOOTER */}
                </section>
            </main>
            
        </body>
    );

}
export async function getServerSideProps (){

   
    //retorna um objeto com atributo de props
    return {
        props: {
            
        }
    }
}
import Link from 'next/link'
import styles from '../sass/social_networks.module.scss'

const social_networks = () =>{
    return(
        <section className = {styles.social_networks_container}>
            {/* -------- github ---------*/}
            <Link  href='https://github.com/AbraaoMorais' passHref>
                <a target="_blank" >
                    <svg className = {styles.icon_network} id="Icon_awesome-github" data-name="Icon awesome-github" xmlns="http://www.w3.org/2000/svg" width = "38px" height = "auto" viewBox="0 0 24.693 24.051">
                        <path id="Icon_awesome-github-2" data-name="Icon awesome-github" d="M8.259,19.929c0,.1-.115.179-.259.179-.164.015-.279-.065-.279-.179s.115-.179.259-.179S8.259,19.814,8.259,19.929ZM6.711,19.7c-.035.1.065.214.214.244a.234.234,0,0,0,.309-.1c.03-.1-.065-.214-.214-.259A.256.256,0,0,0,6.711,19.7Zm2.2-.085c-.144.035-.244.129-.229.244s.144.164.294.129.244-.129.229-.229S9.056,19.605,8.912,19.62ZM12.187.563A11.932,11.932,0,0,0,0,12.7a12.47,12.47,0,0,0,8.439,11.9c.637.114.861-.279.861-.6s-.015-2.009-.015-3.054c0,0-3.485.746-4.217-1.482,0,0-.568-1.447-1.384-1.82,0,0-1.14-.781.08-.766a2.628,2.628,0,0,1,1.922,1.283,2.633,2.633,0,0,0,3.629,1.039,2.763,2.763,0,0,1,.8-1.676c-2.783-.308-5.591-.711-5.591-5.5A3.767,3.767,0,0,1,5.7,9.092a4.694,4.694,0,0,1,.129-3.377C6.865,5.392,9.26,7.058,9.26,7.058a11.773,11.773,0,0,1,6.253,0s2.395-1.671,3.435-1.343a4.692,4.692,0,0,1,.129,3.377,3.864,3.864,0,0,1,1.284,2.929c0,4.8-2.932,5.182-5.715,5.5a2.939,2.939,0,0,1,.846,2.308c0,1.676-.015,3.75-.015,4.158,0,.323.229.716.861.6A12.355,12.355,0,0,0,24.693,12.7,12.2,12.2,0,0,0,12.187.563ZM4.839,17.715c-.065.05-.05.164.035.259s.194.114.259.05.05-.164-.035-.259S4.9,17.651,4.839,17.715Zm-.538-.4c-.035.065.015.144.115.194a.148.148,0,0,0,.214-.035c.035-.065-.015-.144-.115-.194C4.416,17.248,4.336,17.263,4.3,17.313Zm1.613,1.771c-.08.065-.05.214.065.308.115.114.259.129.324.05s.035-.214-.065-.308C6.129,19.018,5.979,19,5.914,19.083Zm-.568-.731c-.08.05-.08.179,0,.293s.214.164.279.114a.227.227,0,0,0,0-.308C5.556,18.337,5.427,18.287,5.347,18.352Z" transform="translate(0 -0.563)" fill="#314665"/>
                    </svg>
                </a>
            </Link>
            {/* -------- behance ---------*/}
            <Link  href='' passHref>
                <a target="_blank" >
                    <svg className = {styles.icon_network} id="Icon_awesome-behance-square" data-name="Icon awesome-behance-square" xmlns="http://www.w3.org/2000/svg" width="23.207" width = "35px" height = "auto" viewBox="0 0 23.207 23.207">
                        <path id="Icon_awesome-behance-square-2" data-name="Icon awesome-behance-square" d="M9.661,15.77c0,1-.725,1.316-1.616,1.316H5.708v-2.74H8.091C9.055,14.351,9.661,14.75,9.661,15.77Zm-.4-4.263c0-.917-.71-1.134-1.5-1.134H5.714v2.321H7.926c.782,0,1.336-.342,1.336-1.186Zm6.853,1.2a1.544,1.544,0,0,0-1.642,1.538H17.7A1.476,1.476,0,0,0,16.115,12.709Zm7.092-7.972V22.97a2.487,2.487,0,0,1-2.486,2.486H2.486A2.487,2.487,0,0,1,0,22.97V4.736A2.487,2.487,0,0,1,2.486,2.25H20.72A2.487,2.487,0,0,1,23.207,4.736Zm-9.133,5.439H18.1V9.2h-4.03Zm-2.227,5.714a2.575,2.575,0,0,0-1.813-2.673A1.934,1.934,0,0,0,11.391,11.3c0-1.979-1.476-2.461-3.181-2.461H3.522v9.946H8.345C10.153,18.775,11.847,17.909,11.847,15.889Zm7.838-.767c0-2.129-1.248-3.906-3.5-3.906A3.615,3.615,0,0,0,12.5,15.029a3.51,3.51,0,0,0,3.683,3.781,3.212,3.212,0,0,0,3.372-2.424H17.809a1.639,1.639,0,0,1-1.564.938A1.625,1.625,0,0,1,14.478,15.5h5.19C19.674,15.376,19.684,15.247,19.684,15.123Z" transform="translate(0 -2.25)" fill="#314665"/>
                    </svg> 
                </a>
            </Link>
            {/* -------- linkedin ---------*/}
            <Link  href='' passHref>
                <a target="_blank" >
                    <svg className = {styles.icon_network} id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin" xmlns="http://www.w3.org/2000/svg" width = "35px" height = "auto" viewBox="0 0 23.207 23.207">
                        <path id="Icon_awesome-linkedin-2" data-name="Icon awesome-linkedin" d="M21.549,2.25H1.652A1.665,1.665,0,0,0,0,3.923V23.784a1.665,1.665,0,0,0,1.652,1.673h19.9a1.669,1.669,0,0,0,1.658-1.673V3.923A1.669,1.669,0,0,0,21.549,2.25ZM7.014,22.142H3.574V11.067H7.019V22.142ZM5.294,9.554A1.994,1.994,0,1,1,7.288,7.56,2,2,0,0,1,5.294,9.554ZM19.907,22.142h-3.44V16.754c0-1.285-.026-2.937-1.787-2.937-1.792,0-2.067,1.4-2.067,2.844v5.481H9.174V11.067h3.3v1.513h.047a3.623,3.623,0,0,1,3.258-1.787c3.481,0,4.129,2.295,4.129,5.279Z" transform="translate(0 -2.25)" fill="#314665"/>
                    </svg>
                </a>
            </Link>
            {/* -------- facebook ---------*/}
            <Link  href='' passHref>
                <a target="_blank" >
                    <svg className = {styles.icon_network} id="Icon_awesome-facebook" data-name="Icon awesome-facebook" xmlns="http://www.w3.org/2000/svg" width = "35px" height = "auto" viewBox="0 0 23.693 23.538">
                        <path id="Icon_awesome-facebook-2" data-name="Icon awesome-facebook" d="M24.256,12.4a11.847,11.847,0,1,0-13.7,11.7V15.826H7.549V12.4h3.009V9.794c0-2.967,1.767-4.606,4.475-4.606a18.241,18.241,0,0,1,2.652.231V8.331H16.191a1.712,1.712,0,0,0-1.93,1.849V12.4h3.286l-.525,3.423H14.26V24.1A11.847,11.847,0,0,0,24.256,12.4Z" transform="translate(-0.563 -0.563)" fill="#314665"/>
                    </svg>
                </a>
            </Link>
             {/* -------- instagram ---------*/}
            <Link  href='https://github.com/AbraaoMorais' passHref>
                <a target="_blank" >
                    <svg className = {styles.icon_network_instagram} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 27.303 27.303">
                        <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(1.5 1.5)">
                            <path id="Caminho_10" data-name="Caminho 10" d="M9.076,3H21.227A6.076,6.076,0,0,1,27.3,9.076V21.227A6.076,6.076,0,0,1,21.227,27.3H9.076A6.076,6.076,0,0,1,3,21.227V9.076A6.076,6.076,0,0,1,9.076,3Z" transform="translate(-3 -3)" fill="#314665" stroke="#091024" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            <path id="Caminho_11" data-name="Caminho 11" d="M21.734,16.083a4.861,4.861,0,1,1-4.1-4.1,4.861,4.861,0,0,1,4.1,4.1Z" transform="translate(-4.721 -4.697)" fill="#314665" stroke="#091024" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            <path id="Caminho_12" data-name="Caminho 12" d="M26.25,9.75h0" transform="translate(-7.415 -4.282)" fill="#314665" stroke="#091024" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        </g>
                    </svg>

                </a>
            </Link>
            {/* -------- whatsapp ---------*/}
            <Link  href='https://github.com/AbraaoMorais' passHref>
                <a target="_blank" >
                    <svg  className = {styles.icon_network} id="Icon_ionic-logo-whatsapp" data-name="Icon ionic-logo-whatsapp" xmlns="http://www.w3.org/2000/svg" width="35" height="auto" viewBox="0 0 23.207 23.207">
                        <path id="Icon_ionic-logo-whatsapp-2" data-name="Icon ionic-logo-whatsapp" d="M14.064,2.25a11.349,11.349,0,0,0-11.393,11.3,11.188,11.188,0,0,0,1.635,5.837L2.25,25.457l6.308-2a11.412,11.412,0,0,0,16.9-9.9A11.349,11.349,0,0,0,14.064,2.25Zm5.665,15.6a2.943,2.943,0,0,1-2.015,1.3c-.534.028-.55.414-3.462-.851a11.887,11.887,0,0,1-4.8-4.541,5.587,5.587,0,0,1-1.075-3.028A3.228,3.228,0,0,1,9.483,8.357a1.116,1.116,0,0,1,.789-.332c.229,0,.378-.007.548,0s.424-.035.645.551.748,2.028.816,2.175a.528.528,0,0,1,.005.506,1.978,1.978,0,0,1-.309.471c-.152.163-.32.365-.455.489-.151.138-.309.289-.15.584a8.718,8.718,0,0,0,1.543,2.058A7.949,7.949,0,0,0,15.2,16.378c.286.156.456.138.633-.048s.758-.816.963-1.1.4-.227.66-.121,1.666.858,1.952,1.013.476.235.544.357A2.392,2.392,0,0,1,19.729,17.848Z" transform="translate(-2.25 -2.25)" fill="#314665"/>
                    </svg>

                </a>
            </Link>
        </section>
    );
}

export default social_networks
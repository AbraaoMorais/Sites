import styles from '../styles/sideLeft.module.css'
import Nav from '../components/Nav'
import Social_networks from '../components/Social_networks'
import Image from 'next/image'

const SideLeft = () => {
    return(
    <section className = {styles.side_left_container}>
       <div className= {styles.perfil}>
            <div className = {styles.container_imgPerfil}>
              <Image
                src = "/src/imgProfile.jpg"
                alt = "imagem perfil abraão morais"
                layout = "responsive"  
                width = {450}
                height = {450}
                className = {styles.imgPerfil}
              />
            </div>
            <h1>Abraão Morais</h1>
            <h2>Front-End Developer || UX/UI Designer</h2>
        </div>
        <hr className = {styles.line_horizontal}></hr>
        <div className = {styles.container_Nav}>
            <Nav/>
        </div>
        <hr className = {styles.line_horizontal}></hr>
        <Social_networks/>       
    </section>
    );
}
export default SideLeft
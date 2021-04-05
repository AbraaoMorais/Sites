import styles from '../styles/sideLeft.module.css'
import Nav from '../components/Nav'
import Image from 'next/image'

const SideLeft = () => {
    return(
    <section className = {styles.side_left_container}>
       <div className= {styles.perfil}>
            <div className = {styles.container_imgPerfil}>
              <Image
                src = "/src/imgPerfil.jpg"
                alt = "imagem perfil abraão morais"
                layout = "responsive"  
                width = {400}
                height = {400}
                className = {styles.imgPerfil}
              />
            </div>
            <h1>minha foto</h1>
            <h1>minha foto</h1>
        </div>
        <hr className = {styles.line_horizontal}></hr>
        <div className = {styles.menuNav}>
            <Nav/>
        </div>
        <hr className = {styles.line_horizontal}></hr>        
    </section>
    );
}
export default SideLeft
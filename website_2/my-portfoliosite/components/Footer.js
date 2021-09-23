import styles from "../styles/footer.module.css"

const footer = () =>{
    return(
        <footer className = {styles.footer}>
            <p>Coperight © 2021 - Abraão Morais</p>
            <p>&emsp;|&emsp; Developed in Next.js</p>
            <p>&emsp;|&emsp; Status: under development..</p>
        </footer>
    )
}

export default footer

import styles from "../styles/footer.module.css"

//formatar data com date api
let coperightDate = new Date() 
coperightDate= new Intl.DateTimeFormat('pt-BR',{year: 'numeric'}).format();

const footer = () =>{
    return(
        <footer className = {styles.footer}>
            <p>Coperight © {coperightDate} - Abraão Morais</p>
            <p>&emsp;|&emsp; Developed with Next.js</p>
            <p>&emsp;|&emsp; Status: under development..</p>
        </footer>
    )
}

export default footer

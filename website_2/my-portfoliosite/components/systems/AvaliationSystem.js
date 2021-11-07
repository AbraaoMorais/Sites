
const AvaliateSystem = (props) => {
    
    // cria arrays
    let avaliation = ["nota1","nota2","nota3","nota4","nota5"]
    let newAvaliation, notAvalible, finalAvaliation = [];
    

    //avaliação do usuario, propsTrack: game-item.js -> games.jsx
    let userAvaliation = props.avaliation;

    //logica
    if (userAvaliation != null && userAvaliation != undefined || userAvaliation <= 5){
        
        // itera estrelas com contexto de avaliada
        newAvaliation = avaliation.map(item => {
            return item = <img key={item.toString() + "cS"} src="/icons/star-full-icon.svg" />
        })
        
        // itera estrelas com contexto de não-avaliada
        notAvalible = avaliation.map(starOff =>{
            return starOff = <img key={starOff.toString() + "nS"} src="/icons/star-icon.svg" />
        })

        // tratar valor recebido na avaliação do usuário
        userAvaliation > 5 ? userAvaliation = 5 : null;

        // define tamanho de cada array com base na avaliação do usuário
        notAvalible.length = 5 - userAvaliation; 
        newAvaliation.length = userAvaliation;

        //monta newArray com valores dos oldArrays
        finalAvaliation = [...newAvaliation, ...notAvalible]
        console.table(finalAvaliation);
           
    }
    

    return(
        <>
            <span> 
                {finalAvaliation} 
            </span>
        </>
 )   
}

export default AvaliateSystem
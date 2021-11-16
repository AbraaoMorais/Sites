import styles from '../../scss/page-projects/rating.module.scss'
import { array } from "prop-types";
import { useState , useEffect} from "react";

 

const AvaliateSystem = (props) => {

    
    // cria arrays
    let avaliation = ["nota1","nota2","nota3","nota4","nota5"]
    let newAvaliation, notAvalible, finalAvaliation = [];
    

    //avaliação do usuario, propsTrack: game-item.js -> games.jsx
    let userAvaliation = props.avaliation;

    ///////////////////component for visualization///////////////////
    
    if (userAvaliation != null && userAvaliation != undefined || userAvaliation <= 5){
        
        // itera estrelas com contexto de avaliada
        newAvaliation = avaliation.map(item => {
            return item = <img 
            key={item.toString() + "cS"} 
            src="/icons/star-full-icon.svg" 
   
            />
            
        })
        
        // itera estrelas com contexto de não-avaliada
        notAvalible = avaliation.map(starOff =>{
            return starOff = <img 
            key={starOff.toString() + "nS"} 
            src="/icons/star-icon.svg" 
            />
        })

        // tratar valor recebido na avaliação do usuário
        userAvaliation > 5 ? userAvaliation = 5 : null;

        // define tamanho de cada array com base na avaliação do usuário
        notAvalible.length = 5 - userAvaliation; 
        newAvaliation.length = userAvaliation;

        //monta newArray com valores dos oldArrays
        finalAvaliation = [...newAvaliation, ...notAvalible]
        // console.table(finalAvaliation);
       
    }

     ///////////////////component for avaliate///////////////////
     
    const [active, setActive] = useState(false)
    const [userHasAvaliate, setUserHasAvalation] = useState(false);

    const [clicked, setClicked] = useState([false, false, false, false, false]);
     
    const handleStarClick = (e, index) =>{
        
        e.preventDefault();

        let clickStates = [...clicked];
        for (let i=0; i <5; i++){
            (i<=index) ? clickStates[i] = true : clickStates[i]=false;
            
        }

        setTimeout(()=>{
            //volta pro primeiro componente  
            setActive(false); 
            alert("obrigado por avaliar!")
        },300)
      
        setClicked(clickStates)
        
        //usuario acabou de avaliar
        setUserHasAvalation(true);
    }

    //faz validação pra usuario só avaliar 1x
    const validadeUserVote = ()=>{
        if(userHasAvaliate === false)
        setActive(true)
    }
 
    return(
        <>
  
            <span> 
                {active ? <form>
                    <div onMouseLeave={()=>setActive(false)} className={styles.rating}>
                        <div>
                            <img
                                src = "/icons/star-icon.svg"
                                onClick={(e) => handleStarClick(e, 0)}
                                className={clicked[0] ? styles.clickedstar : null}
                            />

                            <img
                                src = "/icons/star-icon.svg"
                                onClick={(e) => handleStarClick(e, 1)}
                                className={clicked[1] ? styles.clickedstar : null}
                            />

                            <img
                                src = "/icons/star-icon.svg"
                                onClick={(e) =>handleStarClick(e, 2)}
                                className={clicked[2] ? styles.clickedstar : null}
                            />

                            <img
                                src = "/icons/star-icon.svg"
                                onClick={(e) => handleStarClick(e, 3)}
                                className={clicked[3] ? styles.clickedstar : null}
                            />

                            <img
                                src = "/icons/star-icon.svg"
                                onClick={(e) => handleStarClick(e, 4)}
                                className={clicked[4] ? styles.clickedstar :null}
                            />

                        </div>    
                    </div>
                    
                </form> : <div onMouseOver={validadeUserVote}> {finalAvaliation }</div> } 
            </span>
        </>
 )   
}

export default AvaliateSystem
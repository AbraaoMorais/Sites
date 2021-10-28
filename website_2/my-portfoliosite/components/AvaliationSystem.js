
const AvaliateSystem = (props) => {
    
    //objetos com os assets
    const starOff = <img src="/icons/star-icon.svg" />;
    const starOn = <img src="/icons/star-full-icon.svg" />;

    //cria array com estrelas vazias
    let avaliation = [starOff,starOff,starOff,starOff,starOff]

    //avaliação do usuario, props -> game-item.js -> games.jsx
    let userAvaliation = props.avaliation;

    //logica
    if (userAvaliation != null && userAvaliation != undefined || userAvaliation <= 5){

        for(let i = 0; i < userAvaliation; i++){
            //adciona estrela
            avaliation.unshift(starOn);

            //remove estrela vazia
            let numItemsRemove = 0;
            avaliation.splice(starOff, numItemsRemove);
            numItemsRemove +=1;
        }
        //mesmo se o if falhar apenas 5 items do array será     exibido
        avaliation.length = 5;
    }


    return(
        <>
            <span> 
                {avaliation} 
            </span>
        </>
 )   
}

export default AvaliateSystem
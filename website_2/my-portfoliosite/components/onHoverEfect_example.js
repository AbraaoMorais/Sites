import React, {useRef} from 'react';


const popup_Infor = () => {
    // const [popup, setPopup] = useState(1);
    let myBtn = useRef(null)
    let myBtn2 = useRef(null)

    const btnClick =()=>{
        myBtn.current.focus()
        alert("oi")
    }
   
    return (
        <div>
            <input ref={myBtn} type="text" value="" />
            <button ref={myBtn2} onMouseOver={btnClick} id="mybtn">daada</button>
        </div>
    );
}

export default popup_Infor;

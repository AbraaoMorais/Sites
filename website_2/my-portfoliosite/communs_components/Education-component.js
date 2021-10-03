import EducationItem from "../components/Education_item";
import PFstyle from "../scss/page_formation.module.scss"

const EducationComponent = () => {
    return(
        <>
            <ul className={PFstyle.education_items_container}>
                
                <li className={PFstyle.li_header}>
                    
                    <div className={PFstyle.education_header_item_wrapp}>
                        <img src="/src/svg/school.svg"/>
                        <h3>
                            Instituition
                        </h3>
                    </div>
                    
                    <div className={PFstyle.education_header_item_wrapp}>
                        <img src="/src/svg/diploma.svg" />
                        <h3>
                            Formation
                        </h3>
                    </div>
                    
                    <div className={PFstyle.education_header_item_wrapp}>
                        <img src="/src/svg/level-school.svg" />
                        <h3>
                            Level
                        </h3>
                    </div>

                    <div className={PFstyle.education_header_item_wrapp}>
                        <img src="/src/svg/status-school.svg" />
                        <h3>
                            Status
                        </h3>
                    </div>
                </li>
                <li className={PFstyle.anim0}>
                    <EducationItem
                        instituition = "C.E.P.E.P Technical School"
                        curse="Technical in Eletrotecnichal"
                        level = "Technichal"
                        status="Complete"
                    />
                </li>
                <li className={PFstyle.anim1}>
                    <EducationItem
                        instituition = "IMD/UFRN"
                        curse="Digital Games Programmer"
                        level = "Complementary Technichal"
                        status="Complete"
                    />
                </li>
                <li className={PFstyle.anim2}>
                    <EducationItem
                    instituition = "Universidade Cruzeiro do    Sul"
                    curse="Analysis and Systems Development"
                    level = "Superior of Technology"
                    status="Studying"
                    />
                </li>
            
            </ul>
        </>
    )
}

export default EducationComponent;
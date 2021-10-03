import EducationItem from "../components/Education_item";
import PFstyle from "../scss/page_formation.module.scss"

const EducationComponent = () => {
    return(
        <>
            <ul className={PFstyle.education_items_container}>
                
                <header>
                    
                    <div className={PFstyle.education_header_item_wrapp}>
                        <img src="/icons/git-icon.svg"/>
                        <h3>
                            Instituition
                        </h3>
                    </div>
                    
                    <div className={PFstyle.education_header_item_wrapp}>
                        <img src="/icons/git-icon.svg" />
                        <h3>
                            Formation
                        </h3>
                    </div>
                    
                    <div className={PFstyle.education_header_item_wrapp}>
                        <img src="/icons/git-icon.svg" />
                        <h3>
                            Level
                        </h3>
                    </div>

                    <div className={PFstyle.education_header_item_wrapp}>
                        <img src="/icons/git-icon.svg" />
                        <h3>
                            Status
                        </h3>
                    </div>
                </header>
                <EducationItem
                    instituition = "C.E.P.E.P Technical School"
                    curse="Technical in Eletrotecnichal"
                    level = "Technichal"
                    status="Complete"
                />
                <EducationItem
                    instituition = "IMD/UFRN"
                    curse="Digital Games Programmer"
                    level = "Complementary Technichal"
                    status="Complete"
                />
                <EducationItem
                instituition = "Universidade Cruzeiro do Sul"
                curse="Analysis and Systems Development"
                level = "Superior of Technology"
                status="Studying"
                />
            
            </ul>
        </>
    )
}

export default EducationComponent;
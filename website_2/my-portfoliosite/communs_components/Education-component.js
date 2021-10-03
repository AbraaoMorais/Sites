import EducationItem from "../components/Education_item";
import PFstyle from "../scss/page_formation.module.scss"

const EducationComponent = () => {
    return(
        <>
            <div className={PFstyle.education_items_container}>
                
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
                    curse="ola dada"
                    level = "ola mundo"
                    status="ola mundo"
                />
                 <EducationItem/>
                <EducationItem/>
            
            </div>
        </>
    )
}

export default EducationComponent;
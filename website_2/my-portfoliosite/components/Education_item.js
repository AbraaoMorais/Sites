import { Fragment } from "react"
import style from '../scss/page_formation.module.scss'
import PropTypes from 'prop-types'

const EducationItem = (props) => {
    return (
        <Fragment>
            <div className={style.education_item_wrapp}>
                <div className= {style.education_item}>
                    <h4>
                        {props.instituition}
                    </h4>
                </div>
                <div className= {style.education_item}>
                    <h4>
                        {props.curse}
                    </h4>
                </div>
                <div className= {style.education_item}>
                    <h4>
                        {props.level}
                    </h4>
                </div>
                <div className= {style.education_item}>
                    <h4>
                        {props.status}
                    </h4>
                </div>
            </div>
            
        </Fragment>
    )
}
//definir o tipo de prop
EducationItem.propTypes = {
    instituition: PropTypes.string,
    curse: PropTypes.string,
    level: PropTypes.string,
    status: PropTypes.string 
}

//retornar valores padrões 
EducationItem.defaultProps = {
    instituition: 'No data registered',
    curse: 'No data registered',
    level: 'No data registered',
    status: 'No data registered' 
}
export default EducationItem
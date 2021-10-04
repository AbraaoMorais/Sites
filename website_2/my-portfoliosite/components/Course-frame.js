import Image from 'next/image'
import PropTypes from 'prop-types'
import styles from '../scss/page_formation.module.scss'

const CourseFrame = (props) => {
    return(
        <>
            <div className={styles.course_frame}>
                <Image
                    className={styles.img}
                    src= {props.src}
                    alt = {props.alt}
                    layout = "fill"
                    objectFit = 'cover' 
                />
                <div className={styles.course_title_wrapp}>
                    <h3>
                        {props.title}
                    </h3>
                </div>
            </div>
        </>
    )
}

CourseFrame.propTypes = {
    src: PropTypes.any,
    alt: PropTypes.string,
    title: PropTypes.string   
}
CourseFrame.defaultProps = {
    src: "/url-for-image",
    alt: "curse description",
    title: "curse title"
}

export default CourseFrame
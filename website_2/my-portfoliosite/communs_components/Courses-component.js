import { Fragment , useState} from "react";
import CourseFrame from "../components/Course-frame";
import AliceCarousel from 'react-alice-carousel';
import styles from '../scss/page_formation.module.scss';

const CourseComponent = () =>{
    
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };


    const coursesItems = [
        <CourseFrame
            src="/src/certificados/cf1test.jpg"
            alt= "alguma coisa"
            title = "course number 1" 
        />,
        <CourseFrame
            src="/src/certificados/cf2test.jpg"
            alt= "alguma coisa"
            title = "course number 1" 
        />,
        <CourseFrame
            src="/src/certificados/cf3test.jpg"
            alt= "alguma coisa"
            title = "course number 1" 
        />,
        <CourseFrame
            src="/src/certificados/cf3test.jpg"
            alt= "alguma coisa"
            title = "course number 1" 
        />
    ];

    //render dos botões
    const renderPrevButton = ({ isDisabled }) => {
        return <span style={{ opacity: isDisabled ? '0.5' : 1 }}>&lang;</span>;
    };
    
    const renderNextButton = ({ isDisabled }) => {
        return <span style={{ opacity: isDisabled ? '0.5' : 1}}>&rang;</span>;
    };

    return(
        
        <Fragment>

                <div className={styles.courses_wrapp}>
                
                <AliceCarousel 
                    renderPrevButton={renderPrevButton}
                    renderNextButton={renderNextButton}
                    autoPlay={true}
                    autoPlayInterval={2000}
                    animationDuration={600}
                    mouseTracking ={true}
                    disableDotsControls={true}
                    // disableButtonsControls={true}
                    responsive = {responsive}
                    disableSlideInfo={false}
                    infinite={true}
                   
                    items={coursesItems}
                />
                    
                </div>
 
                
        </Fragment>
        
    )
}

export default CourseComponent;
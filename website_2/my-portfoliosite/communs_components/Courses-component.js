import { Fragment } from "react";
import CourseFrame from "../components/Course-frame";
import styles from '../scss/page_formation.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CourseComponent = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <Fragment>

                <div className={styles.courses_wrapp}>
                
                  
                    <CourseFrame
                        src="/src/certificados/cf1test.jpg"
                        alt= "alguma coisa"
                        title = "course number 1" 
                    />
                    <CourseFrame
                        src="/src/certificados/cf2test.jpg"
                        alt= "alguma coisa"
                        title = "course number 1" 
                    />
                    <CourseFrame
                        src="/src/certificados/cf3test.jpg"
                        alt= "alguma coisa"
                        title = "course number 1" 
                    />
                     {/* <CourseFrame
                        src="/src/certificados/cf2test.jpg"
                        alt= "alguma coisa"
                        title = "course number 1" 
                    /> */}
                
                </div>
 
              
        </Fragment>
        
    )
}

export default CourseComponent;
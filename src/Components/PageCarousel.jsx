import React from 'react'
import {createUseStyles} from 'react-jss'
import EvaluationPage from './EvaluationPage'
import Navbar from './Navbar'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const useStyles = createUseStyles({
    pageCarousel : {
        display: 'flex',
        flexDirection : 'row'
    }
})

const PageCarousel = () => {
    const [index, setIndex] = React.useState(0);
    const classes = useStyles();

    const onChange = value => setIndex(value);

    return(
        <div>
            <Navbar clickHandler={setIndex}/>

            <Carousel
            value={index}
            onChange={onChange}
            >
                <EvaluationPage></EvaluationPage>
                <EvaluationPage></EvaluationPage>
                <EvaluationPage></EvaluationPage>
                <EvaluationPage></EvaluationPage>
            </Carousel>
               
        </div>
    )
}

export default PageCarousel;
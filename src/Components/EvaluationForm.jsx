import React from 'react'
import {createUseStyles} from 'react-jss'
import PageCarousel from './PageCarousel'
import Navbar from './Navbar'
import EvaluationPage from './EvaluationPage'
import PageList from './PageList'

const useStyles = createUseStyles({
    evaluationForm : {
        margin:'auto',
        width: '60%',
        border:'1px dashed green',
        boxSizing:'border-box',
        marginTop: '50px',
        
    },
    courseTitle:{
        fontSize:'35px',
        margin:'40px'
    }
})

const EvaluationForm = ({useCarousel}) => {
    const [index,setIndex] = React.useState(0);
    const classes = useStyles();

    /*

    state:
    pages:{
        
    }

    Namnet på kursen
    <Navbar>
    <Innehåll>

    useeffect(){
        createState(pagesArr)
    }

    
    */

    return(
        <div className={classes.evaluationForm}>
            <div className={classes.courseTitle}>Informationssystem A: Algoritmer och datastrukturer</div>
            { useCarousel && <PageCarousel/>}
            { !useCarousel && <PageList/>}
        </div>
    )
}

export default EvaluationForm;
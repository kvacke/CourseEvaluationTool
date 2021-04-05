import React from 'react'
import {createUseStyles} from 'react-jss'
import PageCarousel from './PageCarousel'
import Navbar from './Navbar'
import EvaluationPage from './EvaluationPage'
import PageList from './PageList'
import Scene from './InteractionMatter/Scene'
import Paper from '@material-ui/core/Paper';
import {generateClassData} from './InteractionMatter/ClassData'


const useStyles = createUseStyles({
    evaluationForm : {
        margin:'auto',
        width: '1000px',
        //border:'1px dashed green',
        boxSizing:'border-box',
        marginTop: '10px',
    },
    courseTitle:{
        fontSize:'35px',
        margin:'30px'
    },
})

const EvaluationForm = ({useCarousel}) => {
    const [index,setIndex] = React.useState(0);
    const classes = useStyles();

    const classData = generateClassData(3,17,1,0)


    return(
        
        <div className={classes.evaluationForm}>
            <Scene classData={classData} />
            <div className={classes.courseTitle}>Informationssystem A: Algoritmer och datastrukturer</div>
            { useCarousel && <PageCarousel/>}
            { !useCarousel && <PageList/>}
        </div>
        
    )
}

export default EvaluationForm;
import React from 'react'
import EvaluationPage from './EvaluationPage'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    pageList : {
        

    }
})


const PageList = () => {

    const classes = useStyles();

    return(
        <div className={classes.pageList}>
            <EvaluationPage title={"Generellt"}/>
            <EvaluationPage title={"Förutsättningar"}/>
            <EvaluationPage title={"Under kursen"}/>
            <EvaluationPage title={"Resultat"}/>
        </div>

    )
}

export default PageList
import React from 'react'
import {createUseStyles} from 'react-jss'
import OrdinalScaleItem from './OrdinalScaleItem'


const useStyles = createUseStyles({
    evaluationPage : {
        display:'flex',
        flexDirection: 'column',
        width:'100%',
        
        //border:'1px solid lightblue',
        

    },
    pageTitle :{
        fontSize: '32px',
        fontWeight: 600,
    },
    itemList:{
        display :'flex',
        flexDirection:'column',
        height:'100%',
        paddingBottom:'100px'
    }
})

const EvaluationPage = ({title}) => {

    const classes = useStyles();

    const radioButtonData = [
        ["Instämmer inte alls",
        "Instämmer i låg grad",
        "Instämmer i viss grad",
        "Instämmer i hög grad",
        "Instämmer helt"],
        [
            "Alldeles för låg",
            "För låg",
            "Lagom",
            "För hög",
            "Alldeles för hög"
        ]
    ]

    return(
        <div className={classes.evaluationPage}>
            <div className={classes.pageTitle}>{title}</div>
            <div className={classes.itemList}>
                <OrdinalScaleItem prompt="Det har varit tydligt för mig vad som krävs för att klara kursen" radioButtonData={radioButtonData[0]}/>
                <OrdinalScaleItem prompt="Jag anser att kursens svårighetsgrad har varit" radioButtonData={radioButtonData[1]}/>



            </div>
            
            
        </div>
    )
}

export default EvaluationPage;
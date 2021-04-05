import React from 'react'
import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles({
    evaluationPage : {
        display:'flex',
        flexDirection: 'column',
        width:'100%',
        alignItems:'center'
        


    },
    pageTitle :{
        fontSize: '28px',
        fontWeight: 300,
        marginBottom:'40px',
        marginTop: '50px'
    },
    itemList:{

        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        width:'80%'
    }
})

const EvaluationPage = ({title, children}) => {

    const classes = useStyles();

    

    return(
        <div className={classes.evaluationPage}>
            <div className={classes.pageTitle}>{title}</div>
            <div className={classes.itemList}>
                {children}
            </div>
            
            
        </div>
    )
}

export default EvaluationPage;
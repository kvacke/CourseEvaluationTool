import React from 'react';
import {createUseStyles} from 'react-jss'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const useStyles = createUseStyles({
    textAnswerInput : {
        width:'100%',
    },
    textAreaContainer:{
        padding : '10px',
        boxSizing:'border-box',
        border:'1px solid black',
    },
    textArea:{
        width:'100%',
        resize:'none',
        fontFamily:'roboto',
        border:'none',
        outline:'none',
    }
})


const TextAnswerInput = () => {

    const classes = useStyles();
    return(
        <div className={classes.textAnswerInput}>
            <div className={classes.textAreaContainer}>
                    <TextareaAutosize spellCheck={false} rowsMin={5} rowsMax={20} className={classes.textArea} placeholder="" />
            </div>
        </div>  
    )
}

export default TextAnswerInput;

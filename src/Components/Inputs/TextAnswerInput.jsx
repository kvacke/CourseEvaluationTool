import React from 'react';
import {createUseStyles} from 'react-jss'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import debounce from 'lodash.debounce'

const useStyles = createUseStyles({
    textAnswerInput : {
        width:'100%',
    },
    textAreaContainer:{
        padding : '10px',
        boxSizing:'border-box',
        border:'1px solid',
        borderColor: props => props ? 'lightgrey' : 'black',
    },
    textArea:{
        width:'100%',
        resize:'none',
        fontFamily:'roboto',
        border:'none',
        outline:'none',
        color: props => props ? 'lightgrey' : 'black'
    }
})


const TextAnswerInput = ({sendValue, isDisabled, id, stateValue}) => {
    const [value, setValue] = React.useState("")

    const updateValue = () => {
        sendValue(id,value)
    }

    const handleChange = e => {
        if(!isDisabled)
        {
            setValue(e.target.value)
        }
    }

    const delayedUpdate = React.useCallback(debounce(updateValue, 500), [value]);

    React.useEffect(() => {
        delayedUpdate();

        return delayedUpdate.cancel;
    },[value, delayedUpdate])


    const classes = useStyles(isDisabled);
    return(
        <div className={classes.textAnswerInput}>
            <div className={classes.textAreaContainer}>
                    <TextareaAutosize onChange={handleChange} value={value} spellCheck={false} rowsMin={3} rowsMax={20} className={classes.textArea} placeholder=""/>
            </div>
        </div>  
    )
}

export default TextAnswerInput;

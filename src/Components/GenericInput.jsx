import React from 'react'
import {createUseStyles} from 'react-jss'
import OrdinalScaleInput from './OrdinalScaleInput'
import Checkbox from '@material-ui/core/Checkbox';
import SmileyInput from './SmileyInput'
import TextAnswerInput from './TextAnswerInput'
import WordsInput from './WordsInput'


const useStyles = createUseStyles({
    genericInput : {
        width: '800px',
        //border:'1px dashed lightcoral',
        display:'flex',
        flexDirection:'column',
        position:'relative',
        boxSizing:'border-box',
        marginBottom: '80px',
        color: props => props ? 'rgba(0, 0, 0, 0.38)' : 'black',
    },
    itemTitle : {
        fontSize:'20px',
        textAlign:'left',
        fontFamily:'Roboto',
        width: '75%',
        marginBottom:'20px',
        fontWeight:500

    },
    disabler:{
        position:'absolute',
        top:'0px',
        right:'0px',
        alignItems:'center',
        display:'flex',
        flexDirection:'row',
        color:'black',
    }
})

export const Disabler = ({clickHandler, isDisabled, text}) => {

    const classes = useStyles();

    const handleChange = (event) =>
    {
        clickHandler(event.target.checked)
    }

    return(
        <div className={classes.disabler}>
            {text}<Checkbox color='default' checked ={isDisabled} onChange = {handleChange}/>
        </div>
    )
}

const ItemTitle = ({title}) => 
{
    const classes = useStyles();

    return(<div className={classes.itemTitle}>{title}</div>)
}

const GenericInput = ({inputType, options, itemTitle}) => {
    const [disabled, setDisabled] = React.useState(false)

    const classes = useStyles(disabled);

    const createInput = () => {
        switch(inputType)
        {
            case "ordinalMultiLabel":
                return(
                    <OrdinalScaleInput isDisabled={disabled} radioButtonData = {options}/>
                )
            case "smiley":
                return(
                    <SmileyInput/>
                )
            case "textAnswer":
                return(
                    <TextAnswerInput/>
                )
            case "words":
                return (
                    <WordsInput words = {options}/>
                )
            default: 
                break;
        }
    }

    return(
        <div className={classes.genericInput}>
            <ItemTitle title={itemTitle}/>
            <Disabler text="Avstå" isDisabled={disabled} clickHandler={setDisabled}/>
            {createInput()}
        </div>
    )
}


export default GenericInput;
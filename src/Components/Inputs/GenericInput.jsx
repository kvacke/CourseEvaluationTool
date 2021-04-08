import React from 'react'
import {createUseStyles} from 'react-jss'
import OrdinalScaleInput from './OrdinalScaleInput'
import Checkbox from '@material-ui/core/Checkbox';
import SmileyInput from './SmileyInput'
import TextAnswerInput from './TextAnswerInput'
import WordsInput from './WordsInput'
import Context from '../../Context'

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

export const Disabler = ({clickHandler, isDisabled, text,id}) => {

    const classes = useStyles();

    const handleChange = (func) =>
    {
        func(id,!isDisabled);
    }

    return(
        <div className={classes.disabler}>
            {text}
            <Context.Consumer>
            {value =>
            <Checkbox disableRipple color='default' checked ={isDisabled} onChange = {()=>handleChange(value.setDisabledStatusById)}/>
            }
            </Context.Consumer>
        </div>
    )
}

const ItemTitle = ({title}) => 
{
    const classes = useStyles();

    return(<div className={classes.itemTitle}>{title}</div>)
}

const GenericInput = ({inputType, options, itemTitle, value,id,stateDisabled, stateValue}) => {
    const classes = useStyles(stateDisabled);

    const createInput = (func) => {
        
        switch(inputType)
        {
            case "ordinalScaleInput":
                return(
                    <OrdinalScaleInput sendValue={func} stateValue={stateValue} id={id} isDisabled={stateDisabled} radioButtonData = {options}/>
                )
            case "smiley":
                return(
                    <SmileyInput  sendValue={func} isDisabled={stateDisabled} stateValue={stateValue} id={id} />
                )
            case "textAnswer":
                return(
                    <TextAnswerInput  sendValue={func} isDisabled={stateDisabled} id={id} stateValue={stateValue} />
                )
            case "words":
                return (
                    <WordsInput  sendValue={func} isDisabled={stateDisabled} stateValue={stateValue} id={id} words = {options}/>
                )
            default: 
                break;
        }
    }

    return(
        <div className={classes.genericInput}>
            <ItemTitle title={itemTitle}/>
            <Disabler id={id} text="Avstå" isDisabled={stateDisabled}/>
            <Context.Consumer>
                {
                    value =>
                    createInput(value.setValueById)
                }
            </Context.Consumer>
        </div>
    )
}


export default GenericInput;
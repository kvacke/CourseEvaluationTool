import React from 'react'
import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles({
    word:{
        userSelect:'none',
        opacity: props => props.disabled ? 0.4 : 1
    },
    wordContainer:{
        backgroundColor: props => props.selected ? 'rgb(4, 84, 164)' : '#f1f1f1',
        color: props => props.selected ? 'white' : 'black',

        padding:'10px',
        margin: '5px 5px',
        cursor:'pointer',
        borderRadius:'18px',
        transition:'0.1s ',
        '&:hover':{
            filter: props => props.selected ? 'brightness(1.2)' : 'brightness(0.9)',
        },
        '&:active':
        {
            transform: 'translate(0px,2px)',
        }
    },
    wordsInput:{
        display:'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
    },
    title:{

    }
})

const Word = ({word, selected, disabled, index, toggleHandler}) => {
    //const [selected, setSelected] = React.useState(false)
    const classes = useStyles({selected : selected, disabled :disabled})

    const handleClick = () => 
    {
        //setSelected(!selected)
        toggleHandler(index,disabled);
    }

    React.useEffect(()=>{
        if(disabled)
        {
            toggleHandler(index,disabled)
        }
    },[disabled])

    return(
        <div className={classes.wordContainer} onClick={handleClick}>
            <div className={classes.word}>
                {word}
            </div>
        </div>
    )
}


const WordsInput = ({_title, sendValue, id, isDisabled, stateValue}) => {
    //const [words, setWords] = React.useState([])
    const classes = useStyles(isDisabled)

    const toggleSelected = (_index, _isDisabled) =>
    {
        var newValue = stateValue
        newValue.forEach((item,index)=>{
            if(_isDisabled)
            {
                item.selected = false;
            }
            else if (index === _index)
            {
                item.selected = !item.selected;
            }
            
        })
        sendValue(id,newValue)
    }

    return(
        <div className={classes.wordsInput}>
            {stateValue.map((item, index) => 
                {return <Word key={index} word={item.word} disabled={isDisabled} toggleHandler={toggleSelected} index={index} selected={item.selected}/>}
            )}
        </div>
    )
}

export default WordsInput;
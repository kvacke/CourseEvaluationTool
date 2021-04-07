import React from 'react'
import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles({
    word:{
        userSelect:'none'
    },
    wordContainer:{
        backgroundColor: props => props ? 'rgb(4, 84, 164)' : '#f1f1f1',
        color: props => props ? 'white' : 'black',

        padding:'10px',
        margin: '5px 5px',
        cursor:'pointer',
        borderRadius:'18px',
        transition:'0.1s ',
        '&:hover':{
            filter: props => props ? 'brightness(1.2)' : 'brightness(0.9)',
        },
        '&:active':
        {
            transform: 'translate(0px,2px)',
        }
    },
    wordsInput:{
        display:'flex',
        flexDirection:'row',
        flexWrap: 'wrap'
    },
    title:{

    }
})

const Word = ({word}) => {
    const [selected, setSelected] = React.useState(false)
    const classes = useStyles(selected)

    const handleClick = () => 
    {
        setSelected(!selected)
    }

    return(
        <div className={classes.wordContainer} onClick={handleClick}>
            <div className={classes.word}>
                {word}
            </div>
        </div>
    )
}


const WordsInput = ({_title, words}) => {
    //const [words, setWords] = React.useState([])
    const classes = useStyles()


    return(
        <div className={classes.wordsInput}>
            {words.map((item, index) => 
                {return <Word key={index} word={item}/>}
            )}
        </div>
    )
}

export default WordsInput;
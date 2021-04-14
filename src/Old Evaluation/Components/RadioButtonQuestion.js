import React, { useState } from 'react';
import RadioButton from './RadioButton';
import Comment from './Comment';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        border: "1px solid lightgray",
        display: "flex",
        flexDirection: "column",
        marginBottom: "15px",
        fontSize: "15px",
        fontFamily: "Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif",
        width: "99%",
        margin: 6,
    },
    radioButtonContainer:{
        display: "flex",
    },
    radioNoArrow: {
        display: "flex",
        marginLeft: -25,
    },
    vetEj:{
        marginTop: 12,
        marginLeft: 50,
        textAlign: "left"
    },
    vetEjText:{
        marginTop: 5,
    },
    greenArrow:{
        marginTop: 12,
        marginLeft: 25
    },
    redArrow:{
        marginLeft: 10,
        marginRight: -25,
        marginTop: 12,
    },
    question:{
        display: "flex",
        backgroundColor: "#e1e8f2",
        justifyContent: "left",
        textAlign: "left",
        padding: 6
    },
    writeComment: {
        textAlign: "left",
        display: 'flex',
        cursor: "pointer"
    },
    commentContainer: {
        maxHeight: 0,
        overflow: "hidden", 
        transition: "max-height 1s ease-out",
        transitionDelay: "0s"
    },
    commentContainerOpened: {
        maxHeight: 200,
        overflow: "hidden", 
        transition: "max-height 1s ease-in"
    },
    textArea: {
        height: "80%",
        resize: "none",
        paddingBottom: 5,
        width: "99%"
    }
})

const RadioButtonQuestion = ({ number, question, alternatives, arrows, comment }) => {
    const classes = useStyles();
    const [commentValue, setCommentValue] = useState("");
    let greenArrow;
    let redArrow;
    
    if(arrows){
        greenArrow = <img src="https://i.postimg.cc/fRXGwyGy/greenarrow.png" height="20px" className={classes.greenArrow}/>;
        redArrow = <img src="https://i.postimg.cc/d319xZ91/redarrow.png" height="20px" className={classes.redArrow}/>;
    }

    return(
        <div className={classes.container} id={number}>
            <div className={classes.question}>{number}: {question}</div>      
            <div className={ arrows ? classes.radioButtonContainer : classes.radioNoArrow}>
            {redArrow}
            {alternatives.map((value) => {
                return (
                    <RadioButton alternative={value} number={number}/>
                )
            })}
            {greenArrow}
            <div className={classes.vetEj}><input type="radio" name={number}/>
                <p className={classes.vetEjText}>Vet ej/ej aktuell/vill ej svara </p></div>
            </div>
            {comment ? <Comment value={commentValue} setValue={setCommentValue}/> : null}
        </div>
    );
}
export default RadioButtonQuestion;
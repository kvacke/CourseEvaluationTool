import React, { useState } from 'react';
import {createUseStyles} from 'react-jss';
import Comment from './Comment';

const useStyles = createUseStyles({
    checkBoxDiv: {
        display: "flex",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 6,
        height: 21,
        alignItems: "center"
    },
    checkBox: {
        color: "#333333",
        width: 16,
        height: 16,
    },
    checkBoxContainer: {
        marginBottom: -10,
        marginLeft: 1
    },
    container: {
        border: "1px solid lightgray",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginBottom: "15px",
        fontSize: "15px",
        fontFamily: "Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif",
        width: "99%",
        margin: 6,
    },
    label:{
        paddingLeft: 3,
    },
    question:{
        display: "flex",
        backgroundColor: "#e1e8f2",
        justifyContent: "left",
        padding: 6,
        textAlign: "left"
    }
})

const MultipleChoiceQuestion = ({ number, question, words, comment }) => {
    const classes = useStyles();
    const [commentValue, setCommentValue] = useState("");
    return (
        <div className={classes.container}>
            <div className={classes.question}>{number}: {question}</div>
            <div className={classes.checkBoxContainer}>
            {
            words.map((value) => {
                return (
                <div className={classes.checkBoxDiv}>
                    <input type="checkbox" className={classes.checkBox} /> <p className={classes.label}> {value}</p>
                </div>
                )
            })}
            </div>
            {comment ? <Comment value={commentValue} setValue={setCommentValue}/> : null}
        </div>
    );
}

export default MultipleChoiceQuestion;
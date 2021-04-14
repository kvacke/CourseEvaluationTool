import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
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
    textArea:{
        margin: "7px 0px 7px 7px",
        fontSize: 14,
        fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
        resize: "none",
        marginRight: 7
    },
    question:{
        display: "flex",
        backgroundColor: "#e1e8f2",
        justifyContent: "left",
        padding: 6
    }
})

const TextAreaQuestion = ({ number, question }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.question}>{number}: {question}</div>
            <textarea type="textarea" className={classes.textArea} rows="4"/>
        </div>
    );
}

export default TextAreaQuestion;
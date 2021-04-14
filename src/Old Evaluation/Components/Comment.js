import React, { useState } from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    writeComment: {
        textAlign: "left",
        display: 'flex',
        cursor: "pointer",
        marginLeft: 7,
        marginBottom: 10,
        marginTop: 15
    },
    commentContainer: {
        maxHeight: 0,
        overflow: "hidden", 
        transition: "max-height 1s ease-out",
        transitionDelay: "0s",
    },
    commentContainerOpened: {
        maxHeight: 200,
        overflow: "hidden", 
        transition: "max-height 0.5s ease-in",
    },
    textArea: {
        height: "80%",
        resize: "none",
        marginBottom: 15,
        width: "96%",
        marginLeft: 9,
        fontSize: 14,
        fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
    }
})

const Comment = ( {value, setValue} ) => {
    const classes = useStyles();
    const [text, setText] = useState(value);
    const [showComment, setShowComment] = useState(false);

    const handleTextChange = (event) => {
        setText(event.target.value);
        setValue(event.target.value);
    }

    return (
        <div>
            <div className={classes.writeComment} onClick={() => setShowComment(!showComment)}>
                <img src={"https://i.postimg.cc/YSBmKf9y/comment-image.png"} height={19} width={19}/>Skriv en kommentar
            </div>
            <div className={showComment ? classes.commentContainerOpened : classes.commentContainer}>
                <textarea className={classes.textArea} value={text} onChange={handleTextChange}/>
            </div>
        </div>
    );
}

export default Comment;
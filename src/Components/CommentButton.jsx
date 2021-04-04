import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    commentButton:{
        alignSelf:'flex-start',
    }
})

const CommentButton = () => {

    const classes = useStyles();

    return(
        <span className={classes.commentButton}>
            <button className={classes.button}>+ Kommentar</button>
        </span>
    )
}

export default CommentButton
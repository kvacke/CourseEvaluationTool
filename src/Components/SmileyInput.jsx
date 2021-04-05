import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    smileyInput : {

    }
})


const SmileyInput = () => {

    const classes = useStyles();
    return(
        <div className={classes.smileyInput}>
            :( :| :)
        </div>
    )
}

export default SmileyInput;
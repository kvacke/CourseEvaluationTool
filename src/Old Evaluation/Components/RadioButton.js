import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    container: {
        marginLeft: 30,
        width: 80,
        marginRight: -20
    }, 
    alternative: {
        marginTop: 4,
        maxWidth: 80,
    },
    radio: {
        marginTop: 15,
    }
})

const RadioButton = ({ alternative, number }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <input type="radio" className={classes.radio} name={number} />
            <p className={classes.alternative}>{alternative}</p>
        </div>
    );
}

export default RadioButton;
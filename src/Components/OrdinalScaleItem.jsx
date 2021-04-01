import React from 'react'
import {createUseStyles} from 'react-jss'
import { makeStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = createUseStyles({
    prompt:{
        fontSize:'26px',
        marginBottom:'30px',
    },
    item:{
        marginTop:'50px',
    }
})

const muiStyles = makeStyles({
    root:{
        width: "120px",
        alignItems:'center',


    }
    
  });



const OrdinalScaleItem = ({selectionHandler, prompt, radioButtonData }) => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const muiClasses = muiStyles();
    const handleChange = (event) => {
        console.log(event.target.value)
        setValue(event.target.value);

      };

    

    return(
        <div className={classes.item}>
            <div className={classes.prompt}>{prompt}</div>
            <FormControl component="fieldset">
            <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                {
                    radioButtonData.map((string,index) => {
                        console.log("skiten körs")
                        return( <FormControlLabel disableRipple className={muiClasses.root} labelPlacement="top" value={index.toString()} control={<Radio />} label={string} /> )
                    })
                }

              

            </RadioGroup>
            </FormControl>
        </div>
    )
}

export default OrdinalScaleItem;
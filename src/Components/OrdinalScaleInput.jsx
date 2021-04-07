import React from 'react'
import {createUseStyles} from 'react-jss'
import { makeStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {withStyles} from '@material-ui/core/styles';


const CustomRadio = withStyles({
    root: {
        color: 'black',
        '&$checked': {
            color: 'rgb(4, 84, 164)',
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);



const useStyles = createUseStyles({

})

const muiStyles = makeStyles({
    root:{
        width: "110px",


    }
    
  });



const OrdinalScaleInput = ({selectionHandler, radioButtonData, isDisabled }) => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const muiClasses = muiStyles();
    const handleChange = (event) => {
        console.log(event.target.value)
        setValue(event.target.value);

      };

    

    return(
        <div className={classes.item}>
            <FormControl component="fieldset">
            <RadioGroup row aria-label="gender" name="gender1" value={isDisabled ? null :value} onChange={handleChange}>
                {
                    radioButtonData.map((string,index) => {
                        return( <FormControlLabel disabled = {isDisabled} className={muiClasses.root} labelPlacement="top" value={index.toString()} control={<CustomRadio/>} label={string} /> )
                    })
                }

            </RadioGroup>
            </FormControl>
        </div>
    )
}

export default OrdinalScaleInput;
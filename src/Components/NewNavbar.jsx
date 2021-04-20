import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Badge } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const StyledTabs = withStyles({
  root:{
  },
  flexContainer:{
    justifyContent:'center',
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: 'rgb(4, 84, 164)',
    },
  },
})((props) => <Tabs {...props} centered={true} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#black',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const SendTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: 'rgb(4, 84, 164)',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  padding: {
  },
  demo2: {
    backgroundColor: '#FFFFFF',
    width:'800px',
    margin:'0 auto',
    marginTop:'20px',
    marginBottom:'50px',
  },
}));

export default function NewNavbar({clickHandler,index, formData}) {
  const classes = useStyles();
//   const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    clickHandler(newValue)
  };

  function isStepComplete(step) {
    if(step === 4) return;
    var isComplete = true;
    formData[step].forEach(item =>
      {
        if(!item.disabled)
        {
          if(item.value === undefined || item.value === "")
          {
            isComplete=false;
          }
          else if(Array.isArray(item.value))
          {
            if(item.value.every(w => w.selected === false))
            {
                isComplete = false;
            }
          }
        }

      })
     
    return isComplete;

  }

  const getTextWithCheck = (text) => {
    return <><span>{text} <FontAwesomeIcon icon={faCheck}/></span></>
  }

  return (
      <div className={classes.demo2}>
        <StyledTabs value={index} onChange={handleChange}>
          
          <StyledTab label={isStepComplete(0) ? getTextWithCheck("Kursen i stort") : 'Kursen i stort'}/>
          <StyledTab label={isStepComplete(1) ? getTextWithCheck("Förutsättningar") : 'Förutsättningar'} />
          <StyledTab label={isStepComplete(2) ? getTextWithCheck("Under kursen") : 'Under kursen'} />
          <StyledTab label={isStepComplete(3) ? getTextWithCheck("Resultat") : 'Resultat'} />
          <SendTab label="Skicka in" />
        </StyledTabs>
      </div>
  );
}

import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


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

export default function NewNavbar({clickHandler,index}) {
  const classes = useStyles();
//   const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    clickHandler(newValue)
  };

  return (
      <div className={classes.demo2}>
        <StyledTabs value={index} onChange={handleChange}>
          <StyledTab label="Kursen i stort" />
          <StyledTab label="Förutsättningar" />
          <StyledTab label="Under kursen" />
          <StyledTab label="Resultat" />
          <SendTab label="Skicka in" />
        </StyledTabs>
      </div>
  );
}

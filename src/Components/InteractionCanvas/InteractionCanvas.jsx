import React, {useEffect} from 'react'
import {createUseStyles} from 'react-jss'
import Dot from './Dot'
import Paper from '@material-ui/core/Paper';


const useStyles = createUseStyles({
    interactionCanvas:{
        position:'relative',
        boxSizing:'border-box',
        padding:'5px',
        width:'1000px',
        height: '250px',
        //backgroundColor:'#fbfbfb',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    
})


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



const InteractionCanvas = () => {
    const [dots, setDots] = React.useState([])
    const classes = useStyles();

    const handleClick = () => {
        setDots(dots => [...dots,<Dot />])
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(dots => [...dots,<Dot />]);
        }, randomIntFromInterval(15000,25000));
        return () => clearInterval(interval);
      }, []);

    return(
        <Paper elevation={1}>
        <div className={classes.interactionCanvas}>
            {
                dots.map((item) => {
                    return item
                })
            }
            
        </div>
        </Paper>
    )
    
}

export default InteractionCanvas;
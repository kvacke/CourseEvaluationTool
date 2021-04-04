import {createUseStyles} from 'react-jss';
import Draggable from 'react-draggable'; // The default

const useStyles = createUseStyles({
    '@keyframes plopIn': {
        from: {width: '0px', height:'0px'},
        to: {width: '20px', height:'20px'}
      },
    dot:{
        position:'absolute',
        left: props => props.left,
        top: props => props.top,
        width:'20px',
        height:'20px',
        //background:'radial-gradient(circle at 33% 33%, rgba(125,209,238,1) 0%, rgba(45,171,253,1) 95%)',
        backgroundColor:'rgba(125,209,238,1)',
        borderRadius:'50%',
        cursor:'grab',
        '&:active':{
            cursor: 'grabbing',

        },
        animation: '$plopIn 0.3s ease-in'
    }
})

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

const Dot = () => {

    const classes = useStyles({left : randomIntFromInterval(10,990).toString()+'px', top: randomIntFromInterval(10,230).toString()+'px'});

    return(
        <Draggable bounds="parent">
            <div className={classes.dot}>
            </div>
        </Draggable>
    )
}

export default Dot;
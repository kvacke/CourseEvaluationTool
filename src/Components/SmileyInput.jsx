import { faFrown, faLaughBeam, faMeh, faSadCry, faSmile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    smileyInput : {
        display:'flex',
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
    },
    smileyContainer:{
        //border:'1px dashed lightgrey',
        width:'15%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    smileyButton: {
        height:'100%',
        fontSize:'45px',
        backgroundColor:'transparent',
        border:'none',
        outline:'none',
        transition: '0.2s ease-out',
        
        '&:hover':{
            color: props => props ? props.color : 'black',
            cursor:'pointer'
        }
    }


})


/*
Object { prefix: "far", iconName: "frown", icon: (5) […] }
SmileyInput.jsx:41
Object { prefix: "far", iconName: "meh", icon: (5) […] }
SmileyInput.jsx:41
Object { prefix: "far", iconName: "smile", icon: (5) […] }
SmileyInput.jsx:41
Object { prefix: "far", iconName: "laugh-beam", icon: (5) […] }


*/


const Smiley = ({icon, selected}) => {
    const [iconColor, setIconColor] = React.useState("black")

    const classes = useStyles({color: iconColor});

    React.useEffect(() => {
        setIconColor("black")
    },[icon]);

    const getIconColor = (icon) =>
    {
        switch(icon.iconName)
        {
            case "frown":
                return '#FF4136 '
            case "meh":
                return '#FFDC00'
            case "smile":
                return '#3D9970'
            case "laugh-beam":
                return "#2ECC40"
            default:
                return "black"

        }
    }


    return(
        <div className={classes.smileyContainer}>
            <button className={classes.smileyButton}>
                <FontAwesomeIcon icon={icon} />
            </button>
            
        </div>
    )
}


const SmileyInput = () => {
    
    const classes = useStyles();


    return(
        <div className={classes.smileyInput}>
            <Smiley icon={faFrown}/>
            <Smiley icon={faMeh}/>
            <Smiley icon={faSmile}/>
            <Smiley icon={faLaughBeam}/>
        </div>
    )
}

export default SmileyInput;
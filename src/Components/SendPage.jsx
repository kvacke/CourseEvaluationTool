import React from 'react';
import {createUseStyles} from 'react-jss';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


const useStyles = createUseStyles({
    sendPage:{
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
    },
    question:{
        fontSize: '28px',
        fontWeight: 300,
        marginBottom:'20px',
    },
    statusIndicator:{
        display:'flex',
        flexDirection: 'column',
        marginTop:30,
        marginBottom:40,
        alignItems:'center',
        minHeight:100,
    },
    statusTitle:{
        boxSizing:'border-box',
        borderRadius:'10px',
        fontSize:'20px',
        color:'white',
        fontWeight: 500,
        color: props => props ? '#469c71' : '#ff9933'

    },
    description:{
        textAlign:'left',
        
    },
    remaining:{
        marginTop:10,
        
    }
})



const StatusIndicator = ({done, remaining}) =>{
    const classes = useStyles(done);
    console.log(remaining)
    return (
        <div className={classes.statusIndicator}>
            <div className={classes.statusTitle}>
                <FontAwesomeIcon icon={done ? faCheck : faExclamationTriangle}/>{done ? ' Alla frågor är besvarade' : ' Svar saknas:'}
            </div>
            <div className={classes.remaining}>
                <table>
                    <tbody>
                    {!done && remaining.map((item,index)=>{
                    return <tr key={index}><td>{item.category}: </td><td>{item.count}</td></tr>
                })}
                    </tbody>
                </table>

                
            </div>
        </div>
    )
}

const SendPage = ({answers}) => {
    const [done, setDone] = React.useState(false)
    const [remaining, setRemaining] = React.useState([{category:'Kursen i stort', count: 2},{category:'Under kursen', count: 1}])
    const classes = useStyles()


    const handleClick = () =>
    {
        setDone(!done)
    }

    return(
        <div className={classes.sendPage}>
            <div className={classes.question}>
                Redo att skicka in?
            </div>
            <div className={classes.description}>
                När du skickat in formuläret tas du till resultatvyn där du kan se de andra kursdeltagarnas svar.<br/>
                Tänk på att du inte kommer att kunna göra ändringar i din kursvärdering efter att du skickat in.
            </div>
            <StatusIndicator remaining={remaining} done={done}/>
            <Button onClick={handleClick} variant="contained" color="default">{done ? 'Skicka in och se resultat' : 'Avstå resten och skicka in'}</Button>
            
        </div>
    )
}

export default SendPage;
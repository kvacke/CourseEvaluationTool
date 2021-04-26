import React from 'react'
import {createUseStyles} from 'react-jss'
import OrdinalStatItem from './OrdinalStatItem';
import WordStatItem from './WordStatItem';
import TextStatItem from './TextStatItem'

const useStyles = createUseStyles({
    genericStatItem:{
        width: '800px',
        margin:'0 auto',
        //border:'1px dashed lightcoral',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        position:'relative',
        boxSizing:'border-box',
        padding: 30,
        backgroundColor:props => props ? 'white' : 'white'
    },
    title:{
        fontSize:'20px',
        textAlign:'left',
        fontFamily:'Roboto',
        width: '80%',
        fontWeight:500,
    }
})



const GenericStatItem = ({ count, title, type, id, options, value}) => 
{
    
    const classes = useStyles(count%2===0);

    const getItem = (itemType) =>
    {
        
        switch(itemType){
            case "ordinalScaleInput":
                return <OrdinalStatItem options={options} count={count} value={value}/>
            case "words":
                return <WordStatItem />
            case "textAnswer":
                return <TextStatItem title={title}/>
            default:
                return <></>
        }
    }

    return(
        <div className={classes.genericStatItem}>
            <div className={classes.title}>{title}</div>
            {getItem(type)}
        </div>
    )
}

export default GenericStatItem;
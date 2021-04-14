import React from 'react'
import {createUseStyles} from 'react-jss'
import GenericStatItem from './GenericStatItem'


const useStyles = createUseStyles({
    statsView:{


    },
    title:{
        fontSize:28,
        marginTop:40,
        marginBottom:10,
        fontWeight:300,
    },
    subTitle:{
        marginBottom:20,
        width:600,
        margin:'0 auto'
    }
})



const StatsView = ({formData}) => {
    const classes = useStyles();
    var count = 0;

    return(
        <div className={classes.statsView}>
            <div className={classes.title}>Tack!</div>
            <div className={classes.subTitle}>
                Här uppdateras kontinuerligt svaren från den här kursens pågående kursvärdering.<br/>
                I varje diagram nedan kan du se hur kursens deltagare har svarat hittills.
                Kom gärna tillbaka när kursvärderingen är avslutad för att se det slutgiltiga resultatet.
                </div>
                {formData[0].map((item)=>{
                    count++;
                    
                    return  <GenericStatItem count={count} title={item.title} key={item.id} id={item.id} value={item.value} type={item.inputType} options={item.options}/>
                })}
                {formData[1].map((item)=>{
                    count++;
                    
                        return <GenericStatItem count={count} title={item.title} key={item.id} id={item.id} value={item.value} type={item.inputType} options={item.options}/>
                    })}
                {formData[2].map((item)=>{
                    count++;
                        return <GenericStatItem count={count} title={item.title} key={item.id} id={item.id} value={item.value} type={item.inputType} options={item.options}/>
                    })}
                {formData[3].map((item)=>{
                    count++
                        return <GenericStatItem count={count} title={item.title} key={item.id} id={item.id} value={item.value} type={item.inputType} options={item.options}/>
                    })}
        </div>
    )
}

export default StatsView;
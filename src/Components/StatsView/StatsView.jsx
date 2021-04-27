import React from 'react'
import {createUseStyles} from 'react-jss'
import GenericStatItem from './GenericStatItem'
import ThankYou from './ThankYou'

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
        marginTop:20,

        marginBottom:20,
        width:600,
        margin:'0 auto'
    },
    bottomInfo:{
        marginTop:50,
        width:600,
        margin:'0 auto',
        fontStyle:'italic',
        textAlign:'left'

    }
})



const StatsView = ({formData}) => {
    const classes = useStyles();
    var count = 0;

    return(
        <div className={classes.statsView}>
                <ThankYou/>
                <div className={classes.subTitle}>
                Här uppdateras kontinuerligt svaren från den här kursens pågående kursvärdering.<br/>
                I varje diagram nedan kan du se hur kursens deltagare har svarat hittills och med dina svar markerat i en mörkare färg.
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
            <div className={classes.bottomInfo}>
                
                Du har nu kommit till slutet av testmiljön. När alla uppgifter är slutförda och du känner dig färdig med att utforska sidan kan du återgå till instruktionerna.
                </div>
        </div>
    )
}

export default StatsView;
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

                <div className={classes.title}>
                    Resultat
                </div>

                <div className={classes.subTitle}>
                Här uppdateras kontinuerligt svaren från den här kursens pågående kursvärdering.<br/>
                I varje diagram nedan kan du se hur kursens deltagare har svarat hittills och med dina svar markerade i blå färg.
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
                
                Du har nu kommit till slutet av testmiljön. När du känner dig färdig med att se resultaten
                ber vi dig utvärdera detta verktyg med enkäten "AttrakDiff" genom att  <a href="https://esurvey.uid.com/survey/#5a3ad5a4-4760-4796-91b5-4231a60bbbaf">klicka här.</a>
                <br/> (Byt från tyska till engelska uppe i högra hörnet när du klickat på länken!)
                </div>
        </div>
    )
}

export default StatsView;

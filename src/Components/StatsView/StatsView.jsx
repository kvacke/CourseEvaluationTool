import React from 'react'
import {createUseStyles} from 'react-jss'
import GenericStatItem from './GenericStatItem'


const useStyles = createUseStyles({
    statsView:{


    },
    title:{
        fontSize:28,
        marginTop:40,
        marginBottom:40,
        fontWeight:300,
    }
})



const StatsView = ({formData}) => {
    const classes = useStyles();
    var count = 0;

    return(
        <div className={classes.statsView}>
            <div className={classes.title}>Resultat</div>
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
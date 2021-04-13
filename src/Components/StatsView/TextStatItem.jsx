import React from 'react'
import {createUseStyles} from 'react-jss'
import {Paper} from '@material-ui/core'


const useStyles = createUseStyles({
    textStatItem:{
        display:'flex',
        flexDirection:'column',
        alignSelf:'left',
        marginTop:20,
        
    },
    textCard:{
        width: 500,
        fontStyle: 'italic',
        textAlign:'left',
        marginBottom:20,
    },

})

const data2= [
    "'Bra upplägg, fullt upp men det fanns tid för allt som behövdes göras. Interaktiva föreläsningar var jättebra. Skönt med förinspelade föreläsningar så man kunde planera sin egen tid.'"
    , "'Mycket fritt arbete. Får själv ta tag i och lösa problem. Man får luta sig mot det som vi lärt oss tidigare under programmet'",
    "'Jag tycker att det har varit bra lärare, som har gjort bra övningsuppgifter och laborationer på en lagom nivå. Kul och lärorik kurs :) Bland de bättre kurser jag har läst om jag ska vara ärlig :)'"
]

const data = [
    "'Det är alltid (för mig åtminstone) en nackdel att ha undervisande lärare på annan ort. Detta gör det svårt att få den hjälp som vissa kan behöva.'",
    "'En sak som skulle förbättrat min inlärning är om kursens upplägg i högre grad uppmuntrade till verbaliserande av det inlärda, främst muntligen. Men jag anser att det i hög grad är upp till mig själv att ordna detta även om kursupplägget kunde varit mer gynnsamt.'",
]

const TextCard = ({text}) =>
{
    const classes = useStyles()
    return(
        <div className={classes.textCard}>
            {text}
        </div>
    )
}

const getTextCards = (_title) =>{
    var arr = []
    if(_title=== "Det här kan förbättras med kursen:")
    {
        {data.forEach(item => {
            arr.push(<TextCard text={item}/>)
        })}
    }
    else{
        {data2.forEach(item => {
            arr.push(<TextCard text={item}/>)
        })}
    }
    return arr;
}



const TextStatItem = ({title}) =>{
    const classes = useStyles()

    return(
        <div className={classes.textStatItem}>
            {getTextCards(title)}
        </div>
    )
}

export default TextStatItem;
import React from 'react'
import EvaluationPage from './EvaluationPage'
import {createUseStyles} from 'react-jss'
import GenericInput from './GenericInput'

const useStyles = createUseStyles({
    pageList : {
        display:'flex',
        flexDirection:'column',
        alignItems:'center'

    }
})


const PageList = () => {

    const classes = useStyles();

    const radioButtonData = 
    [
        [
            "Instämmer inte alls",
            "Instämmer i låg grad",
            "Instämmer i viss grad",
            "Instämmer i hög grad",
            "Instämmer helt"
        ],
        [
            "Alldeles för låg",
            "För låg",
            "Lagom",
            "För hög",
            "Alldeles för hög"
        ]
    ]

    return(
        <div className={classes.pageList}>
            <EvaluationPage title={"Kursen i stort"}>
                <GenericInput itemTitle="Det har funnits en tydlig koppling mellan kursens mål och undervisningen" inputType="ordinalMultiLabel" options={radioButtonData[0]}/>
                <GenericInput itemTitle="Examinationen/-erna krävde att man verkligen hade förstått kursinnehållet" inputType="ordinalMultiLabel" options={radioButtonData[0]}/>
                <GenericInput itemTitle="Jag tyckeratt kraven vid examinationen/-erna har varit" inputType="ordinalMultiLabel" options={radioButtonData[1]}/>

            </EvaluationPage>
            <EvaluationPage title={"Under kursen"}>
                <GenericInput itemTitle="Det har funnits en tydlig koppling mellan kursens mål och undervisningen" inputType="ordinalMultiLabel" options={radioButtonData[0]}/>
                <GenericInput itemTitle="Examinationen/-erna krävde att man verkligen hade förstått kursinnehållet" inputType="ordinalMultiLabel" options={radioButtonData[0]}/>
                <GenericInput itemTitle="Jag tyckeratt kraven vid examinationen/-erna har varit" inputType="ordinalMultiLabel" options={radioButtonData[1]}/>

            </EvaluationPage>
        </div>

    )
}

export default PageList
import React from 'react'
import {createUseStyles} from 'react-jss'
import EvaluationPage from './EvaluationPage'
import Navbar from './Navbar'
import Carousel from '@brainhubeu/react-carousel';
import GenericInput from './GenericInput'



import '@brainhubeu/react-carousel/lib/style.css';

const useStyles = createUseStyles({
    pageCarousel : {
        display: 'flex',
        flexDirection : 'row'
    }
})

const PageCarousel = () => {
    const [index, setIndex] = React.useState(0);
    const classes = useStyles();

    const onChange = value => setIndex(value);
    const radioButtonData = [
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
        ],
        [
            "Hej","","","","Då"
        ]
    ]

    const wordList = [
        'stimulerande',
        'problemlösning',
        'analyserande',
        'ämnesfördjupning',
        'intellektuellt utmanande',
        'tråkig',
        'effektiv',
        'onödig',
        'aha-upplevelse',
        'utantill-kunskap',
        'engagerande',
        'för svår',
        'för lätt',
        'intressant',
        'spretig',
        'tung',
        'praktisk tillämpning',
        'ineffektiv',
        'nyttig'
    ]

    //Löser att första elementet i karusellen aldrig fick en transitionstyle
    let x = document.querySelectorAll('.BrainhubCarousel__track ')
    for (let i = 0; i < x.length; i++) {
      x[i].style.transition = '0.3s'
    }


    return(
        <div>
            <Navbar clickHandler={setIndex}/>

            <Carousel
            value={index ? index : 0}
            onChange={onChange}
            draggable = {false}
            >
            <EvaluationPage title={"Kursen i stort"}>
                <GenericInput itemTitle="Sammanfatta ditt huvudintryck av kursen genom att markera de ord som bäst beskriver kursen för dig!" inputType="words" options={wordList}/>
                <GenericInput itemTitle="Examinationen/-erna krävde att man verkligen hade förstått kursinnehållet" inputType="ordinalMultiLabel" options={radioButtonData[0]}/>
                <GenericInput itemTitle="Det här saknades:" inputType="textAnswer"/>
                <GenericInput itemTitle="Det här kan förbättras:" inputType="textAnswer"/>

            </EvaluationPage>
            <EvaluationPage title={"Förutsättningar"}>
                <GenericInput itemTitle="Det har funnits en tydlig koppling mellan kursens mål och undervisningen" inputType="ordinalMultiLabel" options={radioButtonData[0]}/>
                <GenericInput itemTitle="Examinationen/-erna krävde att man verkligen hade förstått kursinnehållet" inputType="ordinalMultiLabel" options={radioButtonData[0]}/>
                <GenericInput itemTitle="Jag tycker att kraven vid examinationen/-erna har varit" inputType="ordinalMultiLabel" options={radioButtonData[1]}/>
            </EvaluationPage>
            <EvaluationPage title={"Under kursen"}>
                <GenericInput itemTitle="Det har funnits en tydlig koppling mellan kursens mål och undervisningen" inputType="ordinalMultiLabel" options={radioButtonData[0]}/>
                <GenericInput itemTitle="Examinationen/-erna krävde att man verkligen hade förstått kursinnehållet" inputType="ordinalMultiLabel" options={radioButtonData[0]}/>
                <GenericInput itemTitle="Jag tycker att kraven vid examinationen/-erna har varit" inputType="ordinalMultiLabel" options={radioButtonData[1]}/>
            </EvaluationPage>
            <EvaluationPage title={"Resultat"}>
                <GenericInput itemTitle="Det har funnits en tydlig koppling mellan kursens mål och undervisningen" inputType="ordinalMultiLabel" options={radioButtonData[0]}/>
                <GenericInput itemTitle="Examinationen/-erna krävde att man verkligen hade förstått kursinnehållet" inputType="ordinalMultiLabel" options={radioButtonData[0]}/>
                <GenericInput itemTitle="Jag tycker att kraven vid examinationen/-erna har varit" inputType="ordinalMultiLabel" options={radioButtonData[1]}/>
            </EvaluationPage>
            </Carousel>
               
        </div>
    )
}

export default PageCarousel;
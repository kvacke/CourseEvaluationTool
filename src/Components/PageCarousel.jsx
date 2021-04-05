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
        ]
    ]
    return(
        <div>
            <Navbar clickHandler={setIndex}/>

            <Carousel
            value={index}
            onChange={onChange}
            >
            <EvaluationPage title={"Kursen i stort"}>
                <GenericInput itemTitle="Så här känner jag om kursen:" inputType="smiley"/>
                <GenericInput itemTitle="Examinationen/-erna krävde att man verkligen hade förstått kursinnehållet." inputType="ordinalMultiLabel" options={radioButtonData[0]}/>
                <GenericInput itemTitle="Jag tycker att kraven vid examinationen/-erna har varit..." inputType="ordinalMultiLabel" options={radioButtonData[1]}/>
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
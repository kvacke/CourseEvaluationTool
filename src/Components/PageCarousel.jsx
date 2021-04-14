import React from 'react'
import {createUseStyles} from 'react-jss'
import EvaluationPage from './EvaluationPage'
import NewNavbar from './NewNavbar'
import Carousel from '@brainhubeu/react-carousel'
import GenericInput from './Inputs/GenericInput'
import Button from '@material-ui/core/Button';
import SendPage from './SendPage'



import '@brainhubeu/react-carousel/lib/style.css';
 
const useStyles = createUseStyles({
    pageCarousel : {
        display: 'flex',
        flexDirection : 'row'
    },
    bottomButton :{
        backgroundColor:'white',
        outline:'none',
        border:'1px solid black',
        width:'100px',
        height:'40px'
    },
    text:{
        color:'green',
        textTransform:'none'
    },
})

const PageCarousel = ({formData}) => {
    const [index, setIndex] = React.useState(0);
    const classes = useStyles();

    const onChange = value => setIndex(value);
    
    //Löser att första elementet i karusellen aldrig fick en transitionstyle
    let x = document.querySelectorAll('.BrainhubCarousel__track ')
    for (let i = 0; i < x.length; i++) {
      x[i].style.transition = '0.3s'
    }

    const handleClick = (isNext) => 
    {
        if(isNext && index <4)
        {
            setIndex(index+1)
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
        }
        else if(!isNext && index > 0)
        {
            setIndex(index-1)
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
        }
    }



    return(
        <div>
            <NewNavbar index={index} clickHandler={setIndex}/>

            <Carousel
            value={index ? index : 0}
            onChange={onChange}
            draggable = {false}
            >
            <EvaluationPage title={"Kursen i stort"}>
            {formData[0].map((item) =>{
                return <GenericInput id = {item.id} key={item.id} stateValue={item.value} stateDisabled={item.disabled} itemTitle={item.title} inputType={item.inputType} options={item.options}/>

            })}
            </EvaluationPage>

            <EvaluationPage title={"Förutsättningar"}>
            {formData[1].map((item) =>{
                    return <GenericInput id={item.id} key={item.id} stateValue={item.value} stateDisabled={item.disabled} value={item.value} itemTitle={item.title} inputType={item.inputType} options={item.options}/>

                })}
            </EvaluationPage>
            <EvaluationPage title={"Under kursen"}>
            {formData[2].map((item) =>{
                    return <GenericInput id={item.id} key={item.id} stateValue={item.value} stateDisabled={item.disabled} value={item.value} itemTitle={item.title} inputType={item.inputType} options={item.options}/>

                })}
            </EvaluationPage>
            <EvaluationPage title={"Resultat"}>
            {formData[3].map((item) =>{
                    return <GenericInput id = {item.id} key={item.id} stateValue={item.value} stateDisabled={item.disabled} value={item.value} itemTitle={item.title} inputType={item.inputType} options={item.options}/>

                })}
            </EvaluationPage>
            <SendPage formData={formData}/>
            </Carousel>
            <Button disableRipple onClick={()=> handleClick(false)} disabled={index<1} className={classes.text}>Föregående</Button>
            <Button disableRipple onClick={()=> handleClick(true)} disabled={index>3} className={classes.text}>Nästa</Button>
        </div>
    )
}

export default PageCarousel;
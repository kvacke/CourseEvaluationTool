import React from 'react'
import {createUseStyles} from 'react-jss'
import PageCarousel from './PageCarousel'
import PageList from './PageList'
import Scene from './InteractionMatter/Scene'
import {generateClassData} from './InteractionMatter/ClassData'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { withStyles} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core'
import initialFormData from '../initialFormData'
import Context from '../Context'
import StatsView from './StatsView/StatsView'
import './fades.css';
//Sparar denna snippet för info-tooltippet
//<div style={{display:'inline-block',backgroundColor:'lightgrey',position:'relative',top:'4px', height:'16px', width:'16px', borderRadius:'50%'}}>{'  '}</div>{' = Dina insamlade högskolepoäng'}

const  getRandomInt = (min, max) => {
    return Math.random() * (max - min) + min;
}

const useStyles = createUseStyles({
    evaluationForm : {
        margin:'auto',
        width: '1000px',
        boxSizing:'border-box',
        marginTop: '30px',
        marginBottom:'80px',
        },
    courseTitle:{
        display:'none',
        fontSize:'35px',
        margin:'30px'
        },
    infoButton:{
        position:'absolute'
    },
    root:{
        width:'800px',
        margin:'0 auto',
        cursor:'grab',
        "&:active":
        {
            cursor:'grabbing'
        }
    },
    toggler:{
        position:'absolute',
        top: 0,
    },

    resultsView:{
        display:'none'
    }
    
})

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 280,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

const EvaluationForm = ({useCarousel}) => {
    const classData = generateClassData(getRandomInt(1,4),getRandomInt(5,10),getRandomInt(1,2),getRandomInt(0,1),)
    const [formData, setFormData] = React.useState(initialFormData)
    const [formViewClasses, setFormViewClasses] = React.useState(["formView"])
    const [resultsViewClasses, setResultsViewClasses] = React.useState(["resultsView","hide"])
    const [formView, toggleFormView] = React.useState(true)



    const classes = useStyles();

    const setValueById = (id,value) =>
    {   
        const arr = formData;
        arr.forEach((page) =>{
            page.forEach((item) => {
                if(item.id === id)
                {
                    item.value = value;
                }
            })
        })
        setFormData([...arr]);
    }

    const setDisabledStatusById = (id, newDisabledStatus) =>
    {
        const arr = formData;
        arr.forEach((page) =>{
            page.forEach((item) => {
                if(item.id === id)
                {
                    item.disabled = newDisabledStatus;
                }
            })
        })
        setFormData([...arr]);
        console.log(formData);
    }

    const handleViewToggle = () =>
    {
        // setFormViewClasses([...formViewClasses, "fadeOut"])
        // setTimeout(() => {
        //     setFormViewClasses([...formViewClasses, "hide"])
        //     setResultsViewClasses(resultsViewClasses.filter(c => c !== "hide"))

        // },1000)

        toggleFormView(!formView)

    }
    

    const contextFunctions = {setValueById, setDisabledStatusById, handleViewToggle}

    return(
        
        <div className={classes.evaluationForm}>

            {/* <button onClick={handleViewToggle} className={classes.toggler}>Växla vy</button> */}
            <div style={{position:'relative'}}>


            <HtmlTooltip
            placement="left-start"
            title={<>
                
                    <div>Varje högskolepoäng som du har läst på Uppsala Universitet representeras här av en boll.
                    Bollar i samma färg tillhör en viss kurs som du har läst.<br/><br/>
                    Ju fler kurser du läser desto djupare blir ditt bollhav!</div>  

            </>}>
                <IconButton style={{position:'absolute', top:'0px', right:'100px'}}>
                    <InfoOutlinedIcon/>
                </IconButton>
            </HtmlTooltip>
            <Paper className={classes.root} width={300}>
                <Scene classData={classData} />
            </Paper>

            </div>

           
            {formView && 
            <Context.Provider value = {contextFunctions}>
            <PageCarousel formData={formData}/>
            </Context.Provider>
            }

            {!formView &&
            <StatsView formData = {formData}/>
            }
            

        </div>
        
    )
}

export default EvaluationForm;
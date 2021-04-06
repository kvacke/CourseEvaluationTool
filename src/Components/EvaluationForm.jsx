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


const  getRandomInt = (min, max) => {
    return Math.random() * (max - min) + min;
}

const useStyles = createUseStyles({
    evaluationForm : {
        margin:'auto',
        width: '1000px',
        //border:'1px dashed green',
        boxSizing:'border-box',
        marginTop: '10px',
    },
    courseTitle:{
        fontSize:'35px',
        margin:'30px'
    },
    infoButton:{
        position:'absolute'
    }
})

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

const EvaluationForm = ({useCarousel}) => {
    const classes = useStyles();

    const classData = generateClassData(getRandomInt(1,5),getRandomInt(5,16),getRandomInt(0,2),getRandomInt(0,1),)


    return(
        
        <div className={classes.evaluationForm}>

            <div style={{position:'relative'}}>
            <HtmlTooltip
            placement="left-start"
            title={<>
                <div style={{display:'inline-block',backgroundColor:'lightgrey',position:'relative',top:'4px', height:'16px', width:'16px', borderRadius:'50%'}}>{'  '}</div>{' = Dina insamlade högskolepoäng'}

            </>}>
                <IconButton style={{position:'absolute', top:'0px', right:'100px'}}>
                    <InfoOutlinedIcon/>
                </IconButton>
            </HtmlTooltip>
            <Scene classData={classData} />
            </div>
            <div className={classes.courseTitle}>Informationssystem A: Algoritmer och datastrukturer</div>
            { useCarousel && <PageCarousel/>}
            { !useCarousel && <PageList/>}
        </div>
        
    )
}

export default EvaluationForm;
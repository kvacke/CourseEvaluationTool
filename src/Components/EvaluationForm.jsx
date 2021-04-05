import React from 'react'
import {createUseStyles} from 'react-jss'
import PageCarousel from './PageCarousel'
import Navbar from './Navbar'
import EvaluationPage from './EvaluationPage'
import PageList from './PageList'
import Scene from './InteractionMatter/Scene'
import Paper from '@material-ui/core/Paper';
import {generateClassData} from './InteractionMatter/ClassData'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { withStyles, makeStyles } from '@material-ui/core/styles';


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
    const [index,setIndex] = React.useState(0);
    const classes = useStyles();

    const classData = generateClassData(1,1,3,2)


    return(
        
        <div className={classes.evaluationForm}>

            <div style={{position:'relative'}}>
            <HtmlTooltip
            placement="right-start"
            title={<>
                <div style={{display:'inline-block',backgroundColor:'lightgrey', height:'16px', width:'16px', borderRadius:'50%'}}>{'  '}</div>{' = Dina insamlade högskolepoäng'}

            </>}>
                <IconButton style={{position:'absolute', bottom:'0px', right:'100px'}}>
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
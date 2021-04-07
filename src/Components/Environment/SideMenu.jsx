import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    sideMenu:{
        position:'absolute',
        userSelect:'none',
        top:'70px',
        left:'110px',
        fontFamily:'Lato',
        fontSize:'17px',
        textAlign:'left',
        display: props => props ? 'inline-block' : 'none',
        
        
    },
    sideMenuItem:{
        color: props => props ? 'black' : 'rgb(4, 84, 164)',
        fontWeight: props => props ? 'bold' : '400',
        marginTop:'15px',
        cursor:'pointer',
        '&:hover':
        {
            textDecoration:'underline'
        }
    },
    topContainer:{
        position:'absolute',
        left:'110px',
        top:'40px',
        color: 'rgb(4, 84, 164)',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        userSelect:'none'
    },
    code:{
        marginLeft:'20px',
    },
    burger:{
        fontSize:'22px',
        cursor:'pointer'
    },
    courseTitle:
    {
        width:'200px',
        fontSize:'14px',
        marginBottom:'30px',
        color:'#575757'
    }
})

const SideMenuBurger = ({clickHandler}) =>
{
    const classes = useStyles()

    const handleClick=() =>
    {
        clickHandler();
    }

    return(
        <div className={classes.topContainer}>
            <FontAwesomeIcon onClick={handleClick} className={classes.burger} icon={faBars} />
            <div className={classes.code}>2IS012 76013</div>
        </div>
    )
}

const SideMenuItem = ({text, isSelected}) => {
    const classes = useStyles(isSelected);
    return(
        <div className={classes.sideMenuItem}>{text}</div>
    )
}

const SideMenu = () => {

    const [visible,setVisible] = React.useState(false);
    const classes = useStyles(visible);

    const handleClick = () =>
    {
        setVisible(!visible)
    }

    return(
        <div>
            <SideMenuBurger clickHandler={handleClick}/>
            <div className={classes.sideMenu}>
            <div className={classes.courseTitle}>Informationssystem B : Algoritmer och datastrukturer</div>
            <SideMenuItem text="Hem"/>
            <SideMenuItem text="Kursplan"/>
            <SideMenuItem text="Schema"/>
            <SideMenuItem text="Moduler"/>
            <SideMenuItem text="Nyheter"/>
            <SideMenuItem text="Personer"/>
            <SideMenuItem text="Uppgifter"/>
            <SideMenuItem text="Betyg"/>
            <SideMenuItem text="Kursvärdering" isSelected={true}/>
            <SideMenuItem text="Filer"/>
            </div>
        </div>
        

    )
}

export default SideMenu;
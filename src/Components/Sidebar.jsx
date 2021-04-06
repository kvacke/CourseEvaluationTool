import { faCalendarAlt, faCircle, faClock, faQuestionCircle, faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faBook, faDotCircle, faInbox, faTachometerAlt, faTv, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    sidebar:{
        position: 'fixed',
        top:'0px',
        left:'0px',
        minHeight:'100%',
        width:'85px',
        backgroundColor:'#f0f0f0',
        fontFamily:'Lato',
        color:'grey',
        fontSize:'14px',
        userSelect:'none',
        color:'#575757'
    },


    icon:{
        fontSize:'25px'
    },
    sidebarItem:{
        backgroundColor:props => props ? 'white' : 'transparent',
        display:'flex',
        flexDirection:'column',
        height:'65px',
        alignItems:'center',
        justifyContent:'center',
        transition:'0.1s',
        '&:hover':{
            backgroundColor: props => props ? 'white' : 'lightgrey'
        },
        cursor:'pointer'
    },


    logo:{
        fontSize:'27px',
        color:'maroon'
    },
    logoContainer:{
        marginBottom:'15px',
        fontSize:'12px',
        marginTop:'15px',
    }
})


const Logo = () =>
{
    const classes = useStyles();
    return(
        <div className={classes.logoContainer}><FontAwesomeIcon className={classes.logo} icon={faCircle}/><div>Något Universitet</div></div>
    )
}

const SidebarItem = ({icon, title, isSelected}) => {
    const classes = useStyles(isSelected)
    return(
        <div className={classes.sidebarItem}><FontAwesomeIcon className={classes.icon} icon={icon}/><div>{title}</div></div>
    )
}

const Sidebar = () => {
    const classes = useStyles()

    return(
        <div className={classes.sidebar}>
            <Logo/>
            <SidebarItem icon={faUserCircle} title="Konto"/>
            <SidebarItem icon={faTachometerAlt} title="Översikt"/>
            <SidebarItem isSelected={true} icon={faBook} title="Kurser"/>
            <SidebarItem icon={faUserFriends} title="Grupper"/>

            <SidebarItem icon={faCalendarAlt} title="Kalender"/>
            <SidebarItem icon={faInbox} title="Inkorg"/>
            <SidebarItem icon={faClock} title="Historik"/>
            <SidebarItem icon={faTv} title="Studio"/>
            <SidebarItem icon={faQuestionCircle} title="Hjälp"/>

        </div>
    )
}

export default Sidebar;
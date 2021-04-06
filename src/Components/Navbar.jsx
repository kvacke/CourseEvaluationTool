import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({

})

const Navbar = ({clickHandler}) => {

    const classes = useStyles();

    const handleClick = (num) => {
        console.log(num)
        clickHandler(num)
    }

    return(
        <div>
            <button onClick={() =>handleClick(0)}>Kursen i stort</button>
            <button onClick={() =>handleClick(1)}>Förutsättningar</button>
            <button onClick={() =>handleClick(2)}>Under kursen</button>
            <button onClick={() =>handleClick(3)}>Resultat</button>
        </div>
    )
}

export default Navbar;
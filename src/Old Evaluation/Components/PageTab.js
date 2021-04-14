import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    container:{
        display: "flex",
        marginLeft: 1,
        marginTop: 50,
        marginBottom: 40,
        color: "black"
    },
    selected:{
        cursor: "pointer",
        paddingRight: "5px",
        paddingLeft: "5px",
        fontSize: 15
    },
    notSelected:{     
        color: "#265e96",
        textDecoration: "underline",
        cursor: "pointer",
        paddingRight: "5px",
        paddingLeft: "5px",
        fontSize: 15
    }
})

const PageTab = ({ pageNumber, setPageNumber }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <a onClick={() => setPageNumber(0)} className={pageNumber === 0 ? classes.selected : classes.notSelected}>Kursvärdering</a> | 
            <a onClick={() => setPageNumber(1)} className={pageNumber === 1 ? classes.selected : classes.notSelected}>Resultat</a> | 
            <a onClick={() => setPageNumber(2)} className={pageNumber === 2 ? classes.selected : classes.notSelected}>Kursrapport</a>
        </div>
    );
}

export default PageTab;
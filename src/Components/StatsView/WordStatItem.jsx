import React from 'react'
import {createUseStyles} from 'react-jss'
import Chart from "react-apexcharts";


const useStyles = createUseStyles({
    ordinalStatItem:{
      margin:'0 auto'
    }

})

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

const data = [
    4,6,4,6,7,
    1,2,2,5,4,
    3,1,3,8,2,
    1,2,1,1,]

const series = [
  {
    name: "Antal",
    data: data.sort((a, b) => b - a)
  }
]

const WordStatItem = ({options}) =>{

    var letters = '6ABCD';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    const settings = {
        grid:{
          show:false
        },
        plotOptions:{
          bar:{
            horizontal:true,
            dataLabels: {
                position: 'bottom'
              },
          }
        },
        yaxis:{
          
          categories: wordList,
        },
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: wordList,
          
        },
        states:{
          hover:{
            active:{
              type:'none'
            }
          }
        },
        tooltip:{
          enabled:false
        },
        colors:['rgba(166,106,106,0.85)']
      }



    const classes = useStyles()
    return(
        <div  className={classes.ordinalStatItem}>
            <Chart
            options= {settings}
            series = {series}
            type ="bar"
            width ="600"
            height ="500"
            />

        </div>
    )
}

export default WordStatItem;
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

const WordStatItem = ({options,value}) =>{

    var letters = '6ABCD';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }


    const getColors = () => {
      
      var colors = [];
      value.forEach((item) =>
      {
        if(!item.selected)
        {
          colors.push('grey')
        }
        else{
          colors.push('rgb(32, 106, 176)')
        }
      })

      return colors;
    }

    const settings = {
        grid:{
          show:false
        },
        plotOptions:{
          bar:{
            horizontal:true,
            distributed : true,
            dataLabels: {
                position:'bottom',
                
              },
          }
        },
        yaxis:{
          
          categories: wordList,
        },
        legend: {
          show: false,
        },
        states:{
          hover:{
            filter:{
              type:'none',
            }
          },
          active:{
            filter:{
              type:'none',
            }
          },
        },
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          }
        },
        states:{
          hover:{
            filter:{
              type:'darken',
              value:0.5,
            }
          },
          active:{
            filter:{
              type:'darken',
              value:0.2,
            }
          },
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
        colors: getColors()
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
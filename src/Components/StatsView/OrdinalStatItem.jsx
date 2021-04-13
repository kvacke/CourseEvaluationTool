import React from 'react'
import {createUseStyles} from 'react-jss'
import Chart from "react-apexcharts";


const useStyles = createUseStyles({
    ordinalStatItem:{
      margin:'0 auto'
    }

})

const adaptedAgreeOptions = [
  ["Instämmer", "inte alls"],
  ["Instämmer", "i låg grad"],
  ["Instämmer", "i viss grad"],
  ["Instämmer", "i hög grad"],
  ["Instämmer", "helt"]
]

const adaptedGrader = 
[
  "Inte alls", "I låg grad", "I viss grad", "I hög grad", "I mycket hög grad"
]


const adaptedHurNöjd =
[
    "Mycket missnöjd", "Ganska missnöjd", ["Varken nöjd", "eller missnöjd"], "Ganska nöjd", "Mycket nöjd"
]

const  getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}



const getAdaptedOptions = (options) =>
{
    switch(options[0])
    {
      case "Instämmer inte alls":
        return adaptedAgreeOptions
      case "Mycket missnöjd":
        return adaptedHurNöjd
      case "Inte alls":
        return adaptedGrader
      default:
        return ["oj","något","gick","fel","!"]
    }
}

const series = [
  {
    name: "Antal",
    data: [4,6,12,6,7]
  }
]

const OrdinalStatItem = ({options}) =>{

  var letters = '6ABC';
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
            horizontal:false,

          }
        },
        yaxis:{
          show:false,
          max: Math.max(...series[0].data)
        },
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: getAdaptedOptions(options),
          
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
        colors:[color],
        dataLabels:{
          style: {
            colors: ['white'],
            fontSize:'16px',
          }
        }
      }



    const classes = useStyles()
    return(
        <div  className={classes.ordinalStatItem}>
            <Chart
            options= {settings}
            series = {series}
            type ="bar"
            width ="550"
            height ="300"
            />

        </div>
    )
}

export default OrdinalStatItem;
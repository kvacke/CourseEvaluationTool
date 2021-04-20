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

function  getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

var data = [
  [1,1,1,1,1],
  [4,6,9,21,11],
  [1,1,1,1,1],
  [1,2,1,1,1],
  [1,1,3,1,1],
  [1,1,5,14,18],
  [2,6,15,7,1],
  [7,3,10,14,6],
  [8,7,10,7,7],
  [2,1,3,8,18],
  [6,7,8,6,4],
  [2,6,7,13,3],
  [15,6,5,1,1],
  [3,9,10,2,2],
  [1,2,7,16,8],
]



const OrdinalStatItem = ({options,count, value}) =>{

  var letters = '9ABC';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  const series = [
    {
      name: "Antal",
      data: data[count]
    }
  ]

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
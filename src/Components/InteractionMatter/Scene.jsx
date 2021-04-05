import React, {Component} from "react";
import ReactDOM from "react-dom";
import Matter, { Sleeping } from "matter-js";


class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCount : 150,
      ballCount : 0,
    };
    this.addOneBall = this.addOneBall.bind(this)
    this.myFunction = this.myFunction.bind(this)

  }


  sumOfCredits()
  {
    var sum = 0;
    this.state.classes.forEach((item) => {
      sum += item.credits;
    })

    return sum;
  }

  addOneBall()
  {
    if(this.state.engine)
    {
      var min = 0.001,
      max = 0.001,
      number = Math.random() * (max - min) + min;
      let ball = Matter.Bodies.circle(10, 10, 5, { restitution: 0.0, render: {fillStyle:'grey'} })
      Matter.World.add(this.state.engine.world, ball)
      Matter.Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: number, y: 0 });
    }
    
  }

  addBalls(index)
  {
    if(this.state.engine)
    {
      var count = this.props.classData[index].credits
      var evaluated = this.props.classData[index].evaluated

      console.log(this.props.classData[index])
      var letters = 'BCDE';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
      }

      for(var j = 0; j < count; j++)
      {
        //await new Promise(r => setTimeout(r, 25));
        var xmin = 0.007, xmax = 0.010,
            ymin = 0.0001, ymax = 0.0005

        var x_number = Math.random() * (xmax - xmin) + xmin;
        var y_number = Math.random() * (ymax -ymin) + ymin;
        let ball = Matter.Bodies.circle(0, 30, 8, { restitution: 0.0, render: {fillStyle: color} })
        Matter.World.add(this.state.engine.world, ball);
        Matter.Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: x_number, y: -y_number });
      }
      console.log(evaluated)

      if(evaluated)
      {
        var xmin = 0.007, xmax = 0.010,
            ymin = 0.0001, ymax = 0.0005
        let goldenBall = Matter.Bodies.rectangle(0, 30, 10,20, { restitution: 0.0, render: {fillStyle: 'gold'} })
        Matter.World.add(this.state.engine.world, goldenBall);
        Matter.Body.applyForce( goldenBall, {x: goldenBall.position.x, y: goldenBall.position.y}, {x: x_number, y: -y_number });
      }

    }
  }


  myFunction(index) {
 //Generate Random number between 5 - 10
    console.log("index from myfunction: " + index)
    if(index == this.props.classData.length) {return }
    else{
      this.addBalls(index)
      var newIndex = this.state.engine ? index+1 : index
      setTimeout(() => this.myFunction(newIndex), 300);
    }
  }
  
  


  componentDidMount() {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      Body = Matter.Body,
      MouseConstraint = Matter.MouseConstraint;
      
    

    var engine = Engine.create({
      // positionIterations: 20
    });



    var render = Render.create({
      element: this.refs.scene,
      engine: engine,
      options: {
        width: 800,
        height: 150,
        wireframes: false,
        background:'rgb(255,255,255)'
      }
    });


    this.setState({
      engine : engine,
      render : render,
      incomingBalls : [],
    })

    var ballA = Bodies.circle(400, 10, 10, { restitution: 0.6 });
    var ballB = Bodies.circle(200, 50, 10, { restitution: 0.6 });
    
    var wallColor = "white";

    World.add(engine.world, [


      //ceiling
      Bodies.rectangle(0,0,1600,10, 
        {isStatic: true,  
          render: {
            fillStyle: wallColor,
            strokeStyle: 'white',
            lineWidth: 0
        }}),

      //left wall
      Bodies.rectangle(0,125,10,250,
        {isStatic: true,  
          render: {
            fillStyle: wallColor,
            strokeStyle: 'white',
            lineWidth: 0
        }}),
      
      //right wall
      Bodies.rectangle(800,125,10,250,
        {isStatic: true,  
          render: {
            fillStyle: wallColor,
            strokeStyle: 'white',
            lineWidth: 0
        }}),

      //floor
      Bodies.rectangle(0,150,5000,10, 
        {isStatic: true,  
          render: {
            fillStyle: wallColor,
            strokeStyle: 'white',
            lineWidth: 0
        }}),

    ]);

    //World.add(engine.world, [ballA, ballB]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    World.add(engine.world, mouseConstraint);

    Matter.Events.on(mouseConstraint, "mousedown", function(event) {

      
        // var letters = 'ABCDEF';
        // var color = '#';
        // for (var i = 0; i < 6; i++) {
        //   color += letters[Math.floor(Math.random() * letters.length)];
        // }
        // for(var j = 0; j < 8; j++)
        // {
        //   var xmin = 0.004, xmax = 0.001,
        //       ymin = 0.0002, ymax = 0.0004
  
        //   var x_number = Math.random() * (xmax - xmin) + xmin;
        //   var y_number = Math.random() * (ymax -ymin) + ymin;
        //   let ball = Bodies.circle(250, 20, 7, { restitution: 0, render: {fillStyle: color} })
        //   World.add(engine.world, ball);
        //   Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: x_number, y: -y_number });
        // }
      

      
    });


    
    


    Engine.run(engine);

    Render.run(render);

    this.myFunction(0);

    // var interval = setInterval(() => {
    //   var min = 0.005,
    //       max = 0.01,
    //       number = Math.random() * (max - min) + min;
    //   let ball = Bodies.circle(10, 180, 10, { restitution: 0.7, render: {fillStyle:'grey'} })
    //   World.add(engine.world, ball);
    //   Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: number, y: 0 });
    // }, 1000 )
  }

  render() 
  { 
    return <div ref="scene" />;
  }
}

export default Scene;

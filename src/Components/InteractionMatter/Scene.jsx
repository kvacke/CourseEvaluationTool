import React, {Component} from "react";
import ReactDOM from "react-dom";
import Matter from "matter-js";

class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  doSomethingAtRandomIntervals(){

  
    if(this.state.engine !== undefined)
    {
      var min = 2,
      max = 4;
      var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
      console.log('Wait for ' + rand + ' seconds');
      setInterval(this.addOneBall(), rand * 1000);
      
    }
    
  }


  addOneBall()
  {
    console.log("adding one ball! ps christie is a cutie")
     Matter.World.add(this.state.engine.world, Matter.Bodies.circle(150, 50, 50, { restitution: 0.7 }))
  }







  componentDidMount() {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    

    var engine = Engine.create({
      // positionIterations: 20
    });



    var render = Render.create({
      element: this.refs.scene,
      engine: engine,
      options: {
        width: 1000,
        height: 250,
        wireframes: false,
        background:'rgb(255,255,255)'
      }
    });


    this.setState({
      engine : engine,
      render : render,
    })

    var ballA = Bodies.circle(400, 10, 15, { restitution: 0.4 });
    var ballB = Bodies.circle(200, 50, 15, { restitution: 0.4 });
    
    World.add(engine.world, [


      //ceiling
      Bodies.rectangle(1,0,5000,10, {isStatic: true}),

      //left wall
      Bodies.rectangle(0,125,10,250,{isStatic: true}),
      
      //left wall
      Bodies.rectangle(1000,125,10,250,{isStatic: true}),

      //floor
      Bodies.rectangle(0,250,5000,10, {isStatic: true}),

    ]);

    World.add(engine.world, [ballA, ballB]);

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
      World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
    });

    Engine.run(engine);

    Render.run(render);
  }

  render() 
  { 
    this.doSomethingAtRandomIntervals();
    return <div ref="scene" />;
  }
}
export default Scene;

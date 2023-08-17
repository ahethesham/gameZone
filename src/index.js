import React from 'react'
import  ReactDOM  from 'react-dom'
import {Board} from './classic_snake'
import './index.css'
import { BallBoard } from './flappy_bird'
import {TicTac} from './tictactoe'
import {Sudoku} from './sudoku'
import game_logo from './game_logo.png'
import snake_game from './snake_game.png'
import flappy_bird from './flappybird_back.png'
import tic_tac from './tictacbg.png'
import sudoku_img from './sudoku.png'
function responsive(){
  let width=window.innerWidth,height=window.innerHeight;
  let hw=(59.52)*(width/100);
  let logow=(2.976)*(width/100);
  let logoh=(5.636)*(height/100);
  let heading={
    width:`${hw}px`,
    position:'relative',
  }
  let hr={
    width:`${width}px`,
    height:'0.01cm',
    backgroundColor: 'rgb(61, 61, 74)',
    color:'darkblue',
    cursor: 'pointer',
  }
  let glogo={
    float: 'left',
    backgroundImage: `url(${game_logo})`,
    backgroundRepeat: 'no-repeat,no-repeat',
    backgroundPositioX:'center',
    backgroundPositionY: 'top',
    backgroundSize: `${logow}px ${logoh}px`,
    position: 'relative',
    height:`${logoh}px`,
    width:`${logow}px`,
  }
  return [heading,hr,glogo];
}
class Heading extends React.Component{
  constructor(){
    super()
    let arr=responsive();
    this.state={heading:arr[0],hr:arr[1],glogo:arr[2]};
    this.resize=this.resize.bind(this);
    window.addEventListener('resize',this.resize)
  }
  resize(){
    let arr=responsive();
    this.setState({heading:arr[0],hr:arr[1],glogo:arr[2]})
  }
  render(){
    return (
    
               <> <div>
                <div style={this.state.heading}>
                <div style={this.state.glogo}></div>
                <div className='gheading'>gameZ</div>
                </div>
                <hr style={this.state.hr}></hr>
              <Flappy_bird/>
              <Classic_snake/>
              <Sudoku_board/>
              <TicTac_Board/>
            
              <footer style={{position:'relative',height:'400px',border:'2px solid grey'}}>
                <div style={{display:'inline-block',color:'grey',top:'30px',left:'60px',fontSize:'20px',position:'relative'}}>
                  <text style={{left:'200px',width:'500px',position:'absolute'}}>Wajahat khan</text>
                  <text style={{left:'700px',width:'500px',position:'absolute'}}>Ahethesham</text>
                  <text style={{left:'1200px',width:'500px',position:'absolute'}}>Ayaz</text>
                </div>
              </footer>
             </div>
             </>
    )
  }
}
function updateclassic_snake(){
  let width=window.innerWidth,height=window.innerHeight;
  let h=(28.18)*(height/100);
  let w=(14.88)*(width/100);
  let l=(29.76)*(width/100);
  let b=(16.91)*(height/100);
  let style={
    height:`${h}px`,
    width:`${w}px`,
   position:'relative',
   left:`${l}px`,
   bottom:`${b}px`,
    backgroundImage: `url(${snake_game})`,
    backgroundSize: `${w}px ${h}px`,
    backgroundRepeat :'no-repeat,no-repeat',
    backgroundPosition:'center center',
  }
  return style
}
function updateflappy_bird(){
  let width=window.innerWidth,height=window.innerHeight;
  let h=(28.18)*(height/100);
  let w=(14.88)*(width/100);
  let l=(60)*(width/100);
  let b=(15)*(height/100);
  let style={
    height:`${h}px`,
    width:`${w}px`,
   position:'relative',
   left:`${l}px`,
   top:`${b}px`,
    backgroundImage: `url(${flappy_bird})`,
    backgroundSize: `${w}px ${h}px`,
    backgroundRepeat :'no-repeat,no-repeat',
    backgroundPosition:'center center',
  }
  return style
}
function updatetictac(){
  let width=window.innerWidth,height=window.innerHeight;
  let h=(28.18)*(height/100);
  let w=(14.88)*(width/100);
  let l=(30)*(width/100);
  let b=(30)*(height/100);
  let bh=(30)*(width/100)
  let style={
    height:`${h}px`,
    width:`${w}px`,
    bottom:`${b}px`,
   position:'relative',
   left:`${l}px`,
    backgroundImage: `url(${tic_tac})`,
    backgroundSize: `${bh}px ${h}px`,
    backgroundRepeat :'no-repeat,no-repeat',
    backgroundPosition:'center center',
  }
  return style
}
function updatesudoku(){
  let width=window.innerWidth,height=window.innerHeight;
  let h=(28.18)*(height/100);
  let w=(14.88)*(width/100);
  let l=(60)*(width/100);
  let b=(5)*(height/100);
  let style={
    height:`${h}px`,
    width:`${w}px`,
   position:'relative',
   left:`${l}px`,
   bottom:`${b}px`,
    backgroundImage: `url(${sudoku_img})`,
    backgroundSize: `${w}px ${h}px`,
    backgroundRepeat :'no-repeat,no-repeat',
    backgroundPosition:'center center',
  }
  return style
}
class Classic_snake extends React.Component{
  constructor(){
     super()
     this.func=this.func.bind(this);
     this.state={st:updateclassic_snake()}
     this.resize=this.resize.bind(this);
     window.addEventListener('resize',this.resize)
  }
  resize(){
    this.setState({st:updateclassic_snake()})
  }
  func(){
    ReactDOM.render(<Heading/>,document.getElementById('root'));
  }
  render(){
    return(
    <div style={this.state.st}onClick={()=>ReactDOM.render(<Board func={this.func}/>,document.getElementById('root'))}>

    </div>
    )
  }
}
class Flappy_bird extends React.Component{
  constructor(){
    super()
    this.func=this.func.bind(this);
    this.state={st:updateflappy_bird()}
    this.resize=this.resize.bind(this);
    window.addEventListener('resize',this.resize)
  }
  resize(){
    this.setState({st:updateflappy_bird()})
  }
  func(){
    ReactDOM.render(<Heading/>,document.getElementById('root'));
  }
  render(){
    return(
      <div style={this.state.st} onClick={()=>ReactDOM.render(<BallBoard func={this.func}/>,document.getElementById('root'))}>

      </div>
    )
  }
}
class Sudoku_board extends React.Component{
  constructor(){
    super()
    this.state={st:updatesudoku()}
    this.resize=this.resize.bind(this)
    window.addEventListener('resize',this.resize)
  }
  resize(){
    this.setState({st:updatesudoku()})
  }
  func(){
    ReactDOM.render(<Heading/>,document.getElementById('root'));
  }
  render(){
    return (
      <div style={this.state.st}onClick={()=>ReactDOM.render(<Sudoku func={this.func}/>,document.getElementById('root'))}>

      </div>
    )
  }
}
class TicTac_Board extends React.Component{
  constructor(){
    super()
    this.func=this.func.bind(this)
    this.state={st:updatetictac()}
    this.resize=this.resize.bind(this)
    window.addEventListener('resize',this.resize)
  }
  resize(){
    this.setState({st:updatetictac()});
  }
  func()
  {
    ReactDOM.render(<Heading/>,document.getElementById('root'))
  }
  render(){
    return (
      <div style={this.state.st} onClick={()=>ReactDOM.render(<TicTac func={this.func} />,document.getElementById('root'))}>

      </div>
    )
  }
}

ReactDOM.render(<Heading/>,document.getElementById('root'))
/*class Test extends React.Component{
  constructor(){
    super()
    this.state={width:window.innerWidth,height:window.innerHeight}
    this.setsize=this.setsize.bind(this);
    window.addEventListener('resize',this.setsize);
  }
  setsize(){
    this.setState({width:window.innerWidth,height:window.innerHeight});
  }
  render(){
    return (
    <div style={{color:"white"}}>
      {this.state.width}<br></br>
      {this.state.height}
    </div>)
  }
}
ReactDOM.render(<Test/>,document.getElementById('root'));*/
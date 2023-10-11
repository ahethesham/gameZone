import React from 'react'
import  ReactDOM  from 'react-dom'
import {Board} from './classic_snake'
import './index.css'
import { BallBoard } from './flappy_bird'
import {TicTac} from './tictactoe'
import {Sudoku} from './sudoku'
import snakeimg from './snake_game.png'
import fbimg from './flappybird_back.png'
import tic_tac from './tictacbg.png'
import sudoku_img from './sudoku.png'
import { Heading1 } from './heading.js'
import { responsive } from './responsive'
import { Footer } from './Footer.js'
import { Side_bar } from './side_bar'
export class Heading extends React.Component{
  constructor(){
    super()
  }
  render(){
    return (
             <>
             <Heading1/>
             <Side_bar/>
              <Classic_snake/>
              <Flappy_bird/>
              <TicTac_Board/>
              <Sudoku_board/>
              <Footer/>
             </>
    )
  }
}
class Classic_snake extends React.Component{
  constructor(){
     super()
     this.state={st:responsive.snake.header(),image:responsive.snake.image(snakeimg),text:responsive.snake.text(),text_02:responsive.snake.text_02()}
     this.resize=this.resize.bind(this);
     this.handleexit=this.handleexit.bind(this)
     window.addEventListener('resize',this.resize)
  }
  resize(){
    this.setState({st:responsive.snake.header(),image:responsive.snake.image(snakeimg),text:responsive.snake.text(),text_02:responsive.snake.text_02()})
  }
  handleexit(){
    ReactDOM.render(<Heading/>,document.getElementById('root'))
  }
  render(){
    return(
    <div style={this.state.st}onClick={()=>ReactDOM.render(<Board func={this.handleexit}/>,document.getElementById('root'))}>
      <div style={this.state.image}> </div>
      <div style={this.state.text}>
        <h1 >Classic_snake</h1>
        <textarea style={this.state.text_02}value={">real world application of matrices , Recursions , mutex locks ,and Queues "}>
        </textarea>
      </div>
    </div>
    )
  }
}
class Flappy_bird extends React.Component{
  constructor(){
    super()
    this.state={st:responsive.snake.header(),image:responsive.snake.image(fbimg)}
    this.resize=this.resize.bind(this);
    window.addEventListener('resize',this.resize)
  }
  resize(){
    this.setState({st:responsive.snake.header(),image:responsive.snake.image(fbimg)})
  }
  
  render(){
    return(
      <div style={this.state.st} onClick={()=>ReactDOM.render(<BallBoard func={this.func}/>,document.getElementById('root'))}>
        <div style={this.state.image}></div>
      </div>
    )
  }
}
class Sudoku_board extends React.Component{
  constructor(){
    super()
    this.state={st:responsive.snake.header(),image:responsive.snake.image(sudoku_img)}
    this.resize=this.resize.bind(this)
    window.addEventListener('resize',this.resize)
  }
  resize(){
    this.setState({st:responsive.snake.header,image:responsive.snake.image(sudoku_img)})
  }
 
  render(){
    return (
      <div style={this.state.st}onClick={()=>ReactDOM.render(<Sudoku func={this.func}/>,document.getElementById('root'))}>
        <div style={this.state.image}></div>
      </div>
    )
  }
}
class TicTac_Board extends React.Component{
  constructor(){
    super()
    this.state={st:responsive.snake.header(),image:responsive.snake.image(tic_tac)}
    this.resize=this.resize.bind(this)
    window.addEventListener('resize',this.resize)
  }
  resize(){
    this.setState({st:responsive.snake.header,image:responsive.snake.image(tic_tac)});
  }
  render(){
    return (
      <div style={this.state.st} onClick={()=>ReactDOM.render(<TicTac func={this.func} />,document.getElementById('root'))}>
        <div style={this.state.image}></div>
      </div>
    )
  }
}
ReactDOM.render(<Heading/>,document.getElementById('root'))

import React from 'react'
import  ReactDOM  from 'react-dom'
//import './github.css'
import {Board} from './classic_snake'
import './index.css'
import { BallBoard } from './flappy_bird'
import {TicTac} from './tictactoe'
//import {Github} from './testing'
import {Sudoku} from './sudoku'
class Heading extends React.Component{
  constructor(){
    super()

  }

  render(){
    return (
           <div>
                <div className='Heading'>
                <div className='glogo'></div>
                <div className='gheading'>Game Hub</div>
                </div>
                <hr></hr>
              <Flappy_bird/>
              <Classic_snake/>
              <Sudoku_board/>
              <TicTac_Board/>
             </div>
    )
  }
}
class Classic_snake extends React.Component{
  constructor(){
     super()
     this.func=this.func.bind(this);
  }
  func(){
    ReactDOM.render(<Heading/>,document.getElementById('root'));
  }
  render(){
    return(
    <div className='Classicsnake' onClick={()=>ReactDOM.render(<Board func={this.func}/>,document.getElementById('root'))}>

    </div>
    )
  }
}
class Flappy_bird extends React.Component{
  constructor(){
    super()
    this.func=this.func.bind(this);
  }
  func(){
    ReactDOM.render(<Heading/>,document.getElementById('root'));
  }
  render(){
    return(
      <div className='Flappybird' onClick={()=>ReactDOM.render(<BallBoard func={this.func}/>,document.getElementById('root'))}>

      </div>
    )
  }
}
class Sudoku_board extends React.Component{
  constructor(){
    super()
  }
  func(){
    ReactDOM.render(<Heading/>,document.getElementById('root'));
  }
  render(){
    return (
      <div className='sudokuboard' onClick={()=>ReactDOM.render(<Sudoku func={this.func}/>,document.getElementById('root'))}>

      </div>
    )
  }
}
class TicTac_Board extends React.Component{
  constructor(){
    super()
    this.func=this.func.bind(this)
  }
  func()
  {
    ReactDOM.render(<Heading/>,document.getElementById('root'))
  }
  render(){
    return (
      <div className='tictac_board' onClick={()=>ReactDOM.render(<TicTac func={this.func} />,document.getElementById('root'))}>

      </div>
    )
  }
}

ReactDOM.render(<Heading/>,document.getElementById('root'))
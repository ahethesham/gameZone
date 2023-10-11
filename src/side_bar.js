import React from "react";
import ReactDOM from 'react-dom'
import { responsive } from "./responsive.js";
import snakeimg from './snake_game.png'
import fbimg from './flappybird_back.png'
import tictacimg from './tictacbg.png'
import sudokuimg from './sudoku.png'
let arr=[['Classic Snake',snakeimg],['Flappy Bird',fbimg],['TicTacToe',tictacimg],['Sudoku',sudokuimg]]
export class Side_bar extends React.Component{
    constructor(){
        super()
        this.state={style:responsive.side_bar.Main()}
    }
    resize(){
        this.setState({style:responsive.side_bar.Main()})
    }
    render(){
        return<div style={this.state.style}>
           {arr.map((ele)=> <Side_block text={ele[0]} img={ele[1]}/>)}
        </div>
    }
}
class Side_block extends React.Component{
    constructor(props){
        super(props)
        this.state={style:responsive.side_bar.block(),image:responsive.side_bar.image(this.props.img),text:responsive.side_bar.text()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive.side_bar.block(),image:responsive.side_bar.image(this.props.img),text:responsive.side_bar.text()})
    }
    render(){
        return<div style={this.state.style}>
            <div style={this.state.image}>
            </div>
            <div style={this.state.text}>
                {this.props.text}
            </div>
        </div>
    }
}
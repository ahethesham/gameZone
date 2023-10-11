import React from "react";
import ReactDOM from "react-dom";
import { responsive } from "./responsive.js";
import logo from './game_logo.png'
import {Heading} from './index.js'
import {end} from './flappy_bird.js'
export class Headingfb extends React.Component{
    constructor(){
        super()
        this.state={style:responsive.heading.Main(),image:responsive.heading.image(logo),text:responsive.heading.text()}
    }
    resize(){
        this.setState({style:responsive.heading.Main(),image:responsive.heading.image(logo),text:responsive.heading.text()})
    }
    async handleexit(){
        end(()=>{ReactDOM.render(<Heading/>,document.getElementById('root'))},700);
       // ReactDOM.render(<Heading/>,document.getElementById('root'))
    }
    render(){
        return<div style={this.state.style}>
            <div style={this.state.image}onClick={this.handleexit}></div>
            <hr/>
        </div>
    }
}
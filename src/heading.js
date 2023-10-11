import React from "react";
import ReactDOM from "react-dom";
import { responsive } from "./responsive.js";
import logo from './game_logo.png'
import {Heading} from './index.js'
export class Heading1 extends React.Component{
    constructor(){
        super()
        this.state={style:responsive.heading.Main(),image:responsive.heading.image(logo),text:responsive.heading.text()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive.heading.Main(),image:responsive.heading.image(logo),text:responsive.heading.text()})
    }
    render(){
        return<div style={this.state.style}>
            <div style={this.state.image}onClick={()=>ReactDOM.render(<Heading/>,document.getElementById('root'))}></div>
            <hr/>
        </div>
    }
}
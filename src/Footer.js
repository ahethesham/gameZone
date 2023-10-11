import React from "react";
import { responsive } from "./responsive.js";
let info=''
export class Footer extends React.Component{
    constructor(){
        super()
        this.state={style:responsive.footer.header(),text:responsive.footer.text()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({st:responsive.footer.header(),text:responsive.footer.text()})
    }
    render(){
        return<div style={this.state.style}>
            <textarea value={info} style={this.state.text}></textarea>
        </div>
    }
} 
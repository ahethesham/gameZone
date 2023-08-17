import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ArrowKeysReact from 'arrow-keys-react';
import img from './start.png'
import pause from './pause.png'
import game_logo from './game_logo.png'
let mat=[]
let count=0
let r;
let align=2,row=0,col=0,sem=1,len=7,started=0;
let speed;
let queue=[],book=[]
book.push(0);
book.push(0);
let bool=[]
let scoreadd,s;
let semflag=0;
for(let i=0;i<30;i++)
{
    let temp=[];
    let t=[];
    for(let j=0;j<50;j++)
    {temp.push(0);t.push(0)}
    mat.push(temp);
    bool.push(t);
}
function updateboard(){
  let width=window.innerWidth,height=window.innerHeight;
  let t=25*(height/100);
  let w=(53.57)*(width/100);
  let l=(23.80)*(width/100);
  let h=(67.64)*(height/100);
   let logobottom=(85)*(height/100);
 let logosizey=(5.63)*(height/100);
 let logosizex=(2.976)*(width/100);
  let style={
    top:`${t}px`,
    width:`${w}px`,
    position: 'relative',
    left:`${l}px`,
    height:`${h}px`,
    overflow: 'auto',
    border: '1px solid rgb(72, 71, 71)',
  }
  let main={
    height:`${height}`,
    width:`${width}`
  }
  let logo={
    float:'left',
    backgroundImage: `url(${game_logo})`,
    backgroundRepeat: 'no-repeat,no-repeat',
    backgroundPosition:'center top',
    backgroundSize: `${logosizex}px ${logosizey}px`,
    bottom:`${logobottom}px`,
    height: `${logosizey}px`,
    width:`${logosizex}px`,
    position: `absolute`,
  }
  let hb=(80)*(height/100);
  let hr={
    bottom:`${hb}px`,position:'absolute',width:`${98*(width/100)}px`
  }
  return [style,main,logo,hr]
}
export  class Board extends React.Component{
  constructor (props){
    super(props);
    this.exit=this.exit.bind(this);
    let arr=updateboard();
    this.state={board:arr[0],main:arr[1],logo:arr[2],hr:arr[3]}
    this.resize=this.resize.bind(this);
    window.addEventListener('resize',this.resize)

    ArrowKeysReact.config({
      left:()=>{
        if(sem==1||semflag==1)return;
        sem=1;
        semflag=1;
        if(align==2||align==4){sem=0;return;}
        align=4;
        sem=0;
        return;
      },
      right:()=>{
        if(sem==1||semflag==1)return;
        sem=1;        semflag=1;

        if(align==4||align==2){sem=0;return;}
        align=2;
        sem=0;
        return;
      },
      up:()=>{
        if(sem==1||semflag==1)return;
        sem=1;
        semflag=1;

        if(align==1||align==3){sem=0;return;}
        align=1;
        sem=0;
        return;
      },
      down:()=>{
        if(sem==1||semflag==1)return;
        sem=1;        semflag=1;

        if(align==1||align==3){sem=0;return;}
        align=3;
        sem=0;
        return;
      }
  
    });
  }
  resize(){
    let arr=updateboard()
    this.setState({board:arr[0],main:arr[1],logo:arr[2],hr:arr[3]});
  }
componentDidMount(){
    r=document.getElementById('root');
  };
  exit(){
    s.handle()
    sem=1;
    started=0;
    while(queue.length>0)
    {
      let t=queue.shift()
      r.childNodes[0].childNodes[0].childNodes[t[0]].childNodes[t[1]].style.backgroundColor="black"
      bool[t[0]][t[1]]=0;
    }
    
    r.childNodes[0].childNodes[0].childNodes[row].childNodes[col].style.backgroundColor="black"
    r.childNodes[0].childNodes[0].childNodes[book[0]].childNodes[book[1]].style.backgroundColor="black"
    book[0]=0;book[0]=0;
    scoreadd.setState({score:0})
    this.props.func()
    return;
  }
    render()
    {
        return(
          <div style={this.state.main}{...ArrowKeysReact.events} tabIndex='1' >
            <div style={this.state.board}>
               {mat.map((mat,index)=><Row1 mat={mat} row={index}/>)}
            </div>
            <div style={this.state.logo} onClick={this.exit}></div>
          <hr style={this.state.hr}/>
            <Score/>
            <Start />
            </div>
        )
    }
}
function updaterow(){
  let width=window.innerWidth,height=window.innerHeight;
  let w=(41)*(width/100);
  let style={  position: 'relative',
    width:`${w}px`,
    display: 'inline'}
    return style;
}
class Row1 extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={row:updaterow()}
        this.resize=this.resize.bind(this);
        window.addEventListener('resize',this.resize)
    }
    resize(){
      this.setState({row:updaterow()});
    }
    render(){
        return(
            <div style={this.state.row} >
            {this.props.mat.map((ele,index)=><Element row={this.props.row}col={index}/>)}
            </div>
        )
    }
}
function updateelement(){
  let width=window.innerWidth,height=window.innerHeight;
  let h=(2.3)*(height/100);
  let w=(1.07)*(width/100);
  let r=(0.357)*(width/100);
  let b=(0.0595)*(width/100);
 // alert(h)
  let style={
  position: 'relative',
  float: 'left',
  height:`${h}px`,
  width:`${w}px`,
  backgroundColor:'black',
borderRadius:'6px'
  }
  return style;
}
class Element extends React.Component{
    constructor(props){
        super(props)
        this.state={element:updateelement()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
  resize(){
    this.setState({element:updateelement()});
  }
    
    render(){
        return (
            <div style={this.state.element} >
            </div>
        )
    }
}



 function generate() {
  sem = 1;
  let row = Math.floor(Math.random() * 30);
  let col = Math.floor(Math.random() * 50);
  book[0] = row;
  book[1] = col;

  if (bool[row][col] === 1)
    generate();
  r.childNodes[0].childNodes[0].childNodes[row].childNodes[col].style.backgroundColor = "rgb(72, 71, 71)";

  sem = 0;
}
 function util()
{
  if(started==0)return;
  setTimeout(async ()=>{
    if(sem==1){util();return;}
    semflag=0;
     if(row==book[0] && col==book[1]){
      len+=1;
      scoreadd.handle()
       generate();
      speed-=2;
     }
  
     r.childNodes[0].childNodes[0].childNodes[row].childNodes[col].style.backgroundColor="rgb(72, 71, 71)"

    if(bool[row][col]===1){
      //alert("GAME OVER")
      sem=1;
      setTimeout(()=>{
      scoreadd.setState({score:0})
     s.handle()
    sem=1;
    while(queue.length>0)
    {
      let t=queue.shift()
      r.childNodes[0].childNodes[0].childNodes[t[0]].childNodes[t[1]].style.backgroundColor="black"
      bool[t[0]][t[1]]=0;
    }
    r.childNodes[0].childNodes[0].childNodes[row].childNodes[col].style.backgroundColor="black"
    r.childNodes[0].childNodes[0].childNodes[book[0]].childNodes[book[1]].style.backgroundColor="black"
    book=[]
    started=0;
    return;},1000)
    }

    if(queue.length==len)
    {
      let t=queue.shift()
      r.childNodes[0].childNodes[0].childNodes[t[0]].childNodes[t[1]].style.backgroundColor="black"
      bool[t[0]][t[1]]=0;
   
    }
    queue.push([row,col]);
    bool[row][col]=1;
    if(align==1)
    {
      if(row==0)row=29;
      else
      row--;
      util();
    }
    else if(align==2)
    {
      col=(col+1)%50;
      util();
    }
    else if(align==3)
    {
      row=(row+1)%30;
      util()
    }
    else{
      if(col==0)col=49;
      else
      col--;
      util();
    }
  },speed)
}
function updatebutton(flag){
  let width=window.innerWidth,height=window.innerHeight;
  let w=(11.9)*(width/100);
  let h=(22.54)*(height/100);
  let l=(47.61)*(width/100);
  let b=(69.89)*(height/100);
  let bw=(4.76)*(width/100);
  let bh=(9.01)*(height/100);
let butstyle={
  height:`${h}px`,
  width:`${w}px`,
  left:`${l}px`,
  bottom:`${b}px`,
  backgroundImage: `url(${img})`,
  backgroundRepeat: 'no-repeat no-repeat',
  backgroundSize: `${bw}px ${bh}px`,
  position: 'relative',
  backgroundColor: 'transparent',
}
let pausebut={
  height:`${h}px`,
  width:`${w}px`,
  left:`${l}px`,
  bottom:`${b}px`,
  backgroundImage: `url(${pause})`,
  backgroundRepeat: 'no-repeat no-repeat',
  backgroundSize: `${bw}px ${bh}px`,
  position: 'relative',
  backgroundColor: 'transparent',
}
if(flag==1)return butstyle
return pausebut;
}
class Start extends React.Component{
  constructor(){
    super()
    this.handle=this.handle.bind(this);
    this.state={play:false,st:updatebutton(0)}
    this.resize=this.resize.bind(this);
    window.addEventListener('resize',this.resize)
    s=this
  }
  resize(){
    if(this.state.play==false)
    {
      this.setState({play:false,st:updatebutton(0)})
    }
  else
  this.setState({play:true,st:updatebutton(1)});
  }
  handle(){
    if(this.state.play==false){
    sem=0;
    if(started==0){started=1;align=2;row=0;col=0;sem=1;len=10;speed=70;this.setState({play:true,st:updatebutton(1)});generate();
      util();}
      else
      this.setState({play:true,st:updatebutton(1)})
    }
    else{
      sem=1;
      this.setState({play:false,st:updatebutton(0)})
    }
  }
  render(){
    return(
      <div >
        <div  style={this.state.st} onClick={this.handle}></div>
      </div>
    )
  }
}
function updatescore(){
  let width=window.innerWidth,height=window.innerHeight
  let h=(3.38)*(height/100);
  let l=(89)*(width/100);
  let b=(63.13)*(height/100);
  let style={
    color: 'aliceblue',
    position: 'relative',
    height: `${h}px`,
    width: `${h}px`,
    left:`${l}px`,
    bottom: `${b}px`,
    fontSize:'larger',
    fontWeight: 'bolder',
    fontFamily: 'Georgia'
  }
  return style
}
class Score extends React.Component{
  constructor(){
    super()
    scoreadd=this;
    this.state={score:0,st:updatescore()}
    this.handle=this.handle.bind(this)
    this.resize=this.resize.bind(this);
    window.addEventListener('resize',this.resize)
  }
  resize(){
    this.setState((prev)=>{return {score:prev.score,st:updatescore()}});
  }
  handle(){
    this.setState((prev)=>{return {score:prev.score+2}});
  }
  render(){
    return(
      <div style={this.state.st}>
        SCORE:{this.state.score}
      </div>
    )
  }
}




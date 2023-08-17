import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ArrowKeysReact from 'arrow-keys-react';
import img from './start.png'
import pause from './pause.png'
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

export  class Board extends React.Component{
  constructor (props){
    super(props);
    this.exit=this.exit.bind(this);
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
          <div style={{height:'880px'}}{...ArrowKeysReact.events} tabIndex='1' >
            <div className='Board'>
               {mat.map((mat,index)=><Row1 mat={mat} row={index}/>)}
            </div>
            <div className='logo' onClick={this.exit}></div>
          <hr style={{bottom:'760px',position:'absolute',width:'98%'}}/>
            <Score/>
            <Start />
            </div>
        )
    }
}
class Row1 extends React.Component{
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
            <div className='Row' >
            {this.props.mat.map((ele,index)=><Element row={this.props.row}col={index}/>)}
            </div>
        )
    }
}
class Element extends React.Component{
    constructor(props){
        super(props)
    }
  
    
    render(){
        return (
            <div className='Element' >
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
let butstyle={
  fontSize: '40px',
  height:'200px',
  width:'200px',
  left:'800px',
  bottom:'620px',
  backgroundImage: `url(${img})`,
  backgroundRepeat: 'no-repeat no-repeat',
  backgroundSize: '80px 80px',
  position: 'relative',
  backgroundColor: 'transparent',
}
let pausebut={
  fontSize: '40px',
  height:'200px',
  width:'200px',
  left:'800px',
  bottom:'620px',
  backgroundImage: `url(${pause})`,
  backgroundRepeat: 'no-repeat no-repeat',
  backgroundSize: '100px 100px',
  position: 'relative',
  backgroundColor: 'transparent',
}
class Start extends React.Component{
  constructor(){
    super()
    this.handle=this.handle.bind(this);
    this.state={play:false,st:pausebut}
    s=this
  }
  handle(){
    if(this.state.play==false){
    sem=0;
    if(started==0){started=1;align=2;row=0;col=0;sem=1;len=10;speed=70;this.setState({play:true,st:butstyle});generate();
      util();}
      else
      this.setState({play:true,st:butstyle})
    }
    else{
      sem=1;
      this.setState({play:false,st:pausebut})
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
class Score extends React.Component{
  constructor(){
    super()
    scoreadd=this;
    this.state={score:0}
    this.handle=this.handle.bind(this)
  }
  handle(){
    this.setState((prev)=>{return {score:prev.score+2}});
  }
  render(){
    return(
      <div className='score'>
        SCORE:{this.state.score}
      </div>
    )
  }
}




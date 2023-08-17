import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import brick from './brick.png'
import img from './start.png'
import pause from './pause.png'
import image from './game_logo.png'
import fb_background from './fb_background.png'
let board=[],fakelen;
let t={float:'left',backgroundImage: `url(${image})`,
backgroundRepeat: 'norepeat,norepeat',
backgroundPositionx:'center',
backgroundPositiony: 'top',
backgroundSize: '50px 50px',
height: '50px',
right:'1600px',
bottom:'620px',
width:'50px',
position: 'absolute'}
let prev={float:'left',backgroundImage: `url(${image})`,
backgroundRepeat: 'norepeat,norepeat',
backgroundPositionx:'center',
backgroundPositiony: 'top',
backgroundSize: '50px 50px',
height: '50px',
right:'1600px',
bottom:'620px',
width:'50px',
position: 'absolute'}
let laddress;
let sem=1,r,mounttest=0;
let align=0,s;
for(let i=0;i<26;i++){
  let temp=[]
  for(let j=0;j<50;j++)
  temp.push(0);
  board.push(temp);
}
let col1=49,col2,col3=49,flag=0;
let len=7;
function rand(){
  return Math.floor(Math.random() * (15-1) ) + 1;

}
let queue=[],queue2=[];
let ball=[9,10];
let b=11
function set(){
for(let i=2;i<4;i++){
  for(let j=0;j<ball.length;j++){
    r.childNodes[0].childNodes[0].childNodes[ball[j]].childNodes[i].style.backgroundColor='grey';
   }
}
}
function updatebrick(){
  let width=window.innerWidth,height=window.innerHeight
  let h=(2.25)*(height/100)
  let w=(0.89)*(width/100)
  let st=`height:${h}px;
    width:${w}px;
    position:relative;`

  return st;
}
function raise(){
  if(mounttest==0){align=0;return;}
  setTimeout(()=>{
    if(mounttest==0){align=0;return;}

      if(sem==1){raise();return;}
      if(align>0){align--;raise();return;}
     col2=ball[0]
     
     for(let i=2;i<4;i++){
      if(      r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].childNodes.length>0){end(()=>{},700);return;}
     r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.backgroundColor=''
     }
     ball.shift()

     b=ball[ball.length-1]+1;
     if(b==26)b=25;
     ball.push(b);

     for(let i=2;i<4;i++){
      if(      r.childNodes[0].childNodes[0].childNodes[b].childNodes[i].childNodes.length>0){end(()=>{},700);return;}
      r.childNodes[0].childNodes[0].childNodes[b].childNodes[i].style.backgroundColor='grey'
      }
    raise();
  },80)
}
function util(){
  if(mounttest==0)return;
  setTimeout(()=>{
    if(mounttest==0)return;

    if(sem==1){util();return;}
  if(queue.length==3)
  {
    col2=queue[0][0]
    fakelen=queue[0][1];
    queue.shift()
    for(let i=0;i<fakelen;i++){
      
      r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].removeChild(r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].lastChild)

    }
    for(let i=fakelen+7;i<26;i++){
      r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].removeChild(r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].lastChild)
    }
  }
  if(queue2.length==3){
    col2=queue2[0][0]
    fakelen=queue2[0][1];
    queue2.shift()
    for(let i=0;i<fakelen;i++){
      r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].removeChild(r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].lastChild)

    }
    for(let i=fakelen+7;i<26;i++){
      r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].removeChild(r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].lastChild)
    }
  }
  if(col1==49)len=rand()
  else
  len=queue[queue.length-1][1]
  queue.push([col1,len])
  for(let i=0;i<len;i++){
   let t=document.createElement("img")
   t.src=brick
t.style.cssText=updatebrick()
if(r.childNodes[0].childNodes[0].childNodes[i].childNodes[col1].style.backgroundColor=='grey'){end(()=>{},700);return;}
    r.childNodes[0].childNodes[0].childNodes[i].childNodes[col1].appendChild(t);

  }
  for(let i=len+7;i<26;i++){
   let t=document.createElement("img")
   t.src=brick;
   t.style.cssText=updatebrick()
   
   //'height:20px;width:15px;position: relative;'
if(r.childNodes[0].childNodes[0].childNodes[i].childNodes[col1].style.backgroundColor=='grey'){end(()=>{},700);return;}

    r.childNodes[0].childNodes[0].childNodes[i].childNodes[col1].appendChild(t);
  }
  col1--;
   if(col1==24)flag=1;
   if(flag==1){
    if(col3==49)len=rand();
    else len=queue2[queue2.length-1][1];
    queue2.push([col3,len]);

    for(let i=0;i<len;i++){
     let t=document.createElement("img")
     t.src=brick;
     t.style.cssText=updatebrick()
    // 'height:20px;width:15px;position: relative;'
if(    r.childNodes[0].childNodes[0].childNodes[i].childNodes[col3].style.backgroundColor=='grey'){end(()=>{},700);return;}

      r.childNodes[0].childNodes[0].childNodes[i].childNodes[col3].appendChild(t)
  
    }
    for(let i=len+7;i<26;i++){
    let t=document.createElement("img")
    t.src=brick;
    t.style.cssText=updatebrick()
   // 'height:20px;width:15px;position: relative;'
if(    r.childNodes[0].childNodes[0].childNodes[i].childNodes[col3].style.backgroundColor=='grey'){end(()=>{},700);return;}

      r.childNodes[0].childNodes[0].childNodes[i].childNodes[col3].appendChild(t)
    }
   // queue2.push([col3,len]);
    col3--;
    if(col3<0)col3=49;
   }
  if(col1<0)col1=49;
 
  util();
},60);
}
function end(fn,timer){
sem=1
setTimeout(()=>{
 s.handle();
  mounttest=0;


  while(queue.length>0){
  col2=queue[0][0]
    fakelen=queue[0][1];
    queue.shift()
    for(let i=0;i<fakelen;i++){
      let child=r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].lastChild
      if(child)
      r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].removeChild(r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].lastChild)

    }
    for(let i=fakelen+7;i<26;i++){
      let child=r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].lastChild
      if(child)
      r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].removeChild(r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].lastChild)
    }
  }
  while(queue2.length>0){
    col2=queue2[0][0]
    fakelen=queue2[0][1];
    queue2.shift()
    for(let i=0;i<fakelen;i++){
      let child=r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].lastChild
      if(child)
      r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].removeChild(r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].lastChild)

    }
    for(let i=fakelen+7;i<26;i++){
      let child=r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].lastChild
      if(child)
      r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].removeChild(r.childNodes[0].childNodes[0].childNodes[i].childNodes[col2].lastChild)
    }
  }
  for(let i=2;i<4;i++){
    for(let j=0;j<ball.length;j++){
      r.childNodes[0].childNodes[0].childNodes[ball[j]].childNodes[i].style.backgroundColor='transparent';
     }
  }
  ball=[9,10];
  b=11;
  col1=49;col3=49;
  len=7;
  flag=0;
  fn()
  return;},timer)

}
function updateboard(){
  let width=window.innerWidth,height=window.innerHeight;
  let board_width=(44.64)*(width/100)
  let board_height=(67.64)*(height/100)
  let img_width=(35.71)*(width/100)
  let t=(19.16)*(height/100)
  let l=(29.76)*(width/100)
  let ballboard={
    height:`${board_height}px`,
    width: `${board_width}px`,
    position: 'relative',
    borderCollapse: 'collapse',
    borderSpacing:'0',
  backgroundImage: `url(${fb_background})`,
  backgroundRepeat: 'no-repeat,no-repeat',
  backgroundSize: `${img_width}px ${board_height}px`,
  backgroundPosition: '100%',
  backgroundColor: 'transparent',
  border: '1px solid grey',
  top:`${t}px`,
  left:`${l}px`
  }
  return ballboard
}
export class BallBoard extends React.Component{
 constructor(props){
  super(props)
  this.state={board:updateboard(),s:t}
  this.exit=this.exit.bind(this)
  this.resize=this.resize.bind(this)
  window.addEventListener('resize',this.resize);
  laddress=this
 }
 resize(){
  this.setState((prev)=>{return {board:updateboard(),s:prev.s}})
 }
  componentDidMount(){
    r=document.getElementById('root');

    document.body.addEventListener('keydown',function(){
      if(mounttest==0||sem==1)return;
      align++;
      sem=1;
      col2=ball[ball.length-1];
      for(let i=2;i<4;i++){
        if(      r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].childNodes.length>0){end(()=>{},700);return;}
        r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.backgroundColor='';
        r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.color='';
        }
        ball.pop();

      col2=Math.max(col2-2,0);
      ball.unshift(col2);

      for(let i=2;i<4;i++){
        if(r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].childNodes.length>0){end(()=>{},700);return;}

        r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.backgroundColor='grey';
        r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.color='grey';
        }

      col2=ball[ball.length-1];
      //ball.pop();
      for(let i=2;i<4;i++){
        if(      r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].childNodes.length>0){end(()=>{},700);return;}
        r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.backgroundColor='';
        r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.color='';
        }
        ball.pop();

      col2=Math.max(col2-2,0);
      ball.unshift(col2);

      for(let i=2;i<4;i++){
       if(      r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].childNodes.length>0){end(()=>{},700);return;}

        r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.backgroundColor='grey';
        r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.color='grey';
        }
    
      sem=0;
      return;
    })
   

  
  }
  exit(){
    end(this.props.func,0)
  }
  render(){
    return(
      <div>
      <div style={this.state.board} >
      {board.map((arr,index)=><Ballrow arr={arr} row={index}/> )}
      </div>
      <div style={this.state.s}onClick={this.exit}></div>
      <Start/>
      </div>
    )
  }
}
function updateballrow(){
  let width=window.innerWidth,height=window.innerHeight
  let h=(2.48)*(height/100)
  let w=(44.64)*(width/100)
  let ballrow={
    height:`${h}px`,
    width: `${w}px`,
    position:'relative',
    display:'inline-block',
    borderCollapse:'collapse',
    borderSpacing:'0',
    padding:'0'
  }
  return ballrow;
}
class Ballrow extends React.Component{
  constructor(props){
    super(props)
    this.state={st:updateballrow()}
    this.resize=this.resize.bind(this)
    window.addEventListener('resize',this.resize)
  }
  resize(){
    this.setState({st:updateballrow()})
  }
  render(){
    return(
      <div style={this.state.st} cellspacing='0'>
        {this.props.arr.map((element,col)=><Mat row={this.props.row} col={col}/>)}
      </div>
    )
  }
}
function updatemat(){
  let width=window.innerWidth,height=window.innerHeight
  let h=(2.254)*(height/100)
  let w=(0.892)*(width/100) 
  let st={
    height:`${h}px`,
width:`${w}px`,
position:'relative',
display: 'inline-block',
borderCollapse: 'collapse',
borderSpacing:'0',
padding:'0',
  }
  return st
}
class Mat extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={st:updatemat()}
    this.resize=this.resize.bind(this)
    window.addEventListener('resize',this.resize)
  }
  resize(){
    this.setState({st:updatemat()});
  }
  render(){
    return(
      <div style={this.state.st}cellspacing='0'>
      </div>
    )
  }
}
function updatebutton1(){
  let width=window.innerWidth,height=window.innerHeight
let h=(22.54)*(height/100)
let w=(11.90)*(width/100)
let b=(62)*(height/100)
let l=(47.61)*(width/100)
let img_bh=(11.27)*(height/100);
let img_bw=(5.95)*(width/100);
let butstyle={
  height:`${h}px`,
  width:`${w}px`,
  bottom:`${b}px`,
  left:`${l}px`,
  backgroundImage: `url(${img})`,
  backgroundRepeat: 'no-repeat no-repeat',
  backgroundSize: `${img_bw}px ${img_bh}px`,
  position: 'relative',
  backgroundColor: 'transparent',
}
return butstyle
}
function updatebutton2(){
  let width=window.innerWidth,height=window.innerHeight
  let h=(22.54)*(height/100)
  let w=(11.90)*(width/100)
  let b=(62)*(height/100)
  let l=(47.61)*(width/100)
  let img_bh=(11.27)*(height/100);
  let img_bw=(5.95)*(width/100);
let pausebut={
  height:`${h}px`,
  width:`${w}px`,
  bottom:`${b}px`,
  left:`${l}px`,
  backgroundImage: `url(${pause})`,
  backgroundRepeat: 'no-repeat no-repeat',
  backgroundSize: `${img_bw}px ${img_bh}px`,
  position: 'relative',
  backgroundColor: 'transparent',
}
return pausebut
}
class Start extends React.Component{
  constructor(){
    super()
    this.handle=this.handle.bind(this);
    this.state={play:false,st:updatebutton2()}
    this.resize=this.resize.bind(this)
    window.addEventListener('resize',this.resize)
    s=this
  }
  resize(){
    this.setState((prev)=>{if(prev.play==true){
      return {play:true,st:updatebutton1()}
    }
    return {play:false,st:updatebutton2()}
  })
  }
  handle(){
    align=0;
    if(this.state.play==false){
      sem=0;
      laddress.setState({s:prev})
      if(mounttest==0){mounttest=1;align=0;util();set();raise()};
      this.setState({play:true,st:updatebutton1()})
    }
    else{
      sem=1;
      laddress.setState({s:t})
      this.setState({play:false,st:updatebutton2()})
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
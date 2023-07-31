import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import img from './start.png'
import pause from './pause.png'
import brick from './brick.png'
import image from './game_logo.png'
let board=[],fakelen;
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
function raise(){
  if(mounttest==0){align=0;return;}
  setTimeout(()=>{
    if(mounttest==0){align=0;return;}

      if(sem==1){raise();return;}
      if(align>0){align--;raise();return;}
     col2=ball.shift()
     
     for(let i=2;i<4;i++){
     r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.backgroundColor=''
     }
     b=ball[ball.length-1]+1;
     if(b==26)b=25;
     ball.push(b);

     for(let i=2;i<4;i++){
      if(      r.childNodes[0].childNodes[0].childNodes[b].childNodes[i].childNodes.length>0){alert("Game over");end(0);return;}
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
  for(let i=0;i<len;i++){
   let t=document.createElement("img")
t.src=brick
t.className='brick';
    r.childNodes[0].childNodes[0].childNodes[i].childNodes[col1].appendChild(t);

  }
  for(let i=len+7;i<26;i++){
   let t=document.createElement("img")
t.src=brick
t.className='brick';
    r.childNodes[0].childNodes[0].childNodes[i].childNodes[col1].appendChild(t);
  }
  queue.push([col1,len]);
  col1--;
   if(col1==24)flag=1;
   if(flag==1){
    if(col3==49)len=rand();
    else len=queue2[queue2.length-1][1];
    for(let i=0;i<len;i++){
     let t=document.createElement("img")
t.src=brick
t.className='brick';
      r.childNodes[0].childNodes[0].childNodes[i].childNodes[col3].appendChild(t)
  
    }
    for(let i=len+7;i<26;i++){
    let t=document.createElement("img")
t.src=brick
t.className='brick';
      r.childNodes[0].childNodes[0].childNodes[i].childNodes[col3].appendChild(t)
    }
    queue2.push([col3,len]);
    col3--;
    if(col3<0)col3=49;
   }
  if(col1<0)col1=49;
 
  util();
},60);
}
function end(fn){
sem=1
 s.handle();
  mounttest=0;


  while(queue.length>0){
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
  while(queue2.length>0){
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
  return;

}
export class BallBoard extends React.Component{
 constructor(props){
  super(props)
  this.exit=this.exit.bind(this)
 }
  componentDidMount(){
    r=document.getElementById('root');

    document.body.addEventListener('keydown',function(){
      if(mounttest==0||sem==1)return;
      align++;
      sem=1;
      col2=ball[ball.length-1];
      ball.pop();
      for(let i=2;i<4;i++){
        r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.backgroundColor='';
        r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.color='';
        }
      col2=Math.max(col2-2,0);
      ball.unshift(col2);

      for(let i=2;i<4;i++){
        if(r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].childNodes.length>0){alert("Game over");end(0);return;}

        r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.backgroundColor='grey';
        r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.color='grey';
        }

      col2=ball[ball.length-1];
      ball.pop();
      for(let i=2;i<4;i++){
        r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.backgroundColor='';
        r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.color='';
        }
      col2=Math.max(col2-2,0);
      ball.unshift(col2);

      for(let i=2;i<4;i++){
        if(      r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].childNodes.length>0){alert("Game over");end(0);return;}

        r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.backgroundColor='grey';
        r.childNodes[0].childNodes[0].childNodes[col2].childNodes[i].style.color='grey';
        }
    
      sem=0;
      return;
    })
   

  
  }
  exit(){
    end(this.props.func)
  }
  render(){
    return(
      <div>
      <div className='BallBoard'  >
      {board.map((arr,index)=><Ballrow arr={arr} row={index}/> )}
      </div>
      <div style={{ float: 'left',
  backgroundImage: `url(${image})`,
  backgroundRepeat: 'norepeat,norepeat',
  backgroundPositionx:'center',
  backgroundPositiony: 'top',
  backgroundSize: '50px 50px',
  height: '50px',
  right:'1600px',
  bottom:'620px',
  width:'50px',
  position: 'absolute'}}onClick={this.exit}></div>
      <Start/>
      </div>
    )
  }
}

class Ballrow extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='Ballrow' cellspacing='0'>
        {this.props.arr.map((element,col)=><Mat row={this.props.row} col={col}/>)}
      </div>
    )
  }
}
class Mat extends React.Component{
  render(){
    return(
      <div className='Mat' cellspacing='0'>
      </div>
    )
  }
}

let butstyle={
  fontSize: '40px',
  height:'200px',
  width:'200px',
  bottom:'550px',
  left:'800px',
  backgroundImage: `url(${img})`,
  backgroundRepeat: 'no-repeat no-repeat',
  backgroundSize: '100px 100px',
  position: 'relative',
  backgroundColor: 'transparent',
}
let pausebut={
  height:'100px',
  width:'100px',
 bottom:'550px',
 left:'800px',
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
    align=0;
    if(this.state.play==false){
      sem=0;
      if(mounttest==0){mounttest=1;align=0;util();set();raise()};
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
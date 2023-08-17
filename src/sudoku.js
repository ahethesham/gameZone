import './index.css'
import React from "react";
import ReactDOM from 'react-dom'
import image from './game_logo.png'
let ans=[]
let util;
function sudoku()
{
let row=[]
let col=[]
let box=[]
let getbox=[]
for(let i=0;i<10;i++)
  {
    ans[i]=[]
    row[i]=[]
    col[i]=[]
    box[i]=[]
    getbox[i]=[]
  }
for(let i=0;i<10;i++)
  {
    for(let j=0;j<10;j++)
      {
        //ans[i][j]=-1;
        row[i][j]=0;
        col[i][j]=0;
        box[i][j]=0;
        getbox[i][j]=-1;
      }
  }
let a=0;
for(let i=0;i<10;i++)
  {
    for(let j=0;j<10;j++)
      {
        if(j==6)
          a++;
        else if(j==3)
          a++;
        getbox[i][j]=a;
      }
    if(i<=1)
      a=0;
    else if(i<=4)
      a=3
    else
      a=6;
  }

function generate( i, j)
{
  if(i==9)
  {
    return 1;
  }
  let avail=[]
  let b=getbox[i][j]
  for(let k=1;k<10;k++)
    {
      if(row[i][k]==0 && col[j][k]==0 && box[b][k]==0)
        avail.push(k)
    }
  for(let k=0;k<avail.length;k++)
    {
      let a=-1
      let ind;
      while(a==-1)
        {
          a=Math.floor(Math.random()*avail.length);
          ind=a
          a=avail[a]
        }
      ans[i][j]=a
      //avail[a]=-1;
      row[i][a]=1;col[j][a]=1;box[b][a]=1;
      if(j==8)
      {
        if(generate(i+1,0)==1)
          return 1;
      }
      else
      {
        if(generate(i,j+1)==1)
          return 1;
      }
      row[i][a]=0;col[j][a]=0;box[b][a]=0;
      avail[ind]=-1
    }
  return 0;
}
generate(0,0)
util=JSON.parse(JSON.stringify(ans));
let i=0;
while(i<50)
  {
    let row=Math.floor(Math.random()*9)
    let col=Math.floor(Math.random()*9)
    if(util[row][col]!=-1)
    {
      i++;
      util[row][col]=-1;
    }
  }
}
sudoku();
export class Sudoku extends React.Component{
    constructor(props){
        super(props)
        this.handleans=this.handleans.bind(this);
        this.handlever=this.handlever.bind(this);
        this.exit=this.exit.bind(this);

    }
    exit(){
      this.props.func()
    }
   handleans(){
    let r=document.getElementById('root').childNodes[0].childNodes[0];
    for(let i=0;i<util.length;i++)
    {
        for(let j=0;j<util[i].length;j++)
        {
    
        r.childNodes[i].childNodes[j].value=ans[i][j];
        util[i][j]=ans[i][j]
        
         }
        
    }
   }
   handlever(){
    let bool=true;
    for(let i=0;i<util.length;i++)
    {if(!bool)break;
        for(let j=0;j<util[i].length;j++)
        if(util[i][j]!=ans[i][j]){bool=false;break;}
    }
    if(bool)alert("Congragulations");
    else
    alert("Try again!");
   }
    render(){
        return (
            <div>
            <div className="Sudoku">
            {util.map((row,index)=><Row arr={row} r={index}/>)}
            </div>
            <div className='ansButton' onClick={this.handleans}>answer</div>
            <div className='verifyButton' onClick={this.handlever}>submit</div>
            
            <div style={{ float: 'left',
  backgroundImage: `url(${image})`,
  backgroundRepeat: 'norepeat,norepeat',
  backgroundPositionx:'center',
  backgroundPositiony: 'top',
  backgroundSize: '50px 50px',
  bottom:'550px',
  height: '50px',
  width:'50px',
  position: 'absolute'}} onClick={this.exit}></div>
  <hr style={{bottom:'520px',position:'absolute'}}/>
           </div>
        )
    }
}
class Row extends React.Component{
   constructor(props){
    super(props)
   }
    render(){
        return (
            <div className="row">
                {this.props.arr.map((ele,index)=>{
                    if(ele===-1)
                    return <Input r={this.props.r}c={index}/>
                    else
                    return <Elements val={ele}/>
                })}
            </div>
        )
    }
}
class Elements extends React.Component{
   constructor(props){
    super(props);
   }
     render(){
        return (
            <div className="def">{this.props.val}</div>
        )
     }
}
class Input extends React.Component{
    constructor(props){
        super(props);
        this.state={r:this.props.r,c:this.props.c};
        this.handle=this.handle.bind(this);
    }
  handle(e){
    let v=e.target.value;
    let t=v;
    if(v==""){util[this.state.r][this.state.c]=-1;return;
    }
    if(v.length>1){alert("Invalid input!");e.target.value="";util[this.props.r][this.props.c]=-1;
}
    v=v.charCodeAt('0');
    if(!(v>=48&&v<=58)){alert('Invalid Input!');e.target.value="";util[this.props.r][this.props.c]=-1;
}
    else
    util[this.props.r][this.props.c]=t;
 

  }
    render(){
        return (
                <input  type="text" className='Input' onKeyUp={this.handle}/>
        )
    }
}

ReactDOM.render(<Sudoku/>,document.getElementById('root'))
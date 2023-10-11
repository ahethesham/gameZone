import React from 'react'
import './index.css'
import image from './game_logo.png'
import { Heading1 } from './heading';
let b=[],address=[]
let input =0;
for(let i=0;i<3;i++){
    let t=[],u=[]
    for(let i=0;i<3;i++){t.push(' ');u.push(' ')}
    b.push(t);address.push(u)
}
let opp="XXX",pla="000"
function check(v,res)
{
  let str="";
  for(let i=0;i<v.length;i++)
    {
      str="";
      for(let j=0;j<v[i].length;j++)
        str+=v[i][j];
      if(str==res)return 1;
    }
  for(let j=0;j<v[0].length;j++)
    {str="";
      for(let i=0;i<v.length;i++)
        str+=v[i][j];
      if(str==res)return 1;
    }
  str="";
  for(let i=0;i<v.length;i++)
    str+=v[i][i];
  if(str==res)return 1;
  str="";
  for(let i=v.length-1;i>=0;i--)
    str+=v[i][v.length-1-i];
  if(str==res)return 1;
  return 0;
}
function help(v,recurs,count,move){
    if(check(v,opp)==1)return 2;
    if(check(v,pla)==1)return 1;
    if(recurs>10)return 3;
    let res=[];
    if(move==1){
        for(let i=0;i<v.length;i++){
            for(let j=0;j<v[i].length;j++){
                if(v[i][j]=='0'){
                    if(i<v.length-1 && v[i+1][j]==' '){
                        let c={count:1}
                        v[i][j]=' ';v[i+1][j]='0';
                       let k=help(v,recurs+1,c,0);
                        res.push([k,c])
                        v[i][j]='0';v[i+1][j]=' ';
                    }
                    if(j<v[i].length-1 && v[i][j+1]==' '){
                        let c={count:1}
                        v[i][j]=' ';v[i][j+1]='0';
                        let k=help(v,recurs+1,c,0);
                        res.push([k,c])
                        v[i][j]='0';v[i][j+1]=' '
                    }
                    if(i>0 && v[i-1][j]==' '){
                        let c={count:1}
                        v[i][j]=' ';v[i-1][j]='0';
                        let k=help(v,recurs+1,c,0);
                        res.push([k,c])
                        v[i][j]='0';v[i-1][j]=' ';
                    }
                    if(j>0 && v[i][j-1]==' '){
                        let c={count:1}
                        v[i][j]=' ';v[i][j-1]='0';
                        let k=help(v,recurs+1,c,0);
                        res.push([k,c])
                        v[i][j]='0';v[i][j-1]=' ';
                    }
                }
            }
        }
        let p1=-1,p2=-1,p3=-1;
        for(let i=0;i<res.length;i++){
            if(res[i][0]==1)p1==-1?p1=res[i][1].count:p1=Math.min(p1,res[i][1].count);
            else if(res[i][0]==2)
            p2=Math.max(p2,res[i][1].count)
            else 
            p3=Math.max(p3,res[i][1].count)
        }
        if(p1!=-1){
            count.count+=p1;
            return 1;
        }
        else if(p3!=-1){
            count.count+=p3;
            return 3;
        }
        count.count+=p2;
        return 2;
    }
    else{
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(v[i][j]=='X'){
                    if(i<2 && v[i+1][j]==' ')
                    {
                        let c={count:1}
                        v[i][j]=' ';v[i+1][j]='X';
                       let k=help(v,recurs+1,c,1);
                        res.push([k,c])
                        v[i][j]='X';v[i+1][j]=' ';                   
                    }
                    if(j<2 && v[i][j+1]==' '){
                        let c={count:1}
                        v[i][j]=' ';v[i][j+1]='X';
                       let k=help(v,recurs+1,c,1);
                        res.push([k,c])
                        v[i][j]='X';v[i][j+1]=' ';
                    }
                    if(i>0 && v[i-1][j]==' '){
                        let c={count:1}
                        v[i][j]=' ';v[i-1][j]='X';
                       let k=help(v,recurs+1,c,1);
                        res.push([k,c])
                        v[i][j]='X';v[i-1][j]=' ';
                    }
                    if(j>0 && v[i][j-1]==' '){
                        let c={count:1}
                        v[i][j]=' ';v[i][j-1]='X';
                       let k=help(v,recurs+1,c,1);
                        res.push([k,c])
                        v[i][j]='X';v[i][j-1]=' ';
                    }
                }
            }
        }
        let p1=-1,p2=-1,p3=-1;
        for(let i=0;i<res.length;i++){
            if(res[i][0]==2)p1==-1?p1=res[i][1].count:res=Math.min(res,res[i][1].count);
            else if(res[i][0]==1)p2=Math.max(p2,res[i][1].count)
            else
            p3=Math.max(p3,res[i][1].count);
        }
        if(p1!=-1){
            count.count+=p1;
            return 2;
        }
        else if(p3!=-1){
            count.count+=p3;
            return 3;
        }
        count.count+=p2;
        return 1;

    }

}
function evalu(b){
    let res=[]
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(b[i][j]=='0'){
                if(i>0 && b[i-1][j]==' '){
                    let k={v:[],win:0,count:0}
                    b[i-1][j]='0';b[i][j]=' ';
                    k.v=JSON.parse(JSON.stringify(b));
                    let c={count:1}
                    let util=JSON.parse(JSON.stringify(b));
                    k.win=help(util,0,c,0);
                    k.count=c.count;
                    res.push(k);
                    b[i-1][j]=' ';b[i][j]='0'
                }
                if(j>0 && b[i][j-1]==' '){
                    let k={v:[],win:0,count:0}
                    b[i][j-1]='0';b[i][j]=' ';
                    k.v=JSON.parse(JSON.stringify(b));
                    let c={count:1}
                    let util=JSON.parse(JSON.stringify(b));
                    k.win=help(util,0,c,0);
                    k.count=c.count;
                    res.push(k);
                    b[i][j-1]=' ';b[i][j]='0';
                }
                if(i<2 && b[i+1][j]==' '){
                    let k={v:[],win:0,count:0}
                    b[i+1][j]='0';b[i][j]=' ';
                    k.v=JSON.parse(JSON.stringify(b));
                    let c={count:1}
                    let util=JSON.parse(JSON.stringify(b));
                    k.win=help(util,0,c,0);
                    k.count=c.count;
                    res.push(k);
                    b[i][j]='0';b[i+1][j]=' ';
                }
                if(j<2 && b[i][j+1]==' '){
                    let k={v:[],win:0,count:0}
                    b[i][j+1]='0';b[i][j]=' ';
                    k.v=JSON.parse(JSON.stringify(b));
                    let c={count:1}
                    let util=JSON.parse(JSON.stringify(b));
                    k.win=help(util,0,c,0);
                    k.count=c.count;
                    res.push(k);
                    b[i][j+1]=' ';b[i][j]='0';
                }
            }
        }
    }
    let res1,res2,res3;
    let p1=-1,p2=-1,p3=-1;
    for(let i=0;i<res.length;i++){
        if(res[i].win==1){
            if(p1==-1||p1>res[i].count){p1=res[i].count;res1=JSON.parse(JSON.stringify(res[i].v))}
        }
        else if(res[i].win==3){
            if(res[i].count>p3){p3=res[i].count;res3=JSON.parse(JSON.stringify(res[i].v))}
        }
        else{
            if(res[i].count>p2){p2=res[i].count;res2=JSON.parse(JSON.stringify(res[i].v))}
        }
    }
    if(p1!=-1)return res1;
    if(p3!=-1)return res3;
    return res2;
}
function help2(b){
    let res=[]
    for(let i=0;i<b.length;i++){
        for(let j=0;j<b[i].length;j++){
            if(b[i][j]==' '){
                let k={v:[],win:0,count:0}
                b[i][j]='0'
                k.v=JSON.parse(JSON.stringify(b));
                let c={count:1}
                let util=JSON.parse(JSON.stringify(b));
                k.win=help(util,0,c,0);
                k.count=c.count;
                res.push(k);
                b[i][j]=' '
            }
        }
    }
    let res1,res2,res3;
    let p1=-1,p2=-1,p3=-1;
    for(let i=0;i<res.length;i++){
        if(res[i].win==1){
            if(p1==-1||p1>res[i].count){p1=res[i].count;res1=JSON.parse(JSON.stringify(res[i]))}
        }
        else if(res[i].win==3){
            if(res[i].count>p3){p3=res[i].count;res3=JSON.parse(JSON.stringify(res[i]))}
        }
        else{
            if(res[i].count>p2){p2=res[i].count;res2=JSON.parse(JSON.stringify(res[i]))}
        }
    }
    if(p1!=-1)return res1;
    if(p3!=-1)return res3;
    return res2;

}
function place(b)
{
  let util="XX",str;
  for(let i=0;i<b.length;i++)
    {
      str="";
      for(let j=0;j<b[i].length;j++)if(b[i][j]!=' ')str+=b[i][j];
      if(str==util){
        for(let j=0;j<b[i].length;j++)if(b[i][j]==' '){b[i][j]='0';address[i][j].setState({element:'0'});
        return  1;}
      }
    }
  for(let j=0;j<b.length;j++)
    {
      str="";
      for(let i=0;i<b.length;i++)
        if(b[i][j]!=' ')
        str+=b[i][j];
      if(str==util){
        for(let i=0;i<b.length;i++)if(b[i][j]==' '){b[i][j]='0';address[i][j].setState({element:'0'});
        return 1 ;}
      }
    }
  str="";
  for(let i=0;i<b.length;i++)
    if(b[i][i]!=' ' )str+=b[i][i];
  if(str==util){for(let i=0;i<b.length;i++)if(b[i][i]==' '){b[i][i]='0';address[i][i].setState({element:'0'});return 1;}}
  str="";
  for(let i=b.length-1;i>=0;i--)
    if(b[i][b.length-1-i]!=' ' )str+=b[i][b.length-1-i];
  if(str==util){
    for(let i=b.length-1;i>=0;i--)
      if(b[i][b.length-1-i]==' '){b[i][b.length-1-i]='0';address[i][b.length-1-i].setState({element:'0'});
    return 1;}
  }
  return 0;
  
}
function place3( b){
    
    let util="00",str;
      for(let i=0;i<b.length;i++)
      {
        str="";
        for(let j=0;j<b[i].length;j++)if(b[i][j]!=' ')str+=b[i][j];
        if(str==util){
           // alert(1)
          for(let j=0;j<b[i].length;j++){if(b[i][j]==' ' ){b[i][j]='0';address[i][j].setState({element:'0'});return  1;}}
        }
      }
    for(let j=0;j<b.length;j++)
      {
        str="";
        for(let i=0;i<b.length;i++)
          if(b[i][j]!=' ')
          str+=b[i][j];
        if(str==util){
            
          for(let i=0;i<b.length;i++){if(b[i][j]==' '){b[i][j]='0';address[i][j].setState({element:'0'});return  1;}}
        }
      }
    str="";
    for(let i=0;i<b.length;i++)
      if(b[i][i]!=' ')str+=b[i][i];

    if(str==util){ 
        for(let i=0;i<b.length;i++){if(b[i][i]==' '){b[i][i]='0';address[i][i].setState({element:'0'});return  1;}}
    }

    str="";
    for(let i=b.length-1;i>=0;i--)
      if(b[i][b.length-1-i]!=' ' )str+=b[i][b.length-1-i];

    if(str==util){

      for(let i=b.length-1;i>=0;i--){
        if(b[i][b.length-1-i]==' '){b[i][b.length-1-i]='0';address[i][b.length-1-i].setState({element:'0'});return  1;}}
     }
    
  return 0;
}
function help3(b){
  let res=[]
    for(let i=0;i<b.length;i++)
    {
      for(let j=0;j<b[i].length;j++)
      {
        if(b[i][j]==' ')
        {
          b[i][j]='0';
          for(let k=0;k<b.length;k++)
          {
            for(let p=0;p<b[k].length;p++)
            {
              if(b[k][p]==' ')
              {
                b[k][p]='X';
                let temp=JSON.parse(JSON.stringify(b));
                let temp2=help2(temp)
                temp2.v[k][p]=' ';
                temp2.v[i][j]=' ';
                res.push(temp2);
                b[k][p]=' ';
              }
            }
          }
          b[i][j]=' ';
        }
      }
    }
    let res1,res2,res3;
    let p1=-1,p2=-1,p3=-1;
    for(let i=0;i<res.length;i++){
        if(res[i].win==1){
            if(p1==-1||p1>res[i].count){p1=res[i].count;res1=JSON.parse(JSON.stringify(res[i]))}
        }
        else if(res[i].win==3){
            if(res[i].count>p3){p3=res[i].count;res3=JSON.parse(JSON.stringify(res[i]))}
        }
        else{
            if(res[i].count>p2){p2=res[i].count;res2=JSON.parse(JSON.stringify(res[i]))}
        }
    }
    if(p1!=-1)return res1;
    if(p3!=-1)return res3;
    return res2;

}
function play(){

    if(input==1){
        while(1)
        {
            let row2,col2;
          row2=Math.floor(Math.random()*3);
          col2=Math.floor(Math.random()*3);
          if(b[row2][col2]!=' ')continue;
          b[row2][col2]='0';
          for(let i=0;i<b.length;i++)
          {
           for(let j=0;j<b[i].length;j++)
           {
              if(b[i][j]==' ')
              address[i][j].setState({element:'.'})
              else
              address[i][j].setState({element:b[i][j]})
           }
          }
          break;
      }
    }
    else if(input==2){
        if(place(b)==0){
             let k=help3(b);
             b=JSON.parse(JSON.stringify(k.v));
             for(let i=0;i<b.length;i++)
             {
              for(let j=0;j<b[i].length;j++)
              {
                 if(b[i][j]==' ')
                 address[i][j].setState({element:'.'})
                 else
                 address[i][j].setState({element:b[i][j]})
              }
             }
          }
    }
    else if(input==3){
    if(place(b)==0)
    {
       if(place3(b)==0){
         let k=help2(b);
         b=JSON.parse(JSON.stringify(k.v));
         for(let i=0;i<b.length;i++){
            for(let j=0;j<b[i].length;j++){
              if(b[i][j]==' ')
              address[i][j].setState({element:'.'})
              else
              address[i][j].setState({element:b[i][j]})       
            }
         } 
       }
   
    }

   }
   else{
    let k=evalu(b);
    b=JSON.parse(JSON.stringify(k))
    
     for(let i=0;i<b.length;i++){
        for(let j=0;j<b[i].length;j++){
          if(b[i][j]==' ')
          address[i][j].setState({element:'.'})
          else
          address[i][j].setState({element:b[i][j]})     
         }
     }    
   }
    
}
function updateboard(){
  let width=window.innerWidth,height=window.innerHeight;
  let t=(11.27)*(height/100)
  let l=(35.71)*(width/100)
  let w=(23.8)*(width/100)
  let h=(45.09)*(height/100)
  let st={
    position:'relative',
    top:`${t}px`,
    left:`${l}px`,
    height:`${h}px`,
    width:`${w}px`,
    display:'inline-block'
  }
  return st;
}

export class TicTac extends React.Component{
    constructor(props){
        super(props)
        this.state={board:updateboard()}
        this.exit=this.exit.bind(this);
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
      this.setState({board:updateboard()})
    }
exit(){
   b=[];address=[]
input =0;
for(let i=0;i<3;i++){
    let t=[],u=[]
    for(let i=0;i<3;i++){t.push(' ');u.push(' ')}
    b.push(t);address.push(u)
}
  this.props.func();
}
    render(){
        return(
          <>
          <Heading1/>
            <div style={this.state.board}>
               { b.map((arr,i)=><Ticrow i={i} arr={arr}/>)}
            </div>
            </>
        )
    }
}
function updaterow(){
  let width=window.innerWidth/100,height=window.innerHeight/100
 // let t=Math.sqrt(width*width+height*height);
  let font=Math.min((3.38)*(height),(1.78)*width)
  let h=(14.65)*height
  let w=(22.61)*(width)
  let b=Math.min((0.33)*height,(0.17)*width)
  let st={
    position:'relative',
    display:'inline-block',
    height:`${h}px`,
    width: `${w}px`,
    fontSize:`${font}px`,
    border:`${b}px solid wheat`,
    overflow:`auto`,
  }
  return st;
}
class Ticrow extends React.Component{
    constructor(props){
        super(props)
        this.state={st:updaterow()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
      this.setState({st:updaterow()});
    }
    render(){
        return(
            <div style={this.state.st}>
                {this.props.arr.map((element,j)=><Ticelement e={element} i={this.props.i} j={j}/>)}
           
  </div>
        )
    }
}
let current,row,col
function updateele(){
  let width=window.innerWidth/100,height=window.innerHeight/100;
  let h=(14.09)*(height)
  let w=(7.14)*width
  let f=Math.min((11.27)*height,(5.95)*width)
  let b=Math.min((0.22)*height,(0.11)*width)
  let st={
    position: 'relative',
    display: 'inline-flex',
    height:`${h}px`,
    width:`${w}px`,
    border:`${b}px solid wheat`,
    textAlign: 'top',
    fontSize: `${f}px`,
    fontVariantPosition: 'normal',
    color:'aliceblue',
    overflowWrap:'break-word',
    wordWrap    : 'break-word',

  }
  return st;
}
function updatetext(){
  let width=window.innerWidth/100,height=window.innerHeight/100
  let h=(1.01)*height;
  let w=(5.95)*width
  let st={
    position:'relative',height:`${h}px`,width:`${w}px`,
    textAlign:'top',
  }
  return st;
}
class Ticelement extends React.Component{
    constructor(props){
        super(props)
        this.state={element:'.',st:updateele(),textst:updatetext()}
        address[this.props.i][this.props.j]=this
        this.handleclick=this.handleclick.bind(this)
        this.dragover=this.drageover.bind(this)
        this.dragging=this.dragging.bind(this)
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
      this.setState((prev)=>{
        return {element:prev.element,st:updateele(),testst:updatetext()}
      })
    }
    handleclick(){
        input++;
        if(input>3)return;
        
        b[this.props.i][this.props.j]='X'
        this.setState({element:'X',st:updateele(),textst:updatetext()})
        play()
    
    }
    dragging(){
        input++;
        current=this.state.element
        row=this.props.i;
        col=this.props.j;
    }
    drageover(){
        input++;
        if(this.state.element!='.'||b[row][col]==' ')return;
        b[row][col]=' '
        b[this.props.i][this.props.j]=current
        address[row][col].setState({element:'.',st:updateele(),textst:updatetext()})
        this.setState({element:current,st:updateele(),textst:updatetext()})
        play()
    }
    render(){
        return(
            <div style={this.state.st} onClick={this.handleclick} draggable='true' onDrag={this.dragging} onDragLeave={this.dragover}>
                <text style={this.state.textst}>
                {this.state.element}
                </text>
            </div>
        )
    }
}

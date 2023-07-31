import React from 'react'
import ReactDOM from 'react-dom'
import './github.css'

export class Github extends React.Component{
    constructor(){
        super()
        this.state={username:'',flag:false}
    }
     
    render(){
        return (
            <div>
            <div className='Heading'>
                <div className='gitcat'>.</div>
                <div className='githeading'>Git Explorer</div>
                <div className='searchicon'  onClick={()=>this.setState((prev)=>{return {username:prev.username,flag:true}})}></div>
                <input className='searchbar' style={{border:'1px solid white'}}type="text" onKeyUp={(e)=>this.setState({username:e.target.value,flag:false})}/>
            </div>
            <hr />
            <div > 
              
                {this.state.flag==true && <Information name={this.state.username}/>}
            </div>
            </div>
        )
    }
}
class Information extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={user:'',followers:false,following:false,Repos:false}
        fetch(`https://api.github.com/users/${this.props.name}`).then((res)=>res.json()).then((res)=>{this.setState((prev)=>{return{user:res,followers:false,following:false,Repos:false}})})
        this.getFollowers=this.getFollowers.bind(this)
        this.getRepos=this.getRepos.bind(this)
    }
    getFollowers(){
        if(this.state.followers!=false){
            this.setState((prev)=>{return {user:prev.user,followers:false,following:prev.following,Repos:prev.Repos,starred_repos:prev.starred_repos}})
            return;
        }
        fetch(this.state.user.followers_url+"?per_page=30").then((res)=>res.json()).then((res)=>{this.setState((prev)=>{return {user:prev.user,followers:res,following:prev.following,Repos:false}})})
    }
    getRepos(){
        if(this.state.Repos!=false){
            this.setState((prev)=>{return {user:prev.user,followers:prev.followers,following:prev.following,Repos:false,starred_repos:prev.starred_repos}})
            return;
        }
        fetch(this.state.user.repos_url+"?per_page=30").then((res)=>res.json()).then((res)=>{this.setState((prev)=>{return {user:prev.user,followers:false,following:false,Repos:res}})})
    }
 
    render(){
        return (  <div >
            {this.state.user!='' && 
            <div>
                    <div>
                    <label htmlFor='username' style={{fontWeight:'bold',color:'white',top:'100px',left:'50px',position:'relative',height:'50px'}}>Username:</label>
                    <div id='username' className='Username'>{this.state.user.login}</div>
                    </div>
                    <div>
                    <label htmlFor='createdon' style={{fontWeight:'bold',color:'white',top:'100px',left:'50px',position:'relative',height:'50px'}}>Created_on:</label>
                    <div id='createdon' className='created_on'>{this.state.user.created_at}</div>
                    </div>
                    <div>
                    <label htmlFor='Name' style={{fontWeight:'bold',color:'white',top:'100px',left:'50px',position:'relative',height:'50px'}}>Name:</label>
                    <div id='Name' className='name'>{this.state.user.name}</div>
                  
                    </div>
                <img className='image'src={this.state.user.avatar_url}></img>
                <br></br>
                <div >
                    <label htmlFor='followers_but' style={{left:'60px',fontSize:'20px',fontWeight:'bold',position:'relative',top:'80px',color:'white',}} >Followers</label>
                    <button  id='followers_but'className='followers_but' onClick={this.getFollowers}>^</button>
                    <label htmlFor='repos_but' style={{display:'inline-block',fontSize:'20px',left:'200px',fontWeight:'bold',position:'relative',top:'80px',color:'white'}}>Repos</label>
                    <button  id='repos_but' className="repos" onClick={this.getRepos}>^</button>
                   
                    
                </div>
                <br></br><br></br><br></br><br></br>
                {this.state.followers!=false &&   <div className='followers_list'>{this.state.followers.map((users)=><li style={{color:'white',height:'70px',position:'relative',fontSize:'larger',border:'0.001mm solid #333234',fontWeight:'bolder'}}>
                    {users.login}</li>)}</div>}
            {this.state.Repos!=false &&   <div className='repos_list'>{this.state.Repos.map((r)=><a href={r.url}style={{color:'white',display:'list-item',heigth:'150px',width:'100%',position:'relative',border:'0.0001cm solid #333234',fontSize:'larger',fontWeight:'bolder'}}>
                {r.name}</a>)}</div>}
              
                </div>
            }
        </div>)
    }
}

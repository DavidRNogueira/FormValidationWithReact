import React, {Component} from 'react'


class LogIn extends Component{
state={
    username:"",
    password:""
}
 

handleChangeUser = (e) => {
        this.setState({
            username:e.target.value
        })

    }

handleChangePass= (e) => {
    this.setState({
        password: e.target.value
    })

    }
    
handleClick = (e) => {

  

    let users =[
        {
            username: "davidrnogueira",
            password: "david"
        },
        {
            username: "admin",
            password:"admin"
        }
    ] 

    const {username,password} = this.state
    document.getElementById("errormessage").innerHTML="ERROR";


for(let i=0;i<users.length;i++){
    if(username === users[i].username && password === users[i].password){
    document.getElementById("errormessage").innerHTML="GRANTED";
       window.open( "/dashboard","_self") 
    }

    if (username !== users[i].username && password === users[i].password){
        
            document.getElementById("errormessage").innerHTML="Wrong Username!";
            document.getElementById("errormessage").style.color="red";
            
                
    }
    if (username === users[i].username && password !== users[i].password){
        document.getElementById("errormessage").innerHTML="Wrong Password!";
        document.getElementById("errormessage").style.color="red";
    }

   }
       
     if(document.getElementById("errormessage").innerHTML === "ERROR"){
        document.getElementById("errormessage").innerHTML="Your email and password do not match our records.";
        document.getElementById("errormessage").style.color="red";
     }   

    }




render(){
    return ( 
        <div className="logincontainer">
        <h1 id="header">Log In</h1>
        
        <form name="login">
            <label id="userlabel" htmlFor="username">Username</label>
            <input id="userinput" onChange={this.handleChangeUser.bind(this)} />
            <br/>
            <label id="passlabel" htmlFor="password">Password</label>
            <input id="passinput" type="password" onChange={this.handleChangePass.bind(this)}/>
            <br/>
        </form>
        <button onClick={this.handleClick.bind(this)} id="submitbtn">Submit</button>
    
        <br/>
        <p id="errormessage">ERROR</p>
     </div>
     
     )
}
    

}

export default LogIn 
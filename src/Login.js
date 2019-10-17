import React, {Component} from 'react'


class LogIn extends Component{
state={
    username:"",
    password:"",
    wrongUser:false,
    wrongPassword:false,
    wrongInput:false
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
            password:"admin",
            
        }
    ] 

    const {username,password} = this.state
    this.setState({
        wrongInput:true,
        wrongUser:true,
        wrongPassword:true
    })

for(let i=0;i<users.length;i++){
    if(username === users[i].username && password === users[i].password){
       window.open( "/dashboard","_self");
       this.setState({
        wrongInput:false,
        wrongUser:false,
        wrongPassword:false
    })
    }

    if (username !== users[i].username && password === users[i].password){
        
            this.setState({
                wrongPassword:false,

            })
            
                
    }
    if (username === users[i].username && password !== users[i].password){
        
        this.setState({
            wrongUser:false,
        })
    }
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
        {(this.state.wrongUser === true && this.state.wrongPassword === false) && 
        <p style={{color : this.state.wrongUser ? 'red' : 'lightblue'}} id="errormessage">Wrong Username!</p>}

        {(this.state.wrongPassword === true && this.state.wrongUser === false) && 
        <p style={{color : this.state.wrongPassword ? 'red' : 'lightblue'}} id="errormessage">Wrong Password!</p>}

        {(this.state.wrongPassword === true && this.state.wrongUser === true) && 
        <p style={{color : this.state.wrongInput ? 'red' : 'lightblue'}} id="errormessage">Your email and password do not match our records.</p>}
        
     </div>
     
     )
}
    

}

export default LogIn 
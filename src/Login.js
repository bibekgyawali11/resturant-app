import React from 'react';
import './Login.css';
import history from './history';

//let time = new Date().toLocaleString();

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      time: this.currentTime(),
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.show_message = this.show_message.bind(this);
  }

  currentTime() {
    return new Date().toLocaleTimeString();
  };

  componentDidMount() {
    this.interval = setInterval(() => this.setState({time: this.currentTime()}), 1)
  };
  
  componentWillUnmount(){
    clearInterval(this.interval);
  };

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event){

    if(this.state.username==="bibek123" && this.state.password==="123"){
    alert('Authorized User');
    }

    else{
      alert('Please provide a valid username!');
    }
    event.preventdefault();

  }

  show_message(){
    alert('The page is being made');
    //event.preventdefault();
  }

  render() {
    const {username, password } = this.state;
    return (
      <header className = "LoginHeader">
      <img src={require('./img/mwf_logo.png')} alt="avatar" height="200px" width="350px"/>
      <div className="App">
      <h3>Login Form</h3>
      <form className="login_form" onSubmit={this.handleSubmit}>
        <label>
        Username:
        <input
          value={username}
          onChange={this.handleInputChange}
          name="username"
          required
        />
        </label><br/>
        <label>
        Password:
        <input
          value={password}
          onChange={this.handleInputChange}
          type="password"
          name="password"
          required
        />
        </label><br/>
        <input type="submit" value="Submit"/><br/> 
      </form>
      
      <button className="join_button" onClick={() => history.push('/Enroll')}>Join Now</button>
      </div>
      <h5>Time Elapsed: {this.state.counter}</h5>
      <h4>Username Typed is: {this.state.username}</h4>
      <h4>Password Typed is: {this.state.password}</h4>
      <div className="footer_clock">
       Current Time: {this.state.time}
      </div>
      </header>
    );
  }
}

export default Login;
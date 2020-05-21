import React from 'react';
import './Enroll.css';
import history from '../history';
import axios from 'axios';
import * as emailjs from 'emailjs-com'

let time = new Date().toLocaleString();

class Enroll extends React.Component{
    constructor(props){
        super(props);
        this.state={
           firstname: "",
           lastname: "",
           phonenumber: "",
           email: "",
           birthdate: "",
           username: "",
           password: "",
           password_1: ""

        }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        this.setState({
            [event.target.name]: event.target.value
          });

    }
    handleSubmit(event){
      event.preventDefault();

      if (this.state.password!==this.state.password_1){
        alert('Password Doesn\'t Match');
        return;
      }

        const user = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          phonenumber: this.state.phonenumber,
          email: this.state.email,
          birthdate: this.state.birthdate,
          username: this.state.username,
          password: this.state.password
        }
    
        console.log(user);
    
        axios.post('http://localhost:5000/users/add', user)
          .then(res => console.log(res.data));
    
        alert('thank you');

        let subject= 'Thank you for Signing Up!';
        let message = 'This email is to confirm your sign up on the MWF Pattern\nThank you !'

        let templateParams = {
          from_name: 'MWF Burger Joint',
          to_name: this.state.email,
          subject: subject,
          message_html: message,
         }
        
         emailjs.send(
          'gmail',
          'template_v9hS8O7e',
           templateParams,
          'user_WUtgwA3B4Quls40Dh8otG'
         )

        this.setState({
          firstname: "",
          lastname: "",
          phonenumber: "",
          email: "",
          birthdate: "",
          username: "",
          password: "",
          password_1: ""
        })

        history.push('/');
    }
    render() {
        const {firstname, lastname, phonenumber, email, birthdate, username, password, password_1} = this.state;

        var invalid_class_name = false;

        if (password_1!=="" && password!==password_1){
            invalid_class_name = true;
        }

        console.log(invalid_class_name);
        return (
          <div className="App">
          <button className = "back_button" onClick={() => history.push('')}> Back</button>
          <img src={require('../img/mwf_logo.png')} alt="avatar" height="200px" width="350px"/>

          <h3>New Member Join In</h3>
          <form className="login_form" onSubmit={this.handleSubmit}>
          <label>
            Firstname:
            <input
              value={firstname}
              onChange={this.handleInputChange}
              name="firstname"
              required
            />
            </label><br/>
            <label>
            Lastname:
            <input
              value={lastname}
              onChange={this.handleInputChange}
              name="lastname"
              required
            />
            </label><br/>
            <label>
            Email:
            <input
              value={email}
              type="email"
              onChange={this.handleInputChange}
              name="email"
              required
            />
            </label><br/>
            <label>
            Phonenumber:
            <input
              value={phonenumber}
              onChange={this.handleInputChange}
              name="phonenumber"
              required
            />
            </label><br/>
            <label>
              Birthdate
              <input
              value = {birthdate}
              onChange = {this.handleInputChange}
              name="birthdate"
              type="date"
              />
            </label><br/>
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
            <label>
            Re-Password:
            <input
              value={password_1}
              className={invalid_class_name ? "not-match" : ""}
              onChange={this.handleInputChange}
              type="password"
              name="password_1"
              required
            />
            </label><br/>
            <input type="submit" value="Submit" /><br/> 
          </form>
          Time Elapsed: {this.state.counter} seconds <br/>
          <div className="footer_clock">
            {time}
          </div>
          </div>
        );
      }
}

export default Enroll;
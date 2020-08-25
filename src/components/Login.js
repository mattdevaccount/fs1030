import React from 'react';
import '../styles/App.scss';
import '../styles/loginStyle.css';
import Footer from './Footer';
import Data from './Data'
import { Form, FormGroup, Input, Label, Button, Container } from 'reactstrap'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {loggedIn: false, userName: '', password: '', jwt:''};

    this.loginCheck = this.loginCheck.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.logOut = this.logOut.bind(this)
    };

handleChange = (e) => {
  this.setState({[e.target.id]: e.target.value})
}

logOut = (e) => {
  e.preventDefault()
  this.setState({loggedIn: false})
}

loginCheck = async (e) => {
  e.preventDefault()
  const response = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({email: this.state.userName, password: this.state.password})
        })
  const data = await response.json();
        this.setState({jwt:data.token})
        console.log(data);
  if (this.state.userName === 'MattDevAccount' && this.state.password === 'password'){
    this.setState({loggedIn: true}) 
    } else {
      alert('Incorrect Credentials');
  }
}

  render () {
    return (
    <Container className='loginBody'>
      { this.state.loggedIn ? <Container><Button onClick={this.logOut}>Log Out</Button> <Data jwt={this.state.jwt} /> </Container>
      : <Container>
      
      <h1>Admin Login</h1>
          <Form className='loginForm' onSubmit={this.loginCheck}>

            <FormGroup>
              <Label htmlFor='userName' >User Name: </Label>
              <Input htmlFor='username' id='userName' onChange={this.handleChange}></Input>
            </FormGroup>

            <FormGroup>
              <Label htmlFor='password'>Password: </Label>
              <Input htmlFor='password' type='password' id='password' onChange={this.handleChange}></Input>
            </FormGroup>

            <FormGroup>
                <Button>Submit</Button>
            </FormGroup>
          </Form> 
        </Container>
      }
        
        <Footer />
    </Container>
    )
  };
};

export default Login;

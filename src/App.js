import React, {Fragment} from 'react';
import './styles/App.scss';
import './styles/mainStyle.scss'
import './styles/navStyle.scss';
import Nav from './Nav';
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Login from './components/Login'
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component = {Contact} />
          <Route path='/portfolio' component = {Portfolio} />
          <Route path='/login' component = {Login} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <Fragment>
  <div className = 'typewriter'>
    <h1>Hey there, I'm Matt !</h1>
  </div>

  <section className = 'introText'>
      <p>Welcome to my page ! I'm a student pursuing my Full Stack Certification who loves to create websites!</p>
      <p>I'm also <span class='replaced'></span></p>
  </section>

  <section className='moreAbout'>
    <img className='avatar' src = {require('./images/avatar.png')} alt = 'avatar' />
    <p className='moreText'>Let's build something special together! Whether you're looking to find more functionality, flexibility or fun on your project, I'm your guy!</p>
  </section>

  <section className='languageLogos'>
    <p>Here are some of my competencies, including some of the skills used for this site !</p>
    <img className='logos' src = {require('./images/logos.png')} alt = 'javascript' />
    <img className='reactLogo' src = {require('./images/reactLogo.png')} alt = 'reactjs' />
    <img className='nodeLogo' src = {require('./images/nodeLogo.png')} alt = 'nodejs' />
  </section>


<Footer />
  </Fragment>
)

export default App;

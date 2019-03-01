import React, { Component } from 'react';
import axios from 'axios';
import {NavLink, Link, Route} from 'react-router-dom';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import smurfBackground from './assets/smurfposter.jpg';



const appStyle = {
  backgroundImage: `url(${smurfBackground})`
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error:''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(error => {
        console.log(error);
        this.setState({error:error});
      });
  }

  addSmurfPost = (event, smurf) => {
    event.preventDefault();
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        this.setState({
          smurfs: response.data
        })
        this.props.history.push('/smurfs');
      })
      .catch(error => {
        console.log(error);
        this.setState({error:error});
      });
  }

  removeSmurf = (event, id) => {
    event.preventDefault();
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      this.setState({
        smurfs: response.data
      });
      // this.props.history.push('/friends');
    })
    .catch(error => {
      console.log(error);
    });
  }


  // add any needed code to ensure that the smurfs collection exists on state and it has data 
  // coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App" style={appStyle}>
        <header>
          <h1><Link to='/'>Smurf Village</Link></h1>
        </header>
        
        <nav className='header-links'>
          <NavLink to='./add-smurf' className=''>Add Smurf</NavLink>
          <NavLink to='./smurfs' className=''>See All Smurfs</NavLink>
        </nav>

        {/* <SmurfForm addSmurfPost={this.addSmurfPost} /> */}
        {/* <Smurfs smurfs={this.state.smurfs} removeSmurf={this.removeSmurf} /> */}

        <Route
          path='/'
        />
        <Route 
          path='/add-smurf'
          render={props => (
            <SmurfForm 
              {...props} 
              addSmurfPost={this.addSmurfPost}
            />
          )}
        />
        <Route 
          path='/smurfs'
          render={props => (
            <Smurfs 
              {...props} 
              smurfs={this.state.smurfs}
              removeSmurf={this.removeSmurf}
            />
          )}
        />
        
      </div>
    );
  }
}

export default App;

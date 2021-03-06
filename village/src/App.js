import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfProfile from './components/SmurfProfile';
import Header from './components/Header';

import smurfBackground from './assets/smurfposter.jpg';

// Structure here is simple, I'm going to use my prototype 
// arrow whiteboard to visualize the layout...
//  index ---> App _________
//            / | \          \
//      Header  |  Smurfs      \
//              |     \         |
//              |    Smurf      |
//              |        \      |
//      SmurfProfile     SmurfForm
/////////////////////////////////////////////////////////

// Background image style
const appStyle = {
  backgroundImage: `url(${smurfBackground})`
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf: [],
      activeSmurfID:'',
      error:''
    };
  }

  // This is the READ in CRUD
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

  // This is the CREATE in CRUD
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

  // This is the DELETE in CRUD
  removeSmurf = (event, id) => {
    event.preventDefault();
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      this.setState({
        smurfs: response.data
      });
      this.props.history.push('/smurfs');
    })
    .catch(error => {
      console.log(error);
    });
  }

  setActiveSmurf = (event, smurfFromState, destination) => {
    event.preventDefault();
    this.setState({
      activeSmurf: smurfFromState
    });
    this.props.history.push(destination);
  }

  setSmurfProfile = (smurfProfileNum) => {
    this.setState({
      activeSmurfID: smurfProfileNum
    });
  }

  render() {
    return (
      <div className="App" style={appStyle}>
        
        <Header />

        <Route
          exact
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
          exact
          path='/smurfs'
          render={props => (
            <Smurfs 
              {...props} 
              smurfs={this.state.smurfs}
              removeSmurf={this.removeSmurf}
              setActiveSmurf={this.setActiveSmurf}
            />
          )}
        />

        <Route
          exact
          path='/smurfs/:id'
          render={props => (
            <SmurfProfile 
              {...props}
              smurfs={this.state.smurfs}
              activeSmurf={this.state.activeSmurf}
              setSmurfProfile={this.setSmurfProfile}
              activeSmurfID={this.state.activeSmurfID}
            />
          )}
        />
        
      </div>
    );
  }
}

export default App;

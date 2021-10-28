import React, { Component } from 'react';
import Profile from './components/Profile';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      shows: true
    }
  }

  handleClick=()=>this.setState({shows: false})

  render(){
  return (
    <div className="App">
      {this.state.shows ? (
          <div className="mainDiv">
            <Profile showState={this.state.shows} />
          </div>
        ) : null}
      <button onClick={this.handleClick}>{this.state.shows ? "Hide" : "Show"}</button>
    </div>
  );
  }
}

export default App;

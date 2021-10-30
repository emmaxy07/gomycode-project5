import React, { Component } from 'react'

class Profile extends Component {
    state = {
      shows: false,
      Person :{
      fullName: 'Emmanuel Omole',
      bio: 'I am a solution provider',
      imgSrc: 'Emmanuel.jpg',
      profession: 'Software Engineer',
      },
      Time: 0
  }


  handleOpenProfile=()=>{
    this.setState({
      shows: true,
      Person:{
      fullName: 'Emmanuel Omole',
      bio: 'I am a solution provider',
      imgSrc: 'Emmanuel.jpg',
      profession: 'Software Engineer'
      }
    })
  }

  handleClosedProfile=()=>{
    this.setState({
      shows: false,
      Person:{
      fullName: '',
      bio: '',
      imgSrc: '',
      profession: ''
      }
    })
  }

  tick() {
    this.setState(state => ({
      Time: state.Time + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  render(){
    return(
      <div>
        <img src={this.state.Person.imgSrc} alt='img' />
        <h3>{this.state.Person.fullName}</h3>
        <h3>{this.state.Person.bio}</h3>
        <h3>{this.state.Person.profession}</h3>
        <p>This component was mounted {this.state.Time}s ago</p>
        <button onClick={this.state.shows === 'true' ? this.handleOpenProfile: this.handleClosedProfile}>{this.state.shows === 'true' ? "Show" : "Hide"}</button>
      </div>
    )
  }
}

export default Profile
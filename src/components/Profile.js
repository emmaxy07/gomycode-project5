import React, { Component } from 'react'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      fullName: 'Emmanuel Omole',
      bio: 'I am a solution provider',
      imgSrc: 'https://images.search.yahoo.com/images/view;_ylt=AwrExdxpsXlhJB4A6ReJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzZmZDk0ZGU2ZThiODY5NjUxMDhmZGFjNDRhYjBhYjA2BGdwb3MDMTEwBGl0A2Jpbmc-?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Demmanuel%2Bomole%26type%3DE210US91082G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D110&w=400&h=400&imgurl=tweet.kayg.org%2Fpic%2Fprofile_images%252F1214863325563170816%252FdZ6kg0jt_400x400.jpg&rurl=https%3A%2F%2Ftweet.kayg.org%2FBgsValentin&size=22.9KB&p=emmanuel+omole&oid=6fd94de6e8b86965108fdac44ab0ab06&fr2=piv-web&fr=mcafee&tt=Valentin+%28%40BgsValentin%29+%7C+K+Gopal+Krishna%26%2339%3Bs+Nitter&b=61&ni=21&no=110&ts=&tab=organic&sigr=WGvO.lmxhh0v&sigb=a2duf4Pd1OiN&sigi=ESTgd.lEv5qs&sigt=Uo1L_JwJxL0z&.crumb=g54w.3benrN&fr=mcafee&fr2=piv-web&type=E210US91082G0',
      profession: 'Software Engineer',
      Time: 0,
      shows: true
    }
  }

  tick() {
    this.setState(state => ({
      Time: state.Time + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  // isShowing = () => {
  //   this.setState({shows: false})
  // }


  render(){
    return(
      <div>
        <img src={this.state.imgSrc} alt='img' />
        <h3>{this.state.fullName}</h3>
        <h3>{this.state.bio}</h3>
        <h3>{this.state.profession}</h3>
        <p>This component was mounted {this.state.Time}s ago</p>
      </div>
    )
  }
}

export default Profile
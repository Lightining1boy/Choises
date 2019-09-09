import React from 'react';
import {MainPage, LogInButton, LogInText} from '../Styles/AppStyles.jsx'
import axios from 'axios';
import CreateProfile from './CreateProfile.jsx';
import { userInfo } from 'os';
import ChooseYourStory from './ChooseYourStory.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      UserName: '',
      Password: '',
      stories: [],
      newUserClicked: false,
    };
    this.logInData = this.logInData.bind(this);
    this.logIn = this.logIn.bind(this);
    this.newUser = this.newUser.bind(this);
    this.sendNewUser = this.sendNewUser.bind(this);
  }

  
  sendNewUser(newUser) {
    this.setState({
      UserName: newUser.newUsername, 
      Password: newUser.newPassword,
      newUserClicked: false,
    });
    const {newUsername, newPassword} = newUser;

    axios.post('/newUser', {UserName: newUsername, Password: newPassword})
    .then((Response) => {
      this.setState({isLoggedIn: true});
    })
    .catch((err) => {
      console.log('err', err);
    })
  }

  newUser() {
    this.setState({newUserClicked: true});
  }

  logInData(event) {
    const {value, name} = event.target;
    this.setState({[name]: value});
  }

  logIn() {
    const {UserName, Password} = this.state;
    axios.get('/logIn', {params: {username: UserName, password: Password}})
    .then((Response) => {
      if (Response.data.length === 0) {
        alert('Profile not found');
      } else {
        this.setState({isLoggedIn: true})
      }
    })
    .catch((err) => {
      console.log('err', err);
    })
  }

  render() {
    const {isLoggedIn, UserName, Password, newUserClicked} = this.state;
    if (newUserClicked) {
      return (<CreateProfile sendNewUser={this.sendNewUser}/>)
    } 
    else if (!isLoggedIn) {
      return (
      <MainPage>
        Your Story Begins Here!
        <br/>
        <LogInText placeholder='  Enter UserName' value={UserName} name='UserName' onChange={(e) => this.logInData(e)}/>
        <br/>
        <LogInText placeholder='  Enter Password' value={Password} name='Password' onChange={(e) => this.logInData(e)}/>
        <br/>
        <LogInButton onClick={this.logIn}>Log In!!</LogInButton>
        <br/>
        <br/>
        <LogInButton onClick={this.newUser}> Create A New Profile!! </LogInButton>
      </MainPage>
      )
    }
    return(
      <MainPage>
        <ChooseYourStory/>
      </MainPage>
    )
  }
}
export default App;
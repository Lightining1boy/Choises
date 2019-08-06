import React from 'react';
import {MainPage, LogInButton, LogInText} from '../Styles/AppStyles.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      UserName: '',
      Password: '',
      storys: [],
    };
    this.logInData = this.logInData.bind(this);
    this.logIn = this.logIn.bind(this);
  }
  
  logInData(event) {
    const {value, name} = event.target;
    this.setState({[name]: value});
  }

  logIn() {
    const {UserName, Password} = this.state;
    axios.get('/logIn', {params: {UserName: UserName, Password: Password}})
    .then((Response) => {
      console.log(Response);
      this.setState({isLoggedIn: true})
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    const {isLoggedIn, UserName, Password} = this.state;
    if (!isLoggedIn) {
      return (
      <MainPage>
        This Is Story!
        <br/>
        <LogInText placeholder='Enter UserName' value={UserName} name='UserName' onChange={(e) => this.logInData(e)}/>
        <br/>
        <LogInText placeholder='Enter Password' value={Password} name='Password' onChange={(e) => this.logInData(e)}/>
        <br/>
        <LogInButton onClick={this.logIn}>Log In</LogInButton>
      </MainPage>
      )
    }
    return(
      <MainPage>
        hello world!!
      </MainPage>
    )
  }
}
export default App;
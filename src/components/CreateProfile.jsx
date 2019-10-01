import React from 'react';
import {MainPage, LogInButton, LogInText} from '../Styles/AppStyles.jsx'

class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUsername: '',
      newPassword: ''
    };
    this.createNewUser = this.createNewUser.bind(this);
  }

  createNewUser(e) {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  render() {
    const {sendNewUser, createProfileCanceled} = this.props;
    const {newUsername, newPassword} = this.state;
    return (
      <MainPage>
        <LogInText placeholder='Enter New Username' onChange={(e) => this.createNewUser(e)} value={newUsername} name='newUsername'/>
        <br/>
        <LogInText placeholder='Enter New Password' onChange={(e) => this.createNewUser(e)} value={newPassword} name='newPassword'/>
        <br/>
        <LogInButton onClick={() => sendNewUser(this.state)}> Create Profile </LogInButton>
        <br/>
        <LogInButton onClick={() => createProfileCanceled()}>Cancel</LogInButton>
      </MainPage>
    )
  }
}
export default CreateProfile;
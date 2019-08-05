import React from 'react';
import {MainPage} from '../Styles/AppStyles.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <MainPage>
        hello world!!
      </MainPage>
    )
  }
}
export default App;
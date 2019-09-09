import React from 'react';
import {ChoiceButtons, Description} from '../Styles/ChosenStoryStyle.jsx'
class ChosenStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: this.props.chosenStory[0],
      story: this.props.chosenStory
    }
    this.choiceButtonClicked = this.choiceButtonClicked.bind(this);
  }
  
  choiceButtonClicked(path) {
    this.setState({currentPath: path})
  }
  render() {
    const {currentPath, story} = this.state
    const {description, choice_A, choice_B, choice_A_Result, choice_B_Result, end} = currentPath
    if (end) {
      return (
        <div>
          <Description>
          {description}
          </Description>
          <ChoiceButtons onClick={() => this.props.finishedStory()}>More Stories!</ChoiceButtons>
        </div>)
    }
    if (choice_B === undefined) {
      return (
      <div>
        <Description>
        {description}
        </Description>
        <ChoiceButtons onClick={() => this.choiceButtonClicked(choice_A_Result)}>{choice_A}</ChoiceButtons>
      </div>)
    }
    return (
    <div>
      <Description>
        {description}
      </Description>
      <ChoiceButtons onClick={() => this.choiceButtonClicked(choice_A_Result)}>{choice_A}</ChoiceButtons>
      <ChoiceButtons onClick={() => this.choiceButtonClicked(choice_B_Result)}>{choice_B}</ChoiceButtons>
    </div>)
  }
}

export default ChosenStory;
import React from 'react'
import story from '../stories.js'
import {StoryButtons, PTag, MainDiv} from '../Styles/ChooseYourStoryStyle.jsx'
import ChosenStory from './ChosenStory.jsx'
import ChooseStorySize from './ChooseStorySize.jsx'

class ChooseYourStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenStory: '',
      storyClicked: false,
      createStory: false,
    }
    this.storyClicked = this.storyClicked.bind(this);
    this.finishedStory = this.finishedStory.bind(this);
    this.createStoryClicked = this.createStoryClicked.bind(this);
  }

  createStoryClicked() {
    this.setState({createStory: true})
  }

  finishedStory() {
    this.setState({chosenStory: '', storyClicked: false})
  }

  storyClicked(story) {
    this.setState({chosenStory: story, storyClicked: true})
  }
  render() {
    const {storyClicked, chosenStory, createStory} = this.state;
    if (storyClicked) {
      return (<ChosenStory chosenStory={chosenStory} finishedStory={this.finishedStory}/>)
    }
    if(createStory) {
      return(<ChooseStorySize/>)
    }
    return (<MainDiv>
      <PTag>
        Choose your story!!
      </PTag>
      {story.map((story, index) => {
        if (story[0].title) {
          return (<StoryButtons onClick={() => this.storyClicked(story)} key={index} >{story[0].title}</StoryButtons>)
        }
      })}
      <br/>
      <StoryButtons onClick={() => this.createStoryClicked()}>Create Your Own Story!!</StoryButtons>
    </MainDiv>)
  }
}
export default ChooseYourStory
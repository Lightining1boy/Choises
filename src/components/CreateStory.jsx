import React, { useState, useEffect } from 'react'
import {StoryButtons, PTag, PopUp, InnerPopUp} from '../Styles/ChooseYourStoryStyle.jsx'

const CreateStory = (props) => {
  const [startClicked, setStartClicked] = useState(false);
  const [description, setDescription] = useState('');
  const [choice_A, setChoice_A] = useState('');
  const [choice_B, setChoice_B] = useState('');
  const [title, setTitle] = useState('');
  const [start, setStart] = useState({});

  const textareaChange = (newDescription) => {
    const {value, name} = newDescription.target
    if (name === "description") {
      setDescription(value)
    } else if (name === "choice_A") {
      setChoice_A(value)
    } else if (name === "choice_B") {
      setChoice_B(value)
    } else if (name === "title") {
      setTitle(value)
    }
  }

  const saveClicked = () => {
    const startObject = {
      description: description,
      choice_A: choice_A,
      choice_B: choice_B,
      title: title
    }
    Object.assign(start, startObject)
    setStartClicked(false)
  }
  if(startClicked) {
    return(
    <PopUp>
      <InnerPopUp>
      Description:
      <textarea onChange={(e) => textareaChange(e)} name="description" value={description}></textarea>
      <br/>
      Title:
      <textarea onChange={(e) => textareaChange(e)} name="title" value={title}></textarea>
      <br/>
      Choice A:
      <textarea onChange={(e) => textareaChange(e)} name="choice_A" value={choice_A}></textarea>
      <br/>
      Choice B:
      <textarea onChange={(e) => textareaChange(e)} name="choice_B" value={choice_B}></textarea>
      <StoryButtons onClick={() => saveClicked()}>Save</StoryButtons>
      </InnerPopUp>
    </PopUp>)
  }
  return(<div>
    <PTag>Your Story Starts Here!!</PTag>
    <StoryButtons onClick={() => setStartClicked(true)}>Start</StoryButtons>
  </div>)
}
export default CreateStory;
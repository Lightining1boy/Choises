import React , {useState} from 'react'
import {StoryButtons, PTag, PopUp, InnerPopUp, StartTextArea, CreateStoryMainDiv, TrueFalseSelector} from '../Styles/ChooseYourStoryStyle.jsx'


const SmallStory = (props) => {
  const [startClicked, setStartClicked] = useState(false);
  const [description, setDescription] = useState('');
  const [choice_A, setChoice_A] = useState('');
  const [choice_B, setChoice_B] = useState('');
  const [title, setTitle] = useState('');
  const [start, setStart] = useState({});
  const [pathA, setPathA] = useState({});
  const [selectedPath, setSelectedPath] = useState('');
  const [pathClicked, setPathClicked] = useState(false);

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

  const buttonClicked = (name) => {
    if (name === 'start') {
      setChoice_A(start.choice_A);
      setChoice_B(start.choice_B);
      setDescription(start.description);
      setTitle(start.title);
      setStartClicked(true)
    }
    if (name === 'pathA') {
      setChoice_A(pathA.choice_A);
      setChoice_B(pathA.choice_B);
      setDescription(pathA.description);
      setTitle(pathA.title);
      setPathClicked(true)
      setSelectedPath('pathA')
    }
  }

  const saveClicked = (name) => {
    const path = {
      description: description,
      choice_A: choice_A,
      choice_B: choice_B,
      title: title,
      Result_A: pathA
    }
    const newObj = JSON.parse(JSON.stringify(path));
    if (name === 'start') {
      Object.assign(start, newObj)
      setStartClicked(false)
    }
    if (name === 'pathA') {
      Object.assign(pathA, newObj)
      setPathClicked(false)
    }
    setChoice_A('');
    setChoice_B('');
    setDescription('');
  }
  if(startClicked) {
    return(
    <PopUp>
      <InnerPopUp>
      Description:
      <br/>
      <StartTextArea onChange={(e) => textareaChange(e)} name="description" value={description}></StartTextArea>
      <br/>
      Title:
      <br/>
      <StartTextArea onChange={(e) => textareaChange(e)} name="title" value={title}></StartTextArea>
      <br/>
      Choice A:
      <br/>
      <StartTextArea onChange={(e) => textareaChange(e)} name="choice_A" value={choice_A}></StartTextArea>
      <br/>
      Choice B:
      <br/>
      <StartTextArea onChange={(e) => textareaChange(e)} name="choice_B" value={choice_B}></StartTextArea>
      <br/>
      <StoryButtons name={'start'} onClick={(e) => saveClicked(e.target.name)}>Save</StoryButtons>
      </InnerPopUp>
    </PopUp>)
  }
  if (pathClicked) {
    return(
      <PopUp>
        <InnerPopUp>
        Description:
        <br/>
        <StartTextArea onChange={(e) => textareaChange(e)} name="description" value={description}></StartTextArea>
        <br/>
        Choice A:
        <br/>
        <StartTextArea onChange={(e) => textareaChange(e)} name="choice_A" value={choice_A}></StartTextArea>
        <br/>
        Choice B:
        <br/>
        <StartTextArea onChange={(e) => textareaChange(e)} name="choice_B" value={choice_B}></StartTextArea>
        <br/>
        Ending:
        <br/>
        <TrueFalseSelector>
          <option>True</option>
          <option>False</option>
        </TrueFalseSelector>
        <br/>
        <StoryButtons name={selectedPath} onClick={(e) => saveClicked(e.target.name)}>Save</StoryButtons>
        </InnerPopUp>
      </PopUp>)
  }
  return(<div>
    <CreateStoryMainDiv>Your Small Story Starts Here!!</CreateStoryMainDiv>
    <StoryButtons name={'start'} onClick={(e) => buttonClicked(e.target.name)}>Start</StoryButtons>
    <br/>
    <StoryButtons name={'pathA'} onClick={(e) => buttonClicked(e.target.name)}>Path A</StoryButtons>
    <StoryButtons>Path B</StoryButtons>
    <br/>
    <StoryButtons>Path A-A</StoryButtons>
    <StoryButtons>Path A-B</StoryButtons>

    <StoryButtons>Path B-A</StoryButtons>
    <StoryButtons>Path B-B</StoryButtons>
  </div>)
}
export default SmallStory;
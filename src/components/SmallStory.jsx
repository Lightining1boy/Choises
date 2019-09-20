import React , {useState} from 'react'
import {StoryButtons, PopUp, InnerPopUp, StartTextArea, CreateStoryMainDiv, TrueFalseSelector} from '../Styles/ChooseYourStoryStyle.jsx'
import axios from 'axios'

const SmallStory = (props) => {
  const [startClicked, setStartClicked] = useState(false);
  const [description, setDescription] = useState('');
  const [choice_A, setChoice_A] = useState('');
  const [choice_B, setChoice_B] = useState('');
  const [title, setTitle] = useState('');
  const [ending, setEnding] = useState(false);
  const [selectedPath, setSelectedPath] = useState('');
  const [pathClicked, setPathClicked] = useState(false);
  const [start, setStart] = useState({});
  const [pathA, setPathA] = useState({});
  const [pathB, setPathB] = useState({});
  const [pathA_B, setPathA_B] = useState({});
  const [pathA_A, setPathA_A] = useState({});
  const [pathB_A, setPathB_A] = useState({});
  const [pathB_B, setPathB_B] = useState({});
  const [story, setStory] = useState([start, pathA, pathB, pathA_A, pathA_B, pathB_A, pathB_B])

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
    } else if (name === 'selector') {
      setEnding(value)
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
    if (name === 'pathB') {
      setChoice_A(pathB.choice_A);
      setChoice_B(pathB.choice_B);
      setDescription(pathB.description);
      setTitle(pathB.title);
      setPathClicked(true)
      setSelectedPath('pathB')
    }
    if (name === 'pathB_A') {
      setChoice_A(pathB_A.choice_A);
      setChoice_B(pathB_A.choice_B);
      setDescription(pathB_A.description);
      setTitle(pathB_A.title);
      setPathClicked(true)
      setSelectedPath('pathB_A')
    }
    if (name === 'pathB_B') {
      setChoice_A(pathB_B.choice_A);
      setChoice_B(pathB_B.choice_B);
      setDescription(pathB_B.description);
      setTitle(pathB_B.title);
      setPathClicked(true)
      setSelectedPath('pathB_B')
    }
    if (name === 'pathA_A') {
      setChoice_A(pathA_A.choice_A);
      setChoice_B(pathA_A.choice_B);
      setDescription(pathA_A.description);
      setTitle(pathA_A.title);
      setPathClicked(true)
      setSelectedPath('pathA_A')
    }
    if (name === 'pathA_B') {
      setChoice_A(pathA_B.choice_A);
      setChoice_B(pathA_B.choice_B);
      setDescription(pathA_B.description);
      setTitle(pathA_B.title);
      setPathClicked(true)
      setSelectedPath('pathA_B')
    }
  }

  const saveClicked = (name) => {
    const path = {
      description: description,
      choice_A: choice_A,
      choice_B: choice_B,
      title: title,
      ending: ending
    }
    const newObj = JSON.parse(JSON.stringify(path));
    console.log(start)
    if (name === 'start') {
      Object.assign(start, newObj)
      start.Result_A = pathA
      start.Result_B = pathB
      setStartClicked(false)
    }
    if (name === 'pathA') {
      Object.assign(pathA, newObj)
      pathA.Result_A = pathA_A;
      pathA.Result_B = pathA_B
      setPathClicked(false)
    }
    if (name === 'pathB') {
      Object.assign(pathB, newObj)
      pathB.Result_A = pathB_A;
      pathB.Result_B = pathB_B
      setPathClicked(false)
    }
    if (name === 'pathB_A') {
      Object.assign(pathB_A, newObj)
      setPathClicked(false)
    }
    if (name === 'pathB_B') {
      Object.assign(pathB_B, newObj)
      setPathClicked(false)
    }
    if (name === 'pathA_A') {
      Object.assign(pathA_A, newObj)
      setPathClicked(false)
    }
    if (name === 'pathA_B') {
      Object.assign(pathA_B, newObj)
      setPathClicked(false)
    }
    setChoice_A('');
    setChoice_B('');
    setDescription('');
    setEnding(false);
  }
  const saveStoryClicked = () => {
    console.log('getting here')
    axios.post('/newStory', {story: story})
    .then((Response) => {
      console.log(Response)
    })
    .catch((error) => {
      console.log(error)
    })
    props.smallCancelClicked()
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
        <TrueFalseSelector name={'selector'} value={ending} onChange={(e) => textareaChange(e)} >
          <option>False</option>
          <option>True</option>
        </TrueFalseSelector>
        <br/>
        <StoryButtons name={selectedPath} onClick={(e) => saveClicked(e.target.name)}>Save</StoryButtons>
        </InnerPopUp>
      </PopUp>)
  }
  return(<div>
    <CreateStoryMainDiv>Tell Your Small Story!!</CreateStoryMainDiv>
    <StoryButtons name={'start'} onClick={(e) => buttonClicked(e.target.name)}>Start</StoryButtons>
    <br/>
    <StoryButtons name={'pathA'} onClick={(e) => buttonClicked(e.target.name)}>Path A</StoryButtons>
    <StoryButtons name={'pathB'} onClick={(e) => buttonClicked(e.target.name)}>Path B</StoryButtons>
    <br/>
    <StoryButtons name={'pathA_A'} onClick={(e) => buttonClicked(e.target.name)}>Path A-A</StoryButtons>
    <StoryButtons name={'pathA_B'} onClick={(e) => buttonClicked(e.target.name)}>Path A-B</StoryButtons>

    <StoryButtons name={'pathB_A'} onClick={(e) => buttonClicked(e.target.name)}>Path B-A</StoryButtons>
    <StoryButtons name={'pathB_B'} onClick={(e) => buttonClicked(e.target.name)}>Path B-B</StoryButtons>
    <br/>
    <StoryButtons onClick={() => saveStoryClicked()}>Save Story</StoryButtons>
    <StoryButtons onClick={() => props.smallCancelClicked()}>Cancel</StoryButtons>
  </div>)
}
export default SmallStory;
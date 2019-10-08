import React , {useState} from 'react'
import {StoryButtons, PopUp, InnerPopUp, StartTextArea, CreateStoryMainDiv, TrueFalseSelector} from '../Styles/ChooseYourStoryStyle.jsx'
import axios from 'axios'

const MediumStory = (props) => {
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
  const [pathA_A_A, setPathA_A_A] = useState({})
  const [pathA_A_B, setPathA_A_B] = useState({})
  const [pathA_B_A, setPathA_B_A] = useState({})
  const [pathA_B_B, setPathA_B_B] = useState({})
  const [pathB_A_A, setPathB_A_A] = useState({})
  const [pathB_A_B, setPathB_A_B] = useState({})
  const [pathB_B_A, setPathB_B_A] = useState({})
  const [pathB_B_B, setPathB_B_B] = useState({})
  const [story, setStory] = useState([
    start, pathA, pathB, pathA_A, pathA_B, pathB_A, pathB_B, 
    pathA_A_A, pathA_A_B, pathA_B_A, pathA_B_B, pathB_A_A,
    pathB_A_B, pathB_B_A, pathB_B_B
  ])

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

  const buttonClicked = (name, object) => {
    if (name === 'start') {
      setChoice_A(start.choice_A);
      setChoice_B(start.choice_B);
      setDescription(start.description);
      setTitle(start.title);
      setStartClicked(true)
      setSelectedPath('start')
    } else {
      setChoice_A(object.choice_A);
      setChoice_B(object.choice_B);
      setDescription(object.description);
      setTitle(object.title);
      setPathClicked(true);
      setEnding(object.ending);
      setSelectedPath(name);
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
      pathB_A.Result_A = pathB_A_A
      pathB_A.Result_B = pathB_A_B
      setPathClicked(false)
    }
    if (name === 'pathB_B') {
      Object.assign(pathB_B, newObj)
      pathB_B.Result_A = pathB_B_A
      pathB_B.Result_B = pathB_B_B
      setPathClicked(false)
    }
    if (name === 'pathA_A') {
      Object.assign(pathA_A, newObj)
      pathA_A.Result_A = pathA_A_A
      pathA_A.Result_B = pathA_A_B
      setPathClicked(false)
    }
    if (name === 'pathA_B') {
      Object.assign(pathA_B, newObj)
      pathA_B.Result_A = pathA_B_A
      pathA_B.Result_B = pathA_B_B
      setPathClicked(false)
    }
    if (name === 'pathA_A_A') {
      Object.assign(pathA_A_A, newObj)
      setPathClicked(false)
    }
    if (name === 'pathA_A_B') {
      Object.assign(pathA_A_B, newObj)
      setPathClicked(false)
    }
    if (name === 'pathA_B_A') {
      Object.assign(pathA_B_A, newObj)
      setPathClicked(false)
    }
    if (name === 'pathA_B_B') {
      Object.assign(pathA_B_B, newObj)
      setPathClicked(false)
    }

    if (name === 'pathB_A_A') {
      Object.assign(pathB_A_A, newObj)
      setPathClicked(false)
    }
    if (name === 'pathB_A_B') {
      Object.assign(pathB_A_B, newObj)
      setPathClicked(false)
    }
    if (name === 'pathB_B_A') {
      Object.assign(pathB_B_A, newObj)
      setPathClicked(false)
    }
    if (name === 'pathB_B_B') {
      Object.assign(pathB_B_B, newObj)
      setPathClicked(false)
    }
    setChoice_A('');
    setChoice_B('');
    setDescription('');
    setEnding(false);
  }
  const saveStoryClicked = () => {
    axios.post('/newStory', story)
    .then((Response) => {
      console.log(Response)
    })
    .catch((error) => {
      console.log(error)
    })
    props.CancelClicked()
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
    <StoryButtons name={'start'} onClick={(e) => buttonClicked(e.target.name, start)}>Start</StoryButtons>
    <br/>
    <StoryButtons name={'pathA'} onClick={(e) => buttonClicked(e.target.name, pathA)}>Path A</StoryButtons>
    <StoryButtons name={'pathB'} onClick={(e) => buttonClicked(e.target.name, pathB)}>Path B</StoryButtons>
    <br/>
    <StoryButtons name={'pathA_A'} onClick={(e) => buttonClicked(e.target.name, pathA_A)}>Path A-A</StoryButtons>
    <StoryButtons name={'pathA_B'} onClick={(e) => buttonClicked(e.target.name, pathA_B)}>Path A-B</StoryButtons>
    
    <StoryButtons name={'pathB_A'} onClick={(e) => buttonClicked(e.target.name, pathB_A)}>Path B-A</StoryButtons>
    <StoryButtons name={'pathB_B'} onClick={(e) => buttonClicked(e.target.name, pathB_B)}>Path B-B</StoryButtons>
    <br/>
    <StoryButtons name={'pathA_A_A'} onClick={(e) => buttonClicked(e.target.name, pathA_A_A)}>Path A-A-A</StoryButtons>
    <StoryButtons name={'pathA_A_B'} onClick={(e) => buttonClicked(e.target.name, pathA_A_B)}>Path A-A-B</StoryButtons>

    <StoryButtons name={'pathA_B_A'} onClick={(e) => buttonClicked(e.target.name, pathA_B_A)}>Path A-B-A</StoryButtons>
    <StoryButtons name={'pathA_B_B'} onClick={(e) => buttonClicked(e.target.name, pathA_B_B)}>Path A-B-B</StoryButtons>

    <StoryButtons name={'pathB_A_A'} onClick={(e) => buttonClicked(e.target.name, pathB_A_A)}>Path B-A-A</StoryButtons>
    <StoryButtons name={'pathB_A_B'} onClick={(e) => buttonClicked(e.target.name, pathB_A_B)}>Path B-A-B</StoryButtons>

    <StoryButtons name={'pathB_B_A'} onClick={(e) => buttonClicked(e.target.name, pathB_B_A)}>Path B-B-A</StoryButtons>
    <StoryButtons name={'pathB_B_B'} onClick={(e) => buttonClicked(e.target.name, pathB_B_B)}>Path B-B-B</StoryButtons>
    <br/>
    <StoryButtons onClick={() => saveStoryClicked()}>Save Story</StoryButtons>
    <StoryButtons onClick={() => props.CancelClicked()}>Cancel</StoryButtons>
  </div>)
}
export default MediumStory;
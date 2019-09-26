import React, {useState} from 'react'
import SmallStory from './SmallStory.jsx'
import MediumStory from './MediumStory.jsx'
import {StorySizeButtons, Caption} from '../Styles/ChooseStorySizeStyle.jsx'

const ChooseStorySize = (props) => {
  const [smallStory, setSmallStory] = useState(false);
  const [mediumStory, setMediumStory] = useState(false);
  const [largeStory, setLargeStory] = useState(false);
  
  const CancelClicked = (size) => {
    if (size === 'small') {
      setSmallStory(false)
    } else if (size === 'medium') {
      setMediumStory(false)
    }
  } 

  if (smallStory) {
    return (
      <SmallStory CancelClicked={() => CancelClicked('small')}/>
    )
  }
  if (mediumStory) {
    return (
      <MediumStory CancelClicked={() => CancelClicked('medium')}/>
    )
  }
  return (
    <div>
      <Caption>
        Choose The Size Of Your Story!
      </Caption>
      <StorySizeButtons onClick={() => setSmallStory(true)} >Small Story</StorySizeButtons>
      <StorySizeButtons onClick={() => setMediumStory(true)} >Medium Story</StorySizeButtons>
      <StorySizeButtons onClick={() => setLargeStory(true)} >Large Story</StorySizeButtons>
      <br/>
      <StorySizeButtons onClick={() => props.cancelStoryClicked()}>Cancel</StorySizeButtons>
    </div>
  )
}
export default ChooseStorySize;
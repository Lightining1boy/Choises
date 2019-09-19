import React, {useState} from 'react'
import SmallStory from './SmallStory.jsx'
import {StorySizeButtons, Caption} from '../Styles/ChooseStorySizeStyle.jsx'

const ChooseStorySize = (props) => {
  const [smallStory, setSmallStory] = useState(false);
  const [mediumStory, setMediumStory] = useState(false);
  const [largeStory, setLargeStory] = useState(false);

  if (smallStory) {
    return (
      <SmallStory/>
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
    </div>
  )
}
export default ChooseStorySize;
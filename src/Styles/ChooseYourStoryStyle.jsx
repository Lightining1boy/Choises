import style from 'styled-components';

const StoryButtons = style.button`
color: antiquewhite;
background-color: maroon;
margin: 5px;
border-style: inset;
font-size: 20px;
border-width: thick;
border-color: bisque;
`
const PTag = style.p`
font-size: 35px;
margin-bottom: 10px;
`
const PopUp = style.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
`
const InnerPopUp = style.div`
position: absolute;
left: 25%;
right: 25%;
top: 25%;
bottom: 25%;
margin: auto;
background: white;
color: black;
`

export {
  StoryButtons,
  PTag,
  PopUp,
  InnerPopUp
}
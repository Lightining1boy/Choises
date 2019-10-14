import style from 'styled-components';

const PTag = style.h1`
font-size: 35px;
width: 93%;
background-color: maroon;
color: antiquewhite;
font-family: cursive;
border-bottom-style: inset;
border-radius: 4px;
border-bottom-width: 6px;
border-bottom-color: ghostwhite;
margin: 10px;
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
bottom: 23%;
margin: auto;
background: white;
color: darkorange;
background-color: maroon;
border-style: inset;
border-width: 5px;
border-color: beige;
font-size: larger;
font-family: cursive;
`
const StartTextArea = style.textarea`
margin: 0px;
height: 45px;
width: 335px;
`
const MainDiv = style.div`
font-size: 35px;
width: 20%;
margin-bottom: 10px;
margin-left: 40%;
`
const CreateStoryMainDiv = style.div`
width: 32%;
margin-left: 33.8%;
font-size: 35px;
background-color: maroon;
color: antiquewhite;
font-family: cursive;
border-bottom-style: inset;
border-radius: 4px;
border-bottom-width: 6px;
border-bottom-color: ghostwhite;
`
const TrueFalseSelector = style.select`
width: 15%;
font-family: cursive;
font-size: 24px;
color: darkorange;
background-color: maroon;
border: transparent;
`
export {
  PTag,
  PopUp,
  InnerPopUp,
  StartTextArea,
  MainDiv,
  CreateStoryMainDiv,
  TrueFalseSelector
}
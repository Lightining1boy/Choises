import style from 'styled-components';

const ChoiceButtons = style.button`
color: antiquewhite;
background-color: maroon;
font-size: 20px;
margin: 5px;
width: 25%;
border-style: inset;
border-width: 4px;
border-color: beige;
`
const Description = style.p`
width: 50%;
margin-left: 25%;
color: antiquewhite;
padding: 6px;
background-color: maroon;
font-size: 20px;
border-style: inset;
border-width: 5px;
border-color: beige;
`
export {
  ChoiceButtons,
  Description
}
import style from 'styled-components';

const StorySizeButtons = style.button`
color: antiquewhite;
background-color: maroon;
margin: 5px;
border-style: inset;
font-size: 20px;
border-width: thick;
border-color: bisque;
`
const Caption = style.h1`
font-size: 35px;
background-color: maroon;
color: antiquewhite;
font-family: cursive;
border-bottom-style: inset;
border-radius: 4px;
border-bottom-width: 6px;
border-bottom-color: ghostwhite;
width: 30%;
margin-left: 35%;
`
export {
  StorySizeButtons,
  Caption
}

import style from 'styled-components';

const MainPage = style.div`
  text-align: center;
  color: antiquewhite;
  margin-top: 150px;
`
const LogInButton = style.button`
color: antiquewhite;
background-color: maroon;
margin: 5px;
border-style: inset;
font-size: 20px;
border-width: thick;
border-color: bisque;
`;
const LogInText = style.input`
width: 210px;
height: 42px;
margin: 10px;
font-family: cursive;
font-size: 24px;
color: antiquewhite;
border-style: inset;
border-width: 5px;
border-color: bisque;
background-color: maroon;
padding: 5px;
`;
const Header = style.p`
font-size: 32px;
margin: -2px;
`
export {
  MainPage,
  LogInButton,
  LogInText,
  Header
}
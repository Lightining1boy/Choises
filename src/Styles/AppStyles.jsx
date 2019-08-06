import style from 'styled-components';

const MainPage = style.div`
  text-align: center;
  color: antiquewhite;
  margin-top: 250px;
`
const LogInButton = style.button`
  color: antiquewhite;
  background-color: brown;
`;
const LogInText = style.input`
  margin: 10px;
`;

export {
  MainPage,
  LogInButton,
  LogInText
}
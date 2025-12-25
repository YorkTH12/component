import logo from './logo.svg';
import './App.css';
import { Header, Body, Footer } from './func-components';
import Calendar from './func-components';
import Msgbox from './class-props';

function App() {
  return (
    <Msgbox
      text="React & React Native"
      border="solid 1px black"
      bgColor="#ccc"
      color="blue"
      fontSize="18pt"
    />
  );
}

export default App;

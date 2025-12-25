import './App.css';

import { MsgBox2 } from './func-components';

function App() {
  return (
    <MsgBox2
      text="การใช้ props ใน Functional Component"
      border="solid 1px black"
      bgColor="#ccc"
      color="red"
      fontSize="18pt"
    />
  );
}

export default App;

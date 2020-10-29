import React, {useState} from 'react';
import Popup from './components/popup';

function App() {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <div className={visible? "App opened" : "App"}>
      <button onClick={handleToggle} className="App__button button">Налоговый вычет...</button>
      {visible && <Popup onClose={handleToggle}/>}
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';

const Popup = ({onClose}) => {
  const [form, setForm] = useState("");

  const handleClosePopup = () => {
    onClose(true);
  }

  const handleChange = (e) => {
    setForm(e.target.value)
  }

  useEffect((e)=>{
    const handleKeyDown = (e) => {
      if(e.keyCode === 27){
        onClose(true);
        window.removeEventListener('keydown', handleKeyDown);        
      }      
    }
    window.addEventListener('keydown', handleKeyDown);
  })

  return (
    <div className="App__popup popup">
        <div onClick={handleClosePopup}>close</div>
        <h2>Налоговый вычет</h2>
        <p>Используйте налоговый вычет чтобы погасить ипотеку досрочно. 
          Размер налогового вычета составляет не более 13% от своего официального годового дохода.
        </p>
        <div>
          <label htmlFor="salary">Ваша зарплата в месяц</label>
          <input
            id="salary"
            name="salary"
            value={form}
            onChange={handleChange}
            placeholder="введите данные"
          />
        </div>
      </div>
  );
};

export default Popup;

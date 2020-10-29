import React, {useState, useEffect} from 'react';
import closeImg from '../img/vector.png';

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
      <div>
      
        <img onClick={handleClosePopup} src={closeImg}/>
          <h2>Налоговый вычет</h2>
          <p className="popup__description">Используйте налоговый вычет чтобы погасить ипотеку досрочно. 
            Размер налогового вычета составляет не более 13% от своего официального годового дохода.
          </p>
          <div className="popup__salary">
            <label htmlFor="salary">Ваша зарплата в месяц</label>
            <input
              id="salary"
              name="salary"
              value={form}
              onChange={handleChange}
              placeholder="Введите данные"
            />
          </div>
          <div className="popup__type">
            <p>Что уменьшаем?</p>
            <div className="popup__buttons">
              <button className="popup__button popup__button--filled">Платеж</button>
              <button className="popup__button popup__button--outlined">Срок</button>
            </div>
          </div>
          </div>
          <button className="button button--add">Добавить</button>
        
      </div>
  );
};

export default Popup;

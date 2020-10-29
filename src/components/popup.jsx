import React, {useState, useEffect} from 'react';
import closeImg from '../img/vector.png';
import checkboxImg from '../img/checkbox.png';

const Popup = ({onClose}) => {
  const [form, setForm] = useState("");
  const rub = '₽';

  const handleClosePopup = () => {
    onClose(true);
  }

  const handleChange = (e) => {
    const value = e.target.value;
    
    setForm(value);    
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
              type="number"
              onChange={handleChange}
              placeholder="Введите данные"
            />
          </div>
          
          <div className="popup__checkboxes checkboxes">
            <h3 className="checkboxes__title">Итого можете внести в качестве досрочных:</h3>
            <ul className="checkboxes__list">
              <li className="checkboxes__item checkbox">
                <input                
                  className="checkbox__field"
                  id="year-1"
                  type="checkbox"/><span></span>
                <label
                  className="checkbox__label" 
                  htmlFor="year-1">78 000 рублей <span>в 1-ый год</span>
                </label>
              </li>
              <li className="checkboxes__item checkbox">
                <input 
                  className="checkbox__field"
                  id="year-2"
                  type="checkbox"/><span></span>
                <label
                  className="checkbox__label" 
                  htmlFor="year-2">78 000 рублей <span>во 2-ой год</span>
                </label>
              </li>
              <li className="checkboxes__item checkbox">
                <input 
                  className="checkbox__field"
                  id="year-3"
                  type="checkbox"/><span></span>
                <label
                  className="checkbox__label" 
                  htmlFor="year-3">78 000 рублей <span>во 2-ой год</span>
                </label>
              </li>
              <li className="checkboxes__item checkbox">
                <input 
                  className="checkbox__field"
                  id="year-4"
                  type="checkbox"/><span></span>
                <label
                  className="checkbox__label" 
                  htmlFor="year-4">78 000 рублей <span>во 2-ой год</span>
                </label>
              </li>
            </ul>
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
    </div>
  );
};

export default Popup;

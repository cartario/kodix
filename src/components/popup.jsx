import React, {useState, useEffect, memo} from 'react';
import closeImg from '../img/vector.png';
import {getPays} from '../utils';
import {MIN_SALARY} from '../utils';

const options = ["Платеж", "Срок"];

const Popup = ({onClose}) => {
  
  const [form, setForm] = useState("");
  const [isShow, setSalary] = useState(false);
  const [active, setActive] = useState("Платеж");
  const pays = getPays(form);
   // const rub = '₽'; 

  console.log({form, isShow, active, pays});

  const handleClickRadio = (e) => {    
    const value = e.target.textContent;
    setActive(value);    
  }  
 
  const handleClick = () => {
    if(form){
      setSalary(true);      
    }    
  }

  const handleClosePopup = () => {
    onClose(true);
  }

  const handleChange = (e) => {
    const value = e.target.value;    
    setForm(value);
    setSalary(true);    
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
        <img onClick={handleClosePopup} src={closeImg} alt="close-btn"/>
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
            {form.length > 1 & form < MIN_SALARY & !pays.length? <span className="error">Не менее 12000руб</span> : ""}
          </div>
          
          {isShow &&
          <div className="popup__checkboxes checkboxes">
            <h3 className="checkboxes__title">Итого можете внести в качестве досрочных:</h3>
            <ul className="checkboxes__list">
              {pays.map((pay, i)=>
              <li className="checkboxes__item checkbox" key={pay+i}>
                <input                
                  className="checkbox__field"
                  id={`year-${i+1}`}
                  value={pay}
                  type="checkbox"/><span></span>
                <label
                  className="checkbox__label" 
                  htmlFor={`year-${i+1}`}>{pay} рублей <span>в{i===1 && "о"} {i+1}-{i===1 && "о"}й год</span>
                </label>
              </li>
              )}
              
            </ul>
          </div>}
          <div className="popup__type">
            <p>Что уменьшаем?</p>
            <div className="popup__buttons">
              {!!options && options.map((option)=>
              <button 
                key={option} 
                onClick={handleClickRadio} 
                type="radio" 
                name="paytype" 
                className={option===active ?
                "popup__button popup__button--filled":
                "popup__button popup__button--outlined"}>{option}</button>
              )}              
            </div>
          </div>
      </div>
      <button onClick={handleClick} className="button button--add">Добавить</button>  
      </div>      
    </div>
  );
};

export default memo(Popup);

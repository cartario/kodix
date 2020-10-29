import React, {useState, useEffect, memo} from 'react';
import closeImg from '../img/vector.png';
import {getPays, MIN_SALARY, options} from '../utils';
import Checkboxes from './checkboxes';

const Popup = ({onClose}) => {  
  const [form, setForm] = useState("");
  const [isShow, setSalary] = useState(false);
  const [active, setActive] = useState(options[0]);
  const pays = getPays(form);

  const invalid = form.length > 1 & form < MIN_SALARY & !pays.length;
  console.log({form, isShow, active, pays});

  const handleClickRadio = (e) => {    
    const value = e.target.textContent;
    setActive(value);    
  }  
 
  const handleClick = () => {
    if(form){
      setSalary(true);
      onClose(true);      
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
      } 
      document.body.removeEventListener('keydown', handleKeyDown);            
    }
    document.body.addEventListener('keydown', handleKeyDown);
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
              autoFocus
              id="salary"
              name="salary"              
              value={form}
              type="number"
              onChange={handleChange}
              placeholder="Введите данные"
            />
            {invalid? <span className="error">Не менее {MIN_SALARY}руб</span> : ""}
          </div>
          
          {isShow && <Checkboxes pays={pays}/>}
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
      <button onClick={handleClick} className="button button--add" disabled={invalid}>Добавить</button>  
      </div>      
    </div>
  );
};

export default memo(Popup);

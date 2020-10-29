import React, {memo} from 'react';

const Checkboxes = ({pays}) => {
  
  return (
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
    </div>
  );
};

export default memo(Checkboxes);

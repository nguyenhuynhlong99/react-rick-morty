import React from 'react';

const FilterBtn = ({ name, index, item, setPageNumber, task }) => {
  return (
    <div>
      <style jsx>
        {`
          .checked:checked + label {
            background-color: #0b5ed7;
            color: #fff;
          }

          input[type='radio'] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          onClick={() => {
            setPageNumber(1);
            task(item);
          }}
          className="form-check-input checked"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label class="btn btn-outline-primary" for={`${name}-${index}`}>
          {item}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;

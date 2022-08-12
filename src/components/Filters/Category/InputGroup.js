import React from 'react';

const InputGroup = ({ total, setId, name }) => {
  return (
    <div class="input-group mb-3">
      <select
        class="form-select"
        id={name}
        onChange={(e) => setId(e.target.value)}
      >
        <option value="1" selected>
          Choose...
        </option>
        {[...Array(total).keys()].map((num) => {
          return (
            <option value={num + 1}>
              {name} - {num + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;

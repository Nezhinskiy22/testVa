import React from "react";

const Select = ({ setPeriod, selectData }) => {
  return (
    <div>
      <label htmlFor="days">Choose period: </label>
      <select
        name="days"
        id="days"
        onChange={(e) => {
          setPeriod(e.target.value);
        }}
      >
        {selectData.map((option) => (
          <option value={option.value} key={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

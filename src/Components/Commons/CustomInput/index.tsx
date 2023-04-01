import React, { useState } from 'react';

interface IProps {
  value: string;
  fieldLabel: string;
  fieldName: string;
  type?: React.HTMLInputTypeAttribute;
}

export const CustomInput = () => {
  return (
    <div style={{ display: 'grid' }}>
      <span>{inputValues}</span>
      <input id="input" value={inputValues} onChange={inputChange} type={} />
    </div>
  );
};

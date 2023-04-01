import React, { useState } from 'react';

interface IProps {
  value: string;
  fieldLabel: string;
  fieldName: string;
  type?: React.HTMLInputTypeAttribute;
}

export const CustomInput = ({ value, fieldLabel, fieldName, type }: IProps) => {
  return (
    <div style={{ display: 'grid' }}>
      <span>{fieldLabel}</span>
      <input value={value} type={type} />
    </div>
  );
};

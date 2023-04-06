import React from 'react';

export interface InputProps {
  type: string;
  width: string;
}

export const Input = ({ type, width }: InputProps) => {
  return (
    <div>
      <input type={type} style={{ width: width }} />
    </div>
  );
};

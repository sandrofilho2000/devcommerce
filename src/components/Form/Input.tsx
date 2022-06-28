import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

interface Props {
  name: string;
  label?: string;
}
type InputProps = JSX.IntrinsicElements['input'] & Props;

export const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label ? (
        <label className="flex w-full flex-col">
          {label}
          <input ref={inputRef} defaultValue={defaultValue} {...rest} />
        </label>
      ) : (
        <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      )}
    </>
  );
};

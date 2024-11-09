import React from "react";

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
}) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default TextInput;

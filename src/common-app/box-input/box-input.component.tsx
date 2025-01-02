import React from "react";
import { useAppFunctions } from "../../hooks";
import "./box-input.styles.scss";
import { User } from "../../core";

interface Props {
  name: string;
  pl?: string;
  type: string;
  rq?: boolean;
  value?: User[keyof User];
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const BoxInput: React.FC<Props> = (props) => {
  const { name, pl, type, rq = false, value, onChange } = props;

  const { capitalizeFirst } = useAppFunctions();

  return (
    <div className={`boxInput_90 boxInput_${name}`}>
      <label htmlFor="name">{capitalizeFirst(name)}</label>
      <input
        value={value ?? ""}
        onChange={onChange}
        min={0}
        type={type}
        placeholder={pl}
        id={name}
        name={name}
        required={rq}
      />
    </div>
  );
};
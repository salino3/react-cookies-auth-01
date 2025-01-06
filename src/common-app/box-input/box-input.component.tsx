import React from "react";
import { useAppFunctions } from "../../hooks";
import { User } from "../../core";
import "./box-input.styles.scss";

interface Props {
  name: string;
  pl?: string;
  type: string;
  txt?: string;
  rq?: boolean;
  value?: User[keyof User];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BoxInput: React.FC<Props> = (props) => {
  const { name, pl, type, txt, rq = false, value, onChange } = props;

  const { capitalizeFirst } = useAppFunctions();

  return (
    <div className={`boxInput_90 boxInput_${name}`}>
      {txt && (
        <label htmlFor={name}>{`${capitalizeFirst(txt || "")}${
          rq ? "" : " (optional)"
        }`}</label>
      )}
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

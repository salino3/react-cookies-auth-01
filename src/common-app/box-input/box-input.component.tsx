import React from "react";
import "./box-input.styles.scss";

interface Props {
  name: string;
  pl?: string;
  type: string;
}

export const BoxInput: React.FC<Props> = (props) => {
  const { name, pl, type } = props;
  return (
    <div className={`boxInput_90 boxInput_${name}`}>
      <label htmlFor="name">Name</label>
      <input type={type} placeholder={pl} id={name} name={name} required />
    </div>
  );
};

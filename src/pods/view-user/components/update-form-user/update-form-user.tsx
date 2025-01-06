import React from "react";
import { BoxInput } from "../../../../common-app";
import "./update-form-user.styles.scss";

export const UpdateFormUser: React.FC = () => {
  return (
    <div className="containerFormUpdateUser">
      <form id="updateFormUser">
        <BoxInput name="Name" txt="name" type="text" pl="Name" value={""} rq />
      </form>
    </div>
  );
};

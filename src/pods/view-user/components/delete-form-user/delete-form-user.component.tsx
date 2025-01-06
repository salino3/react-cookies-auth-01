import React, { useState } from "react";
import { BoxInput } from "../../../../common-app";
import "./delete-form-user.styles.scss";

export const DeleteFormUser: React.FC = () => {
  const [answer, setAnswer] = useState<string>("");
  return (
    <div className="containerFormDeleteUser">
      <form id="deleteFormUser">
        <p>
          <span> Are you sure you want to delete your profile?</span>{" "}
          <span>
            Please type "<b>YES</b>" below to confirm.
          </span>
          <br />
          <strong>Warning:</strong>
          <span>This action cannot be undone.</span>
        </p>
        <BoxInput
          name="answer"
          type="text"
          rq
          value={answer}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setAnswer(event?.target.value)
          }
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

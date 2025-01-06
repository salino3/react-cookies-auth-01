import React, { useState } from "react";
import { ServicesApp } from "../../../../core";
import { useAppFunctions } from "../../../../hooks";
import { BoxInput } from "../../../../common-app";
import "./delete-form-user.styles.scss";

export const DeleteFormUser: React.FC<{ id: number }> = ({ id }) => {
  const { closeSession } = useAppFunctions();
  const [answer, setAnswer] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(id);
    if (answer === "Yes") {
      ServicesApp?.deleteUser(String(id)).then(() => closeSession());
    } else {
      alert("You must type 'Yes' to confirm the deletion");
      setAnswer("");
    }
  }

  return (
    <div className="containerFormDeleteUser">
      <form id="deleteFormUser" onSubmit={handleSubmit}>
        <p>
          <span> Are you sure you want to delete your profile?</span>{" "}
          <span>
            Please type "<b>Yes</b>" below to confirm.
          </span>
          <br />
          <strong>Warning:</strong>
          <span>This action cannot be undone.</span>
        </p>
        <BoxInput
          name="answer"
          type="text"
          rq
          value={answer.trim()}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setAnswer(event?.target.value)
          }
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

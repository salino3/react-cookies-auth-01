import React, { useState } from "react";
import { BoxInput } from "../../../../common-app";
import { User } from "../../../../core";
import "./form-login.styles.scss";

export const FormLogin: React.FC = () => {
  const [formData, setFormData] = useState<User>({
    name: "",
    surname: "",
    email: "",
    password: "",
    age: 0,
  });

  const hanldeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    // TODO: Validate form inputs
    // TODO: Call API to register user
    console.log("Form submitted");
    // Reset form inputs
    // ResetFormInputs();
  };
  return (
    <form id="LoginForm" onSubmit={hanldeSubmit}>
      <BoxInput
        value={formData?.name || ""}
        name="name"
        pl="Name"
        type="text"
        rq
      />
      <BoxInput
        value={formData?.surname || ""}
        name="surname"
        pl="Surname"
        type="text"
      />
      <BoxInput
        value={formData?.email || ""}
        name="email"
        pl="Email"
        type="text"
        rq
      />
      <BoxInput
        value={formData?.password || ""}
        name="password"
        pl="Password"
        type="password"
        rq
      />
      <BoxInput
        value={formData?.age || ""}
        name="age"
        pl="Age"
        type="number"
        rq
      />
    </form>
  );
};

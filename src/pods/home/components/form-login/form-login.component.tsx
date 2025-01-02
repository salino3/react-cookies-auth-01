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
    if (formData?.age < 18) {
      alert("You must be 18 years old or older to register");
      return;
    }
    if (formData?.password && formData?.password?.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    // TODO: Call API to register user
    console.log("Form submitted", formData);
    // Reset form inputs
    // ResetFormInputs();
  };

  const handleChange =
    (key: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Form changed", key, formData);
      setFormData({ ...formData, [key]: event.target.value });
    };

  return (
    <form id="LoginForm" onSubmit={hanldeSubmit}>
      <BoxInput
        value={formData?.name || ""}
        onChange={handleChange("name")}
        name="name"
        pl="Name"
        type="text"
        rq
      />
      <BoxInput
        value={formData?.surname || ""}
        onChange={handleChange("surname")}
        name="surname"
        pl="Surname"
        type="text"
      />
      <BoxInput
        value={formData?.email || ""}
        onChange={handleChange("email")}
        name="email"
        pl="Email"
        type="text"
        rq
      />
      <BoxInput
        value={formData?.password || ""}
        onChange={handleChange("password")}
        name="password"
        pl="Password"
        type="password"
        rq
      />
      <BoxInput
        value={formData?.age || ""}
        onChange={handleChange("age")}
        name="age"
        pl="Age"
        type="number"
        rq
      />
      <button type="submit">Click</button>
    </form>
  );
};

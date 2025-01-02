import React, { useState } from "react";
import { BoxInput } from "../../../../common-app";
import { ServicesApp, UserRegisterForm } from "../../../../core";
import "./form-register.styles.scss";

export const FormRegister: React.FC = () => {
  const [formData, setFormData] = useState<UserRegisterForm>({
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordConfirm: "",
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
    if (formData?.password !== formData?.passwordConfirm) {
      alert("Passwords do not match");
      return;
    }
    ServicesApp?.loginUser(formData);
    console.log("Form submitted", formData);
  };

  const handleChange =
    (key: keyof UserRegisterForm) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Form changed", key, formData);
      setFormData({ ...formData, [key]: event.target.value });
    };

  return (
    <form id="RegisterForm" onSubmit={hanldeSubmit}>
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
        value={formData?.passwordConfirm || ""}
        onChange={handleChange("passwordConfirm")}
        name="passwordConfirm"
        pl="Confirm password"
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

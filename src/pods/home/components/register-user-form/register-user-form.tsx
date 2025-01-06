import React, { useState } from "react";
import { BoxInput } from "../../../../common-app";
import { ServicesApp, UserRegisterForm } from "../../../../core";
import "./register-user-form.styles.scss";

export const UserFormRegister: React.FC = () => {
  const [formData, setFormData] = useState<UserRegisterForm>({
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordConfirm: "",
    age: null,
  });

  const hanldeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (formData?.age && formData?.age < 18) {
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
    ServicesApp?.registerUser(formData).then(() => {
      setFormData({
        name: "",
        surname: "",
        email: "",
        password: "",
        passwordConfirm: "",
        age: null,
      });
      alert("User registered successfully");
    });
  };

  const handleChange =
    (key: keyof UserRegisterForm) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [key]: event.target.value });
    };

  return (
    <form id="UserRegisterForm" onSubmit={hanldeSubmit}>
      <BoxInput
        txt="Name"
        value={formData?.name || ""}
        onChange={handleChange("name")}
        name="name"
        pl="Name"
        type="text"
        rq
      />
      <BoxInput
        txt="Surname"
        value={formData?.surname || ""}
        onChange={handleChange("surname")}
        name="surname"
        pl="Surname"
        type="text"
      />
      <BoxInput
        txt="Email"
        value={formData?.email.toLowerCase().trim() || ""}
        onChange={handleChange("email")}
        name="email"
        pl="Email"
        type="text"
        rq
      />
      <BoxInput
        txt="Password"
        value={formData?.password.trim() || ""}
        onChange={handleChange("password")}
        name="password"
        pl="Password"
        type="password"
        rq
      />
      <BoxInput
        txt="Confirm password"
        value={formData?.passwordConfirm || ""}
        onChange={handleChange("passwordConfirm")}
        name="passwordConfirm"
        pl="Confirm password"
        type="password"
        rq
      />
      <BoxInput
        txt="Age"
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoxInput } from "../../../../common-app";
import { ServicesApp, UserLoginForm } from "../../../../core";
import { routesApp } from "../../../../router";
import "./form-login-user.styles.scss";

export const FormLoginUser: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserLoginForm>({
    email: "",
    password: "",
  });

  const hanldeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    ServicesApp?.loginUser(formData).then(() => {
      navigate(routesApp?.users);
    });
  };

  const handleChange =
    (key: keyof UserLoginForm) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [key]: event.target.value });
    };

  return (
    <form id="LoginForm" onSubmit={hanldeSubmit}>
      <BoxInput
        txt="Email"
        value={formData?.email || ""}
        onChange={handleChange("email")}
        name="email"
        pl="Email"
        type="text"
        rq
      />
      <BoxInput
        txt="Password"
        value={formData?.password || ""}
        onChange={handleChange("password")}
        name="password"
        pl="Password"
        type="password"
        rq
      />

      <button type="submit">Click</button>
    </form>
  );
};

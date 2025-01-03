import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoxInput } from "../../../../common-app";
import { ServicesApp, CompanyLoginForm } from "../../../../core";
import { routesApp } from "../../../../router";
import "./form-login-company.styles.scss";

export const FormLoginCompany: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CompanyLoginForm>({
    email: "",
    password: "",
  });

  const hanldeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    ServicesApp?.loginCompany(formData).then(() => {
      navigate(routesApp?.companies);
    });
  };

  const handleChange =
    (key: keyof CompanyLoginForm) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [key]: event.target.value });
    };

  return (
    <form id="LoginForm" onSubmit={hanldeSubmit}>
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

      <button type="submit">Click</button>
    </form>
  );
};

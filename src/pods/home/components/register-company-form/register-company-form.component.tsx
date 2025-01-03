import React, { useState } from "react";
import { CompanyRegisterForm, ServicesApp } from "../../../../core";
import { BoxInput } from "../../../../common-app";
import "./register-company-form.styles.scss";

export const CompanyFormRegister: React.FC = () => {
  const [formData, setFormData] = useState<CompanyRegisterForm>({
    name: "",
    email: "",
    industry: "",
    password: "",
    passwordConfirm: "",
    head_quarters: "",
  });

  const hanldeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (formData?.password && formData?.password?.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    if (formData?.password !== formData?.passwordConfirm) {
      alert("Passwords do not match");
      return;
    }
    ServicesApp?.registerCompany(formData).then(() => {
      setFormData({
        name: "",
        email: "",
        industry: "",
        password: "",
        passwordConfirm: "",
        head_quarters: "",
      });
      alert("Company registered successfully");
    });
  };

  const handleChange =
    (key: keyof CompanyRegisterForm) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [key]: event.target.value });
    };

  return (
    <form id="CompanyRegisterForm" onSubmit={hanldeSubmit}>
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
        txt="Email"
        value={formData?.email.toLowerCase().trim() || ""}
        onChange={handleChange("email")}
        name="email"
        pl="Email"
        type="text"
        rq
      />
      <BoxInput
        txt="Industry"
        value={formData?.industry || ""}
        onChange={handleChange("industry")}
        name="industry"
        pl="Industry"
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
        txt="Head quarter"
        value={formData?.head_quarters || ""}
        onChange={handleChange("head_quarters")}
        name="head_quarters"
        pl="Head quarter"
        type="text"
      />
      <button type="submit">Click</button>
    </form>
  );
};

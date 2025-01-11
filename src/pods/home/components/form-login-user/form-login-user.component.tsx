import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppFunctions } from "../../../../hooks";
import {
  GlobalAppContext,
  GlobalStateApp,
  ServicesApp,
  UserLoginForm,
} from "../../../../core";
import { BoxInput } from "../../../../common-app";
import { routesApp } from "../../../../router";
import "./form-login-user.styles.scss";

export const FormLoginUser: React.FC = () => {
  const navigate = useNavigate();

  const { getAuthToken } = useAppFunctions();
  const { loginAccount } = useContext<GlobalStateApp>(GlobalAppContext);

  const [formData, setFormData] = useState<UserLoginForm>({
    email: "",
    password: "",
  });

  const hanldeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    ServicesApp?.loginUser(formData).then((res: any) => {
      // que hago con res?
      const myAuthCookie = getAuthToken();
      console.log("herecookie:", myAuthCookie);
      loginAccount(myAuthCookie);

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

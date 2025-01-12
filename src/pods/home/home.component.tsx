import React, { useRef, useState } from "react";
import {
  CompanyFormRegister,
  FormLoginCompany,
  FormLoginUser,
  UserFormRegister,
} from "./components";
import { Header } from "../../common-app";
import "./home.styles.scss";

export const Home: React.FC = () => {
  const detailsRef1 = useRef<HTMLDetailsElement>(null);
  const detailsRef2 = useRef<HTMLDetailsElement>(null);
  const detailsRef3 = useRef<HTMLDetailsElement>(null);
  const detailsRef4 = useRef<HTMLDetailsElement>(null);

  const [refresh, setRefresh] = useState<number>(0);

  const handleToggle = () => {
    setRefresh((prev) => prev + 1);
  };

  return (
    <div className="rootHomePage">
      <Header />
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
      {/* onToggle shoots everytime property open of <details> change value  */}
      <details name="form" ref={detailsRef1} onToggle={handleToggle}>
        <summary>Register User</summary>
        {detailsRef1.current && detailsRef1.current.open && (
          <UserFormRegister />
        )}
      </details>
      <details name="form" ref={detailsRef2} onToggle={handleToggle}>
        <summary>Register Company</summary>
        {detailsRef2.current && detailsRef2.current.open && (
          <CompanyFormRegister />
        )}
      </details>
      <hr />
      <details name="form" ref={detailsRef3} onToggle={handleToggle}>
        <summary>Login Users</summary>
        {detailsRef3.current && detailsRef3.current.open && <FormLoginUser />}
      </details>
      <details name="form" ref={detailsRef4} onToggle={handleToggle}>
        <summary>Login Companies</summary>
        {detailsRef4.current && detailsRef4.current.open && (
          <FormLoginCompany />
        )}
      </details>
    </div>
  );
};

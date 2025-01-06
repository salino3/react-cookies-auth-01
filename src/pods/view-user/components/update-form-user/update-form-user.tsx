import React, { useState } from "react";
import { BoxInput } from "../../../../common-app";
import { ServicesApp, User } from "../../../../core";
import "./update-form-user.styles.scss";

interface Props {
  user: User;
  setAction: React.Dispatch<React.SetStateAction<string>>;
}

export const UpdateFormUser: React.FC<Props> = ({ user, setAction }) => {
  const [formData, setFormData] = useState<User>(user);

  function hanldeSubmit(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    if (formData?.age && formData?.age < 18) {
      alert("You must be 18 years old or older to register");
      return;
    }

    ServicesApp?.updateUser(formData)
      .then(() => {
        ServicesApp?.getUserById(String(user?.id) || "");
      })
      .then(() => setAction(""));
  }

  const handleChange =
    (key: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [key]: event.target.value });
    };

  return (
    <div className="containerFormUpdateUser">
      <form id="updateFormUser" onSubmit={hanldeSubmit}>
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
    </div>
  );
};

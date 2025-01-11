import React from "react";
import { useNavigate } from "react-router-dom";
import { routesApp } from "../../../../router";
import { User } from "../../../../core";
import "./user-card.styles.scss";

interface Props {
  user: User;
}

export const UserCard: React.FC<Props> = (props) => {
  const { user } = props;

  const navigate = useNavigate();

  return (
    <tr
      onClick={() => navigate(routesApp?.user(String(user?.id)))}
      className="trCard"
    >
      <th scope="row"></th>
      <td>{user?.name}</td>
      <td>{user?.surname}</td>
      <td>{user?.email}</td>
    </tr>
  );
};

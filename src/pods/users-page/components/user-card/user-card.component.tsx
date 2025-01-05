import React from "react";
import { useNavigate } from "react-router-dom";
import { routesApp } from "../../../../router";
import { User } from "../../../../core";
import "./user-card.styles.scss";

interface Props {
  setNumList: React.Dispatch<React.SetStateAction<number>>;
  user: User;
  lastUserId: number | undefined;
}

export const UserCard: React.FC<Props> = (props) => {
  const { setNumList, user, lastUserId } = props;

  const navigate = useNavigate();

  return user?.id === lastUserId ? (
    <tr>
      <td colSpan={4} className="smallNoPadding">
        <button
          className="secundaryBtn"
          onClick={() => setNumList((prev) => prev + 5)}
        >
          <small>see more</small>
        </button>
      </td>
    </tr>
  ) : (
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

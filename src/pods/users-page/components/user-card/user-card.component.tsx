import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { routesApp } from "../../../../router";
import { GlobalAppContext, GlobalStateApp, User } from "../../../../core";
import "./user-card.styles.scss";

interface Props {
  user: User;
}

export const UserCard: React.FC<Props> = (props) => {
  const { user } = props;
  const { state } = useContext<GlobalStateApp>(GlobalAppContext);
  const { currentAccount } = state;

  const navigate = useNavigate();

  return (
    <tr
      onClick={() => navigate(routesApp?.user(String(user?.id)))}
      className={`trCard  ${
        currentAccount && currentAccount?.id === user?.id && "you"
      }`}
    >
      <th scope="row" className={currentAccount?.id !== user?.id ? "th" : ""}>
        {currentAccount && currentAccount?.id === user?.id && "You"}
      </th>
      <td>{user?.name}</td>
      <td>{user?.surname}</td>
      <td>{user?.email}</td>
    </tr>
  );
};

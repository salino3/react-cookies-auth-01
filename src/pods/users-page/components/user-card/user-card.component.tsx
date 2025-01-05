import React, { useState } from "react";
import { User } from "../../../../core";
import "./user-card.styles.scss";

interface Props {
  setNumList: React.Dispatch<React.SetStateAction<number>>;
  user: User;
  lastUserId: number | undefined;
}

export const UserCard: React.FC<Props> = (props) => {
  const { setNumList, user, lastUserId } = props;

  return user?.id === lastUserId ? (
    <tr>
      <td colSpan={4} className="smallNoPadding">
        <button onClick={() => setNumList((prev) => prev + 5)}>
          <small>see more</small>
        </button>
      </td>
    </tr>
  ) : (
    <tr className="trCard">
      <th scope="row"></th>
      <td>{user?.name}</td>
      <td>{user?.surname}</td>
      <td>{user?.email}</td>
    </tr>
  );
};

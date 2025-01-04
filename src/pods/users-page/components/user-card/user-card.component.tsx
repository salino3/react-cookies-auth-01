import React from "react";
import { User } from "../../../../core";

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
          <small>click here</small>
        </button>
      </td>
    </tr>
  ) : (
    <tr>
      <th scope="row"></th>
      <td>{user?.name}</td>
      <td>{user?.surname}</td>
      <td>{user?.email}</td>
    </tr>
  );
};

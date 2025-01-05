import React from "react";
import { useParams } from "react-router-dom";
import "./view-user.styles.scss";

export const ViewUser: React.FC = () => {
  const { id } = useParams();

  return <div>User view: {id}</div>;
};

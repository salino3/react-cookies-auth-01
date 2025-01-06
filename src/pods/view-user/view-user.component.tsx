import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AxiosResponse } from "axios";
import { ServicesApp, User } from "../../core";
import { BaseModal } from "../../common";
import { UpdateFormUser } from "./components";
import { routesApp } from "../../router";
import "./view-user.styles.scss";

export const ViewUser: React.FC = () => {
  const { id } = useParams();

  const [userData, setUserData] = useState<User>({
    name: "",
    surname: "",
    email: "",
    age: null,
  });

  const [action, setAction] = useState<string>("");

  useEffect(() => {
    ServicesApp?.getUserById(id || "")
      .then((res: AxiosResponse<User, any>) => setUserData(res.data))
      .catch((err: any) => console.error(err));
  }, []);

  return (
    <div className="rootUserPage">
      <section className="breadcrumbs">
        <span>
          <Link to={routesApp?.dashboard}>Dashboard</Link>
        </span>
        /
        <span>
          <Link to={routesApp?.users}>Users</Link>
        </span>
        /
        <span>
          <Link to={routesApp?.user(String(id))}>User</Link>
        </span>
      </section>
      <div className="containerUserPage">
        <div className="cardUserPage">
          <div className="card-body">
            <h5 className="card-title">
              <span>Email:</span> <span>{userData?.email}</span>
            </h5>
            <p className="card-text">
              <span>Surname:</span> <span>{userData?.surname}</span>
            </p>
            <p className="card-text">
              <span>Name:</span> <span>{userData?.name}</span>
            </p>
            <p className="card-text">
              <span>Age:</span> <span>{userData?.age}</span>
            </p>
            <div className="boxbtnsCard">
              <button
                className="btnUpdateCard"
                onClick={() => setAction("update")}
              >
                Update
              </button>
              <button
                className="btnDeleteCard"
                onClick={() => setAction("delete")}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {action && (
        <BaseModal
          title={action}
          showModal={!!action}
          onClose={() => setAction("")}
        >
          {action === "update" ? (
            <UpdateFormUser user={userData} setAction={setAction} />
          ) : (
            <div>Delete</div>
          )}
        </BaseModal>
      )}
    </div>
  );
};

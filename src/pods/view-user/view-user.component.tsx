import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AxiosResponse } from "axios";
import {
  GlobalAppContext,
  GlobalStateApp,
  ServicesApp,
  User,
} from "../../core";
import { useAppFunctions } from "../../hooks";
import { BaseModal } from "../../common";
import { DeleteFormUser, UpdateFormUser } from "./components";
import { routesApp } from "../../router";
import "./view-user.styles.scss";

export const ViewUser: React.FC = () => {
  const { id } = useParams();

  const { state } = useContext<GlobalStateApp>(GlobalAppContext);
  const { currentAccount } = state;
  const { capitalizeFirst } = useAppFunctions();

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
            {currentAccount && String(currentAccount?.id) === id && (
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
            )}
          </div>
        </div>
      </div>
      {/* Modal */}
      {action && (
        <BaseModal
          minHeight={action === "delete" ? "40%" : "70%"}
          title={capitalizeFirst(action)}
          showModal={!!action}
          onClose={() => setAction("")}
        >
          {action === "update" ? (
            <UpdateFormUser user={userData} setAction={setAction} />
          ) : (
            <DeleteFormUser id={userData?.id || 0} />
          )}
        </BaseModal>
      )}
    </div>
  );
};

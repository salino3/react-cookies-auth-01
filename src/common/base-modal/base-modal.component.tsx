import React from "react";
import "./base-modal.styles.scss";

interface Props {
  title?: string;
  children: JSX.Element | JSX.Element[];
  onClose?: () => void;
  showModal: boolean;
}

export const BaseModal: React.FC<Props> = (props) => {
  const { title, children, onClose, showModal } = props;

  if (!showModal) {
    return null;
  }
  return (
    <div className="base-modal">
      <div className="containerModal">
        <div className="headerModal">
          {title && <h3>{title}</h3>}
          <span onClick={onClose}>Close</span>
        </div>
        <div className="bodyModal">{children}</div>
      </div>
    </div>
  );
};

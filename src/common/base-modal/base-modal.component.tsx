import React, { useEffect, useRef } from "react";
import closeIcon from "/assets/icons/nice-X_1.svg";
import "./base-modal.styles.scss";

interface Props {
  title?: string;
  children: JSX.Element | JSX.Element[];
  onClose?: () => void;
  showModal: boolean;
  minHeight?: string;
}

export const BaseModal: React.FC<Props> = (props) => {
  const { title, children, onClose, showModal, minHeight = "70%" } = props;

  if (!showModal) {
    return null;
  }

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        if (onClose) {
          onClose();
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="rootBaseModal">
      <div
        className="containerModal"
        style={{
          minHeight: minHeight,
        }}
        ref={containerRef}
      >
        <div className="headerModal">
          {title && <h3>{title}</h3>}
          <span onClick={onClose}>
            <img src={closeIcon} alt="Close icon" />
          </span>
        </div>
        <div className="bodyModal">{children}</div>
      </div>
    </div>
  );
};

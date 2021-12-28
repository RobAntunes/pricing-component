import React, { FC } from "react";

import "./styles.css";

interface Props {
  buttonText: string;
}

const ColumnButton: FC<Props> = ({ buttonText }) => {
  return (
    <button className="select-plan" type="button">
      <b>{buttonText}</b>
    </button>
  );
};

export default ColumnButton;
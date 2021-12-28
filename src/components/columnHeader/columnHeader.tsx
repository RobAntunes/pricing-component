import React, { FC } from "react";

import "./styles.css";

interface Props {
  name: string;
  price: number;
}

const ColumnHeader: FC<Props> = ({ name, price }) => {
  return (
    <div className="column__header__wrapper">
      <h2 className="column__header">
        <b>{name}</b>
      </h2>
      <p className="column__price">{+price > 0 ? `$${price}` : "Free"}</p>
    </div>
  );
};

export default ColumnHeader;

import React, { FC } from "react";

import "./styles.css";

interface Props {
  feature: string
}

const ColumnFeature: FC<Props> = ({ feature }) => {
  return <li className="column__features__feature">{feature}</li>;
};

export default ColumnFeature;

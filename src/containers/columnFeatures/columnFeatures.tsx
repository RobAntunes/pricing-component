import React, { FC } from "react";
import ColumnFeature from "../../components/columnFeature/columnFeature";

import "./styles.css";

interface Props {
  features: string[];
}

const ColumnFeatures: FC<Props> = ({ features }) => {
  return (
    <ul className="column__features">
      {features.map((feature) => (
        <ColumnFeature feature={feature} />
      ))}
    </ul>
  );
};

export default ColumnFeatures;

import React, { FC } from "react";

import ColumnButton from "../columnButton/columnButton";
import ColumnFeatures from "../../containers/columnFeatures/columnFeatures";
import ColumnHeader from "../columnHeader/columnHeader";
import ColumnDescriptor from "../columnDescriptor/columnDescriptor";

import "./styles.css";

interface Props {
  i: number;
  name: string;
  price: number;
  descriptors: string[];
  features: string[];
  buttonText: string;
}

const PricingColumn: FC<Props> = ({
  i,
  name,
  price,
  descriptors,
  features,
  buttonText,
}) => {
  return (
      <div className={`column pricing-column pricing-column${i}`}>
        <ColumnHeader name={name} price={price} />
        <ColumnDescriptor content={descriptors[0]} />
        <ColumnFeatures features={features} />
        <ColumnDescriptor content={descriptors[1]} />
        <ColumnButton buttonText={buttonText} />
      </div>
  );
};

export default PricingColumn;

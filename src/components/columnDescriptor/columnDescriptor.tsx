import React, {FC} from "react";

import "./styles.css";

interface Props {
  content: string
}

const ColumnDescriptor: FC<Props> = ({ content }) => {
  return (
    <p className="column__descriptor">
      <b>{content}</b>
    </p>
  );
};

export default ColumnDescriptor;

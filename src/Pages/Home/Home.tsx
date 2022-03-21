import React from "react";
import { row } from "../../components/Table/Table.types";
import Table from "../../components/Table/Table";

const Home = ({
  rowData,
  title,
  footer,
}: {
  rowData: Array<row>;
  title: string;
  footer: string;
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <Table rowData={rowData} />
      </div>
      <br />
      <h5>{footer}</h5>
    </div>
  );
};

export default Home;

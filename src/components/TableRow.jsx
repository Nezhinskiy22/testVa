import React from "react";

const TableRow = ({ data }) => {
  return (
    <tr>
      <td>{data.session}</td>
      <td>{data.agentsOnCall}</td>
      <td>{data.startedAt}</td>
      <td>{data.finishedAt}</td>
      <td>{data.messages.length}</td>
      <td>
        <a href={data.latestPage}>Latest page</a>
      </td>
    </tr>
  );
};

export default TableRow;

import React from "react";

const TableRow = ({ data }) => {
  return (
    <tbody>
      <tr>
        <td>{data.session}</td>
        <td>{data.agentsOnCall}</td>
        <td>{data.startedAt}</td>
        <td>{data.finishedAt}</td>
        <td>{data.messages.length}</td>
        <td>
          <a href={data.latestPage} target="_blank" rel="noreferrer">
            Latest page
          </a>
        </td>
      </tr>
    </tbody>
  );
};

export default TableRow;
